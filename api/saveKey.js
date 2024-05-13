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
    // Fetch the existing data from the JSON file
    const response = await fetch('https://api.jsonbin.io/v3/b/664170abad19ca34f86892d0', {
      method: 'GET',
      headers: {
        'X-Master-Key': '$2a$10$RIBk7Eb2nSMdrVUxf6KZVumd.l6WiMDM.dOeas7o1uteZMLORqGe6'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch existing data');
    }

    const jsonData = await response.json();

    // Extract the array of visitors or initialize it if it doesn't exist
    let visitors = jsonData.visitors || [];

    // Check if the generated key already exists in the list of visitors
    if (!visitors.includes(generatedKey)) {
      // Add the new visitor key to the existing array
      visitors.push(generatedKey);

      // Construct the data with the updated array of visitors
      const data = { visitors };

      // Fetch options for the PUT request
      const putOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': '$2a$10$RIBk7Eb2nSMdrVUxf6KZVumd.l6WiMDM.dOeas7o1uteZMLORqGe6'
        },
        body: JSON.stringify(data),
      };

      // Send PUT request to update the JSON file with the new visitor list
      const putResponse = await fetch('https://api.jsonbin.io/v3/b/664170abad19ca34f86892d0', putOptions);

      if (!putResponse.ok) {
        throw new Error('Failed to append key to JSON: ' + putResponse.statusText);
      }

      console.log('Key appended to JSON successfully');
    } else {
      console.log('Key already exists in the list of visitors');
    }
  } catch (err) {
    console.error('Error appending key to JSON:', err);
  }
}