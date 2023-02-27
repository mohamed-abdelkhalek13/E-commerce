import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  onBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
