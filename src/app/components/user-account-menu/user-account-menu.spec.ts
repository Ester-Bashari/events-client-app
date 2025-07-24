import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserAccountMenu} from './user-account-menu';

describe('UserAccountMenu', () => {
  let component: UserAccountMenu;
  let fixture: ComponentFixture<UserAccountMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAccountMenu]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserAccountMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
