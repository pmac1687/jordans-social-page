# Generated by Django 2.1.5 on 2020-05-27 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addition',
            name='element',
            field=models.TextField(default=''),
        ),
    ]
