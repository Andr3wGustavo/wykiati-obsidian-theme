# Obsidian Community Theme Publishing Guide

This document provides a technical, step-by-step procedure for releasing the Wykiati theme on GitHub and submitting it to the official Obsidian Community Themes registry.

---

## 1. Prerequisites and Validation Checklist

Before initiating a release or submitting a pull request, ensure all local artifacts comply with the official Obsidian Theme Guidelines:

- [x] **`manifest.json`**: Contains `name`, `version`, `minAppVersion`, `author`, `authorUrl`, and optional `fundingUrl`.
- [x] **`versions.json`**: Maps release version to the minimum required Obsidian version (e.g., `{"1.0.0": "1.7.0"}`).
- [x] **`theme.css`**: Compiled and minified production build at repository root.
- [x] **`screenshot.png`**: 16:9 ratio preview image at repository root.
- [x] **`LICENSE`**: Open source license file present at repository root.
- [x] **`README.md`**: Complete documentation with feature list and installation instructions.

---

## 2. Step 1: Pushing to GitHub

Ensure all local modifications are committed and push the code to your GitHub repository:

```bash
# Verify Git status
git status

# Rename default branch to main if needed
git branch -M main

# Set remote repository URL
git remote add origin git@github.com:Andr3wGustavo/wykiati-obsidian-theme.git

# Push changes to GitHub
git push -u origin main
```

---

## 3. Step 2: Creating a GitHub Release

Obsidian downloads theme updates directly from GitHub Releases. Each release tag must match the version specified in `manifest.json`.

### Procedure:
1. Navigate to your repository on GitHub:
   `https://github.com/Andr3wGustavo/wykiati-obsidian-theme`
2. Go to **Releases** > **Draft a new release**.
3. In **Choose a tag**, enter `1.0.0` (or create tag `1.0.0` on publish).
4. Set the **Release title** to `1.0.0` or `v1.0.0 - Initial Release`.
5. In the description, provide a changelog summarizing key features.
6. Attach the following binary assets to the release:
   - `theme.css`
   - `manifest.json`
   - `screenshot.png`
7. Click **Publish release**.

---

## 4. Step 3: Submitting to Obsidian Community Themes

Obsidian community themes are cataloged in the public [obsidianmd/obsidian-releases](https://github.com/obsidianmd/obsidian-releases) repository.

### Step-by-Step Submission:

1. **Fork the Repository**:
   Fork `https://github.com/obsidianmd/obsidian-releases` to your GitHub account.

2. **Clone your fork locally**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/obsidian-releases.git
   cd obsidian-releases
   git checkout -b add-wykiati-theme
   ```

3. **Edit `community-css-themes.json`**:
   Open `community-css-themes.json` and append your theme entry in alphabetical order:

   ```json
   {
     "name": "Wykiati",
     "author": "Andr3wGustavo",
     "repo": "Andr3wGustavo/wykiati-obsidian-theme",
     "screenshot": "screenshot.png",
     "modes": ["dark", "light"],
     "legacy": false
   }
   ```

4. **Verify JSON Validity**:
   Ensure `community-css-themes.json` is formatted properly without trailing commas or syntax errors:
   ```bash
   npm test
   ```
   *(If Node.js tests are configured in the repository)*.

5. **Commit and Push**:
   ```bash
   git add community-css-themes.json
   git commit -m "Add Wykiati theme"
   git push -u origin add-wykiati-theme
   ```

6. **Open a Pull Request**:
   - Go to `https://github.com/obsidianmd/obsidian-releases`.
   - Click **New Pull Request** from your branch `add-wykiati-theme`.
   - Title the PR: `Add Wykiati theme`.
   - Provide a brief summary, verify all checklist items in the PR template, and submit.

---

## 5. Step 4: Post-Submission & Review Process

The Obsidian team reviews submissions periodically. Ensure the following to expedite approval:

- The repository remains public.
- The release tag matches `manifest.json` version.
- The theme does not inject arbitrary JavaScript (pure CSS only).
- All third-party attribution and licenses are respected.

---

## 6. Updating the Theme in the Future

When releasing a new version (e.g., `1.0.1`):

1. Update the version number in `package.json`, `manifest.json`, and `versions.json`.
2. Compile the production bundle:
   ```bash
   npm run build
   ```
3. Commit and push the changes:
   ```bash
   git add .
   git commit -m "release: v1.0.1"
   git push origin main
   ```
4. Create a new GitHub Release with tag `1.0.1` and attach the compiled `theme.css` and `manifest.json`.
5. Obsidian will automatically detect the new release for users within 24 hours. No additional PR to `obsidian-releases` is required for version updates.
