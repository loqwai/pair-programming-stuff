interface Card {
  rank: number;
  suit: string;
}
const isSameSuit = (x: Array<Card>) => {
  // get the suit of the first card
  const suit = x[0].suit;
  // make sure all the suits are the same
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i].suit !== suit) return false;
  }
  console.log('isSameSuit', x);
  return true;
};
const isSequential = (x: Array<Card>) => {
  // sort the cards
  const sorted = x.sort((a, b) => a.rank - b.rank);
  // make sure the numbers are sequential
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i].rank + 1 !== sorted[i + 1].rank) return false;
  }
  return true;
};
const isSequentialAndSameSuit = (x: Array<Card>) => {
  if (!isSameSuit(x)) return false;
  if(!isSequential(x)) return false;
  return true;
};
const isAllSameRank = (x: Array<Card>) => {
  const rank = x[0].rank;
  // make sure all the ranks are the same
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i].rank !== rank) return false;
  }
  return true;
};
export const isValidGinRummyMeld = (x: Array<Card>) => {
  if(x.length === 0) return false;
  if(isAllSameRank(x)) return true;
  if(isSequentialAndSameSuit(x)) return true;
  return false;
};
