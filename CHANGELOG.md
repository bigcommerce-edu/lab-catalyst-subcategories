# Changelog

## 1.1.0

_Based on Catalyst (`@bigcommerce/catalyst-makeswift`) 1.6.3_

### Summary

Rebuilt the progressive history using the Catalyst CLI installer instead of a Git clone, changing the framework's on-disk layout.

### Changes

- Switch the framework install command from a Git clone of `bigcommerce/catalyst` to `pnpm create @bigcommerce/catalyst@latest` (plus a `pnpm approve-builds --all` step). See the updated "Framework Install Command" section in `AGENTS.md`.
- The Catalyst CLI installs the project at the root instead of under a `core/` subdirectory; every file path touched by later lab-step commits moved accordingly.
- The Catalyst CLI's install also ships its own root-level `AGENTS.md` and `CHANGELOG.md` (previously only `README.md`). The "Rename README" commit now also renames these to `AGENTS-Catalyst.md` and `CHANGELOG-Catalyst.md`, matching the existing `README-Catalyst.md` pattern, so this project's own `AGENTS.md`/`CHANGELOG.md` can still be added fresh in the end-metadata commit.
- Add `*.graphql.d.ts` and `*.graphql` to `.gitignore`.

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
