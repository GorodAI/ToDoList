import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewListItemComponent } from './add-new-list-item.component';

describe('AddNewListItemComponent', () => {
  let component: AddNewListItemComponent;
  let fixture: ComponentFixture<AddNewListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
