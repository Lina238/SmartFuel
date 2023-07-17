package com.example.SmartFuel.rest.models;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import securityconfig.token.TokenType;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Data
@Entity
@Table(name="token")
public class Token{
  @Id
  @GeneratedValue
  public Integer id;
  @Column(unique = true)
  public String token;
  @Enumerated(EnumType.STRING)
  public TokenType tokenType = TokenType.BEARER;

  public boolean revoked;

  public boolean expired;

  public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getToken() {
	return token;
}

public void setToken(String token) {
	this.token = token;
}

public TokenType getTokenType() {
	return tokenType;
}

public void setTokenType(TokenType tokenType) {
	this.tokenType = tokenType;
}

public boolean isRevoked() {
	return revoked;
}

public void setRevoked(boolean revoked) {
	this.revoked = revoked;
}

public boolean isExpired() {
	return expired;
}

public void setExpired(boolean expired) {
	this.expired = expired;
}

public Personnel getUser() {
	return user;
}

public void setUser(Personnel user) {
	this.user = user;
}

public Token(Integer id, String token, TokenType tokenType, boolean revoked, boolean expired, Personnel user) {
	super();
	this.id = id;
	this.token = token;
	this.tokenType = tokenType;
	this.revoked = revoked;
	this.expired = expired;
	this.user = user;
}
public Token() {

}
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "user_id")
@JsonBackReference
public Personnel user;

}
