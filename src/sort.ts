import { CardType } from "./types/allCharactersStoreType"

export const sortsEl = (a: CardType, b: CardType) => {
  if ((a.id || 0) > (b.id || 0)) return 1
  return -1
}