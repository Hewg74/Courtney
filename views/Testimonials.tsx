import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Reveal } from '../components/Reveal';

interface PageTestimonial {
  quote: string;
  author: string;
  context?: string;
}

interface TestimonialCategory {
  label: string;
  items: PageTestimonial[];
}

const CATEGORIES: TestimonialCategory[] = [
  {
    label: 'Family & Youth Coaching',
    items: [
      {
        quote: "I didn't used to ask for help at school, even when I was confused. Coaching helped me figure out how I learn best and how to explain that to my teachers. Now I feel more motivated to go to school, and I'm getting better at sticking with the goals we set. It feels good to see that when I practice, things actually change and I sleep better too, get along better with my sister.",
        author: "Anonymous",
        context: "CA"
      },
      {
        quote: "My son is talking to people again. It was hard for us to see him struggling with anxiety to the point of not speaking to anyone but us. Thanks to you, he's discovered how to make small talk, how to prepare for talking to groups at school, and even what helps him feel calm and confident! We're so relieved. And we also notice he learned how to make better choices when choosing friends. Thank you.",
        author: "Anonymous",
        context: "WI"
      },
      {
        quote: "My son was having trouble handling big emotions and it was landing him on the bench instead of on the court. In coaching, he learned how to use his emotions to fuel his game, make changes and improvements where needed. He ended up on a more supportive team for him, understanding how to ask for help, and now he feels like he's growing and working with his emotions in a way he's proud of. The shift in his self-belief has been incredible to witness.",
        author: "Anonymous Parent",
        context: "NY"
      },
      {
        quote: "I came to you with an ADHD daughter who had trouble getting along with her siblings and with us. After six months, she knows what to do when she feels upset, is more helpful around the house, communicating what she needs and why so that we argue less, she is doing well in school, and is calmer overall. She also now sleeps through the night after you helped her figure out what was keeping her up (the bedding!). Overall, she's more confident in who she is and I'm so proud of her! She even figured out her own accountability and scheduling strategies, which we didn't expect!",
        author: "Anonymous",
        context: "NY"
      },
      {
        quote: "My child has often struggled with feeling different and socially awkward due to their ADHD. Through coaching, they've learned so many skills \u2014 from learning styles to how to organize their day to laughing at their mistakes which is helping them feel more socially comfortable. I'm seeing my child actually start to love who they are \u2014 and they're finding their own solutions more and more. I'm relieved knowing they're moving into adulthood with adult tools, feeling empowered and smiling!",
        author: "Anonymous Parent",
        context: "NJ"
      },
      {
        quote: "I was really anxious about starting college and doubted myself a lot. Coaching helped me feel more balanced and learn how to be my own best friend. I'm sleeping better, spending less time on my phone, getting out more, and saying kind things to myself. Now I even help other students who are going through what I did and I'm excited about my first job.",
        author: "Anonymous",
        context: "CA"
      },
      {
        quote: "My old baseball coach asked me what I was doing differently. He said that I looked happy now instead of sad and it made me so proud. Now that I know more about who I am and what I like, what kinds of friends feel good to be around, I haven't been as worried. And when I do feel upset, I just grab my favorite book and make myself laugh!",
        author: "Anonymous",
        context: "MN"
      },
      {
        quote: "Since working with you, I have seen a miraculous transformation in my son. Once nearly debilitated by anxiety, he now has confidence and courage and tools to help him curtail negative thoughts and toxic people. He has learned to embrace his unique talents rather than fear or suppress them and pursue a healthy lifestyle that includes organic foods and mindfulness in all things. You have made such a difference in his life! Thank you for all that you do.",
        author: "Kerrie",
        context: "AZ"
      }
    ]
  },
  {
    label: 'Adult Coaching',
    items: [
      {
        quote: "Courtney created a space where I felt truly heard and supported. Her compassionate, practical guidance helped me stay on track and gain clarity in areas that mattered most. I've been a therapist for decades and can feel she is just a natural at this!",
        author: "RL",
        context: "Canada"
      },
      {
        quote: "Working with Courtney has led to an amazing amount of habit change around food and movement. I'm eating more intuitively, and I've figured out routines for exercise that work with my body and mind, not against it. I feel so much better and more in control. Courtney holds such a lovely and nonjudgemental space for self-exploration and I really trust her expertise around health and wellbeing. And it's surprising how even small changes ripple out to my wider lifestyle and level of contentment. Thank you Courtney!",
        author: "Lily",
        context: "UK"
      },
      {
        quote: "I started coaching sessions with Courtney unclear what I wanted to accomplish, but we uncovered much more than I was expecting. Her intuitive and collaborative style makes it easeful to get clarity and set goals. I would highly recommend working with Courtney if you want to create new habits that support you on several different levels. Her genuine interest in my progress was evident in her encouragement and non-judgmental approach. Courtney's ability to listen actively and offer constructive feedback created a partnership that felt empowering rather than authoritative.",
        author: "Anonymous"
      },
      {
        quote: "Courtney is incredibly kind and compassionate, and she created a safe space for me where I felt heard and understood. With her guidance, I have learned the importance of breaking down my goals into smaller, manageable steps. This approach has empowered me to make progress each day towards my bigger goals, leading to tangible improvements in various aspects of my life.",
        author: "Rachel",
        context: "Toronto, ON"
      },
      {
        quote: "[After our Health Coaching sessions] I'm doing better. I know what to do now\u2026Thank you again for your help. It really helped to have someone to talk to and help me reflect on what to do. The answers were there, I was just too close to the waterfall to hear it.",
        author: "Rona B",
        context: "HI"
      }
    ]
  },
  {
    label: 'Workshops & Professional Collaboration',
    items: [
      {
        quote: "Incredible workshop Courtney - your skills, experience, and voice grounded me and gave me some fresh tools to access my own wisdom. Wise woman!",
        author: "Anna",
        context: "CA"
      },
      {
        quote: "I really enjoyed the last video [of our Group Workshop]. Your talk made me 'notice' things that I had never paid attention to before. Thank you!",
        author: "Cynthia B",
        context: "Cuba"
      },
      {
        quote: "Courtney was a joy to work with - she was diligent in her work and really cared about the families she served. Not only was she a thoughtful coach but a skilled one. Whenever she had a question, she would seek support and feedback in an open minded way allowing her to continuously grow in her craft.",
        author: "Jess S",
        context: "Former Coaching Manager"
      }
    ]
  },
  {
    label: 'Qigong',
    items: [
      {
        quote: "I definitely want you to know that I checked my blood pressure after our session and it was down significantly into the range I want it to be. Wonderful!! And pretty cool. Thanks as always and have a beautiful week.",
        author: "Nick B",
        context: "IL"
      },
      {
        quote: "After practicing Qigong with you for over a year now, two interesting things happened recently: I went to my chiropractor and she described my neck and shoulders as 'buoyant', my spine as 'that of a young person'. That is so different from what my chiropractor used to say about my spine\u2026 The chiro also noted that when I first started seeing her, I didn't have a cervical curve likely through poor posture and my accident, but now the healthy cervical curve is back. I also went to my PT and showed her an exercise you gave me\u2026 She said it was the perfect exercise\u2026 and would even show it to other patients. Very cool!",
        author: "JC",
        context: "HI"
      },
      {
        quote: "I've been having low-back pain for years consistently. After my first Qigong class with you, it was gone and I was pain-free for the first time in so long! I couldn't believe! Thank you for your classes, I will keep practicing :)",
        author: "M",
        context: "HI"
      },
      {
        quote: "Courtney, Thank you for one more class with great results. Today, I started the class with very achy, stiff shoulders and upper back\u2026 Less than half way into the practice, my shoulders had eased and the pain completely dissolved. I couldn't relate it to any specific movement, but it worked, like magic!",
        author: "KE",
        context: "AZ"
      },
      {
        quote: "Courtney, an amazing class. My shoulders were so tense, but now they're so calm after class! Today started out feeling weighed down and overwhelmed\u2026 I needed mental clarity. You really delivered.",
        author: "Kaitlin",
        context: "AZ"
      }
    ]
  },
  {
    label: 'Book',
    items: [
      {
        quote: "I finished your book beautifully written and so grateful I found it\u2026 Thank you Courtney for sharing your story and creating language for me about all the magic (synchronicities) that exists.",
        author: "AJ",
        context: "CA"
      },
      {
        quote: "I am enjoying reading your book. You demonstrate such wisdom and you do it in a warm friendly manner. It's as if you are sitting chatting with a friend. I am also learning a lot too. You did a great job!!",
        author: "Sandra",
        context: "Canada"
      },
      {
        quote: "Hey Courtney I just wanted to tell you: I started reading your book the other day and it inspired me to change up my morning routines from eating breakfast and watching an hour of TV, to going outside and eating breakfast and reading more of this lovely book over coffee. So thank you for writing it :)",
        author: "Venesa",
        context: "Germany"
      },
      {
        quote: "I wanted to let you know I received the gift of your book and it's been an enormous aid in my life. I have used it a great deal in various aspects of my life. I'm grateful to have your book in my possession. I hope you will continue to bring that insight to the world. Thank you so much for what you have provided to me personally.",
        author: "R",
        context: "AZ"
      }
    ]
  }
];

const TestimonialCard: React.FC<{ testimonial: PageTestimonial; index: number }> = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.7,
      delay: (index % 3) * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-transparent hover:border-sand-200 hover:shadow-md hover:-translate-y-1 transition-all duration-500 relative group h-full">
      <div className="absolute top-8 left-8 text-clay-100 opacity-40 group-hover:text-amber-500/10 transition-all duration-700">
        <Quote size={56} fill="currentColor" strokeWidth={0} />
      </div>

      <div className="relative z-10">
        <p className="font-serif text-sand-900 leading-relaxed text-xl mb-8 italic opacity-90">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center gap-4 pt-6 border-t border-sand-50 group-hover:border-sand-100 transition-colors duration-500">
          <div className="w-8 h-[1px] bg-clay-400 group-hover:w-12 transition-all duration-500"></div>
          <div>
            <p className="font-sans text-sm font-bold text-sand-900 tracking-wide uppercase">
              {testimonial.author}
            </p>
            {testimonial.context && (
              <p className="text-xs font-medium text-sand-500 mt-1">
                {testimonial.context}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Testimonials: React.FC = () => {
  return (
    <div className="animate-fade-in pb-24 relative overflow-x-hidden">
      <section className="py-32 bg-gradient-to-b from-white via-sand-50/50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-sand-100/50 pointer-events-none -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clay-50/50 rounded-full blur-[120px] -z-10 opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sand-100/40 rounded-full blur-[100px] -z-10 opacity-70 -translate-x-1/3 translate-y-1/4" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal width="100%" className="mb-20 text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-clay-600 mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-sand-900 italic mb-6">What clients say</h3>
          </Reveal>

          <div className="space-y-24">
            {CATEGORIES.map((category) => (
              <div key={category.label}>
                <Reveal width="100%" className="mb-12">
                  <div className="flex items-center gap-6">
                    <h4 className="text-2xl md:text-3xl font-serif text-sand-900 whitespace-nowrap">
                      {category.label}
                    </h4>
                    <div className="h-px bg-sand-200 flex-1" />
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                  {category.items.map((testimonial, idx) => (
                    <TestimonialCard
                      key={`${category.label}-${idx}`}
                      testimonial={testimonial}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
