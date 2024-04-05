
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "status code",
    
    sections: [
        {
            title: " ",
            content: `When you send a request to a server, you need to know what happened to that request, right? Did it go through smoothly or did something go wrong? That's where status codes come in. They're like little messages from the server telling you what's going on. Table below shows the meaning of status code of various ranges.
            `
        },
        {
            title: " ",
            content: `<img src='https://static.semrush.com/blog/uploads/media/3a/79/3a7950050980a0e2de37bc1a632cc321/wmkPPztB7KlAC7fPzO0-85NG8t0B9IEh4JEbt_ELP1pvJMhof9vt2pDSwrBZeXodoqaoV_Es1Rur-AWoeoOdV-RIde2vjqyMQuxrqch62uXZ1bsI0yaaMWx-f4cg4BlmOQrI2kFJ6CPXECCd69KeopE.png' alt='diagram' />`
        },
        {
            title: "some common HTTP Status Codes",
            content: `A 200 code means everything went well.<br>
            A 404 code means the server couldn't find what you were looking for.<br>
            A 400 code means there may be something wrong with your request, like missing information.<br>
            A 500 code means something went wrong on the server's end.
            `
        },
    ],  
}

export default data;