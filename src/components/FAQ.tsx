const faqs = [
  {
    id: 1,
    question: "What is Facephotos.ai's privacy policy?",
    answer:
      "Facephotos.ai takes user privacy seriously and has implemented strict policies to protect user information. Photos uploaded by users will only be saved temporarily and deleted after restoration. They will not be used as training materials, and personal information will not be shared with any third party.",
  },
  {
    id: 2,
    question: "Will the picture I upload be saved permanently?",
    answer:
      "No, the picture will only be temporarily saved for restoration and deleted after completion.",
  },
  {
    id: 3,
    question: "Will the picture I upload to be used for any other purpose?",
    answer:
      "No, the picture will only be used for the restoration process and will not be used for any other purpose.",
  },
  {
    id: 4,
    question: "Will my personal information be shared with any third party?",
    answer:
      "Facephotos.ai does not share, sell, or rent personal information to any third party.",
  },
  {
    id: 5,
    question: "What is Facephotos.ai?",
    answer:
      "Facephotos.ai is a website that utilizes advanced Artificial Intelligence (AI) technology to restore old and blurry face photos.",
  },
  {
    id: 6,
    question: "How does the website work?",
    answer:
      "When a user uploads a photo to the website, it will be sent through the GFPGAN model created by ARC Lab, Tencent PCG, using a Next.js API route. Then, the restored photo will be returned to the user.",
  },
  {
    id: 7,
    question: "What is the GFPGAN model?",
    answer:
      "The GFPGAN model is a practical algorithm for real-world face restoration. It utilizes rich and diverse priors encapsulated in a pre-trained face GAN (e.g., StyleGAN2) for blind face restoration. This means the model can restore heavily degraded or blurry photos with high accuracy.",
  },
  {
    id: 8,
    question: "What is the Generative Facial Prior (GFP) used in GFP-GAN?",
    answer:
      "The Generative Facial Prior (GFP) is a powerful generative model encapsulated in a pre-trained face GAN, such as StyleGAN2, that is used in the GFP-GAN model for blind face restoration. It leverages rich and diverse facial priors to restore realistic and faithful details in heavily degraded or blurry photos.",
  },
  {
    id: 9,
    question: "What is the main advantage of the GFPGAN model used on Facephotos.ai?",
    answer:
      "The main advantage of the GFPGAN model is its ability to restore heavily degraded or blurry photos with high accuracy. This is achieved by leveraging rich and diverse priors encapsulated in a pre-trained face GAN (e.g., StyleGAN2) for blind face restoration and incorporating this Generative Facial Prior (GFP) into the restoration process through novel channel-split spatial feature transform layers. This allows for a good balance of realness and fidelity to be achieved with a single forward pass, making it a more efficient solution than traditional GAN inversion methods.",
  },
  {
    id: 10,
    question: "Can I learn more about the technology behind Facephotos.ai?",
    answer:
      "Additional information about the technology can be accessed by visiting the GFPGAN Github page (https://github.com/arc-lab-tencent/GFP-GAN) and by reading the related research paper available at (https://arxiv.org/abs/2101.04061) on the website.",
  },
  {
    id: 11,
    question: "Is the service free?",
    answer:
      "At this time, the service is free to use. However, advertisements will be displayed on the website to support the service and continue improving it for users. A subscription-based model may be considered in the future.",
  },
  {
    id: 12,
    question: "Who can benefit from Facephotos.ai?",
    answer:
      "Individuals looking to restore their old and blurry face photos can benefit from Facephotos.ai. Its user-friendly interface and advanced AI technology make it easy to bring memories back to life.",
  },
]

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions (FAQ)</h2>
            <p className="mt-4 text-lg text-gray-500">
              The FAQ serves as a quick and easy reference guide for users who want to learn more about Facephotos.ai, and can help users find answers to common questions they may have about the service.
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium leading-6 text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}