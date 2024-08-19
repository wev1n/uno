import { Card, CardColor, CardValue, GameState, Player } from "@/types";

export function generateDeck(): Card[] {
  const colors: CardColor[] = ["red", "green", "blue", "yellow"];
  const wildCards: CardValue[] = ["wild", "wild draw four"];
  const values: CardValue[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "skip",
    "reverse",
    "draw two",
  ];

  const deck: Card[] = [];

  colors.forEach((color) => {
    values.forEach((value) => {
      deck.push({ color, value, type: "number" });
      if (value !== "0") deck.push({ color, value, type: "number" });
    });
  });

  wildCards.forEach((value) => {
    for (let i = 0; i < 4; i++) {
      deck.push({ color: "black", value, type: "wild" });
    }
  });

  return deck;
}

export function shuffleDeck(deck: Card[]): Card[] {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
}

export function dealCardsAtStart(
  deck: Card[],
  players: Player[],
  cardsPerPlayer: 6
): void {
  players.forEach((player) => {
    player.hand = deck.splice(0, cardsPerPlayer);
  });
}

export function canPlayCard(card: Card, topCard: Card): boolean {
  switch (card.value) {
    case "wild" || "wild draw four":
      return true;

    case "0" ||
      "1" ||
      "2" ||
      "3" ||
      "4" ||
      "5" ||
      "6" ||
      "7" ||
      "8" ||
      "9" ||
      "skip" ||
      "reverse" ||
      "draw two":
      if (card.value === topCard.value || card.color === topCard.color)
        return true;
      return false;

    default:
      return false;
  }
}

export function handleSpecialCard(
  card: Card,
  gameState: GameState,
  chosenColor?: CardColor
): GameState {
  switch (card.value) {
    case "skip":
      gameState.currentPlayerIndex = getNextPlayerIndex(gameState, 2);
      break;

    case "reverse":
      gameState.direction *= -1;
      gameState.currentPlayerIndex = getNextPlayerIndex(gameState, 1);
      break;

    case "draw two":
      const nextPlayer = gameState.players[getNextPlayerIndex(gameState, 1)];
      nextPlayer.hand.push(...gameState.deck.splice(0, 2));
      gameState.currentPlayerIndex = getNextPlayerIndex(gameState, 2);
      break;

    case "wild":
      if (chosenColor) {
        gameState.discardPile.push({ ...card, color: chosenColor });
      }
      gameState.currentPlayerIndex = getNextPlayerIndex(gameState, 1);
      break;

    case "wild draw four":
      const nextPlayerForWild =
        gameState.players[getNextPlayerIndex(gameState, 1)];
      nextPlayerForWild.hand.push(...gameState.deck.splice(0, 4));
      if (chosenColor) {
        gameState.discardPile.push({ ...card, color: chosenColor });
      }
      gameState.currentPlayerIndex = getNextPlayerIndex(gameState, 2);
      break;

    default:
      gameState.currentPlayerIndex = getNextPlayerIndex(gameState, 1);
      break;
  }
  return gameState;
}

export function getNextPlayerIndex(
  gameState: GameState,
  steps: number = 1
): number {
  const { currentPlayerIndex, players, direction } = gameState;
  return (
    (currentPlayerIndex + direction * steps + players.length) % players.length
  );
}
