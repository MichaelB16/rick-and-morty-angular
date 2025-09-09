import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './test/hello/hello.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Meu App Angular';
  count = 0;

  addCount() {
    this.count = ++this.count;
  }
}
