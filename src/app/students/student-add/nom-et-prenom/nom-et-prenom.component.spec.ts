import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomEtPrenomComponent } from './nom-et-prenom.component';

describe('NomEtPrenomComponent', () => {
  let component: NomEtPrenomComponent;
  let fixture: ComponentFixture<NomEtPrenomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NomEtPrenomComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomEtPrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
