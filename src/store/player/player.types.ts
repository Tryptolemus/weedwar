export enum Areas {
  Bronx = "Elysium- MetaFlora HQ",
  Queens = "NYC",
  CentralPark = "Canada",
  Manhattan = "ThaiLand",
  ConeyIsland = "Romania",
  Brooklyn = "Berlin",
}

export enum Drugs {
  One = "Sour Diesel",
  Two = "Chem Dawg",
  Three = "Kush",
  Four = "Haze",
  Five = "Blue Dream",
  Six = "OG",
}

export type DrugsMap = {
  [key: string]: number;
};

export interface BuyAndSellPayloadAction {
  drug: Drugs;
  amount: number;
  price: number;
}

export enum ActionEvents {
  Start,
  Instructions,
  Leaderboard,
  Shark,
  Bank,
  Stash,
  Main,
  Buy,
  Sell,
  Jet,
  CopsChase,
  BuyCoat,
  BuyGun,
  Heal,
  GameOver,
}

export type PlayerState = {
  readonly area: Areas;
  readonly daysEnd: number;
  readonly health: number;
  readonly money: number;
  readonly maxTrench: number;
  readonly guns: number;
  readonly cops: number;
  readonly [Drugs.One]: number;
  readonly [Drugs.Two]: number;
  readonly [Drugs.Three]: number;
  readonly [Drugs.Four]: number;
  readonly [Drugs.Five]: number;
  readonly [Drugs.Six]: number;
  readonly events: string[];
  readonly actionEvent: ActionEvents;
};
