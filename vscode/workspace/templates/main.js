"use strict";
const fs = require("node:fs");
const text = fs.readFileSync(0, "utf8").trim();
const tokens = text ? text.split(/\s+/) : [];
// Number integers are exact only through 2^53 - 1; use BigInt for larger values.
const answers = [];
// Solve here.
if (answers.length) process.stdout.write(answers.join("\n") + "\n");
