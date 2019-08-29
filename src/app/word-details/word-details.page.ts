import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.page.html',
  styleUrls: ['./word-details.page.scss'],
})
export class WordDetailsPage implements OnInit {
  word;
  color;
  font;
  constructor(private activatedRoute: ActivatedRoute, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('wordId')){
        this.router.navigate(['home/']);
        return;
      }
      const wordId = paramMap.get('wordId');
      this.word = this.data.showWord(wordId);
      this.chooseColor();
    })
  }
  chooseColor(){
    if(parseInt(this.word['level']) < 3 && parseInt(this.word['level']) > 0){
      this.color = 'success';
      this.font = 'light'
    }
    else if(parseInt(this.word['level']) === 3){
      this.color = 'warning';
      this.font = 'success'
    }
    else if(parseInt(this.word['level']) > 3 && parseInt(this.word['level']) <= 5){
      this.color = 'danger';
      this.font = 'light'

    }
  }
}
