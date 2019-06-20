import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showPassword: boolean;
  clicks: number[] = [];
  clickCounter = 0;
  isMoreThanFiveClicks: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

  toggleParagraph(): void {
    this.showPassword = !this.showPassword;
    this.clicks.push(this.clickCounter += 1);
  }
}
