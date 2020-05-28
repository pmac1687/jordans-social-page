from django.shortcuts import render_to_response
from django.views import generic
from .models import Addition

def basic(request):
    additions = Addition.objects.all()
    create_addition = Addition.objects.create(tag='h1', html='')
    newest_addition = additions[1]
    template_data = {
        'additions' : additions,
        'create' : create_addition,
        'new'  : newest_addition,
        }
    return render_to_response('basic.html', template_data)

def create(request):
    create_addition = Addition.objects.create(tag='h1', html='dynamic')
    create_addition.save()
    template_data = {'createNew' : create_addition}
    return render_to_response('basic.html', template_data)

