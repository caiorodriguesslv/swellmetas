package com.caiorodrigues.swellmetas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caiorodrigues.swellmetas.entities.Sale;
import com.caiorodrigues.swellmetas.repositories.SalesRepository;

@Service
public class SalesService {
	
	@Autowired
	private SalesRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}
}
