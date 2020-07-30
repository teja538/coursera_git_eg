import { Injectable } from '@angular/core';

import { Leader, LEADERS  } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  // getleaders(): Promise<Leader[]> {
  //   return Promise.resolve(LEADERS);
  // }
  getleaders(): Promise<Leader[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS), 2000);
    });
  }


  // getleader(id: string): Promise<Leader>{
  //   return Promise.resolve(LEADERS.filter((promo) => (promo.id === id))[0]);
  // }
  getleader(id: string): Promise<Leader> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
    });
  }


  // getFeaturedleader(): Promise<Leader> {
  //   return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  // }
  getFeaturedleader(): Promise<Leader> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((lead) => lead.featured)[0]), 2000);
    });
  }


  constructor() { }
}
