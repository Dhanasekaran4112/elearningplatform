from django.shortcuts import render
from .models import elearningtable
from .serializers import elearninfserializer,UserSerializer,UserSerializerWithToken
from rest_framework import viewsets
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status

# for sending Mail and generation tokens
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from .utils import TokenGenerator,generate_token
from django.utils.encoding import force_bytes,force_text,DjangoUnicodeDecodeError
from django.core.mail import EmailMessage
from django.conf import settings
from django.views.generic import View

class elearningview(viewsets.ModelViewSet):
    queryset=elearningtable.objects.all()
    serializer_class=elearninfserializer
    

# for login  
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        data=super().validate(attrs)
        serializer=UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v
        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    user=User.objects.all()
    serializer=UserSerializer(user,many=True)
    return Response(serializer.data)

# for register
@api_view(['POST'])
def registerUser(request):
    data=request.data
    # handling error as email illa password must unique
    try:
        user=User.objects.create(
            first_name=data['fname'], 
            last_name=data['lname'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password']),)  # ...only active user can access to login but now here we will make "inactive", it will active only if he click an link in gmail 
        
        serialize=UserSerializerWithToken(user, many=False)
        return Response(serialize.data)
        
    except Exception as e:
        message={'details':e}
        print(e)
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
    
    
    
# Activate an account of user
class ActivateAccountView(View):
    def get(self,request,uidb64,token):
        try:
            uid=force_text(urlsafe_base64_decode(uidb64))
            user=User.objects.get(pk=uid)
        except Exception as identifier:
            user=None
        
        if user is not None and generate_token.check_token(user,token):
            user.is_active=True
            user.save()
            return render(request,"activatesucess.html")
        
        else:
            return render(request,"activatefail.html")