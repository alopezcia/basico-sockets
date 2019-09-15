import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: []
})
export class MensajesComponent implements OnInit {

  constructor(public wsService: WebsocketService,
              public router: Router  ) { }

  ngOnInit() {
  }

  salir(){
    this.wsService.logoutWS();
    this.router.navigateByUrl('/');
  }

}
