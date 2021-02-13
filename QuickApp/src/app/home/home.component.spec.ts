import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { BookService } from '../book.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    let testBook = {book : {"id": 1, "name": "Python", "vendor": "All Developers"}}
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ MatToolbarModule, MatIconModule, MatButtonModule ],
      providers: [{provide:BookService, useValue: testBook }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check for Mat-tool bar element', () =>{
    let toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbar).toBeTruthy();
  });

  it('check for ul element', () => {
    let ullist = fixture.debugElement.query(By.css('ul'));
    expect(ullist).toBeTruthy(); 
  });

  it('check for button elemnt', () => {
    let buttonObj = fixture.debugElement.query(By.css('.class-submit'));
    expect(buttonObj).toBeTruthy();
    expect(buttonObj.nativeElement.textContent).toEqual('Sign In')
   });

  it('check content of span elemnt', () => {
   let spanObj = fixture.debugElement.query(By.css('.class-book'));
   expect(spanObj).toBeTruthy();
   expect(spanObj.nativeElement.textContent).toEqual('Book List')
  });

  it('check content of h1 element', () => {
    let hObj = fixture.debugElement.query(By.css('#hid'));
    expect(hObj).toBeTruthy();
    component.addr='Amazon Bigbillion Days'
    fixture.detectChanges();
    expect(hObj.nativeElement.textContent).toEqual('Address : Amazon Bigbillion Days')
  });

  it('check for content of div', () => {
    let result = fixture.debugElement.injector.get(BookService);
    let divObj = fixture.debugElement.query(By.css('.class-vendor'));
    fixture.detectChanges();
    expect(divObj.nativeElement.textContent).toEqual('All Developers')
  });

});
