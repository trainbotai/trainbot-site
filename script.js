/* ===================================================================
   TrainBot site — i18n, reveal, mascot states, form
   =================================================================== */

/* ---------- i18n dictionary (RO default, EN secondary) ---------- */
const I18N = {
  ro: {
    "nav.how": "Cum funcționează", "nav.learn": "Ce învață", "nav.teachers": "Pentru profesori", "nav.pricing": "Prețuri", "nav.faq": "FAQ", "nav.safety": "Siguranță", "nav.cta": "Cere un pilot",
    "learn.tag": "Ce învață copiii", "learn.title": "Competențe reale pentru o lume cu AI.",
    "learn.lead": "Dincolo de „a folosi” AI, copiii înțeleg cum funcționează — gândire critică, date și etică. Aliniat la competențele digitale și STEM.",
    "learn.c1t": "Cum „învață” o mașină", "learn.c1p": "Înțeleg intuitiv ce e un model, date de antrenare și predicție — antrenând cu propriile mâini.",
    "learn.c2t": "Clasificare & recunoaștere", "learn.c2p": "Construiesc clasificatoare de imagini și text și descoperă unde greșesc modelele.",
    "learn.c3t": "Date bune, decizii corecte", "learn.c3p": "Învață că un model e atât de bun cât datele lui — și ce înseamnă bias și echitate.",
    "learn.c4t": "AI conversațional, responsabil", "learn.c4p": "Experimentează cu modele de limbaj într-un cadru sigur și înțeleg limitele lor.",
    "learn.c5t": "Gândire de cercetător", "learn.c5p": "Formulează ipoteze, testează, iterează — metoda științifică aplicată la AI.",
    "learn.c6t": "Cetățenie digitală", "learn.c6p": "Confidențialitate, siguranță online și folosirea etică a tehnologiei.",
    "proof.s1n": "7–14", "proof.s1l": "ani, vârsta potrivită", "proof.s2n": "100%", "proof.s2l": "antrenare pe device", "proof.s3n": "0", "proof.s3l": "date personale de la copii", "proof.s4n": "RO + EN", "proof.s4l": "limbi suportate",
    "proof.tag": "Ce spun profesorii", "proof.title": "Construit împreună cu profesorii.",
    "proof.q1": "„În sfârșit pot să le arăt copiilor ce e AI-ul, nu doar să le spun. Antrenează un model și li se aprinde becul.”",
    "proof.a1n": "Profesor de robotică", "proof.a1r": "școală pilot",
    "proof.q2": "„Dashboard-ul îmi arată exact unde s-a blocat fiecare elev. Pot să intervin la timp, nu la final.”",
    "proof.a2n": "Coordonator STEM", "proof.a2r": "școală pilot",
    "proof.q3": "„Zero date personale de la copii a fost decisiv pentru noi. Conducerea școlii a spus da imediat.”",
    "proof.a3n": "Director adjunct", "proof.a3r": "școală pilot",
    "proof.note": "Testimoniale ilustrative — vor fi înlocuite cu cele din pilot.",
    "about.tag": "Despre noi", "about.title": "Construit în România, pentru profesori din România.",
    "about.p1": "TrainBot s-a născut din ideea unui elev și a unui student, din pasiunea pentru inteligența artificială și dorința de a învăța lumea despre ea. Credem că fiecare copil ar trebui să înțeleagă AI-ul — nu doar să-l folosească.",
    "about.p2": "Construim un instrument pe care l-am fi vrut noi în școală: practic, sigur și gândit pentru sala de clasă reală, cu profesorul în centru.",
    "about.m1": "🇷🇴 Făcut în România", "about.m2": "🤝 Construit de un elev și un student",
    "faq.tag": "Întrebări frecvente", "faq.title": "Ce vor să știe profesorii.",
    "faq.q1": "De ce echipament am nevoie?", "faq.a1": "Un iPad sau iPhone (iOS 17+) per grup de elevi și un calculator/tabletă pentru tabloul de bord al profesorului. Funcționează și cu un singur iPad partajat în clasă.",
    "faq.q2": "Cât durează să încep?", "faq.a2": "Sub 15 minute. Creezi o clasă, generezi conturile elevilor și dai prima temă. Te ajutăm la onboarding în pilot.",
    "faq.q3": "Cum sunt protejate datele copiilor?", "faq.a3": "Conturile elevilor sunt username + parolă create de tine, fără email sau date personale. Antrenarea modelelor se face pe device. Suntem gândiți GDPR-first, cu DPA per școală.",
    "faq.q4": "Trebuie ca elevii să știe să programeze?", "faq.a4": "Nu. Totul e vizual și practic — antrenezi modele cu exemple, fără cod. Potrivit de la 7 ani.",
    "faq.q5": "Modulul AI conversațional e sigur?", "faq.a5": "Da. Fiecare mesaj trece prin filtrare pe cuvinte-cheie plus moderare AI, pe ce intră și ce iese. La dubiu, mesajul e blocat. Profesorul vede sesiunile.",
    "faq.q6": "Cât costă după anul pilot?", "faq.a6": "Prețuri fixe: 590 lei/clasă/an sau 2.490 lei/an pentru toată școala. Reduceri pentru ONG-uri și școli din mediul rural.",
    "hero.eyebrow": "EdTech · AI pentru clasa ta",
    "hero.title": "Inteligența artificială,<br />predată cu mâinile.",
    "hero.sub": "Copiii de 7–14 ani își antrenează propriile modele AI direct pe telefon sau tabletă — iOS și Android — în clasă. Tu, profesorul, vezi tot și controlezi tot. Sigur și conform GDPR.",
    "hero.cta1": "Cere un pilot gratuit", "hero.cta2": "Vezi cum funcționează →",
    "hero.trust1": "Zero date personale de la copii", "hero.trust2": "Pe device, în clasă", "hero.trust3": "Sub controlul profesorului",
    "hero.mascot": "Salut! Sunt TB. Hai să antrenăm un model.",
    "problem.tag": "Provocarea",
    "problem.title": "AI-ul e peste tot. Dar cum îl predai unui copil de 9 ani?",
    "problem.lead": "Manualele explică teorie. Slide-urile arată definiții. Dar inteligența artificială se înțelege făcând-o — antrenând, greșind, corectând. Fără un instrument potrivit, profesorul rămâne cu metafore, iar copilul cu întrebări.",
    "problem.c1t": "Prea abstract", "problem.c1p": "„Rețea neuronală” nu înseamnă nimic pentru un copil care n-a văzut niciodată un model învățând.",
    "problem.c2t": "Fără instrumente sigure", "problem.c2p": "Uneltele AI pentru adulți cer cont, date personale și acces nelimitat la internet. Nepotrivit pentru clasă.",
    "problem.c3t": "Profesorul nu vede progresul", "problem.c3p": "Fără tablou de bord, nu știi cine a înțeles, cine s-a blocat și ce model a construit fiecare elev.",
    "how.tag": "Cum funcționează", "how.title": "Trei pași. Un model antrenat de copil.",
    "how.s1t": "Copilul antrenează", "how.s1p": "Pe iPad, elevul colectează exemple (poze sau text) și antrenează un model real, on-device, cu CoreML. Vede cum modelul „învață” în timp real.",
    "how.s2t": "Copilul testează", "how.s2p": "Apoi îl pune la încercare cu exemple noi. „A ghicit corect?” Butonul de feedback îl învață că un model bun cere date bune.",
    "how.s3t": "Profesorul vede tot", "how.s3p": "În tabloul de bord, vezi clasele, temele și progresul fiecărui elev — ce model a construit, cât de bine performează, unde s-a blocat.",
    "demo.tag": "Încearcă tu", "demo.title": "Antrenează un mini-model. Chiar acum.",
    "demo.lead": "Exact ce face un copil în TrainBot: dă exemple, antrenează, testează. Sortează imaginile în grupa potrivită.",
    "demo.s1": "Selectează o imagine, apoi grupa ei:", "demo.bfruit": "🍎 Fructe", "demo.banimal": "🐾 Animale",
    "demo.train": "Antrenează modelul", "demo.training": "Modelul învață din exemplele tale…", "demo.s3": "Acum testează-l cu o imagine nouă:",
    "demo.guess": "Ce e asta?", "demo.reset": "↺ De la început",
    "demo.correct": "Corect! Modelul zice {label} — încredere {conf}%. Date bune → predicții bune.",
    "demo.wrong": "Modelul zice {label} ({conf}%). Hmm — verifică cum ai sortat exemplele. Așa învață și copiii despre bias!",
    "teachers.tag": "Pentru profesori", "teachers.title": "Tabloul de bord care îți dă controlul.",
    "teachers.lead": "Creezi clase și conturi de elev în câteva secunde — fără emailuri, fără date personale de la copii. Apoi urmărești totul dintr-un singur loc.",
    "teachers.f1": "<strong>Clase &amp; conturi elevi</strong> — username și parolă create de tine, stil Tinkercad.",
    "teachers.f2": "<strong>Teme</strong> — dai sarcini de antrenare și vezi cine a predat.",
    "teachers.f3": "<strong>Monitorizare în timp real</strong> — modelele și progresul fiecărui elev.",
    "teachers.f4": "<strong>Modul AI conversațional</strong> — sesiuni sigure, moderate, vizibile pentru tine.",
    "teachers.cta": "Vreau acces de profesor", "teachers.url": "app.trainbot.moldluca.tech",
    "teachers.m1": "Clase", "teachers.m2": "Elevi", "teachers.m3": "Modele", "teachers.note": "Mockup ilustrativ",
    "kids.tag": "Pentru copii", "kids.title": "O aplicație în care AI-ul prinde viață.",
    "kids.lead": "Pe iPhone, iPad sau Android, copilul antrenează modele direct pe device — fără ca pozele lui să plece pe internet. Iar când vrea să „discute” cu un AI, totul e filtrat și sigur.",
    "kids.f1": "<strong>Antrenare on-device</strong> — pozele rămân pe telefon, nu pe internet.",
    "kids.f2": "<strong>Mascotul TB</strong> — un ghid prietenos prin fiecare pas.",
    "kids.f3": "<strong>Modul conversațional sigur</strong> — moderare AI pe ce intră și ce iese.",
    "kids.note": "Aplicația reală, pe iPhone", "kids.appstate": "Modelul învață…", "kids.appbtn": "Antrenează",
    "gallery.tag": "Aplicația, pe bune", "gallery.title": "Plimbă-te prin aplicație.", "gallery.lead": "Capturi reale din aplicația iOS. Antrenare AI pe device, boți conversaționali siguri și provocări zilnice — totul în română.", "gallery.g1": "Acasă", "gallery.g2": "Antrenare AI", "gallery.g3": "Bot conversațional", "gallery.g4": "Realizări", "gallery.g5": "Provocarea zilei", "car.t1": "Acasă", "car.d1": "Totul într-un singur loc. De aici copilul antrenează modele, discută cu boții AI și își urmărește progresul — un ghid prietenos la fiecare pas.", "car.t2": "Antrenare AI", "car.d2": "Copilul adaugă poze și antrenează un model direct pe telefon. Vede modelul „învățând”, pas cu pas — iar pozele rămân pe device, nu pe internet.", "car.t3": "Boții tăi AI", "car.d3": "Copilul își creează propriul bot, îl învață cu exemple și conversează cu el. Totul filtrat și sigur, cu o limită zilnică de mesaje.", "car.t4": "Realizări", "car.d4": "Insigne și XP pentru fiecare pas important. Învățarea devine un joc care motivează copilul să exploreze mai departe.", "car.t5": "Provocarea zilei", "car.d5": "O provocare nouă în fiecare zi. Copilul revine, exersează și câștigă XP — un motiv să se întoarcă la învățat.",
    "safety.tag": "Siguranță & conformitate", "safety.title": "Construit pentru clasă. Sigur prin design.",
    "safety.lead": "Știm că o școală nu poate face compromisuri pe siguranța datelor copiilor. De aceea TrainBot e gândit GDPR-first.",
    "safety.c1t": "Zero date personale de la copii", "safety.c1p": "Conturile elevilor sunt username + parolă create de profesor. Fără email, fără nume real obligatoriu.",
    "safety.c2t": "Moderare AI dublă", "safety.c2p": "Filtrare pe cuvinte-cheie plus moderare AI, pe ce intră ȘI pe ce iese. La dubiu, mesajul e blocat.",
    "safety.c3t": "GDPR-K & DPA per școală", "safety.c3p": "Școala rămâne operatorul de date, în context educațional. Documentație de conformitate inclusă.",
    "safety.c4t": "Pe device, în control", "safety.c4p": "Antrenarea modelelor se întâmplă pe iPad. Datele de antrenare nu pleacă de pe dispozitiv.",
    "pricing.tag": "Prețuri", "pricing.title": "Primul an e pe noi.",
    "pricing.lead": "Începe cu un an pilot gratuit pentru o clasă. Apoi alegi planul potrivit școlii tale — prețuri fixe, fără surprize.",
    "pricing.badge": "Recomandat",
    "pricing.p1name": "Pilot", "pricing.p1price": "Gratuit", "pricing.p1per": "primul an", "pricing.p1desc": "Pentru o clasă, ca să testezi totul fără risc.",
    "pricing.p1f1": "1 clasă, până la 30 de elevi", "pricing.p1f2": "Toate funcțiile incluse", "pricing.p1f3": "Onboarding și suport la start", "pricing.p1f4": "Fără card, fără obligații", "pricing.p1cta": "Începe pilotul",
    "pricing.p2name": "Clasă", "pricing.p2price": "590 lei", "pricing.p2per": "/ clasă / an", "pricing.p2desc": "Pentru profesorul care vrea AI în clasa lui.",
    "pricing.p2f1": "1 clasă, până la 35 de elevi", "pricing.p2f2": "Dashboard complet + teme", "pricing.p2f3": "Modul AI conversațional", "pricing.p2f4": "Suport pe email", "pricing.p2cta": "Alege Clasă",
    "pricing.p3name": "Școală", "pricing.p3price": "2.490 lei", "pricing.p3per": "/ an", "pricing.p3desc": "Pentru o școală întreagă, cu clase nelimitate.",
    "pricing.p3f1": "Clase și profesori nelimitați", "pricing.p3f2": "Training pentru profesori", "pricing.p3f3": "DPA și suport prioritar", "pricing.p3f4": "Panou de administrare", "pricing.p3cta": "Contactează-ne",
    "pricing.foot": "Prețuri orientative, fără TVA. Reduceri pentru ONG-uri și școli din mediul rural.",
    "pilot.tag": "Pilot gratuit", "pilot.title": "Adu TrainBot în clasa ta.",
    "pilot.lead": "Lasă-ne datele tale și revenim cu un plan de pilot pentru școala ta. Fără costuri, fără obligații.",
    "pilot.name": "Nume", "pilot.school": "Școală / organizație", "pilot.email": "Email", "pilot.msg": "Mesaj (opțional)", "pilot.submit": "Trimite cererea",
    "footer.tag": "AI hands-on pentru școli. Un proiect din ecosistemul moldluca.", "footer.status": "Platformă în dezvoltare · 2026",
    "cookie.text": "Folosim cookie-uri doar pentru a înțelege traficul pe site (Google Analytics). Niciun cookie de marketing.", "cookie.accept": "Accept", "cookie.reject": "Refuz",
    "footer.privacy": "Confidențialitate", "footer.terms": "Termeni", "footer.dpa": "DPA",
    "_form.sending": "Se trimite…", "_form.ok": "Mulțumim! Revenim curând. 🎉", "_form.err": "Ceva n-a mers. Scrie-ne direct pe email.",
    "_form.mailto": "Ți-am deschis aplicația de email cu cererea gata completată — apasă Send acolo. Dacă nu s-a deschis nimic, scrie-ne direct la",
    "pilot.direct": "Sau scrie-ne direct:",
  },
  en: {
    "nav.how": "How it works", "nav.learn": "What kids learn", "nav.teachers": "For teachers", "nav.pricing": "Pricing", "nav.faq": "FAQ", "nav.safety": "Safety", "nav.cta": "Request a pilot",
    "learn.tag": "What kids learn", "learn.title": "Real skills for a world with AI.",
    "learn.lead": "Beyond \"using\" AI, kids understand how it works — critical thinking, data and ethics. Aligned with digital and STEM competencies.",
    "learn.c1t": "How a machine \"learns\"", "learn.c1p": "They intuitively grasp what a model, training data and prediction are — by training with their own hands.",
    "learn.c2t": "Classification & recognition", "learn.c2p": "They build image and text classifiers and discover where models go wrong.",
    "learn.c3t": "Good data, fair decisions", "learn.c3p": "They learn a model is only as good as its data — and what bias and fairness mean.",
    "learn.c4t": "Responsible conversational AI", "learn.c4p": "They experiment with language models in a safe setting and understand their limits.",
    "learn.c5t": "A researcher's mindset", "learn.c5p": "They form hypotheses, test, iterate — the scientific method applied to AI.",
    "learn.c6t": "Digital citizenship", "learn.c6p": "Privacy, online safety and the ethical use of technology.",
    "proof.s1n": "7–14", "proof.s1l": "the right age", "proof.s2n": "100%", "proof.s2l": "on-device training", "proof.s3n": "0", "proof.s3l": "personal data from kids", "proof.s4n": "RO + EN", "proof.s4l": "languages supported",
    "proof.tag": "What teachers say", "proof.title": "Built together with teachers.",
    "proof.q1": "\"I can finally show kids what AI is, not just tell them. They train a model and the lightbulb goes on.\"",
    "proof.a1n": "Robotics teacher", "proof.a1r": "pilot school",
    "proof.q2": "\"The dashboard shows me exactly where each student got stuck. I can step in on time, not at the end.\"",
    "proof.a2n": "STEM coordinator", "proof.a2r": "pilot school",
    "proof.q3": "\"Zero personal data from kids was decisive for us. School leadership said yes immediately.\"",
    "proof.a3n": "Deputy head", "proof.a3r": "pilot school",
    "proof.note": "Illustrative testimonials — to be replaced with real ones from the pilot.",
    "about.tag": "About us", "about.title": "Built in Romania, for Romanian teachers.",
    "about.p1": "TrainBot was born from the idea of a high-school student and a university student, out of a passion for artificial intelligence and a desire to teach the world about it. We believe every child should understand AI — not just use it.",
    "about.p2": "We're building the tool we wish we'd had in school: hands-on, safe and designed for the real classroom, with the teacher at the center.",
    "about.m1": "🇷🇴 Made in Romania", "about.m2": "🤝 Built by a pupil and a student",
    "faq.tag": "Frequently asked", "faq.title": "What teachers want to know.",
    "faq.q1": "What equipment do I need?", "faq.a1": "An iPad or iPhone (iOS 17+) per student group, and a computer/tablet for the teacher dashboard. It works even with a single iPad shared in class.",
    "faq.q2": "How long to get started?", "faq.a2": "Under 15 minutes. Create a class, generate student accounts and set the first assignment. We help with onboarding during the pilot.",
    "faq.q3": "How is children's data protected?", "faq.a3": "Student accounts are username + password created by you, with no email or personal data. Model training happens on the device. We're GDPR-first, with a per-school DPA.",
    "faq.q4": "Do students need to know how to code?", "faq.a4": "No. Everything is visual and hands-on — you train models with examples, no code. Suitable from age 7.",
    "faq.q5": "Is the conversational AI module safe?", "faq.a5": "Yes. Every message goes through keyword filtering plus AI moderation, on both input and output. When in doubt, the message is blocked. The teacher sees the sessions.",
    "faq.q6": "What does it cost after the pilot year?", "faq.a6": "Fixed prices: 590 RON/class/year or 2,490 RON/year for the whole school. Discounts for NGOs and rural schools.",
    "hero.eyebrow": "EdTech · AI for your classroom",
    "hero.title": "Artificial intelligence,<br />taught hands-on.",
    "hero.sub": "Kids aged 7–14 train their own AI models right on a phone or tablet — iOS and Android — in class. You, the teacher, see everything and stay in control. Safe and GDPR-compliant.",
    "hero.cta1": "Request a free pilot", "hero.cta2": "See how it works →",
    "hero.trust1": "Zero personal data from kids", "hero.trust2": "On-device, in class", "hero.trust3": "Teacher stays in control",
    "hero.mascot": "Hi! I'm TB. Let's train a model.",
    "problem.tag": "The challenge",
    "problem.title": "AI is everywhere. But how do you teach it to a 9-year-old?",
    "problem.lead": "Textbooks explain theory. Slides show definitions. But artificial intelligence is understood by doing it — training, failing, correcting. Without the right tool, the teacher is left with metaphors and the child with questions.",
    "problem.c1t": "Too abstract", "problem.c1p": "\"Neural network\" means nothing to a child who has never watched a model learn.",
    "problem.c2t": "No safe tools", "problem.c2p": "AI tools built for adults require accounts, personal data and open internet access. Wrong fit for a classroom.",
    "problem.c3t": "Teachers can't see progress", "problem.c3p": "Without a dashboard, you don't know who understood, who got stuck, and what model each student built.",
    "how.tag": "How it works", "how.title": "Three steps. A model trained by the child.",
    "how.s1t": "The child trains", "how.s1p": "On the iPad, the student collects examples (photos or text) and trains a real, on-device model with CoreML. They watch the model \"learn\" in real time.",
    "how.s2t": "The child tests", "how.s2p": "Then they put it to the test with new examples. \"Did it guess right?\" The feedback button teaches that a good model needs good data.",
    "how.s3t": "The teacher sees all", "how.s3p": "In the dashboard you see classes, assignments and each student's progress — what model they built, how well it performs, where they got stuck.",
    "demo.tag": "Try it yourself", "demo.title": "Train a mini-model. Right now.",
    "demo.lead": "Exactly what a child does in TrainBot: give examples, train, test. Sort the images into the right group.",
    "demo.s1": "Select an image, then its group:", "demo.bfruit": "🍎 Fruit", "demo.banimal": "🐾 Animals",
    "demo.train": "Train the model", "demo.training": "The model is learning from your examples…", "demo.s3": "Now test it with a new image:",
    "demo.guess": "What is this?", "demo.reset": "↺ Start over",
    "demo.correct": "Correct! The model says {label} — {conf}% confidence. Good data → good predictions.",
    "demo.wrong": "The model says {label} ({conf}%). Hmm — check how you sorted your examples. That's how kids learn about bias!",
    "teachers.tag": "For teachers", "teachers.title": "The dashboard that puts you in control.",
    "teachers.lead": "Create classes and student accounts in seconds — no emails, no personal data from kids. Then follow everything from one place.",
    "teachers.f1": "<strong>Classes &amp; student accounts</strong> — username and password you create, Tinkercad-style.",
    "teachers.f2": "<strong>Assignments</strong> — set training tasks and see who submitted.",
    "teachers.f3": "<strong>Real-time monitoring</strong> — every student's models and progress.",
    "teachers.f4": "<strong>Conversational AI module</strong> — safe, moderated sessions, visible to you.",
    "teachers.cta": "I want teacher access", "teachers.url": "app.trainbot.moldluca.tech",
    "teachers.m1": "Classes", "teachers.m2": "Students", "teachers.m3": "Models", "teachers.note": "Illustrative mockup",
    "kids.tag": "For kids", "kids.title": "An app where AI comes to life.",
    "kids.lead": "On iPhone, iPad or Android, the child trains models directly on the device — their photos never leave it. And when they want to \"chat\" with an AI, everything is filtered and safe.",
    "kids.f1": "<strong>On-device training</strong> — photos stay on the phone, not on the internet.",
    "kids.f2": "<strong>The TB mascot</strong> — a friendly guide through every step.",
    "kids.f3": "<strong>Safe conversational mode</strong> — AI moderation on input and output.",
    "kids.note": "The real app, on iPhone", "kids.appstate": "The model is learning…", "kids.appbtn": "Train",
    "gallery.tag": "The app, for real", "gallery.title": "Take a tour of the app.", "gallery.lead": "Real screenshots from the iOS app. On-device AI training, safe conversational bots and daily challenges — all in Romanian.", "gallery.g1": "Home", "gallery.g2": "AI training", "gallery.g3": "Chat bot", "gallery.g4": "Achievements", "gallery.g5": "Daily challenge", "car.t1": "Home", "car.d1": "Everything in one place. From here the child trains models, chats with AI bots and tracks their progress — a friendly guide at every step.", "car.t2": "AI training", "car.d2": "The child adds photos and trains a model right on the phone. They watch the model \"learn\", step by step — and the photos stay on the device, not on the internet.", "car.t3": "Your AI bots", "car.d3": "The child builds their own bot, teaches it with examples and chats with it. Everything filtered and safe, with a daily message limit.", "car.t4": "Achievements", "car.d4": "Badges and XP for every milestone. Learning becomes a game that motivates the child to explore further.", "car.t5": "Daily challenge", "car.d5": "A fresh challenge every day. The child comes back, practises and earns XP — a reason to return to learning.",
    "safety.tag": "Safety & compliance", "safety.title": "Built for the classroom. Safe by design.",
    "safety.lead": "We know a school can't compromise on children's data safety. That's why TrainBot is GDPR-first.",
    "safety.c1t": "Zero personal data from kids", "safety.c1p": "Student accounts are username + password created by the teacher. No email, no required real name.",
    "safety.c2t": "Double AI moderation", "safety.c2p": "Keyword filtering plus AI moderation, on both input AND output. When in doubt, the message is blocked.",
    "safety.c3t": "GDPR-K & per-school DPA", "safety.c3p": "The school remains the data controller, in an educational context. Compliance documentation included.",
    "safety.c4t": "On-device, in control", "safety.c4p": "Model training happens on the iPad. Training data never leaves the device.",
    "pricing.tag": "Pricing", "pricing.title": "The first year is on us.",
    "pricing.lead": "Start with a free one-year pilot for a class. Then pick the plan that fits your school — fixed prices, no surprises.",
    "pricing.badge": "Recommended",
    "pricing.p1name": "Pilot", "pricing.p1price": "Free", "pricing.p1per": "first year", "pricing.p1desc": "For one class, to test everything risk-free.",
    "pricing.p1f1": "1 class, up to 30 students", "pricing.p1f2": "All features included", "pricing.p1f3": "Onboarding and launch support", "pricing.p1f4": "No card, no obligation", "pricing.p1cta": "Start the pilot",
    "pricing.p2name": "Class", "pricing.p2price": "590 RON", "pricing.p2per": "/ class / year", "pricing.p2desc": "For the teacher who wants AI in their classroom.",
    "pricing.p2f1": "1 class, up to 35 students", "pricing.p2f2": "Full dashboard + assignments", "pricing.p2f3": "Conversational AI module", "pricing.p2f4": "Email support", "pricing.p2cta": "Choose Class",
    "pricing.p3name": "School", "pricing.p3price": "2,490 RON", "pricing.p3per": "/ year", "pricing.p3desc": "For a whole school, with unlimited classes.",
    "pricing.p3f1": "Unlimited classes and teachers", "pricing.p3f2": "Teacher training", "pricing.p3f3": "DPA and priority support", "pricing.p3f4": "Admin panel", "pricing.p3cta": "Contact us",
    "pricing.foot": "Indicative prices, VAT excluded. Discounts for NGOs and rural schools.",
    "pilot.tag": "Free pilot", "pilot.title": "Bring TrainBot to your classroom.",
    "pilot.lead": "Leave us your details and we'll come back with a pilot plan for your school. No cost, no obligation.",
    "pilot.name": "Name", "pilot.school": "School / organization", "pilot.email": "Email", "pilot.msg": "Message (optional)", "pilot.submit": "Send request",
    "footer.tag": "Hands-on AI for schools. A project from the moldluca ecosystem.", "footer.status": "Platform in development · 2026",
    "cookie.text": "We use cookies only to understand site traffic (Google Analytics). No marketing cookies.", "cookie.accept": "Accept", "cookie.reject": "Decline",
    "footer.privacy": "Privacy", "footer.terms": "Terms", "footer.dpa": "DPA",
    "_form.sending": "Sending…", "_form.ok": "Thanks! We'll be in touch soon. 🎉", "_form.err": "Something went wrong. Email us directly.",
    "_form.mailto": "We opened your email app with the request pre-filled — hit Send there. If nothing opened, email us directly at",
    "pilot.direct": "Or write to us directly:",
  },
};

let currentLang = localStorage.getItem("tb_lang") || "ro";

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", String(on));
  });
  localStorage.setItem("tb_lang", lang);
}

document.querySelectorAll(".lang-switch button").forEach((b) =>
  b.addEventListener("click", () => { applyLang(b.dataset.lang); tbTrack("language_switched", { to_lang: b.dataset.lang }); })
);

/* ---------- nav scrolled shadow ---------- */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- scroll reveal ---------- */
const revealEls = [
  ".problem-card", ".step", ".learn-card", ".split-copy", ".split-visual",
  ".proof-stats", ".proof-card", ".safety-card", ".price-card", ".faq-item",
  ".pilot-card", ".section-head", ".problem .section-lead",
];
const staggerSel = ["problem-card", "step", "learn-card", "safety-card", "price-card", "proof-card"];
document.querySelectorAll(revealEls.join(",")).forEach((el, i) => {
  el.classList.add("reveal");
  if (staggerSel.some((c) => el.classList.contains(c))) {
    el.classList.add(["d1", "d2", "d3"][i % 3]);
  }
});
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- hero mascot: cycle states gently + react on hover ---------- */
const heroMascot = document.getElementById("heroMascot");
if (heroMascot) {
  const cycle = ["idle", "learning", "happy", "idle", "thinking"];
  let ci = 0;
  let timer = setInterval(() => { ci = (ci + 1) % cycle.length; heroMascot.dataset.state = cycle[ci]; }, 3200);
  heroMascot.addEventListener("mouseenter", () => { heroMascot.dataset.state = "happy"; });
  heroMascot.parentElement.addEventListener("mouseleave", () => { heroMascot.dataset.state = cycle[ci]; });
}

/* ---------- how section: mascot + active step auto-cycle while in view ---------- */
const steps = [...document.querySelectorAll(".how .step")];
const howMascot = document.getElementById("howMascot");
const howSection = document.getElementById("how");
if (steps.length && howSection) {
  let idx = 0, timer = null;
  const setActive = (i) => {
    steps.forEach((s, k) => s.classList.toggle("is-active", k === i));
    if (howMascot) howMascot.dataset.state = steps[i].dataset.mascot || "idle";
  };
  const start = () => { if (timer) return; setActive(idx); timer = setInterval(() => { idx = (idx + 1) % steps.length; setActive(idx); }, 2400); };
  const stop = () => { clearInterval(timer); timer = null; };
  const howIo = new IntersectionObserver(
    (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
    { threshold: 0.3 }
  );
  howIo.observe(howSection);
  // hover pauses auto-cycle and focuses that step
  steps.forEach((s, i) => {
    s.addEventListener("mouseenter", () => { stop(); idx = i; setActive(i); });
    s.addEventListener("mouseleave", () => start());
  });
}

/* ---------- mini-demo interactiv (antrenează un clasificator) ---------- */
const demoCard = document.getElementById("demoCard");
if (demoCard) {
  const TRAIN = [{ e: "🍎", t: "fruit" }, { e: "🍌", t: "fruit" }, { e: "🍇", t: "fruit" }, { e: "🐱", t: "animal" }, { e: "🐶", t: "animal" }, { e: "🐰", t: "animal" }];
  const TESTS = [{ e: "🍓", t: "fruit" }, { e: "🦊", t: "animal" }, { e: "🍉", t: "fruit" }, { e: "🐸", t: "animal" }, { e: "🍑", t: "fruit" }, { e: "🐭", t: "animal" }];
  const palette = document.getElementById("demoPalette");
  const buckets = { fruit: document.getElementById("bucketfruit"), animal: document.getElementById("bucketanimal") };
  const trainBtn = document.getElementById("demoTrain");
  const mascot = document.getElementById("demoMascot");
  const s1 = document.getElementById("demoStage1"), s2 = document.getElementById("demoStage2"), s3 = document.getElementById("demoStage3");
  const bar = document.getElementById("demoBar");
  const testItemEl = document.getElementById("demoTestItem"), guessBtn = document.getElementById("demoGuess"), resultEl = document.getElementById("demoResult");
  let selected = null, tally = { fruit: { fruit: 0, animal: 0 }, animal: { fruit: 0, animal: 0 } }, curTest = null, demoStarted = false;

  const setMascot = (st) => { if (mascot) mascot.dataset.state = st; };
  const armBuckets = (on) => document.querySelectorAll(".demo-bucket").forEach((b) => b.classList.toggle("armed", on));

  function buildPalette() {
    palette.innerHTML = "";
    TRAIN.forEach((it) => {
      const c = document.createElement("button");
      c.type = "button"; c.className = "demo-chip"; c.textContent = it.e; c.dataset.type = it.t; c.dataset.e = it.e;
      c.addEventListener("click", () => {
        if (selected === c) { c.classList.remove("selected"); selected = null; armBuckets(false); return; }
        if (selected) selected.classList.remove("selected");
        selected = c; c.classList.add("selected"); armBuckets(true);
      });
      palette.appendChild(c);
    });
  }
  document.querySelectorAll(".demo-bucket").forEach((b) => {
    b.addEventListener("click", () => {
      if (!selected) return;
      const bk = b.dataset.bucket;
      const span = document.createElement("span"); span.textContent = selected.dataset.e;
      buckets[bk].appendChild(span);
      tally[bk][selected.dataset.type]++;
      if (!demoStarted) { demoStarted = true; tbTrack("demo_started"); }
      selected.remove(); selected = null; armBuckets(false); setMascot("thinking");
      const got = tally.fruit.fruit + tally.fruit.animal + tally.animal.fruit + tally.animal.animal;
      const bothNonEmpty = (tally.fruit.fruit + tally.fruit.animal > 0) && (tally.animal.fruit + tally.animal.animal > 0);
      trainBtn.disabled = !(bothNonEmpty && got >= 4);
    });
  });
  trainBtn.addEventListener("click", () => {
    s1.hidden = true; s2.hidden = false; setMascot("learning"); bar.style.width = "0";
    requestAnimationFrame(() => { bar.style.width = "100%"; });
    setTimeout(() => { s2.hidden = true; s3.hidden = false; setMascot("idle"); pickTest(); }, 1800);
  });
  function pickTest() {
    curTest = TESTS[Math.floor(Math.random() * TESTS.length)];
    testItemEl.textContent = curTest.e; resultEl.hidden = true; guessBtn.disabled = false;
  }
  guessBtn.addEventListener("click", () => {
    guessBtn.disabled = true;
    const cf = tally.fruit[curTest.t], ca = tally.animal[curTest.t];
    const pred = cf >= ca ? "fruit" : "animal";
    const totalPred = tally[pred].fruit + tally[pred].animal;
    const conf = totalPred ? Math.round((tally[pred][curTest.t] / totalPred) * 100) : 50;
    const correct = pred === curTest.t;
    const dict = I18N[currentLang];
    const label = pred === "fruit" ? dict["demo.bfruit"] : dict["demo.banimal"];
    resultEl.hidden = false; resultEl.className = "demo-result " + (correct ? "ok" : "no");
    resultEl.innerHTML = dict[correct ? "demo.correct" : "demo.wrong"].replace("{label}", "<b>" + label + "</b>").replace("{conf}", conf);
    setMascot(correct ? "happy" : "confused");
    tbTrack("demo_completed", { result: correct ? "correct" : "bias" });
  });
  document.getElementById("demoReset").addEventListener("click", () => {
    tally = { fruit: { fruit: 0, animal: 0 }, animal: { fruit: 0, animal: 0 } }; selected = null;
    buckets.fruit.innerHTML = ""; buckets.animal.innerHTML = "";
    trainBtn.disabled = true; bar.style.width = "0";
    s3.hidden = true; s2.hidden = true; s1.hidden = false; setMascot("idle"); buildPalette();
  });
  buildPalette();
}

/* ---------- pilot form (backend TrainBot + fallback mailto) ---------- */
const CONTACT_EMAIL = "moldluca@gmail.com";
const PILOT_ENDPOINT = "https://api.trainbot.moldluca.tech:33443/api/v1/pilot-request";
const form = document.getElementById("pilotForm");
const statusEl = document.getElementById("formStatus");

// Fallback: mailto + mesaj vizibil. NU trimitem `pilot_requested` aici —
// mailto nu garantează trimiterea (fără client de mail eșuează silențios).
function pilotMailtoFallback(fd, dict) {
  const body = encodeURIComponent(`Nume: ${fd.get("name")}\nȘcoală: ${fd.get("school")}\nEmail: ${fd.get("email")}\n\n${fd.get("message") || ""}`);
  tbTrack("pilot_mailto_fallback");
  statusEl.className = "form-status ok";
  statusEl.textContent = dict["_form.mailto"] + " ";
  const link = document.createElement("a");
  link.href = "mailto:" + CONTACT_EMAIL;
  link.textContent = CONTACT_EMAIL;
  statusEl.append(link);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Cerere pilot TrainBot")}&body=${body}`;
}

if (form) {
  form.addEventListener("focusin", () => tbTrack("lead_form_started"), { once: true });
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dict = I18N[currentLang];
    const fd = new FormData(form);

    statusEl.className = "form-status";
    statusEl.textContent = dict["_form.sending"];
    try {
      const res = await fetch(PILOT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          school: fd.get("school"),
          email: fd.get("email"),
          message: fd.get("message") || undefined,
          locale: currentLang,
          website: fd.get("website") || undefined, // honeypot
        }),
      });
      if (res.ok) { tbTrack("pilot_requested", { method: "api" }); form.reset(); statusEl.className = "form-status ok"; statusEl.textContent = dict["_form.ok"]; }
      else throw new Error("bad status");
    } catch {
      // API indisponibil (backend jos / CORS / rate limit) → canal garantat: email
      pilotMailtoFallback(fd, dict);
    }
  });
}

/* ---------- Google Analytics 4 + Consent Mode v2 ---------- */
const GA_ID = "G-QQ141H3EDJ";
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
window.gtag = gtag;

// Consent Mode v2: totul „denied" până la accept explicit (GDPR, public școlar).
// Sub „denied" gtag trimite doar ping-uri cookieless (modelare), fără a stoca cookie-uri.
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  wait_for_update: 500,
});
gtag("set", "ads_data_redaction", true);

// Librăria gtag se încarcă o singură dată (nu pune cookie-uri cât timp consent = denied).
(function loadGA() {
  const s = document.createElement("script");
  s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
})();
gtag("js", new Date());
gtag("config", GA_ID, { anonymize_ip: true });

// Helper unic pentru evenimente custom — atașează automat limba curentă.
function tbTrack(name, params) {
  gtag("event", name, Object.assign({ language: currentLang }, params || {}));
}

// Consent banner: la accept dăm „granted" pe analytics (gtag activează cookie-urile retroactiv).
const cookieBanner = document.getElementById("cookieBanner");
const consent = localStorage.getItem("tb_consent");
if (consent === "granted") gtag("consent", "update", { analytics_storage: "granted" });
else if (consent !== "denied" && cookieBanner) cookieBanner.hidden = false;
document.getElementById("cookieAccept")?.addEventListener("click", () => {
  localStorage.setItem("tb_consent", "granted");
  gtag("consent", "update", { analytics_storage: "granted" });
  if (cookieBanner) cookieBanner.hidden = true;
});
document.getElementById("cookieReject")?.addEventListener("click", () => {
  localStorage.setItem("tb_consent", "denied");
  if (cookieBanner) cookieBanner.hidden = true;
});

/* ---------- evenimente: CTA pilot, FAQ, vizualizare planuri ---------- */
// CTA-uri care duc la formularul de pilot (nav, hero, teachers, pricing, footer).
document.querySelectorAll('a[href="#pilot"]').forEach((a) => {
  a.addEventListener("click", () => {
    const loc = a.closest("footer") ? "footer" : (a.closest("[id]")?.id || "unknown");
    const card = a.closest(".price-card");
    const params = { cta_location: loc, cta_text: a.textContent.trim().slice(0, 40) };
    if (card) params.plan = card.querySelector(".price-name")?.textContent.trim();
    tbTrack("cta_clicked", params);
  });
});
// FAQ: ce întrebări deschid profesorii (obiecții).
document.querySelectorAll(".faq-item").forEach((d) => {
  d.addEventListener("toggle", () => {
    if (d.open) tbTrack("faq_opened", { question: d.querySelector("summary")?.textContent.trim() });
  });
});
// Planuri de preț văzute (o singură dată per plan).
const priceCards = document.querySelectorAll(".price-card");
if (priceCards.length) {
  const priceIo = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        tbTrack("pricing_plan_viewed", { plan: e.target.querySelector(".price-name")?.textContent.trim() });
        priceIo.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  priceCards.forEach((c) => priceIo.observe(c));
}

/* ---------- init ---------- */
applyLang(currentLang);

/* ===== Carusel aplicație ===== */
(function () {
  const car = document.getElementById("appCarousel");
  const dotsWrap = document.getElementById("carDots");
  if (!car || !dotsWrap) return;
  const slides = Array.from(car.querySelectorAll(".car-slide"));
  const dots = Array.from(dotsWrap.querySelectorAll(".car-dot"));
  const prev = car.querySelector(".car-prev");
  const next = car.querySelector(".car-next");
  let i = 0, timer = null;
  const DELAY = 6000;

  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-active", k === i));
    dots.forEach((d, k) => d.classList.toggle("is-active", k === i));
  }
  function start() { stop(); timer = setInterval(() => go(i + 1), DELAY); }
  function stop() { if (timer) clearInterval(timer); }

  prev && prev.addEventListener("click", () => { go(i - 1); start(); });
  next && next.addEventListener("click", () => { go(i + 1); start(); });
  dots.forEach((d, k) => d.addEventListener("click", () => { go(k); start(); }));
  car.addEventListener("mouseenter", stop);
  car.addEventListener("mouseleave", start);
  start();
})();
