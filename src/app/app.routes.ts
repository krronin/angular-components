import { Routes } from '@angular/router';
import { ComponentsListComponent } from '@components/components-list/components-list.component';
import { ParallelScrollerExampleComponent } from './examples/parallel-scroller-example/parallel-scroller-example.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ComponentsListComponent },
  { path: 'parallel-scroller', component: ParallelScrollerExampleComponent },
];
