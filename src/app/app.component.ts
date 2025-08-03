import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { NewsVerifierComponent } from "./components/news-verifier/news-verifier.component";
import { VerifiedNewsComponent } from './components/verified-news/verified-news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NewsSectionComponent, 
    NewsVerifierComponent,
    VerifiedNewsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'fake-news-detector';
}