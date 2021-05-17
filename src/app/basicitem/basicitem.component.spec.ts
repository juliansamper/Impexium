import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicitemComponent } from './basicitem.component';

describe('BasicitemComponent', () => {
  let component: BasicitemComponent;
  let fixture: ComponentFixture<BasicitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
