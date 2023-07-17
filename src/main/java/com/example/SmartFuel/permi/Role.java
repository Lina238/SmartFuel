package com.example.SmartFuel.permi;

import java.util.Set;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.stream.Collectors;


public enum Role {
	
    EMPLOYEE(Set.of(
       
    		Permission.EMPLOYEE_READ,
    		Permission.EMPLOYEE_UPDATE,
    		Permission.EMPLOYEE_CREATE,
    		Permission.EMPLOYEE_DELETE
        
        )),
  
    ADMIN(Set.of(
        Permission.ADMIN_READ,
        Permission.ADMIN_UPDATE,
        Permission.ADMIN_CREATE,
        Permission.ADMIN_DELETE,
        Permission.MANGEMENT_READ,
        Permission.MANGEMENT_UPDATE,
        Permission.MANGEMENT_CREATE,
        Permission.MANGEMENT_DELETE
    
    )
    		),
  
    MANGEMENT(Set.of(
            Permission.MANGEMENT_READ,
            Permission.MANGEMENT_UPDATE,
            Permission.MANGEMENT_CREATE,
            Permission.MANGEMENT_DELETE               
        ));
  
    @Getter
    private final Set<Permission> permissions;
  
    Role (Set<Permission>permission) {
        this.permissions = permission;
    }

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = permissions.stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());

        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }

}
