import { Component, OnInit,Inject } from '@angular/core';

import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[]; //data given above in const
  errMess: string;
  // selectedDish:Dish;


  constructor(private dishService: DishService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    ////this.dishes = this.dishService.getDishes();//returns dishes details
    // this.dishService.getDishes()
    // .then(dishes => this.dishes = dishes);
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);

  }

  // onSelect(dish: Dish) {
  //   this.selectedDish = dish;
  // }


}
