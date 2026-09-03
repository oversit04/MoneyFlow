from django.urls import path
from . import views

urlpatterns = [
    path("create/user/",views.CreateUserView.as_view(), name = "Create-new-user"),

    path("category/", views.CategoryListCreate.as_view(), name= 'category-list'),
    path("category/detail/<int:pk>/", views.CategoryDetail.as_view(), name="category-detail"),

    path("transaction/", views.TransactionListCreate.as_view(), name= 'transaction-list'),
    path("transaction/detail/<int:pk>/", views.TransactionDetail.as_view(), name="transaction-detail"),
    
]