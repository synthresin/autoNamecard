// 변수 설정
projectPath = arguments[0];

var person = {};
person.name = arguments[1];
person.nameEng = arguments[2];
person.job = arguments[3];
person.phoneNumber = arguments[4];
person.email = arguments[5];

var templateFile = new File(projectPath + "/templates/template.ai");

createNamecard(person);

function createNamecard(person) {
  var filePath = projectPath + "/dist/" + person.name + ".ai";
  var outlineFilePath = projectPath + "/dist/" + person.name + "outline.ai";

  var document = app.open(templateFile);
  document.saveAs(new File(filePath));
  // front 레이어 선택
  var frontLayer = document.layers.getByName('front');

  // front 레이어 안의 각 text item 들 선택
  var nameItem = frontLayer.pageItems.getByName('name');
  var nameEngItem = frontLayer.pageItems.getByName('nameEng');
  var jobItem = frontLayer.pageItems.getByName('job');
  var phoneNumberItem = frontLayer.pageItems.getByName('phoneNumber');
  var emailItem = frontLayer.pageItems.getByName('email');

  // 텍스트 설정
  nameItem.contents = person.name;
  nameEngItem.contents = person.nameEng;
  jobItem.contents = person.job;
  phoneNumberItem.contents = person.phoneNumber;
  emailItem.contents = person.email;

  // 영어 job care
  var rlatins = /[\u0000-\u007f]/;
  var text = jobItem.textRange;
  var helveticaMedium = app.textFonts.getByName("HelveticaNeue-Medium");

  for (i = 0; i < text.words.length; i++) {
    var word = text.words[i];
    for (j = 0; j < word.characters.length; j++) {
      var character = word.characters[j];

      if (rlatins.test(character.contents)) {
        character.size = 7.18;
        character.characterAttributes.textFont = helveticaMedium;
        character.characterAttributes.baselineShift = -.25;
      }
    }
  }

  document.save();

  // 아웃라인 & save as
  nameItem.createOutline();
  nameEngItem.createOutline();
  jobItem.createOutline();
  phoneNumberItem.createOutline();
  emailItem.createOutline();

  document.saveAs(new File(outlineFilePath));
  document.close();

  return outlineFilePath;
};