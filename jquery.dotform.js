jQuery.fn.dotform = function(action){
	function cria_chave(form,caminho,valor){
		chaves = caminho.split(".");
		var nivel_acessado = form;
		for (var i = 0; i < chaves.length; i++){
			//verifica se está na ponta final do caminho
			if(i==(chaves.length-1)){
				//verifica se caminho existe/é array
				if(typeof nivel_acessado.children=='undefined') nivel_acessado.children = {};
				if(typeof nivel_acessado.children[chaves[i]] == 'undefined'){
					nivel_acessado.children[chaves[i]] = {value:valor};
				}else{
					if(Array.isArray(nivel_acessado.children[chaves[i]])){
						nivel_acessado.children[chaves[i]].push({value:valor});
					}else{
						//transforma em array
						var antigo = nivel_acessado.children[chaves[i]];
						nivel_acessado.children[chaves[i]] = [antigo,{value:valor}]
					}
				}
			}
			if(Array.isArray(nivel_acessado.children[chaves[i]])){
				ultimo = nivel_acessado.children[chaves[i]].length-1;
				var estou_em = nivel_acessado.children[chaves[i]][ultimo];
			}else{
				var estou_em = nivel_acessado.children[chaves[i]];
			}
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
