package com.example.SmartFuel.rest.models;
import java.util.ArrayList;
import java.util.Collection;

import java.util.List;

import javax.persistence.Column;
import  javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.example.SmartFuel.rest.models.Token;
import com.example.SmartFuel.permi.Role;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
@Data
@Entity
@Table(name="personnel")
public class Personnel implements UserDetails {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("id")
	Integer id;
	@ManyToOne
	@JoinColumn(name = "chef")
	@JsonManagedReference
	private chef chef;
    @Column(name = "username")
    @JsonProperty("username")
	   @NotNull
	    @NotEmpty
    String username;

    @Column(name = "password")
    @JsonProperty("password")
	   @NotNull
	    @NotEmpty
    String password;
	 @Enumerated(EnumType.STRING)
	 
	@JsonProperty("role")
	Role role;
	
	 @OneToMany(mappedBy = "user")
	 @JsonManagedReference
	  private List<Token> tokens;
	 @Override
	  public Collection<? extends GrantedAuthority> getAuthorities() {
	    return role.getAuthorities();
	  }
	    public void setAuthorities(Role role) {
	    	
	        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
	   
	        if (role.name() == "ADMIN") {
	        	authorities.add(new SimpleGrantedAuthority("admin:read"));
	            authorities.add(new SimpleGrantedAuthority("admin:update"));
	            authorities.add(new SimpleGrantedAuthority("admin:delete"));
	            authorities.add(new SimpleGrantedAuthority("admin:create"));
	            authorities.add(new SimpleGrantedAuthority("mangement:create"));
	            authorities.add(new SimpleGrantedAuthority("mangement:read"));
	            authorities.add(new SimpleGrantedAuthority("mangement:update"));
	            authorities.add(new SimpleGrantedAuthority("mangementdelete"));
	        } else if (role.name() == "MANGEMENT") {
	        	 authorities.add(new SimpleGrantedAuthority("mangement:create"));
	             authorities.add(new SimpleGrantedAuthority("mangement:read"));
	             authorities.add(new SimpleGrantedAuthority("mangement:update"));
	             authorities.add(new SimpleGrantedAuthority("mangement:delete"));
	        }

	        authorities.add(new SimpleGrantedAuthority("ROLE_" +role.name() ));
	    }


	public chef getChef() {
			return chef;
		}
		public void setChef(chef chef) {
			this.chef = chef;
		}
	public List<com.example.SmartFuel.rest.models.Token> getTokens() {
		return tokens;
	}

	public void setTokens(List<com.example.SmartFuel.rest.models.Token> tokens) {
		this.tokens = tokens;
	}
   
	
	
	public void setPassword(String password) {
		this.password= password;
	}
	public Personnel() {
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	 

	@Override
	public String toString() {
		return "Personnel [id=" + id + ", username=" + username + ", password=" + password + ", role=" + role + ", tokens="
				+ tokens + "]";
	}


	public Personnel(Integer id, 
			chef chef,String username, String passwordHash, Role role, List<Token> tokens) {
		super();
		this.id = id;
		this.username = username;
		this.password = passwordHash;
		this.role = role;
		this.tokens = tokens;
		this.chef =chef;
	}

	public Role getRole() {
		return role;
	}
	
	public void setRole(Role role) {
		this.role = role;
	}



	  @Override
	  public String getPassword() {
	    return password;
	  }

	  @Override
	  public String getUsername() {
	    return username;
	  }

	  public void setUsername(String username) {
		this.username = username;
	}


	@Override
	  public boolean isAccountNonExpired() {
	    return true;
	  }

	  @Override
	  public boolean isAccountNonLocked() {
	    return true;
	  }

	  @Override
	  public boolean isCredentialsNonExpired() {
	    return true;
	  }

	  @Override
	  public boolean isEnabled() {
	    return true;
	  }



}
