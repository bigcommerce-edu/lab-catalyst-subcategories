# Catalyst Subcategories Example Lab Project

This is an example developer project demonstrating how to customize a Catalyst codebase, building a subcategory listing feature.

## Terminology and Git Model

This repository maintains two kinds of history **separately**:

- **Traditional branch** (`main`): a normal Git branch with stable, append-only history. Custom-code changes are made on feature branches, reviewed via pull request, and merged here. `main`'s history is never rewritten.
- **Progressive history**: a tutorial-shaped commit chain (clean framework install → step commits → end metadata) that represents the step-by-step lab progression. It is rebuilt as an independent commit chain and identified by a **project-version tag** (plain semver) at its tip plus the step tags along it.

`main` and the latest progressive history have **different tip commits but identical file trees**. Every change must be replicated across both, using the `bcedu-lab-sync` skill, and verified with its `validate-sync` command:

- **Framework/dependency upgrades**: rebuild a new progressive history with `bcedu-lab-upgrade`, then `sync-to-main` (a reviewed PR) brings it onto `main`.
- **Custom lab-code changes**: make them on a branch off `main` and merge via PR, then `sync-to-progressive` folds them into a rebuilt progressive history.
- **Publishing** a progressive history (moving step tags + creating the project-version tip tag) is done with `bcedu-lab-publish`; it does **not** advance `main`.

## Project Version and Changelogs

- The **project version** (plain semver, separate from the Catalyst framework version) is held in `package.json`'s `version` field and tagged on the tip of the corresponding progressive history.
- Each version has a changelog entry in `CHANGELOG.md`.
- **Metadata at the end**: the project-version bump and the addition of changelog entries and tutorial docs are folded into the final commit(s) of each rebuilt progressive history (amended on each rebuild rather than accumulating new commits).
- The lab steps and GitHub diff links live in `docs/TUTORIAL.md`, which carries a "Based on version X" banner matching the latest progressive history.

## Tag Conventions

- **Project-version tag**: plain semver (e.g. `1.0.0`) at a progressive history's tip. Created fresh per history; never migrated.
- **Framework anchor**: `framework-<semver>` (e.g. `framework-1.6.3`) marks a base-framework release point. Permanent; never migrated.
- **Step tags**: `<prefix>-NN-pre` / `<prefix>-NN-post`, plus `start` / `complete`. Migrated onto a new history by the Main Tags publish.
- **eLearning tags**: `e-` prefixed. Migrated by the eLearning publish (none exist yet for this project).

## Commit History Structure

- The first commit is a clean Catalyst install.
- **Strict 1:1 TODO → code**: each commit that introduces `TODO:` comments is immediately followed by the code commit that resolves them (one TODO commit per code commit). Avoid bundling many TODOs into a single early commit.

### Lab Exercises

| Exercise | Description | Tag Prefix |
| ------ | ----------- | ---------- |
| Main Lab | Add Subcategory Listing | `lab` |

### Lab Step Breakdown

Each step is a `<tag>-pre` (TODO placeholders) commit immediately followed by a `<tag>-post` (implementation) commit.

**Main Lab — Add Subcategory Listing (`lab`)** — start: `start`, complete: `complete`

| Step | Tag Base | Description |
| ---- | --- | ----------- |
| 1 | `lab-01` | Add subcategories GraphQL query |
| 2a | `lab-02a` | Add component shell for subcategory list |
| 2b | `lab-02b` | Add main subcategory list content |
| 2c | `lab-02c` | Add content for each subcategory |
| 3a | `lab-03a` | Customize card component variables for subcategory list |
| 3b | `lab-03b` | Finish application of theme styles for subcategory list |

## File Removal - Protected Paths

When creating a clean orphan branch, the following additional file paths should be protected from removal:

* `.env.local`

## Framework-Shipped Docs Renamed

Catalyst ships its own `README.md`, `AGENTS.md`, and `CHANGELOG.md` at the project root. To make room for this project's own versions of these files (added in the end-metadata commit), the "Rename README" commit renames all three to a `-Catalyst` suffix (`README-Catalyst.md`, `AGENTS-Catalyst.md`, `CHANGELOG-Catalyst.md`). If a future framework install ships additional root-level docs under the project's own filenames, extend this same rename pattern.

## Framework Install Command

The base framework is Catalyst. Install it via the Catalyst CLI, in a temporary directory outside the project repo:

```
pnpm create @bigcommerce/catalyst@latest --store-hash "--" --channel-id 1 --storefront-token "--" --access-token "--" --gh-ref @bigcommerce/catalyst-makeswift@<version> --project-name=<tmp-directory>
```

Where `<version>` is the version the user specified and `<tmp-directory>` is the temporary directory where you are doing the installation.

Because the command provisions its own `.env.local`, back up any pre-existing `.env.local` before running it and restore it afterward — the CLI's generated version should be discarded.

After the main install command completes, run `pnpm approve-builds --all` before making the initial commit. An explicit `pnpm install` is not needed; the install command handles it.
