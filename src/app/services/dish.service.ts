import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

// import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  // getDishes(): Promise<Dish[]> {
  //   // return new Promise(resolve=>{
  //   // // Simulate server latency with 2 second delay
  //   // setTimeout(() => resolve(DISHES), 2000);
  // // })
  // return of(DISHES).pipe(delay(2000)).toPromise();;
  // }
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }


  // getDish(id: string): Promise<Dish> {
  //   // // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  //   // return new Promise(resolve=> {
  //   //   // Simulate server latency with 2 second delay
  //   //     setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
  //   // });
  //   return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000)).toPromise();
  // }
  getDish(id: any): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  // getFeaturedDish(): Promise<Dish> {
  //   // // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  //   // return  new Promise(resolve=> {
  //   //   // Simulate server latency with 2 second delay
  //   //     setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
  //   // });
  //   return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
  // }
  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }


  constructor() { }
}
