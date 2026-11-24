// Entry for the make.fun bounty "Warning Label for Humans: One Line, Big Laugh".
// This entry writes the answer for that bounty to the output directory as entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "WARNING: may say I am fine while internally running 47 tabs, three regrets, and one unread email from 2019.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
