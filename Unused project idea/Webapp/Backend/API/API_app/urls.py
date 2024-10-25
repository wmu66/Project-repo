from django.urls import path
from .views import api_request

urlpatterns = [
    path('request/', api_request, name="api_request"),
]
