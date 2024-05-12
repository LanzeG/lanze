const fs = require('fs');
const path = require('path');

export default async (req, res) => {
  if (req.method === 'POST') {
    const { key } = req.body;

    if (!key) {
      return res.status(400).json({ error: 'Key is required' });
    }

    // Call function to generate unique JSON file with cookie key
    generateKeyFile(key);

    return res.status(200).json({ message: 'Key file generated successfully' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

// Function to generate unique JSON file with cookie key
function generateKeyFile(cookieKey) {
  try {
    // Generate a unique filename based on current timestamp
    const timestamp = Date.now();
    const filename = `cookie_key_${timestamp}.json`;

    // Construct the path for the new key file
    const keyFilePath = path.join(__dirname, filename);

    // Create an object with the cookie key
    const data = { cookieKey: cookieKey };

    // Write data to the new JSON file
    fs.writeFileSync(keyFilePath, JSON.stringify(data, null, 2));

    console.log('Key file generated successfully:', filename);
  } catch (err) {
    console.error('Error generating key file:', err);
  }
}
