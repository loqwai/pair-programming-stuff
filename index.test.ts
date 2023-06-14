import { beforeEach, describe, expect, it } from '@jest/globals';
import { isValidGinRummyMeld } from "./index";

describe("isValidGinRummyMeld", () => {
   it("should exist", () => {
      expect(isValidGinRummyMeld).toBeDefined();
   });

   it("should return false if array is empty", () => {
      expect(isValidGinRummyMeld([])).toBe(false);
   });

   describe("when array has 3 cards", () => {
      it("should return true if all cards are the same rank", () => {
         expect(isValidGinRummyMeld([
            { rank: 2, suit: 'spades' },
            { rank: 2, suit: 'hearts' },
            { rank: 2, suit: 'clubs' },
         ])).toBe(true);
      })

      it("should return false if all cards are NOT the same rank", () => {
         expect(isValidGinRummyMeld([
            { rank: 3, suit: 'spades' },
            { rank: 2, suit: 'hearts' },
            { rank: 2, suit: 'clubs' },
         ])).toBe(false);
      })

      it("should return true if the cards are in sequence and the same suit", () => {
         expect(isValidGinRummyMeld([
            { rank: 2, suit: 'spades' },
            { rank: 3, suit: 'spades' },
            { rank: 4, suit: 'spades' },
         ])).toBe(true);
      })
      it("should return false if the cards are in sequence but NOT the same suit", () => {
         expect(isValidGinRummyMeld([
            { rank: 2, suit: 'spades' },
            { rank: 3, suit: 'hearts' },
            { rank: 4, suit: 'spades' },
         ])).toBe(false);
      })
   })
});
