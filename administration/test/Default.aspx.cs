using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using com.programprehrane.www;
public partial class administration_test_Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void ConnectToWebService(object sender, EventArgs e)
    {
        WebService proxy = new WebService();
        litMessage.Text = string.Format(@"
                        <div>
                        <p>{0}</p>
                        </div>"
            , proxy.HelloWorld());
    }
}