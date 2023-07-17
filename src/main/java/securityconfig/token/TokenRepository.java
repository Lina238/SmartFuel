package securityconfig.token;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.Token;

@Repository
public interface TokenRepository extends CrudRepository<Token, Integer> {

  @Query(value = "select t from Token t inner join Personnel u\n" +
                 "on t.user.id = u.id\n" +
                 "where u.id = :id and (t.expired = false or t.revoked = false)")
  List<Token> findAllValidTokenByUser(Integer id);

  Optional<Token> findByToken(String token);
}
