| No. | Required Dependencies | Version  |
| --- | --------------------- | -------- |
| 1.  | Node                  | v20.10.0 |
| 2.  | npm                   | 10.2.3   |
| 3.  | tsc                   | 5.3.3    |

### 2. Project Structure:

```
/src
├── index.ts
├── styles.scss
├── index.html
└── other files...
/dist
├── bundle.js
└── styles.css
└── index.html
```

### 3. Additional Information:

```markdown
| Information                     | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| Supported File Types            | TypeScript, SCSS, CSS, HTML                                    |
| MiniCssExtractPlugin Extraction | Styles are extracted into the `styles.css` file.               |
| CopyPlugin Copying              | The `index.html` file is copied from `/src` to `/dist` folder. |
| Project Building Requirements   | Only the contents of the `/src` folder are required.           |
```

### 4. Cloning the Repository and Setup:

To clone this repository and set up the project, execute the following commands in sequence:

```bash
git clone git@github.com:karolliszniewski/admin-panel.git
cd admin-panel
npm install
npm run build
npm run start
```
