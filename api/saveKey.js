// api/saveKey.js

const fs = require('fs');
const path = require('path');

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { key } = req.body;

      if (!key) {
        return res.status(400).json({ error: 'Key is required' });
      }

      const keysFilePath = path.resolve('./keys.json');
      saveKeyToJsonFile(keysFilePath, key);

      return res.status(200).json({ message: 'Key saved successfully' });
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error saving key:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to save the key to a JSON file
function saveKeyToJsonFile(filePath, key) {
  let jsonData = [];
  try {
    // Read existing data from file
    jsonData = JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    // Ignore error if file doesn't exist yet
  }

  // Append new key to existing data
  jsonData.push({ "key": key });

  // Write updated data back to file
  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
}
