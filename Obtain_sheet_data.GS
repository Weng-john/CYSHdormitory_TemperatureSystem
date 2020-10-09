function doGet(e) {
  var Url = "網址";
  var sheetName = "主頁";
  var SpreadSheet = SpreadsheetApp.openByUrl(Url);
  var sheetcontent = SpreadSheet.getSheetByName(sheetName);
  var LastRow = sheetcontent.getLastRow();
  var contentrome = sheetcontent.getRange(2, 1, LastRow, 1).getValues();
  var contentname = sheetcontent.getRange(2, 2, LastRow, 1).getValues();
  contentrome.toString();
  contentname.toString();
  var content = contentrome+"/n"+contentname;
  
  return ContentService.createTextOutput(content);
}
