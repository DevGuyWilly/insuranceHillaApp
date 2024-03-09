package com.example.application;

import java.time.Instant;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import io.micrometer.common.lang.NonNull;
import reactor.core.publisher.Sinks;
import reactor.core.publisher.Sinks.EmitResult;
import reactor.core.publisher.Sinks.Many;

@Endpoint
@AnonymousAllowed
public class ChatEndpoint {

    public static class Message {
        public @NonNull String text;
        public Instant time;
        public @NonNull String username;
        public  int userColorIndex;
        public String userAbbr;
    }

    private final Many<Message> chatSink = Sinks.many().multicast().directBestEffort();;
    private final reactor.core.publisher.Flux<Message> chat = chatSink.asFlux().replay(10).autoConnect();;

    public reactor.core.publisher.Flux<Message> join() {
        return chat;
    }
    
    public void send(Message message) {
        message.time = Instant.now();
        chatSink.emitNext(message,
        (signalType, emitResult) -> emitResult == EmitResult.FAIL_NON_SERIALIZED);
    }

}
