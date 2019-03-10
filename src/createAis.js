const createSingleAi = require('./createSingleAi');
const uploadAis = require('./uploadAis');

async function createAis(persons) {
  var fileResults = [];
  for (i = 0; i < persons.length; i++) {
    var fileResult = await createSingleAi(persons[i]);
    fileResults.push(fileResult);
  }
  console.log(`모든 명함 생성 완료`);
  uploadAis(fileResults);
}

module.exports = createAis;