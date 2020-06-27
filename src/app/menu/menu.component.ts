import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[]; //data given above in const

  selectedDish:Dish;


  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();//returns dishes details
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }


}
