from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HtpResponse("<html><em> My second App</em></html>")
