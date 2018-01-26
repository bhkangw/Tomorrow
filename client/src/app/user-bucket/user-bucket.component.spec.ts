import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBucketComponent } from './user-bucket.component';

describe('UserBucketComponent', () => {
  let component: UserBucketComponent;
  let fixture: ComponentFixture<UserBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
