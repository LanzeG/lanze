// api/saveKey.js

const fs = require('fs');

export default async (req, res) => {
  if (req.method === 'POST') {
    const { key } = req.body;

    if (!key) {
      return res.status(400).json({ error: 'Key is required' });
    }

    updateVisitCount();

    return res.status(200).json({ message: 'Visit count updated successfully' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

// Function to update the visit count in the JSON file
function updateVisitCount() {
  try {
    // Construct the path to keys.json using __dirname
    const keysFilePath = path.join(__dirname, 'keys.json');

    // Read existing data from file
    let jsonData = JSON.parse(fs.readFileSync(keysFilePath));

    // Increment visit count or initialize to 1 if it doesn't exist
    jsonData.visits = (jsonData.visits || 0) + 1;

    // Write updated data back to file
    fs.writeFileSync(keysFilePath, JSON.stringify(jsonData, null, 2));

    console.log('Visit count updated successfully:', jsonData.visits);
  } catch (err) {
    console.error('Error updating visit count:', err);
  }
}

