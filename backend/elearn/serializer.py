from dataclasses import fields
from rest_framework import serializers
from .models import Course, Profile, User


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'avatar', 'first_name', 'last_name',
                  'email', 'phonenumber', 'city']


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['name', 'color']


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name',
                  'email', 'is_active', 'is_staff', 'is_learner',
                  'is_instructor', 'is_admin', 'is_superuser']

    # username = serializers.CharField(label='username', write_only=True)
    # password = serializers.CharField(
    #     label="password",
    #     style={'input_type': 'password'},
    #     trim_whitespace=False,
    #     write_only=True
    # )

        # def validate(self, attrs):
        #     # Take username and password from request
        #     username = attrs.get('username')
        #     password = attrs.get('password')

        #     if username and password:
        #         # Try to authenticate the user using Django auth framework.
        #         user = authenticate(request=self.context.get('request'),
        #                             username=username, password=password)
        #         if not user:
        #             msg = 'Accès refusé: mauvais username ou password.'
        #             raise serializers.ValidationError(
        #                 msg, code='authorization')
        #     else:
        #         msg = '"username" et "password" sont requis.'
        #         raise serializers.ValidationError(msg, code='authorization')

        #     attrs['user'] = user
        #     return attrs
