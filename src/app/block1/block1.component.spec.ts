import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Block1Component } from './block1.component';

describe('Block1Component', () => {
  let component: Block1Component;
  let fixture: ComponentFixture<Block1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Block1Component]
    });
    fixture = TestBed.createComponent(Block1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
