import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Inputs Variables
  Fname: any;
  Lname: any;

  constructor(private router: Router, public nav: NavController, public toastController: ToastController) { }

  ngOnInit() {
  }

  goToHome() {

    // Finds if either of the inputs not defined  to push a popover notification or are defined in order to navigate to another page

    if (this.Fname === undefined || this.Lname === undefined) {
      this.presentToastWithOptions();
    }
    else {
      let navigationExtras: NavigationExtras ={
          state: {
            fname: this.Fname,
            lname: this.Lname
          }
  
      }
      this.router.navigate(['home'], navigationExtras)
      console.log(navigationExtras, 'worked')
    }
  }

  // Popover to notify that inputs must be filled in

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Error',
      message: 'Please Fill Out Your Name Completely',
      position: 'top',
      duration: 2000,
      mode:'ios',
      showCloseButton: true,
      closeButtonText: 'OK',
    });
    toast.present();
  }

  clear(){
    this.Fname.reset();
    this.Lname.reset()
  }
}
