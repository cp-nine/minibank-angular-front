import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcreateaccountComponent } from './modalcreateaccount.component';

describe('ModalcreateaccountComponent', () => {
  let component: ModalcreateaccountComponent;
  let fixture: ComponentFixture<ModalcreateaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalcreateaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcreateaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
