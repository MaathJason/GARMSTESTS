module.exports = {
    apps: [
      {
        name: 'my-app', // Nome do aplicativo
        script: 'npm',  // Comando a ser executado
        args: 'run dev', // Argumentos do comando
        cwd: '/back-end', // Diretório de trabalho (substitua pelo caminho do seu projeto)
        interpreter: '/bin/bash', // Usa bash para interpretar o comando npm
        watch: false // Opcional: ativa a observação de arquivos se necessário
      }
    ]
  };
  