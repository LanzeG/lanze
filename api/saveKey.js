const fs = require('fs');
const path = require('path');

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
    let jsonData = fs.readFileSync(keysFilePath, 'utf8');

    // Check if jsonData is empty
    if (!jsonData.trim()) {
      // If jsonData is empty, initialize it as an empty object
      jsonData = '{}';
    }

    // Parse JSON data
    let parsedData = JSON.parse(jsonData);

    // Increment visit count or initialize to 1 if it doesn't exist
    parsedData.visits = (parsedData.visits || 0) + 1;

    // Write updated data back to file
    fs.writeFileSync(keysFilePath, JSON.stringify(parsedData, null, 2));

    console.log('Visit count updated successfully:', parsedData.visits);
  } catch (err) {
    console.error('Error updating visit count:', err);
  }
}
