pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code from the repository...'
                git branch: 'main', url: 'https://github.com/faizrazadec/faizrazadec.github.io.git'
                echo 'Code checkout completed.'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'sudo docker run node:20.18.0 npm install'
                echo 'Npm dependencies installed successfully.'
            }
        }

        // Other stages...
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
