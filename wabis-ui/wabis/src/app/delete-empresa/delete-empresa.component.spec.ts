import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpresaComponent } from './delete-empresa.component';

describe('DeleteEmpresaComponent', () => {
  let component: DeleteEmpresaComponent;
  let fixture: ComponentFixture<DeleteEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
