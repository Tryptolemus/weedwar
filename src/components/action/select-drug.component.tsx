import { FC } from "react";
import { Drugs } from "../../store/player/player.types";
import { getDrugByKey } from "../../utils/helpers";

import ActionContainer from "./action-container.component";
import Button from "../button.component";

type SelectDrugProps = {
  text: string;
  onSelect: (key: Drugs) => void;
};

const SelectDrug: FC<SelectDrugProps> = ({ text, onSelect }) => {
  const handleOnKeyDown = (key: string) => {
    const drugKey = getDrugByKey(key);
    if (drugKey) onSelect(drugKey);
  };

  return (
    <ActionContainer onKeyDown={handleOnKeyDown}>
      {text}
      <br />
      Enter the first letter of a drug to choose!
      <br />
      <ul>
        {Object.values(Drugs).map((drug, i) => (
          <li key={i}>
            <Button onClick={() => onSelect(drug)}>{drug}</Button>
          </li>
        ))}
      </ul>
    </ActionContainer>
  );
};

export default SelectDrug;
