from django.db import models
from datetime import datetime
# Create your models here.

class Todo(models.Model):
  title = models.CharField(max_length=120)
  description = models.TextField()
  completed = models.BooleanField(default=False)
  completionDate = models.DateField(default=datetime.now)

  def __str__(self):
    return self.title
