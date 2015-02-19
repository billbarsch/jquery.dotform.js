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
  {
    "value": “nome_formulario”,
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
</pre>
##Porque usar o jquery.dotform.js?
A nomeclatura aceita pelo PHP usando arrays multidimencionais é útil porém em projetos que exigem um nível de profundidade maior dos dados seu uso torna-se confuso.
Imagine que você trabalha com um formulário de pedidos simples. Estes pedidos tem dados como: 
<pre>
cliente 
itens (vários)
quantidades dos itens (para cada item)
valor dos itens (para cada item)
tamanhos dos itens (vários para cada item)
quantidade do tamanho e descrição do tamanho (para cada tamanho de item)
</pre>
Nomeando os elementos html da forma convencional seria:
<pre>&lt;input type=&quot;text&quot; name=&quot;cliente&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; name=&quot;item[0]&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; name=&quot;item[0][quantidade]&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; name=&quot;item[0][valor]&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; name=&quot;item[0][tamanho][0]&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; name=&quot;item[0][tamanho][0][quantidade]&quot; value=&quot;&quot;&gt;<br />
&lt;input type=&quot;text&quot; name=&quot;item[0][tamanho][0][descricao]&quot; value=&quot;&quot;&gt;</pre>
A administração dos nomes destes elementos se torna complicada quando há a necessidade de incluir novos campos dinamicamente por javascript (jquery) pelo usuario.
Torna-se necessário criar funções que calculem a quantidade de itens adicionados, nomeação correta e trabalhosa e o trabalho só aumenta quanto mais profunda é a complexidade dos dados.
<span style=“color=#00F”>O jquery.dotform.js vem para acabar com tudo isso!</span>
O mesmo resultado pode ser alcançado usando a nomeclatura dotname:
<pre>&lt;input type=&quot;text&quot; dotname=&quot;cliente&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; dotname=&quot;item&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; dotname=&quot;item.quantidade&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; dotname=&quot;item.valor&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; dotname=&quot;item.tamanho&quot; value=&quot;&quot;&gt;<br />
  &lt;input type=&quot;text&quot; dotname=&quot;item.tamanho.quantidade&quot; value=&quot;&quot;&gt;<br />
&lt;input type=&quot;text&quot; dotname=&quot;item.tamanho.descricao.&quot; value=&quot;&quot;&gt;</pre>
Estes elementos podem ser clonados e multiplicados em vários níveis que o formato resultante dos dados acontece exatamente da forma como se espera!
##Como usar?
1 - Você deve incluir tanto o jQuery quanto o jquery.dotform.js no cabeçalho da sua pagina:
<pre>
<p>&lt;script src=&quot;http://code.jquery.com/jquery-1.11.1.min.js&quot;&gt;&lt;/script&gt;<br />
&lt;script src=&quot;jquery.dotform.js&quot;&gt;&lt;/script&gt;</p></pre>
2 - A nomeclatura dos campos (input/textarea/select) deve estar dentro do atributo: dotname=“” e seguir o padrão:
<pre>
<p>&lt;input type=&quot;text&quot; dotname=&quot;pai.filho&quot;&gt;</p></pre>
3 - Atenção! Só é possivel nomear um elemento “filho” depois que existir um elemento pai no código html anterior a ele (exemplo):
<pre>
&lt;input type=&quot;text&quot; dotname=&quot;item_do_pedido&quot; value=&quot;&quot;&gt; &lt;!— cria-se primeiro o elemento &quot;pai&quot; —&gt;<br />
&lt;input type=&quot;text&quot; dotname=&quot;item_do_pedido.quantidade&quot; value=&quot;&quot;&gt; &lt;!— logo após, cria-se o elemnto &quot;filho&quot; —&gt;</pre>
4 - A simples inclusão de um novo elemento no código html indica que os elementos abaixo deverão fazer parte daquele elemento superior (exemplo):
<pre>&lt;input type=&quot;text&quot; dotname=&quot;item&quot; value=&quot;&quot;&gt; &lt;!— cria-se um elemento item, todos os elementos abaixo ficarão dentro desta &quot;chave&quot; —&gt;<br />
  &lt;input type=&quot;text&quot; dotname=&quot;item.quantidade&quot; value=&quot;&quot;&gt; &lt;!— quantidade do item 1 —&gt;<br />
  &lt;input type=&quot;text&quot; dotname=&quot;item.valor&quot; value=&quot;&quot;&gt; &lt;!— valor do item 1 —&gt;<br />
  &lt;input type=&quot;text&quot; dotname=&quot;item&quot; value=&quot;&quot;&gt; &lt;!— cria-se uma nova chave para um novo item, todos os elementos abaixo ficarão dentro desta nova &quot;chave&quot; —&gt;<br />
  &lt;input type=&quot;text&quot; dotname=&quot;item.quantidade&quot; value=&quot;&quot;&gt; &lt;!— quantidade do item 2 —&gt;<br />
&lt;input type=&quot;text&quot; dotname=&quot;item.valor&quot; value=&quot;&quot;&gt; &lt;!— valor do item 2 —&gt;</pre>
##Autoria e licença
O jquery.dotform.js é livre para uso quaisquer sejam os fins.
##Dúvidas e sugestões:
billbarsch@gmail.com
Bill Barsch

#TODO
-Melhorar o código para retirar os elementos: "children:{}" em branco que aparecem no resultado json final.