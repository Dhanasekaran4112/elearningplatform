from django.shortcuts import render

from .models import elearningtable
from .serializers import elearninfserializer
from rest_framework import viewsets

class elearningview(viewsets.ModelViewSet):
    queryset=elearningtable.objects.all()
    serializer_class=elearninfserializer