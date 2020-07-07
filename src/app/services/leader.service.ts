import { Injectable } from '@angular/core';

import { Leader, LEADERS  } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getleaders(): Leader[] {
    return LEADERS;
  }

  getleader(id: string): Leader{
    return LEADERS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedleader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }


  constructor() { }
}
