<!-- Automatically generated by bin/oefdoc.pl -->
var iffname= 'Relations';
 var iff= [ '  ==  ', '  !=  ', '  <  ', '  <=  ', '  >  ', '  >=  ', '  isin  ', '  notin  ', '  iswordof  ', '  notwordof  ', '  isvarof  ', '  notvarof  ', '  isvariableof  ', '  notvariableof  ', '  isitemof  ', '  notitemof  ', '  islineof  ', '  notlineof  ', '  issamecase  ', '  notsamecase  ', '  issametext  ', '  notsametext  ' ];
function ifffun(instruction){
    switch(instruction)
	{
	case '  ==  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 == string2 <br /> string1 = string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>avec <span class="tt wims_code_words">if</span>: vrai si <span class="tt wims_code_words">string1</span> et <span class="tt wims_code_words">string2</span> sont identiques ; <br /> avec <span class="tt wims_code_words">ifval</span>: vrai si les �valuations num�riques de <span class="tt wims_code_words">string1</span> et de <span class="tt wims_code_words">string2</span> sont �gales.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  !=  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 != string2 <br /> string1 &lt;&gt; string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>avec <span class="tt wims_code_words">if</span>: vrai si <span class="tt wims_code_words">string1</span> et <span class="tt wims_code_words">string2</span> ne sont pas identiques ; <br /> avec <span class="tt wims_code_words">ifval</span>:vrai si les �valuations num�riques de <span class="tt wims_code_words">string1</span> et de <span class="tt wims_code_words">string2</span> ne sont pas �gales ;</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  <  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 < string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si l\'�valuation num�rique de <span class="tt wims_code_words">string1</span> est strictement inf�rieure � celle de <span class="tt wims_code_words">string2</span></div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  <=  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 <= string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si l\'�valuation num�rique de <span class="tt wims_code_words">string1</span> est inf�rieure ou �gale � celle de <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  >  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 > string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si l\'�valuation num�rique de <span class="tt wims_code_words">string1</span> est strictement sup�rieure � celle de <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  >=  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 >= string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si l\'�valuation num�rique de <span class="tt wims_code_words">string1</span> est sup�rieure � celle <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  isin  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 isin string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> est une sous-cha�ne de caract�res de <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  notin  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 notin string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> n\'est pas une sous-cha�ne de caract�res de <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  iswordof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 iswordof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> est un mot de <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  notwordof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 notwordof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> n\'est pas un mot de <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  isvarof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 isvarof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> est une variable math�matique de l\'expression <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  notvarof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 notvarof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>si <span class="tt wims_code_words">string1</span> n\'est pas une variable math�matique de l\'expression <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  isvariableof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 isvariableof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> est une variable math�matique de l\'expression <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  notvariableof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 notvariableof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> n\'est pas une variable math�matique de l\'expression <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  isitemof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 isitemof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> est un item de la liste <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  notitemof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 notitemof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> n\'est pas un item de la liste <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  islineof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 islineof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> est une ligne de <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  notlineof  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 notlineof string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> n\'est pas une ligne de <span class="tt wims_code_words">string2</span>.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  issamecase  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 issamecase string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> et <span class="tt wims_code_words">string2</span> sont les m�mes textes � des espaces multiples pr�s, mais tenant compte de la casse des lettres.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  notsamecase  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 notsamecase string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> et <span class="tt wims_code_words">string2</span> ne v�rifient pas le crit�re ci-dessus.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  issametext  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 issametext string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> et <span class="tt wims_code_words">string2</span> sont les m�mes textes � des espaces multiples pr�s, � la casse pr�s et aux lettres accentu�es pr�s.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	case '  notsametext  ' :
chaine_aide='<div class="syntax"><div class="title">Syntaxe</div><code>string1 notsametext string2</code></div>'+
'<div class="explication"><div class="title">Explication</div>vrai si <span class="tt wims_code_words">string1</span> et <span class="tt wims_code_words">string2</span> ne v�rifient pas le crit�re pr�c�dent.</div>'+
'' ; return chaine_aide;
	   break;
	////******************** 

	
	}
}