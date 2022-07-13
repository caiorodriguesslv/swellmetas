package com.caiorodrigues.swellmetas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.caiorodrigues.swellmetas.entities.Sale;
import com.caiorodrigues.swellmetas.services.SalesService;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {
		
	
		@Autowired
		private SalesService service;
		
		@GetMapping
		public List<Sale> findSales(){
			return service.findSales();
		}
}
