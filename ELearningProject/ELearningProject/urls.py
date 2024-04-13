from django.contrib import admin
from django.urls import path,include

from django.conf import settings
from django.conf.urls.static import static

from ELearningApp.views import elearningview
from rest_framework import routers


route=routers.DefaultRouter()
route.register("",elearningview,basename="elearningview")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
    path('authapi/', include('ELearningApp.urls')),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
