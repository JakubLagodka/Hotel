package pl.lagodka.userApplication.configuration;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
public class OpenApiConfig {
    @Bean
    public OpenAPI openApi(){
        return new OpenAPI()
                .info(new Info()
                        .title("MPO Api")
                        .description("This is an example MPO business logic pipeline with external REST API call and MPO code editor tool. The application was written in Java using Spring Boot and PostgreSQL as a database.")
                        .version("")
                        .contact(new Contact()
                                .email("Jakub.L")));
    }
}
