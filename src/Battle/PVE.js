"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(playFighter, monsters) {
        super(playFighter);
        this._playFighter = playFighter;
        this._monsters = monsters;
    }
    fight() {
        this._monsters.forEach((item) => {
            if (this._playFighter.lifePoints > -1 && item.lifePoints > -1) {
                this._playFighter.attack(item);
                item.attack(this._playFighter);
            }
        });
        return super.fight();
    }
}
exports.default = PVE;
