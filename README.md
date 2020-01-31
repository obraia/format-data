# format-data
Script simples em JavaScrip para formatar datas, uso para datas vindas do banco de dados MongoDB.

<h1>Como usar</h1>

Após importar o script formatDate.js basta chamar a função FormatDate(value, type)
Onde value é a data que você quer formatar e type o novo tipo, exemplos:

FormatDate('2020-01-31', 'dd/mm/yyyy') = 31/01/2020

Da para usar para preencher um input do tipo data que aceita datas do tipo yyyy-mm-dd, bastando:

inputDate.value = FormatDate('2020-01-31', 'yyyy-mm-dd');

Obs: O script faz uma correção que usando apenas o .toDateString() sempre perdia um dia da dada, por causa do fuso horário.
