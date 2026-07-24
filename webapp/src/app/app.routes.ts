import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { Curriculo } from './pages/curriculo/curriculo';
import { Contato } from './pages/contato/contato';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Mateus de Mattos Ferreira' },
  { path: 'portfolio', component: Portfolio, title: 'Portfólio - Mateus de Mattos Ferreira' },
  { path: 'curriculo', component: Curriculo, title: 'Currículo - Mateus de Mattos Ferreira' },
  { path: 'contato', component: Contato, title: 'Contato - Mateus de Mattos Ferreira' },
  { path: 'projetos/:slug', component: ProjectDetail },
  { path: '**', component: NotFound, title: 'Página não encontrada' }
];
