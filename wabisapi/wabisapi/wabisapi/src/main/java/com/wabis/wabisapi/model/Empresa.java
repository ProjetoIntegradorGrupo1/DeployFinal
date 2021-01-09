package com.wabis.wabisapi.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "empresa")
public class Empresa {
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 1, max = 50)
	private String nome;

	 @OneToMany(mappedBy = "empresa", cascade = CascadeType.ALL)
	 @JsonIgnoreProperties("empresa") 
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

	 public List<Postagem> getPostagem() { 
		 return postagem; 
		 }
	  
	 public void setPostagem(List<Postagem> postagem) { 
		 this.postagem = postagem;
	 }
	 
}
