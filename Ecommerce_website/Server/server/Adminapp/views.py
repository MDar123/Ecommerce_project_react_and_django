from django.shortcuts import render
from rest_framework import generics
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer
class GetAllProducts(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class GetProductById(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'pk'