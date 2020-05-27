import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseReviewsComponent } from './browse-reviews.component';

describe('BrowseReviewsComponent', () => {
  let component: BrowseReviewsComponent;
  let fixture: ComponentFixture<BrowseReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
