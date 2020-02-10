import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { IonContent, MenuController, ActionSheetController, ModalController, AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    charAt(arg0: number) {
        throw new Error("Method not implemented.");
    }

  @ViewChild(IonContent, {read: ElementRef, static: true}) contentArea: ElementRef;

  toggledAnimation = false;
  Fname: any;
  Lname: any;

  constructor(
      private renderer: Renderer2,
      private menuCtrl: MenuController,
      public actionSheetController: ActionSheetController,
      public modalCtrl: ModalController,
      public alertController: AlertController,
      private router: Router,
      private route: ActivatedRoute,
      private nav: NavController) {

        // Captcher strings inside url path and assigning new variables to the strings

            this.route.queryParams.subscribe(params => {
                if(this.router.getCurrentNavigation().extras.state){
                  // retrives string from deliverable inputs
                  this.Fname = this.router.getCurrentNavigation().extras.state.fname
                  this.Lname = this.router.getCurrentNavigation().extras.state.lname
                };
        })
  }

    // Allow navigation to pizza page and pass 2 variables
      goTopizza(){
        let navigationExtras: NavigationExtras ={
            state: {
              fname: this.Fname,
              lname: this.Lname
            }
    
        }
        this.router.navigate(['pizza'], navigationExtras)
        console.log(navigationExtras, 'worked')
      }

    //   Checking boolean on variable and executing depending on output

  toggleAnimation() {
      if (this.toggledAnimation === false) {
          this.upAnimation();
          this.toggledAnimation = true;
      } else {
          this.downAnimation();
          this.toggledAnimation = false;
      }
  }
//   Specifies what the animation will be 
  upAnimation() {
      this.renderer.setStyle(this.contentArea.nativeElement, 'transform', `translateY(0px)`);
  }

  downAnimation() {
      this.renderer.setStyle(this.contentArea.nativeElement, 'transform', `translateY(50px)`);
  }

  //   Event that allows an animation to occur on the ion-content when scrolling up or down
  handleScroll(ev) {
      const scrollTop = ev.detail.currentY;
      if (scrollTop >= 25) {
          this.upAnimation();
      }
      if (scrollTop < 20 && this.toggledAnimation === false) {
          this.downAnimation();
      }
      if (scrollTop < 1) {
          this.downAnimation();
          this.toggledAnimation = false;
      }
  }
}