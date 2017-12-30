using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class administration_Login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnLogin_Click(object sender, EventArgs e)
    {
        LogIn();
    }

    protected void LogIn()
    {
        string userName = txtUserName.Text;
        string password = txtPassword.Text;

        if (userName == "igor" && password == "1")
        {
            Session["login"] = userName;
            Response.Redirect("Index.aspx");
        }
    }
}