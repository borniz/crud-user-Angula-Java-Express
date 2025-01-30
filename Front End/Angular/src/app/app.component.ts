import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular';
}
