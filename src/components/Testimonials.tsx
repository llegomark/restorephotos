import Image from "next/image";
import Balancer from "react-wrap-balancer";

const testimonials = [
  [
    {
      content:
        "I had an old family photo that was so blurry, I couldn't even make out my grandparents' faces. But after using RestorePhotos.app, the picture is clear and I can finally see their faces again. Thank you!",
      author: {
        name: "Rodolfo Santiago",
        role: "User",
        image: "/male/1.png",
      },
    },
    {
      content:
        "I was skeptical about using an AI for photo restoration, but RestorePhotos.app exceeded my expectations. They were able to restore an old photo of my parents' wedding day and it looks better than ever.",
      author: {
        name: "Mark Bacason",
        role: "User",
        image: "/male/2.png",
      },
    },
  ],
  [
    {
      content:
        "I have a photo of my parents when they were young that was really blurry, but after using RestorePhotos.app, I can finally see their faces clearly. It's a memory I will treasure forever.",
      author: {
        name: "Junell Mabag",
        role: "User",
        image: "/male/25.png",
      },
    },
    {
      content:
        "I had a photo of my grandparents that was almost impossible to see due to the age and damage. RestorePhotos.app did an incredible job restoring it and now I can see all the details and it's like looking at a new photo.",
      author: {
        name: "Arlene Abanag",
        role: "User",
        image: "/female/16.png",
      },
    },
  ],
  [
    {
      content:
        "RestorePhotos.app was able to bring an old photo of my family back to life. It's amazing how clear and sharp it looks now. I'm so happy I found this service.",
      author: {
        name: "Desmond Grey",
        role: "User",
        image: "/male/3.png",
      },
    },
    {
      content:
        "I have an old photo of my grandparents that I've always loved, but it was so blurry I couldn't see their faces clearly. RestorePhotos.app was able to restore it and now it's one of my most treasured possessions.",
      author: {
        name: "Ana Reyes",
        role: "User",
        image: "/female/3.png",
      },
    },
  ],
  [
    {
      content:
        "I had an old family photo that was so blurry, I couldn't even make out my grandparents' faces. But after using RestorePhotos.app, the picture is clear and I can finally see their faces again. Thank you!",
      author: {
        name: "Maria Santos",
        role: "User",
        image: "/female/5.png",
      },
    },
    {
      content:
        "I was skeptical about using an AI for photo restoration, but RestorePhotos.app exceeded my expectations. They were able to restore an old photo of my parents' wedding day and it looks better than ever.",
      author: {
        name: "Jose dela Cruz",
        role: "User",
        image: "/male/6.png",
      },
    },
  ],
  [
    {
      content:
        "I've tried other photo restoration services in the past, but none of them were able to bring my old photos back to life like RestorePhotos.app did. I'm so impressed with the results.",
      author: {
        name: "Eduardo Hernandez",
        role: "User",
        image: "/male/10.png",
      },
    },
    {
      content:
        "I've been looking for a way to restore an old photo of my great-grandparents for years. I finally found RestorePhotos.app and they did an amazing job. The photo is clear and I can see all the details now. I am so grateful.",
      author: {
        name: "Angelica Torres",
        role: "User",
        image: "/female/15.png",
      },
    },
  ],
  [
    {
      content:
        "I have a lot of old and blurry photos of my family, but after using RestorePhotos.app, I can finally see them clearly. I am so happy I found this service.",
      author: {
        name: "Felipe Ortiz",
        role: "User",
        image: "/male/16.png",
      },
    },
    {
      content:
        "RestorePhotos.app was able to restore a photo of my grandparents that had been damaged in a flood. It was a precious memory that I thought was lost forever, but now I have it back and it looks just like new.",
      author: {
        name: "Lourdes Mendoza",
        role: "User",
        image: "/female/20.png",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="font-display mx-auto max-w-4xl text-4xl font-bold tracking-normal text-slate-900 sm:text-5xl">
            <Balancer>
            Hear It Straight From the Source: Our Web Application Users Speak
            for Themselves
            </Balancer>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-slate-700">
            <Balancer>
            Discover why people worldwide have fallen in love with
            RestorePhotos.app. Read testimonials and find out what they have to
            say.
            </Balancer>
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="transition duration-300 ease-in-out hover:scale-105"
                  >
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          <Balancer>
                          "{testimonial.content}"
                          </Balancer>
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt="picture of the testimonial author"
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
