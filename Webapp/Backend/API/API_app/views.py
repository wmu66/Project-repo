from django.shortcuts import render
from .apps import ApiAppConfig
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.

@api_view(['POST'])
def api_request(request):
    try:
        prediction_result = ApiAppConfig.predictor_instance(request.data) #predictor_instance is an instance of Prediction(). Calling it with the data json file returns the predicted value
        return Response({"prediction": prediction_result}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

