from django.db import models



class elearningtable(models.Model):
    image=models.ImageField(upload_to='uploads/files', null=False, blank=False)
    file=models.FileField(upload_to='uploads/files', null=False, blank=False)
    name=models.CharField(max_length=150, null=False, blank=False)
    author=models.CharField(max_length=150, null=False, blank=False)
    description=models.TextField()
    category=models.CharField(max_length=150, null=True, blank=True)
    
    def __str__(self):
        return self.name
