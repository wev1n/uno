export type Card = {
  color: CardColor;
  value: CardValue;
  type: CardType;
};

export type CardColor = "red" | "green" | "blue" | "yellow" | "black";

export type CardValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "skip"
  | "reverse"
  | "draw two"
  | "wild"
  | "wild draw four";

export type CardType =
  | "number"
  | "skip"
  | "reverse"
  | "draw two"
  | "wild"
  | "wild draw four";

export type Player = {
  id: string;
  name: string;
  hand: Card[];
};

export type GameState = {
  deck: Card[];
  discardPile: Card[];
  players: Player[];
  currentPlayerIndex: number;
  direction: 1 | -1;
};
