import { NgFor } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ParallelScrollerComponent } from '@components/parallel-scroller/parallel-scroller.component';

@Component({
  selector: 'app-parallel-scroller-example',
  standalone: true,
  imports: [ParallelScrollerComponent, NgFor],
  templateUrl: './parallel-scroller-example.component.html',
  styleUrl: './parallel-scroller-example.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParallelScrollerExampleComponent {

  tableHeaders = Array.from(Array(20).keys()).map((item: number) => 'Header '+item);
}
