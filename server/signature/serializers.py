# Django (Backend - signature/serializers.py)

from rest_framework import serializers
from .models import Signature


class SignatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signature
        fields = ['id', 'image_data', 'created_at']  # Include 'id'
