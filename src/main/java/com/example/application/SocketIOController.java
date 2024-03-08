package com.example.application;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.annotation.OnConnect;
import com.corundumstudio.socketio.annotation.OnDisconnect;
import com.corundumstudio.socketio.annotation.OnEvent;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;


@AnonymousAllowed
@Controller
@Endpoint
public class SocketIOController {
    
    private final SocketIOServer socketIOServer;

    @Autowired
    public SocketIOController(SocketIOServer socketIOServer) {
        this.socketIOServer = socketIOServer;
    }

    @OnConnect
    public void onConnect() {
        System.out.println("Client connected");
    }

    @OnDisconnect
    public void onDisconnect() {
        System.out.println("Client disconnected");
    }

    @OnEvent("message")
    public void onMessage(SocketIOClient client, String message) {
        System.out.println("Received message from client: " + message);

        // Broadcast the message to all connected clients
        socketIOServer.getBroadcastOperations().sendEvent("message", message);
    }
}
