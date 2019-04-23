import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletProfileComponent } from './wallet-profile.component';

describe('WalletProfileComponent', () => {
  let component: WalletProfileComponent;
  let fixture: ComponentFixture<WalletProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
