package de.tillmannheigel.reactreduxdemo;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import de.tillmannheigel.reactreduxdemo.model.State;

@org.springframework.stereotype.Controller
public class Controller {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @GetMapping("/")
    public String index(Model model) throws JsonProcessingException {
        State defaultState = State.builder().build();
        model.addAttribute("state", OBJECT_MAPPER.writeValueAsString(defaultState));
        return "index";
    }
}
