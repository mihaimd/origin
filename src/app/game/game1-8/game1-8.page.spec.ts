import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game18Page } from './game1-8.page';

describe('Game18Page', () => {
  let component: Game18Page;
  let fixture: ComponentFixture<Game18Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Game18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
