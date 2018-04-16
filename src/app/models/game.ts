

export class Game {
    Players: User[] = [
        { Name: 'Jinsoo Choi', MyQuotes: [] },//Doctype. Player has to be an array of Users, but I didn't have to use new User()
        { Name: 'Hyesoo Choi', MyQuotes: []},
        { Name: 'Kira Han', MyQuotes: []}
    ];

    //need identifier because variables are not passed through server.
    Dealer: string = "Jinsoo Choi"

    Picture: {
        url: string
    };
    
    PlayedQuote: Quote[] = [
        { Text: "That's fake news", PlayerName: 'Hyesoo Choi', Chosen:false }
    ];

} 

export class User {
    Name:string;
    
    MyQuotes:string[];
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}