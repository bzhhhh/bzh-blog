module.exports = {
  apps: [
    {
      name: 'bzh-blog',
      script: './server.js',
      cwd: './', // 当前工作路径
      watch: [
        '.next' // 监控变化的目录，一旦变化，自动重启
      ],
      ignore_watch: [
        // 从监控目录中排除
        'node_modules',
        'public'
      ],
      instances: 2,  // 启动2个实例
      node_args: '--harmony',
      env: {
        NODE_ENV: 'development',
        PORT: 6666
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 7777
      },
      out_file: './logs/out.log', // 普通日志路径
      error_file: './logs/err.log', // 错误日志路径
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z' // 设置日志的日期格式
    }
  ]
}