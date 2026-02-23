pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                dir('nodejs-retail-cicd-main') {
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('nodejs-retail-cicd-main') {
                    bat 'npm test'
                }
            }
        }

        stage('Lint Code') {
            steps {
                dir('nodejs-retail-cicd-main') {
                    bat 'npm run lint'
                }
            }
        }

        stage('Success') {
            steps {
                echo 'CI Pipeline Successful!'
            }
        }
    }
}