from comments import views
from django.urls import include, path

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('loggedIn/', views.user_comments),
    path('', views.get_comments_by_video_id),
    # path('/all', views.get_comments_by_video_id),
]
