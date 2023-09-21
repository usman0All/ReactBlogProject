import React, { createContext, useState } from 'react'
export const Store=createContext()
function DataStore(props) {
     const[data,setData]=useState([
      // bollywood data  13
      {
        id:0,
        img1:"https://img.freepik.com/free-psd/gym-fitness-social-media-banner-template_106176-561.jpg?w=740&t=st=1691160118~exp=1691160718~hmac=8e369d312ebe3821a244d2cac51cb75918ee3ec56c1a4fc03ea7b47db42905a0",
        img2:"https://our.today/wp-content/uploads/2023/04/Twilight-1024x576.jpg",
        img3:"https://c.ndtvimg.com/2022-02/d15ia4g8_spacex-falcon-9-rocket-afp_625x300_10_February_22.jpg ",
        description:"image data"
      },
      {
        id:1,
        heading:'This Janhvi Kapoor, Varun Dhawan Film Is Bawaal in Hindi & Disaster In English',
        image:"https://feeds.abplive.com/onecms/images/uploaded-images/2023/07/20/bb698c57627303f6566be9df102b09d01689845290204396_original.jpg?impolicy=abp_cdn&imwidth=720",
        description:"his Varun Dhawan, Janhvi Kapoor film directed by Nitesh Tiwari mixes space and time; from WWII backdrop with a modern day middle-class family setup and naturally the result is - 'Bawaal': is a captivating Bollywood movie that strikes a perfect balance between emotions, laughter, and family values. With an engaging storyline and praise-worthy performances by the main cast, Varun Dhawan and Janvi Kapoor, the film manages to connect deeply with its audience, especially parents who grapple with the challenges of guiding their grown-up kids through life.",
        cat:'bollywood',
        
      },
      {
        id:2,
        heading:'Pathaan (pronounced is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Shridhar ',
        image:"https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg",
        description:"Pathaan was theatrically released in India on 25 January 2023, coinciding with the Republic Day weekend, and received positive reviews from critics who praised its action sequences, music and cast performances.[6][7] It set several box office records for a Hindi film, including the highest opening day, highest single day, highest opening weekend and highest opening week for a Hindi film in India",
        cat:'bollywood',
      },
      {
        id:3,
        heading:"'Hera Pheri 3' to continue from Phir Hera Pheri's end; Sanjay Dutt to play Ravi Kishan’s brother: Report",
        image:"https://e1.pxfuel.com/desktop-wallpaper/470/470/desktop-wallpaper-phir-hera-pheri-hera-pheri.jpg",
        description:"Suniel Shetty shared an exciting update about 'Hera Pheri 3'. In a chat with News18, when asked about the progress of the film, Shetty revealed, “We’ve shot for the promos. We’re waiting for the film to take off. My fingers are crossed! I hope nazar na lage kisi ki. (Hopefully everything goes on well) Furthermore, he expressed his joy about working with his co-stars Akshay Kumar and Paresh Rawal, stating, “I’ve always been in touch with Akshay (Kumar) and Paresh (Rawal) ji. Paresh ji and I are very, very close. Akki and I might not meet every day but we’re also very tight. He’s the fittest actor in Bollywood even today. We didn’t realize that 16 years had gone by. It’s so beautiful that we’re coming together for Hera Pheri 3",
        cat:'bollywood',
      } ,
      {
        id:4,
        heading:'Bhediya: Varun Dhawan transforms into a werewolf in the first look poster',
        image:"https://filmfare.wwmindia.com/content/2022/oct/varundhawanbhediya41665986052.jpg",
        description:"Bhediya, Varun Dhawan's much-talked-about next film is set to hit theatres in a matter of weeks.  released the first look poster that puts Dhawan's werewolf avatar front and centre The first look poster of Bhediya sees Varun Dhawan in a rugged look against the backdrop of a full moon.",
        cat:'bollywood',
      },
      {
        id:5,
        heading:"BREAKING: OMG Oh My God 2 is Akshay Kumar’s FIRST film in 12 years to get an ‘A’ certificate from the CBFC",
        image:"https://stat5.bollywoodhungama.in/wp-content/uploads/2023/08/BREAKING-OMG-Oh-My-God-2-is-Akshay-Kumars-FIRST-film-in-19-years-to-get-an-%E2%80%98A-certificate-from-the-CBFC-1.jpg",
        description:"Bollywood Hungama, however, has learnt that the censor troubles for OMG Oh My God 2 are over. A source told Bollywood Hungama, “The film has been passed by the CBFC but with an ‘A’ certificate.",
        cat:'bollywood',

      },
      {
        id:6,
        heading:"'Kantara'. Mystical Forest) is a 2022 Indian Kannada-language action thriller film written and directed by Rishab Shetty, and produced by Vijay Kiragandu",
        image:"https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg",
        description:"In 1847, there lived a king that had a great kingdom as well as a loving wife and child, but could not find peace. He sets out on a journey to discover true happiness and comes upon a holy stone in a forest occupied by Panjurli Daiva, a deity that protects the villagers that reside in the forest. He donates a vast portion of his land to the villagers",
        cat:"bollywood",

      },
       {
        id:7,
        heading:"Jai Bhim is a 2021 Indian Tamil-language legal drama film directed by T. J. Gnanavel and produced by Jyothika and Suriya under 2D Entertainment. The film stars Suriya, Lijomol Jose and Manikandan ",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zHZhPSD_smXKbuMQ7xyN_QW77Rnx-eBZ8Nxs4eLifztGI_hQHp2VEubVPdnG1Ok0J6g&usqp=CAU",
        description:"Following an official announcement in April 2021, the film began principal photography that month, with many sequences being shot in Chennai and Kodaikanal. Production was halted due to the COVID-19 pandemic and filming resumed in July 2021. It was completed that September. The film's cinematography and editing were handled by S. R. Kathir and Philomin Raj respectively. The music and film score is composed by Sean Roldan. The film's title is a reference to the slogan used by followers of B. R. Ambedkar.",
        cat:"bollywood"

      },
       {
        id:8,
        heading:"wan is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee as his first Hindi film.It is produced by Gauri Khan and Gaurav Verma under Red Chillies Entertainment. The film stars Shah Rukh Khan in a dual role as father and son ",
        image:"https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
        description:"Principal photography commenced in September 2021 with filming taking place in Pune, Mumbai, Hyderabad, Chennai, Rajasthan and Aurangabad. The film's soundtrack and background score were composed by Anirudh Ravichander, with cinematography by G. K. Vishnu and editing by Ruben. A few scenes were simultaneously re-shot for the Tamil version of the film, particularly Khan's appearance in the song 'Zinda Banda' ('Vandha Edam' in Tamil), Sethupathi's portions and scenes featuring Yogi Babu. Jawan was initially planned for release on 2 June 2023, but was postponed due to unfinished post-production work.[7] It was theatrically released on 7 September 2023 in standard, IMAX, 4DX and other premium formats, coinciding with Janmashtami. Jawan received critical acclaim from critics who praised its cast performances, screenwriting, ",
        cat:"bollywood",

      },
       {
        id:9,
        heading:"Pushpa: The Rise is a 2021 Indian Telugu-language action drama film[16] written and directed by Sukumar. It stars Allu Arjun as the title character alongside Fahadh Faasil (his Telugu debut), and Rashmika Mandanna while Jagadeesh Prathap Bandari, Sunil, Raj Tirandasu, Rao Ramesh, Dhananjaya, Anasuya Bharadwaj,",
        image:"https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg",
        description:"stars Allu Arjun as the title character alongside Fahadh Faasil (his Telugu debut), and Rashmika Mandanna while Jagadeesh Prathap Bandari, Sunil, Raj Tirandasu, Rao Ramesh, Dhananjaya, Anasuya Bharadwaj, Ajay and Ajay Ghosh play supporting roles. It is produced by Mythri Movie Makers in association with Muttamsetty Media. The first installment in the Pushpa film series, the film depicts the rise of a coolie Pushpa Raj in the smuggling syndicate of red sandalwood, a rare wood that grows only in the Seshachalam Hills of Tirupati in Andhra Pradesh state.Devi Sri Prasad composed the film's score and soundtrack while the cinematography and editing are performed by Miroslaw Kuba Brozek and Karthika Srinivas–Ruben respectively. The film began its production in December 2019 but was halted in March 2020 by the COVID-19 pandemic. Filming resumed in November 2020 and ended in November 2021, predominantly taking place at the Ramoji Film City in Hyderabad and Maredumilli forest in Andhra Pradesh.",
        cat:"bollywood"

      },
       {
        id:10,
        heading:"Gadar 2 (transl. Rebellion 2; subtitled onscreen with The Katha Continues) is a 2023 Indian Hindi-language period action drama film directed and produced by Anil Sharma and written by Shaktimaan Talwar. A sequel to Gadar: Ek Prem Katha, starring Sunny Deol, Ameesha Patel and Utkarsh Sharma,",
        image:"https://upload.wikimedia.org/wikipedia/en/6/62/Gadar_2_film_poster.jpg",
        description:"In 1954, Hamid Iqbal is the Army general of Pakistan who wants to exact vengeance on Tara Singh for eliminating 40 soldiers during his escape from Pakistan with his wife Sakeena and son Charanjeet 'Jeete'.[a] Iqbal gets Sakeena's father Ashraf Ali executed for aiding Tara in his escape to India. In 1971, Tara is now a goods supplier to the Indian Army cantonment and lives with Sakeena and Jeete, who soon leaves for Chandigarh for his college studies. One day, Tara is contacted by Lt. Colonel Devendra Rawat for help in supplying Indian soldiers with weapons as a skirmish is taking place with the Pakistani soldiers at the border, during the Indo-Pakistani War of 1971. After reaching there, Tara is spotted by Iqbal, who orders an explosion at the border, leading to many of the soldiers getting captured. Jeete returns from Chandigarh to find Sakeena in shambles. Upon learning about Tara's disappearance at the border, Jeete leaves for Pakistan against everyone's wishes to rescue his father.",
        cat:"bollywood",

      },
      {
        id:11,
        heading:"Son of Sardaar is a 2012 Indian Hindi-language action comedy film directed by Ashwni Dhir.[4] A remake of 2010 Telugu film Maryada Ramanna directed by S. S. Rajamouli, ",
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Son_Of_Sardar_poster.jpg/220px-Son_Of_Sardar_poster.jpg",
        description:"A massive rivalry exists between the Sandhus and the Randhawas. During an intense fight between the two families, Jaswinder Jassi Singh Randhawa's father and Balwinder Billu Singh Sandhu's uncle kill each other, on the night of Billu's wedding with Parmeet Pammi Kaur. Billu ultimately vows to remain unmarried until he kills Randhawa's son. Meanwhile, Jassi's mother flees the village along with Jassi, later settling in London.Twenty-five years later, Jassi is a struggling immigrant in London. He is best friends with Pathan, who runs a club. Jassi decides to go to India because his father left him some land in Phagwara, Punjab. Although made aware of the rivalry by Pathan, he does not worry about it as he thinks that the rivalry is now forgotten. Back in Phagwara, Billu still searches for Randhawa's son with the help of his two younger brothers, Tito and Tony. Pammi yearns for marriage with Billu to be completed. Jassi arrives in India and meets Sukhmeet Sukh Kaur Sandhu on a train ride from New Delhi to Phagwara. Unbeknownst to Jassi, who flirts with her, Sukh is Billu's younger sister, who is returning to Phagwara after having completed her studies in Delhi. During the ",
        cat:"bollywood"
      },
      {
        id:12,
        heading:"Krrish 3 is a 2013 Indian Hindi-language superhero film written, produced and directed by Rakesh Roshan,[5] who wrote the screenplay with Honey Irani and Robin Bhatt. It is the third film in the Krrish series",
       image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Krrish_3_%282013_film%29_poster.jpg/220px-Krrish_3_%282013_film%29_poster.jpg",
        description:"Rohit Mehra lives with his son Krishna in Mumbai. Krishna is married to Priya, a journalist for Aaj Tak and Rohit works in a research institute. Krishna, while moonlighting as superhero Krrish, is regularly fired from various day jobs due to lack of attendance. Rohit is researching a device that will bring life to dead tissues by the use of solar energy. A deadly virus is spreading in Namibia whose antidote has not yet been discovered. Rohit's friend Dr. Varun Shetty, and Dr. Alok Sen, a scientist who wants to meet him to reveal information about the virus, are murdered by Kaya, a shapeshifting female mutant. She is the secretary of Kaal, a handicapped evil genetist with telekinetic powers. Kaal creates a team of human-animal hybrids called Maanvars with distinct physical powers to cure himself but to no avail.",
        cat:"bollywood"
      },
      {
        id:13,
        heading:"Namastey London (transl. Greetings London) is a 2007 Indian romance film, directed and produced by Vipul Amrutlal Shah. It stars Rishi Kapoor, Akshay Kumar, Katrina Kaif, Nina Wadia, Javed Sheikh, Upen Patel and Clive Standen. The fi",
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Namasteylondonnnnnn.jpg/220px-Namasteylondonnnnnn.jpg",
        description:"Namastey London was released on March 23, 2007, and it received positive reviews for its direction, screenplay, and soundtrack, particularly Akshay Kumar's performance, which was highly acclaimed and it's music album composed by Himesh Reshammiya Was Highly Well Acclaimed and performed well on its music charts with its songs becoming Chartbuster hits. It was also a box office success, earning ₹71.40 crore worldwide, thus becoming the ninth-highest grossing Hindi film of 2007.[3] The success of the film ended a long dry spell of box office failures since the release of Salaam-e-Ishq: A Tribute to Love which was released on January 2007.",
        cat:"bollywood"
      },
      //tech data
       {
        id:14,
        heading:"AI will replace more women employees than men by 2030, reveals study",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/ai-with-woman-employees-035121-16x9.jpg?VersionId=psybb3Kos5tyi86QAKm2MOJcE6WkhCNS&size=690:388",
        description:"A recent study by the McKinsey Global Institute warns that the rise of artificial intelligence (AI) will disproportionately replace more female employees than male employees",
        cat:"tech",
        para:"The rise of artificial intelligence (AI) is bringing about a seismic shift in the global workforce, with its potential to automate a vast array of tasks previously performed by humans. People fear AI replacing humans in offices and eventually causing job losses. However, amid all the fear of AI taking over the corporate workforce, a recent study reveals a concerning trend, stating that AI will replace more female employees than male employees."

      },
       {
        id:15,
        heading:"Non-engineering Pune student lands a job at Google with whopping Rs 50 lakh salary",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/pune-student-bags-job-at-google-280736-16x9.jpg?VersionId=R4aLExpXSyQILFJpxLwYzocRV_GW_9ds&size=690:388",
        description:"Non-engineering graduates Harshal Juikar and Anurag Makade defy stereotypes as they secure high-paying jobs at Google ",
        cat:"tech",
        para:"A student in Pune, Harshal Juikar, has recently achieved a remarkable feat by securing a high-paying job at Google, despite being a non-engineering graduate. Surprising, right? But Juikar made it possible. Juikar's exceptional skills and determination have earned him an impressive annual package of Rs 50 lakh, reported News18. Born and raised in Mumbai, Juikar completed his education with a degree outside the engineering domain. Breaking the stereotype that often associates prestigious tech job opportunities with engineering backgrounds,   "

      },
       {
        id:16,
        heading:"History Of ChatGPT: A Timeline Of The Meteoric Rise Of Generative AI Chatbots",
        image:"https://www.searchenginejournal.com/wp-content/uploads/2023/06/history-of-chatgpt-timeline-647a74669297c-sej-760x400.webp",
        description:"OpenAI introduced a long-form question-answering AI called ChatGPT that answers complex questions conversationally.",
        cat:"tech",
        para:"ChatGPT is a large language model chatbot developed by OpenAI based on GPT-3.5. It has a remarkable ability to interact in conversational dialogue form and provide responses that can appear surprisingly human. Large language models perform the task of predicting the next word in a series of words.   Reinforcement Learning with Human Feedback (RLHF) is an additional layer of training that uses human feedback to help ChatGPT learn the ability to follow directions and generate responses that are satisfactory to humans."

      },
       {
        id:17,
        heading:"The Ethics of Artificial Intelligence: Balancing Innovation with Responsibility",
        image:"https://tophighlightsnews.com/wp-content/uploads/2023/02/The-Ethics-of-Artificial-Intelligence.jpg",
        description:"Artificial intelligence (AI) is rapidly transforming various industries, from healthcare to finance, ",
        cat:"tech",
        para:"transportation. As AI continues to evolve and become more advanced, it raises ethical concerns about how it is developed, used, and regulated. The ethical issues related to AI range from privacy and bias to accountability and transparency. It is essential to balance innovation with responsibility to ensure that AI is developed and used ethically Here are some of the ethical concerns related to AI: Privacy and Data Protection: AI relies on data, and the more data it has, the more accurate and efficient it can be. However, this also raises privacy concerns. AI developers must ensure that the data they use is collected ethically and that the privacy of individuals is protected.Bias and Discrimination: AI algorithms can be biased and perpetuate discrimination. For example, facial recognition technology has been shown to have higher error rates for people of color and women. Developers must ensure that their AI algorithms are unbiased and do not perpetuate discrimination. "

      },
       {
        id:18,
        heading:"AMD considers making a specific A.I. chip for China to comply with export controls",
        image:"https://image.cnbcfm.com/api/v1/image/107255922-1686678111303-gettyimages-1246008180-AFP_336H9XQ.jpeg?v=1690972404&w=740&h=416&ffmt=webp&vtcrop=y",
        description:"AMD said it sees an opportunity to develop an artificial intelligence chip specifically for the Chinese market to comply with U.S. export curb",
        cat:"tech",
        para:"AMD said it sees an opportunity to develop an artificial intelligence chip specifically for the Chinese market to comply with U.S. export curbs, in a move that would follow rivals Nvidia and Intel. Lisa Su, CEO of AMD, said on an earnings call late Tuesday that China is an important market and that the semiconductor giant wants to be fully compliant with U.S.export controls. "

      },
       {
        id:19,
        heading:"How it Works: Tesla's Autopilot Self-Driving Automobile Technology",
        image:" https://www.jameco.com/Jameco/workshop/Howitworks/how-it-works-tesla-autopilot-self-driving-automobile-technology-fig3.jpg",
        description:"From home to destination, Tesla's enhanced Autopilot adds a new experience to self-driving vehicles. With 40X more processing power and advanced sensor technology, Tesla makes way for the future of driving.",
        cat:"tech",
        para:"Tesla's features making autopilot possible , A forward-facing radar Cameras, Cameras provide visibility up to 250 meters away, A high-precision digitally-controlled electric assist braking system, 12 long-range ultrasonic sensors around the car. These sensors can be affected if there is debris covering them .Sense everything within 16 feet away from the vehicle",

      },
       {
        id:20,
        heading:" Elon Musk's SpaceX Rocket Punches Hole In Ionosphere",
        image:"https://c.ndtvimg.com/2022-02/d15ia4g8_spacex-falcon-9-rocket-afp_625x300_10_February_22.jpg ",
        description:" The ionosphere lies on the edge of space and is filled with charged particles called ions.",
        cat:" tech",
        para:" rocket launched by Elon Musk's SpaceX punched a temporary hole in the ionosphere surrounding our planet, according to a report in spaceweather.com. The Falcon 9 rocket was launched on July 19 from the Vandenberg Space Force Base in California. According to the company website, it is a reusable, two-stage rocket for the reliable and safe transport of people and payloads into Earth orbit and beyond. SpaceX also said that it is the world's first orbital class reusable rocket. Falcon 9 has conducted 240 launches and 198 landings."

      },
       {
        id:21,
        heading:"Intel releases two new Arc laptop GPUs for budget gaming",
        image:" https://www.pcworld.com/wp-content/uploads/2023/08/Intel-Arc.jpg?resize=1024%2C512&quality=50&strip=all",
        description:"The two new Arc chips fill a noticeable hole in Intel's mobile Arc lineup. ",
        cat:"tech",
        },
      {
        id:22,
        heading:'Apple, Microsoft remain world’s top 2 companies by market cap',
        image:"https://images.indianexpress.com/2023/08/apple-featured-reuters.jpg?w=640",
        description:"Strong quarterly earnings from companies such as Alphabet, Meta Platforms, Intel lifted overall market sentiment last month.",
        cat:'tech',
      },
      {
        id:23,
        heading:"Chandrayaan-3 is on its journey to the moon. For the latest status",
        image:"https://cdn.britannica.com/92/126092-050-7A610AAE/Artist-conception-lunar-probe-Chandrayaan-1.jpg",
        description:"Chandrayaan-3 is a follow-on mission to Chandrayaan-2 to demonstrate end-to-end capability in safe landing and roving on the lunar surface. It consists of Lander and Rover configuration. It will be launched by LVM3 from SDSC SHAR, Sriharikota. The propulsion module will carry the lander and rover configuration till 100 km lunar orbit. The propulsion module has Spectro-polarimetry of Habitable Planet Earth (SHAPE) payload to study the spectral and Polari metric measurements of Earth from the lunar orbit. emonstrating new technologies required for Inter planetary missions. The Lander will have the capability to soft land at a specified lunar site and deploy the Rover which will carry out in-situ chemical analysis of the lunar surface during the course of its mobility. The Lander and the Rover have scientific payloads to carry out experiments on the lunar surface. The main function of PM is to carry the LM from launch vehicle injection till final lunar 100 km circular polar orbit and separate the LM from PM. Apart from this, the Propulsion Module also has one scientific payload as a value addition which will be operated post separation of Lander Module. The launcher identified for Chandrayaan-3 is LVM3 M4 which will place the integrated module in an Elliptic Parking Orbit (EPO) of size ~170 x 36500 km.",
        cat:"tech",

      },
      {
        id:24,
        heading:"Smart Assistive Shoes with Internet of ThingsImplementation for Visually Impaired People",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKOvfliYPqCK61cgwKSocwzG8DdjZE-gpkA&usqp=CAU",
        description:" Visually impaired people usually have a lot of difficulties involved iinteracting with their environment. Physical movement is a major challenge for them,because it can be tricky to make a distinction about where they are and how they can move from one place to another. In this project, smart assistive shoes with Internet of Thing (IoT) implementation is designed. These shoes are equipped with ultrasonic sensors and vibration motors that can warn users about obstacles. Next, the IoT system is implementeusing Adafruit IO and If This, Then That (IFTTT) to transfer data between Googl Assistant and buzzer for shoes position finder purposes. NodeMCU allows the buzzer onshoes to be controlled by the Internet using its WiFi module which is connected .",
        cat:"tech"
      },
      {
        id:25,
        heading:"An IoT-Enabled Stroke Rehabilitation System Based on Smart Wearable Armband and Machine Learning",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxN21XbEvLLgoaQci18LAT8xN4Kw9l6p8o4g&usqp=CAU ",
        description:"Surface electromyography signal plays an important role in hand function recovery training. In this paper, an IoT-enabled stroke rehabilitation system was introduced which was based on a smart wearable armband (SWA), machine learning (ML) algorithms, and a 3-D printed dexterous robot hand. User comfort is one of the key issues which should be addressed for wearable devices. The SWA was developed by integrating a low-power and tiny-sized IoT sensing device with textile electrodes, which can measure, pre-process, and wirelessly transmit bio-potential signals. By evenly distributing surface electrodes over user’s forearm, drawbacks of classification accuracy poor performance can be mitigated. A new method was put forward to find the optimal feature set. ML algorithms were leveraged to analyze and discriminate features of different hand movements, and their performances were appraised by classification complexity estimating algorithms and principal components analysis. According to the verification results, all nine gestures can be successfully identified with an average accuracy up to 96.20%. In addition, a 3-D printed five-finger robot hand was implemented for hand rehabilitation training purpose. Correspondingly, user’s hand movement",
        cat:"tech"

      },
      {
        id:26,
        heading:"Innovation in terms of robotics applications in agriculture has advanced considerably in the last 5 years.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UkOMjRpPSL_ynAu0h29LKJSplRjiowEClw&usqp=CAU",
        description:"The objective of agricultural robotics is to help the sector in its efficiency and in the profitability of the processes. In other words, mobile robotics works in the agricultural sector to improve productivity, specialization and environmental sustainability. Labor shortages, increased consumer demand and high production costs are some of the factors that have accelerated automation in this sector, with the aim of reducing costs and optimizing harvests.Did you know that up to 99% of phytosanitary products are currently wasted because they cover the entire field? Agricultural robotics is capable, for example, of spraying pesticides only to the plants that need them. This is just one example of how very concrete benefits can be seen in sectors that are traditionally not very automated.",
        cat:"tech",

      },
      //  
      //hollywood data 13
      {
        id:27,
        heading:"Pirates of the Caribbean: The Curse of the Black Pearl is a 2003 American fantasy supernatural swashbuckler film directed by Gore Verbinski. Produced by Jerry Bruckheimer and distributed by Walt Disney Pictures, the film is based on Walt Disney's Pirates of the Caribbean attraction at Disney theme parks.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZzcmGlQ9E2R5DY7n9rGaRyU-Yph55LzkWw&usqp=CAU",
        description:"The Pirates of the Caribbean franchise launched Johnny Depp into megastardom and put pirates back on the cultural treasure map, all beginning with 2003’s The Curse of the Black Pearl. If you want to watch the Pirates of the Caribbean movies in order, set sail with Captain Jack Sparrow and his two lovely assistants Elizabeth Swann and Will Turner (Keira Knightley, Orlando Bloom) towards Dead Man’s Chest and At Worlds End. With that trilogy closed, the series continued on with the further adventures of Jack with On Stranger Tides and Dead Men Tell No Tales. In the years since, a sixth film remains in the works, while in June 2020, Disney announced a spin-off to star Margot Robbie. For now, see our guide on how to watch the Pirates of the Caribbean movies in order. —Alex Vo",
        cat:"holly"
      },
      {
        id:28,
        heading:"Prometheus (2012 film) Mistery",
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Prometheusposterfixed.jpg/220px-Prometheusposterfixed.jpg",
        description:"Prometheus entered production in April 2010, with extensive design phases during which the technology and creatures that the film required were developed. Principal photography began in March 2011, with an estimated $120–130 million budget. The film was shot using 3D cameras throughout, almost entirely on practical sets, and on location in England, Iceland, Scotland, Jordan and Spain. It was promoted with a marketing campaign that included viral activities on the web. Three videos featuring the film's leading actors in character, which expanded on elements of the fictional universe, were released and met with a generally positive reception and awards.Prometheus was released on June 1, 2012, in the United Kingdom and on June 8, 2012, in North America. The film earned generally positive reviews, receiving praise for the designs, production values and cast performances, but was criticized for its uneven script and unresolved plot points. The film grossed over $403 million worldwide. A sequel, Alien: Covenant, was released in May 2017, tying the film permanently to the Alien franchise. ",
        cat:"holly"
      },
      {
        id:29,
        heading:"Jurassic World: Fallen Kingdom",
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jurassic_World_Fallen_Kingdom.png/220px-Jurassic_World_Fallen_Kingdom.png",
        description:"Filming took place from February to July 2017 in the United Kingdom and in Hawaii. Fallen Kingdom premiered in Madrid on May 21, 2018, and was theatrically released in the United States on June 22, by Universal Pictures. On a budget of $432 million, the film is the second-most expensive film ever made. The film grossed over $1.3 billion worldwide, making it the third Jurassic film to pass the billion-dollar mark, and was the third-highest-grossing film of 2018 and the 12th-highest-grossing film of all time. It received mixed reviews from critics, who generally praised the visuals and darker tone, while others criticized the screenplay and felt the series had run its course.[10] A sequel titled Jurassic World Dominion was released in 2022.",
        cat:"holly"
      },
      {
        id:30,
        heading:"Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, ",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJstmWSVmtTR06-fskelHgTo45dGpAHT9NWw&usqp=CAU",
        description:"Set on the fictional continents of Westeros and Essos, Game of Thrones has a large ensemble cast and follows several story arcs throughout the course of the show. The first major arc concerns the Iron Throne of the Seven Kingdoms of Westeros through a web of political conflicts among the noble families either vying to claim the throne or fighting for independence from whoever sits on it. The second focuses on the last descendant of the realm's deposed ruling dynasty, who has been exiled to Essos and is plotting to return and reclaim the throne. The third follows the Night's Watch, a military order defending the realm against threats from beyond Westeros's northern border.Game of Thrones attracted a record viewership on HBO and has a broad, active, and international fan base. Critics have praised the series for its acting, complex characters, story, scope, and production values, although its frequent use of nudity and violence (including sexual violence) has been subject to criticism. The final season received significant critical backlash for its reduced length and creative decisions, with many considering it a disappointing conclusion. The series received 59 Primetime Emmy Awards, the most by a drama series, including Outstanding Drama Series in 2015, 2016, 2018 and 2019. Its other awards and nominations include three Hugo Awards for Best Dramatic Presentation, a Peabody Award, and five",
        cat:"holly"
      },

       {
        id:31,
        heading:"Fantastic Beasts: The Secrets of Dumbledore certainly sets up a sequel - but will there be a Fantastic Beasts 4? Here's everything we know so far.",
        image:"https://upload.wikimedia.org/wikipedia/en/3/34/Fantastic_Beasts-_The_Secrets_of_Dumbledore.png",
        description:"Fantastic Beasts The Secrets of Dumbledore certainly sets up a sequel - but will there be a Fantastic Beasts 4? Here's everything we know so far.Fantastic Beasts: The Secrets of Dumbledore arrived in 2022, and here’s everything to know about its sequel, Fantastic Beasts 4. The Fantastic Beasts franchise, a prequel series set decades before the Harry Potter films, has not had the smoothest journey. Between the release of the second and third films, the role of Grindelwald was recast — with Mads Mikkelsen replacing Johnny Depp — and J.K. Rowling at the center of controversy, among other things. The Secrets of Dumbledore is the third installment, following Albus Dumbledore, Newt Scamander, and their assembled group of allies as they aim to stop Gellert Grindelwald in his bid for power over the Wizarding World. ",
        cat:"holly",

      },
      {
        id:32,
        heading:'Twilight Saga TV series is reportedly in the works',
        image:"https://our.today/wp-content/uploads/2023/04/Twilight-1024x576.jpg",
        description:"Well Twilight fans, this news is about to take you to the moon and back!. More than a decade after the film adaptations of the Twilight saga reached an epic conclusion, a television series based on Stephenie Meyer’s four-part book series is reportedly in the works According to The Hollywood Reporter, the upcoming series is in the stages of early development at Lionsgate Television.However there have been very few confirmed details such as a network/platform or a writer. Reports are that the author, Meyer, is expected to be involved in the highly anticipated project.",
        cat:'holly',
      },
      {
        id:33,
        heading:"Jumanji 4 potential release date, cast and everything you need to know",
        image:"https://m.media-amazon.com/images/I/81L4HT0pS5L._AC_SY679_.jpg",
        description:"Jumanji: Welcome to the Jungle Jumanji, the magical board game and ancient portal to its fearsome and savage jungles, gets an upgrade, this time luring four teens into its realm when one of them stumbles upon an old-school video-game console. Inevitably, as the unwitting players transform into their chosen game avatars inside a mysterious new world crawling with formidable adversaries, they'll need to put their newly-acquired skills to good use to finally complete the game. The deep sound of the feral drums is incessant. Can the quirky quartet return to the physical world in one piece?",
        cat:'holly',
      },
      {
        id:34,
        heading:"Transformers movies in order: Chronological and release",
        image:"https://cdn.mos.cms.futurecdn.net/dPo92zYeAz7Joxh7HWooJ3-970-80.jpg.webp",
        description:"ransformers: Rise of the Beasts is a 2023 American science fiction action film based on Hasbro's Transformers toy line, and primarily influenced by its Beast Wars sub-franchise. It is the seventh installment in the Transformers live-action film series and serves as both a standalone sequel to Bumblebee (2018) and a prequel to Transformers (2007).[6] The film was directed by Steven Caple Jr. from a screenplay by Joby Harold, Darnell Metayer, Josh Peters, Erich Hoeber, and Jon Hoeber. It stars Anthony Ramos and Dominique Fishback as well as the voice talents of Ron Perlman, Peter Dinklage, Michelle Yeoh, Pete Davidson, Liza Koshy, Michaela Jaé Rodriguez, Colman Domingo, Cristo Fernández, Tongayi Chirisa, and returning franchise regulars Peter Cullen, John DiMaggio, and David Sobolov. Set in 1994, the film follows ex-military electronics expert Noah Diaz and artifact researcher Elena Wallace as they help the Autobots and the Maximals protect an artifact known as the Transwarp Key from the villainous Terrorcons who intend to use it to bring their planet-eating master Unicron to Earth.To prepare for the premiere of Transformers: The Last Knight, I watched all four prior Transformers movies—all 611 minutes—in the span of two days, an experience I’m confident changed me as a person. I now dream of explosions, think primarily in Linkin Park songs; I blacked out halfway through Age of Extinction, and when I woke up I was leasing several Dodge Chargers. I cannot afford any of them. What I can do, however, is explain every detail of Michael Bay’s pyrotechnic-porn franchise based on a line of toys from the 1980s, the ins-and-outs of the Transformers universe ",
        cat:"holly",
      },
      {
        id:35,
        heading:"Harry Potter: Hogwarts Mystery Award-Winning Developers Say Mobile Gaming Is The Future Of Entertainment",
        image:"https://imageio.forbes.com/specials-images/imageserve/5e997eecf57d440006ee339d/Harry-Potter--Hogwarts-Mystery--by-Jam-City-and-Portkey-Games/960x0.jpg?format=jpg&width=960 ",
        description: "Harry Potter: Hogwarts Mystery, created by Los Angeles-based game developer .Harry Potter: Hogwarts Mystery, created by Los Angeles-based game developer Jam City under Portkey Games, released in 2018. An immersive, narrative-driven mobile game offering players the ability to customise their experience entirely, the game ranked as the #1 most downloaded game in over 40 countries. In a time where we are seeing the entertainment industry upended by the Covid-19 pandemic, mobile gaming may just prove to be the future of entertainment, and a promising avenue for creatives to consider, according to Jam’s City’s narrative director, Kimberly Hamilton, and Jam City’s co-founder, Josh Yguado. ",
        cat:"holly",

      },

      {
        id:36,
        heading:"11 Facts About Tom & Jerry that Will Blow Your Mind",
        image:"https://1.bp.blogspot.com/-cVhHjgjcyK8/X_q9f4eVyxI/AAAAAAAACas/seoF3SsI-LgJDgbHWQyqXCwqneJl0bEZQCLcBGAsYHQ/w400-h269/tom%2Band%2Bjerry.jpg",
        description:" Highly influential and extremely memorable, the series are often remembered for their iconic cat and mouse fights. As you are here, you must be curious to know more about tom & jerry. So let’s begin by very basic fact that it was created as early as the 1940s by William Hanna and Joseph Barbera, the cat and mouse duo Tom & Jerry have since won over the hearts of millions. The animation series took the world by storm and is truly an unforgettable part of the childhoods of many generations.",
        cat:'holly'
      },
      {
        id:37,
        heading:"All The Witcher season 4 news we’ve heard so far",
        image:"https://m.media-amazon.com/images/I/51TbOaoGxhL.jpg",
        description:"Next time we see Geralt, he’ll have a very different face  The Witcher season 3 has reached an end after two parts and eight episodes, but that doesn’t mean our heroes’ journey across The Continent is over. After violent coups, dangerous plots, secret portals, and plenty of fights, Geralt, Yennefer, and Ciri are all separated, and who knows when they might get back together again Netflix is definitely bringing The Witcher back for season 4, and while we have a few ideas about what’s to come, including the series’ already infamous recasting, there are still quite a few questions left, including when it might come out. ",
        cat:"holly"
     
      },
      {
        id:38,
        heading:"Will there be a fourth Narnia movie?",
        image:"https://www.narniaweb.com/wp-content/uploads/2019/03/3-Posters.png",
        description:" Walden Media produced three movies based on The Chronicles of Narnia by C.S. Lewis between 2005 and 2010.After The Voyage of the Dawn Treader‘s box office sank below expectations, producers disagreed about which Narnia book to bring to the screen next. Walden Media hoped to produce The Magician’s Nephew as the fourth film in the series, but negotiations fell through and they lost the rights. In 2013, The Mark Gordon Company began developing The Chronicles of Narnia: The Silver Chair. Director Joe Johnston said it would begin a new Narnia “trilogy.” But the project was eventually abandoned due to creative differences between Douglas Gresham and the studio.Currently, Netflix is developing Narnia movies and series with Matthew Aldrich at the helm. Here is everything we know. ", 
        cat:"holly"
      },
      {
        id:39,
        heading:"Luke Evans wants his Dracula to join Universal's Dark Universe",
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/41/1476453918-dracula-untold-key-di-1.jpg",
        description:"This is a character who could transcend many different times. Luke Evans definitely isn't convinced that his version of Dracula has been staked through the heart.The Fast & Furious star played the immortal vampire in 2014's Dracula Untold, which had been tipped as being connected to what has become Universal's Dark Universe of monster movies.Dracula Untold was very successful at the worldwide box office with more than $200 million in ticket sales, but its reviews were poor.Evans has now acknowledged the film's flaws, but suggested to Screenrant that he'd like another shot at playing Dracula alongside Tom Cruise's Mummy hunter, Russell Crowe's Dr. Jekyl and Javier Bardem's Frankenstein monster in the shared Dark Universe.",
        cat:'holly'
      },
      //fitnes data 14
      {
        id:40,
        heading:"The most caring online fitness club in the galaxy ",
        image:"https://www.nerdfitness.com/wp-content/uploads/2023/03/NF-CampNF2023-Cutout-1000-e1680298637919.png ",
        description:"Welcome to the Nerd Fitness Rebellion ",
        cat:"fitness",
        para:" We are a group of nerds dedicated to bringing you trustworthy information on how to create long-term, sustainable fitness results ~ all while actively celebrating unique passions and nerdiness in all forms. Over the past 14 years, we’ve helped thousands of people reach their fitness goals through our free articles and our kick-ass 1-on-1 Online Coaching Program."
      },
      {
        id:41,
        heading:"Are you ready for a Coach? Take our quiz to find out! ",
        image:"https://www.bornfitness.com/wp-content/uploads/2021/06/intro-2.jpeg",
        description:"find out if 1-on-1 Coaching is the right choice for you right now, or if another option would suit you better. 💪The hardest part of improving your fitness and nutrition is finding someone that understands why you struggle. We specialize in meeting you where you are, offering practical plans and advice that are designed for real life and deliver results. You are not alone, and we are here to help. ",
        cat:"fitness",
      },
      {
        id:42,
        heading:" The ultimate beginner's guide to the gym",
        image:"https://img.freepik.com/free-psd/gym-fitness-social-media-banner-template_106176-561.jpg?w=740&t=st=1691160118~exp=1691160718~hmac=8e369d312ebe3821a244d2cac51cb75918ee3ec56c1a4fc03ea7b47db42905a0",
        description:" If you don’t know what to do in the gym or you’ve never stepped foot in one before, it can seem like a pretty scary place. What are all the machines for? How do I do use them? Is everyone looking at me?That’s why we’ve put together the ultimate gym guide for beginners, that covers everything from what to pack in your gym bag, right up to your very own beginner’s workout. Once you’ve read through this guide, you’ll know everything there is to know about working out in the gym and smashing your fitness goals",
        cat:"fitness",
      },
     
      {
        id:43,
        heading:"The 20 Workout Machines Your Gym Must Have ",
        image:"https://sparkmembership.com/wp-content/uploads/2022/10/The-20-Workout-Machines-Your-Gym-Must-Have.png",
        description:"To operate a thriving gym business, you must use suitable workout machines. choosing the correct gym equipment might be tricky. It is a long-term commitment and a significant investment, so you must be sure in your decisions. Furthermore, the gym machines you select will be among the first impressions you generate on prospective members. So, to save you time, we have compiled a list of gym equipment basics to assist you in making the proper selection",
        cat:"fitness",
      },
      {
        id:44,
        heading:"YOGA FOR FITNESS ",
        image:"https://www.bu.edu/ghblast/files/2015/04/Healing-Through-Yoga-Poster1-477x636.jpg",
        description:" Yoga for fitness poses will work your entire body, burn fat, and tone muscle.Slow movements and deep breathing increase blood flow and warm up muscles, while holding a pose can build strength. Balance on one foot, while holding the other foot to your calf or above the knee (but never on the knee) at a right angl",
        cat:"fitness",
      },
      {
        id:45,
        heading:"The Plank Exercise Every Day? ",
        image:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/01/06152556/3.jpg",
        description:"Planks and wall sits best exercise for lowering blood pressure, study says  A plank exercise is the best exercise to strengthen your core and abdomen. These exercises strengthen your hips, lower back and abdomen and improve your body balance. It is used in yoga, by professional boxers and sports like hockey, cricket and football",
        cat:"fitness",
      },
      {
        id:46,
        heading:" Wake Up And Walk! 7 Benefits Of Taking A Morning Stroll",
        image:" https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/interior-banner-images/2022/04/morning-walks.jpg?h=785&iar=0&w=1920&rev=76363254da794b9f8a620d0e9923de3c&hash=F6A688562E17F80A53E1F6FED0625BBD",
        description:"Benefits Of A Morning Walk Starting your day with a morning walk helps you check something important off your daily to-do list – your fitness Even if you only have time for a 10-minute walk each morning, you’ll have up to 70 minutes of exercise by the end of the week. And any type of movement that you add in later in the day, whether it’s taking the stairs or walking to your car at the far end of the parking lot, improves your overall health ",
        cat:"fitness"
      },
      {
        id:47,
        heading:"12 Top Fitness Blogs You Need to Follow ",
        image:" https://www.glofox.com/wp-content/uploads/2020/10/young-woman-workout-by-laptop-online-fitness-coach-workout-club-trainer-video-sport-class-social_t20_1nX4Yv-1024x683.jpg",
        description:"Today, more than ever, there is a renewed focus and awareness on health and fitness. People are truly beginning to understand how exercise not only helps your body, but your mind too. As a result, people are looking for more information on their journey to good health. But how do you find the right place to get quality information on health and fitness? There are a lot of blogs out there, and not all of them provide the best or most reliable information.In this digital age, there’s no better place than the internet for finding the answers you need. Fitness apps, videos, and influencers can be a great source of information, but there’s one resource which can be a massive help: fitness blogs. If you’re a fitness business owner, you can learn a thing or two from the way some of the best ",
        cat:"fitness",
       },
      {
        id:48,
        heading:"Scientific fitness enthusiasts & bodybuilders ",
        image:" https://www.glofox.com/wp-content/uploads/2023/09/youtubebmlogo5-400x244.webp",
        description:" Breaking Muscle is an online platform that provides high-quality fitness content all backed up by scientific facts. The blog is super versatile and is seen as an expert source in the fitness world. This means that the blog commands an audience of consumers, professionals, and fitness enthusiasts. Content is clearly separated on the blog for trainers and coaches as well as consumers. The blog features a lot of different content such as reviews, videos, workout routines, fitness articles, and product reviews. It’s also a great source for bodybuilders with plenty of advice on bodybuilding and how to grow muscle. ",
        cat:"fitness",
      },
      {
        id:49,
        heading:"Eating Whey Protein Supplements on Daily Basis Could Help Stop Diabetes ",
        image:" https://www.fitnessguru.co.in/mobile_app/public/img/images/1617076975_FitnessGuru_March2021_17.jpg",
        description:"Diabetes is a common problem today which people from various parts of the world are aware of and many people are dealing with it. When a person is diabetic, his/her body finds it difficult to maintain normal blood sugar levels. Right dietary choices can help you manage your blood glucose level, especially in the case of type 2 diabetes Protein can help people with diabetes. Yes, you read that right. It might be possible that the whey protein shake that you are consuming, might be helpful even if you are diabetic. Protein is needed by everyone. It helps in building, maintaining, and repairing muscles.A study in 2003 stated that a high-protein diet can be helpful for people with diabetes as it can help in managing your blood sugar levels.Whey Protein and Diabetes Whey protein is a type of protein that is rich in various nutrients including essential amino acids. It is a fast-absorbing protein obtained from milk. There are various benefits of whey protein and helping with weight loss and type 2 diabetes are two of those advantages of this super-protein. ",
        cat:"fitness",
      },
      {
        id:50,
        heading:"Bodybuilding Diet Plan For Beginners " ,
        image:"https://www.healthkart.com/connect/wp-content/uploads/2017/01/banner-14-1.jpg",
        description:"While a strict training regimen is necessary, you can never underestimate the importance of a solid bodybuilding diet plan to get the best out of your workout While a strict training regimen is necessary, you can never underestimate the importance of a solid bodybuilding diet plan to get the best out of your workout.Staying fit and looking amazing may seem extremely desirable but it requires some effort and commitment. Many individuals do not even know where to begin. Well, bodybuilding is a combination of regular workouts as well as proper nutrition. You can start by moving towards an Indian bodybuilding diet and strict, disciplined workout regimen to bulk up. There are multiple ways to follow a strict Indian veg diet plan for muscle gain and also consume weight gaining smoothies along with your workout to get the desired results. ",
        cat:"fitness",
      },
      {
        id:51,
        heading:"Golden Pyramid Of Fat Loss",
        image:"https://www.healthkart.com/connect/wp-content/uploads/2023/01/Golden-Pyramid-1.png",
        description:"Training hard to reach your fitness goals without following a proper diet is not going to help you. You will be getting ripped with strenuous training with no results and could be demotivating as hell. For effective fat loss, watch what you eat, burn more calories than you consume, and see the difference.The pattern of nutrients in your diet also changes according to your training. You will need to add foods rich in nutrients that help in building lean mass, strengthen your muscles, help in recovery and repair of muscles and also provide the energy required to sustain the tedious training.To establish the calorie deficit and raise the chances of reaching your fitness goals you will have to include high-intensity interval training. The intensity of your training will also ramp up with less rest between sets. You will need a lot of energy to fuel your intense sessions and supplements that aid your energy supply will be beneficial.The golden pyramid of fat loss is devised with strategies to help you succeed in your fat loss",
        cat:"fitness",

      },
      {
        id:52,
        heading:"Top Posture Correction Exercises For Best Results",
        image:"https://www.healthkart.com/connect/wp-content/uploads/2023/05/top-posture-correction-exercises-for-best-results_300.jpg",
        description:"Posture is one of the most important aspects of our overall health and well-being. Poor posture can lead to a variety of health problems such as neck pain, back pain, headaches, and even digestive issues. It can also affect our confidence and the way we present ourselves to the world. However, with the right posture correction exercises and a little bit of effort, you can correct your posture and enjoy the benefits of better health, improved confidence, and a more attractive appearance. Bridge pose is a yoga pose that can help strengthen your glutes, hamstrings, and lower back muscles, improving your posture and lowering your risk of lower back pain. Lie on your back with your legs bent and your feet flat on the ground to perform this pose. As you press your feet and arms into the ground and raise your hips to the ceiling, keep your knees and thighs parallel. Hold for between 30 seconds to 1 minute before letting go.",
        cat:"fitness",

      },
      {
        id:53,
        heading:"Yatinder Singh is an Indian bodybuilder, entrepreneur and fitness icon. His most recent accomplishments include the silver medal in 7th World Body Building and Physique Championship 2015 and Mr. India 2016.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNOfxp-GhIYmeBrW8enqMJrlBjDC0I-TB0g&usqp=CAU",
        description:"The year 2001 marked the beginning of Singh's bodybuilding career. After winning his first championship in 2002, he took part in several bodybuilding and fitness competitions in India and later internationally. Singh had to stay away from bodybuilding for the next three years.To become financially independent, he soon started working as a personal trainer in a gym in Meerut, Uttar Pradesh. In 2008, he moved to Gurgaon to pursue his career as a businessman.By 2008, Singh's back had recovered substantially and he returned to bodybuilding. He started researching and studying techniques that would help him work out without straining himself. He completed ACE and ACSM training courses. In 2010, Singh won several championships such as Mr. UP Overall title, Mr. North India, Senior Mr. India title in 75  kg category. He was also the first runner-up in the overall Sr. Mr. India and won the title of the Best Improved Bodybuilder",
        cat:"fitness",

      },
      //Food data 13
      {
        id:54,
        heading:"Add Some Green To Your Meal! Try This Delicious Coriander Curd Rice Today ",
        image:"https://c.ndtvimg.com/2023-03/4edpc4bo_curd-rice_625x300_28_March_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350 ",
        description:"While a typical plate of curd rice is enough to soothe your soul, we thought of perking it up with a splash of colours.Add Some Green To Your Meal! Try This Delicious Coriander Curd Rice TodayWhile a typical plate of curd rice is enough to soothe your soul, we thought of perking it up with a splash of colours. Read on for details.Somdatta SahaUpdated: July 27, 2023 16:17 ISTRead Time:4 min Add Some Green To Your Meal! Try This Delicious Coriander Curd Rice Today Curd rice is easy to make and fullfilling to the corePhoto Credit: iStockHighlightsCurd rice makes for a hearty meal for breakfast or lunch.It adds a burst of flavours to our palate and soothes the soul.We amp up its flavours by adding some greens in the recipe.In one word, curd rice spells 'comfort,' and we can keep gushing over it for hours. It is easy to make, light on the stomach and helps you put together a wholesome meal in not more than 15-20 minutes. In fact, it is one of those handful of South Indian recipes that can give the quintessential dosa and idli a run for their money. A hearty mix of rice and dahi, with a temper of curry leaves, red chilli, and mustard seeds, curd rice adds a burst of flavour with every single bite. ",
        cat:"food",
    
      },
      {
        id:55,
        heading:"15 Delicious Street Foods Of India To Amp Up Your Tea-Time ",
        image:"https://c.ndtvimg.com/2022-07/i1jfa01o_street-food_625x300_20_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350 ",
        description:"Every city in India has something special to offer. Tea-Time Here's a list of the most popular street foods in India. These street foods will tempt your taste buds like no other food in the world. Take a look below.हिंदी में पढ़ेंGauri RohatgiUpdated: December 20, 2022 15:10 ISTRead Time:5 min 2 Every city in India has something special to offer.iStockHighlightsStreet food is an inseparable part of Indian cuisine.Here we bring you some of the most popular street foods.These street foods are taken from the cuisines of different cities.Indian street food is made with a melange of spices, ingredients and flavours that give it a special appeal. When you bite into a plate of chaat, tikki, gol gappa and other dishes, we guarantee you'll be hit with a wave of flavours ranging from sweet and spicy to tangy. While some elements of your street food may dissolve quickly in your mouth, others may be crunchy ",
        cat:"food",
        
      },
      {
        id:56,
        heading:"Best Punjabi Recipes | Easy Punjabi Recipes ",
        image:"https://i.ndtvimg.com/i/2017-01/sarson-ka-saag_620x350_81484297304.jpg ",
        description:"Punjabi food is a lot like Punjabis - rich, robust and full of life.One of the most impressive things about Punjabi food is its variety. While meat lovers can never have enough of the evergreen Butter Chicken, Bhuna Gosht, Tandoori Chicken and Amritsari Machchi, vegetarian fare is equally delightful. Sarson ka Saag, Chole Bhature and Dal Makhni are just a handful of vegetarian Punjabi specialities with fans across the globe. Think of Punjab and you can imagine its earthy heritage of lush green fields and robust lifestyle. What makes Punjab different from the other states is its culinary treasure, it is a state synonymous with food. Punjabi food is a lot like Punjabis - rich, robust and full of life ",
        cat:"food",
      },
      {
        id:57,
        heading:"Make Rajasthani Masala Bati At Home Without An Oven. ",
        image:"https://c.ndtvimg.com/2023-01/gkj9ep5_dal-bati_625x300_15_January_23.jpg ",
        description:"Dal Baati is created from a blend of wheat flour and five types of lentils. Make Rajasthani Masala Bati At Home Without An Oven And Enjoy The Traditional FlavoursRajasthan, a state in India renowned for its history, culture, handicrafts, and delectable food, boasts iconic dishes such as lal maas, gatte ki sabzi, bajre ki roti, and rabodi ki sabzi.PayalUpdated: August 04, 2023 16:19 ISTRead Time:2 mi Make Rajasthani Masala Bati At Home Without An Oven And Enjoy The Traditional Flavours Dal Baati is created from a blend of wheat flour and five types of lentils.HighlightsDal Baati stands out as a wonderful recipe with fans across the globe.Traditionally, Daal Baati is cooked over hot coals.Alternatively, deep frying in oil is also an option.Indian cuisine is brimming with diversity; when it comes to regional dishes, each state offers a plethora of delicious options that can entirely transform your taste buds. Rajasthan, a state in India renowned for its history, culture, handicrafts, and delectable food, boasts iconic dishes such as lal maas, gatte ki sabzi, bajre ki roti, and rabodi ki sabzi. Among these culinary treasures, Dal Baati stands out as a wonderful recipe with fans across the globe. Dal Baati is created from a blend of wheat flour and five types of lentils, served alongside ghee and churma.",
        cat:"food",
       
      },
      {
        id:58,
        heading:"Enjoy Cake Guilt-Free! 6 Easy Ways To Make It Healthier And Tastier ",
        image:"https://c.ndtvimg.com/2022-09/028kv0ag_walnut-cake_625x300_07_September_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350 ",
        description:"Cakes can be made healthier by swapping certain ingredien . re you tired of resisting your sweet cravings while on a diet? Are you craving cakes but worried about putting on extra calories? We understand that this can be quite challenging. Cakes are loaded with sugar and unhealthy fats, which can hinder our weight loss goals. But don't lose hope, as there are numerous ways in which you can enjoy cakes totally guilt-free! All you have to do is swap it for healthier ingredients. Your cake will taste just as good but will be a lot healthier. Isn't that something we all desire? Find below some helpful tips to up the nutrient quotient of your cakes",
        cat:"food",
  
      },
      {
        id:59,
        heading:"5 Mouth-Watering Indian Snacks To Relish This Monsoon And Earn Exciting Rewards ",
        image:"https://c.ndtvimg.com/2022-05/sklejhng_aloo-bread-pakoda_625x300_13_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350 ",
        description:"These snacks taste best when paired with a hot cup of chai or coffee. The monsoon season is in full swing, and so are our cravings for all things delicious. It's almost inevitable to not indulge in greasy and crispy snacks during this time of year. With beautiful cloudy skies, the sound of the pitter-patter of the rain, and a cool breeze flowing on our faces, we certainly do not want to miss any second of it. And sipping on a cup of chai or indulging in scrumptious snacks only makes it a whole lot better. Doesn't it? The best part is that we are spoiled for choice when it comes to selecting these snacks. With so many flavourful options to choose from, it can be a bit confusing.",
        cat:"food"
      },
      {
        id:60,
        heading:"World Coconut Day: 5 Coconut-Based Drinks To Refresh Your Mood ",
        image:" https://c.ndtvimg.com/2022-05/4ks5p5jo_coconut-water-recipes-_625x300_12_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
        description:"World Coconut Day is incomplete without these coconut-based drinks . Coconut has always been an integral part of Indian cuisine and culture likewise. Right from distributing dry coconuts in the form of prashad to preparing nariyaal ki barfi, the options are unlimited. You can also prepare an array of sweet and savoury dishes. Also, coconut oil is largely used in preparing various delicacies in the southern part of the country. And, we just cannot overlook its health benefits. To highlight the importance of this fruit, World Coconut Day is marked on September 2. Wondering how can you celebrate this day? Here, we have listed about five recipes for delicious drinks that use coconut in some way or another.",
        cat:"food",
       
      },
      {
        id:61,
        heading:"Veg Recipes Under 30 Minutes | Quick Veg Recipes ",
        image:"https://c.ndtvimg.com/2020-06/qc8ndie_rajma-sandwich_625x300_04_June_20.jpg ",
        description:"Quick Veg Recipes: Toss up the best of our veg recipes for your next meal .Love to eat but don't have the time to cook? Well, we bring you quick recipes that can be rustled up within 30 minutes without requiring much effort. Sounds too good to be true? Try it to believe it! There's nothing quite like enjoying simple flavours in home-made meals. Not only is it healthy, you can also pick your favourite ingredients and customise the flavours as per your liking. And when it comes to veggies there are so many delicious ways you can cook them! You should make the most of seasonal produce to load up on all the essential nutrients ",
        cat:"food"
      },
      {
        id:62,
        heading:"Street Vendor Makes Paratha Doused In Excessive Oil - 'Heart Attack,' ",
        image:"https://c.ndtvimg.com/2023-08/irq730c_paratha-in-oil_625x300_04_August_23.jpg ",
        description:"The paratha was doused in excessive oil much to the internet's dismay.There is something about street food which is so unmissable. Whether it is crispy sev puri or a hearty aloo tikki - we can't help dig into plate after plate of these treats. In the northern areas of the country, paratha is also a popular dish that is available on the street-side stalls. Vendors often serve parathas with chole, dal or as it is. Recently, however, the video of the making of a paratha by a street vendor has left the internet in shock. The reason was the copious quantity of oil used in the video. Take a look ",
        cat:"food",
      },
      {
        id:63,
        heading:"Did You Know? Meta CEO Mark Zuckerberg Eats 4,000 Calories Every Day ",
        image:"https://c.ndtvimg.com/2023-08/6bcun6n_mark-zuckerberg_625x300_04_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350 ",
        description:"Mark Zuckerberg is clearly a McDonald's fan and we have proof.",
        cat:"food"
      },
      {
        id:64,
        heading:"Making healthy ice cream can be difficult. By reducing fat and sugar, many end up rock-hard in the freezer and several alternative sweeteners do badly in ice creams.",
        image:"https://www.icecreamnation.org/wp-content/uploads/2023/03/02-2023-03-12-12.25.42.jpg",
        description:" To sweeten the base, I opted for my favourite alternative sweetener – birch sugar, also known as xylitol. Xylitol is, in my view, perfect for ice cream making – while most other alternative sweeteners do little or nothing to maintain a softer ice cream structure (resulting in the ice cream freezing rock-hard), xylitol actually does this even slightly better than ordinary sugar. The drawback? If you have a sensitive stomach or eat too much of it, you could get a tummy ache. And dogs can’t eat the ice cream either (no showstopper in my book, as there are many other things like chocolate  that dogs can’t eat either).Since I will add some (sugar-sweetened) blueberry jam to the base, my yoghurt ice cream won’t be totally sugar free. However, it is of course also perfectly possible to use the base with any other (sugar-free) flavours! If you have no xylitol and/or care little for the “sugar free aspect”, feel free to simply use 120 ml ordinary sugar instead: the rest of the recipe stays the same:-) .",
        cat:"food",

      },
      {
        id:65,
        heading:"Dates are known for their many health benefits, Health Benefits of Dates Milkshake",
        image:"https://www.century-foods.com/wp-content/uploads/2021/12/dates-milkshake.jpg",
        description:"Dates milkshake is a healthy and tasty drink that is very good for our health. It contains many vitamins and nutrients, which help to keep us strong and healthy. Similarly, it can be taken any time of the day, such as after exercise or before going to work in the morning. The milkshake contains all essential minerals such as potassium, sodium, calcium, and iron. Also, it has many health benefits, such as having a positive effect on the heart, brain, and body. Dates Milkshake is very good for our metabolism because the milkshake contains healthy nutrients which help to improve our digestive system",
        cat:"food",

      },
      {
        id:66,
        heading:"What are the health benefits of green tea?",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7xzqQ28R7ElBB2mvcjNHTSZHAaZb25gLKCyp_t_hte602cThcIcd3gt7_5KbFY8v24o&usqp=CAU",
        description:"People have hailed the health benefits of green tea for centuries. Studies suggest that consuming green tea may positively affect skin health, help with weight loss, and reduce the risk of cardiovascular disease, among other benefits.According to a report from the International Institute of Sustainable Development, tea is the second most consumed beverage in the world, after water.All tea types, except herbal, are brewed from the dried leaves of the Camellia sinensis bush. The level of oxidation of the leaves determines the type of tea.Green tea is made from unoxidized leaves and is one of the least processed types of tea. For this reason, it contains the most antioxidants and beneficial polyphenols.",
        cat:"food",
        }
    ])
  return (
    <>
    <Store.Provider value={[data,setData]}>
       {props.children} 
    </Store.Provider>
    </>
    )
  }

export default DataStore