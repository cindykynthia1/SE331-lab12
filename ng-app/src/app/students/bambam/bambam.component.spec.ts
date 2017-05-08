import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BambamComponent } from './bambam.component';

describe('BambamComponent', () => {
  let component: BambamComponent;
  let fixture: ComponentFixture<BambamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BambamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BambamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
