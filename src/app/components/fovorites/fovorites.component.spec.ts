import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FovoritesComponent } from './fovorites.component';

describe('FovoritesComponent', () => {
  let component: FovoritesComponent;
  let fixture: ComponentFixture<FovoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FovoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FovoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
