import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { ExploreComponent } from './explore.component'

describe('ExploreComponent', () => {
  let component: ExploreComponent
  let fixture: ComponentFixture<ExploreComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ExploreComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
