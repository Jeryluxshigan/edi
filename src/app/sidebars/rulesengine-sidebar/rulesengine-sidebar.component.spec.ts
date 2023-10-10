import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesengineSidebarComponent } from './rulesengine-sidebar.component';

describe('RulesengineSidebarComponent', () => {
  let component: RulesengineSidebarComponent;
  let fixture: ComponentFixture<RulesengineSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesengineSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesengineSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
