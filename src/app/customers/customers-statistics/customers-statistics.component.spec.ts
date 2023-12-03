import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersStatisticsComponent } from './customers-statistics.component';

describe('CustomersStatisticsComponent', () => {
  let component: CustomersStatisticsComponent;
  let fixture: ComponentFixture<CustomersStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
