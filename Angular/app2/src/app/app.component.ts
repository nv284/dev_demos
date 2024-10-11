import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormsModule,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app2';
  initialCount = 18;
}
