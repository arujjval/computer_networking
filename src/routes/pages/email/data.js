
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "how does an e-mail work?",
    
    sections: [
        {
            title: " ",
            content: `Email, as we all know, is a vital communication tool in today's world. But have you ever wondered how it actually works behind the scenes? Let's dive into it!
            `
        },
        {
            title: " ",
            content: `<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220222170044/DV.jpg" alt="diagram"/>`
        },
        {
            title: "Application Layer Protocol",
            content: `Email functions through various protocols to send and receive messages. The key protocol for sending emails is SMTP (Simple Mail Transfer Protocol), while POP3 (Post Office Protocol version 3) or IMAP (Internet Message Access Protocol) are used for receiving emails.`
        },
        {
            title: "Transport Layer Protocol",
            content: `TCP (Transmission Control Protocol) is the transport layer protocol that guarantees reliable email delivery by ensuring no data loss during transmission.`
        },
        {
            title: "Sending an Email",
            content: `When you send an email, your email client gets in touch with your email provider's SMTP server. This server acts as an intermediary,  forwarding your email to the recipient's SMTP server. If both sender and recipient use the same email provider, the email is transferred directly, bypassing the intermediary server.`
        },
        {
            title: "receiving an email",
            content: `To receive emails, you can leverage POP3 or IMAP. POP3 retrieves emails from the POP server to your email client and can then erase them from the server. IMAP, on the other hand, stores your emails on the server and keeps them synced across all your devices, allowing you to view and manage them from any device.
            `
        },
        {
            title: " ",
            content: `So overall, email works by using a combination of protocols at the application layer (SMTP, POP3, and IMAP) and TCP at the transport layer to ensure reliable email communication and delivery across various devices and platforms.`
        },
    ],  
}

export default data;