import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericButtonContainerComponent } from './generic-button-container.component';

describe('GenericButtonContainerComponent', () => {
  let component: GenericButtonContainerComponent;
  let fixture: ComponentFixture<GenericButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericButtonContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
