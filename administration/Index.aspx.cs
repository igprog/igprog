using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Net;
using System.Net.Mail;
using IGPROG;
using System.Text;



public partial class administration_Index : System.Web.UI.Page
{

    Properties resource = new Properties();
    StringBuilder sb = new StringBuilder();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Session["login"] == null)
            {
                Response.Redirect("Login.aspx");
            }
            txtMyEmail.Text = "program.prehrane@yahoo.com";
        }

    }



    protected void btnSendMail_Click(object sender, EventArgs e)
    {
        CreateEmailArray();
    }

    private void CreateEmailArray()
    {
        if (txtMailCollection.Text != "")
        {
            TextReader read = new System.IO.StringReader(txtMailCollection.Text);
            int rows = 60;
            string[] arr = new string[rows];
            for (int i = 0; i < rows; i++)
            {
                arr[i] = read.ReadLine();
            }

            string email = "";
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] != null)
                {
                    email = arr[i];
                    SendMail(email);
                }
            }  
        }
    }

    private void SendMail(string email)
    {
        string MessageSubject = txtMessageSubject.Text;
        string myEmail = txtMyEmail.Text;
        string myPassword = txtMyPassword.Text;

        try
        {
            MailMessage mailMessage = new MailMessage();

            SmtpClient Smtp_Server = new SmtpClient();
            Smtp_Server.UseDefaultCredentials = false;
            Smtp_Server.Credentials = new NetworkCredential(myEmail, myPassword);
            Smtp_Server.Port = resource.MyServerPort;
            Smtp_Server.EnableSsl = true;
            Smtp_Server.Host = resource.MyServerHost;

            mailMessage.To.Add(email);
            mailMessage.From = new MailAddress(myEmail);
            mailMessage.Subject = MessageSubject;
            mailMessage.Body = MessageBody();

            Smtp_Server.Send(mailMessage);

          //  ClearForm();
            resource.Message = "POSLANO";

        }
        catch (Exception ex)
        {
            resource.Message = "GREŠKA!";
            return;

        }

        lblTest.Text = lblTest.Text + "; " + email + "- " + resource.Message;

    }


    private string MessageBody()
    {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine(txtMessage.Text);
        return sb.ToString();
    }
}