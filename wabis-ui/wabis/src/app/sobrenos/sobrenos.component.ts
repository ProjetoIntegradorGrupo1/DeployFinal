import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.css']
})
export class SobrenosComponent implements OnInit {

  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit(){
    window.scroll(0,0);
  }

}

