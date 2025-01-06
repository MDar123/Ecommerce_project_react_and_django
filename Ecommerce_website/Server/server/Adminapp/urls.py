from django.urls import path
from . import views
urlpatterns = [
    path('GetAllProducts/',views.GetAllProducts.as_view(),name='GetAllProducts'),
    path('GetProductById/<int:pk>/',views.GetProductById.as_view(),name='GetProductById'),
]
