#Estrutura do projeto
 - perser/ - Processador de arquivos e requisitor a api.
    - Para rodar os testes: mocha
    - Para a aplicação: node index.js
 - api/ - Recebe os XMLs e armazena no banco
 - web/ - Frontend


## Futuras implementações
 - Migrar para o restify ao invés do express, bem menor e o router dele é bem mais rápido e escalável ( tenho alguns exemplos no github ).
 - Definir um objeto padrão de retorno da API ( tenho alguns exemplos no github ).
 - Não foi necessário usar o mongo-sanitize pois apenas temos insert e get na API.