import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesComponent } from './classes.component';
import { AppStateTestingModule } from '../state/app.state.testing.module';

describe('ClassesComponent', () => {
  let component: ClassesComponent;
  let fixture: ComponentFixture<ClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStateTestingModule],
      declarations: [ClassesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
