import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPharmacieComponent } from './list-pharmacie.component';

describe('ListPharmacieComponent', () => {
  let component: ListPharmacieComponent;
  let fixture: ComponentFixture<ListPharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
