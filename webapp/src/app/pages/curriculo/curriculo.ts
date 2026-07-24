import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../shared/fade-in.directive';
import {
  ABOUT_TEXT,
  CERTIFICATIONS,
  COURSES,
  EDUCATION,
  EXPERIENCE,
  PERSONAL_INFO,
  SKILLS_TAGS,
  SKILLS_TEXT
} from '../../data/resume';

@Component({
  selector: 'app-curriculo',
  imports: [RouterLink, FadeInDirective],
  templateUrl: './curriculo.html',
  styleUrl: './curriculo.css'
})
export class Curriculo {
  protected readonly personalInfo = PERSONAL_INFO;
  protected readonly aboutText = ABOUT_TEXT;
  protected readonly experience = EXPERIENCE;
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
  protected readonly courses = COURSES;
  protected readonly skillsText = SKILLS_TEXT;
  protected readonly skillsTags = SKILLS_TAGS;
}
