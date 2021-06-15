from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings

app_name ='main'

urlpatterns = [
	path('',views.main_page, name='main_page'),
	path('login/',views.login_page, name='login'),
]