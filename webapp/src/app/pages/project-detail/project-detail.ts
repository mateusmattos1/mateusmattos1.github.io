import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { getProjectBySlug, Project } from '../../data/projects';
import { FadeInDirective } from '../../shared/fade-in.directive';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, FadeInDirective],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail implements OnInit {
  @Input() slug!: string;

  private readonly titleService = inject(Title);

  protected project?: Project;

  ngOnInit(): void {
    this.project = getProjectBySlug(this.slug);
    if (this.project) {
      this.titleService.setTitle(`${this.project.title} - Mateus de Mattos Ferreira`);
    }
  }
}
