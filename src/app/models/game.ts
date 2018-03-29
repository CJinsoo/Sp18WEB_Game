

export class Game {
    MyQuotes:string[] = [
        "Great minds think alike, but ...",
        "Axis of Evil",
        "There are two extremes",
        "Don't cry because it's over, smile because it happened",
        "Be yourself; everyone else is already taken",
        "So many books, so little time",
        "Be the change that you wish to see in the world",
        "In three words I can sum up everything I've learned about life: it goes on",
        "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'",
        "A friend is someone who knows all about you and still loves you",
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that"
    ];
    Players: User[] = [
        { Name: 'Jinsoo Choi'},//Doctype. Player has to be an array of Users, but I didn't have to use new User()
        { Name: 'Hyesoo Choi'},
        { Name: 'Kira Han'}
    ];

    //need identifier because variables are not passed through server.
    Dealer: string = "Jinsoo Choi"

    Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1080-600.jpg';
    
    PlayedQuote: Quote[] = [
        { Text: "That's fake news", PlayerName: 'Hyesoo Choi', Chosen:false }
    ];

}

export class User {
    Name:string;
    
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}