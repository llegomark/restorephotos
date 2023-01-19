const faqs = [
  {
    id: 1,
    question: "Can you provide sample photo descriptions?",
    answer:
      "Yes, here are some sample photo descriptions: 1. A solo high school graduation photo of me from 2008. 2. A photo of me and my ex-girlfriend at the summit of Mt. Makiling. 3. A photo of my family at the beach. 4. A photo of my dog, Max, at the park. 5. A photo of my cat, Moly, lounging on the couch.",
  },
  {
    id: 2,
    question: "Are the generated captions saved anywhere?",
    answer:
      "No, the generated captions are not saved anywhere. They are generated on the fly and are not stored anywhere. If you want to save the generated caption, you can copy it by clicking on the caption, it will automatically be copied to your clipboard and ready to be pasted on social media networks or any other platform you want to use it on.",
  },
  {
    id: 3,
    question: "Does the generated caption include hashtags?",
    answer:
      "Yes, the generated caption includes hashtags. The hashtags are based on the tone of the photo and the text that you enter. The captions are generated using a machine learning model that has been trained on a large dataset of captions and images.",
  },
  {
    id: 4,
    question: "Do you have any tips for writing photo descriptions?",
    answer:
      "Yes, here are some tips for writing photo descriptions: 1. Use descriptive language to paint a picture of the scene. 2. Use the 5 W's (who, what, where, when, why) to provide context and background information. 3. Use the 3 C's (character, conflict, and climax) to tell a story. 4. Use the 5 S's (setting, subject, situation, significance, and symbolism) to describe the elements of the photograph. 5. Use the 5 S's (sensory, social, spiritual, sentimental, and sexual) to describe the emotions and feelings evoked by the photograph.",
  },
  {
    id: 5,
    question: "Are the generated captions accurate and unique?",
    answer:
      "Yes, the generated captions are accurate and unique. They are based on the tone of the photo and the text that you enter. The captions are generated using a machine learning model that has been trained on a large dataset of captions and images.",
  },
  {
    id: 6,
    question: "Will the generated captions be grammatically correct?",
    answer:
      "Yes, the generated captions will be grammatically correct. They are based on the tone of the photo and the text that you enter. The captions are generated using a machine learning model that has been trained on a large dataset of captions and images.",
  },
  {
    id: 7,
    question: "How can I save the generated caption?",
    answer:
      "You can only copy the generated caption by clicking on the caption, it will automatically be copied to your clipboard and ready to be pasted on social media networks or any other platform you want to use it on.",
  },
  {
    id: 8,
    question: "Who owns the rights of the caption?",
    answer:
      "You own all the rights of the captions you generate. It is your original content and you are free to use it as you wish, whether that be on social media, your website, or any other platform. However, it's always good to double-check that the image you are using the caption for is also owned by you or you have permission to use it.",
  },
  {
    id: 9,
    question: "Can I use the captions for commercial purposes?",
    answer:
      "Yes, as the owner of the captions you generate, you have the right to use them for commercial purposes, such as for advertising, marketing, or any other type of business use. However, it's always a good idea to double-check that the image you are using the caption for is also owned by you or you have permission to use it for commercial purposes. Additionally, you should be aware that some types of commercial use may require additional rights or permissions.",
  },
  {
    id: 10,
    question: "What is a professional tone for photo captions?",
    answer:
      "A professional tone for photo captions uses language that is clear, accurate, and objective, providing factual information about the subject of the photograph.",
  },
  {
    id: 11,
    question: "What is a personal tone for photo captions?",
    answer:
      "A personal tone for photo captions uses language that makes the viewer feel like the photographer is sharing their personal feelings, thoughts, and perspectives about the subject of the photograph, making the image more relatable and intimate, and connecting the viewer with the photographer in a more personal way.",
  },
  {
    id: 12,
    question: "What is a poetic tone for photo captions?",
    answer:
      "A poetic tone for photo captions uses descriptive language and imagery to create a sense of wonder or beauty in the reader, evoking emotions and connecting the reader to the subject of the photograph in a deeper way.",
  },
  {
    id: 13,
    question: "What is a nostalgic tone for photo captions?",
    answer:
      "A nostalgic tone for photo captions uses language that evokes feelings of longing for the past and reminiscing on fond memories.",
  },
  {
    id: 14,
    question: "What is a informative tone for photo captions?",
    answer:
      "A informative tone for photo captions uses language that provides facts, figures, and details about the subject and context of the photograph, helping to educate the viewer and provide a better understanding of the image.",
  },
  {
    id: 15,
    question: "What is a empathetic tone for photo captions?",
    answer:
      "A empathetic tone for photo captions uses language that evokes feelings of understanding and connection with the subjects of the photograph, showing the viewer that you understand their emotions and experiences.",
  },
  {
    id: 16,
    question: "What is a humorous tone for photo captions?",
    answer:
      "A humorous tone for photo captions uses language that is witty, playful, or satirical to entertain the viewer and add some levity to the subject of the photograph, while being respectful of the subject.",
  },
  {
    id: 17,
    question: "What is an inspirational tone for photo captions?",
    answer:
      "An inspirational tone for photo captions uses language that motivates and encourages the viewer, by highlighting the positive aspects of the image and showing how it can be a source of inspiration for the viewer.",
  },
  {
    id: 18,
    question: "What is an evocative tone for photo captions?",
    answer:
      "An evocative tone for photo captions uses language that creates a strong emotional response in the viewer, by using descriptive and imaginative words that paint a vivid picture of the scene and bring the viewer into the moment.",
  },
  {
    id: 19,
    question: "What is a storytelling tone for photo captions?",
    answer:
      "A storytelling tone for photo captions uses language that creates a narrative or story around the image, providing context, background information and characters that help the viewer to understand the image in a more complete way.",
  },
  {
    id: 20,
    question: "What is a minimalistic tone for photo captions?",
    answer:
      "A minimalistic tone for photo captions uses language that is simple, direct, and to the point, focusing on the most essential information.",
  },
  {
    id: 21,
    question: "What is a reflective tone for photo captions?",
    answer:
      "A reflective tone for photo captions uses language that encourages the viewer to think deeper about the subject of the photograph, and reflect on their own experiences, emotions or thoughts about it.",
  },
  {
    id: 22,
    question: "What is an artistic tone for photo captions?",
    answer:
      "An artistic tone for photo captions uses language that evokes the sense of art and creativity. It can be used to describe the elements of composition, color, lighting, and other techniques used to create the image, highlighting the photographer's skill and appreciation of the photograph as a piece of art.",
  },
  {
    id: 23,
    question: "What is a dramatic tone for photo captions?",
    answer:
      "A dramatic tone for photo captions uses language that is intense, powerful, and dramatic to evoke strong emotions in the viewer, such as awe, wonder, or fear.",
  },
  {
    id: 24,
    question: "What is a sarcastic tone for photo captions?",
    answer:
      "A sarcastic tone for photo captions uses language that is ironic, mocking, or satirical to make fun of the subject of the photograph, while being respectful of the subject.",
  },
  {
    id: 25,
    question: "What is a romantic tone for photo captions?",
    answer:
      "A romantic tone for photo captions uses language that is loving, tender, and affectionate to express the photographer's feelings for the subject of the photograph.",
  },
  {
    id: 26,
    question: "What is a surreal tone for photo captions?",
    answer:
      "A surreal tone for photo captions uses language that is dreamlike, mysterious, and magical to create a sense of fantasy and imagination in the viewer.",
  },
  {
    id: 27,
    question: "What is a provocative tone for photo captions?",
    answer:
      "A provocative tone for photo captions uses language that is shocking, controversial, or provocative to create a strong emotional response in the viewer, such as anger, disgust, or fear.",
  },
  {
    id: 28,
    question: "What is a solemn tone for photo captions?",
    answer:
      "A solemn tone for photo captions uses language that is somber, serious, and thoughtful to express the photographer's feelings of sadness, grief, or loss.",
  },
  {
    id: 29,
    question: "What is a adventurous tone for photo captions?",
    answer:
      "An adventurous tone for photo captions uses language that is exciting, daring, and bold to express the photographer's feelings of excitement, courage, or risk-taking.",
  },
  {
    id: 30,
    question: "What is a enigmatic tone for photo captions?",
    answer:
      "An enigmatic tone for photo captions uses language that is mysterious, ambiguous, and puzzling to create a sense of intrigue and curiosity in the viewer.",
  },
  {
    id: 31,
    question: "What is a optimistic tone for photo captions?",
    answer:
      "An optimistic tone for photo captions uses language that is hopeful, positive, and cheerful to express the photographer's feelings of joy, happiness, or optimism.",
  },
  {
    id: 32,
    question: "What is a elegant tone for photo captions?",
    answer:
      "An elegant tone for photo captions uses language that is refined, sophisticated, and classy to express the photographer's feelings of beauty, grace, or luxury.",
  },
  {
    id: 33,
    question: "What is a educational tone for photo captions?",
    answer:
      "An educational tone for photo captions uses language that is informative, factual, and educational to express the photographer's feelings of knowledge, learning, or understanding.",
  },
  {
    id: 34,
    question: "What is a journalistic tone for photo captions?",
    answer:
      "A journalistic tone for photo captions uses language that is factual, unbiased, and objective to express the photographer's feelings of truth, accuracy, or fairness.",
  },
];

export default function CaptionsFAQ() {
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
                <p className="text-lg text-slate-700 text-justify">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
