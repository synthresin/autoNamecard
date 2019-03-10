# autoNamecard

Illustrator API 와 Selenium 을 사용하여 명함 AI 파일 생성 및 인쇄소 장바구니에 파일을 업로드하는 과정까지를 자동화 합니다. 결제과정은 포함되지 않습니다.

## 요구 사항
- NodeJS 환경
- Adobe Illustrator CC
- Apple SD Gothic Neo
- Helvetica Neue
- 완전한 실행을 위해선 명함통(http://mhtong.co.kr) ID와 비밀번호를 만든 후, `src/uploadSingleAi.js`에서, id 와 비밀번호를 변경해 주어야 합니다.

```javascript
await driver.findElement(By.name('id')).sendKeys('쇼핑몰 아이디');
await driver.findElement(By.name('pw')).sendKeys('쇼핑몰 비밀번호');
```

## 실행

```
npm install
node index.js
```

## 수정하기
- `test.csv` 를 수정해 다른 데이터를 시험해 볼 할 수 있습니다.
- `templates/template.ai` 를 수정해 다른 디자인을 자동화 할 수 있습니다.(레이어 이름을 스크립트와 맞춰주어야 합니다)
- `src/uploadSingleAi.js` 를 수정해 자신이 원하는 쇼핑몰에 맞도록 코드를 수정할 수 있습니다.
