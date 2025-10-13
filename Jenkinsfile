pipeline {
    agent any

    environment {
        REGISTRY = 'docker.io'
        FRONTEND_IMAGE = "atuyatush/yolo-frontend:v1.0.0'"
        BACKEND_IMAGE = "atuyatush/yolo-backend:v1.0.0'"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/atuyabirisi/yolo.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    echo 'Building backend image...'
                    sh 'docker build -t ${BACKEND_IMAGE} ./backend'

                    echo 'Building frontend image...'
                    sh 'docker build -t ${FRONTEND_IMAGE} ./frontend'
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                script {
                    sh 'docker push ${BACKEND_IMAGE}'
                    sh 'docker push ${FRONTEND_IMAGE}'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                echo 'Deploying containers using docker-compose...'
                sh 'docker-compose down'
                sh 'docker-compose pull'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
