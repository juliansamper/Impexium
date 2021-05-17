import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditItemComponent } from './addedit-item.component';

describe('AddeditItemComponent', () => {
  let component: AddeditItemComponent;
  let fixture: ComponentFixture<AddeditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
