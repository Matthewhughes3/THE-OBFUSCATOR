# THE-OBFUSCATOR
Guaranteed to at least quadruple your bundle size.

Turn any valid JS into a combination of the characters ({[/>+!=\]})

## Installation

The Obfuscator requires [Deno](https://deno.land/) v1.8.3+ to run.

## Demo

Use deno to run THE OBFUSCATOR on any js file to increase bundle size and send hackers and snoopers running in fear.

```sh
cd THE-OBFUSCATOR
deno run test.js
# [10, 20, 30]
deno run --allow-read --allow-write obfuscate.js test.js
# wait for it... output: test-obfuscated.js
deno run test-obfuscated.js
# [10, 20, 30]
```
