export default async (req, res) => {
  if (req.method === 'POST') {
    const { key } = req.body;

    if (!key) {
      return res.status(400).json({ error: 'Key is required' });
    }

    // Pass the generated key to the updateVisitCount function
    await updateVisitCount(key);

    return res.status(200).json({ message: 'Visit count updated successfully' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

async function updateVisitCount(generatedKey) {
  try {
    // Construct the data to be appended
    const data = { visitors: generatedKey };

    // Fetch options
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': '$2a$10$RIBk7Eb2nSMdrVUxf6KZVumd.l6WiMDM.dOeas7o1uteZMLORqGe6'
      },
      body: JSON.stringify(data),
    };

    // Send PUT request to JSON file endpoint
    const response = await fetch('https://api.jsonbin.io/v3/b/664170abad19ca34f86892d0', options);

    // Check if request was successful
    if (response.ok) {
      console.log('Key appended to JSON successfully');
    } else {
      console.error('Failed to append key to JSON:', response.statusText);
    }
  } catch (err) {
    console.error('Error appending key to JSON:', err);
  }
}
