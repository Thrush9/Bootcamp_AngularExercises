import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditopenerComponent } from './editopener.component';

describe('EditopenerComponent', () => {
  let component: EditopenerComponent;
  let fixture: ComponentFixture<EditopenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditopenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditopenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
