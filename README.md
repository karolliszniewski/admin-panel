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

### v1.0 Project Successfully Migrated to the New Webpack Setup

After the transition, I will continue to design and code for this project.

![Preview Image](https://github.com/karolliszniewski/admin-panel/assets/105976690/5646b3fb-6daa-4e4d-85a7-7c60402e45b6)

_Preview of the current project phase for version 1.0_
