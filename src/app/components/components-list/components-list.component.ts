import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-components-list',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss'
})
export class ComponentsListComponent {

}
