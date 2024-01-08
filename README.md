1. Required Dependencies:
   Node: v20.10.0
   npm: 10.2.3
   tsc (TypeScript Compiler): Version 5.3.3

2. Running the Server on Port 3000:

To start the development server with live reload, use the following command:

npm run start

3. Compiling Files to the 'dist' Folder:
   To compile the project in production mode and generate the /dist folder, use:
   npm run build

4. Separation of JavaScript and CSS:
   Files are compiled into bundle.js and styles.css separately. This separation is achieved with the help of the MiniCssExtractPlugin plugin, even though CSS is declared and handled in TypeScript files in the project.

Project Structure:
/src
├── index.ts
├── styles.scss
├── index.html
└── other files...
/dist
├── bundle.js
└── styles.css

6. Additional Information:
   The configuration supports TypeScript, SCSS, CSS, and HTML files.
   The MiniCssExtractPlugin plugin extracts styles into the styles.css file.
   The CopyPlugin plugin copies the index.html file from the /src folder to the /dist folder.
   Only the contents of the /src folder are required to build the project.
   Ensure that you have the required dependencies installed by running:
   npm install

or for yarn:
yarn
