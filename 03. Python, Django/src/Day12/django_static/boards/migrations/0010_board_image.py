# Generated by Django 2.2.7 on 2019-11-21 07:15

import boards.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0009_remove_board_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='board',
            name='image',
            field=models.ImageField(blank=True, upload_to=boards.models.board_img_path),
        ),
    ]