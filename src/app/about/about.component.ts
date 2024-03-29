import { Component, OnInit } from '@angular/core';

import { Leader } from '../shared/leader';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leaders:Leader[];

  constructor(private leaderservice:LeaderService) { }

  ngOnInit(): void {
    //// this.leaders=this.leaderservice.getleaders();
    // this.leaderservice.getleaders()
    //   .then(lead => this.leaders = lead);
    this.leaderservice.getleaders().subscribe(lead => this.leaders = lead);

  }

}
