import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletaccountComponent } from './walletaccount.component';

describe('WalletaccountComponent', () => {
  let component: WalletaccountComponent;
  let fixture: ComponentFixture<WalletaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
