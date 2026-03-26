function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // A: Full Name | B: Phone Number | C: Suburb/Location | D: Vehicle Make & Model | E: Service Selected | F: Additional Notes
    sheet.appendRow([
      data.name,
      data.phone,
      data.suburb,
      data.vehicle,
      data.service,
      data.notes
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"status":"success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"status":"error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}