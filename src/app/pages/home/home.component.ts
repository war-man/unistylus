import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDarkTheme = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    return this.isDarkTheme
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');
  }

}
