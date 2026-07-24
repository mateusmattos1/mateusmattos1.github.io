import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected readonly open = signal(false);

  toggle(): void {
    this.open.update(v => !v);
  }

  close(): void {
    this.open.set(false);
  }
}
