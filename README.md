# jquery.dotform.js

##Já pensou poder nomear campos de formulários html desta forma?
<pre>
empresa
cliente
vendedor

item
item.produto
item.quantidade
item.tamanho
item.tamanho.quantidade
item.tamanho.descricao
</pre>
##e obter um resultado json parecido com este:
<pre>
formulario: {
    empresa: "sdfsdf",
    cliente: "adkfjs",
    vendedor:"sdfsdf",
    item:    "fasdfs",
        produto:    "sdfsdf",
        quantidade: "sdfdfs",
        tamanho:    "ssdfsd",
            quantidade: "asdfas",
            descricao:  "sdafss"
    item:    "fasdfs",
        produto:    "sdfsdf",
        quantidade: "sdfdfs",
        tamanho:    "ssdfsd",
            quantidade: "asdfas",
            descricao:  "sdafss"
    total_pedido:   "asdfsd"
}
</pre>
#Com o jquery.dotform.js é possível!
Este plugin tem o objetivo de transformar dados de um formulário html em um objeto javascript que poderá ser enviado para o servidor (PHP por exemplo) em formato json por ajax.
A diferença desta forma de se trabalhar com formulários é que todos os dados do formulário podem ser enviados nomeando cada elemento (input text,password,textarea...) com notações no seguinte formato:

<p>&lt;form id=&quot;pedido&quot;&gt;<br />
&lt;input type='text' dotname='empresa'&gt;<br />
&lt;input type='text' dotname='cliente'&gt;<br />
&lt;input type='text' dotname='vendedor'&gt;<br />
<br />
&lt;input type='text' dotname='item'&gt;<br />
&lt;input type='text' dotname='item.produto'&gt;<br />
&lt;input type='text' dotname='item.tamanho'&gt;<br />
&lt;input type='text' dotname='item.tamanho.quantidade'&gt;<br />
&lt;input type='text' dotname='item.tamanho.descricao'&gt;<br />
&lt;input type='text' dotname='item.tamanho'&gt;<br />
&lt;input type='text' dotname='item.tamanho.quantidade'&gt;<br />
&lt;input type='text' dotname='item.tamanho.descricao'&gt;<br />
&lt;input type='text' dotname='item.quantidade'&gt;<br />
&lt;input type='text' dotname='item.preco'&gt;</p>
<p> &lt;button type=&quot;submit&quot;&gt;Enviar...&lt;/button&gt;<br />
  &lt;/form&gt;</p>
<p>&nbsp; </p>

#Resultado:
O plugin lê os dados do formulário html e retorna um objeto javascript que pode ser transformado para json (JSON.stringify()) no seguinte formato:
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

#TODO
-Melhorar o código para retirar os elementos: "children:{}" em branco que aparecem no resultado json final.
