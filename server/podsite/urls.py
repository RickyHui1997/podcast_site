from rest_framework import routers
from podsite.api import ReviewViewSet

router = routers.DefaultRouter()
router.register("api/reviews", ReviewViewSet, "reviews")

urlpatterns = router.urls
