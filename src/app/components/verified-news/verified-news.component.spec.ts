import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedNewsComponent } from './verified-news.component';

describe('VerifiedNewsComponent', () => {
  let component: VerifiedNewsComponent;
  let fixture: ComponentFixture<VerifiedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiedNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
