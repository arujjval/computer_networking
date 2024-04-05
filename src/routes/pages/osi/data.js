
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "osi model",
    
    sections: [
        {
            title: " ",
            content: `The OSI (Open Systems Interconnection) model is like a blueprint that helps computers talk to each other in a standard way. It breaks down communication into different layers, kind of like building blocks. Each layer has a specific job to do, making sure that messages can travel smoothly between computers, no matter what kind they are. This model ensures that different computers, even if they're made by different companies, can understand each other when they communicate over a network
            `
        },
        {
            title: " ",
            content: `<img src="https://cdn.educba.com/academy/wp-content/uploads/2019/07/OSI-Model.png" alt="diagram"/>`
        },
        {
            title: "application layer",
            content: `The application layer is the first layer in the OSI model. It's all about the software that users interact with, like web browsers, messaging apps, and email clients. When you send data from an application, it goes to the presentation layer next.`
        },
        {
            title: "presentation layer",
            content: `The presentation layer, the second layer of the OSI model, focuses on data representation and translation. It ensures that data exchanged between applications is formatted, encrypted, and compressed correctly for transmission. The layer handles tasks like data encryption, decryption, compression, and translation between different data formats. Additionally, it provides abstraction to shield upper layers from the complexities of data representation. The presentation layer's protocols include SSL for encryption and decryption, ensuring secure data transmission.
            `
        },
        {
            title: "session layer",
            content: `The session layer, the third layer of the OSI model, is responsible for managing communication sessions between devices on a network. It establishes, maintains, and terminates connections or sessions, handling authentication, authorization, and data transmission coordination. While it relies on the transport layer for actual data transmission, the session layer ensures sessions remain active and manages the orderly exchange of data packets. Its functions include session setup, authentication, authorization, data transmission coordination, and managing sessions for applications such as online shopping.
            `
        },
        {
            title: "transport layer",
            content: `The transport layer, the fourth layer of the OSI model, manages the transfer of data between systems. It receives data from the session layer and ensures its reliable delivery to the destination. This layer employs protocols like TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) for data transfer.<br><br>

            TCP provides reliable, connection-oriented transmission, ensuring that data is delivered accurately and in the correct order. It divides data into segments, assigns sequence numbers to ensure proper reassembly at the destination, and implements flow control and error detection mechanisms to manage data transfer efficiently.<br><br>
            
            UDP, on the other hand, offers faster, connectionless transmission but does not guarantee delivery or order. It's commonly used for real-time applications like video conferencing and gaming, where speed is prioritized over reliability.
            `
        },
        {
            title: "network layer",
            content: `The network layer, the fifth layer of the OSI model, is responsible for routing data packets between different networks. It ensures that data segments are transmitted from one computer to another across various networks.<br><br>

            One of the primary functions of the network layer is logical addressing, where each device on the network is assigned a unique IP address. This addressing enables the network layer to route data packets to their correct destinations. Additionally, the network layer performs routing, determining the best path for data transmission based on factors like IP addresses and network topology.<br><br>
            
            The network layer also handles tasks like subnet masking and load balancing to optimize data transfer across networks. It uses routing protocols like Dijkstra's algorithm to efficiently transport data packets and prevent network congestion.`
        },
        {
            title: "data link layer",
            content: `The data link layer, the sixth layer of the OSI model, facilitates direct communication between devices on the same network. It receives data packets from the network layer, which contain the IP addresses of both the sender and receiver.<br><br>

            At the data link layer, two types of addressing are performed: logical addressing, which involves IP addresses assigned at the network layer, and physical addressing, which involves MAC addresses. MAC addresses uniquely identify network interfaces on devices.<br><br>
            
            When a data packet is received, the data link layer assigns MAC addresses to form a frame, which is a data unit of the data link layer. Frames contain both logical and physical addresses, enabling communication between devices on the same network.<br><br>
            
            The data link layer controls how data is transmitted and received from network media using techniques like media access control and error detection. It ensures efficient transfer of frames between devices, allowing upper layers of the OSI model to access and utilize network resources effectively.
            `
        },
        {
            title: "physical layer",
            content: `The physical layer, the bottom layer of the OSI model, is responsible for transmitting raw bits over the physical medium, such as cables, wires, or wireless signals. It deals with hardware components and the physical transmission of data.<br><br>

            In the physical layer, data is represented as electrical signals, light signals (in optical fiber cables), or radio signals (in wireless communication). These signals are transmitted over the appropriate medium.<br><br>
            
            The physical layer receives data from higher layers in the form of zeros and ones and converts it into signals suitable for transmission over the physical medium. At the receiving end, it receives the signals, converts them back into bits, and passes them to the data link layer for further processing.`
        },
    ],  
}

export default data;