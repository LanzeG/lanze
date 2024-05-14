export default async (req, res) => {
  if (req.method === 'POST') {
    const { key, ip, geolocation } = req.body;

    if (!key) {
      return res.status(400).json({ error: 'Key is required' });
    }

    // Pass the generated key, IP address, and geolocation to the updateVisitCount function
    await updateVisitCount(key, ip, geolocation);

    return res.status(200).json({ message: 'Visit count updated successfully' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

async function updateVisitCount(generatedKey, ip, geolocation) {
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

    // Extract the existing visitors array
    let visitors = jsonData.record.visitors || [];

    // Check if the generated key already exists in the list of visitors
    if (!visitors.some(visitor => visitor.key === generatedKey)) {
      // Add the new visitor key, IP address, and geolocation data to the existing array
      const newVisitor = {
        key: generatedKey,
        ip: ip,
        geolocation: {
          country: geolocation.country,
          city: geolocation.city,
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
          timeZone: geolocation.timeZone
        }
      };
      visitors.push(newVisitor);

      // Construct the data with the updated array of visitors
      const data = { ...jsonData.record, visitors };

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

      console.log('Key, IP address, and geolocation appended to JSON successfully');
    } else {
      console.log('Key already exists in the list of visitors');
    }
  } catch (err) {
    console.error('Error appending key to JSON:', err);
  }
}
