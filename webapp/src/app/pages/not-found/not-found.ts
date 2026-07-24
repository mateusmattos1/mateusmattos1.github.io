import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="page-header">
      <h1 class="page-title">Página não encontrada</h1>
    </div>
    <main class="content">
      <p class="about-text">A página que você procura não existe ou foi movida.</p>
      <a routerLink="/" class="btn btn-primary">← Voltar para Home</a>
    </main>
  `
})
export class NotFound {}
