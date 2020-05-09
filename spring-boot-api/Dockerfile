FROM gradle:6.3-jre14
WORKDIR /home/gradle/project
COPY . .
RUN gradle bootJar --no-daemon


FROM openjdk:14.0.1-slim

# Defaults are for local use. AUTH0_AUDIENCE & SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_ISSUER_URI must be overwritten.
ENV CORS_ALLOWED_ORIGINS http://localhost:3000
ENV SPRING_DATASOURCE_URL jdbc:postgresql://host.docker.internal:5432/hello
ENV SPRING_DATASOURCE_USERNAME hello_user
ENV SPRING_DATASOURCE_PASSWORD hello_pw
ENV AUTH0_AUDIENCE ""
ENV SPRING_SECURITY_OAUTH2_RESOURCESERVER_JWT_ISSUER_URI ""

WORKDIR /usr/src/app
COPY --from=0 /home/gradle/project/build/libs/ /usr/src/app/libs/
CMD ["java", "-jar", "libs/hello-api.jar"]
