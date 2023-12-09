import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent1 } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent1;
  let fixture: ComponentFixture<HomeComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent1]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
