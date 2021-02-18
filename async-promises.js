const makeRequest = location => {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    location === 'Google' ?
      resolve('Google says hi') : reject('We can only talk to Google');
  });
}

const processRequest = response => {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra information + ${response}`);
  });
}

// execute using promises
makeRequest('Google').then(response => {
  console.log('Response received');
  return processRequest(response)
}).then(processedResponse => console.log(processedResponse));

// execute using async/await
const executeRequest = async location => {
  try {
    let response = await makeRequest(location);
    console.log('Response received');
    let processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

await executeRequest('Google');