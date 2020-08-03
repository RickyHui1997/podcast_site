from rest_framework import serializers
from rest_framework.exceptions import APIException
from .models import Review
from imdb import IMDb


def get_imdb_score(title, year):
    ia = IMDb()
    movies = ia.search_movie(title)
    movie_id = None
    if not movies:
        return None, None
    if title.lower() in movies[0]["title"].lower() and year == movies[0]["year"]:
        movie_id = movies[0].movieID
    else:
        return None, None

    movie = ia.get_movie(movie_id)
    return movie["title"], movie["rating"]


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = (
            "movie_name",
            "year_released",
            "ric_score",
            "pat_score",
            "ref_score",
            "review_date",
            "imdb_rating",
        )
        read_only_fields = ("imdb_rating",)

    def create(self, validated_data):
        imdb_title, internet_rating = get_imdb_score(
            validated_data["movie_name"], validated_data["year_released"]
        )
        # TODO: check duplicate movies and error if imdb search fail
        if not imdb_title:
            print("fried")
            raise APIException("Title not found on imdb")

        if "review_date" in validated_data:
            review = Review.objects.create(
                movie_name=imdb_title,
                year_released=validated_data["year_released"],
                ric_score=validated_data["ric_score"],
                pat_score=validated_data["pat_score"],
                ref_score=validated_data["ref_score"],
                review_date=validated_data["review_date"],
                imdb_rating=internet_rating,
            )
        else:
            review = Review.objects.create(
                movie_name=imdb_title,
                year_released=validated_data["year_released"],
                ric_score=validated_data["ric_score"],
                pat_score=validated_data["pat_score"],
                ref_score=validated_data["ref_score"],
                imdb_rating=internet_rating,
            )
        return review
