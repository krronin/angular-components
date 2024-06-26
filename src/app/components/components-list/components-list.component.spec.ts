import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsListComponent } from './components-list.component';

describe('ComponentsListComponent', () => {
  let component: ComponentsListComponent;
  let fixture: ComponentFixture<ComponentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
