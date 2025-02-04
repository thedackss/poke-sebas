pipeline {
    agent any
    
    tools {
        nodejs 'NodeJs LTS'
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
        // stage('Stop Application') {
        //     steps {
        //         sh 'pm2 delete diegozar-web || true'
        //     }
        // }
        // stage('Start Application') {
        //     steps {
        //         sh 'pm2 start'
        //     }
        // }
        // stage('PM2 save') {
        //     steps {
        //         sh 'pm2 save'
        //     }
        // }
    }

}