export interface InfoItem {
  label: string;
  value: string;
}

export interface ResumeEntry {
  date: string;
  role: string;
  place: string;
  desc: string;
  tags: string[];
}

export interface CertEntry {
  title: string;
  issuer: string;
  validity?: string;
}

export interface CourseEntry {
  provider: string;
  name: string;
  year: string;
}

export const PERSONAL_INFO: InfoItem[] = [
  { label: 'Nome', value: 'Mateus de Mattos Ferreira' },
  { label: 'Nascimento', value: '25/10/2002' },
  { label: 'Residência', value: 'Vitória, ES - Brasil' },
  { label: 'Idiomas', value: 'Português (Nativo) · Inglês (Intermediário)' }
];

export const ABOUT_TEXT: string[] = [
  'Desenvolvedor de software focado em resolver problemas complexos e construir aplicações web robustas de ponta a ponta. Minha trajetória na tecnologia começou com a formação técnica em Informática pelo Ifes, consolidou-se na graduação em Análise e Desenvolvimento de Sistemas pela FAESA e expandiu-se com uma especialização em Informática também pelo Ifes.',
  'Sou movido por desafios técnicos e pelo aprendizado contínuo. Esse foco me proporcionou um crescimento profissional acelerado, com promoções conquistadas através de entregas de alto impacto e forte proficiência técnica.',
  'No dia a dia, tenho sólida experiência no ecossistema .NET (C#, Entity Framework, NHibernate, Dapper), além de transitar com facilidade por projetos em Java e Python. Busco sempre a excelência por meio de certificações de empresas como Oracle e Microsoft, e também do aprimoramento constante do meu inglês para desafios globais.'
];

export const EXPERIENCE: ResumeEntry[] = [
  {
    date: '07/2026 - Atualmente',
    role: 'Especialista em Desenvolvimento de Software',
    place: 'G4F Soluções Corporativas · SEFAZ-ES, Vitória/ES',
    desc: 'Atuação na SEFAZ-ES com foco na evolução contínua dos sistemas da Secretaria. Utilização do GitHub Copilot com Claude para auxílio no desenvolvimento. Migração de aplicações legadas de PHP para .NET e desenvolvimento de novas soluções web e sites públicos utilizando .NET Core MVC. Implementação de arquitetura baseada em eventos com filas de mensageria via RabbitMQ e estruturação de pipelines automatizados de CI/CD e releases no Azure DevOps, além de soluções de monitoramento e rastreabilidade por timelines de processos.',
    tags: ['.NET Core', 'RabbitMQ', 'Azure DevOps', 'CI/CD', 'PHP']
  },
  {
    date: '10/2022 - 07/2026',
    role: 'Analista Desenvolvedor de Sistemas',
    place: 'Secretaria de Estado da Fazenda, Vitória/ES',
    desc: 'Transição para cargo pleno. Mantive as demandas anteriores e assumi tarefas em Java 6 e 8, trabalhando com JSP, Maven e Tomcat. Participei de reuniões diretamente com os usuários e ganhei experiência em .NET Core, APIs, diretórios FTP, Serviços do Windows, gestão ágil (Scrum e Backlog) e práticas de DevOps.',
    tags: ['Java', '.NET Core', 'APIs', 'Scrum', 'DevOps']
  },
  {
    date: '02/2022 - 10/2022',
    role: 'Desenvolvedor de Sistemas',
    place: 'Ilha Service Tecnologia · SEFAZ-ES, Vitória/ES',
    desc: 'Desenvolvimento e sustentação em sistemas financeiros. Melhorias, correções e funcionalidades novas, utilizando NHibernate e linguagem C# com .NET Framework e banco de dados SQL (Oracle), versionando código com GIT e Azure DevOps e publicando com Jenkins.',
    tags: ['C#', '.NET Framework', 'NHibernate', 'Oracle', 'Jenkins']
  }
];

export const EDUCATION: ResumeEntry[] = [
  {
    date: '02/2025 - 10/2026',
    role: 'Pós-graduação - Informática na Educação',
    place: 'IFES - Instituto Federal do Espírito Santo',
    desc: 'Nota: 91. TCC: Auditoria de acessibilidade digital e avaliação de usabilidade na plataforma Kahoot. Tecnologias: WCAG 2.1, IHC e Usabilidade, UI/UX Inclusivo, Tecnologias Assistivas, Gamificação e UX Research.',
    tags: ['WCAG', 'UX Research', 'Acessibilidade']
  },
  {
    date: '07/2024 - 01/2025',
    role: 'Pós-graduação - Desenvolvimento da Web',
    place: 'IMES - Instituto Mineiro de Educação Superior',
    desc: 'Nota: 96. Servidores, APIs, Arquitetura de Sistemas, Git, DevOps, Docker, CI/CD, HTML, Web Analytics, User Experience (UX), PHP e Implantação de Aplicações.',
    tags: ['Docker', 'DevOps', 'APIs']
  },
  {
    date: '02/2022 - 06/2024',
    role: 'Graduação em Análise e Desenvolvimento de Sistemas',
    place: 'FAESA - Centro Universitário Espírito-Santense',
    desc: 'Nota: 92,8. Tecnologias: Java OO, Sistemas Operacionais, Redes, Metodologias Ágeis, AngularJS, Modelagem de Dados, HTML/CSS, JavaScript, PHP, Django e Segurança em TI.',
    tags: ['Java', 'SQL', 'AngularJS']
  },
  {
    date: '02/2018 - 02/2022',
    role: 'Técnico em Informática para Internet',
    place: 'IFES - Instituto Federal do Espírito Santo',
    desc: 'Nota: 93. TCC (Inside) - Nota 93. Líder de turma e participante do Grêmio Estudantil. Tecnologias: Python, Web (HTML/CSS/JS), Java OO + Android Studio, PHP, SQL e Redes.',
    tags: ['Python', 'Java', 'SQL']
  }
];

export const CERTIFICATIONS: CertEntry[] = [
  { title: 'Oracle AI Vector Search Certified Professional', issuer: 'Oracle', validity: 'Emitido em mai/2025' },
  { title: 'Oracle Cloud Infrastructure 2025 - AI Foundations Associate', issuer: 'Oracle', validity: 'Emitida em mai/2025' },
  { title: 'DevOps Essentials Professional Certification (DEPC®)', issuer: 'Certiprof', validity: 'Emitido em jul/2026' },
  { title: 'Scrum Master Professional Certification (SMPC®)', issuer: 'Certiprof', validity: 'Emitido em jul/2026' },
  { title: 'OBMEP 2015 - Menção Honrosa', issuer: 'Olimpíada Brasileira de Matemática das Escolas Públicas' }
];

export const COURSES: CourseEntry[] = [
  { provider: 'IFES', name: 'Desenvolvimento Front-end/Back-end JS (320h)', year: '2024' },
  { provider: 'Harvard University', name: 'CC50: Introdução à Ciência da Computação (70h)', year: '2023' },
  { provider: 'Udemy', name: 'Java Completo - POO (50h)', year: '2022' },
  { provider: 'Udemy', name: 'C# COMPLETO - POO (38h)', year: '2022' },
  { provider: '4Linux', name: 'Linux Fundamentals (20h)', year: '2022' },
  { provider: 'JDev Treinamento', name: 'CRUD Completo com Spring Boot REST API (10h)', year: '2022' },
  { provider: 'Udemy', name: 'Web Design - HTML & CSS (8h)', year: '2022' },
  { provider: 'Balta', name: 'Fundamentos do ASP.NET 6 (7h)', year: '2022' },
  { provider: 'DevSuperior', name: 'Semana Spring React - SDS 7.0 (7h)', year: '2022' },
  { provider: 'Udemy', name: 'Python & MySQL (6h)', year: '2022' },
  { provider: 'EAD Education', name: 'Git e Github (5h)', year: '2022' },
  { provider: 'Balta', name: 'Fundamentos do Entity Framework (4h)', year: '2022' },
  { provider: 'DANI Academy', name: 'Primeiros Passos no MongoDB (4h)', year: '2022' },
  { provider: 'Digital Innovation One', name: 'Desenvolvimento de Aplicações com .NET (3h)', year: '2022' },
  { provider: 'LinkedIn', name: 'Fundamentos de Análise de Dados (2h)', year: '2022' },
  { provider: 'LinkedIn', name: 'Técnicas Avançadas de Python (2h)', year: '2022' },
  { provider: 'LinkedIn', name: 'Descubra o Azure DevOps (2h)', year: '2022' },
  { provider: 'Balta', name: 'Refatorando Para Testes de Unidade (2h)', year: '2022' },
  { provider: 'Google', name: 'Startup In School (2h)', year: '2019' }
];

export const SKILLS_TEXT =
  'Sólida experiência e nível avançado em ecossistema <strong>C# / .NET</strong>, além de atuação intermediária em <strong>Java</strong>, ecossistemas <strong>SQL</strong> e ambientes <strong>Windows/Linux</strong>. Vivência em práticas de versionamento e nuvem com <strong>GitHub</strong> e <strong>Azure</strong>. Conhecimentos em <strong>Python, Node.js, PHP</strong>, frameworks frontend como <strong>React</strong> e <strong>Angular</strong>, e bancos <strong>NoSQL</strong>.';

export const SKILLS_TAGS: string[] = [
  'C#', '.NET', 'Java', 'Python', 'SQL/NoSQL', 'Entity Framework', 'Dapper',
  'React', 'Angular', 'Node.js', 'PHP', 'Azure DevOps', 'Docker', 'RabbitMQ'
];

export const CONTACT_INFO: InfoItem[] = [
  { label: 'E-mail', value: 'mateusmattos327@gmail.com' },
  { label: 'Celular', value: '+55 (027) 99786-5995' }
];
