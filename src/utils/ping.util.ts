import axios from 'axios';

export async function pingSelf(url: string) {
  try {
    const { data } = await axios.get(url);
    console.log(`Server pinged successfully: ${data.message}`);
    // return true;
  } catch (e: any) {
    console.error(`Error pinging server: ${e.message}`);
    // return false;
  }
}

// (for render services) Keep the API awake by pinging it periodically
// setInterval(pingSelf(BASE_URL), 600000); //ping every 10 minutes
