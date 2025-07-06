import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Game123Page } from './game1-23.page';

describe('Game123Page', () => {
  let component: Game123Page;
  let fixture: ComponentFixture<Game123Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Game123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
