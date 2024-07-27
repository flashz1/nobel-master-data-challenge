export type Translation = {
  en: string
  no: string
  se: string
}

export type ItemLinks = {
  rel: string
  href: string
  action: string
  types: string
}

export type LaureateBasic = {
  id: string
  knownName: Translation
  fullName: Translation
  portion: string
  sortOrder: string
  motivation: Translation
  links: ItemLinks[]
}

export type NobelPrize = {
  awardYear: string
  category: Translation
  categoryFullName: Translation
  dateAwarded: string
  prizeAmount: number
  prizeAmountAdjusted: number
  links: ItemLinks[]
  laureates: LaureateBasic[]
}

export type Laureate = {
  id: string
  laureateIfPerson: string
  laureateIfOrg: string
  wikipedia: string
  wikidata: string
  sameAs: string
  links: string
  nobelPrizes: string
}
