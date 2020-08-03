from django.db import models
from django.utils import timezone

# Create your models here.
class Review(models.Model):
    # retrieve from user enter
    movie_name = models.CharField(max_length=100)
    year_released = models.IntegerField()
    ric_score = models.FloatField()
    pat_score = models.FloatField()
    ref_score = models.FloatField()
    review_date = models.DateField(default=timezone.now().date())
    imdb_rating = models.FloatField()

