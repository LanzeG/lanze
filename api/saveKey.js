export default async (req, res) => {
  if (req.method === 'POST') {
    const { key, geolocation } = req.body;

    if (!key || !geolocation) {
      return res.status(400).json({ error: 'Key and geolocation are required' });
    }

    await saveKeyAndGeolocation(key, geolocation);

    return res.status(200).json({ message: 'Key and geolocation saved successfully' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

async function saveKeyAndGeolocation(key, geolocation) {
  try {
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

    // Ensure that the existing visitors array is extracted
    let visitors = jsonData.record.visitors || [];

    // Add the new visitor key and geolocation to the array
    visitors.push({ key, geolocation });

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
      throw new Error('Failed to save key and geolocation to JSON: ' + putResponse.statusText);
    }

    console.log('Key and geolocation saved to JSON successfully');
  } catch (err) {
    console.error('Error saving key and geolocation to JSON:', err);
  }
}
