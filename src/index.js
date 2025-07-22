const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
};

const rollDice = () => Math.floor(Math.random() * 6 + 1);

const getRandomBlock = () => {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) return "RETA";
    else if (random === 1) return "CURVA";
    else return "CONFRONTO";
};

const logRollResult = (characterName, block, diceResult, attribute) => {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
};

const playRaceEngine = async (character1, character2) => {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada: ${round} 🏁`);

        // SORTEAR BLOCO
        let block = getRandomBlock();
        console.log(`Bloco: ${block}`);


        // ROLAR DADO
        let diceResult1 = rollDice();
        let diceResult2 = rollDice();

        // TESTE DE HABILIDADE
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            logRollResult(
                character1.NOME,
                "velocidade",
                diceResult1,
                character1.VELOCIDADE
            );

            logRollResult(
                character2.NOME,
                "velocidade",
                diceResult2,
                character2.VELOCIDADE
            );
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            logRollResult(
                character1.NOME,
                "manobrabilidade",
                diceResult1,
                character1.MANOBRABILIDADE
            );

            logRollResult(
                character2.NOME,
                "manobrabilidade",
                diceResult2,
                character2.MANOBRABILIDADE
            );
        }

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`)

            logRollResult(
                character1.NOME,
                "poder",
                diceResult1,
                character1.PODER
            );

            logRollResult(
                character2.NOME,
                "poder",
                diceResult2,
                character2.PODER
            );

            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`${character2.NOME} perdeu um ponto! 🐢`)
                character2.PONTOS--

            }

            if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(`${character1.NOME} perdeu um ponto! 🐢`)
                character1.PONTOS--

            }

            console.log(powerResult1 === powerResult2 ? "Confronto empatado" : "")
        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto! ✅`);
            character1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NOME} marcou um ponto! ✅`);
            character2.PONTOS++;
        }
    };

    console.log("------------------------------------");

    console.log(`🏆 Resultado Final:`);
    console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
    console.log(`${character2.NOME}: ${character2.PONTOS} pontos`);
};


const main = (async () => {
    console.log(`🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    await playRaceEngine(player1, player2);
})();

