import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeThemeComponent } from './customize-theme.component';

describe('CustomizeThemeComponent', () => {
  let component: CustomizeThemeComponent;
  let fixture: ComponentFixture<CustomizeThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
