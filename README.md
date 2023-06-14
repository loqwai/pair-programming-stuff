# Pair Programming Shiz
## Links
* [Overview by Jade](https://www.linkedin.com/pulse/refactoring-rewriting-rearchitecting-oh-my-jade-meskill)
* [Transformation Priority Premise](https://blog.cleancoder.com/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html)
  - not necessarily always correct, but you get the idea.
  - a corollary to refactoring
*  "AAA Testing": Arrange, Act, Assert
* Ping Pong Pairing
* Red/Green/Refactoring
* vscode live share

## The Pair Programming "Game"
2 "Players" alternate rolls
  - to prevent the roles of "driver" and "navigator" from developing
  "Fry" and "Zoidberg"
1. Fry Makes the simplest test that can possibly fail
  - Usually using "AAA Testing": Arrange, Act, Assert
1. Zoidberg makes the test pass in the simplest way possible (by being adversarial)
  - a *heuristic* for "Simplest" is the Transformation Priority Premise
  - possible refactoring, though it should be obvious when to actually do it
1. Zoidberg makes the next simplest test that can possibly fail
1. Fry makes the test pass in the simplest way possible (by being adversarial)
1. Repeat until completed

## Example game using Gin Rummy "Melds"

### Rules of Gin Rummy
  * who cares? We're dealing with a subset

### Gin Rummy valid "Melds"
* three or four cards sharing the same rank, e.g. 8♥ 8♦
* sequences of three or more cards in the same suit, such as 3♥ 4♥ 5♥ or more
Les do it!
* they look like [this](https://www.catsatcards.com/CImages/Final/RummySets.jpg)
