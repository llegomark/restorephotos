const faqs = [
    {
        id: 1,
        question: "What is Facephotos.ai?",
        answer:
            "Facephotos.ai is a website that utilizes cutting-edge Artificial Intelligence (AI) technology to restore old and blurry face photos.",
    },
    {
        id: 2,
        question: "How does the website work?",
        answer:
            "Users can upload any photo to the website, which will then be sent through the GFPGAN model using a Next.js API route. The restored photo will then be returned to the user.",
    },
    {
        id: 3,
        question: "What is the GFPGAN model?",
        answer:
            "The GFPGAN model is a practical algorithm for real-world face restoration. It leverages rich and diverse priors encapsulated in a pre-trained face GAN (e.g., StyleGAN2) for blind face restoration. This means the model can restore the most heavily degraded or blurry photos with high accuracy.",
    },
    {
        id: 4,
        question: "Is the service free?",
        answer:
            "Yes, the service is currently free to use. However, please note that we will be displaying advertisements on the website in order to help support our service and continue to improve it for our users. We may also consider offering a subscription-based model in the future.",
    },
    {
        id: 5,
        question: "Can I learn more about the technology behind Facephotos.ai?",
        answer:
            "Yes, the website includes links to the GFPGAN Github page and the research paper on the technology.",
    },
    {
        id: 6,
        question: "Who can benefit from Facephotos.ai?",
        answer:
            "Anyone looking to restore their old and blurry face photos can benefit from Facephotos.ai. With its user-friendly interface and advanced AI technology, the website makes it easy to bring your memories back to life.",
    },
    {
        id: 7,
        question: "What is Facephotos.ai's privacy policy?",
        answer:
            "Facephotos.ai takes user privacy seriously and has implemented strict policies to protect user information. The pictures uploaded by the user will only be saved for a limited time and will be deleted after the restoration process is complete. The user provided pictures will not be used as training materials, and we will never share, sell, or rent user's personal information to any third party.",
    },
    {
        id: 8,
        question: "Will the picture I upload be saved permanently?",
        answer:
            "No, the picture will only be saved temporarily for the purpose of the restoration process. Once the restoration process is complete, the picture will be deleted.",
    },
    {
        id: 9,
        question: "Will the picture I upload be used for any other purpose?",
        answer:
            "No, the picture will only be used for the purpose of the restoration process and will not be used for any other purpose.",
    },
    {
        id: 10,
        question: "Will my personal information be shared with any third party?",
        answer:
            "No, Facephotos.ai does not share, sell, or rent any personal information to any third party.",
    },
]

export default function FAQ() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
                <div className="max-w-2xl lg:mx-auto lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions (FAQ)</h2>
                    <p className="mt-4 text-gray-500">
                    The FAQ serves as a quick and easy reference guide for users who want to learn more about Facephotos.ai, and can help users find answers to common questions they may have about the service.
                    </p>
                </div>
                <div className="mt-20">
                    <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                                <dd className="mt-3 text-gray-500">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}  