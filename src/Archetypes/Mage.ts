import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  public _energyType: EnergyType;
  public static _instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}

export default Mage;