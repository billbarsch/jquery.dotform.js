# jquery.dotform.js

Este plugin tem o objetivo de transformar dados de um formulário html para um objeto javascrip 
e possivelmente ser enviado para o servidor (PHP por exemplo) em formato json.
A diferença desta forma de se trabalhar com formulários é que todos os dados do formulário podem ser enviados 
nomeando cada elemento (input text,password,textarea...) com notações no seguinte formato:

-Exemplo de formulário de pedido com diversos dados em diversos níveis:
------------------------------------------------------------------------------------------------------
<form id="pedido">
  <input type='text' class="dotfield" dotname='empresa'	 value='codigo_empresa'>
  <input type='text' class="dotfield" dotname='cliente' 	 value='codigo_cliente'>
  <input type='text' class="dotfield" dotname='vendedor' 	 value='codigo_vendedor'>

  <input type='text' class="dotfield" dotname='item' 						          value='codigo_item1'>
  <input type='text' class="dotfield" dotname='item.produto' 				      value='codigo_produto do item1'>
  <input type='text' class="dotfield" dotname='item.tamanho' 				      value='codigo_tamanho1 do produto do item1'>
  <input type='text' class="dotfield" dotname='item.tamanho.quantidade' 	value='quantidade do tamanho1 do item1'>
  <input type='text' class="dotfield" dotname='item.tamanho.descricao' 		value='descricao do tamanho1 do item1'>
  <input type='text' class="dotfield" dotname='item.tamanho' 				      value='codigo_tamanho2 do item1'>
  <input type='text' class="dotfield" dotname='item.tamanho.quantidade' 	value='quantidade do tamanho2 do item1'>
  <input type='text' class="dotfield" dotname='item.tamanho.descricao' 		value='descricao do tamanho2 do item1'>
  <input type='text' class="dotfield" dotname='item.quantidade' 			    value='quantidade do item1'>
  <input type='text' class="dotfield" dotname='item.preco' 					      value='preco do item1'>

  <input type='text' class="dotfield" dotname='item' 						          value='codigo_item2'>
  <input type='text' class="dotfield" dotname='item.produto' 				      value='codigo_produto do item2'>
  <input type='text' class="dotfield" dotname='item.tamanho' 				      value='codigo_tamanho1 do produto do item2'>
  <input type='text' class="dotfield" dotname='item.tamanho.quantidade' 	value='quantidade do tamanho1 do item2'>
  <input type='text' class="dotfield" dotname='item.tamanho.descricao' 		value='descricao do tamanho1 do item2'>
  <input type='text' class="dotfield" dotname='item.tamanho' 				      value='codigo_tamanho2 do item2'>
  <input type='text' class="dotfield" dotname='item.tamanho.quantidade' 	value='quantidade do tamanho2 do item2'>
  <input type='text' class="dotfield" dotname='item.tamanho.descricao' 		value='descricao do tamanho2 do item2'>
  <input type='text' class="dotfield" dotname='item.quantidade' 			    value='quantidade do item2'>
  <input type='text' class="dotfield" dotname='item.preco' 					      value='preco do item2'>

  <button type="submit">Enviar...</button>
</form>
