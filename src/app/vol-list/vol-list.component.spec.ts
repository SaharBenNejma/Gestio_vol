import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolListComponent } from './vol-list.component';

describe('VolListComponent', () => {
  let component: VolListComponent;
  let fixture: ComponentFixture<VolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VolListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
