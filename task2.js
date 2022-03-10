var tally = {
    deck : [],
    dealerHand: [],
    playerHand: [],
    dealPoints: 0,
    playerPoints:0,
    winner:0,
    cSuits : ["♠","♡","♢","♣"],
    cValues : {1:"A",11:"J",12:"Q",13:"K"},
    turn : 0,
    newgame: () =>{
    tally.newgames=document.getElementById("newgames");
    tally.submit=document.getElementById('submit');
    tally.hit = document.getElementById("hit");
    tally.hidden = document.getElementById("hidden");
    tally.bet=document.getElementById("bet").value;
    tally.betamount = document.getElementById("betamount");
    tally.dealerscards = document.getElementById("dealerscards");
    tally.playerscards = document.getElementById("playerscards");
    tally.dealerTotal=document.getElementById('dealpoints');
    tally.playerTotal=document.getElementById('playerpoints')
    tally.staying = document.getElementById("stay");
    tally.dealerStand = document.getElementById('ds');
    tally.playerStand = document.getElementById('ps');  
    tally.winner =0;
    card1 = 0;


    tally.newgames.onclick = function restart () {
        alert("Type in how much you want to bet and hit submit and start playing!");
        tally.hidden.classList.remove('newgame');
        tally.bet = "";
        tally.betamount.innerHTML='';
        tally.bet.innerHTML = "";
        tally.deck = [];
        tally.playerHand = [];
        tally.dealerHand = [];
        tally.dealPoints= 0;
        tally.playerPoints=0;
        tally.dealerscards.innerHTML = '';
        tally.playerscards.innerHTML = '';
        tally.dealerTotal.innerHTML = '?';
        tally.playerTotal.innerHTML ='No Cards'
        tally.playerStand.classList.remove('display');
        tally.winner =0;
        tally.newgame();
        tally.turn = 0;
        console.log(tally)
        }
    tally.submit.onclick = function () {
        tally.hidden.classList.add('newgame');
        tally.bet=document.getElementById("bet").value;
        
        message = "You are betting" + tally.bet + "Good luck!";
        tally.betamount.innerHTML = "You are betting" + " $" + tally.bet + ". " + "Good luck!";
       for (let i=0;i<4;i++){
           for (let j=1; j<14; j++){
               tally.deck.push({suit : i,value : j});
           }
       }
       for (let i=tally.deck.length-1;i>0;i--){
        shuffle = Math.floor(Math.random() * i);
        shuffled= tally.deck[i];
        tally.deck[i] = tally.deck[shuffle];
        tally.deck[shuffle] = shuffled;
       }
     

        function onecard(){
           oneCard = tally.deck.pop();
           oneCardDiv = document.createElement('div');
           if(tally.turn==0){
           if(oneCard.value==1 || oneCard.value== 11 || oneCard.value==12 || oneCard.value==13 ){
            oneCard.value= tally.cValues[oneCard.value];
            oneCardDiv.className = "cardstyle";
            actualCard = oneCard.value + tally.cSuits[oneCard.suit]
            oneCardDiv.innerHTML = actualCard;
            tally.playerscards.appendChild(oneCardDiv);
            tally.playerHand.push(oneCard.value);
            
        }
            else {
            actualCard = oneCard.value + tally.cSuits[oneCard.suit]
           oneCardDiv.className = "cardstyle";
           oneCardDiv.innerHTML = actualCard;
           tally.playerscards.appendChild(oneCardDiv);
           tally.playerHand.push(oneCard.value)
           
        }
    }
    if(tally.turn==1){
        if(oneCard.value==1 || oneCard.value== 11 || oneCard.value==12 || oneCard.value==13 ){
         oneCard.value= tally.cValues[oneCard.value];
         oneCardDiv.className = "cardstyle";
         actualCard = oneCard.value + tally.cSuits[oneCard.suit];
         oneCardDiv.innerHTML = actualCard;
         tally.dealerscards.appendChild(oneCardDiv);
         tally.dealerHand.push(oneCard.value)
         
     } else {
         actualCard = oneCard.value + tally.cSuits[oneCard.suit];
        oneCardDiv.className = "cardstyle";
        oneCardDiv.innerHTML = actualCard;
        tally.dealerscards.appendChild(oneCardDiv);
        tally.dealerHand.push(oneCard.value);
        
     }
        }
        if(tally.dealerHand.length==2 && tally.turn==1){
        oneCardDiv.id = "back"
        }
 
        }
       tally.turn =0; onecard();tally.turn=1;onecard();
       tally.turn=0;onecard();tally.turn=1;onecard();tally.tallying();
        tally.standfunc();tally.hitting();
       }
     
    },
    tallying : () => {

    
    for (let i=0;i<tally.dealerHand.length;i++){
        if(tally.dealerHand[i]=="J"||tally.dealerHand[i]=="Q"||tally.dealerHand[i]=="K"){
            tally.dealPoints+=10;}
            else if (tally.dealerHand[i]=="A"){
            tally.dealPoints +=11
            }else {
           tally.dealPoints += tally.dealerHand[i]
        }
    }
    for (let i=0;i<tally.playerHand.length;i++){
        if(tally.playerHand[i]=="J"||tally.playerHand[i]=="Q"||tally.playerHand[i]=="K"){
            tally.playerPoints+=10;
        } else if (tally.playerHand[i]=="A"){
            tally.playerPoints+=11;}
            else{
            tally.playerPoints += tally.playerHand[i];
        }
    }
    tally.playerTotal.innerHTML = tally.playerPoints;
    if( tally.playerPoints>21&&tally.dealPoints<21){
        alert('Dealer Wins on BlackJack');
        front = document.getElementById('back');
        front.classList.add('front');
        tally.dealerTotal.innerHTML = tally.dealPoints;
        tally.betamount.innerHTML = "Dealer Wins. You lose $" + tally.bet
        console.log('pizza')
        tally.winner=1
    }
    if( tally.playerPoints==21&&tally.dealPoints<21){
        alert('Player Wins on BlackJack');
        tally.dealerTotal.innerHTML = tally.dealPoints;
        console.log('pizza')
        front = document.getElementById('back');
        front.classList.add('front');
        tally.dealerTotal.innerHTML = tally.dealPoints;
        tally.betamount.innerHTML = "You win. Your total winnings are $" + tally.bet*1.5
        tally.winner=1;
    }
    if( tally.dealPoints==21&&tally.dealPoints<21){
        alert('Dealer Wins on BlackJack');
        front = document.getElementById('back');
        front.classList.add('front');
        tally.dealerTotal.innerHTML = tally.dealPoints;
        tally.betamount.innerHTML = "Dealer Wins. You lose $" + tally.bet
        console.log('pizza')
        tally.winner=1
    }
    if(tally.dealPoints>21&&tally.playerPoints<21){
        alert('Player Wins on BlackJack');
        tally.dealerTotal.innerHTML = tally.dealPoints;
        console.log('pizza')
        tally.betamount.innerHTML = "You win. Your total winnings are $" + tally.bet*1.5
        tally.winner=1;
    }
    if(tally.dealPoints==21&&tally.playerPoints==21){
        alert('It is a tie!');
        front = document.getElementById('back');
        front.classList.add('front');
        tally.dealerTotal.innerHTML = tally.dealPoints;
        console.log('pizza')
        tally.winner =1
        tally.betamount.innerHTML = "You win. Your total winnings are $" + tally.bet
    }


    },
    standfunc : () => {
        tally.staying.onclick = function staying (){
            console.log(tally)
            tally.playerStand.classList.add('display');
            if(tally.dealPoints>21&&tally.winner==0){
                alert('Player Wins on BlackJack');
                tally.dealerTotal.innerHTML = tally.dealPoints;
                console.log('pizza')
                tally.betamount.innerHTML = "You win. Your total winnings are $" + tally.bet*1.5
                tally.winner=1;
            }
            if(tally.dealPoints>=17&& (tally.dealPoints>tally.playerPoints)&&tally.winner==0){
                alert('Dealer Wins on BlackJack');
                front = document.getElementById('back');
                front.classList.add('front');
                tally.dealerTotal.innerHTML = tally.dealPoints;
                tally.betamount.innerHTML = "Dealer Wins. You lose $" + tally.bet
                console.log('pizza')
                tally.winner=1

            }
            if(tally.dealPoints>=17&& (tally.dealPoints<tally.playerPoints)&&tally.winner==0){
                alert('Player Wins on BlackJack');
            front = document.getElementById('back');
            front.classList.add('front');
            tally.dealerTotal.innerHTML = tally.dealPoints;
            console.log('pizza')
            tally.winner=1
            tally.betamount.innerHTML = "You win. Your total winnings are $" + tally.bet*1.5
            }
            if(tally.dealPoints>=17&& (tally.dealPoints=tally.playerPoints)&&tally.winner==0){
                alert('It is a tie!');
            front = document.getElementById('back');
            front.classList.add('front');
            tally.dealerTotal.innerHTML = tally.dealPoints;
            console.log('pizza')
            tally.winner =1
            tally.betamount.innerHTML = "You win. Your total winnings are $" + tally.bet
            }
                front = document.getElementById('back');
                front.classList.add('front');
                console.log('pizza')
                console.log(tally.dealPoints)
                tally.check17()
                

}
}, check17: ()=> {
    if(tally.dealPoints>tally.playerPoints&&tally.winner==0){
        console.log('pizza');
        alert('Dealer Wins on BlackJack');
        front = document.getElementById('back');
        front.classList.add('front');
        tally.dealerTotal.innerHTML = tally.dealPoints;
        tally.betamount.innerHTML = "Dealer Wins. You lose $" + tally.bet
        console.log('pizza')
        tally.winner=1
        console.log(tally)

    } else if(tally.dealPoints==tally.playerPoints&&tally.winner==0) {
        alert('It is a tie!');
        front = document.getElementById('back');
        front.classList.add('front');
        tally.dealerTotal.innerHTML = tally.dealPoints;
        console.log('pizza')
        tally.winner =1
        tally.betamount.innerHTML = "You win. Your total winnings are $" + tally.bet
    } else {
        if(tally.dealPoints<17&&tally.winner==0){
        oneCarding = tally.deck.pop();
        console.log('pizza')
        console.log(oneCard)
        oneCardDiv = document.createElement('div');
        if(oneCarding.value==1 || oneCarding.value== 11 || oneCarding.value==12 || oneCarding.value==13 ){
            card= tally.cValues[oneCarding.value];
            oneCardDiv.className = "cardstyle";
            actualCard = card + tally.cSuits[oneCard.suit];
            oneCardDiv.innerHTML = actualCard;
            tally.dealerscards.appendChild(oneCardDiv);
            tally.dealerHand.push(card)
            console.log(oneCard.values)}
        if(card="J"||card=="Q"||card=="K"){
                tally.dealPoints +=10;
                tally.dealerTotal.innerHTML = tally.dealPoints;
                tally.standfunc()
            }else if(card=="A"){
                tally.dealPoints +=11;
                tally.dealerTotal.innerHTML = tally.dealPoints;
                tally.standfunc()         
        } else {
            card= tally.cValues[oneCarding.value];
            oneCardDiv.className = "cardstyle";
            actualCard = card + tally.cSuits[oneCard.suit];
           oneCardDiv.className = "cardstyle";
           oneCardDiv.innerHTML = actualCard;
           tally.dealerscards.appendChild(oneCardDiv);
           tally.dealerHand.push(card.value);
           console.log(card)
           tally.dealPoints += oneCarding.value;
           console.log(tally.dealPoints)
           tally.dealerTotal.innerHTML = tally.dealPoints;
           tally.standfunc()
           



        }
    }
}
}, hitting: () => {
    tally.hit.onclick = function () {
        card1 = tally.deck.pop();
        console.log(card1)
                console.log('pizza')
                oneCardDiv = document.createElement('div');
                if(card1.value==1 || card1.value== 11 || card1.value==12 || card1.value==13 ){
                    card1.values= tally.cValues[card1.value];
                    oneCardDiv.className = "cardstyle";
                    actualCard = card1.values + tally.cSuits[card1.suit];
                    oneCardDiv.innerHTML = actualCard;
                    tally.playerscards.appendChild(oneCardDiv);
                    tally.playerHand.push(card1.values)
                    if(card1.values="J"||card1.values=="Q"||card1.values=="K"){
                        tally.playerPoints +=10;
                        tally.playerTotal.innerHTML = tally.playerPoints
                    }else if(card1.values=="A"){
                        tally.playerPoints +=11;
                        tally.playerTotal.innerHTML = tally.playerPoints   }
                                 
                } else {
                    oneCardDiv.className = "cardstyle";
                    actualCard = card1.value + tally.cSuits[card1.suit];
                   oneCardDiv.className = "cardstyle";
                   oneCardDiv.innerHTML = actualCard;
                   tally.playerscards.appendChild(oneCardDiv);
                   tally.playerHand.push(card1.value);
                   console.log(card1.value)
                   tally.playerPoints += card1.value;
                   console.log(tally.playerPoints);
                   tally.playerTotal.innerHTML = tally.playerPoints;
                   
                }
                if( tally.playerPoints>21&&tally.dealPoints<21){
                    alert('Dealer Wins on BlackJack');
                    front = document.getElementById('back');
                    front.classList.add('front');
                    tally.dealerTotal.innerHTML = tally.dealPoints;
                    tally.betamount.innerHTML = "Dealer Wins. You lose $" + tally.bet
                    console.log('pizza')
                    tally.winner=1
                }
            }
        }
}

window.addEventListener("DOMContentLoaded", tally.newgame);
 


