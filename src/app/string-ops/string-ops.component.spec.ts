import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringOpsComponent } from './string-ops.component';

describe('StringOpsComponent', () => {
  let component: StringOpsComponent;
  let fixture: ComponentFixture<StringOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
