from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=20, blank=False, default='')
    last_name = models.CharField(max_length=40, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    birth_date = models.DateField()
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title
