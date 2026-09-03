from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics  
from .serializers import UserSerializer, CategorySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Category, Transaction
# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes =[AllowAny]

# ดู กับ สร้าง ListCreateAPIView
class CategoryListCreate(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    permission_classes= [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Category.objects.filter(user=user)
    
    def perform_create(self, serializer):
        serializer.save(user = self.request.user)
# แก้ไข กับ ลบ  RetrieveUpdateDestroyAPIView
class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Category.objects.filter(user=user)


    