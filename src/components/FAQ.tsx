import Balancer from "react-wrap-balancer";

interface LinkProps {
  children: React.ReactNode;
  url: string;
  className?: string;
}

interface FAQProps {
  startId: number;
  endId: number;
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
    id: 2,
    question: "Can I restore a photo that is not a human face?",
    answer:
      "No, the GFPGAN model is only trained on human faces. Therefore, it can only restore photos that are human faces.",
  },
  {
    id: 3,
    question:
      "Can I use this service to make my photos bigger or better, not just for fixing faces?",
    answer:
      "Yes, you can use this service to not only restore or improve the appearance of faces in your photos, but also to make your photos larger or to enhance their overall quality. ",
  },
  {
    id: 4,
    question: "Can I restore an old photo of myself?",
    answer:
      "Yes, you can restore an old photo of yourself. However, the model may not be able to restore the face exactly as it was in the original photo. This is because the model is trained on a large dataset of faces and may not be able to restore the face exactly as it was in the original photo.",
  },
  {
    id: 5,
    question: "What is RestorePhotos.app's privacy policy?",
    answer:
      "RestorePhotos.app takes user privacy seriously and has implemented strict policies to protect user information. Photos uploaded by users will only be saved temporarily and deleted after restoration. They will not be used as training materials, and personal information will not be shared with any third party.",
  },
  {
    id: 6,
    question: "What are the file types supported and the maximum file size?",
    answer:
      "The file types supported are JPG, JPEG, and PNG. The maximum file size is 5MB.",
  },
  {
    id: 7,
    question: "Will the picture I upload be saved permanently?",
    answer:
      "No, the picture will only be temporarily saved for restoration and deleted after completion.",
  },
  {
    id: 8,
    question: "Can I upload multiple photos at once?",
    answer:
      "No, you can only upload one photo at a time. If you want to restore multiple photos, you can upload them one by one. We are working on a feature that allows you to upload multiple photos at once.",
  },
  {
    id: 9,
    question: "Do you have access to my photos?",
    answer:
      "No, the photos are only temporarily saved for restoration and deleted after completion.",
  },
  {
    id: 10,
    question: "Will the picture I upload to be used for any other purpose?",
    answer:
      "No, the picture will only be used for the restoration process and will not be used for any other purpose.",
  },
  {
    id: 11,
    question: "Will my personal information be shared with any third party?",
    answer:
      "RestorePhotos.app does not share, sell, or rent personal information to any third party.",
  },
  {
    id: 12,
    question: "How does the website work?",
    answer:
      "When a user uploads a photo to the website, it will be sent through the GFPGAN model created by ARC Lab, Tencent PCG, using a Next.js API route. Then, the restored photo will be returned to the user.",
  },
  {
    id: 13,
    question: "What is the GFPGAN model?",
    answer:
      "The GFPGAN model is a practical algorithm for real-world face restoration. It utilizes rich and diverse priors encapsulated in a pre-trained face GAN (e.g., StyleGAN2) for blind face restoration. This means the model can restore heavily degraded or blurry photos with high accuracy.",
  },
  {
    id: 14,
    question: "What is the Generative Facial Prior (GFP) used in GFP-GAN?",
    answer:
      "The Generative Facial Prior (GFP) is a powerful generative model encapsulated in a pre-trained face GAN, such as StyleGAN2, that is used in the GFP-GAN model for blind face restoration. It leverages rich and diverse facial priors to restore realistic and faithful details in heavily degraded or blurry photos.",
  },
  {
    id: 15,
    question:
      "What is the main advantage of the GFPGAN model used on RestorePhotos.app?",
    answer:
      "The main advantage of the GFPGAN model is its ability to restore heavily degraded or blurry photos with high accuracy. This is achieved by leveraging rich and diverse priors encapsulated in a pre-trained face GAN (e.g., StyleGAN2) for blind face restoration and incorporating this Generative Facial Prior (GFP) into the restoration process through novel channel-split spatial feature transform layers. This allows for a good balance of realness and fidelity to be achieved with a single forward pass, making it a more efficient solution than traditional GAN inversion methods.",
  },
  {
    id: 16,
    question: "Can I learn more about the technology behind RestorePhotos.app?",
    answer:
      "Additional information about the technology can be accessed by visiting the GFPGAN Github page and by reading the related research paper available on the website.",
  },
  {
    id: 17,
    question: "Is the service free?",
    answer:
      "At this time, the service is free to use. However, advertisements will be displayed on the website to support the service and continue improving it for users. A subscription-based model may be considered in the future.",
  },
  {
    id: 18,
    question: "Who can benefit from RestorePhotos.app?",
    answer:
      "Individuals looking to restore their old and blurry face photos can benefit from RestorePhotos.app. Its user-friendly interface and advanced AI technology make it easy to bring memories back to life.",
  },
  {
    id: 19,
    question: "How do I restore my old and blurry face photos?",
    answer:
      "To restore your old and blurry face photos, simply upload the photo to the website. The restored photo will be returned to you.",
  },
  {
    id: 20,
    question: "How do I upload my photo?",
    answer:
      "To upload your photo, simply click the “Upload Photo” button on the website and select the photo you want to restore. The restored photo will be returned to you.",
  },
  {
    id: 21,
    question: "How do I download my restored photo?",
    answer:
      "To download your restored photo, simply click the “Download Photo” button on the website. The restored photo will be downloaded to your device.",
  },
  {
    id: 22,
    question: "How do I share my restored photo to social media?",
    answer:
      "This feature is currently under development and will be available soon.",
  },
  {
    id: 23,
    question: "How many photos can I restore?",
    answer:
      "You can restore as many photos as you want but you are limited to 3 photos per minute.",
  },
  {
    id: 24,
    question: "Does the website uses GPU?",
    answer:
      "Yes, the website uses GPU to process the photos. The server is equipped with a NVIDIA Tesla T4 GPU, this allows for faster processing and higher quality restoration.",
  },
  {
    id: 25,
    question: "How long does it take to restore a photo?",
    answer: "It takes about 10-20 seconds to restore a photo.",
  },
  {
    id: 26,
    question: "How much does it cost to restore a photo?",
    answer:
      "It is free to restore a photo. However, advertisements will be displayed on the website to support the service and continue improving it for users. A subscription-based model may be considered in the future.",
  },
  {
    id: 27,
    question: "Why is my face is different from the original photo?",
    answer:
      "The GFPGAN model is a practical algorithm for real-world face restoration. It utilizes rich and diverse priors encapsulated in a pre-trained face GAN (e.g., StyleGAN2) for blind face restoration. This means the model can restore heavily degraded or blurry photos with high accuracy. However, the model may not be able to restore the face exactly as it was in the original photo. This is because the model is trained on a large dataset of faces and may not be able to restore the face exactly as it was in the original photo.",
  },
  {
    id: 28,
    question: "Can you provide sample photo descriptions?",
    answer:
      "Yes, here are some sample photo descriptions: 1. A solo high school graduation photo of me from 2008. 2. A photo of me and my ex-girlfriend at the summit of Mt. Makiling. 3. A photo of my family at the beach. 4. A photo of my dog, Max, at the park. 5. A photo of my cat, Moly, lounging on the couch.",
  },
  {
    id: 29,
    question: "Are the generated captions saved anywhere?",
    answer:
      "No, the generated captions are not saved anywhere. They are generated on the fly and are not stored anywhere. If you want to save the generated caption, you can copy it by clicking on the caption, it will automatically be copied to your clipboard and ready to be pasted on social media networks or any other platform you want to use it on.",
  },
  {
    id: 30,
    question: "Does the generated caption include hashtags?",
    answer:
      "Yes, the generated caption includes hashtags. The hashtags are based on the tone of the photo and the text that you enter. The captions are generated using a machine learning model that has been trained on a large dataset of captions and images.",
  },
  {
    id: 31,
    question: "Do you have any tips for writing photo descriptions?",
    answer:
      "Yes, here are some tips for writing photo descriptions: 1. Use descriptive language to paint a picture of the scene. 2. Use the 5 W's (who, what, where, when, why) to provide context and background information. 3. Use the 3 C's (character, conflict, and climax) to tell a story. 4. Use the 5 S's (setting, subject, situation, significance, and symbolism) to describe the elements of the photograph. 5. Use the 5 S's (sensory, social, spiritual, sentimental, and sexual) to describe the emotions and feelings evoked by the photograph.",
  },
  {
    id: 32,
    question: "Are the generated captions accurate and unique?",
    answer:
      "Yes, the generated captions are accurate and unique. They are based on the tone of the photo and the text that you enter. The captions are generated using a machine learning model that has been trained on a large dataset of captions and images.",
  },
  {
    id: 33,
    question: "Will the generated captions be grammatically correct?",
    answer:
      "Yes, the generated captions will be grammatically correct. They are based on the tone of the photo and the text that you enter. The captions are generated using a machine learning model that has been trained on a large dataset of captions and images.",
  },
  {
    id: 34,
    question: "How can I save the generated caption?",
    answer:
      "You can only copy the generated caption by clicking on the caption, it will automatically be copied to your clipboard and ready to be pasted on social media networks or any other platform you want to use it on.",
  },
  {
    id: 35,
    question: "Who owns the rights of the caption?",
    answer:
      "You own all the rights of the captions you generate. It is your original content and you are free to use it as you wish, whether that be on social media, your website, or any other platform. However, it's always good to double-check that the image you are using the caption for is also owned by you or you have permission to use it.",
  },
  {
    id: 36,
    question: "Can I use the captions for commercial purposes?",
    answer:
      "Yes, as the owner of the captions you generate, you have the right to use them for commercial purposes, such as for advertising, marketing, or any other type of business use. However, it's always a good idea to double-check that the image you are using the caption for is also owned by you or you have permission to use it for commercial purposes. Additionally, you should be aware that some types of commercial use may require additional rights or permissions.",
  },
  {
    id: 37,
    question: "What is a professional tone for photo captions?",
    answer:
      "A professional tone for photo captions uses language that is clear, accurate, and objective, providing factual information about the subject of the photograph.",
  },
  {
    id: 38,
    question: "What is a personal tone for photo captions?",
    answer:
      "A personal tone for photo captions uses language that makes the viewer feel like the photographer is sharing their personal feelings, thoughts, and perspectives about the subject of the photograph, making the image more relatable and intimate, and connecting the viewer with the photographer in a more personal way.",
  },
  {
    id: 39,
    question: "What is a poetic tone for photo captions?",
    answer:
      "A poetic tone for photo captions uses descriptive language and imagery to create a sense of wonder or beauty in the reader, evoking emotions and connecting the reader to the subject of the photograph in a deeper way.",
  },
  {
    id: 40,
    question: "What is a nostalgic tone for photo captions?",
    answer:
      "A nostalgic tone for photo captions uses language that evokes feelings of longing for the past and reminiscing on fond memories.",
  },
  {
    id: 41,
    question: "What is a informative tone for photo captions?",
    answer:
      "A informative tone for photo captions uses language that provides facts, figures, and details about the subject and context of the photograph, helping to educate the viewer and provide a better understanding of the image.",
  },
  {
    id: 42,
    question: "What is a empathetic tone for photo captions?",
    answer:
      "A empathetic tone for photo captions uses language that evokes feelings of understanding and connection with the subjects of the photograph, showing the viewer that you understand their emotions and experiences.",
  },
  {
    id: 43,
    question: "What is a humorous tone for photo captions?",
    answer:
      "A humorous tone for photo captions uses language that is witty, playful, or satirical to entertain the viewer and add some levity to the subject of the photograph, while being respectful of the subject.",
  },
  {
    id: 44,
    question: "What is an inspirational tone for photo captions?",
    answer:
      "An inspirational tone for photo captions uses language that motivates and encourages the viewer, by highlighting the positive aspects of the image and showing how it can be a source of inspiration for the viewer.",
  },
  {
    id: 45,
    question: "What is an evocative tone for photo captions?",
    answer:
      "An evocative tone for photo captions uses language that creates a strong emotional response in the viewer, by using descriptive and imaginative words that paint a vivid picture of the scene and bring the viewer into the moment.",
  },
  {
    id: 46,
    question: "What is a storytelling tone for photo captions?",
    answer:
      "A storytelling tone for photo captions uses language that creates a narrative or story around the image, providing context, background information and characters that help the viewer to understand the image in a more complete way.",
  },
  {
    id: 47,
    question: "What is a minimalistic tone for photo captions?",
    answer:
      "A minimalistic tone for photo captions uses language that is simple, direct, and to the point, focusing on the most essential information.",
  },
  {
    id: 48,
    question: "What is a reflective tone for photo captions?",
    answer:
      "A reflective tone for photo captions uses language that encourages the viewer to think deeper about the subject of the photograph, and reflect on their own experiences, emotions or thoughts about it.",
  },
  {
    id: 49,
    question: "What is an artistic tone for photo captions?",
    answer:
      "An artistic tone for photo captions uses language that evokes the sense of art and creativity. It can be used to describe the elements of composition, color, lighting, and other techniques used to create the image, highlighting the photographer's skill and appreciation of the photograph as a piece of art.",
  },
  {
    id: 50,
    question: "What is a dramatic tone for photo captions?",
    answer:
      "A dramatic tone for photo captions uses language that is intense, powerful, and dramatic to evoke strong emotions in the viewer, such as awe, wonder, or fear.",
  },
  {
    id: 51,
    question: "What is a sarcastic tone for photo captions?",
    answer:
      "A sarcastic tone for photo captions uses language that is ironic, mocking, or satirical to make fun of the subject of the photograph, while being respectful of the subject.",
  },
  {
    id: 52,
    question: "What is a romantic tone for photo captions?",
    answer:
      "A romantic tone for photo captions uses language that is loving, tender, and affectionate to express the photographer's feelings for the subject of the photograph.",
  },
  {
    id: 53,
    question: "What is a surreal tone for photo captions?",
    answer:
      "A surreal tone for photo captions uses language that is dreamlike, mysterious, and magical to create a sense of fantasy and imagination in the viewer.",
  },
  {
    id: 54,
    question: "What is a provocative tone for photo captions?",
    answer:
      "A provocative tone for photo captions uses language that is shocking, controversial, or provocative to create a strong emotional response in the viewer, such as anger, disgust, or fear.",
  },
  {
    id: 55,
    question: "What is a solemn tone for photo captions?",
    answer:
      "A solemn tone for photo captions uses language that is somber, serious, and thoughtful to express the photographer's feelings of sadness, grief, or loss.",
  },
  {
    id: 56,
    question: "What is a adventurous tone for photo captions?",
    answer:
      "An adventurous tone for photo captions uses language that is exciting, daring, and bold to express the photographer's feelings of excitement, courage, or risk-taking.",
  },
  {
    id: 57,
    question: "What is a enigmatic tone for photo captions?",
    answer:
      "An enigmatic tone for photo captions uses language that is mysterious, ambiguous, and puzzling to create a sense of intrigue and curiosity in the viewer.",
  },
  {
    id: 58,
    question: "What is a optimistic tone for photo captions?",
    answer:
      "An optimistic tone for photo captions uses language that is hopeful, positive, and cheerful to express the photographer's feelings of joy, happiness, or optimism.",
  },
  {
    id: 59,
    question: "What is a elegant tone for photo captions?",
    answer:
      "An elegant tone for photo captions uses language that is refined, sophisticated, and classy to express the photographer's feelings of beauty, grace, or luxury.",
  },
  {
    id: 60,
    question: "What is a educational tone for photo captions?",
    answer:
      "An educational tone for photo captions uses language that is informative, factual, and educational to express the photographer's feelings of knowledge, learning, or understanding.",
  },
  {
    id: 61,
    question: "What is a journalistic tone for photo captions?",
    answer:
      "A journalistic tone for photo captions uses language that is factual, unbiased, and objective to express the photographer's feelings of truth, accuracy, or fairness.",
  },
  {
    id: 62,
    question: "I would like to contribute to the project. How can I help?",
    answer:
      "This is an open-source project and contributions are welcome. You can contribute to the project by visiting the RestorePhotos.app Github page and submitting a pull or issue request.",
  },
  {
    id: 63,
    question: "How do I report a bug or issue?",
    answer:
      "To report a bug or issue, you can either open an issue on the RestorePhotos.app Github page or send an email to markllego@gmail.com.",
  },
];

export default function FAQ({ startId, endId }: FAQProps) {
  const filteredFaqs = faqs.filter(
    (faq) => faq.id >= startId && faq.id <= endId,
  );
  const specialFaqs = faqs.filter((faq) => faq.id === 62 || faq.id === 63);
  const allFaqs = filteredFaqs.concat(specialFaqs);

  return (
    <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-6 lg:py-16 lg:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
        <Balancer>Frequently Asked Questions (FAQ)</Balancer>
      </h2>
      <div className="mt-8 text-lg">
        <dl className="divide-y divide-gray-200">
          {allFaqs.map((faq) => (
            <div
              key={faq.id}
              className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
            >
              <dt className="font-medium text-slate-900 md:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-2 md:col-span-7 md:mt-0">
                <p className="text-slate-700">
                  <Balancer>
                    {faq.answer}{" "}
                    {faq.id === 14 ? (
                      <Link
                        url="https://github.com/TencentARC/GFPGAN"
                        className="text-blue-500 underline"
                      >
                        GFPGAN Github page
                      </Link>
                    ) : null}
                    {faq.id === 14 ? " and " : null}
                    {faq.id === 14 ? (
                      <Link
                        url="https://arxiv.org/abs/2101.04061"
                        className="text-blue-500 underline"
                      >
                        related research paper.
                      </Link>
                    ) : null}
                    {faq.id === 62 ? (
                      <Link
                        url="https://github.com/llegomark/restorephotos"
                        className="text-blue-500 underline"
                      >
                        RestorePhotos.app Github page.
                      </Link>
                    ) : null}
                  </Balancer>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}