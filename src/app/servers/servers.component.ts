import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "";
  serverName: string = "";
  isServerCreated: boolean = false;
  servers = [{ serverId: 10, serverStatus: 'online' }, { serverId: 11, serverStatus: 'offline' }];
  serverId : number = 11;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() : void {
    this.isServerCreated = true;
    this.servers.push({serverId : 11, serverStatus : 'online'});
    this.serverCreationStatus = "Server was created, New server is = " + this.serverName;
  }
}
