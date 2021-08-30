const quotes = [
  {quote: "Linux is only free if your time has no value.", author: "Jamie Zawinski"},
  {quote: "C++ : Where friends have access to your private members.", author: "Gavin Russell Baker"},
  {quote: "Programming is like sex: one mistake and you're providing support for a lifetime.", author: "Michael Sinz"},
  {quote: "Computers are like bikinis. They save people a lot of guesswork.", author: "Sam Ewing"},
  {quote: "I don't care if it works on your machine! We are not shipping your machine!", author: "Ovidiu Platon"},
  {quote: "In theory, theory and practice are the same. In practice, they\u2019re not.", author: "Yogi Berra"},
  {quote: "I love deadlines. I like the whooshing sound they make as they fly by.", author: "Douglas Adams"},
  {quote: "You should name a variable using the same care with which you name a first-born child.", author: "James O. Coplien"},
  {quote: "Two things are infinite: the universe and human stupidity; and I\u2019m not sure about the universe.", author: "Albert Einstein"},
  {quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "E. W. Dijkstra"},
]

module.exports.get = (res) => {
  const n = Math.random()
  switch (true) {
    case (n < 0.1):
      return res.json(quotes[0])
    case (n > 0.1 && n < 0.2):
      return res.json(quotes[1])
    case (n > 0.2 && n < 0.3):
      return res.json(quotes[2])
    case (n > 0.3 && n < 0.4):
      return res.json(quotes[3])
    case (n > 0.4 && n < 0.5):
        return res.json(quotes[4])
    case (n > 0.5 && n < 0.6):
      return res.json(quotes[5])
    case (n > 0.6 && n < 0.7):
      return res.json(quotes[6])
    case (n > 0.7 && n < 0.8):
      return res.json(quotes[7])
    case (n > 0.8 && n < 0.9):
        return res.json(quotes[8])
    case (n > 0.9):
      return res.json(quotes[9])
  } 
}