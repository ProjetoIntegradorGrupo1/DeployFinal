package com.wabis.wabisapi.repository;

import java.util.List;

import com.wabis.wabisapi.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {
	
	public List<Empresa> findAllByNomeContainingIgnoreCase (String nome);

}
