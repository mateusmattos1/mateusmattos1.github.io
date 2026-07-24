import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects';
import { FadeInDirective } from '../../shared/fade-in.directive';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, FadeInDirective],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  protected readonly projects = PROJECTS;
}
