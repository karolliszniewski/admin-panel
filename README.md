| No. | Required Dependencies | Version   |
|---- |----------------------- |-----------|
| 1.  | Node                   | v20.10.0  |
| 2.  | npm                    | 10.2.3    |
| 3.  | tsc                    | 5.3.3     |



### 1. Running the Server on Port 3000

To start the development server with live reload, use the following command:

```bash
npm run start
```
### 2. Compiling Files to the 'dist' Folder:
To compile the project in production mode and generate the /dist folder, use:
```bash
npm run build
```
### 3. Separation of JavaScript and CSS:
Files are compiled into bundle.js and styles.css separately. This separation is achieved with the help of the MiniCssExtractPlugin plugin, even though CSS is declared and handled in TypeScript files in the project.

### 5. Project Structure:
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

### 6. Additional Information:
```markdown


| Information                                         | Description                                                      |
|-----------------------------------------------------|------------------------------------------------------------------|
| Supported File Types                                | TypeScript, SCSS, CSS, HTML                                      |
| MiniCssExtractPlugin Extraction                     | Styles are extracted into the `styles.css` file.                 |
| CopyPlugin Copying                                  | The `index.html` file is copied from `/src` to `/dist` folder.   |
| Project Building Requirements                       | Only the contents of the `/src` folder are required.             |
```


### 7. Ensure that you have the required dependencies installed by running:
  ```bash
  npm install
   ```

### 8. Cloning the Repository and Setup:

To clone this repository and set up the project, execute the following commands in sequence:

```bash
git clone git@github.com:karolliszniewski/webpack-ts-scss-template.git
cd webpack-ts-scss-template
npm install
npm run build
npm run start
```
