<!-- Automatically generated by bin/oefdoc.pl -->
var specialname= 'M�thodes sp�ciales<br>(�nonc�)';
var special= [ '\\embed{r  }', '\\special{expandlines }', '\\special{imagefill }', '\\special{help }', '\\special{tabs2lines }', '\\special{rename }', '\\special{tooltip }', '\\special{codeinput }', '\\special{imageinput }', '\\special{mathmlinput }'];
function specialfun(instruction){
    switch(instruction)
	{
	case '\\embed{r  }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\embed{r i, option }</code></div>'+
'<div class="explication"><div class="title">Explication</div>Il est possible d\'inclure des champs de r�ponse dans l\'�nonc� des exercices \nsous format html par la commande <span class="tt wims_code_words">embed</span>. Les r�ponses et choix doivent �tre d�finis de fa�on \nhabituelle. Des conditions particuli�res sont indiqu�es dans la documentation des types de r�ponses.  \n \n<p> \n \n</div>'+
'<div class="exemple"><div class="title">Exemple</div><h3>Insertion des champs de r�ponse dans le texte de l\'�nonc�</h3> \n \n<ul> \n <li><span class="tt wims_code_words">&#92;embed{choice 1}</span> ins�rer le premier <i>choix multiple</i> dans le texte.</li> \n <li><span class="tt wims_code_words">&#92;embed{reply 2}</span> ins�rer la deuxi�me <i>r�ponse libre</i> \ndans le texte.</li> \n <li><span class="tt wims_code_words">&#92;embed{reply 1,5}</span> peut avoir plusieurs significations  \nsuivant le type de r�ponse. En g�n�ral, cela signifie : \nins�rer la premi�re <i>r�ponse libre </i> avec la \ntaille du champ de r�ponse �gale � 5. \nPar contre, si le type de <span class="tt wims_code_words">reply 1</span> est parmi <span class="tt wims_code_words">checkbox</span>, \n<span class="tt wims_code_words">click</span>, <span class="tt wims_code_words">radio</span>, <span class="tt wims_code_words">&#92;embed{reply 1,5}</span> \nins�re seulement l\'un des choix (le num�ro 5 dans ce cas) dans le format correspondant \nau type. Cela permet l\'insertion de choix dans diff�rentes structures de texte \n(en liste, dans un tableau, ...).  \n</li> \n <li><span class="tt wims_code_words">&#92;embed{reply 1,AxBxC}</span> peut avoir plusieurs significations \nselon le type :  \n <ul> \n  <li>dans le cas o� le type est <span class="tt wims_code_words">clickfill</span> ou <span class="tt wims_code_words">dragfill</span>,  \nA et B sont les tailles horizontale et verticale (en pixels) d\'une case,  \net C est le nombre de cases que contient le champ de r�ponses. \n  </li><li> dans le cas o� le type est <span class="tt wims_code_words">correspond</span>, \nA est la taille verticale des items,   \nB et C sont respectivement la taille horizontale des colonnes de  \ngauche et de droite. \n  </li><li> \n  Dans le cas de r�ponses de type texte libre, d\'autres lignes peuvent �tre ajout�es \n  permettant de personnaliser le style du champ de r�ponses. De plus, si la premi�re ligne suppl�mentaire  \n  est le mot <span class="tt wims_code_words">default</span>, le champ aura la classe \n de style css <span class="tt wims_code_words">wims_oef_input</span> : le gestionnaire du site ou l\'enseignant peuvent alors \n le configurer de mani�re g�n�rale. Par exemple, \n  pour le type <span class="tt wims_code_words">numeric</span>, \n<pre> \n  &#92;embed{reply 1,12 \n  style="font-size:18px;background-color:#e8ffff;border:1px solid #3333CC;" \n  autocomplete=off } \n </pre> \n </li></ul> \n</ul> \n  \n   \n   \n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{expandlines }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\special{expandlines }</code></div>'+
'<div class="explication"><div class="title">Explication</div><p>Ecrit le param�tre dans un style <span class="tt">pre</span> sans �valuation. \n</p> \n</div>'+
'<div class="exemple"><div class="title">Exemple</div><span class="wims_help_example">Exemple:</span> \n<p> \n<textarea id="wims_show1" cols="100" rows="5" name="wims_show1" readonly="readonly"> \n&#92;text{texte= \nfor a in &#92;B \n   a = a + 1 \nendfor \n} \n&#92;statement{ &#92;special{expandlines &#92;texte}} \n</textarea> \n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{imagefill }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\special{imagefill }</code></div>'+
'<div class="explication"><div class="title">Explication</div> Met les champs des types de r�ponses  <span class="tt wims_code_words">dragfill</span> ou <span class="tt wims_code_words">clickfill</span> dans une grande image. \n Doit �tre utilis� dans le <span class="tt wims_code_words">statement</span> d\'un exercice OEF. \n <p>Avec l\'option <span class="tt wims_code_words">transparent</span> dans le type de r�ponse, \n le champ � remplir est transparent et ne cache pas l\'image. \n </p> \n</div>'+
'<div class="exemple"><div class="title">Exemple</div> <span class="wims_help_example">Exemple</span> \n \n<div> \n<textarea id="wims_show3" cols="100" rows="5" name="wims_show1" readonly="readonly"> \n&#92;special{imagefill &#92;imagedir/myphoto.jpg,450x350,40x40 \nreply 1,120x250 \nreply 3,300x50 \nreply 4,10x15 \n} \n</textarea> \n</div><p> \n Dans cet exemple, on affiche une grande image (<span class="tt wims_fname">&#92;imagedir/myphoto.jpg</span>) dans l\'�nonc� \n de type 450x350, avec 3 champs de r�ponse de type drag-and-drop de type 40x40. Les trois champs sont \n respectivement les r�ponses 1, 3 et 4 (qui doivent �tre de type <span class="tt wims_code_words">clickfill</span> ou \n <span class="tt wims_code_words">dragfill</span>), aux positions respectives 120x250, 300x50, 10x15 dans la grande image. \n \n </p><p> \n La grande image sera redimensionn�e � la taille sp�cifi�e. \n </p> \n <p> Il est possible d\'avoir des r�ponses multiples. \n Ajouter un troisi�me param�tre entier � la taille : \n <span class="tt wims_code_words">reply1,120x250x4</span> montrera un champ de longueur 4 ( x 120). \n </p> \n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{help }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\special{help }</code></div>'+
'<div class="explication"><div class="title">Explication</div><p> \nLa m�thode sp�ciale <span class="tt wims_code_words">help</span> accepte deux param�tres. Le premier est un identificateur \n qui sera dans la variable <span class="tt wims_code_variable">&#92;help_subject</span>  \n � l\'int�rieur de la commande <span class="tt wims_code_words">&#92;help</span> \n et le second est le texte du lien. \nLa classe css du lien est <span class="tt wims_code_words">oef_specialhelp</span> et peut �tre configur�e. \n \nSi <span class="tt wims_code_words">&#92;special{help}</span> est mis dans l\'�nonc� ou le feedback d\'un exercice,  \n l\'aide sera de type popup, contrairement � l\'aide usuelle. \n \nTout le contenu de l\'aide doit �tre mis dans le source de l\'exercice oef.  \nAucune facilit� n\'est pr�vue pour l\'aide au niveau du module, car le principe \nest que l\'ind�pendance des fichiers oef n e doit pas �tre d�truit par les aides. \nCependant, si vous avez plusieurs exercices partageant les m�mes textes d\'aide \nvous pouvez utiliser cpp. \n</p> \n</div>'+
'<div class="exemple"><div class="title">Exemple</div> <span class="wims_help_example">Exemple</span> \n <p> \n<textarea id="wims_show2" cols="100" rows="15" name="wims_show1" readonly="readonly"> \n &#92;title{Deviner} \n &#92;statement{ Deviner un mot :   \n   &#92;special{help test1,Premier indice} \n } \n &#92;answer{1}{Singe} \n &#92;help{ \n   Voici l\'aide: help subject=&#92;help_subject \n   <p> \n   &#92;if{&#92;help_subject issametext or &#92;help_subject issametext none}{ \n     &#92;special{help test0,ici} \n   } \n   &#92;if{&#92;help_subject issametext test1}{ \n     La premi�re lettre est <b>S</b>. Vous pouvez trouver un nouvel indice \n     &#92;special{help test2,ici} \n   } \n  &#92;if{&#92;help_subject issametext test2}{Voici le second indice.  \n    La deuxi�me lettre est <b>i</b> \n   } \n  &#92;if{&#92;help_subject issametext test0}{Voici \n    &#92;special{help test1,l\'aide 1}, &#92;special{help test2,l\'aide 2} \n   } \n } \n </textarea> \n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{tabs2lines }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\special{tabs2lines }</code></div>'+
'<div class="explication"><div class="title">Explication</div><p> \nConvertit les tabulations en un passage � la ligne. \n<p></p> \n</div>'+
'<div class="exemple"><div class="title">Exemple</div><span class="wims_help_example">Exemple</span> \n \n<p> \n<textarea id="wims_show4" cols="100" rows="3" name="wims_show1" readonly="readonly"> \n&#92;statement{  \n  &#92;special{tabs2lines &#92;texte	&#92;texte} \n} \n</textarea> \n</p> \n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{rename }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\special{rename }</code></div>'+
'<div class="explication"><div class="title">Explication</div> \nRenomme un fichier (image essentiellement).\n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{tooltip }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\special{tooltip }</code></div>'+
'<div class="explication"><div class="title">Explication</div><script type="text/javascript" src="scripts/js/wz_tooltip.js"></script> \ncr�e une aide popup (tooltip) : le premier param�tre est le texte du lien, \nle troisi�me param�tre est le texte apparaissant dans l\'aide popup.  \nLe second param�tre est l\'option entre crochets :  \nentre les crochets, vous pouvez mettre l\'option comme dans la documentation de wz_tooltip.js.  \nPar d�faut : <span class="tt wims_code_words">[FONTSIZE, \'12pt\', ABOVE, \'true\']</span> \nSi vous voulez ne charger qu\'une seule fois le javascript (une fois est suffisant pour une page \nhtml), ne mettez aucun param�tre. Si vous ne voulez pas charger le javascript \ncar il a �t� d�j� charg� dans la page html, ajoutez <span class="tt wims_code_words">nojs</span> \nau second param�tre. \n \nLa classe css du lien est <span class="tt">span.tooltip</span>. \n \n</div>'+
'<div class="exemple"><div class="title">Exemple</div><span class="wims_help_example">Exemple</span> \n \n<pre> \n&#92;special{tooltip passer la souris ici, ,le mot a 5 lettres} \n&#92;special{tooltip passer la souris ici,[DURATION, 4000, FONTSIZE, \'18pt\'], le mot a 5 lettres} \n&#92;special{tooltip passer la souris ici,[TITLE, \'Some Title\', PADDING, 9],un texte} \n&#92;special{tooltip } \n&#92;special{tooltip passer la souris ici,nojs [TITLE, \'Some Title\', PADDING, 9],un texte} \n</pre> \n \n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{codeinput }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\special{codeinput }</code></div>'+
'<div class="explication"><div class="title">Explication</div> Met les champs des types de r�ponses de type texte dans un texte en gardant sa pr�sentation \n (espaces, retours � la ligne, ...). Cela est utile si l\'on d�sire faire remplir des trous \n dans un code de programmation. \n Doit �tre utilis� dans le <span class="tt wims_code_words">statement</span> d\'un exercice OEF. \n \n<p> \nLa premi�re ligne est form�e du texte du code mis entre crochets, suivi de la taille g�n�rique des \n champs de r�ponse (obligatoire). \n Les lignes suivantes sont form�es des r�ponses ins�r�es suivies si n�cessaires de la taille de \n cette r�ponse si elle est diff�rente de la taille g�n�rique. \n Les endroits d\'insertion de la r�ponse sont marqu�s par le mot reply<span class="tt">n</span>. \n</p> \n</div>'+
'<div class="exemple"><div class="title">Exemple</div> <span class="wims_help_example">Exemple</span> \n<div> \n<textarea id="wims_show3" cols="100" rows="5" name="wims_show1" readonly="readonly"> \n&#92;special{codeinput [texte], 5 \nreply1,2x8 \nreply3 \nreply4,1x10 \n} \n</textarea> \n</div> \n Dans cet exemple, on affiche le code dans l\'�nonc� avec 3 champs de r�ponse. Les trois champs sont \n respectivement les r�ponses 1, 3 et 4 (qui peuvent �tre toute r�ponse faisant intervenir \n un champ de texte comme <span class="tt wims_code_words">numeric</span>, <span class="tt wims_code_words">case</span> \n <span class="tt wims_code_words">formal</span>, etc.) \n \n Il est possible de rajouter un mot d\'option, pour l\'instant uniquement \n  <span class="tt wims_code_words">div</span>. Dans ce cas, le texte ne sera pas affich� dans un \n  style <span class="tt wims_code_words">pre</span> \n \nAttention : il peut y avoir un bogue pour l\'instant dans le cas o� un autre \nchamp de r�ponses se trouve sur la page (num�rotation dans l\'analyse) \nque l\'on esp�re corriger. \n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{imageinput }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\special{imageinput }</code></div>'+
'<div class="explication"><div class="title">Explication</div> Met des champs de types de r�ponses texte sur une image. \n Doit �tre utilis� dans le <span class="tt wims_code_words">statement</span> d\'un exercice OEF. \n \n<p> \nLa premi�re ligne est form�e de l\'adresse de l\'image, suivie de la taille g�n�rique des \n champs de r�ponse (obligatoire). \n Les lignes suivantes sont de la forme \n </p> \n <pre> \n reply <span class="tt">n</span>, p_X x p_Y,size, defaut, css \n </pre> \n o� <span class="tt">p_X</span> et <span class="tt">p_Y</span> \n donnent la position en pixels du coin en haut � gauche du champ correspondant, \n <span class="tt">size</span> est la taille du champ (facultatif), \n <span class="tt">defaut</span> est un texte s\'affichant dans le champ \n correspondant (facultatif), <span class="tt">css</span> un code \n css (facultatif). \n</p> \n</div>'+
'<div class="exemple"><div class="title">Exemple</div> <span class="wims_help_example">Exemple</span> \n<div> \n<textarea id="wims_show2" cols="100" rows="8" name="wims_show1" readonly="readonly"> \n&#92;statement{ \n &#92;special{imageinput image_url, 5 \n reply 1,100x100 \n reply 2,150x150 \n } \n} \n&#92;answer{}{x^2}{type=formal} \n&#92;answer{}{2}{type=numeric} \n</textarea> \n</div> \n \nAttention : il peut y avoir un bogue pour l\'instant dans le cas o� un autre \nchamp de r�ponses se trouve sur la page (num�rotation dans l\'analyse) \nque l\'on esp�re corriger. \n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '\\special{mathmlinput }' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>\\special{mathmlinput }</code></div>'+
'<div class="explication"><div class="title">Explication</div> Met des champs de types de r�ponses texte dans une formule math�matique. \n Doit �tre utilis� dans le <span class="tt wims_code_words">statement</span> d\'un exercice OEF. \n \n<p> \nLa premi�re ligne est form�e de la formule mathml mise entre crochets, suivie de la taille g�n�rique des \n champs de r�ponse (obligatoire). \n Les endroits d\'insertion de la r�ponse sont marqu�s dans la formule math�matique \n par le mot reply<span class="tt">n</span>. \n Les lignes suivantes sont de la forme \n <pre> \n reply<span class="tt">n</span>, size, defaut, css \n </pre> \n o� <span class="tt">size</span> est la taille de la r�ponse (facultatif), \n <span class="tt">defaut</span> est un texte s\'affichant dans le champ \n correspondant (facultatif), <span class="tt">css</span> un code \n css (facultatif). \n</p> \n</div>'+
'<div class="exemple"><div class="title">Exemple</div> <span class="wims_help_example">Exemple</span> \n<div> \n<textarea id="wims_show2" cols="100" rows="8" name="wims_show1" readonly="readonly"> \n&#92;statement{ \n &#92;special{mathmlinput [&#92;frac{reply1}{reply2}], 5,noanswer \n reply 1 \n reply 2 \n } \n} \n&#92;answer{}{x^2}{type=formal} \n&#92;answer{}{2}{type=numeric} \n</textarea> \n</div> \n<p> \nDans cet exemple, on affiche une fraction dans l\'�nonc� avec 2 champs de r�ponse, l\'un \npour le num�rateur, l\'autre pour le d�nominateur. \nLes deux champs sont respectivement les r�ponses 1, 2 (qui peuvent �tre toute r�ponse faisant intervenir \n un champ de texte comme <span class="tt wims_code_words">numeric</span>, <span class="tt wims_code_words">case</span> \n <span class="tt wims_code_words">formal</span>, etc.) \nLa taille des champs est de 5 caract�res \n</p><div> \n<textarea id="wims_show3" cols="100" rows="7" name="wims_show1" readonly="readonly"> \n&#92;statement{ \n&#92;special{mathmlinput [&#92;frac{reply1}{reply2}], 4 \nreply 1,10,??,color:blue;font-size:20px \nreply 2} \n} \n&#92;answer{}{x^2}{type=formal} \n&#92;answer{}{2}{type=numeric} \n</textarea> \n</div> \n<p> \nDans cet exemple, la taille du premier champ est de 10 caract�res, il appara�t � l\'int�rieur \ndeux points d\'interrogation de couleur rose et de taille 20 pixels. \n</p> \nLorsqu\'une des r�ponses est fausse, la formule correcte est mise � c�t� de la \nr�ponse donn�e. \n \nLa r�ponse bien format�e est affich�e � cause de la formule dans le texte. \nSi on ne d�sire pas la voir apparaitre, rajouter l\'item <span class="tt wims_code_words">noanswer</span> sur la premi�re ligne, \napr�s la taille g�n�rique. \n \n<div> \n<textarea id="wims_show4" cols="100" rows="7" name="wims_show1" readonly="readonly"> \n&#92;statement{ \n&#92;special{mathmlinput [&#92;frac{reply1}{reply2}], 4,noanswer \nreply 1,10,??,color:blue;font-size:20px \nreply 2} \n} \n&#92;answer{}{x^2}{type=formal} \n&#92;answer{}{2}{type=numeric} \n</textarea> \n</div> \n \nAttention : il peut y avoir un bogue pour l\'instant dans le cas o� un autre \nchamp de r�ponses se trouve sur la page (num�rotation dans l\'analyse) \nque l\'on esp�re corriger. \n</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	
	}
}