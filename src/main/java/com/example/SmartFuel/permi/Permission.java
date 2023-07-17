package com.example.SmartFuel.permi;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {
    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    MANGEMENT_READ("mangement::read"),
    MANGEMENT_UPDATE("mangement:update"),
    MANGEMENT_CREATE("mangement::create"),
    MANGEMENT_DELETE("mangement::delete"),
    EMPLOYEE_READ("employee::read"),
    EMPLOYEE_UPDATE("employee:update"),
    EMPLOYEE_CREATE("employee::create"),
    EMPLOYEE_DELETE("employee::delete"); 
    @Getter
    private String permission;
    
    // Constructor accepting a String parameter
    Permission(String permission) {
        this.permission = permission;
    }

	public String getPermission() {
		return permission;
	}

	public void setPermission(String permission) {
		this.permission = permission;
	}
    
}
