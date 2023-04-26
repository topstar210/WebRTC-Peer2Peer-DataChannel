let users = [];
let messages = [];
let _this = null;

class WebSockets {
    constructor() {
        _this = this;
    }

    connection(client) {
        client.on("message", (data) => {
            client.broadcast.emit("message", data);
        })
    }
}

export default new WebSockets();