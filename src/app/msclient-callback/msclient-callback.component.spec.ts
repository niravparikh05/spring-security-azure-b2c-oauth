import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsclientCallbackComponent } from './msclient-callback.component';

describe('MsclientCallbackComponent', () => {
  let component: MsclientCallbackComponent;
  let fixture: ComponentFixture<MsclientCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsclientCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsclientCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
