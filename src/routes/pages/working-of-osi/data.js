
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "Working of OSI Model",
    
    sections: [
        {
            title: " ",
            content: `To further understand the OSI model, let's see how sending a message to your friend looks like:
            `
        },
        {
            title: "application layer",
            content: `This is where your message originates. Imagine you're typing a message to your friend using WhatsApp or writing an email. You compose the message and decide what you want to say.`
        },
        {
            title: "presentation layer",
            content: ` After typing your message, you might want to format it nicely. This layer ensures that your text looks good and is easy to understand. It might convert your message into a format that's suitable for sending over the internet, like converting special characters into codes.
            `
        },
        {
            title: "session layer",
            content: `Now that your message is ready, you need to establish a connection with your friend's device. This layer sets up and manages the connection. It might involve logging in to your messaging app or verifying your identity to ensure secure communication.
            `
        },
        {
            title: "transport layer",
            content: `Your message is too big to send all at once, so it's broken down into smaller pieces called packets. Each packet is labeled with information about where it came from and where it's going. This layer ensures that all the packets reach your friend's device in the correct order and without errors.`
        },
        {
            title: "network layer",
            content: `Your message needs to travel across different networks to reach your friend. This layer handles the routing, deciding the best path for your message to take. It adds information about the destination address so that routers along the way know where to send it next.`
        },
        {
            title: "data link layer",
            content: ` Now that your message has reached your friend's network, it needs to be delivered to their device. This layer adds physical addresses, like MAC addresses, to the packets so that devices on the local network know where to send them. It also checks for errors and ensures reliable delivery.`
        },
        {
            title: "physical layer",
            content: `Finally, your message is sent over the physical medium, whether it's through cables, wireless signals, or other means. This layer converts the digital data into signals that can be transmitted and received by devices. Your friend's device receives the signals, converts them back into digital data, and passes them up the layers of the OSI model for processing.`
        },
        {
            title: " ",
            content: `So this is an example of how the OSI model works in practice. Concept behind OSI is extremely important for understanding how networks function.`
        },
    ],  
}

export default data;