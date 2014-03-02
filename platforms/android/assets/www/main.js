var scanCode = function() {
    console.log('scanning');
    
    var scanner = cordova.require("com.phonegap.plugins.barcodescanner.BarcodeScanner");

    scanner.scan( function (result) { 

        alert("We got a barcode\n" + 
        "Result: " + result.text + "\n" + 
        "Format: " + result.format + "\n" + 
        "Cancelled: " + result.cancelled);  

       console.log("Scanner result: \n" +
            "text: " + result.text + "\n" +
            "format: " + result.format + "\n" +
            "cancelled: " + result.cancelled + "\n");
        document.getElementById("info").innerHTML = result.text;
        console.log(result);
        /*
        if (args.format == "QR_CODE") {
            window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
        }
        */

    }, function (error) { 
        console.log("Scanning failed: ", error); 
    } );
}
var encodeText = function() {
    window.plugins.barcodeScanner.encode(
            BarcodeScanner.Encode.TEXT_TYPE,
            "http://www.mobiledevelopersolutions.com", 
            function(success) {
                alert("Encode success: " + success);
            }, function(fail) {
                alert("Encoding failed: " + fail);
            });
}

var encodeEmail = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.EMAIL_TYPE,
        "a.name@gmail.com", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodePhone = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.PHONE_TYPE,
        "555-227-5283", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodeSMS = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.SMS_TYPE,
        "An important message for someone.", function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}