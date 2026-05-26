pipeline {

    agent any

    stages {

        stage('Build Docker Compose') {

            steps {

                sh 'docker compose up --build -d'

            }

        }

    }

}