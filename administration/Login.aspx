<%@ Page Title="" Language="C#" MasterPageFile="~/administration/Administration.master" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="administration_Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <section style="width:200px">
        <fieldset>
            <legend>Login </legend>
            <div>
                <asp:TextBox ID="txtUserName" runat="server" placeholder="Korisničko ime"></asp:TextBox>
            </div>
            <div>
                <asp:TextBox ID="txtPassword" TextMode="Password" runat="server" placeholder="lozinka"></asp:TextBox>
            </div>
            <div>
                <asp:Button ID="btnLogin" runat="server" Text="Login" OnClick="btnLogin_Click" />
            </div>
        </fieldset>
    </section>
</asp:Content>

