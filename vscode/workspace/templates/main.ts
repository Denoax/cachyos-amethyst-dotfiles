// Node workflow only; judge TypeScript availability is unverified.
declare function require(name: string): any;
declare const process: any;
const fs = require("node:fs");
const text: string = fs.readFileSync(0, "utf8").trim();
const tokens: string[] = text ? text.split(/\s+/) : [];
const answers: string[] = [];
if (answers.length) process.stdout.write(answers.join("\n") + "\n");
