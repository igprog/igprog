using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IGPROG;


namespace IGPROG
{
    /// <summary>
    /// Summary description for ClassPodaci
    /// </summary>
    public class Properties
    {
        private string _SiteURL;
        private string _Copyright;
        private string _LeftBanner;
        private string _MainImage;
        private string _SiteURLTitle;

        private string _Title;
        private string _ShortDescription;
        private string _LongDescription;
        private string _CompanyName;
        private string _Name;
        private string _Adress;
        private string _Zip;
        private string _City;
        private string _Country;
        private string _Tel;
        private string _GSM;
        private string _OIB;
        private string _MB;
        private string _IBAN;

        private string _Link1;
        private string _Link1Title;
        private string _Link2;
        private string _Link2Title;
        private string _Link3;
        private string _Link3Title;
        private string _Link4;
        private string _Link4Title;
        private string _Link5;
        private string _Link5Title;
        private string _Link6;
        private string _Link6Title;

        private string _Message;

        private string _MyEmail;
        private string _MyPassword;
        private int _MyServerPort;
        private string _MyServerHost;


        public Properties()
        {
            _SiteURL = "http://www.igprog.hr";
            _SiteURLTitle = "www.igprog.hr";
            _Copyright = "Copyright (c)";
            _LeftBanner = "Images/eJelovniciLaptop.gif";
            _MainImage = "images/igprog.gif";

            _Title = "IG PROG";
            _ShortDescription = "Design & Development";
            _LongDescription = "";
            _CompanyName = "IG PROG, obrt za računalno programiranje vl. Igor Gašparović";
            _Name = "Igor Gašparović";
            _Adress = "Ludvetov breg 5";
            _Zip = "51000";
            _City = "Rijeka";
            _Country = "Hrvatska";
            _Tel = "++385 51 633 125";
            _GSM = "++385 98 330 966";
            _MB = "97370371";
            _OIB = "58331314923";
            _IBAN = "HR8423400091160342496";

            _Link1 = "Index.aspx";
            _Link1Title = "Naslovna";
            _Link2 = "Services.aspx";
            _Link2Title = "Ponuda";
            _Link3 = "Applications.aspx";
            _Link3Title = "Aplikacije";
            _Link4 = "Inquiry.aspx";
            _Link4Title = "Upit";
            _Link5 = "Contact.aspx";
            _Link5Title = "Kontakt";
            _Link6 = "Narudzba.aspx";
            _Link6Title = "Narudžba";


            _MyEmail = "igprog@yahoo.com";
            _MyPassword = "Jardula26";
            _MyServerPort = 587;
            _MyServerHost = "smtp.mail.yahoo.com";

            // _Message = "aaaa";
        }

        public string SiteURL
        {
            get
            {
                return _SiteURL;
            }
        }

        public string SiteURLTitle
        {
            get
            {
                return _SiteURLTitle;
            }
        }

        public string Copyright
        {
            get
            {
                return _Copyright;
            }
        }


        public string LeftBanner
        {
            get
            {
                return _LeftBanner;
            }
        }

        public string MainImage
        {
            get
            {
                return _MainImage;
            }
        }


        public string Title
        {
            get
            {
                return _Title;
            }
        }

        public string ShortDescription
        {
            get
            {
                return _ShortDescription;
            }
        }

        public string Longdescription
        {
            get
            {
                return _LongDescription;
            }

        }

        public string CompanyName
        {
            get
            {
                return _CompanyName;
            }
        }

        public string Name
        {
            get
            {
                return _Name;
            }
        }

        public string Adress
        {
            get
            {
                return _Adress;
            }
        }

        public string Zip
        {
            get
            {
                return _Zip;
            }
        }

        public string City
        {
            get
            {
                return _City;
            }
        }

        public string Country
        {
            get
            {
                return _Country;
            }
        }

        public string Tel
        {
            get
            {
                return _Tel;
            }
        }

        public string GSM
        {
            get
            {
                return _GSM;
            }
        }

        public string OIB
        {
            get
            {
                return _OIB;
            }
        }

        public string MB
        {
            get
            {
                return _MB;
            }
        }

        public string IBAN
        {
            get
            {
                return _IBAN;
            }
        }



        public string Link1
        {
            get
            {
                return _Link1;
            }
        }

        public string Link1Title
        {
            get
            {
                return _Link1Title;
            }
        }

        public string Link2
        {
            get
            {
                return _Link2;
            }
        }

        public string Link2Title
        {
            get
            {
                return _Link2Title;
            }
        }

        public string Link3
        {
            get
            {
                return _Link3;
            }
        }

        public string Link3Title
        {
            get
            {
                return _Link3Title;
            }
        }

        public string Link4
        {
            get
            {
                return _Link4;
            }
        }

        public string Link4Title
        {
            get
            {
                return _Link4Title;
            }
        }

        public string Link5
        {
            get
            {
                return _Link5;
            }
        }

        public string Link5Title
        {
            get
            {
                return _Link5Title;
            }
        }

        public string Link6
        {
            get
            {
                return _Link6;
            }
        }

        public string Link6Title
        {
            get
            {
                return _Link6Title;
            }
        }

        public string MyEmail
        {
            get
            {
                return _MyEmail;
            }
        }

        public string MyPassword
        {
            get
            {
                return _MyPassword;
            }
        }

        public int MyServerPort
        {
            get
            {
                return _MyServerPort;
            }
        }

        public string MyServerHost
        {
            get
            {
                return _MyServerHost;
            }
        }




        public string Message
        {
            get
            {
                return _Message;
            }
            set
            {
                _Message = value;
            }
        }









        public string test { get; set; }
    }


}