import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddComponent } from './student-add.component';
import { AppStateTestingModule } from '../../state/app.state.testing.module';

describe('StudentAddComponent', () => {
  let component: StudentAddComponent;
  let fixture: ComponentFixture<StudentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStateTestingModule],
      declarations: [StudentAddComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
