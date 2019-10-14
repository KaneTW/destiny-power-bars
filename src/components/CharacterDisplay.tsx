import classnames from "classnames";
import React from "react";

import { CharacterData } from "../types";
import STYLES from "./CharacterDisplay.module.scss";
import { PowerBars } from "./characterDisplay/PowerBars";
import { PowerDetails } from "./characterDisplay/PowerDetails";
import { PowerHints } from "./characterDisplay/PowerHints";

interface CharacterDisplayProps {
  data: CharacterData;
}

const titleCase = (text: string) =>
  text.substr(0, 1).toUpperCase() + text.substr(1);

const CharacterDisplay = ({ data }: CharacterDisplayProps) => {
  const rgbString = ({
    red,
    green,
    blue
  }: {
    red: number;
    green: number;
    blue: number;
  }) => `rgb(${red},${green},${blue})`;

  const roundedPower = Math.floor(data.overallPower);

  const summableArtifactBonusPower = data.artifactData
    ? data.artifactData.bonusPower
    : 0;

  return (
    <div
      className={classnames(
        STYLES.characterDisplay,
        STYLES[`class_${data.className}`]
      )}
      style={{ backgroundColor: rgbString(data.character.emblemColor) }}
    >
      <div className={STYLES.header}>
        <img
          className={STYLES.emblemBackground}
          src={`https://www.bungie.net${data.character.emblemBackgroundPath}`}
          alt=""
        />
        <div className={STYLES.name}>{titleCase(data.className)}</div>
        <div className={STYLES.power}>
          {roundedPower + summableArtifactBonusPower}
        </div>
      </div>

      <div className={STYLES.content}>
        <PowerDetails {...data} />

        <PowerBars {...data} />

        <PowerHints {...data} />
      </div>
    </div>
  );
};

export default CharacterDisplay;