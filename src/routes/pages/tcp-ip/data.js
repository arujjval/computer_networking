
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "tcp ip model",
    
    sections: [
        {
            title: " ",
            content: `The TCP/IP model, also known as the Internet Protocol Suite, differs from the OSI model primarily in its layer structure, where it has only 5 layers.
            `
        },
        {
            title: " ",
            content: `<img src='https://media.geeksforgeeks.org/wp-content/uploads/20230417045622/OSI-vs-TCP-vs-Hybrid-2.webp' alt='diagram' />`
        },
        {
            title: " ",
            content: `Here, application layer combines functionalities of OSI's Application, Presentation, and Session Layers.<br><br>
            In essence, while both models serve as frameworks for understanding network communication, the TCP/IP model is more practically used and reflects the true implementation of network protocols, particularly in the context of the internet.`
        },
    ],  
}

export default data;