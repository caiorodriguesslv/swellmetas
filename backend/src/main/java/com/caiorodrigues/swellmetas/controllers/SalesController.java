package com.caiorodrigues.swellmetas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.caiorodrigues.swellmetas.entities.Sale;
import com.caiorodrigues.swellmetas.services.SalesService;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {
		
	
		@Autowired
		private SalesService service;
		
		@GetMapping
		public Page<Sale> findSales(
				@RequestParam(value = "minDate", defaultValue = "") String minDate, 
				@RequestParam(value = "maxDate", defaultValue = "") String maxDate, 
				Pageable pageable){
			return service.findSales(minDate, maxDate, pageable);
		}
}
