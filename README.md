# jquery.dotform.js

#Já pensou poder nomear campos de formulários desta forma:
-------------------------------------------------------------------
<pre>
<form id="pedido">
  <input type='text' dotname='empresa'    value='codigo_empresa'>
  <input type='text' dotname='cliente'    value='codigo_cliente'>
  <input type='text' dotname='vendedor'   value='codigo_vendedor'>
 
  <input type='text' dotname='item' 			             value='codigo_item1'>
  <input type='text' dotname='item.produto' 		       value='codigo_produto do item1'>
  <input type='text' dotname='item.tamanho' 		       value='codigo_tamanho1 do produto do item1'>
  <input type='text' dotname='item.tamanho.quantidade' value='quantidade do tamanho1 do item1'>
  <input type='text' dotname='item.tamanho.descricao'  value='descricao do tamanho1 do item1'>
  <input type='text' dotname='item.tamanho' 		       value='codigo_tamanho2 do item1'>
  <input type='text' dotname='item.tamanho.quantidade' value='quantidade do tamanho2 do item1'>
  <input type='text' dotname='item.tamanho.descricao'  value='descricao do tamanho2 do item1'>
  <input type='text' dotname='item.quantidade'         value='quantidade do item1'>
  <input type='text' dotname='item.preco' 	           value='preco do item1'>

  <button type="submit">Enviar...</button>
</form>
</pre>

#Com o jquery.dotform.js é possível!
Este plugin tem o objetivo de transformar dados de um formulário html para um objeto javascript 
e possivelmente ser enviado para o servidor (PHP por exemplo) em formato json.
A diferença desta forma de se trabalhar com formulários é que todos os dados do formulário podem ser enviados 
nomeando cada elemento (input text,password,textarea...) com notações no seguinte formato:

#Resultado:
O plugin lê os dados do formulário html e retorna um objeto javascritp que pode ser transformado para json (JSON.stringify()) no seguinte formato:
<pre>
[
  {
    "value": "form",
    "children": {
      "empresa": [
        {
          "value": "codigo_empresa",
        }
      ],
      "cliente": [
        {
          "value": "codigo_cliente",
        }
      ],
      "vendedor": [
        {
          "value": "codigo_vendedor",
        }
      ],
      "item": [
        {
          "value": "codigo_item1",
          "children": {
            "produto": [
              {
                "value": "codigo_produto do item1",
              }
            ],
            "tamanho": [
              {
                "value": "codigo_tamanho1 do produto do item1",
                "children": {
                  "quantidade": [
                    {
                      "value": "quantidade do tamanho1 do item1",
                    }
                  ],
                  "descricao": [
                    {
                      "value": "descricao do tamanho1 do item1",
                    }
                  ]
                }
              },
              {
                "value": "codigo_tamanho2 do item1",
                "children": {
                  "quantidade": [
                    {
                      "value": "quantidade do tamanho2 do item1",
                    }
                  ],
                  "descricao": [
                    {
                      "value": "descricao do tamanho2 do item1",
                    }
                  ]
                }
              }
            ],
            "quantidade": [
              {
                "value": "quantidade do item1",
              }
            ],
            "preco": [
              {
                "value": "preco do item1",
              }
            ]
          }
        }
      ]
    }
  }
]
</pre>
