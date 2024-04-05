
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "ports",
    
    sections: [
        {
            title: " ",
            content: `In networking, while IP addresses identify devices, ports specify the specific applications running on those devices. Ports enable multiple processes or applications to operate simultaneously on a single device. For instance, a web server might use port 80 for HTTP requests, while an email server might utilize port 25 for SMTP communication.
            `
        },
        {
            title: "Ephemeral Ports",
            content: `To manage multiple instances of the same application, devices utilize ephemeral ports. These ports are dynamically assigned by the operating system to facilitate communication between applications and external entities. Ephemeral ports are temporary and automatically freed up once the corresponding application process terminates.
            `
        },
        {
            title: "Client-Side vs. Server-Side Ports",
            content: `Ephemeral ports are commonly used on the client side, where applications generate temporary port numbers to establish connections. Conversely, servers typically employ fixed, well-known port numbers to ensure consistency and enable clients to locate and communicate with them reliably. An example of a well-known port is port 27017, which is commonly used for MongoDB database connections and port 80 for HTTP.`
        },
        {
            title: "Importance of Port Numbers",
            content: `In client-server communication, knowing the port number is crucial for establishing connections. While servers maintain fixed port assignments, clients may utilize ephemeral ports for outbound connections. This dynamic allocation of ports enables efficient and flexible communication between devices.
            `
        },
    ],  
}

export default data;