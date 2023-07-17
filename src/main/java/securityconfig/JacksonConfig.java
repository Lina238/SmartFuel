package securityconfig;

import java.text.SimpleDateFormat;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@Configuration
public class JacksonConfig {
	@Bean
	public ObjectMapper objectMapper() {
	    ObjectMapper objectMapper = new ObjectMapper();
	    objectMapper.registerModule(new JavaTimeModule());
	    objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	    objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
	    return objectMapper;
	}
//    @Bean
//    public Jackson2ObjectMapperBuilder objectMapperBuilder() {
//        Jackson2ObjectMapperBuilder builder = new Jackson2ObjectMapperBuilder();
//
//        // Activer la propriété FAIL_ON_UNKNOWN_PROPERTIES pour lever une exception en cas de propriétés inconnues dans la requête JSON
//        builder.failOnUnknownProperties(true);
//
//        // Définir un format de date personnalisé
//        builder.dateFormat(new SimpleDateFormat("yyyy-MM-dd"));
//
//        // Activer l'indentation de la sortie JSON pour une meilleure lisibilité
//        builder.indentOutput(true);
//
//        // ... Ajoutez d'autres configurations personnalisées selon vos besoins
//
//        return builder;
//    }

}
