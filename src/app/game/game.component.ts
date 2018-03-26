import { Component, OnInit } from '@angular/core';
import { Game, User, Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  Model = new Game();
  Me = new User();
  
  constructor() { 
    this.Me.Name = "Jinsoo Choi"
  }

  ngOnInit() {
  }

  //function on the component (in controller, we can specify as much, but in Model, we don't care)
  //add event object inside parameter
  submitQuote(e: MouseEvent, text: string) {
    e.preventDefault();

    if(this.MyPlayedQuote()) return;

    this.Model.PlayedQuote.push({ Text: text, PlayerName: this.Me.Name, Chosen: false });
    this.Model.MyQuotes.splice( this.Model.MyQuotes.indexOf(text), 1 );
  }

  MyPlayedQuote(): Quote | null {//a function can return any type we want. If it's not null, it can't have null
    return this.Model.PlayedQuote.find( x => x.PlayerName == this.Me.Name ); //null;
  }

}
