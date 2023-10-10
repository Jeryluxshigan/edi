import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesSidebarComponent } from './charges-sidebar.component';

describe('ChargesSidebarComponent', () => {
  let component: ChargesSidebarComponent;
  let fixture: ComponentFixture<ChargesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargesSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
