
#!/usr/bin/env bash
set -euo pipefail

REPO_URL="${1:-https://github.com/Abdullah-Shahid01/asset-tracker.git}"
DEFAULT_BRANCH="${2:-main}"

echo "Using repo: $REPO_URL"
echo "Default branch: $DEFAULT_BRANCH"

# Make sure pnpm is installed
if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm not found. Installing..."
  npm i -g pnpm@9
fi

git init
git checkout -b "$DEFAULT_BRANCH"

pnpm install
pnpm prepare  # husky

git add .
git commit -m "chore: bootstrap asset tracker with TS, Tailwind, Recharts, Zod, CI, Husky"

git remote add origin "$REPO_URL"
git push -u origin "$DEFAULT_BRANCH"

echo "Pushed to $REPO_URL on branch $DEFAULT_BRANCH."
echo "If you were prompted for credentials, use your GitHub username and a fresh PAT as the password."
