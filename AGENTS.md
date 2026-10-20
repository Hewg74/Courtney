# AGENTS.md

<!-- agent-map:begin — generated from agent-map.json by ~/.claude/scripts/agent-map.mjs. Do not edit inside this block: edit agent-map.json, then run `node ~/.claude/scripts/agent-map.mjs verify --all` (after you re-checked the claims) or `node ~/.claude/scripts/agent-map.mjs sync` (derived facts only). -->
<!-- door:begin -->
## How to work here

1. **What this is:** not recorded.
2. **Before you commit:** the commit gate knows no test command here, so it checks only for secrets.
3. **Guards:** no-deferral-markers, file-size (table below). A new match in a file that is not already grandfathered denies the commit.
4. **The map below:** if your change moves a path or command it names, update agent-map.json in the same commit; a wrong map denies the commit, an unknown slot never does.
5. **Past context:** project memory at `~/.claude/projects/C--Users-hewg7-Documents-GitHub-Courtney/memory/MEMORY.md`; open plans in `tasks/todo-*.md`; anything you cannot name exactly: `~/.claude/scripts/qmd search "<words>"`.
6. **Any rule, gate or script on this machine:** `node ~/.claude/scripts/harness.mjs <plain words>`; a gate that blocks you names itself, and `--gates <name>` explains it.

<!-- door:end -->

## Agent map (generated)

> STATUS: LIVE — synced 2026-10-20 at 64273a1. Probe: `node ~/.claude/scripts/agent-map.mjs check` (exit 1 = the map is wrong somewhere; fix it before trusting it).

**Profile:** site (evidence: index.html, public/, dep:static-site-tooling)
**Purpose:** _unknown (record it in agent-map.json → purpose.claim)_
**Run:** dev `npm run dev` · build `npm run build` · test _unknown_ · check _unknown_ · verify _unknown_

### Features (what → how to reach it → how to verify it)

| Feature | What | Reach | Verify | Verified |
|---|---|---|---|---|
| / | _derived from the router; describe it_ | route / | _no probe_ | _derived_ |
| /homepage_source | _derived from the router; describe it_ | route /homepage_source | _no probe_ | _derived_ |

### Guards (patterns that must not grow; a violation denies the commit)

| Guard | Rule | Pattern | Grandfathered |
|---|---|---|---|
| no-deferral-markers | No TODO/FIXME/HACK/XXX markers: fix it, or defer through a `ponytail:` comment (what was simplified, ceiling, upgrade trigger) that the debt ledger harvests | `/\b(?:TODO\|FIXME\|HACK\|XXX)\b/` (exempt: ponytail:) | none |
| file-size | No source file past 2,000 lines (one agent Read window); a file already past it may shrink, never grow. Split by concern in its own refactor commit, then make the change | files over 2,000 lines (lines with "@section" not counted) | none |

**In flight:** handoff _none recorded_ · tasks `tasks/todo-*.md`
**Unknown slots (honest, not wrong):** purpose, run.test, run.check, run.verify, map, capabilities, actions, invariants, agents, routing. Fill them in agent-map.json when you learn them; run `node ~/.claude/scripts/agent-map.mjs verify --all` after checking.
<!-- agent-map:end -->
