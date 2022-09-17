import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveNoteModalComponent } from './save-note-modal.component';

describe('SaveNoteModalComponent', () => {
  let component: SaveNoteModalComponent;
  let fixture: ComponentFixture<SaveNoteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveNoteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveNoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
