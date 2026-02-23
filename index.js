const fs = require('fs');
const path = require('path');

// Basic server/engine to simulate a Node.js project assembly
console.log("Persian Recipe Blog Engine Started...");

const recipes = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/recipes.json'), 'utf8'));
const tools = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/tools.json'), 'utf8'));

console.log(`Loaded ${recipes.length} recipes and ${tools.length} tools.`);

// In a real Node app, we'd use a template engine like EJS, but for "basic static" we just log.
console.log("Project structure is now modular and ready for deployment.");
