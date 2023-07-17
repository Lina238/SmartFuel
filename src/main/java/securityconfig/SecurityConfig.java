package securityconfig;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import com.example.SmartFuel.rest.repository.SmartFuelRepository;

import static com.example.SmartFuel.permi.Permission.*;


@Configuration
@EnableWebSecurity
@EnableJpaRepositories(basePackages = {"securityconfig.token", "com.example.SmartFuel.rest.repository"})

@EnableMethodSecurity
@Import({ApplicationConfig.class,CrosConfig.class,JacksonConfig.class})

public class SecurityConfig {

	  private final JwtAuthenticationFilter jwtAuthFilter;
	  private final AuthenticationProvider authenticationProvider;
	  private final LogoutHandler logoutHandler;
	  
 
  public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter, AuthenticationProvider authenticationProvider, LogoutHandler logoutHandler) {
      this.jwtAuthFilter = jwtAuthFilter;
      this.authenticationProvider = authenticationProvider;
      this.logoutHandler = logoutHandler;
  }
  
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf()
        .disable().cors().and()
     .authorizeRequests()
        .antMatchers("/api/v1/auth/**").permitAll()
        .antMatchers(
      
                "/v2/api-docs",
                "/v3/api-docs",
                "/v3/api-docs/**",
                "/swagger-resources",
                "/swagger-resources/**",
                "/configuration/ui",
                "/configuration/security",
                "/swagger-ui/**",
                "/webjars/**",
                "/swagger-ui.html").hasAnyRole(com.example.SmartFuel.permi.Role.ADMIN.name(), 
                		com.example.SmartFuel.permi.Role.MANGEMENT.name(),
                		com.example.SmartFuel.permi.Role.EMPLOYEE.name())
        .antMatchers(HttpMethod.GET, "/api/v1/management/**").hasAnyAuthority(
                ADMIN_READ.name(),
                MANGEMENT_READ.name(),
                EMPLOYEE_READ.name()
      
        )
        .antMatchers(HttpMethod.POST, "/api/v1/management/**").hasAnyAuthority(

                ADMIN_CREATE.name(),
                MANGEMENT_CREATE.name(),
                EMPLOYEE_CREATE.name()

        )
        .antMatchers(HttpMethod.PUT, "/api/v1/management/**").hasAnyAuthority(
                ADMIN_UPDATE.name(),
                MANGEMENT_UPDATE.name(),
                EMPLOYEE_UPDATE.name()

        )
        .antMatchers(HttpMethod.DELETE, "/api/v1/management/**").hasAnyAuthority(
                ADMIN_UPDATE.name(),
                MANGEMENT_UPDATE.name(),
                EMPLOYEE_UPDATE.name()

        )
//        .antMatchers("/api/v1/admin/**").hasRole(com.example.SmartFuel.permi.Role.ADMIN.name())
//
//        .antMatchers(HttpMethod.GET, "/api/v1/admin/**").hasAuthority(ADMIN_READ.name())
//        .antMatchers(HttpMethod.POST, "/api/v1/admin/**").hasAuthority(ADMIN_CREATE.name())
//        .antMatchers(HttpMethod.PUT, "/api/v1/admin/**").hasAuthority(ADMIN_UPDATE.name())
//        .antMatchers(HttpMethod.DELETE, "/api/v1/admin/**").hasAuthority(ADMIN_DELETE.name())
//

//        .antMatchers("/api/v1/admin/**").hasRole(com.example.SmartFuel.permi.Role.ADMIN.name())
//        
//        .antMatchers(HttpMethod.GET, "/api/v1/admin/**").hasAnyAuthority(
//                ADMIN_READ.name(),
//        
//                PERSONNEL_READ.name()
//            )
//        .antMatchers(HttpMethod.POST, "/api/v1/admin/**").hasAnyAuthority(
//        	     ADMIN_UPDATE.name(),
//                
////                DISTRIBUTEUR_CREATE.name(),
////                DISTRIBUTEUR_GISEMENT_CREATE.name(),
////                MOUVEMENT_GISEMENT_CREATE.name(),
////                TABLE_DACHAT_CREATE.name(),
////                TABLE_DE_VENTE_CREATE.name(),
////                TYPE_GISEMENT_CREATE.name(),
////                GISMENT_CREATE.name(),
////                CHEF_CREATE.name(),
//                PERSONNEL_CREATE.name()
////                ROLE_CREATE.name()
//
//        )
//        .antMatchers(HttpMethod.PUT, "/api/v1/admin/**").hasAnyAuthority(
//                ADMIN_UPDATE.name(),
////                DISTRIBUTEUR_UPDATE.name(),
////                DISTRIBUTEUR_GISEMENT_UPDATE.name(),
////                MOUVEMENT_GISEMENT_UPDATE.name(),
////                TABLE_DACHAT_UPDATE.name(),
////                TABLE_DE_VENTE_UPDATE.name(),
////                TYPE_GISEMENT_UPDATE.name(),
////                GISMENT_UPDATE.name(),
////                CHEF_UPDATE.name(),
//                PERSONNEL_UPDATE.name()
////                ROLE_UPDATE.name()
//        )
//        .antMatchers(HttpMethod.DELETE, "/api/v1/admin/Personnels").hasAnyAuthority(
//                ADMIN_DELETE.name(),
////                DISTRIBUTEUR_UPDATE.name(),
////                DISTRIBUTEUR_GISEMENT_UPDATE.name(),
////                MOUVEMENT_GISEMENT_UPDATE.name(),
////                TABLE_DACHAT_UPDATE.name(),
////                TABLE_DE_VENTE_UPDATE.name(),
////                TYPE_GISEMENT_UPDATE.name(),
////                GISMENT_UPDATE.name(),
////                CHEF_UPDATE.name(),
//                PERSONNEL_UPDATE.name()
////                ROLE_UPDATE.name()
//        )
        .anyRequest()
        .authenticated()
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
        .logout()
        .logoutUrl("/api/v1/auth/logout")
        .addLogoutHandler(logoutHandler)
        .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())

        .permitAll();
    return http.build();
  }

}
