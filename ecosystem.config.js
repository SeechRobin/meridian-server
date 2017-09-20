module.exports = {
  apps: [{
    name: 'meridian-server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-56-149-201.eu-west-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:SeechRobin/meridian-server.git',
      path: '/home/ubuntu/meridian',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}