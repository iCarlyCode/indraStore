import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonSlides) sliceEl: IonSlides;
  offers = this.homeService.getOffersData();
  sponsorship = this.homeService.getSponsorshipData();

  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 800,
    spaceBetween: 8,
    slidesPerView: 1.5,
    freeMode: true,
    loop: true,
  };

  constructor(private homeService: HomeService) {}

  ionViewWillEnter() {
    this.sliceEl.startAutoplay();
  }
}
