const fs = require('fs');
const path = require('path');

/**
 * List all files synchronously
 * @param {string} dirPath - Directory path
 * @returns {Object|null} Parsed JSON data or null if error
 */
function logAllFiles(dirPath) {
  fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file.name);
      console.log(fullPath);
    });
  });
}


/**
 * Read JSON file synchronously
 * @param {string} dirPath - Directory path
 * @param {string} fileName - JSON file name
 * @returns {Object|null} Parsed JSON data or null if error
 */
function readJsonSync(dirPath, fileName) {
    try {
        const filePath = path.join(dirPath, fileName);
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const jsonString = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error reading JSON synchronously:', error.message);
        return null;
    }
}

/**
 * Read JSON file asynchronously
 * @param {string} dirPath - Directory path
 * @param {string} fileName - JSON file name
 * @returns {Promise<Object|null>} Promise resolving to parsed JSON data or null
 */
async function readJsonAsync(dirPath, fileName) {
    try {
        const filePath = path.join(dirPath, fileName);
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const jsonString = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error reading JSON asynchronously:', error.message);
        return null;
    }
}

/**
 * Write JSON file synchronously
 * @param {string} dirPath - Directory path
 * @param {string} fileName - JSON file name
 * @param {Object} data - Data to write
 * @param {boolean} [pretty=true] - Whether to pretty print JSON
 * @returns {boolean} Success status
 */
function writeJsonSync(dirPath, fileName, data, pretty = true) {
    try {
        const filePath = path.join(dirPath, fileName);
        const jsonString = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
        fs.writeFileSync(filePath, jsonString);
        return true;
    } catch (error) {
        console.error('Error writing JSON synchronously:', error.message);
        return false;
    }
}

/**
 * Write JSON file asynchronously
 * @param {string} dirPath - Directory path
 * @param {string} fileName - JSON file name
 * @param {Object} data - Data to write
 * @param {boolean} [pretty=true] - Whether to pretty print JSON
 * @returns {Promise<boolean>} Promise resolving to success status
 */
async function writeJsonAsync(dirPath, fileName, data, pretty = true) {
    try {
        const filePath = path.join(dirPath, fileName);
        const jsonString = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
        await fs.promises.writeFile(filePath, jsonString);
        return true;
    } catch (error) {
        console.error('Error writing JSON asynchronously:', error.message);
        return false;
    }
}

/**
 * Update specific fields in JSON file
 * @param {string} dirPath - Directory path
 * @param {string} fileName - JSON file name
 * @param {Object} updates - Object containing updates
 * @returns {Promise<boolean>} Promise resolving to success status
 */
async function updateJson(dirPath, fileName, updates) {
    try {
        const filePath = path.join(dirPath, fileName);
        const data = await readJsonAsync(dirPath, fileName);
        if (!data) return false;

        const updatedData = { ...data, ...updates };
        return await writeJsonAsync(dirPath, fileName, updatedData);
    } catch (error) {
        console.error('Error updating JSON:', error.message);
        return false;
    }
}

/**
 * Check if JSON file is valid
 * @param {string} dirPath - Directory path
 * @param {string} fileName - JSON file name
 * @returns {Promise<boolean>} Promise resolving to validity status
 */
async function isValidJson(dirPath, fileName) {
    try {
        const filePath = path.join(dirPath, fileName);
        const jsonString = await fs.promises.readFile(filePath, 'utf-8');
        JSON.parse(jsonString);
        return true;
    } catch {
        return false;
    }
}

// Method 1: Export individual functions
module.exports = {
    logAllFiles,
    readJsonSync,
    readJsonAsync,
    writeJsonSync,
    writeJsonAsync,
    updateJson,
    isValidJson
};