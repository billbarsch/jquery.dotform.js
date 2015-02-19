jQuery.fn.dotform = function(action){
	function cria_chave(form,caminho,valor){
		chaves = caminho.split(".");
		var nivel_acessado = form.children;
		for (var i = 0; i < chaves.length; i++){
			//verifica se está na ponta final do caminho
			if(i==(chaves.length-1)){
				//verifica se caminho existe/é array
				if(Array.isArray(nivel_acessado[chaves[i]])){
					nivel_acessado[chaves[i]].push({value:valor,
						children:{}
					});
				}else{
					nivel_acessado[chaves[i]] = [{value:valor,
						children:{}
					}]
				}
			}
			ultimo = nivel_acessado[chaves[i]].length-1;
			var estou_em = nivel_acessado[chaves[i]][ultimo].children;
			nivel_acessado = estou_em;
		}
	}
	function gera_formulario(elemento_form){
		var form_name = $(elemento_form).attr("name") || "form";
		var form = {value:form_name,
			children:{}
		};
		//busca campos e sai criando chaves...
		$(elemento_form).find("[dotname]").each(function(){
			cria_chave(form,$(this).attr("dotname"),$(this).val());
		});
		return form;
	}
	
	var json = null;
	this.each(function(){
		json = gera_formulario($(this));
    });
	return json;
};