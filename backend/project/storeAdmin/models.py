from django.db import models


# Create your models here.
class StoreAdminInfo(models.Model) :
	name = models.charField(maxlength=30, blank=False)
	phone = models.charField(maxlength=30, blank=False)
	owner = models.charField(maxlength=30, blank=False)
	date = models.DateField(auto_now_add=True)
	location = models.charField(maxlength=30, blnak=False)
