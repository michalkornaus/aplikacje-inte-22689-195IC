from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user
        
class IsAssigned(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
		# check if user who launched request is object owner
        if obj.assigned_to == request.user:
            return True
        else:
            return False