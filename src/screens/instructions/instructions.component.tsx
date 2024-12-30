import Button from "../../components/button/button.component";
import PriceBox from "../../components/price-box/price-box.component";
import { updateActionEvent } from "../../store/player/player.slice";
import { ActionEvents } from "../../store/player/player.types";
import { useAppDispatch } from "../../utils/redux-hooks";

import {
  InstructionsContainer,
  InstructionsTitleContainer,
} from "./instructions.styles";

export default function Instructions() {
  const dispatch = useAppDispatch();

  return (
    <InstructionsContainer>
      <InstructionsTitleContainer>instructions</InstructionsTitleContainer>
      <div>
        Burn 100 Gala To Begin the Game.  Climb the Leaderboard by January 30th to 
        win a Connoisseur Node By MetaFlora
        You are a drug dealer engaged in arbitrage! This is a game of buying,
        selling, and fighting. The object of the game is to pay off your debt to
        the loan shark. Then, make as much money as you can in a 30 day period.
        It takes one day to travel to a new location. If you deal too heavily in
        weed, you might run into the police!! Buy guns to protect yourself from
        muggers and police dogs. Your main stash will be in Grass Valley.
        (It's a nice neighborhood) Put money in the bank to earn interest, but
        be careful, the loan shark also collects interest.
      </div>
      <div>The Prices of cannabis per unit are:</div>
      <PriceBox withDialog={false} priceRange={true} />
      <Button onClick={() => dispatch(updateActionEvent(ActionEvents.Start))}>
        back
      </Button>
    </InstructionsContainer>
  );
}
