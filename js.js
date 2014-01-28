// REP
function toppontorep(){
	$('#content')
	.html("<input type='button' onclick='rep1()' value='Lê arquivo AFD mas não insere os pontos no banco de dados \"TopPonto\"' /><br/><input type='button' onclick='rep2()' value='Lê arquivo AFD mas não armazena os pontos no banco de dados no \"TopPonto REP\"' /><br/><input type='button' onclick='rt6()' value='Erro Run-time 6' /><br/><input type='button' onclick='rt9()' value='Erro Run-time 9' /><br/><input type='button' onclick='rt15()' value='Erro Run-time 15' />");
}
function rep1(){
	$('#content')
	.html("<div class='possibilidades-erros'><b>1ª Possibilidade</b><p>Verifique o diretório especificado no \"TopPonto\" e no \"Gerenciador de Inners Rep\";<br/>Caso estejam diferentes, normalize-os.<hr><b>2ª Possibilidade</b><p>Faça a coleta dos pontos de forma manual, através de um pendrive;<br/>Se o arquivo for não for detectado, mas não ler nenhum ponto, verifique o número de série do Rep no \"TopPonto\":<p>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#666'>Cadastros &raquo; REP &raquo; Número de Série</font><p>Verifique o número de série no \"Gerenciador de Inners Rep\";<br/>Caso estejam diferentes, atualize o \"TopPonto\" para igualar ao do \"Gerenciador de Inners Rep\".<hr><b>3ª Possibilidade</b><p>Tire um \"Print Screen\" das informações do Rep no \"Gerenciador de Inners Rep\" (salvando-o como imagem pelo \"Paint\"), delete o Rep existente e configure um novo de acordo com as informações do antigo.<hr></div>");
}
	function rep2(){
$('#content')
	.html("<div class='possibilidades-erros'>Verificar se o número do cartão e número do PIS no \"TopPonto\" é igual ao que consta no \"Gerenciador REP\". Caso esteja, é necessário atualizar para a numeração correta. Após atualizar, para atualizar todos os registros anteriores, siga a seguinte ordem:<p>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#666'>Cadastros &raquo; REP &raquo; Ultimo NSR</font><p>Nesse campo, substitua o valor que estiver por 0. Reinicie o programa e aguarde a coleta.<hr></div>");
}
function rt6(){
	$('#content')
	.html("<div class='possibilidades-erros'>Apague a chave de comunicação no próprio Rep:<p>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#666'>Menu &raquo; Configurações &raquo; Chave comunic. &raquo; Apagar chave</font><p>Agora, reenvie a chave de comunicação através do \"Gerenciador de Rep\": Na aba \"Geral\", clique em \"Enviar configurações\".</div>");
}
function rt9(){
	$('#content')
	.html("<div class='possibilidades-erros'>No \"TopPonto Rep\", abra o menu \"Ferramentas\" e em \"Banco de dados\", clique na opção \"Compactar e reparar\". O erro será corrigido após a reinicialização do programa.</div>");
}
function rt15(){
	$('#content')
	.html("<div class='possibilidades-erros'>Desligue o Rep por 30 segundos;<br/>Ligue-o novamente;<br/>Faça um teste de comunicação com o Rep:<p>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#666'>Rep &raquo; (Ícone) Alterar &raquo; Testar &raquo; Enviar</font></div>");
}
// SQL Server
function sql(){
	$('#content')
	.html("<input type='button' onclick='getbkp()' value='Restaurar backup (*.bak)' />");
}
function getbkp(){
	$('#content')
	.html("<div class='possibilidades-erros'><span class='titulo'>Idioma: Português BR</span><p>Clique em \"Banco de dados\";<br/>Clique com o botão direito em TopAcesso;<br/>Siga o seguinte caminho:<p>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#666'>Tarefas &raquo; Restaurar &raquo; Banco de Dados</font><p>Marque a opção \"Dispositivo de origem\";<br/>Clique em \"...\";<br/>Indique o caminho que está localizado o arquivo \"*.bak\";<br/>Selecione o banco de dados marcando a caixa de seleção correspondente;<br/>Clique em \"Opções\";<br/>Selecione \"Sobrescrever a base de dados existente\" e clique em \"Ok\";<hr><span class='titulo'>Idioma: Inglês EUA</span><p>Clique em \"Databases\";<br/>Clique com o botão direito em TopAcesso;<br/>Siga o seguinte caminho:<p>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#666'>Tasks &raquo; Restore &raquo; Database</font><p>Marque a opção \"From device\";<br/>Clique em \"...\";<br/>Indique o caminho que está localizado o arquivo \"*.bak\";<br/>Clique em \"Add\";<br/>Selecione o banco de dados marcando a caixa de seleção correspondente;<br/>Clique em \"Options\";<br/>Selecione \"Overwrite the existing database\" e clique em \"Ok\";<p></div>");
}
// Catracas
function catraca(){
	$('#content')
	.html("<input type='button' onclick='ticket1()' value='Há batidas gravadas e nenhum bilhete coletado' />");
}
function ticket1(){
	$('#content')
	.html("<div class='possibilidades-erros'>Configure a exportação dos arquivos:<p>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#666'>Coleta de dados &raquo; Configurar arquivos</font></p>Clique na seta para a direita e selecione os Inners que deseja coletar;<br/>Designe o caminho do arquivo a exportar;<br/>Na aba \"Tipos de bilhetes\", assegure-se de estarem marcadas todas as opções;<br/>Na aba \"Formato do arquivo\", deixe selcionado o item \"TopPonto 4\";<br/>Clique em fechar e confirme a gravação dos dados;<br/>Desligue o equipamento e ligue-o novamente, pressionando as teclas 7 e 9;<br/>Ao apresentar a mensagem \"Ler todo o buffer? Confirma?\", confirme;<br/>Efetue a coleta do gerenciador.</div>");
}