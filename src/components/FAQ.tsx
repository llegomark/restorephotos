interface LinkProps {
  children: React.ReactNode;
  url: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ children, url, className }) => (
  <a href={url} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const faqs = [
  {
    id: 1,
    question: "What is RestorePhotos.app?",
    answer:
      "RestorePhotos.app is a website that utilizes advanced Artificial Intelligence (AI) technology to restore old and blurry FACE photos.",
  },
  {
    id: 27,
    question: "Can I restore a photo that is not a human face?",
    answer:
      "No, the GFPGAN model is only trained on human faces. Therefore, it can only restore photos that are human faces.",
  },
  {
    id: 28,
    question: "Can I restore an old photo of myself?",
    answer:
      "Yes, you can restore an old photo of yourself. However, the model may not be able to restore the face exactly as it was in the original photo. This is because the model is trained on a large dataset of faces and may not be able to restore the face exactly as it was in the original photo.",
  },
  {
    id: 2,
    question: "What is RestorePhotos.app's privacy policy?",
    answer:
      "RestorePhotos.app takes user privacy seriously and has implemented strict policies to protect user information. Photos uploaded by users will only be saved temporarily and deleted after restoration. They will not be used as training materials, and personal information will not be shared with any third party.",
  },
  {
    id: 3,
    question: "What are the file types supported and the maximum file size?",
    answer:
      "The file types supported are JPG, JPEG, and PNG. The maximum file size is 5MB.",
  },
  {
    id: 4,
    question: "Will the picture I upload be saved permanently?",
    answer:
      "No, the picture will only be temporarily saved for restoration and deleted after completion.",
  },
  {
    id: 5,
    question: "Can I upload multiple photos at once?",
    answer:
      "No, you can only upload one photo at a time. If you want to restore multiple photos, you can upload them one by one. We are working on a feature that allows you to upload multiple photos at once.",
  },
  {
    id: 6,
    question: "Do you have access to my photos?",
    answer:
      "No, the photos are only temporarily saved for restoration and deleted after completion.",
  },
  {
    id: 7,
    question: "Will the picture I upload to be used for any other purpose?",
    answer:
      "No, the picture will only be used for the restoration process and will not be used for any other purpose.",
  },
  {
    id: 8,
    question: "Will my personal information be shared with any third party?",
    answer:
      "RestorePhotos.app does not share, sell, or rent personal information to any third party.",
  },
  {
    id: 9,
    question: "How does the website work?",
    answer:
      "When a user uploads a photo to the website, it will be sent through the GFPGAN model created by ARC Lab, Tencent PCG, using a Next.js API route. Then, the restored photo will be returned to the user.",
  },
  {
    id: 10,
    question: "What is the GFPGAN model?",
    answer:
      "The GFPGAN model is a practical algorithm for real-world face restoration. It utilizes rich and diverse priors encapsulated in a pre-trained face GAN (e.g., StyleGAN2) for blind face restoration. This means the model can restore heavily degraded or blurry photos with high accuracy.",
  },
  {
    id: 11,
    question: "What is the Generative Facial Prior (GFP) used in GFP-GAN?",
    answer:
      "The Generative Facial Prior (GFP) is a powerful generative model encapsulated in a pre-trained face GAN, such as StyleGAN2, that is used in the GFP-GAN model for blind face restoration. It leverages rich and diverse facial priors to restore realistic and faithful details in heavily degraded or blurry photos.",
  },
  {
    id: 12,
    question:
      "What is the main advantage of the GFPGAN model used on RestorePhotos.app?",
    answer:
      "The main advantage of the GFPGAN model is its ability to restore heavily degraded or blurry photos with high accuracy. This is achieved by leveraging rich and diverse priors encapsulated in a pre-trained face GAN (e.g., StyleGAN2) for blind face restoration and incorporating this Generative Facial Prior (GFP) into the restoration process through novel channel-split spatial feature transform layers. This allows for a good balance of realness and fidelity to be achieved with a single forward pass, making it a more efficient solution than traditional GAN inversion methods.",
  },
  {
    id: 13,
    question: "Can I learn more about the technology behind RestorePhotos.app?",
    answer:
      "Additional information about the technology can be accessed by visiting the GFPGAN Github page and by reading the related research paper available on the website.",
  },
  {
    id: 14,
    question: "Is the service free?",
    answer:
      "At this time, the service is free to use. However, advertisements will be displayed on the website to support the service and continue improving it for users. A subscription-based model may be considered in the future.",
  },
  {
    id: 15,
    question: "Who can benefit from RestorePhotos.app?",
    answer:
      "Individuals looking to restore their old and blurry face photos can benefit from RestorePhotos.app. Its user-friendly interface and advanced AI technology make it easy to bring memories back to life.",
  },
  {
    id: 16,
    question: "How do I restore my old and blurry face photos?",
    answer:
      "To restore your old and blurry face photos, simply upload the photo to the website. The restored photo will be returned to you.",
  },
  {
    id: 17,
    question: "How do I upload my photo?",
    answer:
      "To upload your photo, simply click the “Upload Photo” button on the website and select the photo you want to restore. The restored photo will be returned to you.",
  },
  {
    id: 18,
    question: "How do I download my restored photo?",
    answer:
      "To download your restored photo, simply click the “Download Photo” button on the website. The restored photo will be downloaded to your device.",
  },
  {
    id: 19,
    question: "How do I share my restored photo to social media?",
    answer:
      "This feature is currently under development and will be available soon.",
  },
  {
    id: 20,
    question: "How do I report a bug or issue?",
    answer:
      "To report a bug or issue, simply email me at markllego[at]gmail[dot]com.",
  },
  {
    id: 21,
    question: "How many photos can I restore?",
    answer:
      "You can restore as many photos as you want but you are limited to 3 photos per minute.",
  },
  {
    id: 22,
    question: "Does the website uses GPU?",
    answer:
      "Yes, the website uses GPU to process the photos. Our server is equipped with a NVIDIA Tesla T4 GPU, this allows for faster processing and higher quality restoration.",
  },
  {
    id: 23,
    question: "How long does it take to restore a photo?",
    answer: "It takes about 10-20 seconds to restore a photo.",
  },
  {
    id: 24,
    question: "How much does it cost to restore a photo?",
    answer:
      "It is free to restore a photo. However, advertisements will be displayed on the website to support the service and continue improving it for users. A subscription-based model may be considered in the future.",
  },
  {
    id: 25,
    question: "Why is my face is different from the original photo?",
    answer:
      "The GFPGAN model is a practical algorithm for real-world face restoration. It utilizes rich and diverse priors encapsulated in a pre-trained face GAN (e.g., StyleGAN2) for blind face restoration. This means the model can restore heavily degraded or blurry photos with high accuracy. However, the model may not be able to restore the face exactly as it was in the original photo. This is because the model is trained on a large dataset of faces and may not be able to restore the face exactly as it was in the original photo.",
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-6 lg:py-16 lg:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="mt-8">
        <dl className="divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
            >
              <dt className="text-lg font-medium text-slate-900 md:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="text-justify text-lg text-slate-700">
                  {faq.answer} {" "}
                  {faq.id === 13 ? (
                    <Link
                      url="https://github.com/TencentARC/GFPGAN"
                      className="text-blue-500 underline"
                    >
                      GFPGAN Github page
                    </Link>
                  ) : null}
                  {faq.id === 13 ? " and " : null}
                  {faq.id === 13 ? (
                    <Link
                      url="https://arxiv.org/abs/2101.04061"
                      className="text-blue-500 underline"
                    >
                      related research paper.
                    </Link>
                  ) : null}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
