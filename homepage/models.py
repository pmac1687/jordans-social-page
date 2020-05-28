from django.db import models

# Create your models here.
class Addition(models.Model):
    id = models.AutoField(primary_key=True)
    tag = models.TextField(default='')
    html = models.TextField(default='')

    def save_element(self):
        self.save()
    

