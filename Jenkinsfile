pipeline {
    agent any
    
    tools {
        nodejs 'NodeJs LTS'
    }

    environment {
        DEPLOY_PATH = "/var/www/pokedex"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh "sudo rm -rf ${DEPLOY_PATH}/*"
                sh "sudo mkdir -p ${DEPLOY_PATH}"

                sh "sudo cp -r dist/* ${DEPLOY_PATH}/"

                sh "sudo chown -R www-data:www-data ${DEPLOY_PATH}"
                sh "sudo chmod -R 755 ${DEPLOY_PATH}"
            }
        }
    }

}