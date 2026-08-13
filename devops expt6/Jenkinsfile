pipeline {

    agent any

    environment {
        DEPLOY_DIR = 'C:\\inetpub\\wwwroot'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
            }
        }

        stage('Build') {
            steps {
                echo 'Build started...'
                bat 'dir'
                echo 'Build completed successfully!'
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic application tests...'

                bat '''
                    if not exist index.html exit /b 1
                    if not exist style.css exit /b 1
                    if not exist script.js exit /b 1
                '''

                echo 'All required files are present!'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying website to IIS...'

                bat '''
                    xcopy /Y /I index.html "%DEPLOY_DIR%"
                    xcopy /Y /I style.css "%DEPLOY_DIR%"
                    xcopy /Y /I script.js "%DEPLOY_DIR%"
                '''

                echo 'Deployment completed successfully!'
            }
        }

    }

    post {

        success {
            echo '======================================'
            echo ' CI/CD PIPELINE SUCCESSFUL!'
            echo ' Website deployed to IIS.'
            echo ' Visit: http://localhost/index.html'
            echo '======================================'
        }

        failure {
            echo 'Pipeline failed! Check the console output.'
        }

    }
}
