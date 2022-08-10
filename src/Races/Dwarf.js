"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 80;
        Dwarf._instances += 1;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        return this._instances;
    }
}
Dwarf._instances = 0;
exports.default = Dwarf;
