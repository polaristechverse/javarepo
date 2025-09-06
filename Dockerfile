FROM ubuntu:latest

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Install OpenJDK 11 and Maven
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk maven && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Verify installations
RUN java -version && mvn -version

# Set up working directory
WORKDIR /app

# Copy source code
COPY pom.xml .
COPY src src

# Build the application with Maven
RUN mvn package -DskipTests

# Expose port 8080
EXPOSE 5600

# Run the application
ENTRYPOINT ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]
