# Changelog

## 1.0.1

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.6.3_

### Summary

Restructured history to move TODO comments immediately before the code that resolves them.

## 1.0.0

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.6.3_

### Summary

First project-versioned progressive history. Establishes the project's own version line (separate from the base-framework version) and the supporting structure: a dedicated tutorial document, a root changelog, and the traditional-branch / progressive-history Git model.

### Changes

- Adopt the progressive-history structure: `main` becomes a stable, append-only traditional branch, while the tutorial-shaped progressive history is rebuilt as an independent commit chain identified by the `1.0.0` project-version tag.
- Set the project version (`package.json` `version`) to `1.0.0`, independent of the base-framework version.
- Re-tag legacy base-framework version tags with the `framework-` prefix to reserve plain semver for project versions.
- Move the lab step listing and diff links out of `README.md` into `docs/TUTORIAL.md` (with a "Based on version 1.0.0" banner); `README.md` now links to it.
- Expand `AGENTS.md` (and its `CLAUDE.md` symlink) with the terminology, Git model, version/changelog conventions, tag taxonomy, the strict 1:1 TODO → code rule, and the per-step breakdown.
