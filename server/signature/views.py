from rest_framework import views, response, status
from .serializers import SignatureSerializer
from django.http import JsonResponse

from .models import Signature


class SignatureView(views.APIView):
    def post(self, request):
        print("Received data:", request.data)
        serializer = SignatureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print("Saved data:", serializer.data)
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        print("Errors:", serializer.errors)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        signatures = Signature.objects.all()  # Or filter as needed
        serializer = SignatureSerializer(signatures, many=True)
        return response.Response(serializer.data)

    def get_signature_by_id(request, id):
        try:
            signature = Signature.objects.get(id=id)
            return JsonResponse({'image_data': signature.image_data}, status=200)
        except Signature.DoesNotExist:
            return JsonResponse({'error': 'Signature not found'}, status=404)