import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsVerifierComponent } from './news-verifier.component';

describe('NewsVerifierComponent', () => {
  let component: NewsVerifierComponent;
  let fixture: ComponentFixture<NewsVerifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsVerifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
