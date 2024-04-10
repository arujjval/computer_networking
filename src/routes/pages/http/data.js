
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "HTTP",
    
    sections: [
        {
            title: " ",
            content: `HTTP (Hypertext Transfer Protocol) is the foundation of web communication. It's a application layer protocol that govern how data travels between web browsers (clients) and web servers. Imagine a conversation between two people; HTTP establishes the structure for those exchanges on the web.
            `
        },
        {
            title: " ",
            content: `<img src="https://media.geeksforgeeks.org/wp-content/uploads/20230521175108/ImageOfHTTPRequestResponse-1024x580-660.webp" alt="image" /> `
        },
        {
            title: "Client-Server Model: The Core",
            content: `HTTP operates using a simple client-server model. A client (your web browser) initiates by sending an HTTP request to the server, specifying what it wants (a webpage, image, etc.). The server receives the request, retrieves the information, and sends back an HTTP response with the data and additional details (status codes and headers). Finally, your browser interprets the response and displays the requested content.
            `
        },
        {
            title: "Key Concepts in HTTP",
            content: `<big>HTTP Methods: </big><br>  Verbs like GET, POST, PUT, and DELETE define the actions the client wants to perform on the server. GET retrieves data, POST submits data (like forms), PUT updates data, and DELETE removes data.<br><br>
            <big>Stateless Protocol: </big><br>  HTTP is stateless, meaning each request-response exchange is independent. The server doesn't inherently remember past interactions with the client.<br><br>
            <big>TCP for Reliability: </big><br>   While HTTP operates at the application layer, it relies on the Transport Control Protocol (TCP) at the transport layer to ensure reliable data transmission (correct order, no errors).<br><br>
            `
        },
        {
            title: "URL",
            content: `Every web resource (webpage, image, etc.) has a unique address called a URL (Uniform Resource Locator). It specifies the location and access method for the resource. For example, "https://www.google.com/search?q=http" specifies retrieving search results for "HTTP" from Google. 
            Additionally, both requests and responses include headers, which are extra lines of information providing details about the data being exchanged, such as the content type (text, image, etc.), encoding format, and cookies (for maintaining session information).
            `
        },
    ],  
}

export default data;