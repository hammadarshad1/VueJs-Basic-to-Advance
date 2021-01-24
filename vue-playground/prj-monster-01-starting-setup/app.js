function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var game = new Vue({
    el: '#game',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        currentRound: 0,
        winner: null,
        logs: []
    },
    computed: {
        playerHealthBar(){
            return {width: this.playerHealth + '%'}
        },
        mosterHealthBar(){
            return {width: this.monsterHealth + '%'}
        },
        specialAttack(){
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0){
                // draw
                this.winner = 'draw';
            }
            else if(value <= 0){
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0){
                if (value <= 0 && this.playerHealth <= 0){
                    // draw
                    this.winner = 'draw';
                }
                else if(value <= 0){
                    // monster lost
                    this.winner = 'player';
                }   
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logs = [];
        },
        playerAttack(){
            this.currentRound++;
            attackValue = getRandomValue(5, 12);
            if (this.monsterHealth - attackValue < 0){
                this.monsterHealth = 0
            }
            else{
                this.monsterHealth -= attackValue;
            }
            this.battleLogs('player', 'attack', attackValue);
            this.monsterAttack();
        },
        monsterAttack(){
            attackValue = getRandomValue(8, 15);
            if (this.playerHealth - attackValue < 0){
                this.playerHealth = 0
            }
            else{
                this.playerHealth -= attackValue;
            }
            this.battleLogs('monster', 'attack', attackValue);
        },
        playerSpecialAttack(){
            this.currentRound++;
            attackValue = getRandomValue(10, 20);
            this.monsterHealth -= attackValue;
            this.battleLogs('player', 'attack', attackValue);
            this.monsterAttack();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue < 100){
                this.playerHealth += healValue;
            }
            else if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }
            this.battleLogs('player', 'heal', healValue);
            this.monsterAttack();
        },
        surrender(){
            this.winner = 'monster';
        },
        battleLogs(who, what, value){
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
})