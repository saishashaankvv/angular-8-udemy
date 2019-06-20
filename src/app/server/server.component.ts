import { Component } from '@angular/core';
import { read } from 'fs';

@Component({
    selector : 'app-server',
    styleUrls : ['./server.component.css'],
    templateUrl : './server.component.html'
})
export class ServerComponent {
    serverId : number = 10;
    serverStatus : string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() : string {
        return this.serverStatus;
    }

    getColor () : string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    isServerOnline() : boolean {
        return this.serverStatus === 'online';
    }
}