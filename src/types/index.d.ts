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

export interface NobelPrize {
  awardYear: string
  category: Translation
  categoryFullName: Translation
  dateAwarded: string
  prizeAmount: number
  prizeAmountAdjusted: number
  links: ItemLinks[]
  laureates: LaureateBasic[]
}

export interface NobelPrizesMeta {
  offset: number
  limit: number
  nobelPrizeYear: number
  yearTo: number
  nobelPrizeCategory: string
  count: number
}

export interface NobelPrizePerLaureate extends NobelPrize {
  sortOrder: '1' | '2' | '3'
  portion: '1' | '1/2' | '1/3' | '1/4'
  prizeStatus: 'received' | 'declined' | 'restricted'
  motivation: Translation
}

export type Event = {
  date: string
  place: Location
}

export type Location = {
  city: Translation
  country: Translation
}

interface LaureateCommon {
  id: string
  wikipedia: string
  wikidata: {
    id: string
    url: string
  }
  sameAs: string
  links: string
  nobelPrizes: NobelPrizePerLaureate[]
}

export interface LaureatePerson extends LaureateCommon {
  knownName: Translation
  givenName: Translation
  familyName: Translation
  fullName: Translation
  birth: Event
  death: Event
}

export interface LaureateOrg extends LaureateCommon {
  orgName: Translation
  nativeName: string
  acronym: string
  founded: Event
}

type Laureate = LaureatePerson | LaureateOrg
