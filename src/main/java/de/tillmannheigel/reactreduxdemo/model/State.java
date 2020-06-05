package de.tillmannheigel.reactreduxdemo.model;

import java.util.List;

import lombok.Builder;
import lombok.Singular;
import lombok.Value;

@Value
@Builder
public class State {
    @Singular
    List<String> filters;
    @Builder.Default
    String sort = "default";
    @Singular
    List<Book> books;
}
