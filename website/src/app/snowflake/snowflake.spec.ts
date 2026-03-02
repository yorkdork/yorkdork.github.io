import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snowflake } from './snowflake';

describe('Snowflake', () => {
  let component: Snowflake;
  let fixture: ComponentFixture<Snowflake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Snowflake],
    }).compileComponents();

    fixture = TestBed.createComponent(Snowflake);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
