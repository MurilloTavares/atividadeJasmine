function Pessoa(_p_nome, _s_nome, _idade, _cor_olho){
	var p_nome = _p_nome;
	var s_nome = _s_nome;
	var idade = _idade;
	var cor_olho = _cor_olho;

	this.nome = function(){
		return p_nome + " " + _s_nome;
	};

	this.nome_idade = function(){
		return p_nome + " tem idade igual a " + idade;
	}

	this.nome_cor_olho = function(){
		return p_nome + " tem olho com cor " + cor_olho;
	}
}