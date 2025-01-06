from rest_framework import serializers
from StudentApp.models import StudentTable

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentTable
        fields = '__all__'