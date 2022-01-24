from django.contrib.auth import get_user_model
from rest_framework import viewsets, filters, permissions
from .models import Post
from .permissions import IsAuthorOrReadOnly, IsAssigned
from .serializers import PostSerializer, UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly, permissions.IsAuthenticated)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title']

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly, permissions.IsAuthenticated)
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['username']