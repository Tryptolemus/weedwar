import type { PayloadAction } from "@reduxjs/toolkit";
import { randomInteger } from "../../utils/helpers";

import { Drugs } from "../player/player.types";
import type { PriceState } from "./price.types";
import { eventPriceRange } from "./price.types";

export const priceReducers = {
  setPrices(state: PriceState, _action: PayloadAction) {
    return {
      ...state,
      [Drugs.One]: randomInteger(15000, 29999),
      [Drugs.Two]: randomInteger(5000, 13999),
      [Drugs.Three]: randomInteger(1000, 4999),
      [Drugs.Four]: randomInteger(300, 899),
      [Drugs.Five]: randomInteger(90, 249),
      [Drugs.Six]: randomInteger(10, 89),
      coat: randomInteger(150, 250),
      gun: randomInteger(200, 400),
      heal: randomInteger(1000, 3000),
      foundMoney: randomInteger(4000, 8000),
    };
  },
  clearPriceEvents(state: PriceState, _action: PayloadAction) {
    return { ...state, events: [] };
  },
  removePriceEvent(state: PriceState, _action: PayloadAction) {
    return { ...state, events: state.events.slice(1) };
  },
  rollEvents(state: PriceState, _action: PayloadAction) {
    let updateState = { ...state };
    //
    // COCAINE EVENTS
    // Drugs.One
    if (1 === randomInteger(1, 30)) {
      updateState[Drugs.One] = randomInteger(
        eventPriceRange.one_drop_1[0],
        eventPriceRange.one_drop_1[1]
      );
      updateState.events = updateState.events.concat(
        "Holy shit! You found a time machine to the 80s. Weed is cheap!"
      );
    }
    if (1 === randomInteger(1, 30)) {
      updateState[Drugs.One] = randomInteger(
        eventPriceRange.one_increase_2[0],
        eventPriceRange.one_increase_2[1]
      );
      updateState.events = updateState.events.concat(
        "Cops made a huge weed bust! Prices are rising!!!"
      );
    }
    if (1 === randomInteger(1, 35)) {
      updateState[Drugs.One] = randomInteger(
        eventPriceRange.one_increase_1[0],
        eventPriceRange.one_increase_1[1]
      );
      updateState.events = updateState.events.concat(
        "Product Recall just hit the market. Prices are skyrocketing!!"
      );
    }
    //
    // MOLLY EVENTS
    // Drugs.Two
    if (1 === randomInteger(1, 25)) {
      updateState[Drugs.Two] = randomInteger(
        eventPriceRange.two_drop_1[0],
        eventPriceRange.two_drop_1[1]
      );
      updateState.events = updateState.events.concat(
        "Somebody found a reliable smuggling weed. It's super cheap!"
      );
    }
    if (1 === randomInteger(1, 25)) {
      updateState[Drugs.Two] = randomInteger(
        eventPriceRange.two_increase_1[0],
        eventPriceRange.two_increase_1[1]
      );
      updateState.events = updateState.events.concat(
        "Everyone wants to smoke! Weed prices are skyrocketing!!"
      );
    }
    //
    // LSD EVENTS
    // Drugs.Three
    if (1 === randomInteger(1, 25)) {
      updateState[Drugs.Three] = randomInteger(
        eventPriceRange.three_drop_1[0],
        eventPriceRange.three_drop_1[1]
      );
      updateState.events = updateState.events.concat(
        "The Grateful Dead are in town! The market is flooded!!"
      );
    }
    //
    // MUSHROOMS EVENTS
    // Drugs.Four
    if (1 === randomInteger(1, 20)) {
      updateState[Drugs.Four] = randomInteger(
        eventPriceRange.four_drop_1[0],
        eventPriceRange.four_drop_1[1]
      );
      updateState.events = updateState.events.concat(
        "Cannabis Cup time!! Weed is basically being handed out!"
      );
    }
    if (1 === randomInteger(1, 25)) {
      updateState[Drugs.Four] = randomInteger(
        eventPriceRange.four_drop_2[0],
        eventPriceRange.four_drop_2[1]
      );
      updateState.events = updateState.events.concat(
        "Weed is legal!! They're being sold at bodega's everywhere!"
      );
    }
    if (1 === randomInteger(1, 20)) {
      updateState[Drugs.Four] = randomInteger(
        eventPriceRange.four_increase_1[0],
        eventPriceRange.four_increase_1[1]
      );
      updateState.events = updateState.events.concat(
        "Trypto just harvested!! Everyone is buying!"
      );
    }
    //
    // ADDERALL EVENTS
    // Drugs.Five
    if (1 === randomInteger(1, 20)) {
      updateState[Drugs.Five] = randomInteger(
        eventPriceRange.five_drop_1[0],
        eventPriceRange.five_drop_1[1]
      );
      updateState.events = updateState.events.concat(
        "The pharmacy has weed! Prices are dropping!"
      );
    }
    if (1 === randomInteger(1, 20)) {
      updateState[Drugs.Five] = randomInteger(
        eventPriceRange.five_increase_1[0],
        eventPriceRange.five_increase_1[1]
      );
      updateState.events = updateState.events.concat(
        "There's a national shortage! Weed prices are skyrocketing!!"
      );
    }
    //
    // WEED EVENTS
    // Drugs.Six
    if (1 === randomInteger(1, 15)) {
      updateState[Drugs.Six] = randomInteger(
        eventPriceRange.six_drop_1[0],
        eventPriceRange.six_drop_1[1]
      );
      updateState.events = updateState.events.concat(
        "420 blaze it! Prices are dropping!"
      );
    }
    return { ...state, ...updateState };
  },
};
