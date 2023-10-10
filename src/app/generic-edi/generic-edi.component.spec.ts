import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericEdiComponent } from './generic-edi.component';

describe('GenericEdiComponent', () => {
  let component: GenericEdiComponent;
  let fixture: ComponentFixture<GenericEdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericEdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
