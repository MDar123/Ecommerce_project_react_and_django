from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=200)
    price = models.DecimalField(decimal_places=2, max_digits=5)
    image = models.ImageField(upload_to='images/')
