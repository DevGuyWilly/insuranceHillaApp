package com.example.application;

import java.io.IOException;
import java.time.Instant;

import io.micrometer.common.lang.NonNull;
import io.socket.engineio.server.Emitter;
import io.socket.engineio.server.Emitter.Listener;
import io.socket.engineio.server.EngineIoServer;
import io.socket.socketio.server.SocketIoNamespace;
import io.socket.socketio.server.SocketIoServer;
import io.socket.socketio.server.SocketIoSocket;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
@WebServlet("/socket.io/*")
public class SocketIoServlet extends HttpServlet {

    public static class Message {
        public @NonNull String text;
        public Instant time;
        public @NonNull String username;
        public  int userColorIndex;
        public String userAbbr;
    }

    private final EngineIoServer mEngineIoServer = new EngineIoServer();
    private final SocketIoServer mSocketIoServer = new SocketIoServer(mEngineIoServer);

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
        mEngineIoServer.handleRequest(request, response);

        String path = request.getPathInfo();
        SocketIoNamespace namespace = mSocketIoServer.namespace(path);
       
        namespace.on("connection", (Listener) new Emitter() {
            // @Override
            @SuppressWarnings("unused")
            public void call(Object... args) {
                SocketIoSocket socket = (SocketIoSocket) args[0];
                socket.on("foo", new Emitter.Listener() {
                    // @Override
                    public void call(Object... args) {
                        socket.send("foo", "bar args", 1);
                    }
                });
            }
        });     
    }
}


// namespace.on("connnection", (Listener) new Emitter() {});

// namespace.on("connection", (Listener) socket -> {
//     System.out.println("Socket connected on path: " + path);
//     // Additional logic for handling socket connection

//     // Handling the "foo" event on the socket
    
// });  