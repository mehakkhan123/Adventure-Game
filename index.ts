#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

// Make a class for player
class Player {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }

  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }

  fuelIncrease() {
    this.fuel = 100;
  }
}

// Make a class for opponent

class Opponent {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

console.log(chalk.magentaBright(`****************Welcome to the adventure game****************`));
// ask player name
let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Enter your name:",
  },
]);

// select opponent
let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: "Select your opponent:",
    choices: ["Skeleton", "Alien", "Zombie"],
  },
]);

// Gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do {
  // Skeleton
  if (opponent.select === "Skeleton") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "What do you want to do?",
        choices: ["Attack", "Drink Potion", "Run"],
      },
    ]);

    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red(`You loose. Better luck next time.`));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.green(`${o1.name} fuel is ${o1.fuel}`));
        console.log(chalk.red(`${p1.name} fuel is ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.blue(`You win.`));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink Potion") {
      p1.fuelIncrease();
      console.log(chalk.red(`You drink Health Potion. Your fuel is ${p1.fuel}.`));
    }
    if (ask.opt === "Run") {
      console.log(chalk.bold.red(`You loose. Better luck next time.`));
      process.exit();
    }
  }
  // Alien
  if (opponent.select === "Alien") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "What do you want to do?",
        choices: ["Attack", "Drink Potion", "Run"],
      },
    ]);

    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red(`You loose. Better luck next time.`));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.green(`${o1.name} fuel is ${o1.fuel}`));
        console.log(chalk.red(`${p1.name} fuel is ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.blue(`You win.`));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink Potion") {
      p1.fuelIncrease();
      console.log(chalk.red(`You drink Health Potion. Your fuel is ${p1.fuel}.`));
    }
    if (ask.opt === "Run") {
      console.log(chalk.bold.red(`You loose. Better luck next time.`));
      process.exit();
    }
  }
  // Zombie
  if (opponent.select === "Zombie") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "What do you want to do?",
        choices: ["Attack", "Drink Potion", "Run"],
      },
    ]);

    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(chalk.bold.red(`You loose. Better luck next time.`));
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.green(`${o1.name} fuel is ${o1.fuel}`));
        console.log(chalk.red(`${p1.name} fuel is ${p1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.blue(`You win.`));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink Potion") {
      p1.fuelIncrease();
      console.log(chalk.red(`You drink Health Potion. Your fuel is ${p1.fuel}.`));
    }
    if (ask.opt === "Run") {
      console.log(chalk.bold.red(`You loose. Better luck next time.`));
      process.exit();
    }
  }
} while (true);
