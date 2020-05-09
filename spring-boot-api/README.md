# Spring Boot RESTful API

This project is built with [Spring Boot](https://spring.io/projects/spring-boot).

## Configuration

The project requires some configured values to run correctly. An `application.yml` file is available for a quick
reference and default values for some of them. For local development, Spring Boot has the `default` profile enabled by
default, so an `application-default.yml` can be added to the `spring-boot-api` folder to provide those settings.
Alternatively, environment variables may also be used for these settings.

See [Externalized Configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config)
for complete details on configuring Spring Boot.

| Property | Environment Variable | Default | Description |
| -------- | -------------------- | ------- | ----------- |
| `cors.allowed.origins` | `CORS_ALLOWED_ORIGINS` | http://localhost:3000 | A comma separated list of allowed origins for CORS. |
| `auth0.audience` | `AUTH0_AUDIENCE` | | The audience value an Auth0 API. |
| `spring.security.oauth2.resourceserver.jwt.issuer-uri` | `SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_ISSUER_URI` | | The issuer of the JWT. |
| `spring.datasource.url` | `SPRING_DATASOURCE_URL` | `jdbc:postgresql://localhost:5432/hello` | The URL of the target database. |
| `spring.datasource.username` | `SPRING_DATASOURCE_USERNAME` | `hello_user` | The audience value an Auth0 API. |
| `spring.datasource.password` | `SPRING_DATASOURCE_PASSWORD` | `hello_pw` | The issuer of the JWT. |

The default database configuration assumes the PostgreSQL database defined in
[Docker Compose](../database/docker-compose.yml) is being used.

For details on configuring the audience and issuer see
[Configure the Sample Project](https://auth0.com/docs/quickstart/backend/java-spring-security5/01-authorization#configure-the-sample-project).

## Available Scripts

In the project directory, you can run:

### `./gradlew bootRun`

Runs the app in the development mode. Use a tool like [Postman](https://www.postman.com/) to
[`GET http://localhost:8080/hello`](http://localhost:8080/hello).

If you use another method to run the application, ensure `spring-boot-api` is the working directory so that local
configuration is used.

### `./gradlew test`

Runs the tests.

### `./gradlew bootJar`

Builds the app for production to the `build/libs` folder.
