import { Component, OnInit,Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader:Leader;

  constructor(private dishservice: DishService,
    @Inject('BaseURL') public BaseURL,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit(): void {
    // this.dishservice.getFeaturedDish()
    // .then(dish => this.dish = dish);
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);

    // // this.promotion = this.promotionservice.getFeaturedPromotion();
    // this.promotionservice.getFeaturedPromotion()
    // .then(promo => this.promotion = promo);
    this.promotionservice.getFeaturedPromotion().subscribe(pro => this.promotion = pro);

    // // this.leader = this.leaderservice.getFeaturedleader();
    // this.leaderservice.getFeaturedleader()
    // .then(lead => this.leader = lead);
    this.leaderservice.getFeaturedleader().subscribe(lead => this.leader = lead);
  }

}
