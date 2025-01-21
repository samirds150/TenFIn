from rest_framework.views import APIView
from rest_framework.response import Response
import pandas as pd

class EDAView(APIView):
    def post(self, request):
        file = request.FILES.get('file')
        if not file:
            return Response({"error": "No file uploaded"}, status=400)

        # Read uploaded CSV file
        df = pd.read_csv(file)

        
        description = df.describe().to_dict()
        column_types = df.dtypes.apply(lambda x: x.name).to_dict()
        missing_values = df.isnull().sum().to_dict()

        eda_results = {
            "description": description,
            "column_types": column_types,
            "missing_values": missing_values
        }

        return Response(eda_results)
