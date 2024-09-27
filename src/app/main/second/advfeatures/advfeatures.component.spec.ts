import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvfeaturesComponent } from './advfeatures.component';

describe('AdvfeaturesComponent', () => {
  let component: AdvfeaturesComponent;
  let fixture: ComponentFixture<AdvfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvfeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
