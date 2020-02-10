import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  //Contact Variables
  address: any;
  number: any;
  special: any;

  //Toppigns Variables
  pepperoni: any;
  veggies: any;
  mushrooms: any;
  cheese: any;

  //Payment Variables
    Payment: any;

  // Name Variable
  Fname: any;
  Lname: any;

  // Pizzaa Type Variable
  Pizza: any;

  toppings: any;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private nav: NavController) {

                /* Calling all variables that are stored in the Object and assigning a new variable
                  name to the string attached with variables inside the object */

                this.route.queryParams.subscribe(params => {
                  if(this.router.getCurrentNavigation().extras.state){
                    // retrives string from deliverable inputs
                    this.address = this.router.getCurrentNavigation().extras.state.address
                    this.number = this.router.getCurrentNavigation().extras.state.number
                    this.special = this.router.getCurrentNavigation().extras.state.special

                    // Retrives special toppings strings
                    
                    this.pepperoni = this.router.getCurrentNavigation().extras.state.pepperoni
                    this.veggies = this.router.getCurrentNavigation().extras.state.veggies
                    this.mushrooms = this.router.getCurrentNavigation().extras.state.mushrooms
                    this.cheese = this.router.getCurrentNavigation().extras.state.cheese
                    // Retrieve payment string
                    this.Payment = this.router.getCurrentNavigation().extras.state.payment
                  

                    // Retrive Name strings
                    this.Fname = this.router.getCurrentNavigation().extras.state.fname
                    this.Lname = this.router.getCurrentNavigation().extras.state.lname

                    // Retieving Pizza Type
                    this.Pizza = this.router.getCurrentNavigation().extras.state.food

                    // Checking if string was attached to the variable else add a default string

                    if(this.cheese === undefined && this.veggies === undefined && this.pepperoni === undefined && this.mushrooms === undefined){
                      this.toppings = 'No Extra Toppings'
                      this.pepperoni = ''
                      this.mushrooms = ''
                      this.cheese = ''
                      this.veggies = ''
                    }
                    else{
                      this.pepperoni = this.pepperoni
                      this.mushrooms = this.mushrooms
                      this.cheese = this.cheese
                      this.veggies = this.veggies

                    }

                    if(this.special === undefined){
                      this.special = 'No Special Request'
                    }
                    else{
                      this.special = this.special

                    }
                  }
                });
               }

  ngOnInit() {
  }
  goback(){
    this.nav.navigateBack('login')
    console.log('working')
    }
}
