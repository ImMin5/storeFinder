from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

def main_page(request) :
	email = "rlaalsgh5151@naver.com"
	password = "12345679"
	return JsonResponse({
		'email' : email,
		'pasword' : password,
		})

def login_page(request) :
	email = "ehdrodi5151@naver.com"
	password = "12345679"
	return JsonResponse({
		'email' : email,
		'pasword' : password,
		})