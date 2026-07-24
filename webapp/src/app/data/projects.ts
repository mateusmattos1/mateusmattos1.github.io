export interface ProjectBlock {
  type: 'p' | 'img';
  html?: string;
  src?: string;
  alt?: string;
}

export interface Project {
  slug: string;
  cardTitle: string;
  cardSubtitle: string;
  cardThumb: string;
  breadcrumbLabel: string;
  title: string;
  heroImage: { src: string; alt: string };
  body: ProjectBlock[];
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'sistema-vendas',
    cardTitle: 'Sistema de Vendas',
    cardSubtitle: 'ASP.NET Core MVC',
    cardThumb: '/assets/img/mvc.png',
    breadcrumbLabel: 'Sistema de Vendas',
    title: 'Site de Vendedores x Departamentos',
    heroImage: { src: '/assets/img/trabalhos/vendedores.jpg', alt: 'Sistema de Vendas' },
    body: [
      { type: 'p', html: 'Esse foi o primeiro projeto que desenvolvi na linguagem <b>C#</b>. Apesar disso, foi mais um projeto que eu desenvolvi a partir dos conhecimentos passados pelo professor <i>Nelio</i>, na <i>Udemy</i>. O projeto consiste em um sistema para cadastro de departamentos, vendedores que se ligam com esses departamentos, e vendas que se ligam com esses vendedores. Temos diferentes abas para cada um desses processos, e trabalhei intensamente com <i>CRUD</i>.' },
      { type: 'p', html: 'Eu já havia desenvolvido um projeto similar em <i>JavaFX</i>, mas essa foi minha primeira experiência com o <b class="accent">.NET Core</b>. Eu já tinha experiência em <i>.NET Framework</i> quando desenvolvi esse trabalho, e achei bem diferente e mais simplificado a atualização da Microsoft (Core).' },
      { type: 'img', src: '/assets/img/trabalhos/pesquisa.jpg', alt: 'Tela de pesquisa' },
      { type: 'p', html: 'No projeto temos algumas abas, onde as construídas para atender o sistema de fato foram <b>Departamento, Vendedor e Venda</b>. No cadastro do Vendedor podemos relacioná-lo a algum departamento previamente cadastrado, e assim conferir na lista de vendedores. Por fim, temos a tela de vendas, em que podemos pesquisar com uma simples pesquisa, mostrando os dados da venda em um período, ou uma pesquisa agrupada por departamento, mostrando as vendas por departamento no período selecionado pelo usuário.' },
      { type: 'img', src: '/assets/img/trabalhos/agrupamento.jpg', alt: 'Agrupamento por departamento' },
      { type: 'p', html: 'Foi utilizado o <b>Entity Framework</b>, além do <i>LINQ</i> para auxiliar nos processos. Construímos exceções personalizadas para o projeto ficar mais profissional, além de outros detalhes como obrigatoriedade no cadastro dos campos. Eu gostei bastante de produzir o projeto porque trabalhar com <i>C#</i> tem sido uma boa experiência, e acredito que estou conseguindo me desenvolver bem.' }
    ],
    githubUrl: 'https://github.com/mateusmattos1/SalesWebMVC'
  },
  {
    slug: 'powerbi',
    cardTitle: 'Dados Empresariais',
    cardSubtitle: 'Power BI',
    cardThumb: '/assets/img/powerbi.jpg',
    breadcrumbLabel: 'Dados Empresariais',
    title: 'Power BI e os Dados',
    heroImage: { src: '/assets/img/trabalhos/telap.jpg', alt: 'Dashboard Power BI' },
    body: [
      { type: 'p', html: 'Para ser sincero, eu nunca tinha tocado em <b class="accent">Power BI</b> até começar a fazer esse projeto. Quando eu estava montando o meu Linkedin, recebi a notificação que ia ter um intensivão gratuito no canal <i>Excelência Operacional</i>, em que iríamos desenvolver uma dashboard no Power BI. O <b>projeto</b> consiste em alguns dados aleatórios empresariais provenientes de vários lugares do mundo. Nesse caso, os dados possuem teor financeiro, e no projeto trabalhamos com questões como <i>Margem de Lucro</i> e <i>Faturamento Total</i>.' },
      { type: 'p', html: 'Os dados utilizados foram provenientes do Excel, mas eu poderia ter usado do Banco de Dados, por exemplo. Além da página principal do projeto, trabalhei ainda com duas páginas extras para me auxiliar no que é chamado de "Dicas de Ferramenta" no <b class="accent">Power BI</b>.' },
      { type: 'img', src: '/assets/img/trabalhos/perguntas.png', alt: 'Perguntas guia' },
      { type: 'p', html: 'Durante a live, o que guiou a construção do projeto foram essas 10 perguntas acima. O instrutor mostrou várias ferramentas que podemos usar no <b class="accent">Power BI</b>. Eu gostei do resultado, apesar de nunca ter feito um tipo de projeto como esse. A experiência me ensinou a usar uma ferramenta que será muito importante no caminho que estou trilhando, já que a faculdade que curso é sobre dados também.' }
    ],
    githubUrl: 'https://github.com/mateusmattos1/powerbi'
  },
  {
    slug: 'ciencia-dados',
    cardTitle: 'Previsão de Vendas',
    cardSubtitle: 'Python e Machine Learning',
    cardThumb: '/assets/img/python.png',
    breadcrumbLabel: 'Ciência de Dados com Python',
    title: 'Previsão de Vendas com Gráficos Python',
    heroImage: { src: '/assets/img/trabalhos/telacorr.jpg', alt: 'Gráfico de correlação' },
    body: [
      { type: 'p', html: 'De todos os projetos que fiz, acredito que esse foi o que eu mais me empolguei em realizar. Durante a semana de intensivo em <b class="accent">Python</b>, da <i>Hashtag Treinamentos</i>, aprendemos a trabalhar com os dados, desde o tratamento até a utilização para algum objetivo de fato. O objetivo aqui era trazer gráficos de <i>Correlação</i> entre produtos e o número de vendas por cada um desses produtos, e no final, usando o <b><i>Machine Learning</i></b>, construir uma <b><i>Inteligência Artificial</i></b> capaz de prever as vendas da empresa.' },
      { type: 'img', src: '/assets/img/trabalhos/telaresul.jpg', alt: 'Resultados' },
      { type: 'p', html: 'Para trabalharmos com dados usando <b class="accent">Python</b> aprendi que a melhor maneira de programar nesses casos é usando o <i>Jupyter</i> (conforme os prints). Nós utilizamos dados pré tratados de uma das aulas passada, e fizemos com que a máquina aprendesse a conciliar os dados por produto com o valor da venda final. Entendi que a máquina irá testar por volta de <i>70 a 80 por cento</i> dos dados, e o resto ela irá testar para comprovar sua eficácia. Sendo assim, podemos usar diferente modos de teste, como <b><i>Regressão Linear</i></b> e <b><i>Árvore de Decisões</i></b>, e ver qual deles será mais eficaz. No fim ainda inserimos mais alguns dados para teste, pois nem toda a quantidade de linhas passada num <i>.csv</i>, como foi o caso, será necessário para que a máquina aprenda completamente tudo que precisa para trazer bons resultados.' }
    ],
    githubUrl: 'https://github.com/mateusmattos1/previ_vendas'
  },
  {
    slug: 'portfolio-pessoal',
    cardTitle: 'Portfólio Pessoal',
    cardSubtitle: 'Web Design',
    cardThumb: '/assets/img/portfolio.jpeg',
    breadcrumbLabel: 'Portfólio Pessoal',
    title: 'Portfólio em HTML/CSS',
    heroImage: { src: '/assets/img/trabalhos/principal.jpg', alt: 'Portfólio pessoal' },
    body: [
      { type: 'p', html: 'A partir de um curso disponibilizado pelo professor <i>Ivan Lourenço</i> na <i>Udemy</i>, uma plataforma de cursos gratuitos e pagos, tive a chance de produzir meu primeiro <b class="accent">portfólio</b>. A primeira tela que eu fiz (imagem acima) contém meu nome e uma foto minha, devidamente estruturados e formatados. Também conta com uma barra de navegação para outros campos do site, como a seguinte tela de currículo.' },
      { type: 'img', src: '/assets/img/trabalhos/curriculo.jpg', alt: 'Tela de currículo' },
      { type: 'p', html: 'Na época que produzi esse trabalho, eu estava começando a construir meu perfil profissional, e tive a ideia de fazer o <b class="accent">portfólio</b> quando vi que outros profissionais de TI tinham esse tipo de site próprio. As imagens que estou apresentando é da minha primeira versão do trabalho.' },
      { type: 'img', src: '/assets/img/trabalhos/contato.jpg', alt: 'Tela de contato' },
      { type: 'p', html: 'A montagem do <b class="accent">portfólio</b> foi estruturada em <i>HTML</i> e <i>CSS</i>, com um pouco de JavaScript. Sendo assim, pude rever alguns conceitos importantes que aprendi no meu curso técnico, além de ter trabalhado um pouco com <i>Javascript</i> também. No final do curso, acredito que eu tenha alcançado meu objetivo principal de transmitir informações sobre <b>quem eu sou</b> e o que eu faço ou já fiz.' }
    ],
    githubUrl: 'https://github.com/mateusmattos1/mateusmattos1.github.io'
  },
  {
    slug: 'projeto-integrador',
    cardTitle: 'Projeto Integrador',
    cardSubtitle: 'React Native e Node.js',
    cardThumb: '/assets/img/insight.png',
    breadcrumbLabel: 'Projeto Integrador',
    title: 'Insight',
    heroImage: { src: '/assets/img/trabalhos/telaprincipal.png', alt: 'Insight - Tela principal' },
    body: [
      { type: 'p', html: 'Quando estava no fim do ensino fundamental, eu realizei a prova para entrar no <i>Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo</i>, cujo eu vinha estudando o ano inteiro para realizar. Até mesmo participei de um curso para preparação da prova, e consegui ser aprovado. Lá dentro, desenvolvi com os meus amigos de sala muitos conceitos de informática, e todo nosso aprendizado foi aplicado no último ano do técnico.' },
      { type: 'p', html: '<b class="accent">Insight</b> é uma plataforma de desenvolvimento de projetos colaborativos, onde o usuário poderá ser ajudado em um projeto próprio ou ajudar em projetos de outros usuários. A colaboração é fundamental para o ser humano operar em sociedade. Desde o início da internet, projetos criaram raízes com apenas alguns colaboradores, vendo a facilidade de se conectar remotamente. A <b class="accent">Insight</b> tem a proposta de conectar o diverso público atual da internet, incentivando esse sentimento de cooperatividade, para a criação de projetos que talvez nunca saíssem do papel sem o envolvimento de outras pessoas interessadas.' },
      { type: 'img', src: '/assets/img/trabalhos/teladecriarprojetos.png', alt: 'Tela de criar projetos' },
      { type: 'p', html: 'Não há facilidade de desenvolver um projeto independente, sem correr o risco de desorganização e falta de alcance à possíveis colaboradores. <b class="accent">Insight</b> nasceu dessa problemática, e juntamente com <i><b>Lucas Tejada</b></i> e <i><b>Luiz Roberto</b></i>, foi desenvolvido esta aplicação, e assim conseguimos concluir nosso curso técnico.' },
      { type: 'img', src: '/assets/img/trabalhos/teladoprojeto.png', alt: 'Tela do projeto' },
      { type: 'p', html: 'A aplicação detém de uma tela de login e cadastro; tela principal mostrando os projetos em destaque e os que precisam de ajuda; tela de criação de projetos, levando para telas de adicionar membros e imagens; tela de grupos e tela de perfil do usuário ativo, além de algumas outras telas. Algumas das tecnologias que utilizamos foram <i>React Native</i> e <i>NodeJS</i>.' }
    ],
    githubUrl: 'https://github.com/pi-insight/mobile/tree/develop'
  },
  {
    slug: 'filme',
    cardTitle: 'Plataforma de Filmes',
    cardSubtitle: 'React e Spring Boot',
    cardThumb: '/assets/img/filme.png',
    breadcrumbLabel: 'Plataforma de Avaliação de Filmes',
    title: 'DSMovie',
    heroImage: { src: '/assets/img/trabalhos/telafilmes.jpg', alt: 'DSMovie - Tela de filmes' },
    body: [
      { type: 'p', html: 'Na <a href="https://devsuperior.com.br" target="_blank" rel="noopener" class="text-link"><b>Semana de Spring React</b></a> do Instrutor <i>Nelio Alves</i>, nosso objetivo principal foi construir uma <i>plataforma de avaliação de filmes</i>, chamado <b class="accent">DSMovie</b>. Anteriormente eu já havia participado de um curso do Nelio, então eu sabia que a didática dele iria fomentar no meu aprendizado.' },
      { type: 'p', html: 'De modo mais detalhado, no <b class="accent">DSMovie</b> nós temos telas, que podem ser navegadas usando as setinhas na parte superior do site. Cada filme apresenta uma <i>capa</i>, seguido de suas <i>avaliações</i>, <i>estrelas</i> numa média de 1 a 5 com base nas avaliações dos usuários, e também a <i>quantidade de usuários</i> que votaram. Cada filme pode ser acessado para ser atribuído uma <b>nota</b>, e o usuário insere sua nota <u>UMA</u> vez para cada filme que quiser, sendo que se tentar inserir novamente, a nota do próprio usuário será apenas atualizada.' },
      { type: 'img', src: '/assets/img/trabalhos/telanota.jpg', alt: 'DSMovie - Tela de nota' },
      { type: 'p', html: 'Mas para atender os estudantes de um modo geral, o Nelio criou 2 caminhos: a criação do <b class="accent">DSMovie</b> para iniciantes <i>(HTML e CSS)</i>, e para quem já dominava algumas coisas como <b>Programação Orientada à Objetos</b>. Nesse último caso, o projeto foi construído com <b>ReactJS</b> e <b>Spring Boot</b>, usando o <b>PostgreSQL</b> como o <i>banco de dados relacional</i>.' },
      { type: 'p', html: 'De modo geral, o projeto foi muito proveitoso, pois pude ver mais de perto o <i>Spring Boot</i>, visto que é uma área que vai ser mais útil para mim atualmente. Também pude rever alguns conceitos do <i>React</i>, que querendo ou não, é uma biblioteca que vem se mostrando forte no mercado.' }
    ],
    githubUrl: 'https://github.com/mateusmattos1/dsmovie'
  },
  {
    slug: 'crud',
    cardTitle: 'CRUD Completo',
    cardSubtitle: 'Spring Boot e Bootstrap',
    cardThumb: '/assets/img/spring.png',
    breadcrumbLabel: 'CRUD Completo',
    title: 'CRUD Completo',
    heroImage: { src: '/assets/img/trabalhos/telacrud.jpg', alt: 'CRUD - Tela principal' },
    body: [
      { type: 'p', html: 'Quando quis aprofundar um pouco mais em <i>Spring Boot</i>, encontrei um curso que ensinava a fazer um <b class="accent">CRUD</b> na plataforma da <i>JDEV Treinamentos</i>. Até o momento, eu ainda não sabia o que era CRUD, mas me interessei muito nesse tipo de projeto, e gostei muito de produzir esse trabalho, onde tive que ralar um pouquinho, visto que eu ainda estava aprendendo a usar mais profundamente o <i>Javascript</i>. De qualquer forma, foi muito bom para meu desenvolvimento profissional, já que toda a parte que eu menos sabia manejar, ficou bem claro.' },
      { type: 'p', html: 'De modo mais detalhado, nesse <b class="accent">CRUD</b> nós temos duas telas, onde temos a tela principal de cadastro de uma pessoa com <i>nome</i> e <i>idade</i>. O <b>ID</b> da pessoa é setado automaticamente, e na segunda tela podemos pesquisar as pessoas cadastradas pelo nome em que atribuímos no cadastro. Ainda nessa tela de pesquisa, conforme imagem abaixo, podemos setar uma pessoa que pesquisamos e então <b>modificar</b> seu nome ou sua idade na tela principal.' },
      { type: 'img', src: '/assets/img/trabalhos/telapesquisa.jpg', alt: 'CRUD - Tela de pesquisa' },
      { type: 'p', html: 'Falando mais especificamente das tecnologias utilizadas, utilizei <b>Spring</b> no backend com o <b>Java 17</b>, onde trabalhei com o <i>Tomcat</i> e o <i>Maven</i>. Além disso, também fiz a conexão com o banco (utilizei o <i>Postgres</i>) pelo <i>properties</i>, onde para meu desenvolvimento utilizei um banco na minha máquina, sendo substituído pelo banco do <i>Heroku</i> quando publiquei o site.' },
      { type: 'p', html: 'Se tratando do <b>Bootstrap</b>, graças ao ensino do mentor das aulas, foi de fácil entendimento toda a parte do <i>JQuery</i> e da relação entre os sistemas de back e front que foram utilizados no projeto. O projeto foi totalmente desenvolvido pelo <i>Eclipse</i>, e isso ajudou bastante na navegação para relacionar as duas linguagens.' }
    ],
    githubUrl: 'https://github.com/mateusmattos1/crudcompleto'
  },
  {
    slug: 'javafx',
    cardTitle: 'Sistema de Departamentos',
    cardSubtitle: 'JavaFX e JDBC',
    cardThumb: '/assets/img/programa.jpg',
    breadcrumbLabel: 'Sistema de Departamentos',
    title: 'Aplicação Desktop com JavaFX e JDBC',
    heroImage: { src: '/assets/img/trabalhos/telajavafx.jpg', alt: 'JavaFX - Tela principal' },
    body: [
      { type: 'p', html: 'Quando estava fazendo o curso de Java do <i>Nelio Alves</i>, foi apresentado alguns projetos que poderíamos realizar. <b class="accent">O Sistema de Departamento</b> foi um deles, e o que mais me atraiu em fazer ele foi poder conectar o banco de dados <b>MySQL pelo JDBC</b>. Além disso, é usado o <b>JavaFX</b>, uma biblioteca de <i>GUI (Interface Gráfica do Usuário)</i> que permite criar uma variedade de aplicativos de desktop.' },
      { type: 'p', html: 'A aplicação consiste em um sistema para cadastrar vendedores e departamentos, podendo relacionar eles. Tanto o vendedor quanto o departamento têm suas informações próprias. Por exemplo, no caso do vendedor temos id, email, nome, entre outros.' },
      { type: 'img', src: '/assets/img/trabalhos/telaedit.jpg', alt: 'JavaFX - Tela de edição' },
      { type: 'p', html: 'O maior desafio em construir a aplicação foi com certeza a parte gráfica, visto que até o momento eu não tinha muita experiência com isso em Java. Porém, aos poucos fui aprendendo como <b>interagir</b> com os objetos visuais. Além disso, consegui entender e aprofundar um pouco mais em <i>exceções</i> e <i>expressões lambda</i>.' }
    ],
    githubUrl: 'https://github.com/mateusmattos1/workshop-javafx-jdbc/tree/master'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}
