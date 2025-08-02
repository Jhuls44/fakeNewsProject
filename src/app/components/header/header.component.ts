import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentDate: Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 60000);
  }
}