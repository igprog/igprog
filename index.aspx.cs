using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Net;
using System.Net.Mail;
using IGPROG;

public partial class Index : System.Web.UI.Page
{
    Properties resource = new Properties();
    StringBuilder sb = new StringBuilder();


    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            litMessage.Text = "";
        }
    }

    protected void btnPosalji_Click(object sender, EventArgs e)
    {
        SendMail();
        litMessage.Text = ErrorMessage();
    }

    private void SendMail()
    {

        string MessageSubject = "IG PROG Upit ";

        try
        {
            MailMessage mailMessage = new MailMessage();

            SmtpClient Smtp_Server = new SmtpClient();
            Smtp_Server.UseDefaultCredentials = false;
            Smtp_Server.Credentials = new NetworkCredential(resource.MyEmail, resource.MyPassword);
            Smtp_Server.Port = resource.MyServerPort;
            Smtp_Server.EnableSsl = true;
            Smtp_Server.Host = resource.MyServerHost;

            mailMessage.To.Add(resource.MyEmail);
            mailMessage.From = new MailAddress(resource.MyEmail);
            mailMessage.Subject = MessageSubject;
            mailMessage.Body = MessageBody();

            Smtp_Server.Send(mailMessage);
            ClearForm();
            divContactForm.Visible = false;
            resource.Message = "Poruka poslana.";

        }
        catch (Exception ex)
        {
            resource.Message = "Greška. Poruka nije poslana!";
            return;

        }

    }

    private string MessageBody()
    {
        StringBuilder sb = new StringBuilder();
        string Name = txtIme.Text;
        string FromEmail = txtEmail.Text;

        sb.AppendLine(string.Format(@"
                    Upit
    
                    Ime i prezime: {0}
                    E-mail: {1}
                    Kontakt telefon: {2}
                    Usluga: {3}
                    Tekst upita: {4}"
            , txtIme.Text
            , txtEmail.Text
            , txtPhone.Text
            , CBLSelectedItems(cblServices)
            , txtPoruka.Text));

        return sb.ToString();
    }

    private string ErrorMessage()
    {
        StringBuilder sb = new StringBuilder();

        sb.AppendLine(string.Format(@"
                   <div class=divErrorMessage>
                    {0}
                   </div>"
            , resource.Message));

        return sb.ToString();
    }

    private void ClearForm()
    {
        txtIme.Text = "";
        txtEmail.Text = "";
        txtPoruka.Text = "";
    }

    private string CBLSelectedItems(CheckBoxList cblControl)
    {
        string selectedItems = "";
        string comma = "";
        int counter = 0;
        foreach (ListItem item in cblControl.Items)
        {
            if (item.Selected)
            {
                comma = counter <= 0 ? "" : ", ";
                selectedItems = selectedItems + comma + item.Value;
                counter++;
            }
        }
        return selectedItems;
    }
}