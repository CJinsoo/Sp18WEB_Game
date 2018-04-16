

export class Game {
    Players: User[] = [];

    //need identifier because variables are not passed through server.
    DealerId: string;

    Picture: {
        url: string
    };
    
    PlayedQuotes: Quote[] = [];

} 

export class User {
    Name:string;
    
    MyQuotes:string[];
}

export class Quote {
    Text: string;
    PlayerId: string;
    Chosen: boolean = false;
}