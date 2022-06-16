module.exports = {
  apps: [
    {
      name: 'mx-admin',
      script: 'yarn run vite preview --port 9528',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '180M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
