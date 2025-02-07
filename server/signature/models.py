# Django (Backend - signature/models.py)

from django.db import models


class Signature(models.Model):
    image_data = models.TextField()  # Base64 encoded image data
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Signature at {self.created_at}"
