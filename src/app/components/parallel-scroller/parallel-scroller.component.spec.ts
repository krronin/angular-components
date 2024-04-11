import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelScrollerComponent } from './angular-components.component';

describe('ParallelScrollerComponent', () => {
  let component: ParallelScrollerComponent;
  let fixture: ComponentFixture<ParallelScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelScrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParallelScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
