import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMoreComponent } from './see-more.component';

describe('SeeMoreComponent', () => {
  let component: SeeMoreComponent;
  let fixture: ComponentFixture<SeeMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
