
# Branch Protection (Recommended)

1. GitHub → Repository → Settings → Branches → Branch protection rules → **New rule**
2. Branch name pattern: `main`
3. Enable:
   - Require a pull request before merging
   - Require approvals: 1 (or 2)
   - Require status checks to pass before merging
     - Select: CI (build/lint/typecheck)
   - Require conversation resolution before merging
   - Do NOT allow force pushes
   - Do NOT allow deletions
4. Save.
