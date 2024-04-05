
//title with a scape and no text acts as image holder or just a paragraph with no heading

const data= {
    title: "internet service providers",
    
    sections: [
        {
            title: " ",
            content: `ISPs play a crucial role in providing individuals and businesses with access to the internet. They act as intermediaries between users and the vast network of interconnected servers and websites that comprise the internet.
            `
        },
        {
            title: "Role of ISPs",
            content: ` ISPs offer various services, including internet connectivity, web hosting, email services, and domain registration. They manage the infrastructure required to transmit data between users and the internet, ensuring reliable and high-speed connectivity.`
        },
        {
            title: " ",
            content: `<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Internet_Connectivity_Distribution_%26_Core.svg/440px-Internet_Connectivity_Distribution_%26_Core.svg.png' alt='diagram' />`
        },
        {
            title: "Tier 1 ISP",
            content: `These are the top-level internet service providers in the world, with extensive global networks and direct connections to the internet backbone. Tier 1 ISPs do not pay for transit from other providers and have significant peering agreements with other networks. They maintain extensive network infrastructure, including fiber-optic cables, undersea cables, and satellite links, to ensure global connectivity. Tata Communications is an example of a Tier 1 ISP in India.`
        },
        {
            title: "Tier 2 ISP",
            content: `Tier 2 ISPs are regional or national providers that purchase internet transit from Tier 1 ISPs to connect their customers to the broader internet. They may also have agreements with other ISPs for peering and exchange of traffic. Airtel is one of the prominent Tier 2 ISPs in India.`
        },
        {
            title: "Difference between Tier 1 and Tier 2 ISP",
            content: `ISPs vary in terms of their geographical coverage and service offerings. While Tier 1 ISPs focus on global connectivity, Tier 2 ISPs may cater to specific regions or markets within a country. Some ISPs offer a range of services, including broadband internet, mobile data, and enterprise solutions, to meet diverse customer needs`
        },
        {
            title: " ",
            content: `ISPs invest heavily in building and maintaining their network infrastructure to meet the growing demand for internet services. This includes deploying new technologies, expanding network capacity, and upgrading existing infrastructure to support higher speeds and bandwidth.`
        },
    ],  
}

export default data;