class SEditor{
  //attributs
  // Un editeur quill
  private editor:any;

  //Constructeur
  constructor(editor:any){
    this.editor = editor;
  }

  public to_OEFcode(){
    var content = this.editor.getContents();
    var tabContent = content['ops']; //on obtient notre tableau de contenu
  	var line = ""; //on intialise notre ligne courante
  	var tabTmp = []; //on initialise notre tableau temporaire (celui qui découpe sur les retours chariots)
  	var result = ""; //On initialise notre résultat final
  	var resTmp; //on initialise notre résultat temporaire
  	var was_list = {'ordered':false,'unordered':false}; //On initialise notre tableau pour savoir si une liste est active ou non
  	for (var i = 0;i<tabContent.length;i++){
  		tabTmp = this.cut_insert(tabContent[i]); //on découpe le contenu de la case i du tableau
  		for(var j = 0;j<tabTmp.length;j++){
  			if(tabTmp[j]['insert'] != "\n"){ //Si on arrive pas sur une in de ligne, on ajoute les élements à la ligne
  				line += this.add_element_line(tabTmp[j]);
  			}
  			else{
  				//Sinon on applique les bons attributs à la ligne
  				resTmp = this.applied_attributes(line,tabTmp[j],was_list);
  				//on met à jour nos informations
  				was_list = resTmp['was_list'];
  				result += resTmp['line'];
  				line = "";
  			}
  		}
  	}
  	if (line != ""){
  		result += line;
  	}
  	return this.clean_OEFcode(result);
  }

  private cut_insert(delta_element){
    if(typeof delta_element['insert'] === "string"){
    	var text = delta_element['insert']; //on obtien de le contenu textuel de l'élement
    	var return_line_search = text.search("\n"); //on initialise la position du premier retour chariot
    	var result = [];//on initialise notre résultat
    	while (return_line_search != -1){
    		//On ajoute le contenu jusqu'au retour chariot avec les mêmes attributs
    		result.push({'insert':text.substring(0,return_line_search),'attributes':delta_element['attributes']});
    		//on ajoute un retour chariot seul
    		result.push({'insert':"\n",'attributes':{}});
    		//On obtient la suite du texte
    		text = text.substring(return_line_search+1);
    		//on cherche le prochain retour chariot
    		return_line_search = text.search("\n");
    	}
    	if(text.length>0){
    		//S'il reste des choses à traiter on l'ajoute au résultat
    		result.push({'insert':text,'attributes':delta_element['attributes']});
    	}
    	if(delta_element['insert'] == "\n"){
    		//si l'élément était un retour chariot à la base, on le laisse tel quel
    		result = [delta_element];
    	}
    	return result;
    }
    else{
      return [delta_element];
    }
  }

  private add_element_line(element){
  	var result = element['insert']; //on initialise notre résultat
  	if (element['insert']['VariableImage']!= null){
  		//si c'est une variable on la traite avec un \ devant
  		result = "\\"+element['insert']['VariableImage'];
  	}
    else if (element['insert']['answerImage']!= null){
  		//si c'est une answer on la traite avec un <answer> devant
  		result = "<imgAnwer>"+element['insert']['answerImage']+"</imgAnswer>";
  	}
  	else if (element['attributes'] != null) {
  		if(element['attributes']['LatexImage'] != null){
  			//Si c'est du latex, on le traite en premier pour ne pas le polluer avec des balises
  			result = "\\("+result+"\\)"
  		}
  		for (var key in element['attributes']){
  			//On ajoute les bonnes balises autour du texte selon les attributs
  			switch(key){
  				case 'bold':
  					result = "<strong>"+result+"</strong>"
  					break;
  				case 'italic':
  					result = "<em>"+result+"</em>"
  					break;
  				case 'underline':
  					result = "<u>"+result+"</u>"
  					break;
  				case 'strike':
  					result = "<s>"+result+"</s>"
  					break;
  			}
  		}
  	}
  	return result;
  }

  private applied_attributes(line,element,was_list){
  	var attributes = element['attributes']; //on récupère les attributs
    if (attributes == undefined){
      attributes = {};
    }
  	var result = line; //on initialise notre résultat avec le contenu de la ligne en cours
  	if(Object.keys(attributes).length == 0){ //S'il n'y a pas d'attributs, on entoure juste la ligne de balise <p>
  		result = "<p>"+result+"</p>\n";
  	}
  	for(var key in attributes){
  		//On regarde tous les attributs
  		switch(key){
  			case 'list':
  				if(attributes['list'] == 'bullet'){
  					if(was_list['unordered'] == false){
  						//on gèr la cas de début de liste unorderde
  						result = "<ul><li>"+result+"</li>\n";
  						was_list['unordered'] = true;
  					}
  					else{
  						//le cas d'une liste en cours
  						result = "<li>"+result+"</li>\n";
  					}
  				}
  				if(attributes['list'] == 'ordered'){
  					if(was_list['ordered'] == false){
  						//on gère le cas de début d'une liste ordered
  						result = "<ol><li>"+result+"</li>\n";
  						was_list['ordered'] = true;
  					}
  					else{
  						result = "<li>"+result+"</li>\n";
  					}
  				}
  				break;
  		}
  	}
  	if (attributes['list'] == null){
  		//on cherche à voir s'il faut fermer les listes ou non
  		if(was_list['ordered']){
  			result ="</ol>\n"+result;
  			was_list['ordered'] = false;
  		}
  		if(was_list['unordered']){
  			result ="</ul>\n"+result;
  			was_list['unordered'] = false;
  		}
  	}
  	else if(attributes['list'] == 'bullet'){
  		if(was_list['ordered']){
  			result ="</ol>"+result;
  			was_list['ordered'] = false;
  		}
  	}
  	else if(attributes['list'] == 'ordered'){
  		if(was_list['unordered']){
  			result ="</ul>"+result;
  			was_list['unordered'] = false;
  		}
  	}
  	return {'line':result,'was_list':was_list};
  }

  private find_balise_block(str){
  	var result = []; //on initialise notre résultat qui sera sous la forme [positionDébut,positionFin]
  	var start_balise = str.search("<"); //On initialise notre position de début de balise
  	var end_balise; //On initialise notre position de fin de balise
  	var name_balise = ""; //on initialise le nom de la balise courante (INUTILE POUR LE MOMENT)
  	var counter = 0; //On initialise notre compteur qui va nous permettre de retrouver le block de balise dans la chaine originale
  	result.push(start_balise); //On entre le début du block de balise
  	while(str[start_balise] == "<"){
  		end_balise = str.search(">"); //On va chercher ou se ferme la balise courante
  		name_balise = str.substring(start_balise+1,end_balise);//On obtient le nom de la balise (INUTILE POUR LE MOMENT)
  		counter += name_balise.length+2; //On ajoute au compteur la taille de la balise
  		str = str.substring(end_balise+1);//On récupère la suite de la chaine
  		start_balise = 0;//On regarde le premier caractère
  	}
  	result.push(result[0]+counter); //On ajoute le pointeur vers la fin de block au résultat
  	return result;
  }

  private clean_balise_block(str){
  	var result = "";
  	if(str.length>0){ //Si la chaine comprend des choses à nettoyer
  		var start_balise = 0; //On initialise la position du début de notre balise
  		var end_balise = str.search(">"); //On initialise la position de la fin de la balise courante
  		var name_balise = "";//On initialise le nom de la balise
  		var name_complement = "";//On initialise le complément du nom de la balise
  		var pos_complement; //On initialise la position de la balise complémentaire
  		while(str.length>0){ //Tant qu'il y a des caractères à traiter
  			end_balise = str.search(">"); //On va voir la fin de la balise
  			name_balise = str.substring(start_balise+1,end_balise);//On récupère le nom de la balise courante
  			//On obtient le nom du complément de la balise
  			if(name_balise[0] == "/"){
  				name_complement = name_balise.substring(1);
  			}
  			else{
  				name_complement = "/"+name_balise;
  			}
  			//On cherche la position de la balise complémentaire
  			pos_complement = str.search("<"+name_complement+">");
  			//Si elle n'existe pas, on ajoute la balise courant au résultat
  			if(pos_complement == -1){
  				result += "<"+name_balise+">";
  				str = str.substring(end_balise+1);//On obtient la suite de la chaine
  			}
  			else{
  				//Sinon on supprime la balise courante et la balise complémentaire dans la chaine
  				str = str.substring(name_balise.length+2,pos_complement)+str.substring(pos_complement+name_complement.length+2);
  			}
  		}
  	}
  	return result;
  }

  private clean_OEFcode(str){
  	var tab = this.find_balise_block(str); //On obtient la position du premier block de balises
  	var result = ""; //On initialise notre résultat
  	var balise_block = ""; //On initialise le contenu du block de balise
  	while(tab[0] != tab[1]){
  		balise_block = this.clean_balise_block(str.substring(tab[0],tab[1])); //On nettoie le block de balise
  		result += str.substring(0,tab[0]) + balise_block; //On ajoute le contenu nettoyer au résultat
  		str = str.substring(tab[1]); //On obtient la suite de la chaine
  		tab = this.find_balise_block(str); //On trouve le block suivant
  	}
  	result += str;
  	return result;
  }
}