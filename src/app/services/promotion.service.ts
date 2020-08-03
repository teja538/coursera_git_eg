import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  // getPromotions(): Promise<Promotion[]> {
  //   // return Promise.resolve(PROMOTIONS);
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(PROMOTIONS), 2000);
  //   });
  // }
  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  // getPromotion(id: string): Promise<Promotion> {
  //   // return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
  //   });
  // }
  getPromotion(id: any): Observable<Promotion> {
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
  }


  // getFeaturedPromotion(): Promise<Promotion> {
  //   //return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  //   return  new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(PROMOTIONS.filter((promo) => promo.featured)[0]), 2000);
  //   });
  // }
  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter((pro) => pro.featured)[0]).pipe(delay(2000));
  }

 


  constructor() { }
}
