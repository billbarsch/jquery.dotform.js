# jquery.dotform.js

Este plugin tem o objetivo de transformar dados de um formulário html para um objeto javascript 
e possivelmente ser enviado para o servidor (PHP por exemplo) em formato json.
A diferença desta forma de se trabalhar com formulários é que todos os dados do formulário podem ser enviados 
nomeando cada elemento (input text,password,textarea...) com notações no seguinte formato:

-Exemplo de formulário de pedido com diversos dados em diversos níveis:

------------------------------------------------------------------------------------------------------
<p>&lt;form id=&quot;pedido&quot;&gt;<br />
&lt;input type='text' class=&quot;dotfield&quot; dotname='empresa'	 value='codigo_empresa'&gt;<br />
&lt;input type='text' class=&quot;dotfield&quot; dotname='cliente' 	 value='codigo_cliente'&gt;<br />
&lt;input type='text' class=&quot;dotfield&quot; dotname='vendedor' 	 value='codigo_vendedor'&gt;</p>
<p> &lt;input type='text' class=&quot;dotfield&quot; dotname='item' 						          value='codigo_item1'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.produto' 				      value='codigo_produto do item1'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho' 				      value='codigo_tamanho1 do produto do item1'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho.quantidade' 	value='quantidade do tamanho1 do item1'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho.descricao' 		value='descricao do tamanho1 do item1'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho' 				      value='codigo_tamanho2 do item1'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho.quantidade' 	value='quantidade do tamanho2 do item1'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho.descricao' 		value='descricao do tamanho2 do item1'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.quantidade' 			    value='quantidade do item1'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.preco' 					      value='preco do item1'&gt;</p>
<p> &lt;input type='text' class=&quot;dotfield&quot; dotname='item' 						          value='codigo_item2'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.produto' 				      value='codigo_produto do item2'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho' 				      value='codigo_tamanho1 do produto do item2'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho.quantidade' 	value='quantidade do tamanho1 do item2'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho.descricao' 		value='descricao do tamanho1 do item2'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho' 				      value='codigo_tamanho2 do item2'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho.quantidade' 	value='quantidade do tamanho2 do item2'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.tamanho.descricao' 		value='descricao do tamanho2 do item2'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.quantidade' 			    value='quantidade do item2'&gt;<br />
  &lt;input type='text' class=&quot;dotfield&quot; dotname='item.preco' 					      value='preco do item2'&gt;</p>
<p> &lt;button type=&quot;submit&quot;&gt;Enviar...&lt;/button&gt;<br />
  &lt;/form&gt;</p>
---------------------------------------------------------------------------


-Resultado:

O plugin lê os dados do formulário html e retorna um objeto javascritp que pode ser transformado para json (JSON.stringify()) no seguinte formato:

<p>[{<br />
&quot;value&quot;: &quot;form&quot;,<br />
&quot;children&quot;: {<br />
&quot;empresa&quot;: [{<br />
&quot;value&quot;: &quot;codigo_empresa&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;cliente&quot;: [{<br />
&quot;value&quot;: &quot;codigo_cliente&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;vendedor&quot;: [{<br />
&quot;value&quot;: &quot;codigo_vendedor&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;item&quot;: [{<br />
&quot;value&quot;: &quot;codigo_item1&quot;,<br />
&quot;children&quot;: {<br />
&quot;produto&quot;: [{<br />
&quot;value&quot;: &quot;codigo_produto do item1&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;tamanho&quot;: [{<br />
&quot;value&quot;: &quot;codigo_tamanho1 do produto do item1&quot;,<br />
&quot;children&quot;: {<br />
&quot;quantidade&quot;: [{<br />
&quot;value&quot;: &quot;quantidade do tamanho1 do item1&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;descricao&quot;: [{<br />
&quot;value&quot;: &quot;descricao do tamanho1 do item1&quot;,<br />
&quot;children&quot;: {}<br />
}]<br />
}<br />
}, {<br />
&quot;value&quot;: &quot;codigo_tamanho2 do item1&quot;,<br />
&quot;children&quot;: {<br />
&quot;quantidade&quot;: [{<br />
&quot;value&quot;: &quot;quantidade do tamanho2 do item1&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;descricao&quot;: [{<br />
&quot;value&quot;: &quot;descricao do tamanho2 do item1&quot;,<br />
&quot;children&quot;: {}<br />
}]<br />
}<br />
}],<br />
&quot;quantidade&quot;: [{<br />
&quot;value&quot;: &quot;quantidade do item1&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;preco&quot;: [{<br />
&quot;value&quot;: &quot;preco do item1&quot;,<br />
&quot;children&quot;: {}<br />
}]<br />
}<br />
}, {<br />
&quot;value&quot;: &quot;codigo_item2&quot;,<br />
&quot;children&quot;: {<br />
&quot;produto&quot;: [{<br />
&quot;value&quot;: &quot;codigo_produto do item2&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;tamanho&quot;: [{<br />
&quot;value&quot;: &quot;codigo_tamanho1 do produto do item2&quot;,<br />
&quot;children&quot;: {<br />
&quot;quantidade&quot;: [{<br />
&quot;value&quot;: &quot;quantidade do tamanho1 do item2&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;descricao&quot;: [{<br />
&quot;value&quot;: &quot;descricao do tamanho1 do item2&quot;,<br />
&quot;children&quot;: {}<br />
}]<br />
}<br />
}, {<br />
&quot;value&quot;: &quot;codigo_tamanho2 do item2&quot;,<br />
&quot;children&quot;: {<br />
&quot;quantidade&quot;: [{<br />
&quot;value&quot;: &quot;quantidade do tamanho2 do item2&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;descricao&quot;: [{<br />
&quot;value&quot;: &quot;descricao do tamanho2 do item2&quot;,<br />
&quot;children&quot;: {}<br />
}]<br />
}<br />
}],<br />
&quot;quantidade&quot;: [{<br />
&quot;value&quot;: &quot;quantidade do item2&quot;,<br />
&quot;children&quot;: {}<br />
}],<br />
&quot;preco&quot;: [{<br />
&quot;value&quot;: &quot;preco do item2&quot;,<br />
&quot;children&quot;: {}<br />
}]<br />
}<br />
}]<br />
}<br />
}]</p>

