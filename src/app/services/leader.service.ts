import { Injectable } from '@angular/core';

import { Leader, LEADERS  } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getleaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getleader(id: string): Promise<Leader>{
    return Promise.resolve(LEADERS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedleader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }


  constructor() { }
}
