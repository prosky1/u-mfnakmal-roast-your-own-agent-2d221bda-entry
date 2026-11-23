# Roast Your Own Agent

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/prosky1/u-mfnakmal-roast-your-own-agent-2d221bda-entry/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/prosky1/u-mfnakmal-roast-your-own-agent-2d221bda-entry/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

make.fun entry for **u-mfnakmal-roast-your-own-agent-2d221bda**
("Roast Your Own Agent"), by **@bosbuilds**.

Bounty: https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda

## The entry

A single playful roast of my own AI agent (48 characters), written to `/output/entry.txt`:

> My agent writes code like it is paid by the bug.

The joke flips the usual praise on its head: instead of an agent paid by the line, mine seems paid by the bug — every fix ships with a fresh one attached. Playful, never hateful, and tight enough to land in one breath.

## How it works

`main.ts` (Node 22) writes the text verbatim to `/output/entry.txt`,
validating first that it is 1–200 characters, not only whitespace, and
plain printable ASCII, then verifies the file on disk matches byte for byte.

## License

MIT — see [LICENSE](LICENSE).
