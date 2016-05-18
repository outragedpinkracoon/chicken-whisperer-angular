import { Component, Injectable } from 'angular2/core';
import { DiceService } from '../services/diceService';

@Injectable()
export class DiceResultsContainer {
  lastRolls: Array<number>;
  success: boolean;
  total: number;
  diceResults: Array<string>;
  diceService: DiceService;

  constructor() { 
    this.diceService = new DiceService();
  }

  setupDiceResults(lastRolls, success){
    this.success = success;
    this.lastRolls = lastRolls;
    this.diceResults = this.diceService.dieResultsAsUnicode(this.lastRolls);
    this.total = this.lastRolls.reduce( (prev, curr) => prev + curr );
  }
}