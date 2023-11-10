import React, { useState } from 'react';

const faqData = [
  {
    question: "Do I need prior experience to join your BJJ classes?",
    answer: "No prior experience is required. Our classes are suitable for all skill levels, including beginners."
  },
  {
    question: "Can I try a class before committing to a membership?",
    answer: "Yes, we offer trial classes for newcomers. You can attend a class to get a feel for our training environment before deciding on a membership."
  },
  {
    question: "What's the cost of membership or class packages?",
    answer: "Our membership fees and class packages vary. Please check our pricing page or contact us directly for detailed information on costs and available packages."
  },
  {
    question: "How can I get started with BJJ training at your gym?",
    answer: "To get started, simply visit our gym during business hours or contact us to schedule an orientation. We'll guide you through the registration process and help you start your BJJ journey."
  },
  {
    question: "What should I wear to my first BJJ class?",
    answer: "For your first class, wear comfortable athletic clothing such as a rash guard and athletic shorts. If you don't have a gi (uniform) yet, no worries. Just bring yourself, and we'll guide you through the basics."
  }
];

export default function FAQ() {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <section className='faq'>
      <div className='accordion'>
        <h2>Questions</h2>
        {faqData.map((item, i) => (
          <div className='item' key={i}>
            <div className='question' onClick={() => toggle(i)}>
              <h4>{item.question}</h4>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            {selected === i && (
              <div className={selected === i ? 'answer.show' : 'answer'}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
