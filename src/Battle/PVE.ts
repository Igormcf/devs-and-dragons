import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _playFighter: Fighter;
  private _monsters: SimpleFighter[];

  constructor(playFighter: Fighter, monsters: SimpleFighter[]) {
    super(playFighter);

    this._playFighter = playFighter;
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((item) => {
      if (this._playFighter.lifePoints > -1 && item.lifePoints > -1) {
        this._playFighter.attack(item);
        item.attack(this._playFighter);
      }
    });
    return super.fight();
  }
}

export default PVE;