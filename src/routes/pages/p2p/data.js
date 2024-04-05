
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "client server architecture",
    
    sections: [
        {
            title: " ",
            content: `let's discuss the client and server architecture. In this context, your computer or device acts as the client, while the system hosting the website (in this case, Google's servers) is the server.
            `
        },
        {
            title: "domain name system",
            content: `When you type google.com and hit enter, your client (browser) initiates a request to access the Google website. However, it can't directly communicate with the server using the domain name alone. It needs to translate google.com into an IP address, which is a unique numeric identifier assigned to the server.

            This is where the Domain Name System (DNS) comes into play. Your browser sends a request to a DNS server, asking for the IP address associated with google.com. The DNS server responds with the corresponding IP address, allowing your browser to establish a connection with the correct server.
            `
        },
        {
            title: " ",
            content: `<img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Client_Server_Architecture_1.png' alt='diagram' />`
        },
        {
            title: "protocols",
            content: `The interaction between clients and servers is governed by protocols like HTTP (Hypertext Transfer Protocol) for web browsing, SMTP (Simple Mail Transfer Protocol) for email, and others. These protocols define the rules and conventions for communication, ensuring that data is transmitted accurately and efficiently between devices.
            `
        },
        {
            title: " ",
            content: `Moreover, the concept of server scalability comes into play in scenarios where millions of users simultaneously access a service. Companies like Google, Facebook, and Microsoft maintain massive data centers housing thousands of servers to handle the influx of user requests. These servers work in tandem to deliver a seamless user experience, whether it's streaming videos, browsing social media, or accessing cloud-based services.`
        },
    ],  
}

export default data;