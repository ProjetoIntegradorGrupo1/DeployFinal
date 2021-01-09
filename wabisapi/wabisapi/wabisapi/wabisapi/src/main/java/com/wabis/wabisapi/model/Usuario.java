package com.wabis.wabisapi.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "usuario")

public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Size(max = 100)
	private String nome;

	@Size(max = 100)
	@NotNull
	private String email;

	@NotNull
	private String senha;
	
	//private int tipoDef;

	@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
	 @JsonIgnoreProperties("usuario") 
	private List<Postagem> postagem;
	 

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	 public List<Postagem> getPostagem() { 
		 return postagem; 
		 }
	  
	 public void setPostagem(List<Postagem> postagem) 
	 { this.postagem = postagem;
	  }
	 
}
