import { Component } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-word-menu',
  templateUrl: './word-menu.page.html',
  styleUrls: ['./word-menu.page.scss'],
})
export class WordMenuPage{

  slang;
  constructor(private data: DataService) {}
  ionViewWillEnter() {
    this.slang = this.data.showData()
  }

}
