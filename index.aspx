<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="Index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="hr" xml:lang="hr">
<head runat="server">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <meta name="Keywords" content="Ig Prog, programiranje, web dizajn, web aplikacije, desktop aplikacije, izrada računalnih programa, izrada internet stranica, igor gašparović, program prehrane"> -->
    <meta name="Description" content="Povoljna izrada moderno dizajniranih web stranica, aplikacija i računalnih programa">
    <meta name="author" content="IG PROG, Igor Gašparović">
    <meta name="robots" content="index, follow">
    <title>IG PROG, Web aplikacije | programska rješenja</title>
    
    <link href="css/style.css" rel="stylesheet">
    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/the-big-picture.css" rel="stylesheet">
    <link href="css/font-icon.css" rel="stylesheet" type="text/css" />
    <link href="css/jquery.fancybox.css" rel="stylesheet" type="text/css" />
    <link href="css/flexslider.css" rel="stylesheet" type="text/css" />
    <link href="css/main.css" rel="stylesheet" type="text/css" />
    <link href="css/responsive.css" rel="stylesheet" type="text/css" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" />
    <!-- ============ Google fonts ============ -->
    <link href='http://fonts.googleapis.com/css?family=EB+Garamond' rel='stylesheet'
        type='text/css' />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,300,800'
        rel='stylesheet' type='text/css' />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->


</head>
<body id="hme">
    <form id="form1" runat="server">
    <div id="custom-bootstrap-menu" class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
            <%-- <a class="navbar-brand" href="Index.aspx">
            <img src="img/logo.png" alt="logo" height=30 />
             </a>--%>
                <a class="navbar-brand" href="Index.aspx">
                <span>
                 <img src="img/logo_sm.png" alt="logo_sm" height=30 />
                IG PROG
                </span>
                 <span style="font-size:8px" class="text-muted hidden-xs">obrt za računalno programiranje</span></a>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-menubuilder">
                    <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span
                        class="icon-bar"></span><span class="icon-bar"></span>
                </button>
               
            </div>
            <div class="collapse navbar-collapse navbar-menubuilder">
                <ul class="nav navbar-nav navbar-right">
                    <li><a class="page-scroll" href="#hme">Naslovna</a> </li>
                    <li><a class="page-scroll" href="#services">Usluge</a> </li>
                    <li><a class="page-scroll" href="#framework">Tehnologija</a> </li>
                    <%--<li><a class="page-scroll" href="#price">Cijene</a> </li>--%>
                    <li><a class="page-scroll" href="#applications">Aplikacije</a> </li>
                    <li><a class="page-scroll" href="#contactInfo">Kontakt</a> </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Login -->
    <!-- Start Carousel Main Slider -->
    <section class="carousel carousel-fade slide home-slider" id="fullslider" data-ride="carousel"
        data-interval="5500" data-pause="false"> 
    <!-- Carousel-Indicators -->
	<ol class="carousel-indicators"> 
		<li data-target="#fullslider" data-slide-to="0" class="active"></li>
		<li data-target="#fullslider" data-slide-to="1" class=""></li>		
        <li data-target="#fullslider" data-slide-to="2" class=""></li>		
        <li data-target="#fullslider" data-slide-to="3" class=""></li>	    	
	</ol>
    <!-- Carousel-Inner -->
	<div class="carousel-inner"> 
		<div class="item active bg1">
         <div class="banner-overlay">
         <!-- Slide - 1 -->
             <div class="container">
                 <div class="row">
                     <div class="col-md-6 col-sm-8 col-xs-12 animated notranstion">
                         <br class="hidden-sm hidden-xs" />
                         <div class="wow" data-wow-duration="1500ms" data-wow-delay="100ms">
                             <h1 class="carouselText1 text-left wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="150ms">
                                 Web aplikacije i računalni programi</h1>
                             <br />
                         </div>
                     </div>
                     <div class="col-md-6 col-sm-4 animated">
                         <img src="img/slider/slide1-1.png" alt="" class="slide1-1 wow  fadeInRight" />
                         <div class="text-left buttonleft" style="padding-left: 5%">
                             <a href="" data-toggle="modal" data-target="#queryForm" class="btn btn-lg btn-borderwhite wow fadeInUp"
                                 data-wow-duration="1500ms" data-wow-delay="1200ms">Naručite izradu vlastite aplikacije</a>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </div> <!-- End Slide - 1 -->
		<div class="item bg2">
          <div class="banner-overlay">
         <!-- Slide - 2 -->
			<div class="container">
				<div class="row">
					<%--<div class="col-md-6 col-sm-4 animated hidden-xs">                                      
						<img src="img/slider/slide1-1.png" alt="" class="slide1-2 wow fadeInLeft img-responsive"/>
					</div>--%>
					<div class="col-md-6 col-sm-8 col-xs-12 animated text-right">	
                         <br class="hidden-sm hidden-xs" />					
					    <h3 class="carouselText2 wow fadeInDown" data-wow-duration="600ms" data-wow-delay="100ms">
                         Povoljne cijene
                        </h3>
                    	<br />
						<div class="car-highlight1 wow fadeInUp text-left" data-wow-duration="300ms" data-wow-delay="0ms">
						 Kvalitetna izrada
						</div>
						<br/>
						<div class="car-highlight2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="150ms">
						 Najnovije tehnologije
						</div>
						<br/>
						<div class="car-highlight3 wow fadeInUp" data-wow-duration="1800ms" data-wow-delay="300ms">
						 Dizajn prilagođen svim zaslonima
						</div>                   
					</div>
				</div>
			</div>
            </div>
		</div> <!-- End Slide - 2 -->
		<div class="item bg3">
          <div class="banner-overlay">
         <!-- Slide - 3 -->
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center animated">      
                    <h1 class="carouselText1 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="150ms">Web aplikacija za vođenje evidencije rada teretane</h1>
                       <br />
                        <ul class="list-unstyled car-mediumtext">
                            <li class="wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="500ms"><i
                                class="fa fa-check-square wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="100ms">
                            </i>Evidencija dolazaka </li>
                            <li class="wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="1500ms"><i
                                class="fa fa-check-square wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="100ms">
                            </i>Evidncija članova </li>
                            <li class="wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="2500ms"><i
                                class="fa fa-check-square wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="100ms">
                            </i>Kalendar </li>
                            <li class="wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="3500ms"><i
                                class="fa fa-check-square wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="100ms">
                            </i>Custom rješenje </li>
                        </ul>
                        <div class="text-center buttonleft">
                           <a href="" data-toggle="modal" data-target="#queryForm" class="btn btn-lg btn-borderwhite wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1200ms">Pošaljite upit</a> 
                        </div>  
					</div>					
				</div>
			</div>
            </div>
		</div> <!-- End Slide - 3 -->
       <div class="item bg4"> <!-- Slide - 4 -->
         <div class="banner-overlay">
          <div class="container">
				<div class="row">
                    <div class="col-md-6 col-sm-4 animated hidden-xs">                                      
						<img src="img/slider/slide1-5.png" alt="" class="slide1-2 wow fadeInLeft img-responsive"/>
					</div>
                    <div class="col-md-6 col-sm-8 col-xs-12 animated">					
						<div class="wow" data-wow-duration="1500ms" data-wow-delay="100ms">
                         <br />
							<h1 class="carouselText1 col-gapall wow zoomIn" data-wow-duration="1500ms" data-wow-delay="500ms">Program Prehrane 5.0 </h1>
							<br />
                            <p class="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="200ms">
                             Računalni program
                          </p>
                            <ul class="list-unstyled car-mediumtext">
                            <li class="wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="100ms"><i class="fa fa-check-square wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="100ms"></i>
                            Izrada uravnoteženih jelovnika
                            </li>
                            <li class="wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="500ms"><i class="fa fa-check-square wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="100ms"></i>
                             Izrada plana tjelesne aktivnost
                            </li>
                            <li class="wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="1000ms"><i class="fa fa-check-square wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="100ms"></i>
                             Pračenje antropometrijskih parametara
                            </li>
                            </ul> 
                            <br/>
                           <div class="text-right buttonleft">
                           <a href="http://www.programprehrane.com" target="_blank" class="btn btn-lg btn-borderwhite wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1200ms">Saznajte više</a> 
                           </div>                      
						</div>						
					</div>		
                </div>
           </div>
           </div>
        </div> <!-- End Slide - 4 -->		 
	</div>
	<!-- End Carousel-Inner -->
    <!-- Carousel - Control -->
	<a class="left carousel-control animated fadeInLeft" href="#fullslider" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
	<a class="right carousel-control animated fadeInRight" href="#fullslider" data-slide="next"><i class="fa fa-chevron-right"></i></a>	
    </section>
    <!--  End Carousel Main Slider  -->
    <!-- services section -->
    <section id="services" style="padding-top:30px">
            <h2 style="text-align: center">
                Usluge</h2>
            <div class="row">
                <div class="col-sm-12 services">
                    <div class="services-content">
                        <h5>
                            IZRADA WEB APLIKACIJA I RAČUNALNIH PROGRAMA</h5>
                        <p>
                            Web i desktop aplikacije su programska riješenja koja služe za automatizaciju i
                            unaprijeđenje različitih poslovnih procesa.
                        </p>
                        <p>
                            Web aplikacije su posljednjih godina, zbog napretka internet tehnologije i razvoja
                            novih programskih jezika sve više zastupljene i polako potiskuju računalne programe.
                            Prednosti web aplikacije je i tome što su podaci u svakom trenutku ažurni, dostupni
                            s bilo koje lokacije u bilo kojem trenutku neovisno s kojeg uređaja ih pregledavate,
                            a dovoljan vam je samo pristup internetu. Istovremeno je može koristiti veći broj
                            korisnika, a za njenu upotrebu su potrebna samo osnovna znanja u korištenju računala
                            i interneta.
                        </p>
                        <p>
                            Korištenjem web aplikacije poslovanje postaje učinkovitije, sigurnije, a što je
                            najvažnije drastično smanjuje troškove i vrijeme potrebno za obradu podataka i realizaciju
                            poslovnih procesa.
                        </p>
                        <p>
                            Ukoliko postoji potreba za izradom aplikacije za čiji rad nije potrebna veza sa
                            na internetom onda je računalni program bolje rješenje.
                        </p>
                        <p>
                            Za više informacija ili narudžbu za izradi web aplikacije <span><a href="" data-toggle="modal"
                                data-target="#queryForm">pošaljite upit</a> </span>i odgovorit ćemo Vam u najkraćem
                            mogućem roku.
                        </p>
                    </div>
                </div>
            </div>
    </section>
   
    <!-- services section -->
    <!-- about section -->
    <section id="framework" style="padding-top:30px" >

     <h2 style="text-align: center">
                Tehnologija</h2>
            <div class="row">
                <div class="col-sm-12 services">
                    <div class="services-content">
                        <h5>
                            TEHNOLOGIJA I DIZAJN</h5>
                        <p>
                            Za izradu web aplikacija koriste se najnovije tehnologije. Dizajn je moderan i responzivan,
                            što znači da se izgled stranice automatski prilagođava veličini svakog zaslona (laptop,
                            tablet, mobitel...).
                        </p>
                    </div>
                </div>
            </div>

  <div class="container-fluid intro no-padding">
    <div class="row no-gutter">
      <div class="flexslider">
        <ul class="slides">
          <li>
            <div class="col-md-6">
              <div class="avatar"> <img src="img/intro-img1.jpg" alt="" class="img-responsive"> </div>
            </div>
            <div class="col-md-6">
              <blockquote>
                <h4>Framework i programski jezici:</h4>
                <h3>ASP NET, AngularJS, C#, VB, MSSQL, SQLite, Java Script, jQuery, HTML5, CSS3, Bootstrap, AngularMaterial, ...</h3>
              </blockquote>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



<!--Aplikacije-->
<div id="applications" class="container lead" style="padding-top:30px">
<h2 style="text-align:center">Aplikacije</h2>
  <div class="row">
    <div class="col-sm-6">
    <div class="border">
      <h3>Program Prehrane 5.0</h3>
      <p>Računalni program za izradu uravnoteženih jelovnika i plana tjelesne aktivnosti</p>
      <a href="http://www.programprehrane.com">www.programprehrane.com</a>
      </div>
    </div>
    <div class="col-sm-6">
    <div class="border">
      <h3>Program Prehrane Online</h3>
      <p>Web aplikacija za izradu jelovnika</p>
      <a href="http://www.programprehrane.com/aplikacija">www.programprehrane.com/aplikacija</a>
      </div>
    </div>
    <div class="col-sm-6">
    <div class="border">
      <h3>Energetski pregled</h3>        
      <p>Web aplikacija za prikupljanje podataka u svrhu izrade energetskih certifikat i vođenje evidencije.</p>
    </div>
    </div>
    <div class="col-sm-6">
    <div class="border">
      <h3>Evidencija teretane</h3>        
      <p>Web aplikacija za vođenje evidencije o članovima, dolascima i kupljenim uslugama.</p>
    </div>
    </div>
  </div>
</div>
<!--End Aplikacije-->

    <!--Contact Info -->
<div id="contactInfo" class="container lead" style="padding-top: 30px">
<h2 style="text-align:center">Kontakt</h2>
                    <div class="person" style="margin: 0 auto; width:80%">
                    <%-- <img src="img/team-1.jpg" alt="" class="img-responsive img-contact">--%>
                        <div class="person-content">
                            <h4>IG PROG, obrt za računalno programiranje</h4>
                             <p>vl. Igor Gašparović</p>
                            <p>Ludvetov breg 5, HR-51000 Rijeka</p>
                            <h5 class="role">
                                ++ 385 98 330 966</h5>
                                <p>igprog@yahoo.com</p>
                                <a href="#" data-toggle="modal" data-target="#queryForm" class="btn btn-success btn-lg"><i class="fa fa-send-o" aria-hidden="true"></i>Pošaljite upit</a>
                        </div>
                    </div>
</div>
    <!--End Contact Info -->

     <!-- Modal -->
  <div class="modal fade" id="queryForm" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Forma za upit</h4>
        </div>
        <div class="modal-body">
         
     <asp:literal id="litMessage" runat="server"></asp:literal>

 <div id="divContactForm" runat="server">
    <div>
    <p>Pošaljite upit i odgovorit ćemo Vam u najkraćem mogućem roku.</p>
    </div>
         
          <div class="form-group">
              <asp:TextBox ID="txtIme" cssClass="form-control border-blue" placeholder="ime i prezime" runat="server"></asp:TextBox>
          </div>
          <asp:requiredfieldvalidator ID="Requiredfieldvalidator1" runat="server" 
                  errormessage="Ime i prezime su obavezni" ControlToValidate="txtIme" ForeColor="Red"></asp:requiredfieldvalidator>
          <div class="form-group">
              <asp:TextBox ID="txtEmail" cssClass="form-control border-blue" placeholder="e-mail" runat="server"></asp:TextBox>
          </div>
              <asp:requiredfieldvalidator ID="Requiredfieldvalidator2" runat="server" 
                  errormessage="E-mail je obavezan" ControlToValidate="txtEmail" ForeColor="Red"></asp:requiredfieldvalidator>
          <div class="form-group">
          <asp:TextBox ID="txtPhone" cssClass="form-control border-blue" placeholder="kontakt telefon" runat="server"></asp:TextBox>
          </div>
          <div class="form-group">
          <asp:CheckBoxList ID="cblServices" runat="server" CssClass="formControl" RepeatLayout="Flow"
                            RepeatDirection="Vertical">
                <asp:ListItem>Izrada web stranice za apartmane</asp:ListItem>
                <asp:ListItem>Izrada web stranice za tvrtku ili obrt</asp:ListItem>
                <asp:ListItem>Izrada web aplikacije ili računalnog programa</asp:ListItem>
                <asp:ListItem>Drugo</asp:ListItem>
          </asp:CheckBoxList>
          </div>
          <div class="form-group">
              <asp:TextBox ID="txtPoruka" cssClass="form-control border-blue" placeholder="poruka"  runat="server" Rows="4" TextMode="MultiLine"></asp:TextBox>
          </div>
             <asp:requiredfieldvalidator ID="Requiredfieldvalidator3" runat="server" 
                  errormessage="Upiši poruku" ControlToValidate="txtPoruka" ForeColor="Red"></asp:requiredfieldvalidator>
          <div>
          <asp:Button ID="btnPosalji" cssClass="btn btn-success" runat="server" Text="Pošalji" 
                          onclick="btnPosalji_Click" />
          </div>
      
    </div>

        </div>
       <%-- <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Zatvori</button>
        </div>--%>
      </div>
      
    </div>
  </div>



    <!-- Footer section -->
    <footer class="footer">
  <div class="footer-top section-tb">
    <div class="container">
      <div class="row">
        <div class="footer-col col-md-3">
          <h5>Info</h5>
          <p>IG PROG, obrt za računalno programiranje<br>
            vl. Igor Gašparović<br>
            Ludvetov breg 5, HR-51000 Rijeka<br>
            OIB 58331314923; MB 97370371<br>
            IBAN HR8423400091160342496<br><br>
            </p>
          <%--<p><a href="http://www.igprog.hr">Copyright © 2017 IG PROG</a></p>--%>
        </div>
         <div class="footer-col col-md-3">
          <h5>Kontakt</h5>
          <p>
          +385 98 330 966<br>
            igprog@yahoo.com<br>
            <a href="http://www.igprog.hr">www.igprog.hr</a>
          </p>
        </div>
        <div class="footer-col col-md-3">
          <h5>Usluge</h5>
          <ul>
            <li><a href="#">Web stranice</a></li>
            <li><a href="#">Web aplikacije</a></li>
            <li><a href="#">Računalni programi</a></li>
          </ul>
        </div>
        <div class="footer-col col-md-3">
          <h5>Linkovi</h5>
          <ul>
            <li><a href="http://www.programprehrane.com" target="_blank">Program Prehrane</a></li>
            <li><a href="http://www.app.programprehrane.com" target="_blank">Program Prehane App</a></li>
            <li><a href="http://www.app.spartacus.hr" target="_blank">Teretana Spartacus</a></li>
            <li><a href="http://www.jdp-certifikati.hr" target="_blank">JDP Certifikati</a></li>
            <!--<li><a href="http://www.hrs.igprog.hr" target="_blank">HRS</a></li>-->
            <li><a href="http://www.apartmentselvira.com" target="_blank">Apartments Elvira</a></li>
            <li><a href="http://www.villamilibrela.com" target="_blank">Villa Mili</a></li>
          </ul>
        </div>
        
      
      </div>
      <div class="text-right">
      <p><a href="http://www.igprog.hr">Copyright © 2017 IG PROG</a></p>
      </div>
    </div>
  </div>
  <!-- footer top --> 
  
</footer>


<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47317436-1', 'auto');
  ga('send', 'pageview');

</script>


<script type="text/javascript">
    function service(x) {
    //TODO
        //  $('#<%=cblServices.ClientID%>').val('');
        //$(this).attr('checked','checked');
        //$('.myCheckbox')[0].checked = true;
       // $('#<%=cblServices.ClientID%>')[2].attr('checked','checked');
      //  alert(x);
    }
</script>


    <!-- Footer section -->
    <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/jquery.easing.min.js" type="text/javascript"></script>
    <script src="js/jquery.flexslider-min.js"></script>
    <script src="js/jquery.fancybox.pack.js"></script>
    <script src="js/wow.js" type="text/javascript"></script>
    <script src="js/retina.min.js"></script>
    <script src="js/modernizr.js"></script>
    <script src="js/main.js"></script>
    <script type="text/javascript">
        //WOW Scroll Spy
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });
        wow.init();
    </script>
    </form>
</body>
</html>
