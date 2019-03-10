const {Builder, By, until} = require('selenium-webdriver');

async function uploadSingleAi(fileResult) {
  console.log(fileResult.filePath + "업로드 시작");
  let driver = await new Builder().forBrowser('safari').build();
  try {
    await driver.get('http://mhtong.co.kr/?mod=login');
    await driver.findElement(By.name('id')).sendKeys('쇼핑몰 아이디');
    await driver.findElement(By.name('pw')).sendKeys('쇼핑몰 비밀번호');
    await driver.findElement(By.name('loginform')).findElement(By.className('btnblue')).click();
    await driver.get('http://mhtong.co.kr/?r=home&m=mall&com=design&page=estimate');
    await driver.findElement(By.id('paper_code')).sendKeys('NCT20G7Z');
    await driver.executeScript('calculation("용지변경")');
    await customTimeout(500);
    await driver.findElement(By.id('print_color')).sendKeys('PTC21');
    await driver.executeScript('calculation("색상(도수)")');
    await customTimeout(500);
    await driver.findElement(By.id('paper_qty')).sendKeys(fileResult.qty);
    await driver.executeScript('calculation("용지변경")');
    await customTimeout(500);
    await driver.findElement(By.id('work_file')).sendKeys(fileResult.filePath);
    await driver.executeScript('cartSubmit("cart")');
    await driver.wait(until.urlContains('com=common&page=cart'));
    await customTimeout(500);
  } finally {
    await driver.quit();
    await customTimeout(500);
    console.log(fileResult.filePath + "업로드 종료");
  }
};

async function customTimeout(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  })
}

module.exports = uploadSingleAi;