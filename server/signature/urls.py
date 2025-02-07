# Django (Backend - signature/urls.py)

from django.urls import path
from . import views

urlpatterns = [
    path('signature/', views.SignatureView.as_view(), name='signatures'),
    path('signature/<int:id>/',
         views.SignatureView.get_signature_by_id, name='signature-by-id'),
]
