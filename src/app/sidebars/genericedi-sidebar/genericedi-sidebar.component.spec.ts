import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericediSidebarComponent } from './genericedi-sidebar.component';

describe('GenericediSidebarComponent', () => {
  let component: GenericediSidebarComponent;
  let fixture: ComponentFixture<GenericediSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericediSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericediSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
