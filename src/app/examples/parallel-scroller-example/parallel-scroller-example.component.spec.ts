import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelScrollerExampleComponent } from './parallel-scroller-example.component';

describe('ParallelScrollerExampleComponent', () => {
  let component: ParallelScrollerExampleComponent;
  let fixture: ComponentFixture<ParallelScrollerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelScrollerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParallelScrollerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
