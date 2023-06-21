package com.example.SmartFuel.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

@RequestMapping("/Infos")
public String prendreinfos() {
	return "infos ya kho";
}

}

