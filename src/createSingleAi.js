const runApplescript = require('run-applescript');
const path = require("path");
const jsxPath = path.resolve("./createNamecard.jsx");

async function createSingleAi(person) {
  var name = person[0];
  var nameEng = person[1];
  var job = person[2];
  var phone = person[3];
  var email = person[4];
  var qty = person[5];
  console.log(`${name} 명함 생성 시작`);
  var filePath = await runApplescript(`tell application "Adobe Illustrator" to do javascript "#include ${jsxPath}" with arguments {"${path.dirname(require.main.filename)}", "${name}", "${nameEng}", "${job}", "${phone}", "${email}"}`);
  console.log(`${name} 명함 생성 완료`);
  return {
    filePath: filePath,
    qty: qty
  }
}

module.exports = createSingleAi;