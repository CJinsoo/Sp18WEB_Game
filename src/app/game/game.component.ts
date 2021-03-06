import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Game, User, Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  Model = new Game();
  Me : User;
  
  private _apiUrl = "http://localhost:8080/game";

  constructor(private http: Http) { 
    //this.Me.Name = "Jinsoo Choi"
    //http.get(this._apiUrl + "/quote", { params : { playerId: this.Me.Name } }).subscribe(data => this.Me.MyQuotes = data.json())//make data an object
    //this.Me.MyQuotes = http.get(this._apiUrl + "/quote") -> would have been if we were synchronous.
    setInterval(() => this.refresh(), 1000)//we made a function that calls the function. defined by where its defined.
  }

  ngOnInit() {
  }

  //get the game state, store in our local. Load it every few seconds
  refresh(){
    this.http.get(this._apiUrl + "/state")
      .subscribe(data => this.Model = data.json())
  } //this makes it local property. We don't have a local variable http in this function
  //we are replacing our Model whenever refreshing. We don't want to have 7 quotes every few seconds. 

  flipPicture(e: MouseEvent){//could ignore parameter
    if( this.IAmTheDealer() == true && this.Model.PlayedQuotes.length == 0 ){
      this.http.post(this._apiUrl + "/picture", {})
        .subscribe();//we update our model in a second
    } 
  }//rx.js is a functional programming, nothing happens until subscribe activates

  chooseQuote(e: MouseEvent, quote: Quote){
    e.preventDefault();
    this.http.post(this._apiUrl + "/quote",{Winner: quote.PlayerId, Text:quote.Text})
        .subscribe();
   
  }

  //function on the component (in controller, we can specify as much, but in Model, we don't care)
  //add event object inside parameter. e -> DOM object
  submitQuote(e: MouseEvent, text: string) {
    e.preventDefault();//do not create a browser event. I've already handled it.
    if(!this.IAmTheDealer()==true){
      if(this.MyPlayedQuote()) return;//If I've summited a quote, don't do anything.
    //falsy that returns false
    //is not a boolean?? -> means : if there's anything there

    this.http.post(this._apiUrl + "/quote", {Text: text, PlayerId: this.Me.Name })
      .subscribe(data =>{
        if(data.json().sucess){
          this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 );//Only if there's one quote submitted
        }
      });

    }
    //if not, push the quote and splice
    //this.Model.PlayedQuote.push();
    
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

  login(name: string){
    this.http.get(this._apiUrl + "/quote", { params : { playerId: name } })
    .subscribe(data=> this.Me =  {Name: name, MyQuotes: data.json() } )
  }

  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerId == this.Me.Name ); //null;

  //WinPlayer = () => this.ChosenQuote().PlayerId;
  //give us the chosen quote (it actually belong to Model)
  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
  //belong to Model
  IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1;
  //dynamic function using fat arrow function. Not just static. It fetches and sets the variable refresh.
  IAmTheDealer = () => this.Me.Name == this.Model.DealerId;
}
