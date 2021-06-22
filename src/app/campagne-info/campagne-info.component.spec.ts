import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneInfoComponent } from './campagne-info.component';

describe('CampagneInfoComponent', () => {
  let component: CampagneInfoComponent;
  let fixture: ComponentFixture<CampagneInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampagneInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
