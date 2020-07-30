import { Injectable } from '@angular/core';

import { Leader, LEADERS  } from '../shared/leader';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  // // getleaders(): Promise<Leader[]> {
  // //   return Promise.resolve(LEADERS);
  // // }
  // getleaders(): Promise<Leader[]> {
  //   return new Promise(resolve=> {
  //       setTimeout(() => resolve(LEADERS), 2000);
  //   });
  // }
  getleaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }



  // // getleader(id: string): Promise<Leader>{
  // //   return Promise.resolve(LEADERS.filter((promo) => (promo.id === id))[0]);
  // // }
  // getleader(id: string): Promise<Leader> {
  //   return new Promise(resolve=> {
  //       setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
  //   });
  // }
  getleader(id: any): Observable<Leader> {
    return of(LEADERS.filter((lead) => (lead.id === id))[0]).pipe(delay(2000));
  }



  // // getFeaturedleader(): Promise<Leader> {
  // //   return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  // // }
  // getFeaturedleader(): Promise<Leader> {
  //   return  new Promise(resolve=> {
  //       setTimeout(() => resolve(LEADERS.filter((lead) => lead.featured)[0]), 2000);
  //   });
  // }
  getFeaturedleader(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  }

  constructor() { }
}
