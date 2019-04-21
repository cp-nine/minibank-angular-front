import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicnavbarComponent } from './publicnavbar.component';

describe('PublicnavbarComponent', () => {
  let component: PublicnavbarComponent;
  let fixture: ComponentFixture<PublicnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
