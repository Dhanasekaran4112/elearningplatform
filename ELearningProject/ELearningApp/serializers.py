from rest_framework import serializers
from .models import elearningtable

class elearninfserializer (serializers.ModelSerializer):
    class Meta:
        model=elearningtable
        fields='__all__'