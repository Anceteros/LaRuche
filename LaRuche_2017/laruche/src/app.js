
$(document).ready();

$(document).foundation();

var variable_List = {};
var answer_List = {};
var active_editor_analyse = null;
var prepEditor;

function change_onglet(name) {
	$('#RId_Onglet_'+anc_onglet).removeClass('RCl_Onglet_Affiche').addClass('RCl_Onglet_Cache');
	$('#RId_Onglet_'+name).removeClass('RCl_Onglet_Cache').addClass('RCl_Onglet_Affiche');
	$('#RId_Contenu_Onglet_'+anc_onglet).addClass('RCl_Contenu_Onglet_Cache');
	$('#RId_Contenu_Onglet_'+name).removeClass('RCl_Contenu_Onglet_Cache');
	anc_onglet = name;
	if (typeof(prepEditor)!='undefined') {
		prepEditor.onResize();
		Blockly.svgResize(prepEditor.mBlocklyWorkspace);
	}
}

var anc_onglet = 'Enonce';
change_onglet(anc_onglet);

// hljs.configure({   // optionally configure hljs -> ask Bernadette for OEF definition file
//   languages: ['HTML']
// });

var quill = new Quill('#editor-enonce', {
	modules: {
		formula: true,
		// syntax: true,
		toolbar: '#toolbar-container'
	},
	placeholder: 'Compose an exercise...',
	theme: 'snow'
});

var quill_EnTete = new Quill('#editor-EnTete', {
	modules: {
		toolbar: false
	},
	placeholder: 'Compose an exercise...',
	theme: 'snow'
});


var editor_EnTete = new SEditor(quill_EnTete);
var editor_Enonce = new SEditor(quill);
/* CONFIGURATION DU QUILL DE L'ENTETE, VARIABLE GLOBAL = MOCHE*/
quill_EnTete.format('code-block',true);
/* SE DEMENER POUR ENLEVER CES VARIABLES GLOBALES */

function add_answer(editor,ans_list){
	//AJOUTER A LA LISTE DE VARIABLES AUSSI
	editor.focus();
	var positionSelection = editor.getSelection(); //On obtient la sélection de l'utilisateur
	if (positionSelection.length == 0){
		var name = window.prompt('Entrez le nom de votre réponse','Answer');

		if((name != null) && (test_valid_expression(name)) && (ans_list[name] == null)){
			ans_list[name] = new Answer(name,'numeric','reply-LOLLLLOLO');
			ans_list[name].get_block_html().create_editor();
			ans_list[name].get_block_html().get_editor().editor.on('editor-change',
				function(){
					if( (active_editor_analyse != null) || (active_editor_analyse != ans_list[name].get_block_html().get_editor())){
						//REVOIR CE IF, IL VA PAS
						active_editor_analyse = ans_list[name].get_block_html().get_editor();}});
			editor.insertEmbed(positionSelection.index,'answerImage',name);
		}
		else{
			window.alert('Casse toi');
		}
		// ans_list.push(new Answer('reply'+(ans_list.length+1)));
	}
	else{

	}
}

function test_valid_expression(str){
	var patt = /^[a-zA-Z][a-zA-Z0-9-]*$/;
	return patt.test(str);
}

function create_variable_editor(id_select_type_popup,id_input_name_popup,index){
	//On récupère le type de la variable_List
	var type = document.getElementById(id_select_type_popup).options[document.getElementById(id_select_type_popup).selectedIndex].value;
	//On récupère le nom de la variable
	var name = document.getElementById(id_input_name_popup).value;
	if(test_valid_expression(name)){
		quill.insertEmbed(index, 'VariableImage',name);//On insère la variable dans l'éditeur sous la forme d'un Embed
		if (variable_List[name] == null){ //Si la variable n'existe pas encore
			variable_List[name] = new Variable(name,type); //On ajoute la nouvelle variable à notre liste de variable
			update_variables_view("card_Enonce_Variable",variable_List); //On met à jour l'affichage ds variables
			$('#popup').toggleClass('popup_variable_visible');//On désactive le popup
		}
	}
	else{
		window.alert("Le nom de la variable ne doit contenir que des caractères alphanumériques !");
	}
}

function change_to_var(editor,var_list){
	editor.focus();
	var positionSelection = editor.getSelection(); //On obtient la sélection de l'utilisateur
	if (positionSelection.length == 0){
		//Ajouter un popup pour créer directement la variable
		create_variable_choice_popup("variable_creation_button",positionSelection.index);
	}
	else{
		var nameVar = editor.getText(positionSelection.index,positionSelection.length); //On récupère le contenu de la séléction
		if (test_valid_expression(nameVar)){
			editor.deleteText(positionSelection.index,positionSelection.length); //On enlève le texte séléctionné
			editor.insertEmbed(positionSelection.index, 'VariableImage',nameVar); //On le remplace par Variable possédant le nom que l'utilisateur avait sélectionné
			if (var_list[nameVar] == null){
				var_list[nameVar] = new Variable(nameVar,typeVariable.Real);
				update_variables_view("card_Enonce_Variable",var_list);
			}
		}
	}
}


 /****************************EN CHANTIER*****************************/
function change_type_answer(id_answer,type,ans_list){
 	ans_list[id_answer].get_block_html().change_to_type(type);
}

function delete_element_answer_list(name){
	answer_List[name].get_block_html().destroy();
	delete answer_List[name];
}

function update_analyse_answer(editor,ans_list){
	var tab_answer = editor.get_answer_tab(); //On obtient le tableau des réponses dans l'énoncé dans l'ordre
	var pos;//on initialise notre position courante
	for(var key in ans_list){
		pos = tab_answer.indexOf(key);//On obtient la position de la réponse que l'on regarde
		if(pos != -1){ //si cette réponse est encore valide
			//On l'ajoute au bon endroit
			if(pos > 0){
				$('#answer_list_analyse .callout').eq(pos-1).after($('#answer_all_'+key));
			}
			else{
				$('#answer_list_analyse .callout').eq(0).before($('#answer_all_'+key));
			}
		}
		else{
			delete_element_answer_list(key);
		}
	}
}

function get_active_editor_analyse(){
	var result = null;
	for(var key in answer_List){
		if(answer_List[key].get_block_html().get_editor().editor.hasFocus()){
			result = answer_List[key].get_block_html().get_editor();
		}
	}
	return result;
}

function destroy_answer(name){
	delete_element_answer_list(name);
	editor_Enonce.destroy_answer(name);
	for(var key in answer_List){
		answer_List[key].get_block_html().get_editor().destroy_answer(name);
	}
}
 /****************************FIN DU CHANTIER*****************************/


function create_list_variables(variable_list){
	var result = "";
	for(var key in variable_list){
		result += '<li style="margin-bottom:5px;position:relative;"><span class="surligne_Variable" onclick="if(active_editor_analyse!=null){editor_Enonce.add_variable(\''+key+'\');}">'+key+'</span><button id="button_destroy_'+key+'" class="close-button" aria-label="Close alert" type="button" style="float:right;clear:right;font-size:1.6em;top:0px;" onclick="destroy_variable(\''+key+'\');update_all_view();"><span aria-hidden="true">&times;</span></button></li>'
	}
	return result;
}

function create_list_variables_analyse(variable_list){
	var result = "";
	for(var key in variable_list){
		result += '<li style="margin-bottom:5px;position:relative;"><span class="surligne_Variable" onclick="active_editor_analyse.add_variable(\''+key+'\');">'+key+'</span><button id="button_destroy_'+key+'" class="close-button" aria-label="Close alert" type="button" style="float:right;clear:right;font-size:1.6em;top:0px;" onclick="destroy_variable(\''+key+'\');update_all_view();"><span aria-hidden="true">&times;</span></button></li>'
	}
	return result;
}

function create_list_answer(answer_tab){
	var result = "";
	for(var  key in answer_tab){
		result += '<li style="margin-bottom:5px;position:relative;"><span class="surligne_Answer" onclick="active_editor_analyse.add_answer(\''+key+'\');">'+key+'</span><button id="button_destroy_'+key+'" class="close-button" aria-label="Close alert" type="button" style="float:right;clear:right;font-size:1.6em;top:0px;" onclick="destroy_answer(\''+key+'\');update_all_view();"><span aria-hidden="true">&times;</span></button></li>'
	}
	return result;
}

function update_variables_view(id_to_updt, variable_list){
	var result = "";
	result = "<ul class='variable_List_Enonce'>"+create_list_variables(variable_list)+"</ul>";
	document.getElementById(id_to_updt).innerHTML = result;
}

function update_variables_answers_view(id_to_updt,variable_list,answer_tab){
	var result = "";
	result = "<ul class='variable_List_Enonce'>"+create_list_variables_analyse(variable_list)+create_list_answer(answer_tab)+"</ul>";
	document.getElementById(id_to_updt).innerHTML = result;
}

function update_all_view(){
	update_variables_view('card_Enonce_Variable',variable_List);
	update_variables_answers_view('card_Analyse_Variable',variable_List,answer_List);
}



/*****************************************************/
function gather_all_info(editor){
	var all_info = {};
	//We get all th interesting infos wher we have to
	all_info["title"] = document.getElementById("title_EnTete").value;
	all_info["language"] = document.getElementById("language_EnTete").value;
	all_info["name"] = document.getElementById("name_EnTete").value;
	all_info["email"] = document.getElementById("email_EnTete").value;
	all_info["OEF_code"] = editor_EnTete.to_OEFcode();
	all_info["enonce"] = editor_Enonce.to_OEFcode();
	return all_info;
}

function create_variable_choice_popup(id_to_popup,index){
	var rect = document.getElementById(id_to_popup).getBoundingClientRect(); //On obtient la position du bouton var
	$('#popup').toggleClass('popup_variable_visible');//On active le popup
	$('#popup').addClass('large-3');
	$('#popup').addClass('columns');
	//On place le popup là ou il faut
	$('#popup').css({'top':rect.top + ((rect.bottom - rect.top)/2),'left':rect.left + ((rect.right - rect.left)/1.3), 'position':'absolute'});
	//On crée le contenu du popup
	document.getElementById("popup").innerHTML = '<div class="callout"><label>Variable type'
  +'<select id = "popup_select">'
    +'<option value="Real">Real</option>'
    +'<option value="Draw">Draw</option>'
    +'<option value="Fun">Function</option>'
    +'<option value="Int">Integer</option>'
  +'</select>'
+'</label>'
+'<input placeholder="Nom de la variable" type="text" id="popup_input"></input>'
+'<a href="#" class="button" onclick="create_variable_editor(\'popup_select\',\'popup_input\','+index+')">Créer</a>'
+'</div>'
}


function destroy_variable(name){
	delete variable_List[name];
	editor_Enonce.destroy_var(name);
	for(var key in answer_List){
		answer_List[key].get_block_html().get_editor().destroy_var(name);
	}
}



function declaration_variable_OEFcode(){
	//FONCTION A COMPLETER
	var result = "";
	for (var nameVar in variable_List){ //Pour toutes les variables connues
		if (variable_List[nameVar].getType() == "Real"){ //dans le cas d'un réel
			result += "\\real{"+nameVar+" = "+variable_List[nameVar].getValue()+"}\n";
		}
		else if (variable_List[nameVar].getType() == "Int"){ //dans le cas d'un entier
			result += "\\integer{"+nameVar+" = "+variable_List[nameVar].getValue()+"}\n";
		}
	}
	return result;
}

function update_final_code(){
	//content_to_OEFcode(quill.getContents());
	console.log(quill.getContents());
	var result = "";
	var infos = gather_all_info(quill);
	/* HEAD DU CODE */
	result += "\\title{"+infos.title+"}\n";
	result += "\\language{"+infos.language+"}\n";
	result += "\\author{"+infos.author+"}\n";
	result += "\\email{"+infos.email+"}\n";
	result += "\\computeanswer{}\n";
	result += "\\format{html}\n";
	result += "\\precision{1000}\n";
	result += "\\range{-5..5)}\n";
	result += "\n\n\n"
	result += infos.OEF_code
	result += "\n\n\n"

	/* INSERER LES VARIABLES ICI */
	result += declaration_variable_OEFcode();
	/*DEBUT DU CODE EN SOI*/
	result += "\n\n\n";
	result += "\\statement{\n";
	/* RAJOUTER LE CODE TRANSFORMé DE L'ONGLET ENONCE */
	result += infos.enonce;//A faire
	/*ON FERME LE DOCUMENT */
	result += "}";
	document.getElementById("final_OEF_code").value = result;
}

//blockly_init();
