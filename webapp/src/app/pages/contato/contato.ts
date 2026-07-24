import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../shared/fade-in.directive';

interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contato',
  imports: [RouterLink, FadeInDirective],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  protected readonly socialLinks: SocialLink[] = [
    { icon: '🔗', label: 'LinkedIn', url: 'https://www.linkedin.com/in/mateus-de-mattos-ferreira-270259180' },
    { icon: '📷', label: 'Instagram', url: 'https://www.instagram.com/mateusmattos2/' },
    { icon: '👤', label: 'Facebook', url: 'https://www.facebook.com/mateus.demattosferreira.7' },
    { icon: '⚡', label: 'GitHub', url: 'https://github.com/mateusmattos1' }
  ];
}
