from .predictor_class import Prediction
from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _

class ApiAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'API_app'
    verbose_name = _("API")
    predictor_instance = None

    def ready(self):
        # Initializes the Prediction() class, creating the predictor_instance. This will load the model
        ApiAppConfig.predictor_instance = Prediction()
