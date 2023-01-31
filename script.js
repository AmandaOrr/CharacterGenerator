function buttonStart(){
    let pokeName = prompt("Please enter your Player name");
    let opponentPoke = prompt("What is your Opponents Name?");
    
    
    //create players function
    function createPlayer(){
      //generate the arrays
      let charPokeList = ["Pikachu", "Charmander", "Bulbasaur", "Psyduck", "Eevee"];
      let charTypeList = ["Electric", "Fire", "Grass", "Psychic", "Earth"];
      let charMoveList = ["Dodge", "Scratch", "Kick", "Pounce", "Swipe"];
      //calculated values
      let player = {
        intellect: Math.floor(Math.random() * Math.floor(50)),
        strength: Math.floor(Math.random() * Math.floor(80)),
        defense: Math.floor(Math.random() * Math.floor(50)),
        age: Math.floor(Math.random() * Math.floor(25) + 5),
        hitPoints: Math.floor(Math.random() * Math.floor(300))
      }
      //randomize character attributes from arrays
      player.charPoke = charPokeList[Math.floor(Math.random() *   charPokeList.length)];
      player.charType = charTypeList[Math.floor(Math.random() *   charTypeList.length)];
      player.charMove = charMoveList[Math.floor(Math.random()   * charMoveList.length)];
      //then send back to the startGame() function
      return player;
    }
    
    
    
    //start game function
    function startGame(){
      
      player = createPlayer();
      console.log(player);
      listPlayers(player);
      
      opponent = createPlayer();
      console.log(opponent);
      listPlayers(opponent);
    
      let playerOrder = Math.floor(Math.random() * Math.floor(2));
     if (playerOrder == 0){
       startBattle(player, opponent);
      }
      else{
        startBattle(opponent, player);
      }
    }
    
    startGame();
    
    
    //list players
    function listPlayers(charType) {
      playerAlert = "<p>Your Pokemon are ready! They are a " + charType.charPoke + ", a " + charType.charType + " type, and their move is " + charType.charMove + ". " + "Your pokemons age is " + charType.age + " and has the abilities of " + charType.intellect + " intellect, " + charType.strength + " strength, " + charType.defense + " defense.</p>";
      
    }
    
    //list player info to the DOM
    listPlayers(player);
    document.getElementById("playerOne").innerHTML = playerAlert;
      if (player.charPoke === "Pikachu"){
        document.getElementById("playerimageone").src = "images/pika2.png";
      } else if (player.charPoke === "Bulbasaur"){
        document.getElementById("playerimageone").src = "images/bulbasaur2.png";
      } else if (player.charPoke === "Charmander"){
        document.getElementById("playerimageone").src = "images/char2.png";
      } else if (player.charPoke === "Psyduck"){
        document.getElementById("playerimageone").src = "images/psy2.png";
      } else if (player.charPoke === "Eevee"){
        document.getElementById("playerimageone").src = "images/eve2.png";
      }
    listPlayers(opponent);
    document.getElementById("playerTwo").innerHTML = playerAlert;
    if (opponent.charPoke === "Pikachu"){
        document.getElementById("playerimagetwo").src = "images/pika2.png";
      } else if (opponent.charPoke === "Bulbasaur"){
        document.getElementById("playerimagetwo").src = "images/bulbasaur2.png";
      } else if (opponent.charPoke === "Charmander"){
        document.getElementById("playerimagetwo").src = "images/char2.png";
      } else if (opponent.charPoke === "Psyduck"){
        document.getElementById("playerimagetwo").src = "images/psy2.png";
      } else if (opponent.charPoke === "Eevee"){
        document.getElementById("playerimagetwo").src = "images/eve2.png";
      }
    
      
    //battle function
    function startBattle(one, two){
     let hit = 5 * one.strength;
     let healthTwo = two.hitPoints - hit;
    for (i = 0; i < 3; i++){
       if (healthTwo <= 0){
         break;
        }
    }
      document.getElementById("battleplayer1").innerHTML = pokeName +"<p> Your Pokemon Hit Player 2 for " + hit + ". New hit points = " + healthTwo + "</p><br>";
      
      //check health
     if (healthTwo <= 0){
     document.getElementById("battleplayer1").innerHTML = opponentPoke + "<p> pokemon has Died. Hit Battle Again</p>";
        gameOver = true;
      }
      
      //hit player one second
      hit = 5 * two.strength;
    let  healthOne = one.hitPoints - hit;
    for (i = 0; i < 3; i++){
        if (healthOne <= 0){
          break;
        }
    }
      document.getElementById("battleplayer2").innerHTML = opponentPoke + "<p> Your Pokemon Hit Player 1 for " + hit + ". New hit points = " + healthOne + "</p>";
    
      
    //check health
    if (healthOne <= 0){
        document.getElementById("battleplayer2").innerHTML = pokeName + "<p> Pokemon has Died. Hit Battle Again</p>";
      gameOver = true;
      } 
    }
      
    
    startBattle(player, opponent);
      
    }