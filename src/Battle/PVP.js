"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(play1, play2) {
        super(play1);
        this._play1 = play1;
        this._play2 = play2;
    }
    fight() {
        while (this._play1.lifePoints > -1 && this._play2.lifePoints > -1) {
            this._play1.attack(this._play2);
            this._play2.attack(this._play1);
        }
        return super.fight();
    }
}
exports.default = PVP;
