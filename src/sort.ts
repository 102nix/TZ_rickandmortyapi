import { CardType } from "./types/storeAllCharactersType"

export const sortsEl = (a: CardType, b: CardType) => {
  if ((a.id || 0) > (b.id || 0)) return 1
  return -1
}