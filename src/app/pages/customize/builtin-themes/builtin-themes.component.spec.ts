import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinThemesComponent } from './builtin-themes.component';

describe('BuiltinThemesComponent', () => {
  let component: BuiltinThemesComponent;
  let fixture: ComponentFixture<BuiltinThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltinThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
