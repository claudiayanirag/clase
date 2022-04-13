//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=100; scoreInc=100; scoreDec=10;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FEE8FF"; colorButton="#402BFF"; colorText="#000000"; colorSele="#4EED52";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Lucida Console', Monaco, monospace";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excellent! Good job!! 👑"; messageTime="Game over 👾"; messageError="Oh no... Try again! 🔄"; messageErrorG="Oh no... Try again! 🔄"; messageAttempts="Game over  👾"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="c2Nob29sX3Rvb2xz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Uw==","","","","","","","","","","","","","",""],["Qw==","Ug==","QQ==","WQ==","Tw==","Tg==","","UA==","RQ==","Tg==","Qw==","SQ==","TA==","",""],["SA==","","","","","","","","Qg==","Tw==","QQ==","Ug==","RA==","",""],["Tw==","","","","","RA==","","","","VA==","","","","",""],["Tw==","","","","","RQ==","Ug==","QQ==","Uw==","RQ==","Ug==","","","",""],["TA==","","","","","Uw==","","","","Qg==","","","","",""],["Qg==","","Qg==","Tw==","Tw==","Sw==","","","","Tw==","","","","",""],["QQ==","","","","","","","","","Tw==","","","","",""],["Rw==","TA==","VQ==","RQ==","Og==","Uw==","VA==","SQ==","Qw==","Sw==","","","","",""],["","","","","","Qw==","","","","","","","","",""],["","","","","","SQ==","","","","","","","UA==","",""],["","","","","","Uw==","SA==","QQ==","Ug==","UA==","RQ==","Tg==","RQ==","Ug==",""],["","","","","","Uw==","","","","","","","Tg==","",""],["","","","","","Tw==","","","","","","","","",""],["","","","","","Ug==","VQ==","TA==","RQ==","","","","","",""]];
var x1=[1,8,9,6,3,1,6,6,1,9,10,11,12,13,6,6,13,6];
var y1=[2,2,3,5,7,9,9,12,1,2,2,2,2,2,4,9,11,15];
var x2=[6,13,13,11,6,4,10,14,1,9,10,11,12,13,6,6,13,9];
var y2=[2,2,3,5,7,9,9,12,9,3,9,3,3,3,7,15,13,15];
var imaCW=["school_tools_resources/media/13274fcf01f3174ffc8ae3a5047f2ea1.jpg","school_tools_resources/media/lapiz-ii-colegio-pintado-por-tinita27-9772140.jpg","school_tools_resources/media/6488933f559a078f89662894ac485671.jpg","school_tools_resources/media/eraser-cartoon-object-vector.jpg","school_tools_resources/media/depositphotos_14677943-stock-photo-text-book-cartoon-character.jpg","school_tools_resources/media/WhatsApp Image 2022-04-11 at 2.05.11 PM.jpeg","","school_tools_resources/media/WhatsApp Image 2022-04-12 at 6.13.59 PM.jpeg","school_tools_resources/media/WhatsApp Image 2022-04-11 at 1.14.24 PM.jpeg","","school_tools_resources/media/WhatsApp Image 2022-04-11 at 1.14.25 PM.jpeg","","","","school_tools_resources/media/WhatsApp Image 2022-04-11 at 1.14.24 PM (1).jpeg","school_tools_resources/media/WhatsApp Image 2022-04-11 at 1.14.07 PM.jpeg","school_tools_resources/media/WhatsApp Image 2022-04-11 at 1.14.25 PM (2).jpeg","school_tools_resources/media/WhatsApp Image 2022-04-11 at 1.14.23 PM (2).jpeg"];
var audioCW=["","","","","","","","","","","","","","","","","",""];
var defCW=["","","","","","","","","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
