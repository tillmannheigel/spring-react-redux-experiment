package de.tillmannheigel.reactreduxdemo;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import de.tillmannheigel.reactreduxdemo.model.Book;
import de.tillmannheigel.reactreduxdemo.model.State;

@org.springframework.stereotype.Controller
public class Controller {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @GetMapping("/")
    public String index(Model model) throws JsonProcessingException {
        State initialState = State.builder().build();
        model.addAttribute("books", List.of(Book.builder().title("Buch 1").author("Autor 1").build(), Book.builder().title("Buch 2").author("Autor 2").build()));
        model.addAttribute("state", OBJECT_MAPPER.writeValueAsString(initialState));
        return "index";
    }
}
