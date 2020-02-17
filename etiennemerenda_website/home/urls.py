from django.urls import include, re_path
from django.views.generic import *


urlpatterns = [
    re_path(r'^$', TemplateView.as_view(template_name="home.html")),
]
