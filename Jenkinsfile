pipeline {
    agent any  // This will allow the pipeline to run on any available agent

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code from the repository...'
                // Cloning your GitHub repository
                git branch: 'main', url: 'https://github.com/faizrazadec/faizrazadec.github.io.git'
                echo 'Code checkout completed.'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                // Install npm dependencies
                sh 'npm install'
                echo 'Npm dependencies installed successfully.'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                // Run your tests
                sh 'npm test'  // Adjust the command if you have specific test scripts
                echo 'Tests completed successfully.'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the React project...'
                // Build your React project
                sh 'npm run build'
                echo 'Build completed successfully.'
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                echo 'Installing gh-pages for deployment...'
                // Install gh-pages and deploy to GitHub Pages
                sh 'npm install gh-pages --save-dev'
                echo 'Deploying to GitHub Pages...'
                sh 'npm run deploy'
                echo 'Deployment to GitHub Pages completed successfully.'
            }
        }
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
