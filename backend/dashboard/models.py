from django.db import models

class Dataset(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    upload_time = models.DateTimeField(auto_now_add=True)
    file = models.FileField(upload_to='datasets/')  
