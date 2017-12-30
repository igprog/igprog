using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using IGPROG;

namespace IGPROG
{
    /// <summary>
    /// Summary description for Renderer
    /// </summary>
    public class Renderer
    {

        public static string RenderHeader()
        {
            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            sb.AppendLine(string.Format(@"
                <div style=""float:left; padding: 10px 20px 0px 20px; margin-left:20px"">
                   <a href=""Index.aspx""><h1>{1}</h1></a>
                <label style=""color: Silver"">{2}</label>
                </div>"
            , RenderLeftBanner()
            , resource.Title
            , resource.ShortDescription));

            return sb.ToString();

        }

        public static string RenderLeftBanner()
        {
            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            if (resource.LeftBanner != "")
            {
                sb.AppendLine(string.Format(@" 
            <img id=""left-banner"" src=""{0}"" align=""middle"">"
                       , resource.LeftBanner
                         ));
            }

            return sb.ToString();
        }


        public static string RenderHorizontalNav()
        {
            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            sb.AppendLine(string.Format(@"
                <ul class=""ul-horNav"">
                    <li class=""li-horNav""><a href=""{0}"">{1}</a></li>
                    <li class=""li-horNav""><a href=""{2}"">{3}</a></li>
                    <li class=""li-horNav""><a href=""{4}"">{5}</a></li>
                    <li class=""li-horNav""><a href=""{6}"">{7}</a></li>
                    <li class=""li-horNav""><a href=""{8}"">{9}</a></li>
                </ul>"
                    , resource.Link1
                    , resource.Link1Title
                    , resource.Link2
                    , resource.Link2Title
                    , resource.Link3
                    , resource.Link3Title
                    , resource.Link4
                    , resource.Link4Title
                    , resource.Link5
                    , resource.Link5Title));

            return sb.ToString();
        }

        public static string RenderVerticalLinks()
        {

            string sbURL = "";
            string sbURLTitle = "";
            StringBuilder sb = new StringBuilder();


            sb.AppendLine("<div>");
            int n = 3;  //number of vertical links
            for (int i = 0; i <= n; i++)
            {
                if (i == 0)
                {
                    sbURL = "Index.aspx";
                    sbURLTitle = "Home";
                }
                if (i == 1)
                {
                    sbURL = "ProgramPrehrane.aspx";
                    sbURLTitle = "Program Prehrane";
                }
                if (i == 2)
                {
                    sbURL = "EnergetskiPregled.aspx";
                    sbURLTitle = "Energetski Pregled";
                }
                if (i == 3)
                {
                    sbURL = "Contact.aspx";
                    sbURLTitle = "Kontakt";
                }


                sb.AppendLine(string.Format(@"
                        <a class=""verticalLink hover"" href=""{0}"">{1}</a>"
                   , sbURL
                   , sbURLTitle));

            }

            sb.AppendLine("</div>");
            return sb.ToString();

        }


        public static string RenderRightVerticalLinks()
        {
            string sbTitle = "";
            string sbURL = "";
            string sbURLTitle = "";
            string sbImage = "";
            string sbDescription = "";
            int sbImageWidth = 0;
            string target = "_blank";

            StringBuilder sb = new StringBuilder();

//            sb.AppendLine(string.Format(@"
//                                <div>
//                                <p>Aplikacije</p>"));
            int n = 2;  //number of vertical links
            for (int i = 0; i <= n; i++)
            {
                if (i == 0)
                {
                    sbTitle = "Program Prehrane 5.0";
                    sbURL = "http://www.programprehrane.com";
                    sbURLTitle = "www.programprehrane.com";
                    sbImage = "images/PP5_box1.gif";
                    sbImageWidth = 70;
                    sbDescription = "Računalni program za izradu uravnoteženi jelovnika i plana tjelesne aktivnosti.";
                    target = "_blank";
                }
                if (i == 1)
                {
                    sbTitle = "Program Prehrane Online";
                    sbURL = "http://www.programprehrane.com/aplikacija";
                    sbURLTitle = "www.programprehrane.com/aplikacija";
                    sbImage = "images/ProgramPrehraneOnline.gif";
                    sbImageWidth = 50;
                    sbDescription = "Web aplikacija za izradu uravnoteženi jelovnika i plana tjelesne aktivnosti.";
                    target = "_blank";
                }
                if (i == 2)
                {
                    sbTitle = "Energetski pregled";
                    sbURL = "EnergetskiPregled.aspx";
                    sbURLTitle = "Energetski pregled";
                    sbImage = "images/EnergetskiPregledLaptopMobile.gif";
                    sbImageWidth = 170;
                    sbDescription = "Web aplikacija za prikupljanje podataka za izradu energetskih certifikata.";
                    target = "";
                }
                //if (i == 3)
                //{
                //    sbURL = "http://www.apartmentselvira.com";
                //    sbURLTitle = "Apartments Elvira";
                //    sbImage = "images/ApartmentsElvira.jpg";
                //    sbImageWidth = 170;
                //    sbDescription = "Apartmens Elvira - Brela";
                //}
                //if (i == 4)
                //{
                //    sbURL = "http://program-prehrane.com";
                //    sbURLTitle = "Program Prehrane";
                //}
                //if (i == 5)
                //{
                //    sbURL = "http://program-prehrane.com";
                //    sbURLTitle = "Program Prehrane";
                //}

                sb.AppendLine(string.Format(@"
                <div class=""divApplications shadow"">
                    <b><a href=""{0}"" class=""invertColor"" target=""{5}"">{6}</a></b><br/><br/>
                    <a href=""{0}"" class=""invertColor"" target=""{5}""><img src=""{2}"" align=""middle"" width=""{3}"" height=""150""></a>
                    <p>{4}</p>
                    <a href=""{0}"" class=""invertColor"" target=""{5}"">{1}</a>
                </div>"
                  , sbURL
                  , sbURLTitle
                  , sbImage
                  , sbImageWidth
                  , sbDescription
                  , target
                  , sbTitle));

//                sb.AppendLine(string.Format(@"
//                    <a href=""{0}"">{1}</a><br/><br/>"
//                   , sbURL
//                   , sbURLTitle));

            }

            //sb.AppendLine("</div>");
            return sb.ToString();

        }


      



        public static string RenderIndex()
        {

            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            sb.AppendLine(string.Format(@"
            <div class="""">
                <h2>{0}</h2>
            </div>
                <img class=""mainImage"" border=""0"" src=""{1}""> 
                <p class=""p1"">{2}</p>"
                , "IZRADA WEB APLIKACIJA I RAČUNALNIH PROGRAMA"
                , resource.MainImage
                , resource.Longdescription));
            //  width=""350"" height=""267"" align=""right"" hspace=""20"" vspace=""20""> 
            return sb.ToString();

        }



//        public static string OldRenderContact()
//        {

//            StringBuilder sb = new StringBuilder();
//            Properties resource = new Properties();

//            sb.AppendLine(string.Format(@"
//                            <P>{1}, {2}, vl. {3}</p>
//                            <p>{4}, {5} {6}, {7}</p>
//                            <p>OIB {8}</p>
//                            <p>MB {9}</p>
//                            <p>IBAN {10}</p>
//                            <br/>
//                            <b>KONTAKT</b>
//                            <p>Tel: {11}</p>
//                            <p>GSM: {12}</p>
//                            <p><a class=""blueFont"" href=""mailto:{13}?subject=Upit"">{13}</a></p>
//                            <p><a class=""blueFont"" href=""{14}"">{15}</a></p>"
//                , resource.Link3Title
//                , resource.Title
//                , resource.ShortDescription
//                , resource.Name
//                , resource.Adress
//                , resource.Zip
//                , resource.City
//                , resource.Country
//                , resource.OIB
//                , resource.MB
//                , resource.IBAN
//                , resource.Tel
//                , resource.GSM
//                , resource.MyEmail
//                , resource.SiteURL
//                , resource.SiteURLTitle));


//            return sb.ToString();

//        }

        public static string RenderContact()
        {

            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            sb.AppendLine(string.Format(@"
                            <p>Tel: {0}</p>
                            <p>GSM: {1}</p>
                            <p><a class=""blueFont"" href=""mailto:{2}?subject=Upit"">{2}</a></p>
                            <p><a class=""blueFont"" href=""{3}"">{4}</a></p>"
                , resource.Tel
                , resource.GSM
                , resource.MyEmail
                , resource.SiteURL
                , resource.SiteURLTitle));

           
            return sb.ToString();

        }

        public static string RenderCompanyInfo()
        {

            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            sb.AppendLine(string.Format(@"
                            <P>{0}</p>
                            <p>{1}, {2} {3}, {4}</p>
                            <p>OIB {5}</p>
                            <p>MB {6}</p>
                            <p>IBAN {7}</p>"
                , resource.CompanyName
                , resource.Adress
                , resource.Zip
                , resource.City
                , resource.Country
                , resource.OIB
                , resource.MB
                , resource.IBAN));


            return sb.ToString();

        }


        public static string RenderFooterLinks()
        {
            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            sb.AppendLine(string.Format(@" 
                        <p><a href=""{0}"" target=""_blank"">{1}</a></p>
                        <p><a href=""{2}"" target=""_blank"">{3}</a></p>
                        <p><a href=""{4}"" target=""_blank"">{5}</a></p>
                        <p><a href=""{6}"" target=""_blank"">{7}</a></p>
                        <p><a href=""{8}"" target=""_blank"">{9}</a></p>"
                    , resource.SiteURL
                    , resource.SiteURLTitle
                    , "http://www.programprehrane.com"
                    , "www.programprehrane.com"
                    , "http://www.programprehrane.com/aplikacija"
                    , "www.programprehrane.com/aplikacija"
                    , "http://www.apartmentselvira.com"
                    , "www.apartmentselvira.com"
                    , "http://www.villamilibrela.com"
                    , "www.villamilibrela.com"));

            return sb.ToString();

        }

        public static string RenderFooter()
        {
            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            sb.AppendLine(string.Format(@"
                <div class=""copyright"">
                    <p style=""padding: 5px 20px 5px 5px"">{0} {1} {2}<p/>
                </div>"
            , resource.Copyright
            , DateTime.Today.Year.ToString()
            , resource.Title
                        ));

            return sb.ToString();
        }

        public static string RenderProgramPrehrane()
        {

            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            sb.AppendLine(string.Format(@"
                    <div class=""divContentTitle shadow"">
                         <h2>{0}</h2>
                    </div>"
                , "Program Prehrane"));


            return sb.ToString();

        }

        public static string RenderRegistracija()
        {

            StringBuilder sb = new StringBuilder();
            Properties resource = new Properties();

            sb.AppendLine(string.Format(@"
                                <div><p>Registracija:<br/>{0}</p>
                                <div/>"
                                , resource.Name
                                    ));


            return sb.ToString();


        }



        //    public static string Message()
        //    {


        //        return "Greška!";

        ////        StringBuilder sb = new StringBuilder();
        ////     //   ClassPodaci resource = new ClassPodaci();

        ////        sb.AppendLine(string.Format(@"
        ////                                <div><p>Greška!<br/></p>
        ////                                <div/>"
        ////                                 ));


        ////        return sb.ToString();
        //    }
    }

}