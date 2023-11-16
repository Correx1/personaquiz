import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Aos from "../Others/Aos";




function Result({ name, traitScores }) {



  const result = [
    {
      id: 1,
      trait: "The Hyperperfectionist",
      explanation:
        "Individuals with this trait type draws individuals into their circle through relentless hard work and unwavering dedication, striving to achieve excellence in all they produce. They surpass even the most junior team members in their commitment, occasionally expressing frustration and raising their voice when standards are not met. However, this behavior stems from a commitment to maintaining the highest standards rather than a negative trait. Yet, collaborating with such individuals unveils a different reality—they struggle to delegate tasks, insisting on overseeing every detail. It becomes apparent that their focus is more on power and control than on fostering group cohesion.",
      explanation2:
        "They often harbor dependency issues rooted in their family background. Trust is elusive for them, as any reliance on others awakens old wounds and anxieties. The compulsive need to micromanage fosters resentment and secret resistance among those they lead. Consequently, the group's organization suffers, as everything must flow through them, resulting in chaos and political infighting.",
      explanation3:
        "Hyper-perfectionists, prone to overworking, frequently experience health problems. They tend to attribute all shortcomings to others, believing no one works hard enough. Their pattern involves initial success followed by burnout and spectacular failures. Identifying this type early is crucial, as they prove insatiable, gradually wearing others down with their anxieties, abusiveness, and desire for control.",
      Suggestion:
        "Individuals with hyper-perfectionist traits can positively manage and leverage their characteristics by first cultivating self-awareness. Understanding the roots of their perfectionism and control tendencies allows them to channel these energies more effectively. Delegating tasks and empowering team members is a strength that can be honed, fostering a collaborative environment where shared responsibilities contribute to overall success. Additionally, developing open communication channels, flexibility in approach, and a balanced perspective on standards help create a more adaptable and harmonious work atmosphere.",
      Suggestion2:
        "The strengths inherent in hyper-perfectionists include an unparalleled commitment to high standards, an ability to drive themselves and others toward excellence, and a keen attention to detail. Their intense work ethic and dedication can inspire and motivate those around them. By harnessing these strengths and combining them with effective delegation, self-reflection, and empathy, individuals with hyper-perfectionist traits can transform their tendencies into powerful tools for success and collaborative achievement.",
    },
    {
      id: 2,
      trait: "The Relentless Rebel",
      explanation:
        "Individuals like these might seem really exciting at first. They don't like being told what to do and always root for the little guy. We all secretly like that rebellious attitude – it's like wanting to rebel against a teacher. They don't care about rules or traditions; they think that's for weak and boring people. They often have a sharp sense of humor that can be turned on you, but that's just part of who they are.",
      explanation2:
        "If you get to know them better, you'll see they can't help but feel superior. It's not about being morally better; it's a compulsion. Something in their past, maybe a disappointing parent, made them distrust and hate those in charge. They can't handle criticism because it feels like someone bossing them around.",
      explanation3:
        "They won't accept being told what to do; everything has to go their way. If you upset them, they'll paint you as the bad guy and make jokes at your expense. Their rebellious act is all about getting attention, and they become hooked on it. It all boils down to power – they won't let anyone be above them, and those who try will face consequences. Look at their history, and you'll see they often part ways with people on bad terms, fueled by hurtful words.",
      Suggestion:
        "Individuals with this rebellious trait can harness it positively by channeling their anti-authoritarian spirit into advocating for social justice or challenging oppressive systems. Their natural inclination to champion the underdog could make them effective advocates for change and catalysts for addressing societal issues. By leveraging their biting sense of humor constructively, they can raise awareness and inspire dialogue without alienating others.",
      Suggestion2:
        "Furthermore, their aversion to being controlled can serve them well in entrepreneurial pursuits or leadership roles where unconventional thinking is valued. Embracing their authenticity and independent mindset, they can excel in environments that encourage creativity and innovation. When directed towards constructive goals, their refusal to conform to norms can become a driving force for positive change, allowing them to challenge the status quo in meaningful ways.",
    },
    {
      id: 3,
      trait: "The Personalizer",
      explanation:
        "Individuals like this are really sensitive and thoughtful, which is nice but can make life tough for them. They might seem a bit sad, and that's because they take things personally and hold on to it. Even though they seem smart and good to work with, their sensitivity mostly goes inside, not outside.",
      explanation2:
        "When they were kids, they felt like they didn't get enough love, attention, or stuff from their parents. As they grow up, they keep feeling like they missed out on things. They go through life wanting others to give them things without asking, always checking if people notice them, respect them, or give them what they expect. They can get easily annoyed, pushing people away and making themselves even more sensitive.",
      explanation3:
        "They end up looking disappointed all the time and have a pattern of falling out with people. But they always see themselves as the one who got hurt. Be careful not to accidentally insult them because they remember for a long time and might want to get back at you. If you spot these traits early, it's better to avoid them, as they tend to make you feel guilty without reason.",
      Suggestion:
        "Individuals with this trait can transform their sensitivity into a strength by channeling it towards empathetic understanding and deep connection with others. Instead of internalizing every interaction, they can learn to communicate their feelings openly, fostering healthier relationships. Their innate thoughtfulness can be harnessed to cultivate a keen awareness of others' needs, making them exceptional listeners and supportive companions.",
      Suggestion2:
        "Their heightened sensitivity can serve as a valuable asset in creative pursuits and problem-solving, allowing them to perceive nuances that others might overlook. By recognizing and addressing the root causes of their internal struggles, individuals with this trait can redirect their emotional energy toward personal growth and resilience, transforming what might be perceived as a weakness into a source of strength and insight.",
    },
    {
      id: 4,
      trait: "The Drama Magnet",
      explanation:
        "People with this trait are really interesting to be around. They have lots of energy and cool stories. They're fun until things get messy. When they were kids, they figured out that the best way to get attention and love was by involving their parents in big problems. This turned into a habit – their way of feeling alive and important",
      explanation2:
        "Unlike most people who avoid arguments, they actually enjoy them. As you get to know them better, you'll hear more stories of fights in their life, but they always make themselves out to be the victim. You need to realize that what they want most is to get you involved in their issues, no matter how. ",
      explanation3:
        "They'll pull you into their drama so much that you'll feel bad for trying to step back. It's smart to spot them early on before you get caught up. Check their past for signs of this behavior, and if you think you're dealing with this type, it's best to distance yourself.",
      Suggestion:
        "Individuals with this trait possess a remarkable ability to engage others, drawing them into their vibrant world. If they channel their energy and storytelling prowess positively, they can become captivating communicators, inspiring and motivating those around them. Their animated features and wit can be powerful tools for fostering connection and injecting enthusiasm into various situations.",
      Suggestion2:
        "Moreover, these individuals, with their knack for navigating drama, could excel in fields that require conflict resolution or crisis management. If they learn to leverage their experiences in a constructive manner, turning challenges into opportunities for growth, they might emerge as resilient problem-solvers. By recognizing and redirecting their need for attention into pursuits that benefit not only themselves but also others, individuals with this trait can transform their inherent qualities into strengths that contribute positively to their personal and professional relationships.",
    },
    {
      id: 5,
      trait: "The Big Talker",
      explanation:
        "People with this trait are drawn to big ideas and projects but often need help and support. Despite appearing sympathetic, it's important to check if they've actually achieved things in the past. These folks are kind of torn inside. On one hand, they're scared of the effort and responsibility it takes to turn their ideas into reality. On the other hand, they really want attention and power.",
      explanation2:
        "This internal battle usually ends with their fear winning, and they back out at the last minute. They never seem to finish what they start and tend to blame others or find someone else to blame when things go wrong. This might come from having parents who were inconsistent and would suddenly get angry at them for small mistakes.",
      explanation3:
        "So, their main goal in life is to avoid situations where they might get criticized. They get good at talking and impressing people with stories, but when they're called out, they run away with excuses. If you notice this pattern in their past, it's probably best to enjoy their stories but not get too involved with them.",
      Suggestion:
        "Individuals with this trait can leverage their strengths by consciously addressing their fear of effort and responsibility. Recognizing this internal conflict is the first step. They can channel their desire for attention and power into productive avenues by setting realistic goals and gradually increasing responsibilities. By breaking down larger tasks into smaller, manageable steps, they can build confidence and reduce anxiety. Embracing accountability instead of avoiding it empowers them to take ownership of their actions.",
      Suggestion2:
        "Moreover, their proficiency in communication and storytelling can be harnessed positively. These individuals often possess persuasive skills, making them effective communicators. Encouraging them to use these talents to inspire and motivate others, while staying committed to their endeavors, can turn their ambivalence into a driving force for positive change. Ultimately, by addressing their internal conflicts and focusing on constructive communication and accountability, individuals with this trait can transform potential obstacles into catalysts for personal and professional growth.",
    },
    {
      id: 6,
      trait: "The Sexualizer",
      explanation:
        "Individuals with this trait exude a palpable intensity, particularly in matters of sexuality, displaying an unrestrained allure. They tend to intertwine work with pleasure, blurring conventional boundaries for appropriating such energy—a seemingly healthy blend that masks a compulsive drive rooted in a darker past. Early on, these individuals likely endured some form of sexual abuse, whether direct physical violation or subtler psychological manifestations through inappropriate parental looks and touches.",
      explanation2:
        "A deep-seated pattern takes hold, rendering them unable to control the inclination to perceive every relationship as potentially sexual. Sex becomes a means of self-validation, leading them down an initially thrilling and promiscuous path in their youth, as they effortlessly draw others into their captivating sphere. However, as they age, extended periods without this validation can spiral into depression and even thoughts of suicide, intensifying their desperation.",
      explanation3:
        "If in positions of leadership, they wield their power to fulfill their desires, all while cloaked in the guise of being natural and unrepressed. With time, their behavior becomes increasingly pathetic and disconcerting. In facing individuals with this trait, the only recourse is to safeguard oneself from becoming entangled at any level, as their compulsion remains beyond external intervention.",
      Suggestion:
        "Individuals with this trait can harness their intensity and charisma to positively impact others by channeling their energy into creative pursuits, leadership, or advocacy. Recognizing the root of their compulsions is crucial, and seeking therapy or support groups can provide a path to healing. Transforming their need for validation into a drive for personal growth and self-improvement can redirect their focus from external approval to internal fulfillment.",
      Suggestion2:
        "Their innate ability to captivate others can be leveraged to inspire and motivate, making them effective leaders or influential figures in areas they are passionate about. By fostering healthy relationships and establishing boundaries, they can reshape their perspective on intimacy, turning it into a source of connection and understanding rather than a means of validation. Embracing personal growth and seeking professional help can empower them to break free from the negative patterns, unlocking their potential to positively impact both themselves and those around them.",
    },
    {
      id: 7,
      trait: "The Pampered Prince/Princess",
      explanation:
        "People with this trait have a majestic vibe that captivates others effortlessly. They seem calm and a bit like they feel superior. It's nice to be around confident people who act like they're meant to be in charge. You might find yourself doing things for them without really knowing why. They have this way of making you want to take care of them.",
      explanation2:
        "When they were kids, their parents spoiled them and protected them from tough stuff. Some of them may have acted extra helpless to get special treatment. But now, as adults, they just want to recreate that pampered feeling from their childhood. If they don't get what they want, they might act like babies, pouting or throwing tantrums.",
      explanation3:
        "This pattern also shows up in their close relationships. If you're not into pampering others, being in a relationship with them can be frustrating because it's always on their terms. They struggle with adult challenges and either make others take care of them or turn to drinking and drugs for comfort. If you feel guilty for not helping them, it means you're caught up, and it's better to focus on taking care of yourself instead.",
      Suggestion:
        "Individuals with this trait possess a remarkable ability to influence and attract others, thanks to their regal demeanor and confident aura. To channel this trait positively, they can leverage their natural leadership qualities to inspire and guide those around them. By recognizing the impact they have on people, they can cultivate genuine connections and foster teamwork. Instead of relying on manipulation, they can develop authentic communication skills, fostering mutual respect and cooperation.",
      Suggestion2:
        "Moreover, their innate desire for care and pampering can be transformed into a strength by cultivating empathy and understanding for others. Rather than seeking external validation, they can focus on self-awareness and personal growth. This introspection allows them to navigate adult challenges with resilience, reducing dependency on others for support. By embracing their regal air as a source of inspiration rather than entitlement, individuals with this trait can positively influence their relationships and contribute to a harmonious environment.",
    },
    {
      id: 8,
      trait: "The Pleaser",
      explanation:
        "People with this trait seem really nice and considerate at first. They go out of their way to be charming and accommodating. But over time, you might start to notice doubts creeping in. Maybe they don't follow through on promises or don't do their job well. It's subtle, but it feels like they might be undermining you or talking behind your back.",
      explanation2:
        "These folks are like expert diplomats, always putting on a friendly front. But the thing is, their niceness isn't because they genuinely like people. It's more like a shield they developed because they had tough and critical parents who watched everything they did. Smiling and acting deferential became their way of avoiding trouble, and they just kept doing it.",
      explanation3:
        "They probably got good at lying to their parents, and that skill sticks with them. Behind their smiles, there's a lot of built-up resentment, and secretly, they might want to harm or take advantage of the people they're being nice to. So, be careful around people who are overly charming and polite—it could be a sign of passive-aggressive behavior, especially when you least expect it.",
      Suggestion:
        "Individuals with this trait can harness their adept social skills positively by leveraging their charm and diplomacy in collaborative settings. Instead of using niceness as a defense mechanism, they can employ it to foster genuine connections and build strong relationships. By focusing on authentic communication and empathy, they have the potential to become effective mediators and team players, contributing to a harmonious and cooperative environment",
      Suggestion2:
        "Moreover, their proficiency in navigating social dynamics and understanding others' perspectives can be a valuable asset in leadership roles. By embracing transparency and authenticity, individuals with this trait can transform their interpersonal skills into a strength that inspires trust and facilitates open communication within teams. In doing so, they can shift from a defensive stance to a proactive and constructive approach, channeling their social adeptness for the collective benefit of the group.",
    },
    {
      id: 9,
      trait: "The Saviour",
      explanation:
        "Individuals with this trait exhibit a strong inclination to rescue others from their challenges and predicaments. These individuals keenly identify signals of distress and promptly offer assistance, providing not only solutions but also guidance on reading materials, strategic approaches, and dietary choices. While the initial allure of their support is captivating, doubts surface when attempting to assert one's independence.",
      explanation2:
        "Often shaped by a childhood where they assumed caregiving roles for parents or siblings, these individuals compensate for the care deficit by deriving a sense of power from inverted relationships. Their primary source of satisfaction lies in rescuing and caring for others, demonstrating an intuitive ability to identify those in need of salvation. However, the compulsive nature of this behavior becomes evident through their tendency to exert control.",
      explanation3:
        "Genuine nobility is reflected when they empower individuals to stand independently after initial assistance; otherwise, their actions are driven more by a desire for power than true altruism. Cultivating self-reliance is advised, with a reminder to these rescuers that sometimes, they too need saving.",
      Suggestion:
        "Individuals with this nurturing trait can harness its positive aspects by channeling their caregiving instincts into constructive outlets. Their inherent strength lies in their ability to empathize and provide genuine support to others. By recognizing and appreciating their inclination to assist, they can develop healthy boundaries and encourage self-sufficiency in those they help. Transforming their nurturing tendencies into a positive force involves fostering an environment where individuals are empowered to take charge of their own lives. Emphasizing collaboration rather than control allows them to leverage their strength of compassion while avoiding the pitfalls of overbearing intervention.",
      Suggestion2:
        "Furthermore, these individuals can utilize their natural caretaking abilities in professions or activities that involve mentorship, counseling, or community service. By dedicating their energy to roles where their nurturing instincts contribute to the well-being of others, they can find fulfillment and positively impact the lives of those around them. Balancing their desire to help with an awareness of personal boundaries and encouraging autonomy enables them to turn this trait into a force for positive transformation.",
    },
    {
      id: 10,
      trait: "The Easy Moralizer",
      explanation:
        "People with this trait get really upset about things they think are unfair, and they talk about it a lot. They can be very convincing, and you might find yourself agreeing with them. But there's a catch. Sometimes, you'll notice they're not so great in how they treat their employees or how they talk to their spouse.",
      explanation2:
        "They might even have some secret habits or behaviors you catch a glimpse of. When they were kids, they felt guilty about doing things they enjoyed, and they got in trouble for it. This made them not like those parts of themselves and project those feelings onto others.",
      explanation3:
        "As adults, they see things in black and white—either people are good or evil, no in-between. They struggle with accepting that people aren't perfect. Their sense of what's right and wrong is like a habit; it's easy for them and doesn't require much effort. They fit in well with being overly careful with what they say to avoid offending others. But deep down, they're attracted to the very things they criticize. If you get close to them, be ready for them to question you, and be cautious if you notice they don't really understand or care about other people's feelings. Keep your distance.",
      Suggestion:
        "Individuals with this trait can harness its positive aspects by cultivating self-awareness and addressing the underlying sources of their internal conflicts. Recognizing and embracing their own imperfections allows them to develop empathy for others, fostering healthier relationships. Rather than projecting negativity, they can channel their passion for justice into constructive advocacy and contribute positively to social causes.",
      Suggestion2:
        "Their strength lies in their ability to articulate and champion their convictions. By leveraging their eloquence and conviction, they can inspire positive change and influence others towards more inclusive perspectives. Embracing a nuanced understanding of human nature, acknowledging the gray areas, and appreciating diverse viewpoints can transform their rigid morality into a more adaptable and empathetic approach, ultimately benefiting both themselves and the broader community.",
    },
  ];

  // Determine the trait with the highest score or randomly select one if there are multiple
  const highestTraits = Object.keys(traitScores).filter(
    (trait) => traitScores[trait] === Math.max(...Object.values(traitScores))
  );

  let likelyTraitResult = null;

  if (highestTraits.length > 0) {
    const randomHighestTrait =
      highestTraits[Math.floor(Math.random() * highestTraits.length)];
    likelyTraitResult = result.find(
      (item) => item.trait === randomHighestTrait
    );
  } else {
    
  }


  ///share button
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "PersonaQuiz",
          text: "Get to know your persona with this Quiz app!",
          url: "https://personaquiz.netlify.app",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      console.warn("Web Share API not supported.");
      // Implement your fallback sharing method here
    }
  };

  return (
    <div data-aos="fade-up" data-aos-delay="500">
      <Aos />

      <Nav />
      <div className="result">
        <div className="heading text-center mt-3 mb-3 p-3">
          <h2>PersonaQuiz Result</h2>
        </div>
        <div className="container ">
          <div className="trait ml-5 px-4 py-2">
            <h2>
              {name} your likely Trait is <br />
              <span>
                {likelyTraitResult ? likelyTraitResult.trait : "Unknown"}
              </span>
            </h2>
          </div>
          <div className="details mt-2 mx-2">
            <div
              className="explanation my-2"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <h3>Explanation</h3>
              <p>
                {likelyTraitResult
                  ? likelyTraitResult.explanation
                  : "No explanation available"}
              </p>
              <p>
                {likelyTraitResult
                  ? likelyTraitResult.explanation2
                  : "No explanation available"}
              </p>
            </div>

            <div
              className="suggestion mt-3"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <h3>Insight</h3>
              <p>
                {likelyTraitResult
                  ? likelyTraitResult.Suggestion
                  : "No suggestion available"}
              </p>
              <p>
                {likelyTraitResult
                  ? likelyTraitResult.Suggestion2
                  : "No suggestion available"}
              </p>
            </div>
           
          </div>
        </div>
      </div>

      <div className="note container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="disclaimer px-3 col-12">
            <p>
              <span>Disclaimer:</span> This character assessment app is intended
              for entertainment and self-reflection, drawing inspiration from
              concepts explored in "The Law of Human Nature" by Robert Greene.
              It is crucial to note that the app does not offer professional
              psychological advice, and users should not consider its results as
              definitive character analyses. <br />
              The app's questions and outcomes are based on interpretations of
              Greene's book, and as such, subjective variations may occur. Users
              should approach the results with an open mind, recognizing the
              inherent subjectivity in character assessments. <br />
              While the app aims to provide an engaging experience, it does not
              guarantee the accuracy of its interpretations, emphasizing the
              importance of using the outcomes as a starting point for
              self-reflection and personal growth.
            </p>
            <p>
              For deeper understanding of the concepts presented in the app,
              download the full PDF of the book{" "}
              <a
                href="/The law of human nature.pdf.pdf"
                download="The law of human nature.pdf"
              >
                Here
              </a>
            </p>
          </div>
        </div>
      </div>

      <button className="btn share pt-3 l-5" onClick={handleShare}>
        <p>Share site to your friends</p>
      </button>
      <Footer />
    </div>
  );
}

export default Result;
