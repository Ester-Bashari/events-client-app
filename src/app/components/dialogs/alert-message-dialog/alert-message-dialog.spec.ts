import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertMessageDialog} from './alert-message-dialog';

describe('AlertMessageDialog', () => {
  let component: AlertMessageDialog;
  let fixture: ComponentFixture<AlertMessageDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertMessageDialog]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AlertMessageDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
