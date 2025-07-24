import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FullWidthLayout} from './full-width-layout';

describe('FullWidthLayout', () => {
  let component: FullWidthLayout;
  let fixture: ComponentFixture<FullWidthLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullWidthLayout]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FullWidthLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
