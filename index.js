function theBeatlesPlay(musicians, instruments) {
  const theyPlay = [];
  for (let i=0; i<musicians.length; i++) {
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  } return theyPlay
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and a boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  const excitedFacts = [];
  let i=0
  while (i<facts.length) {
    excitedFacts.push(`${facts[i]}!!!`)
  } return excitedFacts
}

let i = 0
function iLoveTheBeatles(i) {
  const biggestFan =[];
  do {
    biggestFan.push("I love the Beatles!")
    i = i +1 
  } while (i < 15);
  return biggestFan;
}