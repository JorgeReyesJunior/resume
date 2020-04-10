function generateNewKey(val) {
  let newKey; 

  if (val) {
    newKey = `${val}-${new Date().getTime()}`;
  } else {
    newKey = `${new Date().getTime()}`;
  }

  return newKey;
}

export default {
  generateNewKey
};