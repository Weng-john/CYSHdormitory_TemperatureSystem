function doGet(e) {
  const url = '試算表名稱';
  var sheetname = '工作表名稱';
  var SpreadSheet = SpreadsheetApp.openByUrl(url);
  var Sheet = SpreadSheet.getSheetByName(sheetname);
  var LastRow = Sheet.getLastRow();
  var column = 1;
  
  var data = e.parameter;
  var Name = data.name;
  Name = Name.split(',');
  while(Name.length){
    Sheet.getRange(LastRow+1,column).setValue(Name.shift());
    column++;
  }
  return ContentService.createTextOutput("成功");
}
