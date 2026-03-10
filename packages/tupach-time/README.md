# Tupach Time 👑

> The next evolution of the UNIX epoch. Shift the origin, delay the Year 2038 overflow problem, and measure moments with poetic perfection.

[![NPM Version](https://img.shields.io/npm/v/tupach-time)](https://npmjs.com/package/tupach-time)
[![License](https://img.shields.io/npm/l/tupach-time)](https://github.com/aphex/tupach-time/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)](https://www.typescriptlang.org/)

## What is Tupach Time?

Standard Unix time dictates that the digital epoch began exactly at `1970-01-01T00:00:00Z`. As it rapidly increments, we march ominously towards the **Year 2038 Problem**, where legacy 32-bit signed integers will overflow and crash.

**Tupach Time** remedies this. By pushing the mathematical origin timestamp forward to Tupac Shakur's exact time of death (`1996-09-13T23:03:00.000Z`), we physically gain **842,655,780 seconds**. That yields roughly **26.7 extra years** for mathematically constrained systems, defending them against integer overflow until December 2064.

## Installation

You can install `tupach-time` from npm using your preferred package manager:

```bash
# npm
npm install tupach-time

# pnpm
pnpm add tupach-time

# yarn
yarn add tupach-time
```

## Features

### 1. Numerical Engineering (`tupachTime`)
Get the exact duration in milliseconds since Tupac's epoch.

```typescript
import { tupachTime, fromTupachTime, TUPACH } from 'tupach-time';

// TUPACH is exactly 842655780000 
console.log(TUPACH);

// Get the current Tupach Time (milliseconds since 1996-09-13 4:03 PM PDT)
const ms = tupachTime();

// Or get Tupach Time for a specific date
const earlierMs = tupachTime(new Date('2026-03-10T00:00:00.000Z'));

// Convert Tupach Time back into a standard JavaScript Date object
const nativeDate = fromTupachTime(ms); 
```

### 2. The Makaveli Cipher (`tupacTime`)
Beyond mathematics, `tupach-time` includes the **Makaveli Cipher**. 

This encodes any localized moment in time down to the exact millisecond into **exclusive poetry** mapped completely natively across a strict 64-word vocabulary of Tupac's prolific musical lexicon (e.g. `thug`, `passion`, `dreams`, `ambitionz`).

Because time moves forward, no two milliseconds in history share the same generated phrase.

```typescript
import { tupacTime, fromTupacTime } from 'tupach-time';

// Generate a lyrical string cipher for the current millisecond
// Example Output: "judge friends player men faith glory"
const cipher = tupacTime();

// It handles historical moments natively! 
// Tupac's exact death output: "makaveli"
const tupacDeath = tupacTime(new Date('1996-09-13T23:03:00.000Z'));

// Biggie's exact death mathematically computes cleanly across the Base-64 vocabulary:
// Output: "rest in peace notorious biggie makaveli"
const biggieDeath = tupacTime(new Date('1997-03-09T09:15:00.000Z'));

// You can reverse any cipher flawlessly back to its original millisecond Date object without any loss of precision
const decodedDate = fromTupacTime("judge friends player men faith glory");
```

---

*“I’m not saying I’m gonna change the world, but I guarantee that I will spark the brain that will change the world.”*
