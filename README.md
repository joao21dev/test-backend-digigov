# Teste Técnico para Desenvolvedor Back-end Pleno

## O que foi pedido:
Você está trabalhando em um sistema de gerenciamento de tarefas, onde os usuários podem criar, listar e concluir tarefas. No entanto, o código atual do sistema foi desenvolvido rapidamente e de forma desorganizada, tornando-o difícil de manter e expandir. Sua tarefa é refatorar o código existente, aplicando os princípios do SOLID e Clean Architecture, a fim de melhorar a estrutura e a organização do código.

## O que foi feito:
Seguindo o padrão de Arquitetura Limpa comecei criando a camada de aplicação, onde concentramos as regras de negócio da aplicação, no nosso caso temos duas: retornar a list de tasks e criar uma nova task. Criei um repository como uma classe abstrata que serve como um contrato para os serviços da nossa aplicação, onde eles interagem não diretamente com o banco de dados, mas sim com essa interface (aqui observamos o princípio de Inversão de Dependência e da Segregação de Interfaces, já que o TasksRepository contém somente os métodos necessários para criação e recuperação de tasks). Na camada de Domínio definimos a nossa entidade, desacomplando-a do resto da nossa aplicação. Foi criada uma entidade Task e um Data Transfer Object para esta entidade, sendo alterada o atributo "completed" da entity para "isCompliteted", sendo um booleano que deve ser passado para criar a task, sinalizando se foi ou não finalizada. (Aqui podemos observar o desacoplamento que é possibilitado ao usar Arquitetura Limpa). A terceira camada foi a de Infra, onde fazemos as conexões externas, como um database por exemplo. No nosso caso não criamos um database, para simular criamos um respositório em memória, onde as Tasks são criadas e inseridas num array. (Aqui observamos o princípio da Responsabilidade Única, onde cada função do In Memory Repository tem uma única responsabilidade: criar um task, listar todas as tasks.). Podemos observar o princpipio Open/Closed, já que podemos criar novas implementações do TasksRepository, como um banco de dados real. Já o princípio da Substituição de Liskov pode ser observado no InMemoryTasksRepository, já que podemos substituir por sua classe base, por obedecer as regras definidas na interface de contrato.

## Instruções

1. Clone este repositório em sua máquina local:

   ```bash
   https://github.com/joao21dev/test-backend-digigov.git
   ```

2. Entre no projeto:

   ```bash
   cd test-backend-digigov
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Entre na pasta src:

   ```bash
   cd src
   ```

6. Rode o projeto:
   ```bash
   ts-node main.ts
   ```
