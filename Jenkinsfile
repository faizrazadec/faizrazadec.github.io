pipeline {
    agent any

    triggers {
        cron('H/5 * * * *') // This will trigger the job every 5 minutes
    }

    tools {
        nodejs "Node"  // Ensure this matches the name of the Node.js installation in Jenkins
    }

    environment {
        GITHUB_TOKEN = credentials('github-token')  // GitHub PAT stored as Jenkins credentials
    }

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
                // Install npm dependencies
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                // Build your React project
                sh 'npm run build'
            }
        }
        
        stage('Deploy to GitHub Pages') {
            steps {
                // Set GitHub token as an environment variable for the deploy command
                withEnv(["GITHUB_TOKEN=${env.GITHUB_TOKEN}"]) {
                    // Deploy to GitHub Pages using the token for authentication
                    sh 'npm run deploy'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
