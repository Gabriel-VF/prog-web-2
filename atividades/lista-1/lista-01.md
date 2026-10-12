# 1
**a)** Linguagens estátiaps são linguagens onde os tipos das variáveis são conhecidas no tempo de compilação. Os tipos são especificados pelo programador

**b)** Como os tipos são conhecidos em tempo de compilação, alguns erros triviais são encontrados antes de compilar o programa e o desempenho fica mais otimizado pela previsibilidade da informação

**c)** A implementação nas linguagens dinâmicas variam, mas geralmente os valores de variáveis em linguagens dinâmicas estão menos atrelados ao seu tipo. O tipo da variável é armazenado como um _"metadado"_ que pode mudar, dessa forma uma variável pode mudar o tipo sem precisar fazer algum tipo de casting

**d)** Linguagens de tipagem forte são mais estritas; proíbem operações entre tipos possivelmente incompatíveis enquanto as de tipagem fraca permitem são mais permissivas quanto a essas operações que podem causar erros, e também podem fazer conversões para operação específica a ser feita

**e)**	A Especificação de tipos pode ser dada mas não é necessária, o tipo e estaticidade pode ser inferido e analisado durante compilação, se não dinamismo pode ser implementado. Da mesma forma algums compiladores estáticos podem inferir o tipo de uma variável mesmo o programador não ter o especificado

**f)** Javascript usa tipagem dinâmica e fraca