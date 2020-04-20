FROM gradle:6.3-jre14
WORKDIR /home/gradle/project
COPY . .
RUN gradle bootJar --no-daemon


FROM openjdk:14.0.1-slim
ENV CORS_ALLOWED_ORIGINS http://localhost:3000
WORKDIR /usr/src/app
COPY --from=0 /home/gradle/project/build/libs/ /usr/src/app/libs/
CMD ["java", "-jar", "libs/spring-boot-api.jar"]
