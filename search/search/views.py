from django.shortcuts import render

def index_view(request):
    return render(request, 'index.html')

def image_view(request):
    return render(request, 'index.html')
