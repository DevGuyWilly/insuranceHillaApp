package com.example.application;

import java.time.ZonedDateTime;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;
import dev.hilla.runtime.transfertypes.Flux;
import io.micrometer.common.lang.NonNull;
import reactor.core.publisher.Sinks.Many;

@Endpoint
@AnonymousAllowed
public class ChatEndpoint {
    public static class Message {
        public @NonNull String text;
        public ZonedDateTime time;
        public @NonNull String username;
    }

    private Many<Message> chatsink;
    private Flux<Message>  chat;

    ChatEndpoint() {
        
    }
}
