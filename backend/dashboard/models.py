from django.db import models

class Celebrities(models.Model):
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    followers = models.IntegerField(default=0)
    following = models.IntegerField(default=0)
    instagram = models.URLField(blank=True, null=True)
    facebook = models.URLField(blank=True, null=True)
    tiktok = models.URLField(blank=True, null=True)
    x = models.URLField(blank=True, null=True)
    snapchat = models.URLField(blank=True, null=True)
    contact_email = models.EmailField(blank=True, null=True)
    contact_phone = models.CharField(max_length=15, blank=True, null=True)
    image = models.ImageField(upload_to='celebrity_images/', blank=True, null=True)

    def __str__(self):
        return self.name
