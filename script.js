/**
 * Excuse Generator 3000 — script.js
 * Pure Vanilla JavaScript. Zero dependencies. Max alibis.
 */

(function () {
  'use strict';

  // --- Hand-Curated Excuse Database with Direct Escalations ---
  // Every base excuse is directly paired with its escalated consequence.
  const EXCUSE_DB = {
    'skipped-gym': {
      corporate: [
        {
          base: "I conducted a risk-reward audit on today’s squat session and determined the caloric expenditure does not align with our Q4 posture objectives.",
          escalation: "The audit was subpoenaed by executive leadership; they discovered my hamstrings have been running an unapproved shadow deficit since February."
        },
        {
          base: "My quadriceps failed to reach consensus with my hamstrings during today’s standup. We have paused leg day pending cross-functional alignment.",
          escalation: "The hamstrings have now retained external arbitration counsel, and my left calf is threatening a wildcat strike before tomorrow's warm-up."
        },
        {
          base: "Per my previous stretch, I am operating at zero physical bandwidth. Let's table deadlifts until we secure additional protein deliverables.",
          escalation: "Procurement intercepted the protein deliverables and restructured them into a 45-slide PowerPoint deck on metabolic synergy."
        },
        {
          base: "I am currently pivoting from an aerobic output model to a sustained desk-bound calorie retention strategy. It scales much better.",
          escalation: "The desk-bound model scaled so aggressively that OSHA has classified my office chair as a permanent geological formation."
        }
      ],
      bollywood: [
        {
          base: "How could I lift cold iron in the gym when my heart is already crushed under the unbearable weight of Rahul's betrayal?",
          escalation: "Rahul entered the gym with his new lifting partner, and the 20kg dumbbells melted into tears of burning molten brass!"
        },
        {
          base: "My mother swore on her sacred gold bangles that if I touched a barbell today, dark monsoon clouds would consume the family honor.",
          escalation: "The dark clouds have burst through the gymnasium ceiling; Maa is standing by the squat rack in torrential rain, clutching her chest!"
        },
        {
          base: "The gym trainer yelled 'One more rep!', but Rahul, does life ever give us one more chance?! Does it?!",
          escalation: "The trainer dropped his clipboard, fell to his knees in the chalk dust, and confessed that he too was abandoned by Rahul in 2004."
        },
        {
          base: "A stray violin began playing outside the locker room. Tears blurred my vision, and I knew destiny had chosen the couch for me.",
          escalation: "The entire philharmonic orchestra has relocated to my living room; even my protein shaker is now sobbing in raga Bhairav."
        }
      ],
      unhinged: [
        {
          base: "A moth flew into my bedroom and looked at me with such deep, ancient disappointment that I had to lie on the rug for four hours.",
          escalation: "The moth has now invited six larger moths; they formed a committee on the ceiling and voted unanimously that I am banned from cardio."
        },
        {
          base: "I put on my gym shorts, but they made a squeaking noise that alerted three neighborhood crows. I cannot leave under surveillance.",
          escalation: "The crows tapped my phone, recruited the neighborhood raccoons, and left a dead worm on my sneakers as a formal cease-and-desist."
        },
        {
          base: "I was on my way, but I realized my left knee has developed a distinct hatred for cardiovascular activities and I respect its boundaries.",
          escalation: "My knee has now started emitting low-frequency radio waves that cause nearby car alarms to activate whenever I approach stairs."
        },
        {
          base: "A psychic on Craigslist told me that if I bench press today, my third eye will close and my microwave will explode.",
          escalation: "I ignored the psychic and touched a 10lb plate; the microwave immediately began reheating an empty bowl of soup from 2019."
        }
      ],
      scientific: [
        {
          base: "The second law of thermodynamics clearly states that entropy in a closed system must increase. Lifting weights is an unnatural resistance to universal decay.",
          escalation: "Universal decay responded to my compliance by accelerating local entropy; my gym bag has decayed directly into radioactive ash."
        },
        {
          base: "My central nervous system initiated an emergency thermal shutdown. Conserving ATP reserves was deemed critical for baseline homeostasis.",
          escalation: "Baseline homeostasis crashed; my hypothalamus has outsourced thermal regulation to a nearby floor heater with dubious wiring."
        },
        {
          base: "Due to quantum uncertainty, until observed by a personal trainer, I am simultaneously running on the treadmill and napping horizontally.",
          escalation: "The wave function collapsed while unobserved: both states materialized at once, tearing a 2mm rift in the space-time fabric of Planet Fitness."
        },
        {
          base: "My mitochondria issued a formal peer-reviewed refusal to metabolize glucose under forced mechanical strain.",
          escalation: "The mitochondria have seceded from my cellular biology and are publishing a scathing counter-paper in Nature Cell Biology."
        }
      ]
    },

    'didnt-study': {
      corporate: [
        {
          base: "I chose not to onboard that syllabus content due to a fundamental lack of ROI. I plan to synergize my gut instinct with aggressive guessing.",
          escalation: "The aggressive guessing resulted in a hostile takeover of Question 4 by a proprietary hallucination that violates federal antitrust law."
        },
        {
          base: "The textbook material was trapped in a cross-functional bottleneck between chapter 3 and my willingness to retain information.",
          escalation: "Chapter 3 has declared sovereign independence from the syllabus and is now demanding its own bilateral trade agreement."
        },
        {
          base: "I pivoted to a high-level, holistic overview of the exam rather than getting bogged down in the granular weeds of 'knowing the answers'.",
          escalation: "The professor was not aligned with the holistic overview and has downgraded our relationship from 'academic' to 'contentious litigation'."
        },
        {
          base: "We are treating tomorrow’s exam as a discovery phase to identify knowledge gaps under live stakeholder scrutiny.",
          escalation: "Stakeholder scrutiny revealed the gap is 100% of the curriculum; we are re-branding the resulting F as an agile learning milestone."
        }
      ],
      bollywood: [
        {
          base: "How could I turn the pages of history when the unwritten ink of my own tragic destiny is already bleeding onto the floor?!",
          escalation: "The ink flowed out the front door, formed the silhouette of my ungrateful childhood sweetheart, and set fire to my admit card!"
        },
        {
          base: "The professor demands answers... but who will answer the cries of a wounded soul walking through the torrential rains of fate?",
          escalation: "The professor tore up my empty answer sheet, looked to the heavens, and revealed that he is actually my long-lost biological father!"
        },
        {
          base: "Maa coughed three times and said, 'Beta, don't read books written by strangers; read the pain in your mother's eyes.' I obeyed.",
          escalation: "Maa's eyes contained so much generational trauma that the desk lamp shattered and the family temple bell started tolling on its own!"
        },
        {
          base: "I opened the notebook, but the scent of dried jasmine between the pages summoned 14 flash-forwards and an entire dream sequence.",
          escalation: "The dream sequence ran 45 minutes over budget; the background dancers refused to leave my bedroom until they received cash payment."
        }
      ],
      unhinged: [
        {
          base: "I was going to read chapter 4, but I realized all 26 letters are just arbitrary squiggles invented by ancient farmers who didn't even have Spotify.",
          escalation: "I tried explaining this to the invigilator using interpretive stomping and now campus security is calling a folklorist."
        },
        {
          base: "I tried, but my ceiling fan started rotating counter-clockwise, which everyone knows reverses the flow of short-term memory.",
          escalation: "The ceiling fan has reversed my memory back to preschool; I can currently only recite the names of farm animals and chew on Crayolas."
        },
        {
          base: "A pigeon tapped on my window and told me in Morse code that multiple-choice tests are a spiritual trap.",
          escalation: "I joined the pigeon's commune on the library ledge; we have collectively rejected bubble sheets in favor of breadcrumbs."
        },
        {
          base: "I ate two pages of the summary guide with salsa hoping for cellular absorption. The hospital said I failed and also have acid reflux.",
          escalation: "The salsa-soaked pages digested poorly, and the radiologist confirmed my stomach lining is now copyrighted by Pearson Education."
        }
      ],
      scientific: [
        {
          base: "Heisenberg's Uncertainty Principle dictates that if I precisely measure the location of my textbook, its momentum toward my desk drops to zero.",
          escalation: "The textbook's momentum became imaginary; it has exited Euclidean three-space and is now resting in a Hilbert dimension."
        },
        {
          base: "My cerebral cortex experienced a catastrophic cache miss, causing all incoming academic stimuli to be dumped to /dev/null.",
          escalation: "/dev/null reached storage capacity; the kernel panicked and dumped my ability to spell my own middle name."
        },
        {
          base: "Statistically speaking, over an infinite timeline, monkey typewriters have already submitted an A+ paper on my behalf in another dimension.",
          escalation: "The monkeys in that dimension plagiarized Wikipedia; the interdimensional honor council has dispatched temporal bailiffs."
        },
        {
          base: "The synaptic clefts in my temporal lobe were experiencing localized electromagnetic interference from my excessive apathy.",
          escalation: "The apathy field reached superconductivity; any attempt to think about calculus now causes my fillings to hum in G-sharp."
        }
      ]
    },

    'missed-deadline': {
      corporate: [
        {
          base: "The deliverable is fully baked conceptually, but is currently marinating in an asynchronous feedback loop.",
          escalation: "The feedback loop formed a self-sustaining vortex that has sucked in two middle managers and an innocent Excel sheet."
        },
        {
          base: "We encountered an upstream dependency conflict where 'doing the work' collided with 'my urgent desire to stare out the window'.",
          escalation: "The window has now requested equity in the company, and legal is reviewing whether staring at pigeons constitutes billable hours."
        },
        {
          base: "I pushed the deck into a soft staging environment. By which I mean I have opened a blank Google Doc and titled it.",
          escalation: "Google Docs crashed under the weight of the title, and cloud support is refusing to restore an empty file on philosophical grounds."
        },
        {
          base: "I escalated this missed deadline to my personal board of directors as a calculated stress-test of organizational tolerance.",
          escalation: "The board voted 4-1 to fire me, but I vetoed the resolution citing lack of quorum in my own living room."
        }
      ],
      bollywood: [
        {
          base: "Deadlines are created by mere mortals, but our fate was written in the stars seven reincarnations ago! Who am I to rush the cosmos?",
          escalation: "The cosmos responded by striking the office Wi-Fi router with lightning; the astrologer says Mercury will stay retrograde until Diwali!"
        },
        {
          base: "You asked for the report at 5 PM? At 5 PM, the sky turned purple, a lonely sitar wept in the distance, and my heart shattered into dust!",
          escalation: "The dust of my heart blew into the air conditioning vents, causing the entire 4th floor to break into spontaneous, tragic weeping."
        },
        {
          base: "Take my job! Take my bonus! Take my dignity! But do not ask me why the PDF wasn't attached before sunset!",
          escalation: "The managing director accepted all three, then handed me a tambourine and sentenced me to wander the streets as a tragic wandering poet."
        },
        {
          base: "My evil cousin disguised himself as an IT admin and threw my hard drive into a holy bonfire while laughing maniacally.",
          escalation: "The smoke from the holy bonfire formed the words 'PROMOTION CANCELLED' across the Mumbai skyline."
        }
      ],
      unhinged: [
        {
          base: "I put the file on a flash drive, but a raccoon made prolonged direct eye contact with me on the porch and I surrendered it out of respect.",
          escalation: "The raccoon has plugged the drive into a stolen ThinkPad; he is now demanding 500 grams of walnuts to unlock the quarterly forecast."
        },
        {
          base: "Time isn't real on Thursdays. I thought we all signed a collective treaty about this during the equinox.",
          escalation: "I notified the Swiss Federal Council of our treaty breach; they are sending a team of neutral timekeepers to confiscate my wall clocks."
        },
        {
          base: "My laptop charger started humming in B-flat minor, which is the frequency of collective grief. I had to let it rest in a dark closet.",
          escalation: "The charger's grief attracted four stray vacuum cleaners from the building; they are holding a vigil in my hallway."
        },
        {
          base: "I printed out the spreadsheet, but my roommate's ferret used it to build a tiny, very efficient nest and I didn't want to be an eviction landlord.",
          escalation: "The ferret has incorporated the nest as a tenant union; any attempt to retrieve the spreadsheet violates local rent control ordinances."
        }
      ],
      scientific: [
        {
          base: "Relativistic time dilation dictates that while you experienced three business days, my reference frame was traveling near light speed where only 4 seconds elapsed.",
          escalation: "Accelerating back down to office velocity created a sonic boom that shattered the coffee machine and sent the intern back to 1994."
        },
        {
          base: "The deliverable crossed the event horizon of my cognitive black hole. Information cannot escape back into spacetime without Hawking radiation.",
          escalation: "Hawking radiation finally emitted three bytes: they decoded to the letters 'N', 'O', and 'P'. Spacetime remains uncooperative."
        },
        {
          base: "In 87% of parallel universes within the multiverse, this task was completed flawlessly ahead of schedule. You just inhabit the outlier branch.",
          escalation: "The version of me in Universe B has filed an inter-dimensional copyright infringement claim against this timeline for asking about the file."
        },
        {
          base: "A quantum tunneling event displaced the compiled binaries into empty vacuum space. Re-synthesizing the electrons violates conservation of mass.",
          escalation: "The vacuum space collapsed; the particles rematerialized inside the office microwave as a dense ball of molten plastic."
        }
      ]
    },

    'arrived-late': {
      corporate: [
        {
          base: "I was held hostage by an ad-hoc road infrastructure alignment challenge. Essentially, traffic failed to scale.",
          escalation: "Traffic scaled so poorly that Waze filed for bankruptcy right on my dashboard, and the bypass has been designated a nature preserve."
        },
        {
          base: "My commute underwent an unscheduled recalibration. I have now arrived and am fully prepared to add minimal value.",
          escalation: "The recalibration led to a complete audit of my physical presence; HR concluded my badge only grants access to the parking lot."
        },
        {
          base: "I didn't arrive late; I executed a tactical delay to avoid the low-efficiency socializing that occurs during the first 15 minutes.",
          escalation: "The low-efficiency socializing had already escalated into an unscheduled bagel war, and I was designated an unauthorized neutral party."
        },
        {
          base: "I had to pull over to take an urgent sync with myself regarding whether this journey was aligned with my core competencies.",
          escalation: "The sync concluded with a unanimous 1-0 vote to turn the steering wheel toward a drive-thru pancake house."
        }
      ],
      bollywood: [
        {
          base: "Every traffic light between Bandra and here turned blood-red, weeping crimson tears for the vows we broke in the monsoon rain!",
          escalation: "The traffic commissioner stepped out into the rain, pulled out a microphone, and dedicated a 20-minute ghazal to my ruined morning!"
        },
        {
          base: "A speeding black Ambassador splashed muddy water across my pristine white kurta. The shame! I had to walk to the Ganges to cleanse my soul!",
          escalation: "At the holy river, the holy priest looked at the mud stain, shook his head, and declared: 'Not even the holy waters can wash off this late arrival!'"
        },
        {
          base: "Maa held my wrist at the door and said: 'If you cross this threshold before the temple bells chime, you are no son of mine!' Would you defy Maa?!",
          escalation: "The temple bells rang backward! The priest fainted, and Maa has rewritten her will to leave the family ancestral home to the stray cow!"
        },
        {
          base: "A procession of 40 decorated white horses blocked the highway. The bride looked into my soul and sang a 12-minute sorrowful ballad.",
          escalation: "The bride's father mistook me for the groom's runaway brother and forced me to dance with a silver platter on my head for two hours."
        }
      ],
      unhinged: [
        {
          base: "A stray cat fell asleep on my lap at 8:15 AM and international maritime law strictly prohibits disturbing a resting feline.",
          escalation: "The feline woke up, filed a formal complaint with the Coast Guard, and has commandeered my car keys until dinner."
        },
        {
          base: "I got trapped in my own turtleneck sweater for forty-five minutes. Both arms went down one sleeve and I had to negotiate my way out with a hanger.",
          escalation: "The hanger bent; the sweater took control, and I was forced to navigate the lobby entirely by auditory echolocation."
        },
        {
          base: "I saw an escalator going down and felt a sudden spiritual obligation to see how far up I could sprint before security tackled me.",
          escalation: "Security joined the sprint; we are now legally co-owners of the escalator and cannot leave until the mall closes."
        },
        {
          base: "I walked out my front door and the vibes outside were suspiciously moist. I had to stand on the porch and reassess reality.",
          escalation: "The moisture condensed into a localized mist that followed me down the driveway, whispering bad investment tips."
        }
      ],
      scientific: [
        {
          base: "Brownian motion in the vehicular particle suspension reached critical viscosity. My velocity vector degraded toward absolute zero.",
          escalation: "Zero velocity induced a state of Bose-Einstein condensation across the entire highway; all cars now occupy the exact same physical state."
        },
        {
          base: "According to Heisenberg's Uncertainty Principle, had I arrived precisely on time, you wouldn't know where in the office I actually was.",
          escalation: "Now that my location in the breakroom is known with 100% precision, my arrival time has spread across the next fiscal quarter."
        },
        {
          base: "Circadian photoperiod misalignment delayed my endogenous melatonin clearance by 1.84 standard deviations.",
          escalation: "The standard deviations drifted so far that my pineal gland has declared it to be October 14th, 1987. I need a fax machine immediately."
        },
        {
          base: "Tectonic continental drift shifted my apartment 3.2 millimeters further away from this venue overnight, corrupting my kinetic transit calculation.",
          escalation: "A seismic micro-fault opened under my front tire; the city engineer has flagged my Honda Civic as an active geological site."
        }
      ]
    },

    'ignored-message': {
      corporate: [
        {
          base: "Your ping was routed into an internal backlog due to zero cross-departmental urgency. Let's circle back in never.",
          escalation: "The backlog formed an autonomous committee that voted to archive all communications received after 11:00 AM permanently."
        },
        {
          base: "I read the message, drafted a mental response in the shower, and closed the loop internally. In my reality, we already had this chat.",
          escalation: "In that reality, our follow-up chat went poorly and we are currently not on speaking terms until Q1."
        },
        {
          base: "I saw the notification banner and decided to let the problem marinate until it solved itself. Which it usually does.",
          escalation: "The problem marinated so long it gained sentience and replied to you on my behalf with a photo of a cabbage."
        },
        {
          base: "I placed my unread notifications under a Chapter 11 bankruptcy filing. All unread pings are being restructured into total silence.",
          escalation: "The court-appointed trustee liquidated my thumbs; I am legally barred from sending consonants until restructuring concludes."
        }
      ],
      bollywood: [
        {
          base: "I saw the blue ticks, Rahul. And each blue tick felt like a dagger dipped in snake venom, plunged into our childhood innocence!",
          escalation: "The venom spread into the phone screen, causing the WhatsApp icon to burst into flame and the village elders to gather on my lawn!"
        },
        {
          base: "How could my trembling fingers type an SMS when the monsoon storm was washing away the courtyard of my ancestral home?!",
          escalation: "The courtyard washed away, taking the cellular tower with it; my last message to you is floating down the Ganges in a copper pot!"
        },
        {
          base: "My phone vibrated, but the sound was drowned out by the thunderous claps of thunder and my father's disappointed silence!",
          escalation: "Father's silence was so intense that the wallpaper curled, the milk curdled, and the dog joined an ashram in Rishikesh!"
        },
        {
          base: "I hurled my handset into the sacred river because your casual 'u up?' disgraced the solemn memories of our family lineage.",
          escalation: "A sacred carp swallowed the handset and is now posting cryptic status updates on my LinkedIn profile."
        }
      ],
      unhinged: [
        {
          base: "I looked at your notification, whispered 'damn that's crazy', placed my phone face down in a bowl of dry cheerios, and went to sleep.",
          escalation: "The cheerios formed an ancient hex circle; my phone now only rings when a neighbor burns their toast."
        },
        {
          base: "A crow tapped on my window right as your text arrived. In bird culture, replying within 72 hours is interpreted as an act of war.",
          escalation: "I accidentally blinked in the crow's direction; war has been declared, and they have placed a blockade on my mail slot."
        },
        {
          base: "My phone battery was at 14% and I don't negotiate under duress from lithium-ion cells.",
          escalation: "The battery dropped to 2%; the device entered defensive hibernation and superglued its own charging port shut."
        },
        {
          base: "I read it, but then I spent three hours researching whether sea otters experience existential dread and by then the moment was lost.",
          escalation: "The otters DO experience dread; I am now in an encrypted Discord server coordinating therapeutic kelp distributions."
        }
      ],
      scientific: [
        {
          base: "The electromagnetic radiation from your push notification interfered with the delicate synaptic resting potential of my cerebral cortex.",
          escalation: "The interference caused a localized Faraday cascade; my smartphone now thinks it is an induction stovetop and fried my SIM card."
        },
        {
          base: "Information entropy theorem demonstrates that responding to that text would have contributed zero net bits to the cosmic thermodynamic order.",
          escalation: "Thermodynamic order penalized my inaction: the ambient temperature in my bedroom dropped to 4 Kelvin. My blankets are superconducting."
        },
        {
          base: "I entered a state of cryogenic digital non-responsiveness to preserve mitochondrial ATP in my thumbs.",
          escalation: "The cryogenic freeze reached my keyboard driver; the letter 'E' has crystallized and shattered into microscopic ice needles."
        },
        {
          base: "Your ping created a destructive interference pattern in the local Wi-Fi wave packet. Technically, your message never reached my physical plane.",
          escalation: "The wave packet bounced off a mirror into deep space; SETI has flagged your ping as a potential extraterrestrial distress signal."
        }
      ]
    },

    'cancelled-plans': {
      corporate: [
        {
          base: "I must decline tonight's social engagement due to an unexpected lack of personal bandwidth and high emotional burn rate.",
          escalation: "Burn rate reached 100%; I have dissolved my social entity and am currently undergoing Chapter 7 liquidation into my sweatpants."
        },
        {
          base: "After a Q3 audit of my current social capital, I have decided to divest from tonight's dinner and reinvest in lying horizontally.",
          escalation: "The divestment triggered a social market crash; my friends group has imposed emergency tariffs on my presence through November."
        },
        {
          base: "Due to unforeseen domestic friction points, I am pivoting from 'going to the bar' to 'staring blankly at Netflix preview thumbnails'.",
          escalation: "The preview thumbnails triggered an endless buffering vortex; I have been staring at the trailer for a German crime drama for seven hours."
        },
        {
          base: "Our planned drinks have been subject to a hostile takeover by my duvet and a bowl of microwave macaroni.",
          escalation: "The macaroni has acquired majority voting rights on the duvet board; all outdoor excursions have been banned by executive order."
        }
      ],
      bollywood: [
        {
          base: "We were meant to meet at 8, but fate... fate is a merciless director who rewrote the script at 7:45!",
          escalation: "The director demanded a plot twist: you are now scheduled to marry my corrupt cousin on a stormy clifftop at 8:15!"
        },
        {
          base: "If I leave my room tonight, the thunder will reveal the terrible secret my father took to his grave. Please, do not force my hand!",
          escalation: "The roof caved in! The ghost of my father pointed at my car keys and wailed: 'Stay inside or the family curse will awaken!'"
        },
        {
          base: "Go without me! Dance, drink, laugh with the others! Let the world forget that I ever walked beneath the moon!",
          escalation: "I stood by the window watching your Uber drive away while singing a six-verse lament that caused three streetlamps to explode!"
        },
        {
          base: "The astrologer looked at my horoscope, screamed, tossed his coconuts into the river, and commanded that I stay within four walls!",
          escalation: "The coconuts floated back upstream against the current and began knocking on my front door! Even the river refuses my departure!"
        }
      ],
      unhinged: [
        {
          base: "I put on jeans, realized they felt like coarse sandpaper against my soul, took them off, and got back into bed with my shoes on.",
          escalation: "The jeans formed a sentient denim pact with my laundry basket; they have barricaded the bedroom door from the outside."
        },
        {
          base: "My dog gave me a side-eye that told me if I left the apartment tonight, he was going to sell my television on Craigslist.",
          escalation: "He already posted the listing; three men with a pickup truck are outside demanding the remote control and I don't speak labradoodle."
        },
        {
          base: "I opened my weather app and saw a picture of a cloud that looked uncomfortably like my high school gym teacher. I'm staying inside.",
          escalation: "The cloud began blowing a whistle; it has assigned me 50 laps around my living room rug before I can touch the doorknob."
        },
        {
          base: "I accidentally superglued my thumb to an empty peanut butter jar and the fire department said it's not technically an emergency.",
          escalation: "The jar rolled under the radiator; I am now legally affixed to the building's heating infrastructure until winter ends."
        }
      ],
      scientific: [
        {
          base: "My social battery has reached absolute zero (-273.15°C). All thermodynamic interactions have ceased.",
          escalation: "Attempting to extract heat from my social core caused an endothermic reaction that turned my living room air into liquid nitrogen."
        },
        {
          base: "Newton's first law: an object at rest under a weighted blanket will remain at rest unless acted upon by an external pizza.",
          escalation: "The pizza arrived, but it too succumbed to gravitational attraction and fused into the blanket fibers at a molecular level."
        },
        {
          base: "Gravitational attraction between my lumbar spine and the mattress has increased by a factor of 10^4 due to local spacetime curvature.",
          escalation: "Spacetime curvature reached critical density; my alarm clock is experiencing extreme gravitational redshift and now ticks once every 40 minutes."
        },
        {
          base: "A localized perturbation in the dark matter halo surrounding my sofa created an inescapable gravity well. Escape velocity exceeds Mach 4.",
          escalation: "I attempted to stand up; the g-forces liquefied my balance center and threw my slipper into geostationary orbit."
        }
      ]
    },

    'forgot-something': {
      corporate: [
        {
          base: "That deliverable was omitted from the operational checklist due to a strategic realignment of my memory priorities.",
          escalation: "The realignment purged the entire checklist from existence; compliance has designated that day's operations as an undocumented myth."
        },
        {
          base: "We encountered a cache invalidation event in my mental RAM. The item has been marked as a low-priority backlog ticket.",
          escalation: "The backlog ticket was assigned to an unpaid intern who resigned three weeks ago; the ticket is now in limbo purgatory."
        },
        {
          base: "I didn't forget; I proactively de-scoped that item to deliver on our core competency of doing nothing.",
          escalation: "Doing nothing was so successful that leadership has eliminated the remaining milestones and rewarded me with additional nothing."
        },
        {
          base: "The internal audit committee investigated and concluded that the item never officially existed in our agreed deliverables.",
          escalation: "The committee has now subpoenaed the concept of 'remembering' and classified it as an unauthorized overhead expense."
        }
      ],
      bollywood: [
        {
          base: "You remember the keys, Rahul, but you forgot the seven sacred vows we took around the holy fire! Which one is the greater crime?!",
          escalation: "The sacred fire reignited on the kitchen stove! The priest appeared in a flash of thunder and annulled the purchase of bread!"
        },
        {
          base: "My mind was clouded by the weeping portrait of my late grandfather in the hallway. How could I remember groceries in such agony?!",
          escalation: "Grandfather's portrait fell off the nail, split open, and revealed an old yellowed letter that disinherited anyone who buys skim milk!"
        },
        {
          base: "The wind blew away the slip of paper, just like the sweet promises you whispered on the rooftop of our ancestral home!",
          escalation: "The slip of paper landed in the hands of the evil landlord, who has used my grocery list as leverage to evict the entire village!"
        },
        {
          base: "As I reached for it, my evil stepmother appeared in a flash of lightning, knocked it into the gorge, and laughed into the storm!",
          escalation: "The gorge echoed with her laughter for three continuous days; even the mountain goats are now suffering from clinical depression!"
        }
      ],
      unhinged: [
        {
          base: "My brain has four tabs open: two are playing loud accordion music, one is frozen, and the fourth is a looping gif of a possum eating grapes.",
          escalation: "The accordion music synced with my heart rate; I can now only communicate through rhythmic squeezebox wheezes."
        },
        {
          base: "I knew I forgot something when I walked into the kitchen and an inner voice whispered 'cornbread' with zero context.",
          escalation: "I bought 40 boxes of cornbread mix to appease the voice; it has now upgraded its demands to a bronze bust of Dolly Parton."
        },
        {
          base: "I put it in a safe place so I wouldn't lose it, which is the international guarantee that it has dissolved into the fourth dimension.",
          escalation: "The safe place turned out to be inside the ventilation shaft of an abandoned bowling alley three towns over."
        },
        {
          base: "I buried it in the backyard because I thought squirrels were monitoring my inventory. I no longer know which oak tree it was.",
          escalation: "The squirrels held a summit; they have pawned the item at an antique dealer to fund their bird feeder heist operations."
        }
      ],
      scientific: [
        {
          base: "The memory trace underwent spontaneous radioactive decay with an astonishingly brief half-life of 3.4 seconds.",
          escalation: "The daughter isotopes emitted ionizing radiation that erased the memory of my PIN number and childhood phone number as well."
        },
        {
          base: "Synaptic pruning algorithms executed an aggressive garbage collection routine, purging that specific data block.",
          escalation: "The garbage collector identified my sense of responsibility as an unreferenced pointer and deallocated it entirely."
        },
        {
          base: "According to information theory, the signal-to-noise ratio in my neural pathways dropped below the Shannon limit.",
          escalation: "The noise floor overtook reality; whenever anyone speaks to me, I hear only the cosmic microwave background radiation."
        },
        {
          base: "A cosmic ray penetrated my skull and flipped a crucial bit in my hippocampus, replacing the memory of your errand with the Macarena.",
          escalation: "The bit flip cascaded into the motor cortex; every time I attempt to apologize, my arms autonomously perform the Macarena chorus."
        }
      ]
    }
  };

  // --- Dynamic Interpolators for Custom Situations with Direct Escalations ---
  const CUSTOM_TEMPLATES = {
    corporate: [
      {
        base: (s) => `In regards to "${s}", our strategic committee conducted an urgent audit and determined that owning up to this does not align with our quarterly deliverables.`,
        escalation: (s) => `The strategic committee reconvened and concluded that "${s}" has created an existential liability requiring the immediate shredding of all relevant minutes.`
      },
      {
        base: (s) => `We are currently treating "${s}" as an unexpected learning pivot rather than an unmitigated operational catastrophe.`,
        escalation: (s) => `The learning pivot failed so spectacularly that external consultants have been retained to re-brand "${s}" as intentional sabotage.`
      },
      {
        base: (s) => `Per my previous memo, my bandwidth for "${s}" was de-prioritized to protect high-impact stakeholder synergy.`,
        escalation: (s) => `Stakeholders discovered the memo and have responded by assigning "${s}" directly to a holographic task force with no budget.`
      },
      {
        base: (s) => `I have taken the feedback on "${s}" offline and will circle back once we establish a liability-neutral narrative.`,
        escalation: (s) => `The offline narrative collapsed in arbitration; legal is now denying that "${s}" occurred in this fiscal year or on this planet.`
      }
    ],
    bollywood: [
      {
        base: (s) => `You speak of "${s}", Rahul?! While the thunder roars and the tears of three generations wash away our honor?!`,
        escalation: (s) => `The tears of three generations were not enough! Maa has collapsed onto the marble floor and the family priest has proclaimed a curse upon "${s}"!`
      },
      {
        base: (s) => `Maa clutched her heart and gasped when I mentioned "${s}"! She made me swear on the family deity to never speak of it again!`,
        escalation: (s) => `The family deity's statue shed a single tear of fire! The ancestral chandelier crashed into the courtyard in direct response to "${s}"!`
      },
      {
        base: (s) => `Let the whole world blame me for "${s}"! My tears will drown their accusations like monsoon floods over Mumbai!`,
        escalation: (s) => `The floods over Mumbai have reached the second floor! Even the stray peacocks on the roof are singing a sorrowful ballad about "${s}"!`
      },
      {
        base: (s) => `How can you ask me about "${s}" when the sacred temple bells are tolling for our doomed romance?!`,
        escalation: (s) => `The temple bell fell from the tower! Rahul’s father has officially disowned the entire postal code because of "${s}"!`
      }
    ],
    unhinged: [
      {
        base: (s) => `Look, regarding "${s}", a guy in a trench coat behind the Arby's told me that acknowledging it would trigger the Mayan apocalypse.`,
        escalation: (s) => `The Arby's guy was right. A crack has opened in the parking lot and two raccoons in matching hazmat suits are investigating "${s}".`
      },
      {
        base: (s) => `I was completely ready to deal with "${s}", but a possum stole my left shoe and demanded ransom via Venmo.`,
        escalation: (s) => `I paid the possum's ransom, but he invested it in crypto and bought the apartment complex; he is now evicting me over "${s}".`
      },
      {
        base: (s) => `If anyone asks about "${s}", tell them I was abducted by hyper-intelligent crows who needed advice on shiny foil.`,
        escalation: (s) => `The crows elected me their ambassador; if anyone questions "${s}" again, their air force is authorized to pelt the driveway with bottle caps.`
      },
      {
        base: (s) => `I tried to resolve "${s}", but my toaster started chanting in Latin so I threw a heavy blanket over it and fled the county.`,
        escalation: (s) => `The toaster followed me across state lines via rideshare; it has now entered a plea agreement regarding "${s}" with the county sheriff.`
      }
    ],
    scientific: [
      {
        base: (s) => `The probability of me successfully executing "${s}" was determined to be asymptotically zero due to quantum decoherence.`,
        escalation: (s) => `Decoherence spread to the macroscale; attempting to resolve "${s}" has permanently entangled my schedule with a parallel dimension where chaos reigns supreme.`
      },
      {
        base: (s) => `Thermodynamic analysis demonstrates that "${s}" would have induced an unsustainable spike in metabolic entropy.`,
        escalation: (s) => `The metabolic entropy spike triggered a localized phase transition, turning my immediate personal space into a Bose-Einstein condensate.`
      },
      {
        base: (s) => `According to the Many-Worlds interpretation, in the vast majority of universes, "${s}" was handled brilliantly. You're just in the wrong branch.`,
        escalation: (s) => `The versions of me in those other universes have initiated a class-action lawsuit against this timeline for defamation regarding "${s}".`
      },
      {
        base: (s) => `Observable data confirms that "${s}" collapsed into a localized cognitive singularity from which no progress could escape.`,
        escalation: (s) => `The cognitive singularity generated gravitational waves that warped my calendar; "${s}" is now scheduled for the year 3042.`
      }
    ]
  };

  // --- Rotating Status Messages ---
  const SYSTEM_STATUS_MESSAGES = [
    "SYSTEM STATUS: MORALLY QUESTIONABLE",
    "DENIAL MODE ACTIVE",
    "LEGAL TEAM: NOT FOUND",
    "ETHICS MODULE: TEMPORARILY OFFLINE",
    "EXCUSE QUALITY: UNDER INVESTIGATION",
    "PLAUSIBLE DENIABILITY: ENGAGED",
    "LIABILITY SHIELD: UNSTABLE"
  ];

  // --- Copy Feedback Messages (No emojis, natural & punchy) ---
  const COPY_FEEDBACK_MESSAGES = [
    "COPIED. DENIAL IS NOW OFFICIALLY IN WRITING.",
    "EXCUSE ACQUIRED. CONSEQUENCES PENDING.",
    "YOUR ALIBI IS READY FOR DISTRIBUTION.",
    "COPIED. PROCEED WITH PLAUSIBLE DENIABILITY.",
    "ALIBI SECURED. MAINTAIN A STRAIGHT FACE."
  ];

  // --- Credibility Score Generator (Score-Dependent Fictional Verdicts) ---
  const CREDIBILITY_VERDICTS = [
    { min: 0, max: 10, text: "HR has already drafted the severance package." },
    { min: 11, max: 30, text: "Technically a statement. Legally a concern." },
    { min: 31, max: 50, text: "Someone might believe this after two coffees." },
    { min: 51, max: 70, text: "Surprisingly defensible under questionable circumstances." },
    { min: 71, max: 90, text: "Your lawyer wants to hear more." },
    { min: 91, max: 100, text: "Suspiciously believable. We recommend saying nothing further." }
  ];

  function getCredibilityVerdict(score) {
    const s = Math.round(Number(score));
    if (s <= 10) return "HR has already drafted the severance package.";
    if (s <= 30) return "Technically a statement. Legally a concern.";
    if (s <= 50) return "Someone might believe this after two coffees.";
    if (s <= 70) return "Surprisingly defensible under questionable circumstances.";
    if (s <= 90) return "Your lawyer wants to hear more.";
    return "Suspiciously believable. We recommend saying nothing further.";
  }

  // --- Generate Button States ---
  const BUTTON_LABELS = {
    INITIAL: "GENERATE ALIBI",
    ANOTHER: "TRY ANOTHER EXCUSE",
    CONVINCED: "STILL NOT CONVINCED?",
    WORSE: "YOU ASKED FOR THIS",
    SURPRISE: "BLAME THE ALGORITHM"
  };

  const SEVERAL_GENERATIONS_THRESHOLD = 5;

  // --- State ---
  const state = {
    currentSituation: 'skipped-gym',
    currentPersonality: 'corporate',
    customText: '',
    lastExcuseIndex: -1,
    currentExcuseObject: null, // Holds { base, escalation } or template reference
    currentExcuseText: '',
    isEscalated: false,
    hasGeneratedOnce: false,
    generationCount: 0,
    statusIndex: 0
  };

  // --- DOM Elements ---
  const brandStatusEl = document.getElementById('brand-status');
  const situationOptions = document.getElementById('situation-options');
  const customWrap = document.getElementById('custom-wrap');
  const customInput = document.getElementById('custom-situation-input');
  const charCounter = document.getElementById('char-counter');

  const personalityOptions = document.getElementById('personality-options');
  const btnGenerate = document.getElementById('btn-generate');
  const btnRandom = document.getElementById('btn-random');
  const btnCopy = document.getElementById('btn-copy');
  const btnShare = document.getElementById('btn-share');
  const btnWorse = document.getElementById('btn-worse');

  const resultPersonaBadge = document.getElementById('result-persona-badge');
  const resultSituationBadge = document.getElementById('result-situation-badge');
  const credibilityScoreEl = document.getElementById('credibility-score');
  const credibilityDotEl = document.getElementById('credibility-dot');
  const credibilityBarEl = document.getElementById('credibility-bar');
  const credibilityVerdictEl = document.getElementById('credibility-verdict');
  const excuseTextEl = document.getElementById('excuse-text');
  const copyLabel = document.getElementById('copy-label');
  const toast = document.getElementById('toast');
  const accountabilityTrigger = document.getElementById('accountability-trigger');
  const accountabilityTooltip = document.getElementById('accountability-tooltip');
  const footerInteractiveWrap = accountabilityTrigger ? accountabilityTrigger.parentElement : null;

  // --- Helper: Toast Notification ---
  let toastTimer = null;
  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toast.setAttribute('aria-hidden', 'false');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      toast.setAttribute('aria-hidden', 'true');
    }, 2500);
  }

  // --- Helper: Random Range ---
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // --- Helper: Pick Non-Repeating Index ---
  function getNonRepeatingIndex(length, lastIndex) {
    if (length <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * length);
    } while (newIndex === lastIndex);
    return newIndex;
  }

  // --- Helper: Rotate System Status ---
  function cycleSystemStatus() {
    if (!brandStatusEl) return;
    state.statusIndex = (state.statusIndex + 1) % SYSTEM_STATUS_MESSAGES.length;
    brandStatusEl.textContent = SYSTEM_STATUS_MESSAGES[state.statusIndex];
  }

  // --- Update Situation Selection UI ---
  function selectSituation(situationKey) {
    state.currentSituation = situationKey;
    const chips = situationOptions.querySelectorAll('.chip');
    chips.forEach(chip => {
      const match = chip.dataset.situation === situationKey;
      chip.classList.toggle('active', match);
      chip.setAttribute('aria-checked', match ? 'true' : 'false');
    });

    if (situationKey === 'custom') {
      customWrap.hidden = false;
      customInput.focus();
    } else {
      customWrap.hidden = true;
    }
  }

  // --- Update Personality Selection UI ---
  function selectPersonality(personaKey) {
    state.currentPersonality = personaKey;
    const cards = personalityOptions.querySelectorAll('.persona-card');
    cards.forEach(card => {
      const match = card.dataset.personality === personaKey;
      card.classList.toggle('active', match);
      card.setAttribute('aria-checked', match ? 'true' : 'false');
    });
  }

  // --- Core Generation Logic ---
  function generateExcuse(options = {}) {
    const isWorse = options.isWorse || false;
    const isInitial = options.isInitial || false;
    const isSurprise = options.isSurprise || false;
    const situation = state.currentSituation;
    const personality = state.currentPersonality;

    let excuse = "";
    let score = 50;

    try {
      if (isWorse) {
        // "Make It Worse" builds on the EXISTING excuse premise!
        state.isEscalated = true;

        if (situation === 'custom') {
          const rawText = customInput.value.trim();
          const sanitized = rawText ? rawText.slice(0, 100) : "my questionable life choices";
          const templates = CUSTOM_TEMPLATES[personality] || CUSTOM_TEMPLATES.corporate;
          
          if (state.currentExcuseObject && typeof state.currentExcuseObject.escalation === 'function') {
            excuse = state.currentExcuseObject.escalation(sanitized);
          } else {
            const idx = state.lastExcuseIndex >= 0 ? state.lastExcuseIndex : 0;
            const t = templates[idx % templates.length];
            excuse = t.escalation(sanitized);
          }
        } else {
          // Standard situation: use the dedicated escalation for the current excuse premise
          if (state.currentExcuseObject && state.currentExcuseObject.escalation) {
            excuse = state.currentExcuseObject.escalation;
          } else {
            // Fallback if no prior object is set
            const personaList = (EXCUSE_DB[situation] && EXCUSE_DB[situation][personality]) || EXCUSE_DB['skipped-gym']['corporate'];
            const idx = state.lastExcuseIndex >= 0 ? state.lastExcuseIndex : 0;
            const item = personaList[idx % personaList.length];
            excuse = item.escalation || item.base;
          }
        }

        // Escalated alibis have drastically lower credibility
        score = getRandomInt(1, 14);

      } else {
        // Normal generation: pick a new base excuse
        state.isEscalated = false;

        if (situation === 'custom') {
          const rawText = customInput.value.trim();
          const sanitized = rawText ? rawText.slice(0, 100) : "my questionable life choices";
          const templates = CUSTOM_TEMPLATES[personality] || CUSTOM_TEMPLATES.corporate;
          const index = getNonRepeatingIndex(templates.length, state.lastExcuseIndex);
          state.lastExcuseIndex = index;
          state.currentExcuseObject = templates[index];
          excuse = templates[index].base(sanitized);

          if (personality === 'corporate') score = getRandomInt(65, 94);
          else if (personality === 'scientific') score = getRandomInt(45, 80);
          else if (personality === 'bollywood') score = getRandomInt(10, 40);
          else score = getRandomInt(5, 30);

        } else {
          const personaDict = EXCUSE_DB[situation] || EXCUSE_DB['skipped-gym'];
          const excuseList = personaDict[personality] || personaDict['corporate'];
          const index = getNonRepeatingIndex(excuseList.length, state.lastExcuseIndex);
          state.lastExcuseIndex = index;
          state.currentExcuseObject = excuseList[index];
          excuse = excuseList[index].base;

          if (personality === 'corporate') score = getRandomInt(60, 92);
          else if (personality === 'scientific') score = getRandomInt(40, 75);
          else if (personality === 'bollywood') score = getRandomInt(8, 35);
          else score = getRandomInt(2, 28);
        }
      }

      if (!excuse || typeof excuse !== 'string' || excuse.trim().length === 0) {
        return false;
      }

      state.currentExcuseText = excuse;

      // Render result safely
      renderExcuseResult(excuse, score, state.isEscalated);

      // Handle generation counter and button label updates
      if (!isInitial) {
        state.generationCount++;
        state.hasGeneratedOnce = true;

        if (isWorse) {
          updateGenerateButtonLabel(BUTTON_LABELS.WORSE);
        } else if (isSurprise) {
          updateGenerateButtonLabel(BUTTON_LABELS.SURPRISE);
        } else {
          if (state.generationCount >= SEVERAL_GENERATIONS_THRESHOLD) {
            updateGenerateButtonLabel(BUTTON_LABELS.CONVINCED);
          } else {
            updateGenerateButtonLabel(BUTTON_LABELS.ANOTHER);
          }
        }

        // Subtly cycle system status on new generations
        cycleSystemStatus();
      }

      return true;
    } catch (err) {
      console.error("Excuse generation failed:", err);
      return false;
    }
  }

  function updateGenerateButtonLabel(text) {
    const btnTextEl = btnGenerate.querySelector('.btn-text');
    if (btnTextEl) {
      btnTextEl.textContent = text;
    }
  }

  function renderExcuseResult(excuse, score, isWorse) {
    const personaNames = {
      corporate: "Corporate Alibi",
      bollywood: "Bollywood Tragedy",
      unhinged: "Unhinged Panic",
      scientific: "Scientific Fact"
    };

    const situationNames = {
      'skipped-gym': "Skipped Gym",
      'didnt-study': "Didn't Study",
      'missed-deadline': "Missed Deadline",
      'arrived-late': "Arrived Late",
      'ignored-message': "Ignored Message",
      'cancelled-plans': "Cancelled Plans",
      'forgot-something': "Forgot Something",
      'custom': "Custom Calamity"
    };

    resultPersonaBadge.textContent = isWorse 
      ? `ESCALATED (${personaNames[state.currentPersonality].toUpperCase()})`
      : personaNames[state.currentPersonality];

    resultSituationBadge.textContent = situationNames[state.currentSituation] || "Misfortune";

    // Text update with animation class
    excuseTextEl.textContent = `"${excuse}"`;
    excuseTextEl.classList.remove('updating');
    void excuseTextEl.offsetWidth; // Trigger reflow
    excuseTextEl.classList.add('updating');

    // Credibility Score & Bar & Dot
    credibilityScoreEl.textContent = `${score}%`;
    credibilityBarEl.style.width = `${score}%`;
    if (credibilityDotEl) {
      credibilityDotEl.style.background = `conic-gradient(var(--accent-secondary) ${score}%, rgba(255, 51, 102, 0.2) 0)`;
    }

    if (score < 25) {
      credibilityBarEl.style.backgroundColor = 'var(--accent-secondary)';
      credibilityScoreEl.style.color = 'var(--accent-secondary)';
    } else if (score < 60) {
      credibilityBarEl.style.backgroundColor = 'var(--accent-cyan)';
      credibilityScoreEl.style.color = 'var(--accent-cyan)';
    } else {
      credibilityBarEl.style.backgroundColor = 'var(--accent-primary)';
      credibilityScoreEl.style.color = 'var(--accent-primary)';
    }

    credibilityVerdictEl.textContent = getCredibilityVerdict(score);

    resetCopyButton();
  }

  // --- Clipboard Copy Helper ---
  async function performClipboardCopy(text) {
    let success = false;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch (err) {
        // Fall through to fallback
      }
    }

    if (!success) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '0';
        document.body.appendChild(textarea);
        textarea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch (err) {
        success = false;
      }
    }

    return success;
  }

  // --- Copy Excuse to Clipboard ---
  async function copyExcuseToClipboard() {
    const textToCopy = excuseTextEl.textContent.trim().replace(/^"|"$/g, '');
    if (!textToCopy) return;

    const success = await performClipboardCopy(textToCopy);

    if (success) {
      btnCopy.classList.add('copied');
      copyLabel.textContent = "COPIED";

      const randomMsg = COPY_FEEDBACK_MESSAGES[Math.floor(Math.random() * COPY_FEEDBACK_MESSAGES.length)];
      showToast(randomMsg);

      setTimeout(resetCopyButton, 2200);
    } else {
      showToast("CLIPBOARD ACCESS FAILED. PLEASE COPY MANUALLY.");
    }
  }

  function resetCopyButton() {
    btnCopy.classList.remove('copied');
    copyLabel.textContent = "Copy Excuse";
  }

  // --- Share Excuse ---
  async function shareExcuse() {
    const excuseText = excuseTextEl.textContent.trim().replace(/^"|"$/g, '');
    if (!excuseText) return;

    const sharePayload = `"${excuseText}" — via Excuse Generator 3000`;

    // Try Web Share API if supported
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Excuse Generator 3000',
          text: sharePayload
        });
        showToast("ALIBI TRANSMITTED SUCCESSFULLY.");
        return;
      } catch (err) {
        if (err.name === 'AbortError') {
          // User deliberately cancelled share sheet; do not display error
          return;
        }
        // If share failed, fallback to clipboard below
      }
    }

    // Fallback: Copy excuse with reference to Excuse Generator 3000
    const copied = await performClipboardCopy(sharePayload);
    if (copied) {
      showToast("COPIED ALIBI WITH SOURCE TO CLIPBOARD FOR SHARING.");
    } else {
      showToast("UNABLE TO SHARE OR COPY ALIBI.");
    }
  }

  // --- Surprise Me (Randomize both situation and personality) ---
  function surpriseMe() {
    const situations = Object.keys(EXCUSE_DB);
    const personalities = ['corporate', 'bollywood', 'unhinged', 'scientific'];

    const randomSit = situations[Math.floor(Math.random() * situations.length)];
    const randomPer = personalities[Math.floor(Math.random() * personalities.length)];

    selectSituation(randomSit);
    selectPersonality(randomPer);

    generateExcuse({ isWorse: false, isSurprise: true });
    showToast("RANDOM CRISIS AND COUNSEL ENGAGED.");
  }

  // --- Footer Tooltip Interaction ---
  function showTooltip() {
    if (!accountabilityTooltip || !accountabilityTrigger) return;
    accountabilityTooltip.hidden = false;
    accountabilityTrigger.setAttribute('aria-expanded', 'true');
    adjustTooltipPosition();
  }

  function hideTooltip() {
    if (!accountabilityTooltip || !accountabilityTrigger) return;
    if (accountabilityTooltip.hidden) return;
    accountabilityTooltip.hidden = true;
    accountabilityTooltip.style.left = '';
    accountabilityTooltip.style.transform = '';
    accountabilityTrigger.setAttribute('aria-expanded', 'false');
  }

  function toggleTooltip() {
    if (!accountabilityTooltip) return;
    if (accountabilityTooltip.hidden) {
      showTooltip();
    } else {
      hideTooltip();
    }
  }

  function adjustTooltipPosition() {
    if (!accountabilityTooltip || accountabilityTooltip.hidden) return;
    accountabilityTooltip.style.left = '50%';
    accountabilityTooltip.style.transform = 'translateX(-50%)';

    const rect = accountabilityTooltip.getBoundingClientRect();
    const margin = 10;
    const viewportWidth = window.innerWidth;

    if (rect.left < margin) {
      const shift = margin - rect.left;
      accountabilityTooltip.style.transform = `translateX(calc(-50% + ${shift}px))`;
    } else if (rect.right > viewportWidth - margin) {
      const shift = rect.right - (viewportWidth - margin);
      accountabilityTooltip.style.transform = `translateX(calc(-50% - ${shift}px))`;
    }
  }

  if (accountabilityTrigger) {
    accountabilityTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTooltip();
    });

    accountabilityTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        toggleTooltip();
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (footerInteractiveWrap && !footerInteractiveWrap.contains(e.target)) {
      hideTooltip();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && accountabilityTooltip && !accountabilityTooltip.hidden) {
      hideTooltip();
      if (accountabilityTrigger) {
        accountabilityTrigger.focus();
      }
    }
  });

  window.addEventListener('resize', () => {
    if (accountabilityTooltip && !accountabilityTooltip.hidden) {
      adjustTooltipPosition();
    }
  });

  // --- Event Listeners ---

  situationOptions.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    const situationKey = chip.dataset.situation;
    if (situationKey) {
      selectSituation(situationKey);
    }
  });

  personalityOptions.addEventListener('click', (e) => {
    const card = e.target.closest('.persona-card');
    if (!card) return;
    const personaKey = card.dataset.personality;
    if (personaKey) {
      selectPersonality(personaKey);
    }
  });

  customInput.addEventListener('input', (e) => {
    const len = e.target.value.length;
    charCounter.textContent = `${len}/100`;
  });

  customInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      generateExcuse({ isWorse: false });
    }
  });

  btnGenerate.addEventListener('click', () => generateExcuse({ isWorse: false }));
  btnRandom.addEventListener('click', surpriseMe);
  btnCopy.addEventListener('click', copyExcuseToClipboard);
  if (btnShare) {
    btnShare.addEventListener('click', shareExcuse);
  }
  btnWorse.addEventListener('click', () => generateExcuse({ isWorse: true }));

  // Global Keyboard shortcuts
  window.addEventListener('keydown', (e) => {
    if (document.activeElement === customInput) {
      return;
    }

    if ((e.code === 'Space' || e.key === 'Enter') && document.activeElement.tagName !== 'BUTTON') {
      e.preventDefault();
      generateExcuse({ isWorse: false });
    }
  });

  // Initial Run
  selectSituation('skipped-gym');
  selectPersonality('corporate');
  generateExcuse({ isWorse: false, isInitial: true });

})();
