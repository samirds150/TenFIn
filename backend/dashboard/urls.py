from django.urls import path
from .views import DatasetUploadView

urlpatterns = [
    path('datasets/', DatasetUploadView.as_view(), name='dataset-upload'),
]
