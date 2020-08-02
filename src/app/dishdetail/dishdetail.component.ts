import { Component, OnInit , Input,ViewChild } from '@angular/core';
import { Dish } from '../shared/dish';

import {DishService} from '../services/dish.service';
import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Comment} from '../shared/comment';
 

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})


export class DishdetailComponent implements OnInit {
  @ViewChild('fform') commentFormDirective;
  k:any
  formatLabel(value: number) {
    return value;
   }

// @Input() dish:Dish; //same variable as in menu comp selector(component interaction from parent to child)
  dish:Dish;
  dishIds: string[];
  prev: string;
  next: string;
  date:any;

  commentForm: FormGroup;
  comment: Comment;
  

  constructor(private dishservice:DishService,
    private route:ActivatedRoute,
    private location:Location,
    private fb: FormBuilder) {
      this.date=new Date();
      this.createForm();
    
     }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    // this.dishservice.getDish(id)
    // .then(dish => this.dish = dish);
    this.dishservice.getDish(id).subscribe(dish => this.dish = dish);

    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });

  }

  goBack():void{
    this.location.back();
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }



  formErrors = {
    'author': '',
    // 'rating': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    // 'rating': {
    //   'required':      'Tel. number is required.',
    //   'pattern':       'Tel. number must contain only numbers.'
    // },
    'comment': {
      'required':      'Comment is required.',
    },
  };

  
  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      rating: '5',
      comment: ['',[Validators.required]],
      date:this.date
   
    });

    this.commentForm.valueChanges
      .subscribe(data => 
        this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
  }
  data(data)
  {
    return data;
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }



  onSubmit() {
    this.comment = this.commentForm.value;
    console.log(this.comment);
    this.dish.comments.push(this.comment,this.date);
    this.commentForm.reset({
     author:'',
     rating:5,
     comment:""
    });
   
    this.commentFormDirective.resetForm();
  }


  

}
