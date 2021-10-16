const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var playername = "";
var score = 0;
var total = 0;

const questions = () => {
    
    // Question 1...

    console.log("1. Which of the following country won Football world Cup maximum times?");
    console.log("A.Germany");
    console.log("B.Italy");
    console.log("C.Argentina");
    console.log("D.Brazil");

    rl.question("Answer : " , (ans) => {
        if(ans == "D" || ans == "d")
        {
            console.log("Correct Answer...");
            score = score + 5;
            console.log("Score = " , score);
        }
        else
        {
            console.log("Wrong Answer...");
            if(score === 0)
            {
                score = 0;
            }
            else
            {
                score = score - 2;
            }
        }

        // Question 2...

        console.log("2. Who among the following player scores highest number of goals in Footbal World Cup?");
        console.log("A.Jurgen Klinsmann");
        console.log("B.Meradona");
        console.log("C.Miroslave Klose");
        console.log("D.Pele");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 3...

        console.log("3. Which of the following term is recognised as an early form of football by FIFA?");
        console.log("A.kemari");
        console.log("B.Episkyros");
        console.log("C.Cuju");
        console.log("D.Inuit");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 4...

        console.log("4. When was the first FIFA World Cup inaugurated?");
        console.log("A.1930");
        console.log("B.1931");
        console.log("C.1932");
        console.log("D.1933");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 5...

        console.log("5. Which of following team do not play in stripes?");
        console.log("A. Newcastle");
        console.log("B. Newcastle");
        console.log("C. Tottenham Hotspur");
        console.log("D. Lincoln City");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 6...

        console.log("6. Which of the following country hosted the first Football World Cup?");
        console.log("A. America");
        console.log("B. Argentina");
        console.log("C. Brazil");
        console.log("D. Uruguay");

        rl.question("Answer : " , (ans) => {
            if(ans == "D" || ans == "d")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 7...

        console.log("7. Which country became the first nation to win the Football World Cup?");
        console.log("A. Uruguay");
        console.log("B. Germany");
        console.log("C. Argentina");
        console.log("D. Belgium");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 8...

        console.log("8. When was first official international football match was played?");
        console.log("A. 1929");
        console.log("B. 1872");
        console.log("C. 1902");
        console.log("D. 1870");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 9...

        console.log("9. Who among the following scored the first goal in World Cup history?");
        console.log("A. Johino");
        console.log("B. Bert Patenaude");
        console.log("C. Lucien Laurent");
        console.log("D. Pele");

        rl.question("Answer : " , (ans) => {
            if(ans == "C" || ans == "c")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 10...

        console.log("10. Who among the following achieved the first World Cup hat-trick?");
        console.log("A. Johino");
        console.log("B. Bert Patenaude");
        console.log("C. Lucien Laurent");
        console.log("D. Pele");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
    


            });
            });
            });
            });
            });
            });
            });
            });
        });
    });

};

const startgame = () => {

    console.log("1. Start");
    console.log("2. Exit");

    rl.question("Enter Your Choice = " , (ans) => {
        if(ans == 1) 
        {
            rl.question("Enter Your name = " , (uname) => {
                playername = uname;
                if(playername.length > 0)
                {
                    console.log(playername);
                    questions();
                }
                else
                {
                    console.log("Enter Valid Name...");
                    startgame();
                }
            });
        }
        else if(ans == 2)
        {
            rl.close();
        }
        else
        {
            console.log("Enter Valid Name...");
            startgame();
        }
    });

   
};

startgame();

