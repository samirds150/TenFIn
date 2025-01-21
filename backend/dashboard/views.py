from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import Dataset
from .serializers import DatasetSerializer
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer

class DatasetUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer] 

    def post(self, request, *args, **kwargs):
        file = request.FILES['file']
        dataset = Dataset(name=file.name, file=file)
        dataset.save()
        serializer = DatasetSerializer(dataset)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def get(self, request, *args, **kwargs):
        datasets = Dataset.objects.all()
        serializer = DatasetSerializer(datasets, many=True)
        return Response(serializer.data)
