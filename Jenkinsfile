@Library('my-shared-lib') _
pipeline {
    agent {
        label 'docker-node'
    }

    environment {
        IMAGE_NAME = "javacountapp:latest"
        CONTAINER_NAME = "countapp"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/polaristechverse/myrepo.git',
                    credentialsId: 'github-creds'
            }
        }

        stage('Build Docker') {
            steps {
                buildDocker(env.IMAGE_NAME)
            }
        }

        stage('Deploy Docker') {
            steps {
                deployDocker(env.IMAGE_NAME, env.CONTAINER_NAME)
            }
        }
    }
}