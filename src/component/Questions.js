import React, { useState } from "react";
import Result from "./Result";
import Nav  from "./Nav";
import Footer from "./Footer";
import Aos from "../Others/Aos";


function Questions({ name, onNameChange }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [traitScores, setTraitScores] = useState({});
  const [showResult, setShowResult] = useState(false);


  const data = [
    {
      id: 1,
      trait: "The Hyperperfectionist",
      question: "Do you find it difficult to delegate tasks to others?",
      options: [
        {
          text: "I never delegate; i love it my way.",
          aggregriate: 4,
        },
        {
          text: "I have trouble delegating most tasks.",
          aggregriate: 3,
        },
        {
          text: "I'm selective about delegating tasks.",
          aggregriate: 2,
        },
        {
          text: "I delegate tasks comfortably.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 2,
      trait: "The Hyperperfectionist",
      question: "How do you respond to criticism or when things go wrong?",
      options: [
        {
          text: "I often blame others for any issues.",
          aggregriate: 4,
        },
        {
          text: "I'm sensitive to criticism but don't blame others.",
          aggregriate: 3,
        },
        {
          text: "I take responsibility and look for solutions.",
          aggregriate: 2,
        },
        {
          text: "I don't react strongly to criticism.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 3,
      trait: "The Hyperperfectionist",
      question:
        "How do you feel about others taking control of a something you're working on?",
      options: [
        {
          text: "I get extremely anxious about it.",
          aggregriate: 4,
        },
        {
          text: " I'd rather do everything myself.",
          aggregriate: 3,
        },
        {
          text: "I don't mind, as long as it's done perfectly.",
          aggregriate: 2,
        },
        {
          text: "It makes me uncomfortable.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 4,
      trait: "The Relentless Rebel",
      question:
        "How do you react when someone attempts to control or criticize you?",
      options: [
        {
          text: "I always view it as an attack and respond defiantly.",
          aggregriate: 4,
        },
        {
          text: "I tend to resist control and defend my independence.",
          aggregriate: 3,
        },
        {
          text: "I consider criticism but don't always react strongly.",
          aggregriate: 2,
        },
        {
          text: "I'm indifferent to control or criticism.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 5,
      trait: "The Relentless Rebel",
      question:
        "What is your stance on conformity and following established conventions?",
      options: [
        {
          text: "I resist conformity and conventions at all costs.",
          aggregriate: 4,
        },
        {
          text: "I question conventions but follow them when needed.",
          aggregriate: 3,
        },
        {
          text: "I prefer to conform to established norms.",
          aggregriate: 2,
        },
        {
          text: "I have no strong feelings about conformity.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 6,
      trait: "The Relentless Rebel",
      question:
        "How do you feel about people who challenge or rebel against authority?",
      options: [
        {
          text: "I admire and support those who challenge authority.",
          aggregriate: 4,
        },
        {
          text: "I respect those who rebel but don't always agree.",
          aggregriate: 3,
        },
        {
          text: "I have mixed feelings about rebellion.",
          aggregriate: 2,
        },
        {
          text: "I generally don't support rebellion.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 7,
      trait: "The Personalizer",
      question:
        "Do you tend to take things personally in your interactions with others?",
      options: [
        {
          text: "Yes, I often take everything personally.",
          aggregriate: 4,
        },
        {
          text: "I'm somewhat sensitive but try not to overreact.",
          aggregriate: 3,
        },
        {
          text: "I occasionally take things personally.",
          aggregriate: 2,
        },
        {
          text: "I rarely take things personally.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 8,
      trait: "The Personalizer",
      question:
        "How do you handle situations where you feel someone has not given you enough attention or respect?",
      options: [
        {
          text: "I become irritable and resentful.",
          aggregriate: 4,
        },
        {
          text: "I may express my feelings but try to understand.",
          aggregriate: 3,
        },
        {
          text: "I communicate my feelings calmly.",
          aggregriate: 2,
        },
        {
          text: "I'm typically not affected by such situations.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 9,
      trait: "The Personalizer",
      question:
        "Are you prone to holding grudges and taking a long time to get over perceived slights?",
      options: [
        {
          text: "I can hold a grudge but eventually move on.",
          aggregriate: 4,
        },
        {
          text: "I sometimes hold grudges, but it varies.",
          aggregriate: 3,
        },
        {
          text: "I let go of grudges relatively quickly.",
          aggregriate: 2,
        },
        {
          text: "I rarely hold grudges.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 10,
      trait: "The Drama Magnet",
      question:
        "Do you often find yourself in dramatic or conflict-ridden situations?",
      options: [
        {
          text: "Yes, drama seems to follow me.",
          aggregriate: 4,
        },
        {
          text: "I encounter drama occasionally.",
          aggregriate: 3,
        },
        {
          text: "I try to avoid drama and conflict.",
          aggregriate: 2,
        },
        {
          text: "Drama rarely touches my life.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 11,
      trait: "The Drama Magnet",
      question: "How do you handle conflicts when they arise?",
      options: [
        {
          text: "I engage in dramatic confrontations.",
          aggregriate: 4,
        },
        {
          text: "I address conflicts but avoid dramatic confrontations.",
          aggregriate: 3,
        },
        {
          text: "I prefer peaceful resolution to conflicts.",
          aggregriate: 2,
        },
        {
          text: "I never involve myself in conflicts.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 12,
      trait: "The Drama Magnet",
      question:
        "When others seek your help in their dramatic situations, how do you respond?",
      options: [
        {
          text: "I always get involved to help, no matter what.",
          aggregriate: 4,
        },
        {
          text: "I consider helping but set boundaries.",
          aggregriate: 3,
        },
        {
          text: "I offer help when I can, but it depends.",
          aggregriate: 2,
        },
        {
          text: "I rarely get involved in others' drama.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 13,
      trait: "The Big Talker",
      question:
        "How do you respond when it's time to put your ideas into action?",
      options: [
        {
          text: "I hesitate and make excuses not to proceed.",
          aggregriate: 4,
        },
        {
          text: "I sometimes find reasons not to act on my ideas.",
          aggregriate: 3,
        },
        {
          text: "I take action when I believe in an idea.",
          aggregriate: 2,
        },
        {
          text: "I'm action-oriented and implement ideas.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 14,
      trait: "The Big Talker",
      question: "How do you handle responsibility and commitment in projects?",
      options: [
        {
          text: "I struggle with commitment and often back out.",
          aggregriate: 4,
        },
        {
          text: "I sometimes have difficulty fulfilling commitments.",
          aggregriate: 3,
        },
        {
          text: "I'm responsible and committed to projects I start.",
          aggregriate: 2,
        },
        {
          text: "I consistently follow through on commitments.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 15,
      trait: "The Big Talker",
      question:
        "How often do you take your creative ideas and turn them into reality?",
      options: [
        {
          text: "I struggle to follow through with creative ideas.",
          aggregriate: 4,
        },
        {
          text: "Rarely.",
          aggregriate: 3,
        },
        {
          text: "Occasionally.",
          aggregriate: 2,
        },
        {
          text: "Almost always.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 16,
      trait: "The Sexualizer",
      question:
        "How comfortable are you with expressing your sexual desires openly?",
      options: [
        {
          text: "I'm very comfortable and open about my desires.",
          aggregriate: 4,
        },
        {
          text: "I'm somewhat open, but I respect boundaries.",
          aggregriate: 3,
        },
        {
          text: "I'm reserved but respectful about discussing desires.",
          aggregriate: 2,
        },
        {
          text: "I prefer to keep my desires private.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 17,
      trait: "The Sexualizer",
      question: "How do you view intimate relationships in your life?",
      options: [
        {
          text: "I value intimate relationships but have boundaries.",
          aggregriate: 4,
        },
        {
          text: "Intimate relationships are important but not consuming.",
          aggregriate: 3,
        },
        {
          text: "Intimate relationships are not a primary focus for me.",
          aggregriate: 2,
        },
        {
          text: "I don't prioritize intimate relationships in my life.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 18,
      trait: "The Sexualizer",
      question:
        "How do you handle boundaries when it comes to intimate or sexual relationships?",
      options: [
        {
          text: "I have few boundaries and tend to blur lines.",
          aggregriate: 4,
        },
        {
          text: "I set boundaries but sometimes struggle to maintain them.",
          aggregriate: 3,
        },
        {
          text: "I have clear boundaries and stick to them.",
          aggregriate: 2,
        },
        {
          text: "I have strong boundaries and rarely blur lines.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 19,
      trait: "The Pampered Prince/Princess",
      question:
        "How do you react when you don't receive the level of pampering you desire?",
      options: [
        {
          text: "I become upset, pout, or throw tantrums.",
          aggregriate: 4,
        },
        {
          text: "I express my disappointment.",
          aggregriate: 3,
        },
        {
          text: "I'm disappointed but understand it's not always possible.",
          aggregriate: 2,
        },
        {
          text: "I'm not affected when I'm not pampered.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 20,
      trait: "The Pampered Prince/Princess",
      question:
        "Do you have a tendency to be self-sufficient, or do you rely on others for assistance?",
      options: [
        {
          text: "I rely on others for many aspects of my life.",
          aggregriate: 4,
        },
        {
          text: "I seek help when I need it but am self-sufficient too.",
          aggregriate: 3,
        },
        {
          text: "I'm mostly self-sufficient but accept help when offered.",
          aggregriate: 2,
        },
        {
          text: "I'm highly self-sufficient and rarely rely on others.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 21,
      trait: "The Pampered Prince/Princess",
      question:
        "How do you feel about responsibility and independence in your life?",
      options: [
        {
          text: "I prefer not to take on too much responsibility.",
          aggregriate: 4,
        },
        {
          text: "I handle some responsibilities but rely on others.",
          aggregriate: 3,
        },
        {
          text: "I'm comfortable with moderate responsibilities.",
          aggregriate: 2,
        },
        {
          text: "I value independence and take on many responsibilities.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 22,
      trait: "The Pleaser",
      question:
        "Are you known for being exceptionally nice, accommodating, and charming?",
      options: [
        {
          text: "I'm known for being extremely nice and accommodating.",
          aggregriate: 4,
        },
        {
          text: "I'm quite nice and accommodating but with boundaries.",
          aggregriate: 3,
        },
        {
          text: "I'm straightforward and not overly accommodating.",
          aggregriate: 2,
        },
        {
          text: "I'm not particularly known for being nice or charming.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 23,
      trait: "The Pleaser",
      question: "How do you react when someone asks for your assistance?",
      options: [
        {
          text: "I always say yes and go above and beyond to help.",
          aggregriate: 4,
        },
        {
          text: "I help when I can but set boundaries.",
          aggregriate: 3,
        },
        {
          text: "I'm usually willing to help when asked.",
          aggregriate: 2,
        },
        {
          text: "I only help when I have time and desire.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 24,
      trait: "The Pleaser",
      question:
        "Do you often find yourself overcommitted and overwhelmed due to helping others?",
      options: [
        {
          text: "I'm frequently overcommitted and overwhelmed.",
          aggregriate: 4,
        },
        {
          text: "I'm occasionally overcommitted but manage it.",
          aggregriate: 3,
        },
        {
          text: "I try to balance helping others with my own needs.",
          aggregriate: 2,
        },
        {
          text: "I rarely overcommit myself to help others.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 25,
      trait: "The Saviour",
      question:
        "Are you often drawn to helping or saving people from their difficulties and problems?",
      options: [
        {
          text: "I frequently feel compelled to help or save others.",
          aggregriate: 4,
        },
        {
          text: "I'm willing to help, but I don't feel a compulsion to save.",
          aggregriate: 3,
        },
        {
          text: "I help others when they genuinely need it.",
          aggregriate: 2,
        },
        {
          text: "I prefer not to help others with their problems.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 26,
      trait: "The Saviour",
      question:
        "How do you react when the people you're trying to help assert their independence?",
      options: [
        {
          text: "I feel threatened and try to exert control.",
          aggregriate: 4,
        },
        {
          text: "I feel uncomfortable but respect their independence.",
          aggregriate: 3,
        },
        {
          text: "I'm supportive of their independence.",
          aggregriate: 2,
        },
        {
          text: "I prefer people to be independent.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 27,
      trait: "The Saviour",
      question: "How do you view your own ability to handle life's challenges?",
      options: [
        {
          text: "I'm always there to handle life's challenges for others.",
          aggregriate: 4,
        },
        {
          text: "I can handle my own life's challenges but offer help.",
          aggregriate: 3,
        },
        {
          text: "I can handle my own life's challenges without intervening.",
          aggregriate: 2,
        },
        {
          text: "I have difficulty handling my own life's challenges.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 28,
      trait: "The Easy Moralizer",
      question:
        "Are you often the first to point out and condemn perceived injustices or immoral behavior?",
      options: [
        {
          text: "I'm highly vigilant about injustice and quickly condemn it.",
          aggregriate: 4,
        },
        {
          text: "I do notice injustices and may speak out, but I'm balanced.",
          aggregriate: 3,
        },
        {
          text: "I sometimes comment on injustice when it's relevant.",
          aggregriate: 2,
        },
        {
          text: "I rarely point out injustices or moral issues.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 29,
      trait: "The Easy Moralizer",
      question:
        "Do you find it challenging to accept people's imperfections or moral flaws?",
      options: [
        {
          text: "I find it hard to accept imperfections and moral flaws.",
          aggregriate: 4,
        },
        {
          text: "I try to accept people's imperfections but it's not easy.",
          aggregriate: 3,
        },
        {
          text: "I can accept people's imperfections and flaws.",
          aggregriate: 2,
        },
        {
          text: "I don't dwell on others' imperfections.",
          aggregriate: 1,
        },
      ],
    },

    {
      id: 30,
      trait: "The Easy Moralizer",
      question:
        "How do you handle situations where someone behaves in a way you consider immoral?",
      options: [
        {
          text: "I feel a strong urge to change or condemn them.",
          aggregriate: 4,
        },
        {
          text: "I openly criticize their behavior.",
          aggregriate: 3,
        },
        {
          text: "I silently disapprove but don't confront.",
          aggregriate: 2,
        },
        {
          text: "I try to understand their perspective.",
          aggregriate: 1,
        },
      ],
    },
  ];

  const handleNext = () => {
    if (selectedOptions[data[currentQuestion].id]) {
      const trait = data[currentQuestion].trait;
      const score = selectedOptions[data[currentQuestion].id];
      setTraitScores((prevScores) => ({
        ...prevScores,
        [trait]: (prevScores[trait] || 0) + score,
      }));

      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [data[currentQuestion].id]: 0,
      }));

      if (currentQuestion < data.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
    
        // Introduce a delay before showing the result
        setTimeout(() => {
          setShowResult(true);
        }, 3000); 
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [data[currentQuestion].id]: option.aggregriate,
    }));
  };

  const renderOptions = () => {
    return data[currentQuestion].options.map((option, index) => (
      <li
        key={index}
        className={
          selectedOptions[data[currentQuestion].id] === option.aggregriate
            ? "active"
            : ""
        }
        onClick={() => handleOptionClick(option)}
      >
        {option.text}
      </li>
    ));
  };


  return (
    <div>
      <Aos />
      {showResult ? (
        <Result traitScores={traitScores} name={name} />
      ) : (
        <div data-aos="fade-in" data-aos-delay="500">
          <Nav />
          <div className="assessment">
            <div className="heading text-center mt-3 mb-3 p-3">
              <h2>Assessment Questions</h2>
            </div>

            <div className="container">
              <div className="row px-2">
                <div className="col-lg-12 ">
                  <div className="content" data-aos="fade-up" data-aos-delay="800">
                    <div className="questions text-center align-items-center justify-content-between">
                      <h2>
                        {data[currentQuestion].question}
                      </h2>
                    </div>

                    <div className="options">{renderOptions()}</div>
                    <div className=" text-center d-flex align-items-center justify-content-center pt-2">
                      <button className="btn" onClick={handlePrevious}>
                        <i className="fa fa-arrow-left"></i>
                      </button>
                      <button className="btn" onClick={handleNext}>
                        <i className="fa fa-arrow-right"></i>
                      </button>
                    </div>
                    <div className="no text-center pt-3">
                      <p>{`${currentQuestion + 1} of ${data.length}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Questions;
