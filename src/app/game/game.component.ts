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
  //add event object inside parameter. e -> DOM object
  submitQuote(e: MouseEvent, text: string) {
    e.preventDefault();//do not create a browser event. I've already handled it.

    if(this.MyPlayedQuote()) return;//If I've summited a quote, don't do anything.
    //falsy that returns false
    //is not a boolean?? -> means : if there's anything there

    //if not, push the quote and splice
    this.Model.PlayedQuote.push({ Text: text, PlayerName: this.Me.Name, Chosen: false });
    this.Model.MyQuotes.splice( this.Model.MyQuotes.indexOf(text), 1 );
  }

  /*
  //quote that I submmited already. How do we keep track of it?
  MyPlayedQuote(): Quote | null {
    //putting types together, typescript specific.
    //a function can return any type we want. If it's not null, it can't have null

    //fat arrow function
    return this.Model.PlayedQuote.find( x => x.PlayerName == this.Me.Name ); //null;
  }
  */

  MyPlayedQuote = () => this.Model.PlayedQuote.find( x => x.PlayerName == this.Me.Name ); //null;

  //give us the chosen quote (it actually belong to Model)
  ChosenQuote = () => this.Model.PlayedQuote.find( x => x.Chosen );
  //belong to Model
  IsEveryoneDone = () => this.Model.PlayedQuote.length == this.Model.Players.length - 1;
  //dynamic function using fat arrow function. Not just static. It fetches and sets the variable refresh.
  IAmTheDealer = () => this.Me.Name == this.Model.Dealer;
}
