import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _play1: Fighter;
  private _play2: Fighter;

  constructor(play1: Fighter, play2: Fighter) {
    super(play1);

    this._play1 = play1;
    this._play2 = play2;
  }

  fight(): number {
    while (this._play1.lifePoints > -1 && this._play2.lifePoints > -1) {
      this._play1.attack(this._play2);
      this._play2.attack(this._play1);
    }

    return super.fight();
  }
}

export default PVP;