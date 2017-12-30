<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="administration_test_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:Literal ID="litMessage" runat="server"></asp:Literal>
        <asp:Button ID="btnWebService" runat="server" Text="Connect to Program Prehrane Web Service" OnClick="ConnectToWebService" />
    </div>

    <div>
    Test geostation API
    <input type="button" onclick="testGeolocation()" value="Test Geolocation" />
    <div>
    start Lat: <label id="startLat"></label>
    </div>
    <div>
    start Lon: <label id="startLon"></label>
    </div>
    </div>
    </form>


    <script>

        window.onload = function () {
            var startPos;
            var geoOptions = {
                enableHighAccuracy: true,
                maximumAge: 5 * 60 * 1000,
                timeout: 10 * 1000
            }

            var geoSuccess = function (position) {
                startPos = position;
                document.getElementById('startLat').innerHTML = startPos.coords.latitude;
                document.getElementById('startLon').innerHTML = startPos.coords.longitude;
            };
            var geoError = function (error) {
                console.log('Error occurred. Error code: ' + error.code);
                alert('Error occurred. Error code: ' + error.code);
                // error.code can be:
                //   0: unknown error
                //   1: permission denied
                //   2: position unavailable (error response from location provider)
                //   3: timed out
            };

            navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
        };
       


        function testGeolocation() {
           
            // check for Geolocation support
            if (navigator.geolocation) {
                console.log('Geolocation is supported!');
                alert('Geolocation is supported!');
            }
            else {
                console.log('Geolocation is not supported for this Browser/OS version yet.');
                alert('Geolocation is not supported for this Browser/OS version yet.');
            }
           
        }
    </script>


</body>
</html>
