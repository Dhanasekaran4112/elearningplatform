from rest_framework import serializers
from .models import elearningtable
from django.contrib.auth.models import User 
from rest_framework_simplejwt.tokens import RefreshToken




class elearninfserializer (serializers.ModelSerializer):
    class Meta:
        model=elearningtable
        fields='__all__'
    
# for login 
class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']
    
    def get_name(self, obj):
        firstname = obj.first_name
        lastname = obj.last_name
        name = (firstname + ' ' + lastname).strip()  # Trim spaces
        if not name:
            name = obj.email
        return name 
    
    def get__id(self, obj):
        return obj.id
    
    def get_isAdmin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']
        
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    
    def get_name(self, obj):
        firstname = obj.first_name
        lastname = obj.last_name
        name = (firstname + ' ' + lastname).strip()  # Trim spaces
        if not name:
            name = obj.email
        return name 
    
    def get__id(self, obj):
        return obj.id
    
    def get_isAdmin(self, obj):
        return obj.is_staff

    
# for register
