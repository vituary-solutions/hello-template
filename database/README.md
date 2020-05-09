This folder provides the implementation of database migrations based on [Flyway](https://flywaydb.org/). For development
convenience, a `docker-compose.yml` file is included to bring up a PostgreSQL database.

## Docker Compose

The docker compose file will start a Postgres 12 database. Run it with the command: `docker-compose up -d`

The file supports environment variables, which can be override with a `.env` file in the local directory.

| Environment Variable | Default | Description |
| -------------------- | ------- | ----------- |
| `DB_NAME` | `hello` | The name of the database. |
| `DB_USER` | `hello_user` | The name of the primary user of the database. |
| `DB_PASSWORD` | `hello_pw` | The password of the primary user of the database. |

## Migration Configuration

The database migration application requires some configured values to run correctly. An `application.yml` file is
provided for a quick reference and includes default values for working with the default docker-compose settings. For
local development, Spring Boot has the `default` profile enabled by default, so an `application-default.yml` can be
added to the `database` folder to override the values for those settings. Alternatively, environment variables may also
be used to override settings.

See [Externalized Configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config)
for complete details on configuring Spring Boot.

| Property | Environment Variable | Default | Description |
| -------- | -------------------- | ------- | ----------- |
| `spring.datasource.url` | `SPRING_DATASOURCE_URL` | `jdbc:postgresql://localhost:5432/hello` | The URL of the target database. |
| `spring.datasource.username` | `SPRING_DATASOURCE_USERNAME` | `hello_user` | The audience value an Auth0 API. |
| `spring.datasource.password` | `SPRING_DATASOURCE_PASSWORD` | `hello_pw` | The issuer of the JWT. |

## Available Scripts

In the `database` folder, you can run:

### `./gradlew bootRun`

Runs the migrations then shuts down.

If you use another method to run the application, ensure `database` is the working directory so that local
configuration is used.

### `./gradlew test`

Runs any tests that exist.

### `./gradlew bootJar`

Builds the app for production to the `build/libs` folder.

Your app is ready to be deployed!
