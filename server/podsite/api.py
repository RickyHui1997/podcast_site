from podsite.models import Review
from rest_framework import viewsets, permissions
from .serializers import ReviewSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ReviewSerializer
