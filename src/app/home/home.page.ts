import { Component } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slang;
  constructor(private data: DataService) {}
  ionViewWillEnter() {
    this.slang = this.data.showData()
  }
}
