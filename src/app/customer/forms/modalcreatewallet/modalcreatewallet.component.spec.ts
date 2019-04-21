import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcreatewalletComponent } from './modalcreatewallet.component';

describe('ModalcreatewalletComponent', () => {
  let component: ModalcreatewalletComponent;
  let fixture: ComponentFixture<ModalcreatewalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalcreatewalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcreatewalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
