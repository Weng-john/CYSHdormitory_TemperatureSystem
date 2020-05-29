function myFunction() {
  var Time = new Date();
  var year = Time.getFullYear();
  var month = Time.getMonth();
  var date = Time.getDate();
  year-=1911;  month+=1;  date-=1;
  
  //取得表單回應資料
  var Url = "https://docs.google.com/spreadsheets/d/1oa5uV75WdklQIUT5-D1NkJPMnRD5CcLlPs5O36oCeY0/";
  var sheetName = "表單回應";
  var SpreadSheet = SpreadsheetApp.openByUrl(Url);
  var sheetRespond = SpreadSheet.getSheetByName(sheetName);
  var formRespond = sheetRespond.getRange( 2, 1).getValue();
  if(formRespond!=""){
    //刪除表單回應
    var Sheet = SpreadSheet.getSheetByName(sheetName);
    var FormUrl = "https://docs.google.com/forms/d/18L0HvLtdSXMn8F4wlOISVVH_t0Rd3WzEboqWIXR3f6A/";
    var form = FormApp.openByUrl(FormUrl);
    form.deleteAllResponses();
    
    //重設人員比對資料
    var url = ["https://docs.google.com/spreadsheets/d/1oa5uV75WdklQIUT5-D1NkJPMnRD5CcLlPs5O36oCeY0/","https://docs.google.com/spreadsheets/d/1yGZ0WKQPjX8hgWtLxWz51dr2eT3k2N_pLWKJ-e1jFL4/"];
    var sheetname = ["人員比對","名單"];
    for(var i=0;i<2;i++){
      var URL = url[i];
      var Spreadsheet = SpreadsheetApp.openByUrl(url[i]);
      var Sheet = Spreadsheet.getSheetByName(sheetname[i]);
      var LastRow = Sheet.getLastRow();
      var Lastcolumn = Sheet.getLastColumn();
      Sheet.getRange(4-i, 1, LastRow, Lastcolumn).setValue("");
    }
    
    //重設請假名單
    sheetname = "主頁";
    var Sheet = SpreadSheet.getSheetByName(sheetname);
    var LastRow = Sheet.getLastRow();
    Sheet.getRange(3, 9, LastRow, 1).setValue("");
  
    //建立回應副本並刷新表單回應內容
    SpreadSheet.setActiveSheet(SpreadSheet.getSheets()[2]);
    SpreadSheet.duplicateActiveSheet();
    SpreadSheet.renameActiveSheet(year+"."+month+"."+date);
    var sheet = SpreadSheet.getSheetByName(sheetName);
    var lastRow = sheet.getLastRow();
    sheet.deleteRows(2, lastRow-1);
  }
}
