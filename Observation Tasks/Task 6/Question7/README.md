# NPM and package.json

### What is NPM?
**NPM (Node Package Manager)** is the default package manager for Node.js. It allows developers to discover, share, and reuse code packages (libraries) written by others. It consists of a command-line client (`npm`) and an online database of public packages.

### What is package.json?
The `package.json` file is the heart of any Node.js project. It records important metadata about a project, such as its name, version, description, and, most importantly, the list of **dependencies** (external packages) the project needs to run.

### Steps to Install and Use an External Package

1. **Initialize the Project:**
   Run `npm init -y` in the terminal. This creates a default `package.json` file.
   
2. **Install the Package:**
   Run `npm install <package-name>`. For example, we ran `npm install uuid`. 
   This downloads the package into a `node_modules` folder and adds it to the dependencies in `package.json`.
   
3. **Use the Package in Code:**
   Import the package into your file using `require()` and use its functions.
