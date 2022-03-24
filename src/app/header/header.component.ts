import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public logoImg = '/../../../../../assets/logosite4.jpg'
  public title = 'goccia di vino';
  public subtitle = 'Sabor e qualidade a um clique de você!';
}
