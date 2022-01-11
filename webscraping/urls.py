from django.urls import path
from . import views

urlpatterns = [
	path('examples/', views.examples, name='examples'),
	path('search/',views.search, name = 'search'),
    path('xpath/', views.xpath, name= 'xpath'),
]
