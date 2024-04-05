
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "cookies",
    
    sections: [
        {
            title: " ",
            content: `So, we've talked about how HTTP is a stateless protocol, meaning that every time you visit a website, it treats you like a new visitor, even if you've been there before. But in reality, when you visit a site like Amazon and then come back later, it still remembers your login, your items in the cart, and other preferences. How does it do that? The answer lies in cookies.
            `
        },
        {
            title: "What are cookies?",
            content: `A cookie is a small piece of data, a unique string, that's stored in your browser. It's like a little note that the website leaves for your browser to remember you by. When you first visit a website, it sets a cookie on your browser.
            Whenever you make a new request to the website, your browser sends the cookie along with it in the request's header. This tells the server, "Hey, it's me again, and here's my cookie." The server then looks up the cookie in its database to see who you are and what you've been up to on the site.
            `
        },
        {
            title: "Setting and Expiring Cookies",
            content: `When a server wants to set a cookie, it includes a special tag called "set-cookie" in the response header. This tag contains information like the cookie's name, value, expiration date, and other details. This tells your browser to store the cookie and remember it for future visits. Cookies can also have expiration dates, so they don't stick around forever.
            `
        },
        {
            title: "third-party cookies",
            content: `While cookies are useful for remembering your preferences, they can also be misused by websites and companies to track your online behavior. Third-party cookies is one of this kind. Third-party cookies are cookies that are set by websites other than the one you're currently visiting. They are often used by advertisers and third-party services to track your online activity across different websites. For example, if you visit a website like "xyz.com" that has integrated ads from a third-party advertising network, that network may set a cookie in your browser to track your browsing behavior and show you targeted ads.
            `
        },
        {
            title: " ",
            content: `Check out this <a href="https://developer.chrome.com/docs/devtools/application/cookies">resource</a> to know more about working with cookies.`
        },
    ],  
}

export default data;