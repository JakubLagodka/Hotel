package pl.lagodka.userApplication.configuration;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
public class OpenApiConfig {
    @Bean
    public OpenAPI openApi(){
        return new OpenAPI()
                .inf
    }
}
