module.exports = { // pm2 start process.config.js
  apps: [
    {
      name: 'gateway',
      script: './server/gateway.js',
      watch: true,
    },
    {
      name: 'frontend',
      script: './server/frontend.js',
      watch: true,
    },
    {
      name: 'apiserver',
      script: '../team5_vp-main/server/server.js',
      watch: true,
    },
  ],
};