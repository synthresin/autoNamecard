const uploadSingleAi = require('./uploadSingleAi');

async function uploadAis(fileResults) {
  for(i = 0; i < fileResults.length; i++) {
    await uploadSingleAi(fileResults[i])
  }
  console.log('모든 파일 업로드 완료');
}

module.exports = uploadAis;