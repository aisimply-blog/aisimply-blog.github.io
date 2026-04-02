/* AISimply — Shared Logic */
/* Blog: Tech & AI for Beginners */

(function() {
  'use strict';

  /* ====== ARTICLE DATABASE ====== */
  const SITE = {
    name: 'AISimply',
    tagline: 'AI & Tech Made Simple',
    taglineFr: "L'IA & la Tech en toute simplicit\u00e9",
    url: 'https://aisimply-blog.github.io',
    coffee: 'https://buymeacoffee.com/toolpailot'
  };

  const CATEGORIES = {
    en: [
      { id: 'ai-basics', name: 'AI Basics', description: 'Understand the fundamentals of artificial intelligence', icon: '\ud83e\udde0' },
      { id: 'ai-tools', name: 'AI Tools', description: 'Discover and compare the best AI tools available', icon: '\ud83d\udee0\ufe0f' },
      { id: 'how-to', name: 'How-To Guides', description: 'Step-by-step tutorials to get started with AI', icon: '\ud83d\udcd6' },
      { id: 'tech-essentials', name: 'Tech Essentials', description: 'Core technology concepts explained simply', icon: '\ud83d\udca1' }
    ],
    fr: [
      { id: 'ai-basics', name: "Bases de l'IA", description: "Comprendre les fondamentaux de l'intelligence artificielle", icon: '\ud83e\udde0' },
      { id: 'ai-tools', name: 'Outils IA', description: "D\u00e9couvrir et comparer les meilleurs outils d'IA", icon: '\ud83d\udee0\ufe0f' },
      { id: 'how-to', name: 'Guides Pratiques', description: "Tutoriels pas \u00e0 pas pour d\u00e9buter avec l'IA", icon: '\ud83d\udcd6' },
      { id: 'tech-essentials', name: 'Essentiels Tech', description: 'Les concepts technologiques cl\u00e9s expliqu\u00e9s simplement', icon: '\ud83d\udca1' }
    ]
  };

  const ARTICLES = [
    // === AI BASICS (1-10) ===
    { id: 1, slug: 'what-is-artificial-intelligence', category: 'ai-basics', date: '2026-03-29', readTime: 10,
      en: { title: "What Is Artificial Intelligence? A Complete Beginner's Guide", excerpt: "AI is everywhere, but what exactly is it? This plain-English guide breaks down artificial intelligence, how it works, and why it matters for your daily life." },
      fr: { title: "Qu'est-ce que l'intelligence artificielle\u00a0? Le guide complet pour d\u00e9butants", excerpt: "L'IA est partout, mais qu'est-ce que c'est exactement\u00a0? Ce guide en fran\u00e7ais simple explique l'intelligence artificielle, son fonctionnement et son impact sur votre quotidien." }
    },
    { id: 2, slug: 'machine-learning-explained', category: 'ai-basics', date: '2026-04-01', readTime: 9,
      en: { title: 'Machine Learning Explained: How Computers Learn from Data', excerpt: "Machine learning lets computers improve without being explicitly programmed. Discover how it works with everyday examples you'll actually understand." },
      fr: { title: "Le Machine Learning expliqu\u00e9\u00a0: comment les ordinateurs apprennent", excerpt: "Le machine learning permet aux ordinateurs de s'am\u00e9liorer sans programmation explicite. D\u00e9couvrez comment \u00e7a marche avec des exemples du quotidien." }
    },
    { id: 3, slug: 'deep-learning-vs-machine-learning', category: 'ai-basics', date: '2026-04-04', readTime: 8,
      en: { title: "Deep Learning vs Machine Learning: What's the Difference?", excerpt: "Deep learning and machine learning are related but different. Learn the key distinctions and when each approach is used in the real world." },
      fr: { title: 'Deep Learning vs Machine Learning\u00a0: quelle diff\u00e9rence\u00a0?', excerpt: "Le deep learning et le machine learning sont li\u00e9s mais diff\u00e9rents. D\u00e9couvrez les distinctions cl\u00e9s et quand chaque approche est utilis\u00e9e." }
    },
    { id: 4, slug: 'how-neural-networks-work', category: 'ai-basics', date: '2026-04-07', readTime: 10,
      en: { title: 'How Neural Networks Work: A Simple Visual Explanation', excerpt: "Neural networks power most modern AI. This visual guide explains how they process information, layer by layer, without any math jargon." },
      fr: { title: 'Comment fonctionnent les r\u00e9seaux de neurones\u00a0: explication visuelle', excerpt: "Les r\u00e9seaux de neurones alimentent la plupart des IA modernes. Ce guide visuel explique leur fonctionnement couche par couche, sans jargon math\u00e9matique." }
    },
    { id: 5, slug: 'what-is-natural-language-processing', category: 'ai-basics', date: '2026-04-10', readTime: 8,
      en: { title: 'What Is Natural Language Processing (NLP)? Everyday Examples', excerpt: "NLP is how AI understands human language. From Siri to spam filters, discover the technology behind machines that read, write, and talk." },
      fr: { title: "Qu'est-ce que le traitement du langage naturel (NLP)\u00a0?", excerpt: "Le NLP, c'est ainsi que l'IA comprend le langage humain. De Siri aux filtres anti-spam, d\u00e9couvrez cette technologie fascinante." }
    },
    { id: 6, slug: 'what-is-computer-vision', category: 'ai-basics', date: '2026-04-13', readTime: 8,
      en: { title: 'What Is Computer Vision? How AI Sees the World', excerpt: "Computer vision gives machines the ability to see and interpret images. Learn how it powers everything from face unlock to self-driving cars." },
      fr: { title: "Qu'est-ce que la vision par ordinateur\u00a0? Comment l'IA voit le monde", excerpt: "La vision par ordinateur donne aux machines la capacit\u00e9 de voir et interpr\u00e9ter les images. D\u00e9couvrez cette technologie fascinante." }
    },
    { id: 7, slug: 'what-are-large-language-models', category: 'ai-basics', date: '2026-04-16', readTime: 11,
      en: { title: 'What Are Large Language Models (LLMs)? ChatGPT and Beyond', excerpt: "LLMs like ChatGPT, Claude, and Gemini have changed how we interact with AI. Understand what they are, how they work, and their limitations." },
      fr: { title: 'Que sont les grands mod\u00e8les de langage (LLM)\u00a0? ChatGPT et au-del\u00e0', excerpt: "Les LLM comme ChatGPT, Claude et Gemini ont r\u00e9volutionn\u00e9 notre interaction avec l'IA. Comprenez ce qu'ils sont et comment ils fonctionnent." }
    },
    { id: 8, slug: 'ai-ethics-beginners-guide', category: 'ai-basics', date: '2026-04-19', readTime: 9,
      en: { title: "AI Ethics: A Beginner's Guide to Responsible AI", excerpt: "AI raises important ethical questions about bias, privacy, and jobs. This guide covers the key issues everyone should understand." },
      fr: { title: "\u00c9thique de l'IA\u00a0: guide du d\u00e9butant pour une IA responsable", excerpt: "L'IA soul\u00e8ve des questions \u00e9thiques importantes sur les biais, la vie priv\u00e9e et l'emploi. Ce guide couvre les enjeux cl\u00e9s." }
    },
    { id: 9, slug: 'history-of-artificial-intelligence', category: 'ai-basics', date: '2026-04-22', readTime: 10,
      en: { title: 'A Brief History of AI: From Turing to ChatGPT', excerpt: "AI didn't start with ChatGPT. Explore the fascinating 70-year journey from Alan Turing's ideas to today's generative AI revolution." },
      fr: { title: "Br\u00e8ve histoire de l'IA\u00a0: de Turing \u00e0 ChatGPT", excerpt: "L'IA n'a pas commenc\u00e9 avec ChatGPT. Explorez 70 ans d'histoire fascinante, des id\u00e9es d'Alan Turing \u00e0 la r\u00e9volution de l'IA g\u00e9n\u00e9rative." }
    },
    { id: 10, slug: 'what-is-generative-ai', category: 'ai-basics', date: '2026-04-25', readTime: 9,
      en: { title: 'What Is Generative AI? How It Creates Text, Images, and More', excerpt: "Generative AI can write essays, create art, compose music, and even code. Learn what makes it different and how it actually generates content." },
      fr: { title: "Qu'est-ce que l'IA g\u00e9n\u00e9rative\u00a0? Comment elle cr\u00e9e du contenu", excerpt: "L'IA g\u00e9n\u00e9rative peut \u00e9crire, cr\u00e9er des images, composer de la musique et m\u00eame coder. D\u00e9couvrez ce qui la rend unique." }
    },

    // === AI TOOLS (11-25) ===
    { id: 11, slug: 'best-free-ai-chatbots', category: 'ai-tools', date: '2026-04-28', readTime: 12,
      en: { title: 'Best Free AI Chatbots in 2026: Compared and Ranked', excerpt: "From ChatGPT to Claude to Gemini, we compare the top free AI chatbots. Find out which one is best for your specific needs." },
      fr: { title: 'Meilleurs chatbots IA gratuits en 2026\u00a0: comparatif complet', excerpt: "De ChatGPT \u00e0 Claude en passant par Gemini, nous comparons les meilleurs chatbots IA gratuits. Trouvez celui qui vous convient." }
    },
    { id: 12, slug: 'best-ai-image-generators', category: 'ai-tools', date: '2026-05-01', readTime: 11,
      en: { title: 'Best AI Image Generators: Free and Paid Options Compared', excerpt: "Create stunning images from text descriptions. We compare Midjourney, DALL-E, Stable Diffusion, and more to help you choose." },
      fr: { title: "Meilleurs g\u00e9n\u00e9rateurs d'images IA\u00a0: options gratuites et payantes", excerpt: "Cr\u00e9ez des images \u00e9poustouflantes \u00e0 partir de descriptions textuelles. Comparatif Midjourney, DALL-E, Stable Diffusion et plus." }
    },
    { id: 13, slug: 'best-ai-writing-tools', category: 'ai-tools', date: '2026-05-04', readTime: 11,
      en: { title: 'Best AI Writing Tools for Beginners in 2026', excerpt: "Whether you need help with emails, essays, or blog posts, these AI writing tools will boost your productivity without replacing your voice." },
      fr: { title: "Meilleurs outils d'\u00e9criture IA pour d\u00e9butants en 2026", excerpt: "Que vous ayez besoin d'aide pour vos emails, essais ou articles de blog, ces outils IA boosteront votre productivit\u00e9." }
    },
    { id: 14, slug: 'best-ai-coding-assistants', category: 'ai-tools', date: '2026-05-07', readTime: 10,
      en: { title: 'Best AI Coding Assistants: GitHub Copilot vs Alternatives', excerpt: "AI coding assistants can write, debug, and explain code. Compare GitHub Copilot, Cursor, Cody, and other top options for developers." },
      fr: { title: 'Meilleurs assistants de code IA\u00a0: GitHub Copilot vs alternatives', excerpt: "Les assistants de code IA peuvent \u00e9crire, d\u00e9boguer et expliquer du code. Comparatif GitHub Copilot, Cursor, Cody et autres." }
    },
    { id: 15, slug: 'best-ai-video-generators', category: 'ai-tools', date: '2026-05-10', readTime: 10,
      en: { title: 'Best AI Video Generators You Can Try for Free', excerpt: "Create professional-looking videos without filming. Discover the top AI video generators, from Sora to Runway and beyond." },
      fr: { title: 'Meilleurs g\u00e9n\u00e9rateurs de vid\u00e9os IA gratuits \u00e0 essayer', excerpt: "Cr\u00e9ez des vid\u00e9os professionnelles sans filmer. D\u00e9couvrez les meilleurs g\u00e9n\u00e9rateurs vid\u00e9o IA, de Sora \u00e0 Runway." }
    },
    { id: 16, slug: 'best-ai-music-generators', category: 'ai-tools', date: '2026-05-13', readTime: 9,
      en: { title: 'Best AI Music Generators: Create Songs in Minutes', excerpt: "Make music without instruments or training. These AI music generators let anyone create original songs, beats, and soundtracks." },
      fr: { title: "Meilleurs g\u00e9n\u00e9rateurs de musique IA\u00a0: cr\u00e9ez des morceaux en minutes", excerpt: "Faites de la musique sans instrument ni formation. Ces g\u00e9n\u00e9rateurs IA permettent \u00e0 chacun de cr\u00e9er des morceaux originaux." }
    },
    { id: 17, slug: 'best-ai-presentation-tools', category: 'ai-tools', date: '2026-05-16', readTime: 9,
      en: { title: 'Best AI Presentation Tools to Create Slides Instantly', excerpt: "Stop spending hours on slides. These AI tools generate beautiful presentations from a simple text prompt or outline." },
      fr: { title: "Meilleurs outils IA pour cr\u00e9er des pr\u00e9sentations instantan\u00e9ment", excerpt: "Arr\u00eatez de passer des heures sur vos slides. Ces outils IA g\u00e9n\u00e8rent de belles pr\u00e9sentations \u00e0 partir d'un simple texte." }
    },
    { id: 18, slug: 'best-ai-productivity-tools', category: 'ai-tools', date: '2026-05-19', readTime: 11,
      en: { title: 'Best AI Productivity Tools to Save Hours Every Week', excerpt: "From smart email management to automated scheduling, these AI productivity tools will reclaim your time and boost your efficiency." },
      fr: { title: "Meilleurs outils IA de productivit\u00e9 pour gagner des heures chaque semaine", excerpt: "De la gestion intelligente des emails \u00e0 la planification automatis\u00e9e, ces outils IA vous feront gagner un temps pr\u00e9cieux." }
    },
    { id: 19, slug: 'best-ai-learning-platforms', category: 'ai-tools', date: '2026-05-22', readTime: 10,
      en: { title: 'Best Platforms to Learn AI and Machine Learning for Free', excerpt: "Want to go deeper into AI? These free learning platforms offer courses from beginner to advanced, taught by top universities and experts." },
      fr: { title: "Meilleures plateformes pour apprendre l'IA gratuitement", excerpt: "Envie d'approfondir l'IA\u00a0? Ces plateformes gratuites proposent des cours du d\u00e9butant \u00e0 l'avanc\u00e9, par les meilleures universit\u00e9s." }
    },
    { id: 20, slug: 'chatgpt-vs-gemini-vs-claude', category: 'ai-tools', date: '2026-05-25', readTime: 13,
      en: { title: 'ChatGPT vs Gemini vs Claude: Which AI Assistant Is Best?', excerpt: "The three biggest AI assistants go head-to-head. We compare features, strengths, weaknesses, and pricing to help you choose." },
      fr: { title: 'ChatGPT vs Gemini vs Claude\u00a0: quel assistant IA choisir\u00a0?', excerpt: "Les trois plus grands assistants IA face \u00e0 face. Comparatif des fonctionnalit\u00e9s, forces, faiblesses et tarifs." }
    },
    { id: 21, slug: 'best-ai-photo-editors', category: 'ai-tools', date: '2026-05-28', readTime: 10,
      en: { title: 'Best AI Photo Editors: Remove Backgrounds, Enhance, and More', excerpt: "Edit photos like a pro without Photoshop skills. These AI photo editors handle background removal, enhancement, and retouching automatically." },
      fr: { title: "\u00c9diteurs photo IA\u00a0: supprimez les fonds, am\u00e9liorez vos images et plus", excerpt: "Retouchez vos photos comme un pro sans comp\u00e9tences Photoshop. Ces \u00e9diteurs IA g\u00e8rent tout automatiquement." }
    },
    { id: 22, slug: 'best-ai-translation-tools', category: 'ai-tools', date: '2026-05-31', readTime: 9,
      en: { title: 'Best AI Translation Tools: Beyond Google Translate', excerpt: "AI translation has come a long way. Discover tools that deliver near-human quality translations for documents, conversations, and websites." },
      fr: { title: 'Meilleurs outils de traduction IA\u00a0: au-del\u00e0 de Google Translate', excerpt: "La traduction IA a fait d'\u00e9normes progr\u00e8s. D\u00e9couvrez des outils offrant des traductions quasi humaines pour vos documents et conversations." }
    },
    { id: 23, slug: 'best-ai-note-taking-apps', category: 'ai-tools', date: '2026-06-03', readTime: 9,
      en: { title: 'Best AI Note-Taking Apps That Summarize Your Meetings', excerpt: "Never miss a detail in meetings again. These AI note-taking apps record, transcribe, and summarize your conversations automatically." },
      fr: { title: "Meilleures apps de prise de notes IA qui r\u00e9sument vos r\u00e9unions", excerpt: "Ne perdez plus jamais un d\u00e9tail en r\u00e9union. Ces apps IA enregistrent, transcrivent et r\u00e9sument vos conversations automatiquement." }
    },
    { id: 24, slug: 'best-ai-resume-builders', category: 'ai-tools', date: '2026-06-06', readTime: 9,
      en: { title: 'Best AI Resume Builders to Land Your Next Job', excerpt: "Let AI help you craft a winning resume. These tools optimize your CV for ATS systems and highlight your strengths effectively." },
      fr: { title: 'Meilleurs cr\u00e9ateurs de CV IA pour d\u00e9crocher votre prochain emploi', excerpt: "Laissez l'IA vous aider \u00e0 cr\u00e9er un CV gagnant. Ces outils optimisent votre CV pour les syst\u00e8mes ATS et mettent en valeur vos atouts." }
    },
    { id: 25, slug: 'best-free-ai-tools-students', category: 'ai-tools', date: '2026-06-09', readTime: 12,
      en: { title: '15 Best Free AI Tools Every Student Should Know', excerpt: "From research assistants to study aids, these free AI tools will make your student life easier and more productive." },
      fr: { title: '15 meilleurs outils IA gratuits que chaque \u00e9tudiant devrait conna\u00eetre', excerpt: "Des assistants de recherche aux aides \u00e0 l'\u00e9tude, ces outils IA gratuits rendront votre vie \u00e9tudiante plus facile et productive." }
    },

    // === HOW-TO GUIDES (26-40) ===
    { id: 26, slug: 'how-to-use-chatgpt-beginners', category: 'how-to', date: '2026-06-12', readTime: 11,
      en: { title: "How to Use ChatGPT: A Step-by-Step Beginner's Guide", excerpt: "New to ChatGPT? This hands-on guide walks you through setup, your first conversation, and tips to get the most out of it." },
      fr: { title: 'Comment utiliser ChatGPT\u00a0: guide pas \u00e0 pas pour d\u00e9butants', excerpt: "Nouveau sur ChatGPT\u00a0? Ce guide pratique vous accompagne de la cr\u00e9ation de compte aux astuces avanc\u00e9es." }
    },
    { id: 27, slug: 'how-to-write-ai-prompts', category: 'how-to', date: '2026-06-15', readTime: 12,
      en: { title: 'How to Write Effective AI Prompts: The Complete Guide', excerpt: "The quality of AI output depends on your prompts. Master the art of prompt engineering with practical techniques and real examples." },
      fr: { title: 'Comment \u00e9crire des prompts IA efficaces\u00a0: le guide complet', excerpt: "La qualit\u00e9 des r\u00e9ponses IA d\u00e9pend de vos prompts. Ma\u00eetrisez l'art du prompt engineering avec des techniques pratiques et des exemples." }
    },
    { id: 28, slug: 'how-to-create-ai-images', category: 'how-to', date: '2026-06-18', readTime: 10,
      en: { title: "How to Create AI Images: A Beginner's Tutorial", excerpt: "Learn to generate stunning images with AI. This tutorial covers prompting techniques, style control, and the best free tools to start with." },
      fr: { title: "Comment cr\u00e9er des images avec l'IA\u00a0: tutoriel pour d\u00e9butants", excerpt: "Apprenez \u00e0 g\u00e9n\u00e9rer des images avec l'IA. Ce tutoriel couvre les techniques de prompting, le contr\u00f4le du style et les meilleurs outils gratuits." }
    },
    { id: 29, slug: 'how-to-use-ai-for-studying', category: 'how-to', date: '2026-06-21', readTime: 10,
      en: { title: 'How to Use AI for Studying: Smarter Learning Strategies', excerpt: "AI can be your ultimate study buddy. Learn how to use it for note-taking, flashcards, practice questions, and understanding complex topics." },
      fr: { title: "Comment utiliser l'IA pour \u00e9tudier\u00a0: strat\u00e9gies d'apprentissage intelligent", excerpt: "L'IA peut \u00eatre votre meilleur partenaire d'\u00e9tude. D\u00e9couvrez comment l'utiliser pour la prise de notes, les flashcards et bien plus." }
    },
    { id: 30, slug: 'how-to-automate-tasks-with-ai', category: 'how-to', date: '2026-06-24', readTime: 11,
      en: { title: 'How to Automate Repetitive Tasks with AI Tools', excerpt: "Stop doing the same tasks manually. Learn how to use AI automation tools like Zapier, Make, and AI assistants to save hours every week." },
      fr: { title: "Comment automatiser les t\u00e2ches r\u00e9p\u00e9titives avec l'IA", excerpt: "Arr\u00eatez de faire les m\u00eames t\u00e2ches manuellement. Apprenez \u00e0 utiliser les outils d'automatisation IA pour gagner des heures chaque semaine." }
    },
    { id: 31, slug: 'how-to-use-ai-for-writing', category: 'how-to', date: '2026-06-27', readTime: 10,
      en: { title: 'How to Use AI for Writing: Emails, Essays, and More', excerpt: "AI can help you write better and faster. Learn practical techniques for drafting emails, essays, reports, and creative content with AI assistance." },
      fr: { title: "Comment utiliser l'IA pour \u00e9crire\u00a0: emails, essais et plus", excerpt: "L'IA peut vous aider \u00e0 \u00e9crire mieux et plus vite. Techniques pratiques pour r\u00e9diger emails, essais et contenus cr\u00e9atifs avec l'IA." }
    },
    { id: 32, slug: 'how-to-build-chatbot-no-code', category: 'how-to', date: '2026-06-30', readTime: 11,
      en: { title: 'How to Build an AI Chatbot Without Coding', excerpt: "You don't need to be a developer to create an AI chatbot. This guide shows you how to build one using no-code platforms in under an hour." },
      fr: { title: 'Comment cr\u00e9er un chatbot IA sans coder', excerpt: "Pas besoin d'\u00eatre d\u00e9veloppeur pour cr\u00e9er un chatbot IA. Ce guide vous montre comment en cr\u00e9er un avec des plateformes no-code en moins d'une heure." }
    },
    { id: 33, slug: 'how-to-use-ai-for-job-search', category: 'how-to', date: '2026-07-03', readTime: 10,
      en: { title: 'How to Use AI for Your Job Search in 2026', excerpt: "From optimizing your resume to preparing for interviews, AI can supercharge your job search. Here are the best strategies and tools." },
      fr: { title: "Comment utiliser l'IA pour votre recherche d'emploi en 2026", excerpt: "De l'optimisation de votre CV \u00e0 la pr\u00e9paration d'entretiens, l'IA peut booster votre recherche d'emploi. Voici les meilleures strat\u00e9gies." }
    },
    { id: 34, slug: 'how-to-fact-check-ai-responses', category: 'how-to', date: '2026-07-06', readTime: 8,
      en: { title: "How to Fact-Check AI Responses: Don't Trust Blindly", excerpt: "AI can be confidently wrong. Learn how to verify AI-generated information, spot hallucinations, and develop critical thinking habits." },
      fr: { title: "Comment v\u00e9rifier les r\u00e9ponses de l'IA\u00a0: ne faites pas confiance aveugl\u00e9ment", excerpt: "L'IA peut se tromper avec assurance. Apprenez \u00e0 v\u00e9rifier les informations g\u00e9n\u00e9r\u00e9es par l'IA et \u00e0 rep\u00e9rer les hallucinations." }
    },
    { id: 35, slug: 'how-to-protect-privacy-from-ai', category: 'how-to', date: '2026-07-09', readTime: 9,
      en: { title: 'How to Protect Your Privacy in the Age of AI', excerpt: "AI systems collect and process vast amounts of data. Learn practical steps to protect your personal information while still using AI tools." },
      fr: { title: "Comment prot\u00e9ger votre vie priv\u00e9e \u00e0 l'\u00e8re de l'IA", excerpt: "Les syst\u00e8mes d'IA collectent d'\u00e9normes quantit\u00e9s de donn\u00e9es. Apprenez \u00e0 prot\u00e9ger vos informations personnelles tout en utilisant l'IA." }
    },
    { id: 36, slug: 'how-to-use-ai-for-small-business', category: 'how-to', date: '2026-07-12', readTime: 12,
      en: { title: 'How to Use AI for Your Small Business: A Practical Guide', excerpt: "AI isn't just for big companies. Discover affordable AI tools and strategies that can help your small business compete and grow." },
      fr: { title: "Comment utiliser l'IA pour votre petite entreprise\u00a0: guide pratique", excerpt: "L'IA n'est pas r\u00e9serv\u00e9e aux grandes entreprises. D\u00e9couvrez des outils et strat\u00e9gies IA accessibles pour d\u00e9velopper votre activit\u00e9." }
    },
    { id: 37, slug: 'how-to-create-ai-videos', category: 'how-to', date: '2026-07-15', readTime: 10,
      en: { title: 'How to Create AI Videos: From Script to Screen', excerpt: "Learn how to generate videos using AI, from writing scripts to creating visuals and adding voiceovers. No video editing skills required." },
      fr: { title: "Comment cr\u00e9er des vid\u00e9os avec l'IA\u00a0: du script \u00e0 l'\u00e9cran", excerpt: "Apprenez \u00e0 g\u00e9n\u00e9rer des vid\u00e9os avec l'IA, de l'\u00e9criture du script \u00e0 la cr\u00e9ation de visuels. Aucune comp\u00e9tence en montage requise." }
    },
    { id: 38, slug: 'how-to-use-midjourney', category: 'how-to', date: '2026-07-18', readTime: 11,
      en: { title: 'How to Use Midjourney: Create Stunning AI Art', excerpt: "Midjourney creates breathtaking images from text. This step-by-step guide covers setup, prompting tips, and advanced techniques." },
      fr: { title: "Comment utiliser Midjourney\u00a0: cr\u00e9ez de l'art IA \u00e9poustouflant", excerpt: "Midjourney cr\u00e9e des images \u00e0 couper le souffle \u00e0 partir de texte. Guide pas \u00e0 pas\u00a0: configuration, astuces de prompting et techniques avanc\u00e9es." }
    },
    { id: 39, slug: 'how-to-train-custom-ai-model', category: 'how-to', date: '2026-07-21', readTime: 10,
      en: { title: "Can You Train Your Own AI? A Beginner's Overview", excerpt: "Training a custom AI model sounds complex, but there are accessible ways to get started. Learn about fine-tuning, no-code options, and more." },
      fr: { title: "Peut-on entra\u00eener sa propre IA\u00a0? Introduction pour d\u00e9butants", excerpt: "Entra\u00eener un mod\u00e8le IA semble complexe, mais il existe des moyens accessibles. D\u00e9couvrez le fine-tuning, les options no-code et plus." }
    },
    { id: 40, slug: 'how-to-use-ai-for-cooking', category: 'how-to', date: '2026-07-24', readTime: 8,
      en: { title: 'How to Use AI for Meal Planning and Cooking Ideas', excerpt: "Stuck on what to cook? AI can generate recipes from ingredients you have, plan weekly meals, and even account for dietary restrictions." },
      fr: { title: "Comment utiliser l'IA pour planifier vos repas et trouver des id\u00e9es cuisine", excerpt: "En panne d'id\u00e9es cuisine\u00a0? L'IA peut g\u00e9n\u00e9rer des recettes \u00e0 partir de vos ingr\u00e9dients et planifier vos repas de la semaine." }
    },

    // === TECH ESSENTIALS (41-50) ===
    { id: 41, slug: 'cloud-computing-explained', category: 'tech-essentials', date: '2026-07-27', readTime: 9,
      en: { title: 'Cloud Computing Explained: What It Is and Why It Matters', excerpt: "You use the cloud every day without realizing it. Understand what cloud computing means, how it works, and why it changed everything." },
      fr: { title: "Le cloud computing expliqu\u00e9\u00a0: ce que c'est et pourquoi c'est important", excerpt: "Vous utilisez le cloud chaque jour sans le savoir. Comprenez ce que signifie le cloud computing et pourquoi il a tout chang\u00e9." }
    },
    { id: 42, slug: 'what-is-an-api', category: 'tech-essentials', date: '2026-07-30', readTime: 8,
      en: { title: 'What Is an API? A Simple Explanation for Non-Developers', excerpt: "APIs are the invisible glue of the internet. This jargon-free explanation helps you understand what APIs do and why they matter." },
      fr: { title: "Qu'est-ce qu'une API\u00a0? Explication simple pour non-d\u00e9veloppeurs", excerpt: "Les API sont la colle invisible d'internet. Cette explication sans jargon vous aide \u00e0 comprendre ce que font les API et pourquoi elles comptent." }
    },
    { id: 43, slug: 'cybersecurity-basics-beginners', category: 'tech-essentials', date: '2026-08-02', readTime: 10,
      en: { title: 'Cybersecurity Basics: How to Stay Safe Online in 2026', excerpt: "Protect yourself from hackers, scams, and data breaches. This practical guide covers passwords, phishing, VPNs, and essential security habits." },
      fr: { title: 'Bases de la cybers\u00e9curit\u00e9\u00a0: comment rester en s\u00e9curit\u00e9 en ligne en 2026', excerpt: "Prot\u00e9gez-vous des hackers, arnaques et fuites de donn\u00e9es. Guide pratique sur les mots de passe, le phishing, les VPN et les bonnes habitudes." }
    },
    { id: 44, slug: 'what-is-blockchain-simple', category: 'tech-essentials', date: '2026-08-05', readTime: 9,
      en: { title: 'What Is Blockchain? A Simple Explanation Without the Hype', excerpt: "Beyond the crypto buzz, blockchain is a fascinating technology. Learn how it actually works and where it's being used beyond cryptocurrency." },
      fr: { title: 'Qu\'est-ce que la blockchain\u00a0? Explication simple sans le battage m\u00e9diatique', excerpt: "Au-del\u00e0 du buzz crypto, la blockchain est une technologie fascinante. D\u00e9couvrez comment elle fonctionne vraiment et ses usages au-del\u00e0 des cryptomonnaies." }
    },
    { id: 45, slug: 'internet-of-things-explained', category: 'tech-essentials', date: '2026-08-08', readTime: 8,
      en: { title: 'The Internet of Things (IoT) Explained: Your Smart Home Guide', excerpt: "Smart speakers, connected thermostats, robot vacuums — welcome to IoT. Understand how these devices work together and what to watch out for." },
      fr: { title: "L'Internet des Objets (IoT) expliqu\u00e9\u00a0: guide de la maison connect\u00e9e", excerpt: "Enceintes connect\u00e9es, thermostats intelligents, robots aspirateurs \u2014 bienvenue dans l'IoT. Comprenez comment ces appareils fonctionnent ensemble." }
    },
    { id: 46, slug: 'what-is-open-source', category: 'tech-essentials', date: '2026-08-11', readTime: 8,
      en: { title: 'What Is Open Source? Why Free Software Matters', excerpt: "Open source powers most of the internet. Learn what it means, why companies give away code for free, and how it affects you." },
      fr: { title: "Qu'est-ce que l'open source\u00a0? Pourquoi le logiciel libre compte", excerpt: "L'open source fait tourner la majeure partie d'internet. D\u00e9couvrez ce que \u00e7a signifie et pourquoi les entreprises donnent leur code gratuitement." }
    },
    { id: 47, slug: 'vpn-explained-beginners', category: 'tech-essentials', date: '2026-08-14', readTime: 9,
      en: { title: 'VPNs Explained: Do You Really Need One?', excerpt: "VPN ads are everywhere, but do you actually need one? Get an honest, unbiased breakdown of what VPNs do, their limits, and when they help." },
      fr: { title: 'Les VPN expliqu\u00e9s\u00a0: en avez-vous vraiment besoin\u00a0?', excerpt: "Les pubs VPN sont partout, mais en avez-vous vraiment besoin\u00a0? Analyse honn\u00eate de ce que font les VPN, leurs limites et quand ils sont utiles." }
    },
    { id: 48, slug: 'quantum-computing-beginners', category: 'tech-essentials', date: '2026-08-17', readTime: 10,
      en: { title: 'Quantum Computing for Beginners: What You Need to Know', excerpt: "Quantum computers promise to revolutionize computing. Understand the basics of qubits, superposition, and why it matters for the future." },
      fr: { title: "L'informatique quantique pour d\u00e9butants\u00a0: ce qu'il faut savoir", excerpt: "Les ordinateurs quantiques promettent de r\u00e9volutionner l'informatique. Comprenez les bases des qubits, la superposition et les enjeux futurs." }
    },
    { id: 49, slug: 'will-ai-replace-my-job', category: 'tech-essentials', date: '2026-08-20', readTime: 11,
      en: { title: 'Will AI Replace My Job? What Experts Actually Say', excerpt: "The most-asked question about AI. We look at the research, expert opinions, and data to give you a realistic and reassuring answer." },
      fr: { title: "L'IA va-t-elle remplacer mon emploi\u00a0? Ce que disent vraiment les experts", excerpt: "La question la plus pos\u00e9e sur l'IA. Nous analysons les recherches, les avis d'experts et les donn\u00e9es pour une r\u00e9ponse r\u00e9aliste." }
    },
    { id: 50, slug: 'ai-glossary-beginners', category: 'tech-essentials', date: '2026-08-23', readTime: 14,
      en: { title: 'AI Glossary: 50 Terms Every Beginner Should Know', excerpt: "From algorithms to zero-shot learning, this comprehensive glossary defines the AI terms you keep seeing. Bookmark this one." },
      fr: { title: "Glossaire IA\u00a0: 50 termes que chaque d\u00e9butant devrait conna\u00eetre", excerpt: "Des algorithmes au zero-shot learning, ce glossaire complet d\u00e9finit les termes IA que vous voyez partout. \u00c0 mettre en favoris." }
    }
  ];

  /* ====== LANGUAGE DETECTION ====== */
  function getLang() {
    const path = window.location.pathname;
    return path.includes('/fr/') || path.endsWith('/fr') ? 'fr' : 'en';
  }

  function getBasePath() {
    const lang = getLang();
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length;
    if (lang === 'fr') {
      if (path.includes('/blog/')) return '../../';
      if (path.includes('/categories/')) return '../../';
      return '../';
    } else {
      if (path.includes('/blog/')) return '../';
      if (path.includes('/categories/')) return '../';
      return '';
    }
  }

  /* ====== HEADER INJECTION ====== */
  function injectHeader() {
    const lang = getLang();
    const base = getBasePath();
    const otherLang = lang === 'en' ? 'fr' : 'en';
    const currentPath = window.location.pathname;

    let altPath;
    if (lang === 'en') {
      altPath = currentPath === '/' || currentPath === '/index.html'
        ? base + 'fr/index.html'
        : base + 'fr/' + currentPath.replace(/^\//, '');
    } else {
      altPath = currentPath.replace(/\/fr\//, '/').replace(/\/fr$/, '/');
      if (!altPath.startsWith('/')) altPath = '/' + altPath;
    }

    const labels = {
      en: { home: 'Home', blog: 'Blog', categories: 'Categories', about: 'About' },
      fr: { home: 'Accueil', blog: 'Blog', categories: 'Cat\u00e9gories', about: '\u00c0 propos' }
    };
    const l = labels[lang];

    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
      <div class="header-inner">
        <a href="${base}${lang === 'fr' ? 'fr/' : ''}index.html" class="site-logo">
          <span class="logo-icon">\u2728</span> ${SITE.name}
        </a>
        <nav class="header-nav" id="mainNav">
          <a href="${base}${lang === 'fr' ? 'fr/' : ''}index.html">${l.home}</a>
          <a href="${base}${lang === 'fr' ? 'fr/' : ''}blog/index.html">${l.blog}</a>
          <a href="${base}${lang === 'fr' ? 'fr/' : ''}categories/ai-basics.html">${l.categories}</a>
          <a href="${base}${lang === 'fr' ? 'fr/' : ''}about.html">${l.about}</a>
        </nav>
        <div class="header-actions">
          <a href="${altPath}" class="lang-toggle">${otherLang}</a>
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">\u263e</button>
          <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu">\u2630</button>
        </div>
      </div>`;
    document.body.prepend(header);

    // Mobile menu
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');
    if (btn && nav) {
      btn.addEventListener('click', () => nav.classList.toggle('open'));
    }
  }

  /* ====== FOOTER INJECTION ====== */
  function injectFooter() {
    const lang = getLang();
    const base = getBasePath();
    const prefix = lang === 'fr' ? 'fr/' : '';
    const year = new Date().getFullYear();

    const labels = {
      en: {
        desc: 'AI and technology explained in plain English. No jargon, no hype \u2014 just clear, helpful guides for beginners.',
        explore: 'Explore', home: 'Home', blog: 'All Articles', about: 'About',
        categories: 'Categories', aiBasics: 'AI Basics', aiTools: 'AI Tools', howTo: 'How-To Guides', techEssentials: 'Tech Essentials',
        support: 'Support', privacy: 'Privacy Policy', coffee: 'Buy Me a Coffee', rss: 'RSS Feed',
        rights: `\u00a9 ${year} ${SITE.name}. All rights reserved.`
      },
      fr: {
        desc: "L'IA et la technologie expliqu\u00e9es simplement. Pas de jargon, pas de battage \u2014 juste des guides clairs pour d\u00e9butants.",
        explore: 'Explorer', home: 'Accueil', blog: 'Tous les articles', about: '\u00c0 propos',
        categories: 'Cat\u00e9gories', aiBasics: "Bases de l'IA", aiTools: 'Outils IA', howTo: 'Guides Pratiques', techEssentials: 'Essentiels Tech',
        support: 'Support', privacy: 'Politique de confidentialit\u00e9', coffee: 'Offrir un caf\u00e9', rss: 'Flux RSS',
        rights: `\u00a9 ${year} ${SITE.name}. Tous droits r\u00e9serv\u00e9s.`
      }
    };
    const l = labels[lang];

    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="site-logo"><span class="logo-icon">\u2728</span> ${SITE.name}</span>
          <p>${l.desc}</p>
        </div>
        <div class="footer-col">
          <h4>${l.explore}</h4>
          <ul>
            <li><a href="${base}${prefix}index.html">${l.home}</a></li>
            <li><a href="${base}${prefix}blog/index.html">${l.blog}</a></li>
            <li><a href="${base}${prefix}about.html">${l.about}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>${l.categories}</h4>
          <ul>
            <li><a href="${base}${prefix}categories/ai-basics.html">${l.aiBasics}</a></li>
            <li><a href="${base}${prefix}categories/ai-tools.html">${l.aiTools}</a></li>
            <li><a href="${base}${prefix}categories/how-to.html">${l.howTo}</a></li>
            <li><a href="${base}${prefix}categories/tech-essentials.html">${l.techEssentials}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>${l.support}</h4>
          <ul>
            <li><a href="${base}${prefix}privacy.html">${l.privacy}</a></li>
            <li><a href="${SITE.coffee}" target="_blank" rel="noopener">${l.coffee}</a></li>
            <li><a href="${base}blog/feed.xml">${l.rss}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${l.rights}</span>
        <span>Made with \u2764\ufe0f and AI</span>
      </div>`;
    document.body.appendChild(footer);
  }

  /* ====== THEME TOGGLE ====== */
  function initTheme() {
    const saved = localStorage.getItem('aisimply-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);

    document.addEventListener('click', (e) => {
      if (e.target.id === 'themeToggle' || e.target.closest('#themeToggle')) {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('aisimply-theme', next);
        updateThemeIcon(next);
      }
    });
  }

  function updateThemeIcon(theme) {
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'dark' ? '\u2600' : '\u263e';
  }

  /* ====== ARTICLE RENDERING ====== */
  function getPublishedArticles() {
    const now = new Date();
    return ARTICLES.filter(a => new Date(a.date) <= now).sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function renderArticleCard(article, lang) {
    const base = getBasePath();
    const prefix = lang === 'fr' ? 'fr/' : '';
    const cats = CATEGORIES[lang];
    const cat = cats.find(c => c.id === article.category);
    const data = article[lang];
    const dateStr = new Date(article.date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return `<div class="article-card" data-category="${article.category}">
      <span class="card-category">${cat ? cat.icon + ' ' + cat.name : article.category}</span>
      <h3><a href="${base}${prefix}blog/${article.slug}.html">${data.title}</a></h3>
      <p class="card-excerpt">${data.excerpt}</p>
      <div class="card-meta">
        <span>${dateStr}</span>
        <span class="reading-time">\u231a ${article.readTime} min</span>
      </div>
    </div>`;
  }

  function renderFeaturedArticle(article, lang) {
    const base = getBasePath();
    const prefix = lang === 'fr' ? 'fr/' : '';
    const data = article[lang];
    const dateStr = new Date(article.date).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const badge = lang === 'fr' ? 'Article \u00e0 la une' : 'Featured Article';

    return `<div class="featured-article">
      <span class="featured-badge">${badge}</span>
      <h2><a href="${base}${prefix}blog/${article.slug}.html">${data.title}</a></h2>
      <p class="card-excerpt">${data.excerpt}</p>
      <div class="card-meta">
        <span>${dateStr}</span>
        <span class="reading-time">\u231a ${article.readTime} min ${lang === 'fr' ? 'de lecture' : 'read'}</span>
      </div>
    </div>`;
  }

  /* ====== HOMEPAGE RENDERING ====== */
  function renderHomepage() {
    const container = document.getElementById('articleGrid');
    const featuredEl = document.getElementById('featuredArticle');
    if (!container) return;

    const lang = getLang();
    const articles = getPublishedArticles();
    if (articles.length === 0) return;

    if (featuredEl && articles.length > 0) {
      featuredEl.innerHTML = renderFeaturedArticle(articles[0], lang);
    }

    const remaining = articles.slice(1, 13); // Show up to 12 on homepage
    container.innerHTML = remaining.map(a => renderArticleCard(a, lang)).join('');

    // Category filter buttons
    initCategoryFilters(container);

    // Update stats
    const statArticles = document.getElementById('statArticles');
    const statCategories = document.getElementById('statCategories');
    if (statArticles) statArticles.textContent = articles.length;
    if (statCategories) statCategories.textContent = CATEGORIES[lang].length;
  }

  /* ====== BLOG INDEX RENDERING ====== */
  function renderBlogIndex() {
    const container = document.getElementById('blogGrid');
    if (!container) return;

    const lang = getLang();
    const articles = getPublishedArticles();
    const perPage = 12;
    let currentPage = 1;
    let filtered = articles;

    function render() {
      const start = (currentPage - 1) * perPage;
      const pageArticles = filtered.slice(start, start + perPage);
      container.innerHTML = pageArticles.map(a => renderArticleCard(a, lang)).join('');

      // Pagination
      const totalPages = Math.ceil(filtered.length / perPage);
      const paginationEl = document.getElementById('pagination');
      if (paginationEl && totalPages > 1) {
        let html = '';
        for (let i = 1; i <= totalPages; i++) {
          html += `<button class="page-btn${i === currentPage ? ' active' : ''}" data-page="${i}">${i}</button>`;
        }
        paginationEl.innerHTML = html;
        paginationEl.querySelectorAll('.page-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            currentPage = parseInt(btn.dataset.page);
            render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        });
      }
    }

    render();
    initCategoryFilters(container, (cat) => {
      filtered = cat === 'all' ? articles : articles.filter(a => a.category === cat);
      currentPage = 1;
      render();
    });

    // Search
    const searchInput = document.getElementById('blogSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        if (!q) { filtered = articles; } else {
          filtered = articles.filter(a => {
            const d = a[lang];
            return d.title.toLowerCase().includes(q) || d.excerpt.toLowerCase().includes(q);
          });
        }
        currentPage = 1;
        render();
      });
    }
  }

  /* ====== CATEGORY PAGE RENDERING ====== */
  function renderCategoryPage() {
    const container = document.getElementById('categoryGrid');
    if (!container) return;

    const lang = getLang();
    const catId = container.dataset.category;
    const articles = getPublishedArticles().filter(a => a.category === catId);

    container.innerHTML = articles.map(a => renderArticleCard(a, lang)).join('');

    const countEl = document.getElementById('categoryCount');
    if (countEl) {
      countEl.textContent = lang === 'fr'
        ? `${articles.length} article${articles.length > 1 ? 's' : ''}`
        : `${articles.length} article${articles.length > 1 ? 's' : ''}`;
    }
  }

  /* ====== CATEGORY FILTERS ====== */
  function initCategoryFilters(container, onFilter) {
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category;

        if (onFilter) {
          onFilter(cat);
        } else {
          // Simple show/hide for homepage
          container.querySelectorAll('.article-card').forEach(card => {
            if (cat === 'all' || card.dataset.category === cat) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          });
        }
      });
    });
  }

  /* ====== RELATED ARTICLES ====== */
  function renderRelatedArticles() {
    const container = document.getElementById('relatedArticles');
    if (!container) return;

    const lang = getLang();
    const base = getBasePath();
    const prefix = lang === 'fr' ? 'fr/' : '';
    const currentSlug = container.dataset.current;
    const currentCat = container.dataset.category;
    const articles = getPublishedArticles();

    // Get 3 related articles from same category (excluding current)
    let related = articles.filter(a => a.category === currentCat && a.slug !== currentSlug).slice(0, 3);
    // If not enough, fill with other articles
    if (related.length < 3) {
      const others = articles.filter(a => a.slug !== currentSlug && !related.find(r => r.slug === a.slug));
      related = related.concat(others.slice(0, 3 - related.length));
    }

    container.innerHTML = related.map(a => {
      const d = a[lang];
      return `<div class="related-card">
        <h4><a href="${base}${prefix}blog/${a.slug}.html">${d.title}</a></h4>
        <p>\u231a ${a.readTime} min</p>
      </div>`;
    }).join('');
  }

  /* ====== FAQ TOGGLE ====== */
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const wasOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  /* ====== READING PROGRESS ====== */
  function initReadingProgress() {
    const bar = document.querySelector('.reading-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const article = document.querySelector('.article-body');
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.scrollHeight;
      const scrolled = Math.max(0, -rect.top);
      const pct = Math.min(100, (scrolled / (total - window.innerHeight)) * 100);
      bar.style.width = pct + '%';
    });
  }

  /* ====== BACK TO TOP ====== */
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '\u2191';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ====== SEARCH (HOMEPAGE) ====== */
  function initHomeSearch() {
    const input = document.getElementById('homeSearch');
    if (!input) return;
    const lang = getLang();

    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (q.length < 2) return;

      const articles = getPublishedArticles();
      const results = articles.filter(a => {
        const d = a[lang];
        return d.title.toLowerCase().includes(q) || d.excerpt.toLowerCase().includes(q);
      }).slice(0, 5);

      let dropdown = document.getElementById('searchDropdown');
      if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'searchDropdown';
        dropdown.style.cssText = 'position:absolute;top:100%;left:0;right:0;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);margin-top:0.5rem;z-index:50;max-height:300px;overflow-y:auto;';
        input.parentElement.appendChild(dropdown);
      }

      if (q.length < 2 || results.length === 0) {
        dropdown.innerHTML = '';
        dropdown.style.display = 'none';
        return;
      }

      const base = getBasePath();
      const prefix = lang === 'fr' ? 'fr/' : '';
      dropdown.style.display = 'block';
      dropdown.innerHTML = results.map(a => {
        const d = a[lang];
        return `<a href="${base}${prefix}blog/${a.slug}.html" style="display:block;padding:0.75rem 1rem;color:var(--text-primary);border-bottom:1px solid var(--border);font-size:0.9rem;transition:background 0.15s;"
          onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='transparent'">
          ${d.title}
        </a>`;
      }).join('');
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        const dd = document.getElementById('searchDropdown');
        if (dd) dd.style.display = 'none';
      }
    });
  }

  /* ====== ADSENSE ====== */
  const ADSENSE = {
    enabled: true,
    publisherId: 'ca-pub-XXXXXXXXXXXXXXXX', // Replace with real AdSense publisher ID
    slots: {
      article_top:    '1234567890', // Replace with real ad slot IDs
      article_mid:    '1234567891',
      article_bottom: '1234567892',
      sidebar:        '1234567893'
    }
  };

  function initAdSense() {
    if (!ADSENSE.enabled || ADSENSE.publisherId === 'ca-pub-XXXXXXXXXXXXXXXX') return;

    // Load AdSense script once
    if (!document.querySelector('script[src*="adsbygoogle"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE.publisherId}`;
      document.head.appendChild(script);
    }

    // Fill each ad-slot div with an ad unit
    const adSlots = document.querySelectorAll('.ad-slot');
    adSlots.forEach((slot, index) => {
      // Pick slot ID based on position
      let slotId;
      if (index === 0) slotId = ADSENSE.slots.article_top;
      else if (index === adSlots.length - 1) slotId = ADSENSE.slots.article_bottom;
      else slotId = ADSENSE.slots.article_mid;

      slot.innerHTML = `
        <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="${ADSENSE.publisherId}"
          data-ad-slot="${slotId}"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>`;

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch(e) { /* AdSense not loaded yet */ }
    });
  }

  /* ====== INIT ====== */
  function init() {
    initTheme();
    injectHeader();
    injectFooter();
    renderHomepage();
    renderBlogIndex();
    renderCategoryPage();
    renderRelatedArticles();
    initFAQ();
    initReadingProgress();
    initBackToTop();
    initHomeSearch();
    initAdSense();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.AISimply = { ARTICLES, CATEGORIES, SITE, getPublishedArticles, getLang };
})();
