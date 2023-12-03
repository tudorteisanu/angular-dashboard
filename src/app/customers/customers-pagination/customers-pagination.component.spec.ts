import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPaginationComponent } from './customers-pagination.component';

describe('CustomersPaginationComponent', () => {
  let component: CustomersPaginationComponent;
  let fixture: ComponentFixture<CustomersPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
