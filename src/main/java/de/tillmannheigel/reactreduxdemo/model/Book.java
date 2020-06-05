package de.tillmannheigel.reactreduxdemo.model;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Book {
    String title;
    String author;
}
