<%@ Page Title="" Language="C#" MasterPageFile="~/administration/Administration.master" AutoEventWireup="true" CodeFile="Index.aspx.cs" Inherits="administration_Index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <section>
        <fieldset>
            <legend>Postavke</legend>
            <div>
                <label>
                    Moj Email</label>
            </div>
            <div>
                <asp:TextBox ID="txtMyEmail" CssClass="txtControl" runat="server"></asp:TextBox>
            </div>
            <div>
                <label>
                    Moja Lozinka</label>
            </div>
            <div>
                <asp:TextBox ID="txtMyPassword" CssClass="txtControl" runat="server" TextMode="Password"></asp:TextBox>
            </div>
        </fieldset>


        <fieldset>
            <legend>News Letter</legend>
            <div>
                <label>
                    Naslov</label>
            </div>
            <div>
                <asp:TextBox ID="txtMessageSubject" CssClass="txtControl" runat="server"></asp:TextBox>
            </div>
            <div>
                <label>
                    Poruka</label>
            </div>
            <div>
                <asp:TextBox ID="txtMessage" runat="server" CssClass="txtControl" TextMode="MultiLine" Rows="10"></asp:TextBox>
            </div>
            <div>
                <label>
                    E-amil adrese</label>
            </div>
            <div>
                <asp:TextBox ID="txtMailCollection" runat="server" CssClass="txtControl" TextMode="MultiLine" Rows="10"></asp:TextBox>
            </div>
            <div>
                <asp:Button ID="btnSendMail" runat="server" Text="Pošalji" OnClick="btnSendMail_Click" />
            </div>
            <asp:Label ID="lblTest" runat="server" Text=""></asp:Label>
        </fieldset>
    </section>
</asp:Content>

