import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDataTableComponent } from './customers-data-table.component';

describe('CustomersDataTableComponent', () => {
  let component: CustomersDataTableComponent;
  let fixture: ComponentFixture<CustomersDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersDataTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
