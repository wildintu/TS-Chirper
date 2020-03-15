
let Fetch = async (chirps: object) => {
    console.log(chirps);
  try {
      let response = await fetch('/api/chirps', {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(chirps)
      });
      return await response.text();
  } catch(err) {
      console.log(err)
  }
}

export default Fetch;