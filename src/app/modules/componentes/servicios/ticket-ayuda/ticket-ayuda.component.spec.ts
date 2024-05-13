import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAyudaComponent } from './ticket-ayuda.component';

describe('TicketAyudaComponent', () => {
  let component: TicketAyudaComponent;
  let fixture: ComponentFixture<TicketAyudaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketAyudaComponent]
    });
    fixture = TestBed.createComponent(TicketAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
