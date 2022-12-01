import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTwdbComponent } from './pipe-twdb.component';

describe('PipeTwdbComponent', () => {
  let component: PipeTwdbComponent;
  let fixture: ComponentFixture<PipeTwdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeTwdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTwdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
