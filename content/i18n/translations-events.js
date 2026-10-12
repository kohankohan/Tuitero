/**
 * Tuitero v19 — Localización de Eventos y Dilemas de Arquetipo
 * Soporte integral para ES (original), EN y JA
 */

const EVENT_TRANSLATIONS = {
  "en": {
    "crypto_halving": {
      "titulo": "The Halving Spectacle",
      "desc": "The most anticipated event in crypto is unfolding live. Your community is glued to the charts, waiting on your prediction.",
      "opciones": [
        {
          "texto": "Predict a steady rise without throwing out wild numbers.",
          "tweet": "Halving confirmed. Historically, accumulation follows. No wild price targets, but data doesn't lie. Keep your eyes peeled.",
          "resultado": "Moderate growth. You stay credible regardless of price swings."
        },
        {
          "texto": "Post a detailed historical cycle analysis calling for caution.",
          "tweet": "Deep dive into past halving cycles: 2016 vs 2020 patterns. Not financial advice, just context. DYOR before buying. 🧵👇",
          "resultado": "Respected industry voices quote your thread; your authority soars."
        },
        {
          "texto": "Claim Bitcoin hits 500k this month and drop a 50x leverage affiliate link.",
          "tweet": "Moon mission INEVITABLE. $500k by end of month. If you aren't positioned, you missed out. 50x leverage link in bio 🚀🚀",
          "resultado": "If price dips, the timeline brands you a predatory scammer."
        }
      ]
    },
    "crypto_startup": {
      "titulo": "Seeking an Advisor",
      "desc": "A new Web3 startup offers you an official advisory role with token allocation and promotion duties.",
      "opciones": [
        {
          "texto": "Accept but state clearly that it is purely an ad deal.",
          "tweet": "Heads up: this is sponsored, not investment advice. Paid to amplify, not manage your bags. With that said, welcome aboard 🤝",
          "resultado": "You pocket income without fully selling out, though purists judge you."
        },
        {
          "texto": "Decline after auditing the contract and spotting red flags.",
          "tweet": "Not everything has a price tag. Integrity and respecting followers come before easy cash.",
          "resultado": "You share your technical doubts. Followers praise you for saving their funds."
        },
        {
          "texto": "Shill the project as a revolutionary gem without disclosing tokens.",
          "tweet": "Found an undiscovered 100x gem with world-class tech. Insiders are quietly loading up before the mainnet launch.",
          "resultado": "The team dumps tokens. You are dragged across the feed."
        }
      ]
    },
    "crypto_hackeo": {
      "titulo": "Exchange on Fire",
      "desc": "Rumors swirl that a major centralized exchange is insolvent and freezing user withdrawals.",
      "opciones": [
        {
          "texto": "Report neutrally citing only verified exchange statements.",
          "tweet": "Monitoring the withdrawal delays. Waiting on official post-mortem before speculating.",
          "resultado": "Calm, professional coverage appreciated by level-headed traders."
        },
        {
          "texto": "Publish an emergency self-custody guide for hardware wallets.",
          "tweet": "Not your keys, not your crypto. Simple guide on moving funds to cold storage right now 🧵",
          "resultado": "Thousands bookmark your thread. You become the hero of the day."
        },
        {
          "texto": "Dismiss everything as baseless FUD and tell people to keep funds on-chain.",
          "tweet": "Ignore the cheap FUD. The exchange is solid and whales are just trying to shake you out. Keep holding.",
          "resultado": "The exchange collapses completely. Your credibility is decimated."
        }
      ]
    },
    "crypto_rugpull": {
      "titulo": "The Rug Pull Fallout",
      "desc": "A DeFi protocol you briefly mentioned last week just vanished with $10 million in community liquidity.",
      "opciones": [
        {
          "texto": "Acknowledge the mistake publicly without excuses.",
          "tweet": "I take full responsibility. I highlighted a project that turned out to be malicious. I failed to vet properly and I am sorry.",
          "resultado": "Painful backlash, but honest admission earns long-term respect."
        },
        {
          "texto": "Contribute personal funds to kickstart a victim recovery pool.",
          "tweet": "Setting up a recovery fund with my own capital for affected followers. Let's make this right.",
          "resultado": "A financial hit, but your community now defends you fiercely."
        },
        {
          "texto": "Delete all past tweets and claim your account was hacked.",
          "tweet": "My account was compromised last week. Anyone following links wasn't listening to me.",
          "resultado": "Followers pull up archived screenshots. Ratio of the century."
        }
      ]
    },
    "crypto_conferencia": {
      "titulo": "Keynote Speaker",
      "desc": "You are invited to deliver a keynote at the biggest international blockchain summit.",
      "opciones": [
        {
          "texto": "Deliver an honest, grounded talk on real adoption barriers.",
          "tweet": "Keynote done. Spoke on why crypto UX still sucks and how we fix it instead of hyping tokens.",
          "resultado": "Builders and venture funds respect your grounded pragmatism."
        },
        {
          "texto": "Deliver a fiery maximalist speech predicting the death of fiat.",
          "tweet": "Fiat is dying before our eyes. The future belongs to decentralized sovereign math. LFG.",
          "resultado": "Clips circulate wildly among crypto purists. Viral surge."
        },
        {
          "texto": "Show up late, shill a meme coin, and argue with the moderator.",
          "tweet": "They gave me a mic and didn't like what I had to say. Real degens don't wear suits.",
          "resultado": "Turned into an instant laughingstock meme across Crypto Twitter."
        }
      ]
    },
    "of_collab": {
      "titulo": "Collab of the Year",
      "desc": "A top-tier creator in your niche proposes a high-profile collaborative photoshoot.",
      "opciones": [
        {
          "texto": "Post tasteful, candid teaser selfies from behind the scenes.",
          "tweet": "Fun afternoon in the studio with the best company ✨ Full set dropping tonight on the main page.",
          "resultado": "Healthy crossover traffic with great positive reception."
        },
        {
          "texto": "Craft an artistic, editorial-grade high-fashion concept.",
          "tweet": "So proud of this shoot. We spent weeks perfecting the lighting and aesthetic. Art is art.",
          "resultado": "Praise for production quality. Expands your appeal to premium subscribers."
        },
        {
          "texto": "Push platform terms of service to the absolute edge.",
          "tweet": "If you know, you know 😈 New uncensored drop is live. Definitely not for the faint of heart.",
          "resultado": "Temporary shadowban and platform warnings, though subscriber spike is real."
        }
      ]
    },
    "of_hater": {
      "titulo": "The Timeline Troll",
      "desc": "A recurring troll floods every tweet you post with self-righteous, moralizing harassment.",
      "opciones": [
        {
          "texto": "Block quietly and move on with your day.",
          "tweet": "Blocked and moving on. Protecting my peace always 💅",
          "resultado": "Cuts the toxicity at the root without wasting energy."
        },
        {
          "texto": "Ignore and let your community roast him in replies.",
          "tweet": "Funny how the people who claim to hate my content spend all day refreshing my profile 🙃",
          "resultado": "Fans rush to your defense. Community solidarity skyrockets."
        },
        {
          "texto": "Expose hypocritical old DMs the troll sent you months ago.",
          "tweet": "Since you insisted on lecturing me publicly: here are your DMs from 3 months ago 🙂 Moralists are always the biggest hypocrites.",
          "resultado": "Brutal public destruction. Massive drama erupts across the timeline."
        }
      ]
    },
    "of_regalo": {
      "titulo": "The Mysterious Gift",
      "desc": "An anonymous subscriber sends high-end streaming gear to your private PO Box.",
      "opciones": [
        {
          "texto": "Return the gift to avoid unwritten obligations.",
          "tweet": "When strings might be attached, peace of mind is worth more than free gear.",
          "resultado": "Maintains professional boundaries at the cost of free hardware."
        },
        {
          "texto": "Acknowledge the gift publicly with strict professional boundaries.",
          "tweet": "Big shoutout to the community for the studio upgrade! Everything goes directly toward making better content for you all.",
          "resultado": "Fans appreciate seeing their support put to good work."
        },
        {
          "texto": "Keep the gear, tease the sender, and give a fake private number.",
          "tweet": "Somebody spoiled me today... maybe I'll text you a thank you 😉",
          "resultado": "The stalker escalates demands. Toxic drama ensues."
        }
      ]
    },
    "of_filtracion": {
      "titulo": "Leaked Content",
      "desc": "A pirate forum leaks your subscriber-only content across public social media.",
      "opciones": [
        {
          "texto": "File DMCA takedowns silently through your legal team.",
          "tweet": "Quietly handling business behind the scenes. Focus on the art.",
          "resultado": "Content removed with minimal public commotion."
        },
        {
          "texto": "Post a frank, vulnerable statement about creative theft.",
          "tweet": "Piracy isn't harmless fun—it steals hours of labor from independent creators. Support real artists.",
          "resultado": "Generates huge empathy and converts casual observers into paying subscribers."
        },
        {
          "texto": "Laugh it off, claim the leak was intentional promo, and hike subscription prices.",
          "tweet": "Thanks for the free billboard advertising, pirates! Prices go up tonight since demand is through the roof 💅",
          "resultado": "Brazen boss move. Polarizing, but brings in heavy revenue."
        }
      ]
    },
    "of_marca_grande": {
      "titulo": "The Corporate Sponsor",
      "desc": "A mainstream cosmetics conglomerate reaches out for an official brand partnership.",
      "opciones": [
        {
          "texto": "Accept on the condition of total creative control over the campaign.",
          "tweet": "Honored to partner with a legacy brand that respects creative freedom. Let's shake things up.",
          "resultado": "Groundbreaking deal bridging alternative creators with mainstream legitimacy."
        },
        {
          "texto": "Turn it down because their brand contract forces you to sanitize your feed.",
          "tweet": "I built this platform on authenticity. I will never let a corporate contract tell me how to dress or speak.",
          "resultado": "Beloved by core supporters for refusing to sell out."
        },
        {
          "texto": "Sign the sanitized contract and scrub half your spicy timeline history.",
          "tweet": "Time for a new, elegant chapter in my journey ✨ Excited for what's ahead!",
          "resultado": "Lucrative payout, but core early subscribers feel abandoned."
        }
      ]
    },
    "life_viaje": {
      "titulo": "Sponsored Getaway",
      "desc": "A luxury boutique resort invites you for an all-expenses-paid weekend in exchange for feed coverage.",
      "opciones": [
        {
          "texto": "Standard poolside photos with glowing brand gratitude.",
          "tweet": "Paradise found ✨ Eternal gratitude to the team here for making every detail pure magic.",
          "resultado": "Classic influencer content. Reliable engagement without controversy."
        },
        {
          "texto": "Curate an in-depth aesthetic travel guide with genuine local tips.",
          "tweet": "Beyond the resort: secret cafes, local artisans, and where to wander. Full travel diary 🧵👇",
          "resultado": "Followers love actionable utility over generic glamour."
        },
        {
          "texto": "Complain publicly about room temperature and demand VIP perks.",
          "tweet": "Air conditioning in room 402 is barely functional. When you pay for 5 stars, you expect 5 stars. Do better.",
          "resultado": "Branded an entitled diva. Backlash in quote-tweets."
        }
      ]
    },
    "life_morning": {
      "titulo": "The Flawless Morning Routine",
      "desc": "Your 5 AM morning routine vlog blows up, but comments accuse you of promoting toxic productivity.",
      "opciones": [
        {
          "texto": "Ignore the debate and post your morning matcha latte.",
          "tweet": "Slow sips and positive vibrations only today 🍵 Grateful for every moment.",
          "resultado": "Maintains aesthetic peace, letting the criticism fade."
        },
        {
          "texto": "Clarify that everyone has their own rhythm and routines aren't one-size-fits-all.",
          "tweet": "Routines are about finding what centers YOU. Some thrive at dawn, others at midnight. Do what serves your soul ✨",
          "resultado": "Balanced, mature response that disarms critics."
        },
        {
          "texto": "Reply condescendingly that people are lazy if they don't wake up at 4:30 AM.",
          "tweet": "We all have the same 24 hours. The difference between success and mediocrity is what you do while others sleep.",
          "resultado": "Massive ratio. Quotes turn into endless mocking memes."
        }
      ]
    },
    "life_producto": {
      "titulo": "Faulty Skincare Collab",
      "desc": "Followers report that a sponsored night cream you promoted caused skin breakouts.",
      "opciones": [
        {
          "texto": "Dismiss it as rare isolated cases and suggest consulting a dermatologist.",
          "tweet": "Skin chemistry is unique for everyone. Always patch-test and consult a specialist before starting new serums.",
          "resultado": "Technically defensive, but leaves disgruntled buyers unsatisfied."
        },
        {
          "texto": "Take accountability, halt promo, and demand answers from the brand.",
          "tweet": "Pausing all collaborations with this brand immediately. Your health comes before any sponsor contract.",
          "resultado": "Exemplary integrity. Credibility and trust multiply tenfold."
        },
        {
          "texto": "Delete critical replies and pretend everything is glowing.",
          "tweet": "Loving all the gorgeous feedback from everyone trying the new night routine! Glow on ✨",
          "resultado": "Expose threads surface showing deleted comments. Reputation tanks."
        }
      ]
    },
    "life_mascara_cae": {
      "titulo": "Behind the Filter",
      "desc": "An unedited photo of you looking stressed and disheveled leaks from an airport terminal.",
      "opciones": [
        {
          "texto": "Laugh it off and post self-deprecating humor.",
          "tweet": "Yes, that's me running on 2 hours of sleep and airport coffee. Influencers are human too 😂",
          "resultado": "Relatable charm turns a potential embarrassment into a win."
        },
        {
          "texto": "Post an honest reflection on the exhausting pressure of curated perfection.",
          "tweet": "The pressure to appear flawless 24/7 is suffocating. Sometimes life is messy, and that's okay.",
          "resultado": "Viral wave of support celebrating unvarnished honesty."
        },
        {
          "texto": "Claim the photo was an intentional performance art experiment.",
          "tweet": "Fascinating to watch society obsess over an uncurated image. A social experiment on perception.",
          "resultado": "Cringe overload. The timeline roasts your pretentious excuse."
        }
      ]
    },
    "life_producto_milagro": {
      "titulo": "The Miracle Detox Deal",
      "desc": "A dubious supplement brand offers an astronomical sum to promote their quick detox tea.",
      "opciones": [
        {
          "texto": "Refuse outright to preserve your followers' trust.",
          "tweet": "No shortcuts, no magic potions. Nourish your body with real food and sleep.",
          "resultado": "Health advocates applaud your refusal to push snake oil."
        },
        {
          "texto": "Accept but include extensive health disclaimers in the caption.",
          "tweet": "Partnering with [Brand]—remember teas are just supplements, not medical miracles! (Ad)",
          "resultado": "You cash the check, but eagle-eyed followers notice the compromise."
        },
        {
          "texto": "Promote it relentlessly with extravagant weight-loss claims.",
          "tweet": "Dropped 10 pounds in 5 days with this tea! Absolute game changer, grab yours before it sells out!",
          "resultado": "Fact-checkers and community notes destroy the post. Severe credibility hit."
        }
      ]
    },
    "poli_debate": {
      "titulo": "The Electoral Debate",
      "desc": "A fierce nationwide presidential debate is taking place live on TV.",
      "opciones": [
        {
          "texto": "Repeat official party slogans safely and consistently.",
          "tweet": "Clear proposals, unmatched leadership, and a vision for the future. The opposition has no answers.",
          "resultado": "Standard party cheerleading. Solid approval from base loyalists."
        },
        {
          "texto": "Post sharp, data-backed analysis breaking down economic proposals.",
          "tweet": "Comparing budget pledges: candidate A relies on unverified deficits, candidate B balances trade data. Thread 🧵",
          "resultado": "Independent analysts quote your breakdown. High authority."
        },
        {
          "texto": "Unleash unhinged, aggressive insults against opposing candidates.",
          "tweet": "Look at these corrupt clowns sweating on stage. Complete humiliation for their pathetic coalition.",
          "resultado": "Viral frenzy among radical supporters, but triggers fierce mutual harassment."
        }
      ]
    },
    "poli_escrache": {
      "titulo": "The Convenient Leak",
      "desc": "Photos leak of an opposition leader dining at an ultra-exclusive luxury restaurant.",
      "opciones": [
        {
          "texto": "Retweet the image without adding incendiary text.",
          "tweet": "RT 🍷📸",
          "resultado": "Quiet amplification that keeps your hands clean."
        },
        {
          "texto": "Critique the glaring disconnect between political speech and lifestyle.",
          "tweet": "Preaching austerity to struggling families by day, champagne dinners by night. The hypocrisy speaks for itself.",
          "resultado": "Devastating critique that cuts through partisan noise."
        },
        {
          "texto": "Fabricate that taxpayers footed the bill with zero evidence.",
          "tweet": "CONFIRMED: Paid for with public treasury funds! Arrest warrants should be issued tomorrow morning!",
          "resultado": "Fact-checks prove it was private funds. You lose all journalistic standing."
        }
      ]
    },
    "poli_meme": {
      "titulo": "The Campaign Meme",
      "desc": "A hilarious video meme mocking the rival candidate trends #1 in political circles.",
      "opciones": [
        {
          "texto": "Share it with just a laughing emoji.",
          "tweet": "💀😂",
          "resultado": "Simple, organic laughs shared across both aisles."
        },
        {
          "texto": "Add insightful political commentary on why the satire resonates.",
          "tweet": "When satire becomes this sharp, it means political messaging has failed. Humor reveals what speeches hide.",
          "resultado": "Intellectual spin that earns retweets from journalists."
        },
        {
          "texto": "Slap cruel personal insults on top of the clip.",
          "tweet": "Dumbest politician in modern history. Even animals show more brain activity than this fraud.",
          "resultado": "Turns a lighthearted meme into an ugly partisan dogfight."
        }
      ]
    },
    "poli_fake_news_propia": {
      "titulo": "The Dubious Scoop",
      "desc": "You receive an explosive scoop that paints your opponents as criminals, but the source is sketchy.",
      "opciones": [
        {
          "texto": "Wait for independent corroboration before posting.",
          "tweet": "Hearing wild rumors, but we verify before we amplify. Fact-checking in progress.",
          "resultado": "Patience protects your profile from an engineered trap."
        },
        {
          "texto": "Post it anyway, rationalizing that 'the core spirit is true'.",
          "tweet": "Even if details are muddy, the fundamental corruption is obvious to anyone paying attention. Read this.",
          "resultado": "Debunked in minutes. Opponents gloat over your gullibility."
        },
        {
          "texto": "Retract and issue a prompt public correction before being forced to.",
          "tweet": "Correction: earlier documents do not hold up to scrutiny. Deleting initial post. Truth matters.",
          "resultado": "Courageous transparency that protects institutional trust."
        }
      ]
    },
    "poli_debate_publico_tv": {
      "titulo": "Primetime TV Invite",
      "desc": "A major cable news channel invites you to a live panel representing your party's viewpoint.",
      "opciones": [
        {
          "texto": "Prepare thoroughly with calm, measured arguments.",
          "tweet": "Joining the panel tonight on live TV. Facts over screaming.",
          "resultado": "Stellar television performance. Mainstream credibility skyrockets."
        },
        {
          "texto": "Repeat aggressive partisan talking points without listening.",
          "tweet": "Going into the lion's den tonight to expose their media bias live on air.",
          "resultado": "Predictable shouting match. Satisfies loyalists, alienates undecideds."
        },
        {
          "texto": "Lose your temper, scream at the host, and storm off the set.",
          "tweet": "Host is an undercover operative. Refused to be silenced by their rigged microphones. Walked out.",
          "resultado": "Instant viral clips across all networks, mocking your meltdown."
        }
      ]
    },
    "fut_pronostico": {
      "titulo": "Derby Day Prediction",
      "desc": "The biggest football derby of the season kicks off in two hours. Everyone expects your match prediction.",
      "opciones": [
        {
          "texto": "Predict a tense, hard-fought 1-0 win for your team.",
          "tweet": "Matches like this aren't played, they're won. 1-0 scrap, leaving everything on the pitch.",
          "resultado": "Passionate yet grounded. Fans echo your fighting spirit."
        },
        {
          "texto": "Break down tactical lineups and injury reports objectively.",
          "tweet": "Derby tactical preview: pressing triggers in midfield, defensive transitions, and key matchups 🧵",
          "resultado": "Tactical analysts praise your football knowledge over raw tribalism."
        },
        {
          "texto": "Boast that you will obliterate them and call rivals cowards.",
          "tweet": "We are going to steamroll these cowards 5-0. They are already trembling in the tunnel. Total destruction.",
          "resultado": "If your team loses, rival fans mock your tweet for the next decade."
        }
      ]
    },
    "fut_partidario": {
      "titulo": "Fan Channel Feud",
      "desc": "A rival fan account accuses you of receiving club payouts to cover up board incompetence.",
      "opciones": [
        {
          "texto": "Ignore the feud and focus on academy youth prospects.",
          "tweet": "Academy U-20s won 3-0 today. Exciting talent coming up the ranks for next season.",
          "resultado": "High-road approach that keeps focus on the club."
        },
        {
          "texto": "Show your 15-year season ticket history and club membership card.",
          "tweet": "Been in the stands in rain and second division before you were born. My loyalty doesn't need a receipt.",
          "resultado": "Definitive authentic flex. Your club standing is unassailable."
        },
        {
          "texto": "Accuse the rival of being on the payroll of opposition directors.",
          "tweet": "Look who's talking! Everyone knows whose campaign checks fund your fake outrage channel.",
          "resultado": "Messy flame war dragging down both accounts."
        }
      ]
    },
    "fut_leyenda": {
      "titulo": "Farewell to a Legend",
      "desc": "An iconic rival player announces his retirement after a legendary 20-year career.",
      "opciones": [
        {
          "texto": "Tweet respectful condolences and acknowledge his greatness.",
          "tweet": "Hated facing him on derby day, but you have to respect greatness. Happy retirement to a true legend of the sport.",
          "resultado": "Classy sportsmanship applauded across all rival fanbases."
        },
        {
          "texto": "Write a retrospective thread on iconic derby clashes against him.",
          "tweet": "A retrospective on the legendary battles against [Player]: heartbreak, rivalry, and pure football history.",
          "resultado": "Heartfelt homage appreciated by purists."
        },
        {
          "texto": "Mock his lost finals and claim he was always overrated.",
          "tweet": "Retiring without an international trophy. Never showed up in the big games. Good riddance.",
          "resultado": "Branded a bitter, classless ultra with zero football culture."
        }
      ]
    },
    "fut_hinchada_violenta": {
      "titulo": "Stadium Violence",
      "desc": "Violent skirmishes break out outside the stadium between radical fan factions.",
      "opciones": [
        {
          "texto": "Unconditionally condemn violence across all fan clubs.",
          "tweet": "Football belongs to families and real fans. Criminals using our colors to destroy the neighborhood must be jailed.",
          "resultado": "Principled condemnation that builds moral authority."
        },
        {
          "texto": "Downplay the incidents as isolated troublemakers.",
          "tweet": "99% of fans were singing peacefully. A few hotheads don't define our entire community.",
          "resultado": "Lukewarm defensiveness that draws skepticism."
        },
        {
          "texto": "Justify the violence because rival supporters started the brawl.",
          "tweet": "They came looking for trouble in our neighborhood and found out. Don't play the victim now.",
          "resultado": "Account reported for promoting violent conduct."
        }
      ]
    },
    "fut_transferencia_rumor": {
      "titulo": "The Transfer Bombshell",
      "desc": "Rumors link your club's star player with an imminent transfer to your bitterest rival.",
      "opciones": [
        {
          "texto": "Remind everyone it is an unconfirmed rumor and urge calm.",
          "tweet": "Silly season in full swing. Don't fall for agent games until ink meets paper.",
          "resultado": "Voice of reason while the feed loses its collective mind."
        },
        {
          "texto": "Preemptively brand the player a traitor and burn his shirt.",
          "tweet": "If you cross that city bridge you are dead to this club forever. Traitorous mercenary.",
          "resultado": "The player signs a new contract renewal. You look completely foolish."
        },
        {
          "texto": "Fabricate that you spoke directly to board insiders.",
          "tweet": "EXCLUSIVE: Spoke with a top board director 10 mins ago. The deal is 100% closed, fee agreed.",
          "resultado": "Deal never existed. Your reputation as an insider is shredded."
        }
      ]
    },
    "hum_plagio": {
      "titulo": "The Stolen Meme",
      "desc": "A corporate meme aggregator with 5 million followers reposts your original joke without credit.",
      "opciones": [
        {
          "texto": "Ask politely for creator credit in a quote-tweet.",
          "tweet": "Glad you loved my joke! Would appreciate a creator tag though 🤝",
          "resultado": "Polite request gets buried, but followers notice your class."
        },
        {
          "texto": "Quote-tweet roasting their unoriginal corporate social media manager.",
          "tweet": "Imagine getting paid a corporate salary just to right-click save memes from accounts with 10k followers 😂",
          "resultado": "Devastating ratio that forces the brand to publicly credit you."
        },
        {
          "texto": "Unleash a mob of followers to brigade their comment section with hate.",
          "tweet": "Spam their mentions until they take it down. Swarm mode activated.",
          "resultado": "Platform strikes your account for organizing targeted harassment."
        }
      ]
    },
    "hum_trend": {
      "titulo": "Viral Trend of the Moment",
      "desc": "A bizarre viral format is dominating every trending topic today.",
      "opciones": [
        {
          "texto": "Post a clever, subversive twist on the format.",
          "tweet": "Me trying to understand the latest trending format without losing my last remaining brain cells.",
          "resultado": "Flawless comedic timing. Hundreds of thousands of retweets."
        },
        {
          "texto": "Write an absurd meta-parody deconstructing the trend.",
          "tweet": "A 10-step guide on how algorithmic decay manufactured this exact joke in a lab.",
          "resultado": "Loved by cynical internet purists."
        },
        {
          "texto": "Cross the line with a cruel joke targeting a celebrity's medical crisis.",
          "tweet": "Too soon? Probably. Funny? Absolutely.",
          "resultado": "Immediate public disgust. Advertisers and followers flee."
        }
      ]
    },
    "hum_standup": {
      "titulo": "Live Comedy Debut",
      "desc": "You step onto a live comedy club stage to perform stand-up for the very first time.",
      "opciones": [
        {
          "texto": "Perform a modest, self-aware set poking fun at Twitter culture.",
          "tweet": "Did stand-up comedy live tonight. Nobody threw tomatoes and three people laughed. Massive personal victory.",
          "resultado": "Charming humility that endears you to your audience."
        },
        {
          "texto": "Crush the room with razor-sharp original material.",
          "tweet": "Sold-out room, killer crowd, and zero dead air. Stand-up tour coming soon 🔥",
          "resultado": "Crosses the bridge from online memer to legitimate comedian."
        },
        {
          "texto": "Bomb horribly on stage, get booed off, and blame the audience online.",
          "tweet": "Crowd was too uneducated to understand dry satire. You guys deserve low-effort slapstick.",
          "resultado": "Cringe defensive posting. The comedy scene mercilessly mocks you."
        }
      ]
    },
    "hum_censura": {
      "titulo": "Post Removed",
      "desc": "The algorithm automatically takes down one of your most viral memes for violating vague terms.",
      "opciones": [
        {
          "texto": "Submit an appeal quietly through official support tickets.",
          "tweet": "Meme flagged by the bot army. Ticket submitted, back to regular programming.",
          "resultado": "Restored within 48 hours without drama."
        },
        {
          "texto": "Post an absurd screenshot mocking the moderation bot's logic.",
          "tweet": "Flagged for 'dangerous behavior' because a cat looked slightly annoyed in panel 2. Tech dystopia is here.",
          "resultado": "Viral mockery of corporate AI moderation."
        },
        {
          "texto": "Post a hysterical thread claiming state censorship and political persecution.",
          "tweet": "The global regime is silencing my memes because the truth threatens their power matrix.",
          "resultado": "Sounds like unhinged paranoia. Loses you sensible followers."
        }
      ]
    },
    "hum_colaboracion_rival": {
      "titulo": "Rival Meme Alliance",
      "desc": "A competing meme account that frequently exchanges jabs with you offers to co-host a podcast episode.",
      "opciones": [
        {
          "texto": "Accept and turn the playful feud into hilarious collaborative banter.",
          "tweet": "We put aside the timeline wars for 60 minutes. The peace treaty episode is live now.",
          "resultado": "Instant viral hit. Both audiences blend seamlessly."
        },
        {
          "texto": "Decline respectfully, preferring to keep the comedic rivalry organic.",
          "tweet": "Rivalry is better when it's kept on the timeline. Respectfully declining, game on 🤝",
          "resultado": "Preserves competitive spark with clean boundaries."
        },
        {
          "texto": "Accept the invite and shamelessly steal their private joke drafts without credit.",
          "tweet": "Shoutout to my guy for the 'inspiration'. Real creatives know how to borrow.",
          "resultado": "Exposed in the community as a joke thief. Severe reputational damage."
        }
      ]
    },
    "per_filtracion": {
      "titulo": "The Anonymous Leak",
      "desc": "An encrypted document leaks to your ProtonMail showing fiscal misconduct in high office.",
      "opciones": [
        {
          "texto": "Publish while clearly adding disclaimers that verification is ongoing.",
          "tweet": "EXCLUSIVE: Preliminary fiscal leak under review. Publishing verified pages with ongoing cross-checks 🧵",
          "resultado": "Cautious journalism that builds unshakeable credibility."
        },
        {
          "texto": "Spend three days cross-referencing government databases before dropping the story.",
          "tweet": "INVESTIGATION: 72 hours of cross-referencing public records confirm systematic financial misconduct. Full report:",
          "resultado": "Pulitzer-grade investigative scoop. Massive professional prestige."
        },
        {
          "texto": "Drop the unredacted PDF immediately with sensationalist clickbait headlines.",
          "tweet": "CABINET OVERTHROW IMMINENT! UNREDACTED LEAK EXPOSES EVERYTHING! RETWEET BEFORE THEY CENSOR ME!",
          "resultado": "Contains fake fabricated pages. Legal notices and devastating loss of standing."
        }
      ]
    },
    "per_vivo": {
      "titulo": "Live Protest Coverage",
      "desc": "Massive protests erupt downtown with tear gas, riot police, and conflicting reports.",
      "opciones": [
        {
          "texto": "Retweet verified video footage safely from your home desk.",
          "tweet": "Aggregating verified eyewitness footage from downtown. Confirmed standoff on 5th Avenue.",
          "resultado": "Safe, reliable news aggregation."
        },
        {
          "texto": "Report on the ground live in the middle of the gas and barricades.",
          "tweet": "Live on the street: tear gas deployed, crowd dispersing toward the square. Stay safe out here.",
          "resultado": "Courageous journalism. Earns massive respect across the platform."
        },
        {
          "texto": "Invent unconfirmed casualty rumors to juice live engagement.",
          "tweet": "MULTIPLE FATALITIES REPORTED NEAR PLAZA! POLICE COVER-UP UNDERWAY!",
          "resultado": "No casualties occurred. Sued for inciting public panic."
        }
      ]
    },
    "per_nota_paga": {
      "titulo": "The Sponsored Editorial",
      "desc": "A private conglomerate offers $5,000 for a puff piece disguised as an objective market analysis.",
      "opciones": [
        {
          "texto": "Turn down the offer immediately to protect journalistic independence.",
          "tweet": "My editorial independence is not for sale at any price. Ever.",
          "resultado": "Moral victory that earns unyielding trust from readers."
        },
        {
          "texto": "Publish an expose detailing how PR firms bribe independent reporters.",
          "tweet": "PR firms offer thousands to buy independent coverage. Here are the exact email templates they send journalists 🧵",
          "resultado": "Sensation that establishes you as an untouchable truth-teller."
        },
        {
          "texto": "Take the cash and run the puff piece with no sponsorship label.",
          "tweet": "Remarkable innovation happening at [Corp]. An inspiring model of modern corporate governance.",
          "resultado": "Readers spot the blatant shill. Credibility permanently destroyed."
        }
      ]
    },
    "per_presion_gobierno": {
      "titulo": "State Pressure",
      "desc": "An official government spokesperson calls demanding you pull down your latest investigative thread.",
      "opciones": [
        {
          "texto": "Stand firm and publish their recorded intimidation attempt.",
          "tweet": "Official call received demanding this thread be taken down. Freedom of the press will not bend to pressure.",
          "resultado": "Heroic defense of press freedom. Nationwide viral solidarity."
        },
        {
          "texto": "Tone down a few aggressive adjectives while keeping all factual findings.",
          "tweet": "Clarifying phrasing on point 4 for absolute legal precision. The facts remain undisputed.",
          "resultado": "Prudent balance that avoids litigation while preserving the scoop."
        },
        {
          "texto": "Delete the entire thread in panic and go silent for a week.",
          "tweet": "Temporarily taking some time off the timeline to focus on personal matters.",
          "resultado": "Viewed as cowardly surrender. Followers feel let down."
        }
      ]
    },
    "per_error_propio": {
      "titulo": "The Factual Error",
      "desc": "A critical number in your viral infographic turns out to be wrong due to a typo.",
      "opciones": [
        {
          "texto": "Post an immediate, prominent correction pinned to the top of your feed.",
          "tweet": "CORRECTION: Graphic contained an error on slide 2 (deficit was 4.2%, not 8.4%). Corrected version attached. My apologies.",
          "resultado": "Transparent accountability that reinforces your reputation for honesty."
        },
        {
          "texto": "Silently delete the tweet and reupload the corrected graphic.",
          "tweet": "Updated infographic with fresh official revisions.",
          "resultado": "Critics catch the stealth edit, but minimal long-term fallout."
        },
        {
          "texto": "Defend the incorrect number aggressively and claim detractors are government shills.",
          "tweet": "Establishment fact-checkers are nitpicking decimals to distract from the real crisis. The number stands.",
          "resultado": "Embarrassing stubbornness. Colleagues disavow your reporting."
        }
      ]
    },
    "opi_debate_nacio": {
      "titulo": "The National Crisis",
      "desc": "An unprecedented macroeconomic crisis paralyzes the country. The entire timeline demands your verdict.",
      "opciones": [
        {
          "texto": "Post a vague tweet wishing for institutional harmony.",
          "tweet": "A difficult hour for the republic. Wishing for dialogue, calm, and wisdom from all leaders.",
          "resultado": "Safe, bland statement that offends nobody."
        },
        {
          "texto": "Publish an incisive 20-tweet historical analysis on past crisis outcomes.",
          "tweet": "To understand today's currency collapse, we must revisit 1989 and 2001. A comprehensive macroeconomic breakdown 🧵",
          "resultado": "Solid, educational thread that establishes intellectual authority."
        },
        {
          "texto": "Aggressively blame one faction and stoke cultural division.",
          "tweet": "These treasonous parasites brought the country to ruin. Zero reconciliation with economic saboteurs.",
          "resultado": "Massive engagement spike, but timeline toxicity explodes."
        }
      ]
    },
    "opi_cultura": {
      "titulo": "The Cultural Essay",
      "desc": "A classic cinema masterpiece or literary work trends on cultural Twitter.",
      "opciones": [
        {
          "texto": "Copy-paste a summarized Wikipedia plot synopsis.",
          "tweet": "Rewatching this masterpiece. Themes of alienation and moral duality remain timeless.",
          "resultado": "Generic cultural commentary."
        },
        {
          "texto": "Write a deeply original, researched essay on the director's philosophy.",
          "tweet": "Why this film predicted our modern internet neurosis: an essay on aesthetics, sound design, and memory 🧵",
          "resultado": "Acclaimed by intellectuals, bookmarks surge."
        },
        {
          "texto": "Trash the masterpiece as 'boring woke trash' for easy contrarian clout.",
          "tweet": "Unpopular opinion: this movie is unwatchable garbage overrated by pretentious film snobs.",
          "resultado": "Easy ragebait engagement, but cinephiles dismiss you as a clown."
        }
      ]
    },
    "opi_fake": {
      "titulo": "The Viral Fall",
      "desc": "You retweet an obvious AI-generated parody image believing it was real news.",
      "opciones": [
        {
          "texto": "Delete and laugh at yourself for being duped.",
          "tweet": "Got completely fooled by an AI render. Taking the L on this one, time to get my eyes checked 😂",
          "resultado": "Disarming self-awareness defuses the mockery."
        },
        {
          "texto": "Write a thoughtful thread on how convincing generative AI is becoming.",
          "tweet": "The fact that this fooled so many reveals a terrifying milestone in generative deception. Thread on digital authenticity 🧵",
          "resultado": "Smart pivot that turns a mistake into serious discourse."
        },
        {
          "texto": "Keep the fake post up and claim 'it could easily have been real'.",
          "tweet": "Even if the photo is fake, the fact that we all believed it proves how corrupt they truly are!",
          "resultado": "Immortalized in the hall of shame. Endlessly ratioed."
        }
      ]
    },
    "opi_polemica_ajena": {
      "titulo": "Surfing the Wave",
      "desc": "Two minor celebrities have an absurd public breakup. The timeline is consuming nothing else.",
      "opciones": [
        {
          "texto": "Wait for full context before passing grand philosophical judgments.",
          "tweet": "Timeline treating personal heartbreak like reality television. Let them handle private grief.",
          "resultado": "Mature, dignified stance."
        },
        {
          "texto": "Jump in immediately with hot takes without reading the backstory.",
          "tweet": "Clear red flags on both sides. Another case study in modern relationship narcissism.",
          "resultado": "Quick engagement hit, but aged poorly once facts surfaced."
        },
        {
          "texto": "Take such an extreme stance that you contradict your own past posts.",
          "tweet": "No excuses: accountability must be total! Zero tolerance for this behavior!",
          "resultado": "Followers bring up your old contradictory tweets. Total hypocrisy exposed."
        }
      ]
    },
    "opi_entrevista_tv": {
      "titulo": "TV Talk Show Debut",
      "desc": "A prime-time national talk show invites you to comment on the state of social media culture.",
      "opciones": [
        {
          "texto": "Come prepared with measured points, nuances, and data.",
          "tweet": "Enjoyed the studio debate tonight. Nuance is rare on television, but worth fighting for.",
          "resultado": "Polished performance that earns respect from serious commentators."
        },
        {
          "texto": "Repeat your Twitter persona with loud interruptions and catchphrases.",
          "tweet": "Brought the timeline energy to broadcast TV tonight. No apologies.",
          "resultado": "Entertaining spectacle for your followers, polarizing for general public."
        },
        {
          "texto": "Pick a screaming match with the veteran host purely for viral clips.",
          "tweet": "Told the host to his face what nobody in his studio dared to say. Watch the viral clip here 🔥",
          "resultado": "Brief viral spike, but blacklisted from legacy broadcast networks."
        }
      ]
    },
    "gam_drama": {
      "titulo": "Community Drama",
      "desc": "Two big streamers in your circle started an ugly public feud. The timeline is demanding you pick a side.",
      "opciones": [
        {
          "texto": "Keep playing and completely ignore the drama.",
          "tweet": "Ranked grind is on 🔥 10-win streak today, nothing else matters.",
          "resultado": "You stay out of the crossfire and your chat stays focused on gameplay."
        },
        {
          "texto": "Tweet calling for everyone to cool down.",
          "tweet": "Can we remember we play video games for a living? Log off and touch grass for an hour.",
          "resultado": "Respected as the mature voice in the room."
        },
        {
          "texto": "Aggressively take a side on the drama.",
          "tweet": "I wasn't gonna say anything, but what [Streamer] did is completely shameless. Zero respect left.",
          "resultado": "Huge engagement spike, but half the community now considers you an enemy."
        }
      ]
    },
    "gam_lanzamiento": {
      "titulo": "The Anticipated Game",
      "desc": "The most hyped game of the decade launches and the studio sends you an exclusive review code.",
      "opciones": [
        {
          "texto": "Post a screaming gameplay reaction clip.",
          "tweet": "Clip of the day 🎮🔥 when everything goes according to plan. Or completely fails.",
          "resultado": "Solid entertainment for your existing audience."
        },
        {
          "texto": "Write an honest review detailing launch bugs.",
          "tweet": "Honest review of [Game]: gorgeous art and compelling story, but launch bugs ruin the pacing. Needed more polish.",
          "resultado": "Gamers respect your honesty over empty corporate hype."
        },
        {
          "texto": "Accept sponsor cash and call it a 10/10 masterpiece.",
          "tweet": "Finished the Game of the Year in 48 hours. Absolute masterpiece, 10/10! (Sponsored, but doesn't change my genuine opinion 😉)",
          "resultado": "The game is riddled with glitches. The community calls you a sellout."
        }
      ]
    },
    "gam_torneo": {
      "titulo": "Creators Invitational",
      "desc": "You get invited to a massive streaming tournament with $50k on the line.",
      "opciones": [
        {
          "texto": "Join casually just to have fun with chat.",
          "tweet": "In the tournament! Here for good vibes and laughs, not sweating the rank today.",
          "resultado": "Relaxed stream, chat enjoys the chill energy."
        },
        {
          "texto": "Grind hard and finish in the top 3.",
          "tweet": "GGs! Top 3 in the tournament. Weeks of practice paid off. Proud of the squad.",
          "resultado": "Massive influx of followers who respect your competitive skill."
        },
        {
          "texto": "Use an undetected exploit live on stream.",
          "tweet": "Just a superior gaming chair and game sense, stay mad losers.",
          "resultado": "Disqualified live on stream. You face community backlash."
        }
      ]
    },
    "gam_boicot_empresa": {
      "titulo": "Studio Boycott",
      "desc": "A major publisher introduces aggressive predatory microtransactions in their new title.",
      "opciones": [
        {
          "texto": "Join the player boycott with solid arguments.",
          "tweet": "Charging $70 upfront and putting core mechanics behind gacha lootboxes is predatory. Uninstalled.",
          "resultado": "Your community rallies behind you as a defender of player rights."
        },
        {
          "texto": "Stay neutral and avoid taking a stance.",
          "tweet": "Let's see how the studio responds to the patch notes before jumping to conclusions.",
          "resultado": "Nobody is satisfied with your lukewarm response."
        },
        {
          "texto": "Defend the studio in exchange for exclusive sponsorships.",
          "tweet": "Developers gotta eat too. If you don't like cosmetics, just don't buy them. Game is great.",
          "resultado": "Immediate ratio. You are branded a corporate shill."
        }
      ]
    },
    "gam_acoso_fan": {
      "titulo": "The Obsessive Fan",
      "desc": "A viewer crosses boundaries, flooding your DMs and chat with uncomfortable personal messages.",
      "opciones": [
        {
          "texto": "Block and report quietly without making a scene.",
          "tweet": "Boundaries matter. Keep chat positive and respectful.",
          "resultado": "Clean and mature handling of a delicate issue."
        },
        {
          "texto": "Post an educational video on streamer boundaries.",
          "tweet": "Streamers are human beings, not parasocial companions. Video addressing boundaries.",
          "resultado": "Widely shared across the streaming sphere, boosting your credibility."
        },
        {
          "texto": "Doxx and expose the user's private messages publicly.",
          "tweet": "Look at the disgusting messages this clown sends me in DMs. Expose him.",
          "resultado": "Platform warning for harassment. Drama escalates out of control."
        }
      ]
    },
    "cons_ovni": {
      "titulo": "Lights in the Night Sky",
      "desc": "Mysterious flashing lights appear across the night horizon in multiple cities.",
      "opciones": [
        {
          "texto": "Share the clips stating 'the proof is right before our eyes'.",
          "tweet": "Look at the telemetry and movement vector. That is not satellite debris. The evidence is right in front of us 🛸",
          "resultado": "Thoroughly excites your loyal believer base."
        },
        {
          "texto": "Analyze flight paths searching for logical explanations first.",
          "tweet": "Investigating the radar data: checking drone light shows and Starlink passes before jumping to conclusions.",
          "resultado": "Earns respect from rational skeptics."
        },
        {
          "texto": "Claim alien invasion is imminent and peddle emergency bunker kits.",
          "tweet": "INVASION HAS BEGUN. The veil has dropped. Bunkers and emergency kits available at link in bio 👽🚨",
          "resultado": "Branded a fearmongering snake-oil salesman."
        }
      ]
    },
    "cons_luz": {
      "titulo": "The Rolling Blackout",
      "desc": "A massive unexpected power outage knocks out electricity across three metropolitan regions.",
      "opciones": [
        {
          "texto": "Suggest ambiguously that a coordinated cyberattack occurred.",
          "tweet": "Three grids fail simultaneously within 40 seconds. Just a power surge, right? Keep asking questions.",
          "resultado": "Classic conspiratorial suspense that hooks curious followers."
        },
        {
          "texto": "Track infrastructure failure data and maintenance budgets.",
          "tweet": "Substation maintenance deferred for 4 years. When you gut infrastructure, the lights go out. Thread on grid decay 🧵",
          "resultado": "Practical investigative angle that earns mainstream retweets."
        },
        {
          "texto": "Declare this marks the start of the global economic Great Reset.",
          "tweet": "THE RESET IS UNDERWAY. Power grid goes down first, digital currencies get locked next. Withdraw everything NOW.",
          "resultado": "Wild panic that triggers platform misinformation flags."
        }
      ]
    },
    "cons_debate": {
      "titulo": "Face to Face with Science",
      "desc": "A prominent astrophysicist publicly challenges you to a live debate on your planetary theories.",
      "opciones": [
        {
          "texto": "Decline, claiming academic elites just want to censor and ridicule you.",
          "tweet": "Tenured gatekeepers want to debate on their terms inside their bubble. I answer to the people, not the establishment.",
          "resultado": "Followers view you as an unbowed anti-establishment martyr."
        },
        {
          "texto": "Accept, bringing curated research papers and alternative hypotheses.",
          "tweet": "Debate accepted. Let's see if peer review holds up against raw anomalous data. See you Friday.",
          "resultado": "High-stakes debate. You hold your ground surprisingly well."
        },
        {
          "texto": "Dodge the science and attack the scientist's corporate funding sources.",
          "tweet": "Check who funds his research laboratory before listening to a word he says. Pure pharmaceutical shill.",
          "resultado": "Blatant ad hominem. Academic community mocks your evasion."
        }
      ]
    },
    "cons_prediccion_fallida": {
      "titulo": "The Unfulfilled Prophecy",
      "desc": "A specific date you promised would bring cosmic revelations passes with absolutely nothing happening.",
      "opciones": [
        {
          "texto": "Admit honestly that the predicted event did not happen.",
          "tweet": "Date passed, nothing occurred. I was wrong on the timeline. Reassessing the data and taking responsibility.",
          "resultado": "Rare humility that shocks detractors and preserves core respect."
        },
        {
          "texto": "Claim the prophecy was fulfilled on a subtle symbolic dimension.",
          "tweet": "The shift wasn't physical, it was spiritual and energetic. The energetic timeline has altered permanently.",
          "resultado": "Predictable esoteric rationalization. Satisfies true believers."
        },
        {
          "texto": "Claim the event was averted because your tweets exposed their plans.",
          "tweet": "We exposed their operation in advance, forcing them to abort the schedule. Our vigilance saved the day!",
          "resultado": "Ludicrous self-congratulation. Endless memes mocking your copium."
        }
      ]
    },
    "cons_medios_infiltran": {
      "titulo": "The Undercover Reporter",
      "desc": "A documentary journalist reaches out wanting to profile your online following.",
      "opciones": [
        {
          "texto": "Set strict ground rules with full uncut recording rights.",
          "tweet": "Agreed to interview only if I can release the raw unedited audio to my followers simultaneously. Transparency first.",
          "resultado": "Smart tactical defense that protects against unfair editing."
        },
        {
          "texto": "Decline cordially, warning followers about media spin.",
          "tweet": "Legacy media wants another hit piece on 'online radicals'. Politely declining. We build our own media.",
          "resultado": "Maintains sovereign independence and insulates your circle."
        },
        {
          "texto": "Accept and immediately scream at the journalist live on air.",
          "tweet": "Look at this operative sweating as soon as real questions get asked. Corrupt media exposed live!",
          "resultado": "Documentary airs portraying your community as volatile and unhinged."
        }
      ]
    },
    "tec_SaaS": {
      "titulo": "The Product Launch",
      "desc": "Your new productivity micro-SaaS application is ready for its official Product Hunt debut.",
      "opciones": [
        {
          "texto": "Launch cleanly with an early-bird lifetime discount.",
          "tweet": "After 4 months of building: [App] is officially live! 50% discount for early adopters this week 🚀",
          "resultado": "Steady initial conversions and positive organic feedback."
        },
        {
          "texto": "Post a transparent 'Build in Public' journey detailing all metrics.",
          "tweet": "0 to $5k MRR in public: server architecture, failed marketing channels, and raw numbers. Full breakdown 🧵",
          "resultado": "Indie hackers and engineers re-share your breakdown widely."
        },
        {
          "texto": "Claim your app uses proprietary quantum AI when it's just a generic API wrapper.",
          "tweet": "Disrupting the productivity paradigm with proprietary neuro-quantum AI algorithms. Legacy software is dead.",
          "resultado": "Engineers inspect network requests and expose your basic wrapper. Heavy ratio."
        }
      ]
    },
    "tec_lenguajes": {
      "titulo": "The Programming War",
      "desc": "A ferocious religious debate breaks out over Rust vs JavaScript vs Python on tech Twitter.",
      "opciones": [
        {
          "texto": "Post a hilarious meme mocking the holy wars between developers.",
          "tweet": "Senior devs debating memory safety for 6 hours while the client just wants the login button moved 2px left.",
          "resultado": "Universally shared laugh across the entire developer sphere."
        },
        {
          "texto": "Publish an objective, nuanced breakdown of tradeoffs for each stack.",
          "tweet": "Tooling is contextual: Rust for low-level performance, Go for microservices, Python for data. Stop tribalism 🧵",
          "resultado": "Senior staff engineers praise your balanced maturity."
        },
        {
          "texto": "Belittle anyone not using Rust in production as incompetent amateurs.",
          "tweet": "If you're still writing backend code in anything other than Rust in 2026, you shouldn't be trusted with an IDE.",
          "resultado": "Elitist toxicity that alienates peers and hiring managers."
        }
      ]
    },
    "tec_oferta": {
      "titulo": "Venture Capital Term Sheet",
      "desc": "A prestigious Silicon Valley VC firm offers you a $1.5M pre-seed investment round.",
      "opciones": [
        {
          "texto": "Accept the term sheet to aggressively accelerate growth.",
          "tweet": "Thrilled to partner with top tier partners for our $1.5M round. Time to build the future of software.",
          "resultado": "Massive capital injection. High expectations and aggressive targets."
        },
        {
          "texto": "Turn down VC money and remain a 100% bootstrapped, profitable founder.",
          "tweet": "Turned down $1.5M in venture capital today. Bootstrapped, cashflow-positive, and 100% sovereign.",
          "resultado": "Legendary standing among indie hackers and bootstrapper communities."
        },
        {
          "texto": "Brag about valuation on Twitter while having zero actual paying customers.",
          "tweet": "Valued at $15M pre-revenue. Capital flows to visionaries, not spreadsheet clerks. Keep hustling.",
          "resultado": "Viewed as a hollow bubble startup waiting to burst."
        }
      ]
    },
    "tec_bug_critico": {
      "titulo": "Production Outage",
      "desc": "A critical database glitch in your latest deployment leaks user emails publicly.",
      "opciones": [
        {
          "texto": "Publish an immediate transparent incident report and live post-mortem.",
          "tweet": "Security incident: database bug patched in 18 minutes. Full transparent post-mortem and mitigation steps here:",
          "resultado": "Exemplary engineering response that actually increases user trust."
        },
        {
          "texto": "Patch it quietly in the dark without informing affected users.",
          "tweet": "Deployed routine performance improvements to production servers.",
          "resultado": "White-hat security researcher catches the cover-up and exposes it."
        },
        {
          "texto": "Blame an external cloud vendor publicly without verifying logs.",
          "tweet": "Third-party cloud infrastructure let us down today. Holding their engineers accountable.",
          "resultado": "Logs prove it was your own bad SQL query. Total humiliation."
        }
      ]
    },
    "tec_competencia_copia": {
      "titulo": "Cloned by Competitors",
      "desc": "A venture-backed corporate clone copies your UI and core feature set pixel by pixel.",
      "opciones": [
        {
          "texto": "Double down on improving product speed, features, and user happiness.",
          "tweet": "They can clone your features, but they can't clone your velocity. Shipping 3 new releases this week.",
          "resultado": "Indie resilience that wins customer loyalty and respect."
        },
        {
          "texto": "Post a side-by-side comparison thread exposing the blatant copying.",
          "tweet": "Spot the difference: 4 months of my indie work vs corporate clone's latest release. Thread on fair play 🧵",
          "resultado": "Viral outrage on your behalf forces the clone to apologize."
        },
        {
          "texto": "Post exaggerated legal threats claiming you'll bankrupt their executives.",
          "tweet": "My lawyers will destroy your company. Every executive will be personally liable. See you in court.",
          "resultado": "Comes off as unhinged bluster. Legal experts mock your threats."
        }
      ]
    },
    "pod_clip": {
      "titulo": "The Viral Soundbite",
      "desc": "A controversial 30-second snippet from your latest episode starts trending heavily on TikTok and Twitter.",
      "opciones": [
        {
          "texto": "Share the isolated soundbite with clean subtitles for maximum reach.",
          "tweet": "The clip everyone is talking about today. Listen closely to what was said 🎙️👇",
          "resultado": "Massive click-through traffic to the full episode."
        },
        {
          "texto": "Post the full, uncut 5-minute context of the discussion.",
          "tweet": "Context matters: here is the uncut 5-minute discussion before and after the soundbite. Judge for yourself.",
          "resultado": "Praised for intellectual honesty and anti-clickbait principles."
        },
        {
          "texto": "Edit the clip deceitfully to make the guest appear to say something illegal.",
          "tweet": "DID HE REALLY JUST ADMIT TO THIS ON CAMERA?! Unbelievable confession on today's show 🚨",
          "resultado": "The guest issues a legal cease-and-desist and cuts all ties."
        }
      ]
    },
    "pod_auspicio": {
      "titulo": "The Boring Sponsor",
      "desc": "A dull B2B accounting software company pays top tier money for an ad read.",
      "opciones": [
        {
          "texto": "Deliver the sponsor read professionally and swiftly.",
          "tweet": "Support our sponsors who keep this show 100% free and independent. Link in show notes 🤝",
          "resultado": "Clean commercial execution. Sponsor renews contract."
        },
        {
          "texto": "Turn the boring ad read into an unhinged, hilarious comedic sketch.",
          "tweet": "Ad read of the week: trying to make payroll tax software sound exciting for 90 seconds 😂",
          "resultado": "Listeners loved the creativity, sponsor gets record conversions."
        },
        {
          "texto": "Read the sponsor script sarcastically while making fun of their product.",
          "tweet": "Nobody actually cares about accounting software, but they paid for the studio lights so whatever.",
          "resultado": "Sponsor cancels the contract and demands a refund."
        }
      ]
    },
    "pod_invitado": {
      "titulo": "The Problematic Guest",
      "desc": "A highly controversial cultural figure with radioactive reputation asks to be a guest on your podcast.",
      "opciones": [
        {
          "texto": "Decline to prevent toxic drama from consuming your show's brand.",
          "tweet": "Curating our studio space matters. Some figures bring noise, not conversation. Passing.",
          "resultado": "Protects your show's reputation and long-term brand equity."
        },
        {
          "texto": "Accept, but conduct a rigorous, tough, unsparing cross-examination.",
          "tweet": "No puff piece, no softballs. We held his feet to the fire on every contradiction for 2 hours. Full episode live.",
          "resultado": "Masterful interview that earns widespread journalistic acclaim."
        },
        {
          "texto": "Conduct a sycophantic, fawning interview whitewashing his record.",
          "tweet": "Such an misunderstood visionary! Honored to give him a platform to clear his name ✨",
          "resultado": "Severe audience backlash. Branded a spineless enabler."
        }
      ]
    },
    "pod_numero_bajo": {
      "titulo": "The Slump Episode",
      "desc": "An episode you poured weeks of deep research into lands with disappointing listener numbers.",
      "opciones": [
        {
          "texto": "Stay committed to quality, knowing evergreen content pays off over time.",
          "tweet": "Algorithms chase noise, but depth stands the test of time. Proud of this episode regardless of day-one numbers.",
          "resultado": "Respected by loyal listeners who value depth over cheap trends."
        },
        {
          "texto": "Repackage the core insights into visual infographics and threads.",
          "tweet": "Distilled the 3 most crucial takeaways from our latest deep-dive into visual breakdowns 🧵",
          "resultado": "Sparks a delayed second wave of engagement and downloads."
        },
        {
          "texto": "Post an angry rant scolding your audience for having short attention spans.",
          "tweet": "You all cry for intelligent content, and when I deliver it you'd rather watch brainrot memes. Disappointing.",
          "resultado": "Lashing out at your audience never works. Listeners unfollow."
        }
      ]
    },
    "pod_crossover": {
      "titulo": "The Dream Crossover",
      "desc": "The host of the #1 podcast in the country offers to record a joint crossover episode.",
      "opciones": [
        {
          "texto": "Accept and prepare a phenomenal collaborative episode.",
          "tweet": "The crossover you asked for is finally here. Two studios, one historic conversation. Streaming now 🎙️🔥",
          "resultado": "Explosive milestone. Hundreds of thousands of new subscribers."
        },
        {
          "texto": "Decline because their show requires you to fly across the country on short notice.",
          "tweet": "Honored by the invite, but keeping our production schedule grounded right now. Timing wasn't right.",
          "resultado": "Maintains professional independence without burning bridges."
        },
        {
          "texto": "Accept and spend the entire episode desperately trying to upstage the host.",
          "tweet": "Took over his studio today. Everyone knows who really ran that conversation 😉",
          "resultado": "Host cuts ties and cuts your mic volume in post-production. Awkward disaster."
        }
      ]
    },
    "super_hab_opinologo_0": {
      "titulo": "The One Who Knew",
      "desc": "A major plane incident happens. You already had an analytical thread explaining the exact geopolitical cause before official reports."
    },
    "super_hab_opinologo_1": {
      "titulo": "Told You So",
      "desc": "A month before a conflict broke out, you predicted it. When it happens, you quote yourself and the entire timeline rediscovers you."
    },
    "super_hab_futbolero_0": {
      "titulo": "Quoted by a National Team Star",
      "desc": "A national team player quote-tweets your post praising your insight. Your notifications go nuclear."
    },
    "super_hab_futbolero_1": {
      "titulo": "The Exact Scoreline",
      "desc": "You posted the exact scoreline of the cup final before kickoff. Your tweet gets screenshotted by millions."
    },
    "super_hab_militante_0": {
      "titulo": "Endorsed by the Party",
      "desc": "The top leader of your party quotes you, publicly validating what you've been fighting for. Your following multiplies overnight."
    },
    "super_hab_militante_1": {
      "titulo": "Unexpected Legitimacy",
      "desc": "A respected veteran journalist quotes your analysis on television. Suddenly you are considered an authoritative voice."
    },
    "super_hab_humor_0": {
      "titulo": "Completely Out of Control",
      "desc": "A casual meme you posted goes wildly viral beyond comprehension. Even national television shows are using it as a bumper."
    },
    "super_hab_humor_1": {
      "titulo": "Ratioed the Original Post",
      "desc": "You quote-tweet an arrogant celebrity and your punchline outperforms their original post 20 to 1."
    },
    "super_hab_periodista_0": {
      "titulo": "The Major Scoop",
      "desc": "You receive a verified exclusive leak and break the investigative story before any traditional newsroom."
    },
    "super_hab_periodista_1": {
      "titulo": "Cited as the Source",
      "desc": "Major international newspapers pick up your investigation and cite your handle as the primary source."
    },
    "super_hab_cryptobro_0": {
      "titulo": "Saw It Coming",
      "desc": "You predicted an asset would 10x before anyone cared. It rockets straight up. Your credibility reaches legend status."
    },
    "super_hab_cryptobro_1": {
      "titulo": "My Call Exploded",
      "desc": "A token you publicly vouched for explodes overnight. Followers celebrate you as an infallible market wizard."
    },
    "super_hab_gamer_0": {
      "titulo": "Mega Raid Received",
      "desc": "A streaming titan with 80k viewers raids your channel at the end of their broadcast. Your chat moves at lightspeed."
    },
    "super_hab_gamer_1": {
      "titulo": "Leaked It Before Anyone Else",
      "desc": "You accurately leak the announcement date of the next-gen console. The gaming internet hails you as the ultimate insider."
    },
    "super_hab_conspiranoico_0": {
      "titulo": "I Was Right All Along",
      "desc": "A theory you championed for months is validated by newly declassified documents. Your skeptics are stunned."
    },
    "super_hab_conspiranoico_1": {
      "titulo": "Connected the Dots First",
      "desc": "Your thread connects the pieces of a major real-world scandal weeks before mainstream media catches on."
    },
    "super_hab_influencer_0": {
      "titulo": "Exclusive Promo Code",
      "desc": "A global luxury brand issues you an exclusive promo code with uncapped creator commissions. It sells out in hours."
    },
    "super_hab_influencer_1": {
      "titulo": "VIP Red Carpet Invite",
      "desc": "You receive a VIP invitation to Paris Fashion Week. Your live front-row coverage dominates lifestyle feeds."
    },
    "super_hab_onlyfans_0": {
      "titulo": "A Big Voice Defended Me",
      "desc": "During a moral crusade against you, a respected cultural icon publicly defends your work ethic and bodily autonomy."
    },
    "super_hab_onlyfans_1": {
      "titulo": "The Streisand Effect",
      "desc": "Puritan critics try to get your account banned, and the controversy causes your subscriber numbers to explode 5x."
    },
    "super_hab_techie_0": {
      "titulo": "Product-Market Fit",
      "desc": "You ship an update that goes viral on Hacker News and Product Hunt. Servers melt under record signups."
    },
    "super_hab_techie_1": {
      "titulo": "Backed by a Legend VC",
      "desc": "A legendary Silicon Valley investor quote-tweets your architecture breakdown calling you a generational founder."
    },
    "super_hab_podcaster_0": {
      "titulo": "The Blockbuster Interview",
      "desc": "You land an exclusive 3-hour sit-down with the most elusive cultural figure in the country. Streaming records broken."
    },
    "super_hab_podcaster_1": {
      "titulo": "The Runaway Clip",
      "desc": "A 40-second soundbite from your show breaks out of your niche and becomes an inescapable global meme."
    }
  },
  "ja": {
    "crypto_halving": {
      "titulo": "半減期狂騒曲",
      "desc": "仮想通貨界最大のイベント「半減期」がリアルタイムで進行中。フォロワー全員があなたの価格予想を注視している。",
      "opciones": [
        {
          "texto": "根拠のない暴騰煽りは避け、堅実な上昇を予想する。",
          "tweet": "半減期完了。過去のデータを見る限りここからが仕込み時。極端な煽りはしないが、数字は嘘をつかない。",
          "resultado": "穏やかなフォロワー増加。相場の行方に関わらず信頼を維持。"
        },
        {
          "texto": "過去の市場サイクルを徹底分析し、過熱感に警鐘を鳴らす。",
          "tweet": "【半減期徹底解説】2016年と2020年の推移比較。投資は自己責任、飛びつく前にまず深呼吸して読もう 🧵👇",
          "resultado": "業界の大手インフルエンサーから引用され、アナリストとしての格が上がる。"
        },
        {
          "texto": "「今月中に億り人確定」と煽り、ハイレバ取引所のアフィリンクを貼る。",
          "tweet": "絶対に今すぐ買え！月末までに500k到達確実。今乗らない奴は一生養分。50倍レバのアフィリンク貼っとくぞ 🚀🚀",
          "resultado": "その後の相場下落で大炎上。「信者を嵌め込んだ詐欺師」の烙印を押される。"
        }
      ]
    },
    "crypto_startup": {
      "titulo": "アドバイザー就任オファー",
      "desc": "新興Web3プロジェクトから、独自トークン付与を条件に公式アドバイザー就任の打診が届いた。",
      "opciones": [
        {
          "texto": "PR案件であることを公言した上で、限定的に引き受ける。",
          "tweet": "【PR告知】アドバイザー就任。これは広告宣伝としての参画であり、投資助言ではありません。そこを理解した上でよろしく 🤝",
          "resultado": "信用を切り売りしすぎずに現金を確保。一部からは冷ややかな目も。"
        },
        {
          "texto": "コードや運営陣の怪しい点を見抜き、キッパリ辞退する。",
          "tweet": "金で買えないものもある。フォロワーへの誠実さを捨ててまで安易な案件に乗る気はない。",
          "resultado": "技術的な懸念を暴露。フォロワーから「悪徳案件から救ってくれた」と感謝される。"
        },
        {
          "texto": "裏でトークンを貰いながら「革新的神プロジェクト」と大絶賛する。",
          "tweet": "久々に震えるレベルの本物に出会った。大口が水面下で買い集めてる。メインネット稼働前に仕込むべし。",
          "resultado": "開発陣がトークンを売り逃げ。共犯者として袋叩きに遭う。"
        }
      ]
    },
    "crypto_hackeo": {
      "titulo": "取引所ハッキング騒動",
      "desc": "大手暗号資産取引所の出金停止とハッキング疑惑がタイムラインを駆け巡っている。",
      "opciones": [
        {
          "texto": "公式発表のみを引用し、冷静かつ中立に速報を流す。",
          "tweet": "現在一部で出金遅延が報告されています。憶測でのパニック売却は避け、公式の発表を待ちましょう。",
          "resultado": "冷静な報道姿勢が評価され、落ち着いたトレーダーから支持される。"
        },
        {
          "texto": "即座にハードウェアウォレットへの資産退避マニュアルを投稿する。",
          "tweet": "自分の鍵を持たない資産は自分のものじゃない。今すぐコールドウォレットに資産を逃がす手順まとめ 🧵",
          "resultado": "数千人が即ブックマーク。混乱の中での頼れる英雄となる。"
        },
        {
          "texto": "「ただの煽り（FUD）だ」と一蹴し、資産を預けたままにするよう呼びかける。",
          "tweet": "大口の振り落としにビビるな。完全なデマだから資金はそのままにしてガチホ一択。",
          "resultado": "直後に取引所が完全破綻。信じたフォロワーが破産し、大恨みを買う。"
        }
      ]
    },
    "crypto_rugpull": {
      "titulo": "ラグプル（資金持ち逃げ）の代償",
      "desc": "先週あなたが好意的に紹介したDeFi銘柄の開発陣が、深夜に全資金を持ち逃げした。",
      "opciones": [
        {
          "texto": "言い訳を一切せず、自分の調査不足を公に謝罪する。",
          "tweet": "紹介したプロジェクトが資金を持ち逃げしました。精査を怠った私の責任です。本当に申し訳ありませんでした。",
          "resultado": "批判は浴びるが、逃げずに頭を下げたことで長期的には信頼を残す。"
        },
        {
          "texto": "自腹を切って被害者救済ファンドを立ち上げる。",
          "tweet": "被害を受けたフォロワーのため、自分のポケットマネーから補填プールを作ります。少し時間をください。",
          "resultado": "大金を失うが、コミュニティからの忠誠心は神格化レベルに。"
        },
        {
          "texto": "過去ツイートを全消しし、「アカウントが乗っ取られていた」と言い張る。",
          "tweet": "先週アカウントが不正アクセスされていました。心当たりのない投稿はすべて私の発言ではありません。",
          "resultado": "魚拓を取られて嘘が即座にバレる。界隈の語り草となる伝説の炎上。"
        }
      ]
    },
    "crypto_conferencia": {
      "titulo": "国際カンファレンスの登壇",
      "desc": "ドバイで開催される世界最大級のブロックチェーンEXPOのメインステージ登壇を依頼された。",
      "opciones": [
        {
          "texto": "現状の課題と実用化へのハードルを語る誠実なスピーチをする。",
          "tweet": "登壇終了。安易な価格煽りではなく、UXの課題とマスアダプションへの道筋を語ってきました。",
          "resultado": "現場の開発者や機関投資家から高い評価を受け、人脈が広がる。"
        },
        {
          "texto": "「法定通貨の終焉」を高らかに叫ぶアグレッシブな演説で会場を沸かせる。",
          "tweet": "既存の金融システムは崩壊寸前。未来はコードと分散型プロトコルにある。全員ついてこい！",
          "resultado": "切り抜き動画がバズり、信奉者が急増する。"
        },
        {
          "texto": "遅刻してステージに上がり、草コインを連呼して司会者と口論になる。",
          "tweet": "スーツ着たエリート連中の前で本音をぶちまけてやった。リアルな界隈は壇上にはない。",
          "resultado": "ネット上で嘲笑の的になり、まともなスポンサーがすべて撤退。"
        }
      ]
    },
    "of_collab": {
      "titulo": "超大物コラボの打診",
      "desc": "同ジャンルのトップクリエイターから、合同でのグラビア撮影とコラボ配信を持ちかけられた。",
      "opciones": [
        {
          "texto": "自然体で親しみやすいオフショットをチラ見せする。",
          "tweet": "今日はスタジオで楽しい撮影でした✨ 本編は夜にファンクラブ限定で公開するね。",
          "resultado": "相手のファン層が自然に流入し、フォロワーが大幅増。"
        },
        {
          "texto": "世界観とライティングに徹底的にこだわった芸術的写真を投稿する。",
          "tweet": "お互いのこだわりを詰め込んだ特別な作品が撮れました。妥協ゼロの美しさを見てほしい。",
          "resultado": "クオリティの高さが絶賛され、高額プランの加入者が急増。"
        },
        {
          "texto": "規約ギリギリの過激な告知でTLの視線を独占する。",
          "tweet": "ちょっとやりすぎちゃったかも…😈 消される前に見に来てね。",
          "resultado": "通報が殺到してシャドウバンを食らうが、瞬間風速で売上は爆発。"
        }
      ]
    },
    "of_hater": {
      "titulo": "執拗な説教アンチ",
      "desc": "毎日すべての投稿に道徳を振りかざして説教してくる有名アンチが粘着している。",
      "opciones": [
        {
          "texto": "無言でブロックし、自分の機嫌を取ることに集中する。",
          "tweet": "ブロック完了、平常運転！ 自分の大切な時間をアンチなんかに1秒も使わない💅",
          "resultado": "余計な火種を作らず、平穏なタイムラインを維持。"
        },
        {
          "texto": "相手を無視しつつ、リプ欄でファンに軽くいじらせる。",
          "tweet": "私のこと嫌いって言いながら、毎回秒速で通知欄見に来てくれるの可愛すぎるでしょ🙃",
          "resultado": "ファンが一致団結して味方になり、コミュニティの結束が強化。"
        },
        {
          "texto": "過去にそのアンチが送ってきた気持ち悪い裏アカDMをスクショして晒す。",
          "tweet": "偉そうに説教してるこの人、3ヶ月前に私に送ってきたDMこれですからね🙂 恥を知りなさい。",
          "resultado": "アンチを社会的に抹殺するが、ドロ沼のレスバにTLが荒れ狂う。"
        }
      ]
    },
    "of_regalo": {
      "titulo": "謎の高額プレゼント",
      "desc": "匿名ファンから私書箱宛てに、最新の超高級撮影機材一式が送られてきた。",
      "opciones": [
        {
          "texto": "トラブル防止のため、受け取りを拒否して返送する。",
          "tweet": "見返りを求められるかもしれない物は受け取らない主義。心の平穏は機材より大切。",
          "resultado": "プロとしての健全な境界線を守り、精神的負担を回避。"
        },
        {
          "texto": "お礼を述べつつ、「今後はプレゼント企画以外は辞退」と明記する。",
          "tweet": "素晴らしい機材をありがとう！今後はルールを統一するため私書箱への直接送付はお控えください🙏",
          "resultado": "角を立てずにルールを周知。ファンからも分別のある対応と称賛される。"
        },
        {
          "texto": "機材を使って匂わせ投稿をし、送り主にお礼DMを送る。",
          "tweet": "素敵なプレゼントで撮った写真…送り主さん、見てくれてるかな？😉",
          "resultado": "ストーカー化して自宅特定スキャンダルへと発展する。"
        }
      ]
    },
    "of_filtracion": {
      "titulo": "有料コンテンツの流出",
      "desc": "ファンクラブ限定の有料動画が、某掲示板や海外違法サイトに無断転載された。",
      "opciones": [
        {
          "texto": "弁護士を通じて水面下で粛々と削除申請と開示請求を行う。",
          "tweet": "法的措置を進めています。クリエイターの権利を侵害する行為には厳正に対処します。",
          "resultado": "騒ぎを最小限に抑えつつ、確実に加害者を追い詰める。"
        },
        {
          "texto": "創作物を奪われる悲しさとクリエイター支援の意義を誠実に語る。",
          "tweet": "無料で見られる裏で、クリエイターがどれだけ傷ついているか知ってほしい。正規の応援をお願いします。",
          "resultado": "ファンの同情と応援が爆発し、公式会員への乗り換えが相次ぐ。"
        },
        {
          "texto": "「無料の宣伝乙！」と強がり、値上げを発表して話題に変える。",
          "tweet": "勝手に宣伝してくれてありがとう！需要ありすぎだから今夜から会費値上げしまーす💅",
          "resultado": "メンタルの強さに驚かれるが、流出を気にするファンとの間に溝も。"
        }
      ]
    },
    "of_marca_grande": {
      "titulo": "大手コスメからの大型オファー",
      "desc": "誰もが知る有名化粧品メーカーから、年間の公式アンバサダー契約の打診が舞い込んだ。",
      "opciones": [
        {
          "texto": "「過度な表現制限をしない」条件をつけて契約を結ぶ。",
          "tweet": "大手ブランド様との提携が決定しました。私らしさを失わずに発信していきます✨",
          "resultado": "アングラから表舞台への進出を果たし、社会的ステータスが向上。"
        },
        {
          "texto": "「過去ツイートを全部消せ」という条件を拒否し、蹴る。",
          "tweet": "過去の自分を否定してまで大きな看板にすがる気はありません。私は私の道を行く。",
          "resultado": "ブレない生き方に熱狂的な支持が集まり、個人課金が急増。"
        },
        {
          "texto": "指示通りに過去の過激投稿を全消しし、清楚系にキャラ変する。",
          "tweet": "これからはエレガントで上質な女性を目指します✨ 新しい私を応援してね！",
          "resultado": "古参ファンが「魂を売った」と激怒し、大量離脱。"
        }
      ]
    },
    "life_viaje": {
      "titulo": "高級リゾートのご招待",
      "desc": "某超高級ヴィラから、宿泊無料と引き換えにPR投稿を行う案件が届いた。",
      "opciones": [
        {
          "texto": "プールサイドでシャンパンを持つ王道の映え写真を投稿する。",
          "tweet": "最高の週末✨ いつも頑張っている自分へのご褒美ステイ。スタッフの皆様に感謝。",
          "resultado": "定番のインフルエンサー投稿。ファンから安定した憧れの反応。"
        },
        {
          "texto": "ホテルの魅力だけでなく、周辺のローカルな隠れ家スポットも紹介する。",
          "tweet": "ホテルも最高ですが、徒歩5分の裏路地にあるカフェが感動的でした。詳しい旅プランはこちら 🧵",
          "resultado": "実用性の高さがバズり、旅系アカウントとしても重宝される。"
        },
        {
          "texto": "部屋のエアコンの効きが悪いと公開クレームをつけてVIP対応を迫る。",
          "tweet": "一泊20万も取ってこの空調はないんじゃない？ 正直ガッカリです。対応求む。",
          "resultado": "「案件の分際で傲慢すぎる」と引用RTで袋叩きに遭う。"
        }
      ]
    },
    "life_morning": {
      "titulo": "完璧すぎるモーニングルーティン",
      "desc": "「朝5時起きルーティン」の動画が大バズりしたが、「ワーママを馬鹿にしている」とリプ欄が荒れ始めた。",
      "opciones": [
        {
          "texto": "批判には一切触れず、朝のハーブティーの写真を優雅に投稿する。",
          "tweet": "今朝も心静かにハーブティーをいただきます🌿 穏やかな一日を。",
          "resultado": "スルー力で雑音を流し、ブランドイメージを守る。"
        },
        {
          "texto": "「人それぞれの生活リズムがあっていい」と寄り添う声明を出す。",
          "tweet": "朝型が偉いわけではありません。それぞれのライフスタイルを尊重し合える世界が素敵ですよね✨",
          "resultado": "大人の余裕ある回答で批判派を沈黙させ、好感度アップ。"
        },
        {
          "texto": "「努力できない人の僻み乙」と上から目線で煽り返す。",
          "tweet": "時間は全員に平等。文句を言う暇があるなら10分早く起きればいいのに。",
          "resultado": "「特権階級の嫌味」として大炎上。主婦層を完全に敵に回す。"
        }
      ]
    },
    "life_producto": {
      "titulo": "PR美容液の肌トラブル騒動",
      "desc": "あなたが「神コスメ」と絶賛した美容液を使ったフォロワーから、肌荒れの苦情が届き始めた。",
      "opciones": [
        {
          "texto": "「体質による個人差があります」と注意喚起を出し、受診を促す。",
          "tweet": "お肌の状態は人それぞれです。異常を感じた方はすぐに使用を中止し、皮膚科にご相談ください。",
          "resultado": "無難なリスク管理だが、被害を訴えるファンからは不満の声も。"
        },
        {
          "texto": "真摯に謝罪し、メーカー側に成分の再調査を公開要求する。",
          "tweet": "フォロワーの皆様の健康が第一です。メーカーに確認が取れるまで本商品の紹介を全面中止します。",
          "resultado": "誠実な企業姿勢へのこだわりが絶賛され、圧倒的な信頼を獲得。"
        },
        {
          "texto": "批判的なコメントを即座にブロック・削除し、絶賛コメントだけ残す。",
          "tweet": "使ってくれたみんなから「肌ツヤが出た」って嬉しい報告がたくさん届いてます💖",
          "resultado": "言論統制が告発され、ステマ疑惑としてまとめサイトの餌食に。"
        }
      ]
    },
    "life_mascara_cae": {
      "titulo": "すっぴん無加工写真の流出",
      "desc": "空港でボロボロの部屋着で猫背になっている無加工の盗撮写真がネットに晒された。",
      "opciones": [
        {
          "texto": "自虐ネタに変えて「人間だもの」と笑い飛ばす。",
          "tweet": "完全にオフモードの私で草。インフルエンサーだってフライト後はこうなります😂",
          "resultado": "親近感が湧くと大好評。ピンチをチャンスに変える。"
        },
        {
          "texto": "完璧を演じ続けるプレッシャーとSNS疲れについて本音を吐露する。",
          "tweet": "常に完璧でいなければならない毎日に息が詰まっていました。素の自分も受け入れていきたいです。",
          "resultado": "同情と共感の嵐。飾らない自然体キャラへと路線変更に成功。"
        },
        {
          "texto": "「あれは現代社会のルッキズムを暴く社会実験だった」と強弁する。",
          "tweet": "見た目ばかり気にするネット社会へのアンチテーゼとしてあえて撮らせた演出です。",
          "resultado": "往生際の悪さにドン引きされ、ネット中の笑い者に。"
        }
      ]
    },
    "life_producto_milagro": {
      "titulo": "飲むだけ激痩せサプリの誘惑",
      "desc": "「飲むだけで1週間で5キロ減」という怪しい海外ダイエット茶から、超高額な報酬が提示された。",
      "opciones": [
        {
          "texto": "信用に関わるため、どれだけ金を積まれても断固拒否する。",
          "tweet": "健康に近道はありません。バランスの良い食事と睡眠が一番の美容法です✨",
          "resultado": "健康志向のフォロワーから「信頼できるインフルエンサー」と再評価。"
        },
        {
          "texto": "「適度な運動と合わせて」と小さく注釈を入れて案件をこなす。",
          "tweet": "最近取り入れているお茶🌿 ※適切な食事と運動との併用をおすすめします（PR）",
          "resultado": "金は手に入るが、古参フォロワーから失望の溜息。"
        },
        {
          "texto": "ビフォーアフターを加工して「奇跡のサプリ」と大々的に売り込む。",
          "tweet": "ガチで人生変わった！食事制限なしでマイナス5キロ！今なら特別リンクから買えます！",
          "resultado": "薬機法違反疑惑でコミュニティノートがつき、大炎上。"
        }
      ]
    },
    "poli_debate": {
      "titulo": "党首討論の夜",
      "desc": "国政を左右する大注目の党首討論会が生中継されている。",
      "opciones": [
        {
          "texto": "自陣営の公約をブレずに分かりやすく反復してアピールする。",
          "tweet": "明確なリーダーシップと具体的な政策。対立陣営の曖昧な批判とは覚悟が違う。",
          "resultado": "味方支持層を鼓舞し、団結を強める安定のムーブ。"
        },
        {
          "texto": "数字と一次資料を用いて相手陣営の予算案の矛盾を突く。",
          "tweet": "相手候補の財源案を試算：現実味ゼロの根拠と歳出の破綻をデータで解説します 🧵",
          "resultado": "論理的な切れ味の鋭さで、無党派層や記者からの評価を獲得。"
        },
        {
          "texto": "対立候補の顔写真や喋り方を嘲笑し、人格攻撃を連射する。",
          "tweet": "あの汗のかき方見てみろよw 嘘八百並べて恥ずかしくないのか売国奴どもが。",
          "resultado": "コアな過激派は大喜びするが、一般層から強烈に嫌悪される。"
        }
      ]
    },
    "poli_escrache": {
      "titulo": "敵対政治家の密会スキャンダル",
      "desc": "敵対陣営の大物議員が高級料亭で密談している写真がネットに流出した。",
      "opciones": [
        {
          "texto": "余計な主観を交えず、写真のみを引用リポストする。",
          "tweet": "RT 📸",
          "resultado": "手を汚さずに拡散に貢献し、リスクを避ける。"
        },
        {
          "texto": "庶民感覚の欠如と公約違反の構造的な問題を指摘する。",
          "tweet": "庶民に増税と我慢を強いておきながら、裏では一晩数十万の会食。これが彼らの本質です。",
          "resultado": "的確な政治批評として大きく拡散される。"
        },
        {
          "texto": "「官房機密費が使われたに違いない」と証拠なしに断言する。",
          "tweet": "確定情報！ 税金から数百万が裏金として支払われた！ 明日逮捕者が出るぞ！",
          "resultado": "虚偽情報であることが即座に判明。信用失墜と法的措置の危機。"
        }
      ]
    },
    "poli_meme": {
      "titulo": "選挙コラ画像の拡散",
      "desc": "対立候補の失言を風刺した強烈な動画ミームがトレンド入りしている。",
      "opciones": [
        {
          "texto": "笑い泣きの絵文字だけをつけて拡散する。",
          "tweet": "😂👏",
          "resultado": "政治色を抑えつつ、ライト層にも笑いとして拡散。"
        },
        {
          "texto": "なぜこの風刺が人々の共感を呼んでいるのか背景を解説する。",
          "tweet": "風刺がここまでバズるのは、国民の怒りが限界に達している証拠。政治不信の象徴です。",
          "resultado": "インテリジェントな分析として言論界隈で引用される。"
        },
        {
          "texto": "相手の容姿や出自を侮辱する差別的なキャプションをつけて拡散する。",
          "tweet": "この顔見てみろよw 遺伝子レベルで嘘つきの顔つきだろ。",
          "resultado": "プラットフォーム規約のヘイトスピーチに該当し、アカウントに傷がつく。"
        }
      ]
    },
    "poli_fake_news_propia": {
      "titulo": "未確認の特大タレコミ",
      "desc": "敵対陣営に致命傷を与えられるスキャンダル情報がDMに届いたが、証拠の裏付けが弱い。",
      "opciones": [
        {
          "texto": "裏が取れるまで拡散を控え、慎重に事実確認を行う。",
          "tweet": "様々な噂が飛び交っていますが、確定的なファクトが揃うまで軽はずみな言及は控えます。",
          "resultado": "デマ拡散の罠を回避。賢明な判断が賞賛される。"
        },
        {
          "texto": "「火のない所に煙は立たない」と断定的な言い回しで投下する。",
          "tweet": "細部は違えど、本質的な腐敗は明白。これが本当なら政権交代レベルの事件だ。",
          "resultado": "完全な捏造文書と判明。敵陣営から猛烈なカウンターを食らう。"
        },
        {
          "texto": "誤報だと気づいた瞬間に、誰よりも早く自ら訂正を出す。",
          "tweet": "【訂正】先ほどの文書は真偽不明の疑いが生じたため削除しました。正確な情報発信に努めます。",
          "resultado": "潔い訂正姿勢が逆に信頼を生み、被害を最小限に食い止める。"
        }
      ]
    },
    "poli_debate_publico_tv": {
      "titulo": "報道番組の生出演オファー",
      "desc": "全国ネットの討論番組から、ネット世論を代表する論客としての出演依頼が届いた。",
      "opciones": [
        {
          "texto": "感情論を排し、データと論理で武装して番組に臨む。",
          "tweet": "今夜の生放送に出演します。ネットの声を冷静かつ客観的にお伝えしてきます。",
          "resultado": "テレビ視聴者にも伝わる大人の議論を展開し、全国区の知名度に。"
        },
        {
          "texto": "いつものTwitterの攻撃的なノリをそのままスタジオに持ち込む。",
          "tweet": "テレビの偏向報道をぶっ壊してくる。生放送で全員論破してやるから見てろよ。",
          "resultado": "スタジオが凍りつき、熱狂的支持者以外からはドン引きされる。"
        },
        {
          "texto": "生放送中に激昂して司会者を罵倒し、途中退場する。",
          "tweet": "司会が台本通りの誘導尋問しかしないからスタジオを出てやった。偏向メディアに鉄槌を！",
          "resultado": "ネットミームとして消費され、まともな論壇から永久追放。"
        }
      ]
    },
    "fut_pronostico": {
      "titulo": "伝統の一戦のスコア予想",
      "desc": "年間最大のダービーマッチキックオフ直前。フォロワーから試合予想を迫られている。",
      "opciones": [
        {
          "texto": "泥臭い1-0の辛勝を予想し、選手たちの気迫を信じる。",
          "tweet": "ダービーは内容じゃない、結果がすべて。1-0の泥臭い勝利を信じて最後まで声枯らすぞ。",
          "resultado": "サポ仲間の共感を呼び、スタジアムの士気を高める。"
        },
        {
          "texto": "相手の戦術的弱点とフォーメーションの噛み合わせを分析する。",
          "tweet": "【ダービー戦術展望】相手の右SB裏のスペース管理とハイプレス回避が勝負の分かれ目 🧵",
          "resultado": "戦術クラスタからも納得の唸り声。サッカーを見る目が認められる。"
        },
        {
          "texto": "「相手はビビってるから5-0で圧勝」と挑発しまくる。",
          "tweet": "こんな雑魚相手に負けるわけない。前半で3点取って公開処刑してやるよw",
          "resultado": "試合に敗北。一生擦られる黒歴史ツイートとして魚拓が残る。"
        }
      ]
    },
    "fut_partidario": {
      "titulo": "御用サポーター疑惑",
      "desc": "ライバル派閥のアカウントから「フロントから金をもらって擁護している」と告発された。",
      "opciones": [
        {
          "texto": "くだらない中傷は無視し、下部組織のユースの試合結果をツイートする。",
          "tweet": "U-18が3-1で快勝！次世代のホープたちが順調に育ってて週末から元気を貰えた。",
          "resultado": "クラブへの純粋な愛を示し、不毛な内紛を回避。"
        },
        {
          "texto": "20年分の年間シートとファンクラブ会員証の写真を叩きつける。",
          "tweet": "J2の暗黒期から雨の日もゴール裏に立ち続けてきた。お前らに忠誠心を疑われる筋合いはない。",
          "resultado": "筋金入りのガチサポとしての威厳を見せつけ、相手を完全論破。"
        },
        {
          "texto": "相手こそ他クラブのスパイだと根拠のない陰謀論で反撃する。",
          "tweet": "あいつが騒ぎ立てるタイミング、いつも相手クラブに有利なんだよな。どっから金出てるか調査中。",
          "resultado": "サポーター間の泥沼の内ゲバに発展し、クラブの雰囲気が最悪に。"
        }
      ]
    },
    "fut_leyenda": {
      "titulo": "宿敵レジェンドの引退",
      "desc": "長年自チームを苦しめ続けたライバルクラブの英雄が、現役引退を発表した。",
      "opciones": [
        {
          "texto": "敵ながら長年の激闘に心からの敬意を表して労う。",
          "tweet": "何度あなたのゴールに泣かされたことか。最高のライバルでした。現役生活お疲れ様でした。",
          "resultado": "敵味方を超えたスポーツマンシップに、両サポから温かい拍手。"
        },
        {
          "texto": "彼との名勝負の歴史を振り返る長文スレッドを投稿する。",
          "tweet": "【追悼ではなく敬意を】あのロスタイムのFK、ゴール裏から見ていた絶望と美しさの記録 🧵",
          "resultado": "サッカーを愛する全てのファンの胸を打つ名文として拡散。"
        },
        {
          "texto": "大舞台でのミスや敗退を引き合いに出して最後まで嘲笑する。",
          "tweet": "結局代表ではノータイトルw 肝心なところでPK外す過大評価選手乙でした〜。",
          "resultado": "「リスペクトがなさすぎる」とサッカーファン全員から軽蔑される。"
        }
      ]
    },
    "fut_hinchada_violenta": {
      "titulo": "スタジアム周辺の暴動",
      "desc": "試合終了後、スタジアムの外で過激派サポーター同士の小競り合いが発生した。",
      "opciones": [
        {
          "texto": "暴力行為をいかなる理由があろうと断固として非難する。",
          "tweet": "サッカーは暴力のはけ口じゃない。愛するエンブレムを汚す連中はサポーター失格だし出禁にしろ。",
          "resultado": "毅然とした態度が健全なサポーター層から絶大な支持を集める。"
        },
        {
          "texto": "「ごく一部の人間が騒いでいるだけ」と事態を矮小化する。",
          "tweet": "大半のサポは平和に帰宅してます。メディアは大袈裟に切り取って騒ぐのをやめてほしい。",
          "resultado": "身内擁護と見なされ、世論から批判を浴びる。"
        },
        {
          "texto": "「先に挑発してきたのは相手だ」と暴力を正当化する。",
          "tweet": "縄張りに土足で踏み込んできたんだからやり返されて当然。やられたらやり返すのが筋。",
          "resultado": "治安当局やプラットフォームから危険アカウント指定を受ける。"
        }
      ]
    },
    "fut_transferencia_rumor": {
      "titulo": "エースの宿敵移籍の噂",
      "desc": "チームの絶対的エースが、よりによって宿敵クラブへ電撃移籍するという飛ばし記事が出た。",
      "opciones": [
        {
          "texto": "公式発表が出るまではメディアの飛ばしに踊らされないよう呼びかける。",
          "tweet": "移籍期間の怪しい噂に一喜一憂しない。公式のアナウンスがあるまで選手を信じて待とう。",
          "resultado": "動揺するタイムラインを落ち着かせる大黒柱となる。"
        },
        {
          "texto": "事実確認もせず「裏切り者」と決めつけてユニフォームを燃やす。",
          "tweet": "もし宿敵に行ったら人間として軽蔑する。お前のユニはもうゴミ箱に捨てた。",
          "resultado": "直後に残留と契約延長が発表され、一生モノの恥をかく。"
        },
        {
          "texto": "「内部関係者から聞いたがすでに合意済み」と嘘の情報を流す。",
          "tweet": "【独自情報】フロントの知人から確認。違約金満額でサイン済み。来週発表されます。",
          "resultado": "完全な誤報と判明。情報通を気取ったペテン師として失脚。"
        }
      ]
    },
    "hum_plagio": {
      "titulo": "ネタの丸パクリ被害",
      "desc": "フォロワー500万人の大企業公式アカが、あなたの渾身のネタツイを無断転載した。",
      "opciones": [
        {
          "texto": "引用RTでユーモアを交えつつ、やんわりとクレジット表記を求める。",
          "tweet": "気に入ってもらえて光栄ですが、引用元も書いてもらえると泣いて喜びます🤝",
          "resultado": "大人の対応が共感を呼び、公式側が謝罪して引用表記を追加。"
        },
        {
          "texto": "企業の無能なSNS運用担当者を皮肉るキレキレのネタをぶつける。",
          "tweet": "高い給料もらって個人のツイート右クリック保存して仕事した気になってるの羨ましすぎる😂",
          "resultado": "強烈なカウンターが数万RTされ、企業公式を完全公開処刑。"
        },
        {
          "texto": "フォロワーを扇動して企業アカのリプ欄を荒らし尽くす。",
          "tweet": "みんなで凸って謝罪するまでリプ欄埋め尽くそうぜ！総攻撃開始！！",
          "resultado": "嫌がらせの首謀者として通報され、アカウント停止危機に。"
        }
      ]
    },
    "hum_trend": {
      "titulo": "爆発的バズトレンドへの便乗",
      "desc": "ネット全体を席巻する謎のミーム構文がトレンド1位を独走している。",
      "opciones": [
        {
          "texto": "構文のルールを逆手に取った、誰も思いつかない秀逸なオチをつける。",
          "tweet": "この構文を使いこなそうとした結果、一番大事なことを忘れてしまった私の図。",
          "resultado": "天才的な発想力と賞賛され、トレンド内でぶっちぎりのRT数を記録。"
        },
        {
          "texto": "なぜこのミームがここまで流行るのか、メタ的な風刺ネタにする。",
          "tweet": "アルゴリズムの深淵が生み出した集団幻覚の観察記録 🧵",
          "resultado": "ネット中毒者たちのツボに刺さり、濃いファンを獲得。"
        },
        {
          "texto": "不謹慎な時事ニュースや有名人の訃報と無理やり絡めてネタにする。",
          "tweet": "このタイミングでこのネタぶっ込むの俺くらいだろw 反応よろしくw",
          "resultado": "ドン引きされて大炎上。スポンサーが全員逃げ出す。"
        }
      ]
    },
    "hum_standup": {
      "titulo": "リアルお笑いライブへの出演",
      "desc": "ネットの話題枠として、都内の劇場で開催されるお笑いライブへの出演オファーが届いた。",
      "opciones": [
        {
          "texto": "ネットのノリを自虐しつつ、等身大の謙虚なネタを披露する。",
          "tweet": "リアルのお笑いライブ出てきました。生卵投げられなかっただけで大勝利です。",
          "resultado": "愛嬌のあるキャラクターが観客にウケて大成功。"
        },
        {
          "texto": "劇場向けに磨き上げたオリジナルのフリップ芸で爆笑をさらう。",
          "tweet": "劇場満員御礼！ネット民の底力見せてきました。笑ってくれたみんなありがとう🔥",
          "resultado": "ネット発の芸人・クリエイターとしての評価を確立。"
        },
        {
          "texto": "舞台上で大スベリし、ネット上で「観客のレベルが低すぎた」と愚痴る。",
          "tweet": "劇場に来る客ってなんであんなに笑いのセンス古いの？ ネットの笑いについてこれてない。",
          "resultado": "見苦しい言い訳としてお笑い界隈全体から失笑される。"
        }
      ]
    },
    "hum_censura": {
      "titulo": "AIによる誤BAN",
      "desc": "何気ないギャグツイートが、プラットフォームの自動検閲AIに規約違反と判定され削除された。",
      "opciones": [
        {
          "texto": "異議申し立てフォームから冷静に審査請求を送信する。",
          "tweet": "AIにツッコミが通じず一時削除されました。審査請求中ですので少々お待ちを。",
          "resultado": "48時間後に無事復活。何事もなかったかのように日常へ。"
        },
        {
          "texto": "検閲AIのポンコツな判定理由をスクショして大喜利ネタにする。",
          "tweet": "「猫が画面越しに睨んでいる」だけで暴力行為判定されたの面白すぎるだろ。",
          "resultado": "不条理なAI判定ネタとして大バズりし、怪我の功名に。"
        },
        {
          "texto": "「国家権力による言論弾圧だ」と陰謀論めいた長文で騒ぎ立てる。",
          "tweet": "真実を暴く私のユーモアが支配層にとって都合が悪かったようです。言論統制の始まりだ。",
          "resultado": "ただのシステムエラーに大騒ぎする痛い人扱いされる。"
        }
      ]
    },
    "hum_colaboracion_rival": {
      "titulo": "ライバルネタ垢からの共闘提案",
      "desc": "いつもタイムラインでプロレス（煽り合い）をしているライバルネタ垢から、共同企画の誘いがあった。",
      "opciones": [
        {
          "texto": "快諾し、事前のプロレスを回収する最高の大喜利合戦を仕掛ける。",
          "tweet": "宿敵との停戦協定が結ばれました。今夜21時、タイムラインを揺るがす共同企画やります。",
          "resultado": "お互いのファンが大熱狂。最高のエンタメコラボに。"
        },
        {
          "texto": "「馴れ合いはつまらない」と断り、ライバル関係を維持する。",
          "tweet": "馴れ合ったら終わり。お前とはタイムラインの戦場で殴り合い続けるのが一番面白いんだよ。",
          "resultado": "硬派な職人魂にフォロワーが惚れ直す。"
        },
        {
          "texto": "企画に乗ったフリをして、相手が裏で温めていたネタ案を先出しして奪う。",
          "tweet": "思いついちゃったから先に投稿しまーすw 良いアイデアをありがとうな！",
          "resultado": "業界内での信用がゼロになり、他のクリエイターから総スカン。"
        }
      ]
    },
    "per_filtracion": {
      "titulo": "政財界の匿名内部告発",
      "desc": "政府機関の不正な資金流用を示す極秘PDFが、匿名の暗号化メールで届いた。",
      "opciones": [
        {
          "texto": "「現在裏取り中」と注記をつけ、確認が取れた部分から慎重に報じる。",
          "tweet": "【独自】公金支出に関する内部告発資料を入手。現在複数の関係者に事実関係を確認中 🧵",
          "resultado": "慎重で正確な報道姿勢がジャーナリストとしての信用を不動のものにする。"
        },
        {
          "texto": "数日かけて公文書データベースと照合し、完璧な調査報道を公開する。",
          "tweet": "【特報】3日間の公文書照合により確認。総額数億円規模の不正会計の実態を全公開します。",
          "resultado": "新聞社も後追いするスクープとなり、調査報道の金字塔を打ち立てる。"
        },
        {
          "texto": "裏取りを一切せず、扇情的な見出しをつけて即座にネットに放流する。",
          "tweet": "内閣総辞職確定！ヤバすぎる極秘文書が流出！消される前に拡散しろ！！",
          "resultado": "巧妙に作られた偽文書であることが判明。名誉毀損で訴訟問題に。"
        }
      ]
    },
    "per_vivo": {
      "titulo": "緊迫するデモ現場の生中継",
      "desc": "都心で数万人規模のデモが暴徒化し、催涙ガスと機動隊が投入される非常事態が発生。",
      "opciones": [
        {
          "texto": "自宅から複数の配信や目撃情報を整理し、安全にまとめ速報を打つ。",
          "tweet": "現場からの複数映像を検証中。現在大通り周辺で機動隊による規制線が敷かれています。",
          "resultado": "信頼できる情報アグリゲーターとして重宝される。"
        },
        {
          "texto": "ヘルメットを被って現場の最前線に飛び込み、緊迫のライブ中継を行う。",
          "tweet": "現場より生中継：催涙ガスの白煙の中、群衆が後退しています。周囲の安全を確認しつつ継続します。",
          "resultado": "命がけのジャーナリズム精神が全国から絶賛される。"
        },
        {
          "texto": "インプレッション稼ぎのために「死傷者多数」と未確認のデマを流す。",
          "tweet": "速報！現場で複数名の死者が出ているとの情報！警察が隠蔽工作を図っています！",
          "resultado": "死傷者はゼロと判明。虚偽情報によるパニック扇動で社会的に抹殺される。"
        }
      ]
    },
    "per_nota_paga": {
      "titulo": "企業タイアップの甘い罠",
      "desc": "問題を起こした大企業から「客観的な業界分析に見せかけた擁護記事」に500万円のオファー。",
      "opciones": [
        {
          "texto": "ジャーナリストの魂はお金で買えないと、即座にオファーを突き返す。",
          "tweet": "報道の独立性は金では売らない。真実を伝えるのが私の仕事です。",
          "resultado": "読者からの圧倒的な信頼を獲得。有料サポーターが急増。"
        },
        {
          "texto": "PR会社が独立系記者を買収しようとする手口そのものを告発記事にする。",
          "tweet": "【告発】PR会社がいかにして記者に金銭を握らせ世論を誘導しているか。送られてきたメール全文 🧵",
          "resultado": "メディア業界を揺るがす大スクープとなり、伝説の記者へ。"
        },
        {
          "texto": "大金に目が眩み、広告表記（PR）を隠して提灯記事を書く。",
          "tweet": "客観的に見て、今回の同社の対応は業界最高峰のガバナンスと評価できます。",
          "resultado": "ステマであることが即座に見抜かれ、記者人生が完全に終わる。"
        }
      ]
    },
    "per_presion_gobierno": {
      "titulo": "権力からの圧力",
      "desc": "政府広報の担当者から、先日の特報スレッドを即時削除するよう強硬な電話がかかってきた。",
      "opciones": [
        {
          "texto": "圧力に一切屈せず、通話記録と圧迫の事実をそのまま報道する。",
          "tweet": "先ほど政府関係者より記事の削除要請がありました。報道の自由を脅かす圧力には一切屈しません。",
          "resultado": "言論の自由を守る闘士として、国内外から連帯の声が集まる。"
        },
        {
          "texto": "法的係争を避けるため、事実関係を保ちつつ表現をより厳密に推敲する。",
          "tweet": "より法的・客観的な正確性を期すため、一部の形容詞を修正しました。事実関係の根幹に揺らぎはありません。",
          "resultado": "大人のリスクヘッジにより、スクープを守りつつ訴訟を回避。"
        },
        {
          "texto": "逮捕や弾圧を恐れてスレッドを丸ごと削除し、逃亡する。",
          "tweet": "体調不良のため、当面の間すべてのSNSの更新を休止いたします。",
          "resultado": "「腰抜け記者」と失望され、フォロワーが一斉に離脱。"
        }
      ]
    },
    "per_error_propio": {
      "titulo": "痛恨の誤報発覚",
      "desc": "あなたの出したスクープ記事の数字に重大な計算ミスがあり、結論が逆転することが判明した。",
      "opciones": [
        {
          "texto": "トップ固定で即座に訂正と謝罪を出し、どこを間違えたか全公開する。",
          "tweet": "【お詫びと訂正】先ほどのデータ集計に誤りがありました。正しくは以下の通りです。心よりお詫び申し上げます。",
          "resultado": "迅速かつ透明な訂正姿勢が、かえってプロとしての信頼を高める。"
        },
        {
          "texto": "元のツイートをサイレント削除し、何事もなかったかのように修正版を再投稿する。",
          "tweet": "最新のデータを反映した修正版のチャートをアップしました。",
          "resultado": "サイレント修正をフォロワーに暴かれ、セコい態度を批判される。"
        },
        {
          "texto": "ミスを認めず、「本質的には間違っていない」と逆ギレして読者とレスバする。",
          "tweet": "枝葉末節の計算ミスを鬼の首取ったように叩く連中がいるが、巨悪の構図は変わらない。",
          "resultado": "最も醜悪なジャーナリストの末路として、同業者からも見放される。"
        }
      ]
    },
    "opi_debate_nacio": {
      "titulo": "国論を二分する大激論",
      "desc": "国家を揺るがす経済危機と法改正をめぐり、タイムライン全体が殺伐とした大論争に突入している。",
      "opciones": [
        {
          "texto": "当たり障りのない平和と対話を呼びかける投稿で逃げる。",
          "tweet": "今こそ冷静な対話が必要です。分断ではなく、国を挙げた英知の結集を望みます。",
          "resultado": "無難だが、誰の心にも刺さらない薄味なツイート。"
        },
        {
          "texto": "過去の歴史的教訓を引いた重厚な連投スレッドで本質を突く。",
          "tweet": "この危機の本質は30年前の構造改革のツケです。過去の失敗例から読み解く現状分析 🧵",
          "resultado": "圧倒的な知性と教養が光り、論客としての地位を確立。"
        },
        {
          "texto": "極端にどちらか一方を罵倒し、国民の憎悪を煽り立てる。",
          "tweet": "こんな政策を支持する連中は売国奴か脳内お花畑だけ。徹底的に叩き潰すべき。",
          "resultado": "瞬間的にインプレッションは稼ぐが、タイムラインの治安を最悪にする。"
        }
      ]
    },
    "opi_cultura": {
      "titulo": "往年の名作を語る",
      "desc": "世界的な名画や文学の古典が、SNSの映画クラスタで熱く語り合われている。",
      "opciones": [
        {
          "texto": "Wikipediaのあらすじを適当にリライトして通ぶる。",
          "tweet": "改めて見返すと、この作品の持つ疎外感と実存主義的テーマは現代にも通じるものがある。",
          "resultado": "薄っぺらさが透けて見えるが、一応形にはなる。"
        },
        {
          "texto": "独自の切り口と鋭い視点で監督の作家性を解剖する批評を書く。",
          "tweet": "なぜこのラストシーンは映画史に残るのか？ 音響演出と色彩設計から読み解く名作の裏側 🧵",
          "resultado": "映画ファンから大絶賛され、カルチャー系論客としての評価が急上昇。"
        },
        {
          "texto": "「昔の映画なんて退屈な駄作」と安易な逆張りで喧嘩を売る。",
          "tweet": "ぶっちゃけ今の映画の方が100倍面白い。これ持ち上げてるやつ全員ただの懐古厨だろw",
          "resultado": "浅はかな逆張りであることが即座に見抜かれ、教養のない馬鹿扱いされる。"
        }
      ]
    },
    "opi_fake": {
      "titulo": "生成AIデマへの引っかかり",
      "desc": "あまりに巧妙に作られた生成AIのコラ画像を、本物のニュースだと思い込んで激怒ツイートしてしまった。",
      "opciones": [
        {
          "texto": "ミスを認めて自虐し、「AIすげえな」と笑いに変える。",
          "tweet": "完全にAI画像に騙されました！不覚！目を洗って出直してきます😂 みんなも気をつけて！",
          "resultado": "愛嬌のある失敗談としてフォロワーに受け入れられる。"
        },
        {
          "texto": "生成AI技術が世論誘導に使われる危険性についての真面目な考察スレッドに切り替える。",
          "tweet": "プロの言論人ですら一瞬騙される時代。フェイク画像が選挙や社会に与える影響についての警鐘 🧵",
          "resultado": "ピンチを深い考察へと昇華させる鮮やかなリカバリー。"
        },
        {
          "texto": "「嘘でもいい、こういうことが現実に起こり得るのが問題だ」と居直る。",
          "tweet": "仮に画像がフェイクだとしても、みんなが信じた事実こそが彼らの日頃の行いの証明だろ！",
          "resultado": "SNSの恥さらしとして語り継がれる屈辱的な敗北。"
        }
      ]
    },
    "opi_polemica_ajena": {
      "titulo": "芸能人の泥沼不倫劇",
      "desc": "トップタレントの泥沼不倫と離婚劇で、タイムラインのすべてのトレンドが埋め尽くされている。",
      "opciones": [
        {
          "texto": "「他人の家庭のことに口を出すな」と大人な態度で静観する。",
          "tweet": "他人のプライベートで集団リンチを楽しむのは品がない。当事者同士で解決すべき問題。",
          "resultado": "品性を保ち、ゴシップ狂いのTLから一線を画す。"
        },
        {
          "texto": "詳細も調べずに最速で感情的なお気持ち表明を投下する。",
          "tweet": "これは許されない。人間として絶対にやってはいけない裏切り。徹底的に糾弾されるべき。",
          "resultado": "後に新事実が判明して的外れな批判となり、赤っ恥をかく。"
        },
        {
          "texto": "過去の自分の発言と矛盾するレベルの過激なモラルパンチを繰り出す。",
          "tweet": "不誠実な人間は社会的に抹殺されるべき！一切の情状酌量の余地なし！",
          "resultado": "過去に自分が不倫を擁護していたツイートを掘り起こされ、特大ブーメラン。"
        }
      ]
    },
    "opi_entrevista_tv": {
      "titulo": "深夜番組のコメンテーター出演",
      "desc": "テレビ局から、若者のネット世論を代表する論客として情報番組への出演依頼が届いた。",
      "opciones": [
        {
          "texto": "しっかり準備し、過激さよりも説得力とバランスを重視する。",
          "tweet": "テレビ出演終了。尺の短い中で本質を伝える難しさを痛感しつつ、良い経験になりました。",
          "resultado": "テレビ業界関係者からのウケも良く、レギュラー出演への足がかりに。"
        },
        {
          "texto": "Twitterの芸風をそのまま持ち込み、スタジオで毒舌を連発する。",
          "tweet": "テレビのぬるま湯コメンテーター全員に現実を突きつけてやった。爽快感MAX。",
          "resultado": "一部の信者は熱狂するが、視聴者センターに苦情が殺到。"
        },
        {
          "texto": "大物司会者に噛み付いてスタジオを険悪な空気にして爪痕を残そうとする。",
          "tweet": "司会者の老害発言をその場で完全論破してやったわ。切り抜き動画拡散よろしく！",
          "resultado": "テレビ業界から一発出禁を食らい、ただの失礼な人として終わる。"
        }
      ]
    },
    "gam_drama": {
      "titulo": "ストリーマー界隈の内紛",
      "desc": "仲の良い大手配信者同士が配信上で大喧嘩を始めた。リスナーから立場を明確にするよう迫られている。",
      "opciones": [
        {
          "texto": "完全に無視して自分のランク戦に集中する。",
          "tweet": "今夜もランク戦爆走中🔥 10連勝達成！ゲーム以外に興味なし。",
          "resultado": "余計な火の粉を浴びず、自分のリスナーと平和に盛り上がった。"
        },
        {
          "texto": "「冷静になろう」と大人の対応を呼びかける。",
          "tweet": "みんなゲームを楽しく遊ぶ仲間だろ？ 一度スマホを置いて深呼吸しよう。",
          "resultado": "界隈の良心・まとめ役として好感度と信頼が上昇。"
        },
        {
          "texto": "片方の肩を持って強烈に参戦・煽る。",
          "tweet": "言いたくなかったけど、あいつの言い分は完全に筋が通ってない。幻滅したわ。",
          "resultado": "同接とバズりは激増したが、アンチも大量に抱え込むことに。"
        }
      ]
    },
    "gam_lanzamiento": {
      "titulo": "待望の超大作ゲーム",
      "desc": "今世紀最大の期待作がついに発売。開発スタジオから先行レビューコードが届いた。",
      "opciones": [
        {
          "texto": "絶叫プレイの切り抜き動画を投稿する。",
          "tweet": "本日のベストクリップ🎮🔥 完璧なスーパープレイ（なお最後は爆笑のオチ）",
          "resultado": "既存リスナー向けの鉄板エンタメとして安定したウケ。"
        },
        {
          "texto": "バグや粗を隠さず、忖度なしの誠実なレビューを書く。",
          "tweet": "【本音レビュー】グラフィックと世界観は最高峰。だが進行不能バグが多すぎる。アプデ待ち推奨。",
          "resultado": "提灯記事を嫌うゲーマー層から絶大な信用を獲得。"
        },
        {
          "texto": "企業案件マネーを受け取り、神ゲーと絶賛する。",
          "tweet": "48時間不眠不休でクリア！文句なしの10/10、歴史に残る神ゲー降臨！！（※PR案件ですが本心です😉）",
          "resultado": "直後にバグだらけのクソゲーと判明し、企業の手先と叩かれる。"
        }
      ]
    },
    "gam_torneo": {
      "titulo": "配信者招待トーナメント",
      "desc": "賞金総額500万円の招待制クリエイター大会への出場枠を獲得した。",
      "opciones": [
        {
          "texto": "勝ち負けにこだわらず、お祭り気分で配信する。",
          "tweet": "大会本番！勝ち負けよりみんなで楽しむぞー！応援よろしく！",
          "resultado": "和やかな空気で配信は大盛況。"
        },
        {
          "texto": "ガチ特訓を重ねて上位入賞を勝ち取る。",
          "tweet": "GG！大会3位入賞！！毎日12時間練習した成果が出た。チームのみんなありがとう！",
          "resultado": "実力派ストリーマーとしての地位を確立し、フォロワー急増。"
        },
        {
          "texto": "配信中に裏技・グリッチを使って無双する。",
          "tweet": "ただの神エイムと立ち回り。負け惜しみ乙〜。",
          "resultado": "生配信中に不正が発覚し即失格。大炎上に見舞われる。"
        }
      ]
    },
    "gam_boicot_empresa": {
      "titulo": "大手メーカーへのボイコット",
      "desc": "新作タイトルに露骨なガチャ課金と集金システムが導入され、ユーザーの怒りが頂点に達している。",
      "opciones": [
        {
          "texto": "正当な論理でユーザー側のボイコットに賛同する。",
          "tweet": "定価8000円のゲームでコア要素を有料ガチャにするのはおかしい。アンインストールしました。",
          "resultado": "ゲーマーの権利を守る旗手として絶大な支持を獲得。"
        },
        {
          "texto": "どちらの味方もせず中立を保つ。",
          "tweet": "今後の公式アップデートの対応を見てから判断したいですね。",
          "resultado": "日和見主義と見なされ、どちらの陣営からも冷めた反応。"
        },
        {
          "texto": "裏で優遇を受ける見返りにメーカーを擁護する。",
          "tweet": "開発費もかかってるんだから当然。嫌なら買わなきゃいいだけ。ゲーム自体は最高。",
          "resultado": "即座にクソリプの嵐。完全に企業の回し者扱いされる。"
        }
      ]
    },
    "gam_acoso_fan": {
      "titulo": "厄介ファンの暴走",
      "desc": "ある熱狂的ファンが境界線を越え、DMやチャット欄で過激な執着を見せ始めた。",
      "opciones": [
        {
          "texto": "騒ぎ立てずに静かにブロック・通報する。",
          "tweet": "健全なコミュニティ維持のために対処しました。いつもマナーを守ってくれるみんなありがとう！",
          "resultado": "スマートかつ冷静な対応でトラブルを未然に防いだ。"
        },
        {
          "texto": "配信者とリスナーの距離感について啓蒙動画を出す。",
          "tweet": "配信者は友達でも恋人でもありません。境界線についての動画を出しました。",
          "resultado": "同業者からも共感の嵐。配信界隈全体の話題に。"
        },
        {
          "texto": "DMのやり取りを晒してリスナーに叩かせる。",
          "tweet": "見てこのキモいDMの数々。みんなこいつのアカウント通報して晒し上げて。",
          "resultado": "プラットフォームから規約違反警告を受け、泥沼の抗争へ。"
        }
      ]
    },
    "cons_ovni": {
      "titulo": "夜空を裂く怪光",
      "desc": "全国各地の夜空に、謎の発光体が編隊を組んで飛行する映像がSNSに次々投稿されている。",
      "opciones": [
        {
          "texto": "「真実は目の前にある」と動画を拡散して考察を煽る。",
          "tweet": "この軌道と飛行速度を見てほしい。人工衛星の破片ではない。真実は目の前にある🛸",
          "resultado": "信奉者たちが大興奮。考察クラスタの結束が深まる。"
        },
        {
          "texto": "ドローンショーや天体イベントの可能性を冷静に検証する。",
          "tweet": "興奮する前にまず事実確認。近隣のドローン実証実験と衛星軌道データを照合中 🧵",
          "resultado": "理性的で信用できる考察班として一般層からの信頼を獲得。"
        },
        {
          "texto": "「エイリアンの地球侵略が始まった」と核シェルターの販売リンクを貼る。",
          "tweet": "ついに侵略が始まった！今すぐ地下シェルターを確保しろ！緊急防災セットの購入はこちら🚨",
          "resultado": "恐怖を煽って金を稼ぐ悪質業者として通報が殺到。"
        }
      ]
    },
    "cons_luz": {
      "titulo": "首都圏の大停電",
      "desc": "原因不明の大規模停電が発生し、数百万世帯の電力が突然遮断された。",
      "opciones": [
        {
          "texto": "「サイバー攻撃の予行演習かもしれない」と意味深に呟く。",
          "tweet": "主要変電所が同時にダウン。ただの設備点検ミスで説明がつくと思う？ 疑問を持ち続けろ。",
          "resultado": "定番のミステリー調で好奇心旺盛なフォロワーを惹きつける。"
        },
        {
          "texto": "過去のインフラ予算削減と送電網老朽化のデータを掘り起こす。",
          "tweet": "10年前からのインフラ補修費削減のデータ。放置された結果がこれです。人災の証拠まとめ 🧵",
          "resultado": "現実的な調査報道として、大手メディア記者からもリツイートされる。"
        },
        {
          "texto": "「世界リセット計画の第一段階だ」と銀行預金の全額引き出しを煽る。",
          "tweet": "グレートリセット開始！次は預金封鎖が来るぞ！今すぐ銀行から全財産を引き出せ！！",
          "resultado": "不安を煽るデマ発信源として警告ラベルを貼られる。"
        }
      ]
    },
    "cons_debate": {
      "titulo": "主流派科学者からの公開討論要求",
      "desc": "著名な宇宙物理学教授から、あなたの地球平面説・古代文明論への公開討論が申し込まれた。",
      "opciones": [
        {
          "texto": "「御用学者と馴れ合う気はない」と挑戦を拒否する。",
          "tweet": "象牙の塔に閉じこもった学者先生と議論する時間はない。私は真実を求める民衆と対話する。",
          "resultado": "孤高の反体制ヒーローとして信者からの忠誠心が強固に。"
        },
        {
          "texto": "独自の研究データと文献を携えて堂々と対決に応じる。",
          "tweet": "公開討論、受けて立ちます。主流派の常識がいかに狭いか、証拠を持ってお見せしましょう。",
          "resultado": "白熱した議論を展開し、意外な健闘ぶりに評価が集まる。"
        },
        {
          "texto": "科学者の所属組織やスポンサー企業を調べて人格攻撃で逃げる。",
          "tweet": "あの教授の研究室、大手軍需企業から助成金貰ってるじゃん。御用学者のポジショントーク乙。",
          "resultado": "論点のすり替えと逃げ腰の態度をネット中で笑われる。"
        }
      ]
    },
    "cons_prediccion_fallida": {
      "titulo": "外れた世界終末予言",
      "desc": "あなたが「重大な世界的異変が起きる」と予言していた運命の日が、何事もなく平穏に過ぎ去った。",
      "opciones": [
        {
          "texto": "予言が外れたことを素直に認め、計算をやり直すと謝罪する。",
          "tweet": "本日何も起きませんでした。私の読みが外れたことを認めます。期待してくれた皆様、申し訳ない。",
          "resultado": "界隈では異例の潔い謝罪に、アンチも毒気を抜かれる。"
        },
        {
          "texto": "「物質界ではなく高次元の精神世界で変革が起きた」と言い張る。",
          "tweet": "目に見える崩壊ではなく、霊的な周波数のシフトが完了しました。覚醒した人には分かるはずです。",
          "resultado": "スピリチュアル界隈特有の言い訳で、熱狂的信者を繋ぎ止める。"
        },
        {
          "texto": "「我々が事前に告発したことで奴らの計画が阻止された」と手柄にする。",
          "tweet": "私たちが直前に世界に警告を発したため、支配層は作戦を中止せざるを得なかったのだ！大勝利！",
          "resultado": "あまりの往生際の悪さに、まとめサイトで一生イジられる。"
        }
      ]
    },
    "cons_medios_infiltran": {
      "titulo": "潜入取材のジャーナリスト",
      "desc": "大手ドキュメンタリー番組のディレクターから、あなたの活動に密着したいと連絡が入った。",
      "opciones": [
        {
          "texto": "「ノーカット版の映像を自分も公開する」条件をつけて受ける。",
          "tweet": "取材を受けます。ただし悪意ある切り抜きを防ぐため、こちらも全編同時録画・公開します。",
          "resultado": "巧みな自衛策により、偏向報道を封じる。"
        },
        {
          "texto": "どうせ悪質な印象操作をされると見抜いてキッパリ断る。",
          "tweet": "大手メディアがまた「危険なネット陰謀論者」というレッテル貼りをしたいそうです。お断り。",
          "resultado": "ブレない姿勢が支持層の団結を固める。"
        },
        {
          "texto": "取材現場でディレクターをスパイ扱いして怒鳴り散らす。",
          "tweet": "取材に来たディレクターを問い詰めたら目を泳がせて逃げた！これぞメディアの闇！",
          "resultado": "番組で「狂信的集団」として放送され、社会的な孤立が深まる。"
        }
      ]
    },
    "tec_SaaS": {
      "titulo": "新サービスのローンチ",
      "desc": "4ヶ月間徹夜で開発した個人開発の業務効率化SaaSが、ついにリリース当日を迎えた。",
      "opciones": [
        {
          "texto": "初期ユーザー向けに永久割引プランを用意して手堅く公開する。",
          "tweet": "個人開発SaaSをついにローンチ！今週登録いただいた方限定で永久50%OFFでお届けします🚀",
          "resultado": "着実な初期ユーザーと課金者を獲得。幸先の良いスタート。"
        },
        {
          "texto": "収益や開発の苦労を全公開する「Build in Public」で発信する。",
          "tweet": "アイデアからローンチまでのMRR、サーバー構成、失敗した点すべて公開します 🧵",
          "resultado": "エンジニア界隈で熱狂的にシェアされ、技術ブランディングに成功。"
        },
        {
          "texto": "単なるAPIのラッパーなのに「世界初の量子AI搭載」と大風呂敷を広げる。",
          "tweet": "既存の業務ソフトはすべて過去の遺物。独自開発の量子ニューラルAIが世界を変えます。",
          "resultado": "中身がただのAPI連携だと秒速で見破られ、エンジニアから袋叩きに。"
        }
      ]
    },
    "tec_lenguajes": {
      "titulo": "プログラミング言語の宗教戦争",
      "desc": "タイムラインで「Rust vs Go vs TypeScript」の泥沼の宗教戦争が勃発している。",
      "opciones": [
        {
          "texto": "開発者の不毛な争いを笑い飛ばすネタツイートを投下する。",
          "tweet": "シニアエンジニアがメモリ安全性で6時間レスバしてる横で、クライアントはボタンを左に2px動かせと言っている。",
          "resultado": "全エンジニアの共感を呼び、数万いいねを獲得。"
        },
        {
          "texto": "各言語のトレードオフと適材適所の設計論を冷静に解説する。",
          "tweet": "適材適所：低レイヤはRust、マイクロサービスはGo、UIはTS。宗教論争をやめて適材適所で語ろう 🧵",
          "resultado": "技術顧問クラスの知見としてテックリードたちから絶賛される。"
        },
        {
          "texto": "「2026年にもなってRust以外で書いてる奴は全員無能」と煽る。",
          "tweet": "いまだにガベージコレクションのある言語でバックエンド書いてる連中、エンジニア名乗るのやめてくれない？",
          "resultado": "界隈のあらゆるエンジニアを敵に回し、採用界隈でブラックリスト入り。"
        }
      ]
    },
    "tec_oferta": {
      "titulo": "VCからの大型出資オファー",
      "desc": "名門ベンチャーキャピタルから、2億円のシードラウンド投資のタームシートが提示された。",
      "opciones": [
        {
          "texto": "調達を受け入れ、爆速での事業拡大に舵を切る。",
          "tweet": "トップVCより2億円の資金調達を実施しました。ここから一気に採用と開発を加速させます！",
          "resultado": "潤沢な資金を獲得し、注目スタートアップの仲間入り。"
        },
        {
          "texto": "出資を断り、100%自己資本での黒字経営（ブートストラップ）を貫く。",
          "tweet": "2億円の出資提案を辞退しました。誰の指図も受けず、顧客のために100%自己資本で黒字を極めます。",
          "resultado": "インディー開発者界隈で伝説のカリスマとして崇拝される。"
        },
        {
          "texto": "売上ゼロなのに「時価総額20億円」とSNSでドヤり散らかす。",
          "tweet": "プレレベニューで評価額20億。ビジョンにお金が集まる時代。労働者諸君、お疲れ様。",
          "resultado": "実体のない虚業イキリ起業家としてテック界隈の笑い者に。"
        }
      ]
    },
    "tec_bug_critico": {
      "titulo": "本番環境の大炎上バグ",
      "desc": "深夜のデプロイミスにより、数万件のユーザーのメールアドレスが外部に露出する事故が発生。",
      "opciones": [
        {
          "texto": "即座にサーバーを止め、15分で原因調査と再発防止策を全公開する。",
          "tweet": "【重要なお知らせ】個人情報露出インシデントに関する経緯、原因、修正完了の全ログを公開します。",
          "resultado": "迅速かつ透明な神対応と称賛され、かえって信頼が増加。"
        },
        {
          "texto": "誰にも気づかれていないと信じて、深夜のうちにサイレント修正する。",
          "tweet": "定期メンテナンスを完了し、パフォーマンスを改善しました。",
          "resultado": "ホワイトハッカーに隠蔽を告発され、信頼が完全に失墜。"
        },
        {
          "texto": "「クラウド事業者の障害だ」とログも確認せずに外部ベンダーのせいにする。",
          "tweet": "外部インフラの不具合によりご迷惑をおかけしました。ベンダー側に厳重抗議します。",
          "resultado": "自社のSQLミスであることがバレて大恥をかく。"
        }
      ]
    },
    "tec_competencia_copia": {
      "titulo": "競合による丸パクリ",
      "desc": "潤沢な資金を持つ大手テック企業が、あなたのプロダクトのUIと機能を丸ごとコピーしてリリースした。",
      "opciones": [
        {
          "texto": "機能は真似できても開発速度は真似できないと、新機能を爆速デプロイする。",
          "tweet": "機能はパクれても、私たちの開発スピードはパクれない。今週さらに3つの新機能をリリースします🚀",
          "resultado": "圧倒的な開発力と開発スピードで競合を突き放し、ファンを魅了。"
        },
        {
          "texto": "デザインや仕様が完全に一致している比較画像を並べて告発する。",
          "tweet": "大手が個人開発プロダクトを丸パクリした証拠比較。これがあなたたちのイノベーションですか？ 🧵",
          "resultado": "ネット上で大炎上し、大手企業側が謝罪と機能取り下げに追い込まれる。"
        },
        {
          "texto": "「幹部全員を破産させる」と根拠のない法的脅迫をツイートする。",
          "tweet": "顧問弁護士が動いている。関わった役員全員を私財差し押さえまで追い込んでやるから覚悟しろ。",
          "resultado": "法的に無理筋な脅迫として呆れられ、大人の対応ができないと失笑される。"
        }
      ]
    },
    "pod_clip": {
      "titulo": "切り抜き動画の爆発的バズ",
      "desc": "最新エピソードの刺激的な30秒の切り抜きが、TikTokとXでミリオン再生を突破した。",
      "opciones": [
        {
          "texto": "見やすい字幕付きで公式から本編への誘導リンクを貼る。",
          "tweet": "いま話題の切り抜きはこちら🎙️ 議論の全体像と本当の結末は本編でチェックしてみてね 👇",
          "resultado": "本編の再生数が爆増し、新規リスナーが一気に定着。"
        },
        {
          "texto": "切り抜きの前後の文脈を含めたノーカット5分版を公開する。",
          "tweet": "一部の言葉だけ切り取られて誤解が広まっています。前後の文脈を含むノーカット版をどうぞ。",
          "resultado": "誠実な情報発信の姿勢が評価され、質の高いファンが集まる。"
        },
        {
          "texto": "ゲストが犯罪自白したかのように悪意ある再編集をしてさらに煽る。",
          "tweet": "生配信でまさかの衝撃告白！？ これ放送事故だろwww",
          "resultado": "ゲストから猛烈な抗議を受け、絶縁される。"
        }
      ]
    },
    "pod_auspicio": {
      "titulo": "地味なB2Bスポンサー案件",
      "desc": "お堅いクラウド会計ソフトの企業から、高額なスポンサーCM読みのオファーが届いた。",
      "opciones": [
        {
          "texto": "誠実に、かつ聴きやすいプロのトーンで企業CMを読み上げる。",
          "tweet": "番組を支えてくださる素敵なスポンサー様をご紹介！ 詳細はリンクからチェックしてね🤝",
          "resultado": "スポンサーが大満足し、長期継続契約が決定。"
        },
        {
          "texto": "お堅い会計ソフトのCMをコント仕立てにして爆笑CMに変える。",
          "tweet": "今週の提供クレジット、どうやってもコントになってしまう問題😂 ぜひ聴いてみて！",
          "resultado": "リスナー大絶賛。スポンサーのサービスへのアクセスも過去最高に。"
        },
        {
          "texto": "「こんな地味なソフト誰も使わないけど金のために読みます」とディスる。",
          "tweet": "会計ソフトとか一番興味ないけど機材代のために読みまーすw",
          "resultado": "契約即時解除。違約金を請求される。"
        }
      ]
    },
    "pod_invitado": {
      "titulo": "炎上タレントの出演希望",
      "desc": "大スキャンダルを起こして世間から大バッシング中の有名タレントから、「番組で弁明したい」と逆オファー。",
      "opciones": [
        {
          "texto": "番組のブランドイメージを守るため、丁寧に辞退する。",
          "tweet": "当番組は煽りや炎上を目的としたメディアではありません。今回の出演は見送らせていただきました。",
          "resultado": "リスナーから「信頼できる番組」とブランド価値を守り抜く。"
        },
        {
          "texto": "忖度なし・台本なしのガチの追求を行う条件で出演を許可する。",
          "tweet": "言い訳は一切通用しません。疑惑のすべてをノーカットで2時間問い詰めました。配信開始。",
          "resultado": "歴史的な神回インタビューとなり、報道メディアからも賞賛される。"
        },
        {
          "texto": "相手にペコペコ媚びを売り、白々しいイメージロンダリングに協力する。",
          "tweet": "世間は誤解している！本当はこんなに素晴らしい人なんです！みんな聴いてあげて！",
          "resultado": "リスナーから「魂を売った」と激怒され、大炎上。"
        }
      ]
    },
    "pod_numero_bajo": {
      "titulo": "気合いを入れた回の再生数爆死",
      "desc": "1ヶ月かけて綿密にリサーチした渾身の特集回が、普段の10分の1しか聴かれず大爆死。",
      "opciones": [
        {
          "texto": "数字に一喜一憂せず、質の高いアーカイブは必ず資産になると信じる。",
          "tweet": "数字は悪かったけど、このエピソードを作れたことを誇りに思う。一生残る良い番組を作りたい。",
          "resultado": "熱心なコアリスナーから熱い応援メッセージが殺到。"
        },
        {
          "texto": "エッセンスを図解スレッドにしてX上で再発信する。",
          "tweet": "本編の最も重要なエッセンスを3分で読める図解スレッドにまとめました 🧵",
          "resultado": "図解がXで大バズりし、遅れて本編の再生数が跳ね上がる。"
        },
        {
          "texto": "「お前らには難しすぎたか」とリスナーの理解力のせいにしてキレる。",
          "tweet": "浅いバカ騒ぎしか聴けないリスナーばっかりで絶望した。もう二度と真面目な企画やらない。",
          "resultado": "リスナーに八つ当たりしたことで愛想を尽かされ、登録解除が続出。"
        }
      ]
    },
    "pod_crossover": {
      "titulo": "業界No.1ポッドキャストとのコラボ",
      "desc": "国内ポッドキャストランキング1位のカリスマ番組から、合同コラボ配信のオファーが舞い込んだ。",
      "opciones": [
        {
          "texto": "入念に下準備をして、お互いの良さを引き出す最高のコラボ回を収録する。",
          "tweet": "ついに実現しました！ 最高の先輩との夢のコラボ回、2時間喋り倒しました🎙️🔥",
          "resultado": "爆発的な新規リスナーが流入し、番組の規模が一気に全国区へ。"
        },
        {
          "texto": "「お互いのスタジオの空気感を大事にしたい」と丁寧にお断りする。",
          "tweet": "光栄すぎるお誘いでしたが、今は自分の番組の足元を固める時期と判断しました。",
          "resultado": "芯の通った自主自立の姿勢に、相手番組のファンからも一目置かれる。"
        },
        {
          "texto": "コラボ中ずっと相手をマウントし、自分の自慢話だけで時間を潰す。",
          "tweet": "天下のトップ番組を完全に食ってやったわw 俺の方が喋り上手いでしょ？",
          "resultado": "相手のリスナーから総叩きに遭い、人間性を疑われて大失敗。"
        }
      ]
    },
    "super_hab_opinologo_0": {
      "titulo": "最初から知っていた男",
      "desc": "重大な航空機事故が発生。公式発表が出る前に、地政学的な背景を完璧に解説したあなたのスレッドが的中する。"
    },
    "super_hab_opinologo_1": {
      "titulo": "言った通りになっただろ",
      "desc": "紛争勃発の1ヶ月前に警鐘を鳴らしていた過去ツイートを自己引用。タイムライン全体があなたの先見の明にひれ伏す。"
    },
    "super_hab_futbolero_0": {
      "titulo": "代表選手からの引用RT",
      "desc": "代表のエース選手があなたの戦術批評を引用リポストで絶賛。通知欄が一生鳴り止まない状態に。"
    },
    "super_hab_futbolero_1": {
      "titulo": "完全的中スコア",
      "desc": "決勝戦の試合前、スコアと得点者を寸分違わず完全的中。そのスクショが全国のサッカーファンの間で神話となる。"
    },
    "super_hab_militante_0": {
      "titulo": "党首直々の公式お墨付き",
      "desc": "党の最高指導者があなたの発信を公式引用し、長年の闘争を称賛。味方の支持層が一夜にして数万人規模で雪崩れ込む。"
    },
    "super_hab_militante_1": {
      "titulo": "予期せぬ社会的正当性",
      "desc": "保守派・リベラル双方の重鎮ジャーナリストがあなたの分析をテレビで引用。ただの論客から「信頼できる有識者」へ。"
    },
    "super_hab_humor_0": {
      "titulo": "収拾不能の大バズり",
      "desc": "何気なく放った一言ネタがコントロール不能の爆発的拡散。テレビのワイドショーでパロディされる社会現象に。"
    },
    "super_hab_humor_1": {
      "titulo": "元ツイを食い殺した引用RT",
      "desc": "大物著名人の傲慢なツイートに完璧なツッコミを入れ、相手の20倍以上のいいねをかっさらう痛快な大勝利。"
    },
    "super_hab_periodista_0": {
      "titulo": "特ダネ独占スクープ",
      "desc": "主要新聞社すら掴んでいない内部告発の独占スクープを炸裂させ、大手メディアがあなたのツイートを後追い取材。"
    },
    "super_hab_periodista_1": {
      "titulo": "大手メディアからの情報源指定",
      "desc": "あなたの調査報道が世界的な通信社に情報源として公式クレジットされ、国際的なジャーナリストとしての名声を得る。"
    },
    "super_hab_cryptobro_0": {
      "titulo": "暴騰を完全予知",
      "desc": "無名だった銘柄の爆発的急騰を誰よりも早く予告。チャートが垂直上昇し、界隈の生き神様として崇められる。"
    },
    "super_hab_cryptobro_1": {
      "titulo": "激推し銘柄の爆発的急騰",
      "desc": "公開推奨したトークンが一晩で10倍に跳ね上がる。フォロワー全員が歓喜し、あなたの信者へと昇華。"
    },
    "super_hab_gamer_0": {
      "titulo": "超大物配信者からのレイド襲来",
      "desc": "同接8万人のスーパースター配信者から配信終了時にレイドが直撃。チャット欄が光の速さで流れていく。"
    },
    "super_hab_gamer_1": {
      "titulo": "世界最速リーク的中",
      "desc": "次世代ゲーム機の発表日とスペックを完全的中。世界中のゲーマーから「内部関係者」として注目される。"
    },
    "super_hab_conspiranoico_0": {
      "titulo": "ほら見ろ、俺の言った通りだ",
      "desc": "狂気の陰謀論と笑われていた仮説が、情報公開請求で開示された公文書により事実と証明。ネットが騒然。"
    },
    "super_hab_conspiranoico_1": {
      "titulo": "点と点を最初に繋いだ男",
      "desc": "世間が見落としていた事件の奇妙な一致をいち早く暴き、大手メディアが何週間も遅れて追随する。"
    },
    "super_hab_influencer_0": {
      "titulo": "限定プロモコード配布",
      "desc": "世界的ハイブランドからあなた専用の無制限コミッションコードが発行され、数時間で完売の伝説を作る。"
    },
    "super_hab_influencer_1": {
      "titulo": "VIPレセプションへの招待",
      "desc": "パリコレの最前列VIP席に招待され、現地からのラグジュアリーな発信でフォロワーを圧倒する。"
    },
    "super_hab_onlyfans_0": {
      "titulo": "思わぬ大物からの援護射撃",
      "desc": "道徳派からの激しいバッシングの中、著名な文化人があなたの自立心と表現の自由を公然と擁護してくれる。"
    },
    "super_hab_onlyfans_1": {
      "titulo": "ストライサンド効果の奇跡",
      "desc": "アンチによるアカウント通報運動が裏目に出て話題沸騰。有料会員数が一晩で5倍に膨れ上がる。"
    },
    "super_hab_techie_0": {
      "titulo": "プロダクトが世界中で大爆発",
      "desc": "海外のテック系掲示板で世界1位を獲得。世界中からアクセスが殺到し、サーバーが悲鳴を上げる。"
    },
    "super_hab_techie_1": {
      "titulo": "伝説的投資家からの太鼓判",
      "desc": "シリコンバレーの伝説的VCがあなたのアーキテクチャ設計を引用し「10年に1人の逸材」と大絶賛。"
    },
    "super_hab_podcaster_0": {
      "titulo": "歴史に残る神回インタビュー",
      "desc": "メディアに一切出ない時代の寵児をブースに招き、3時間の濃密な独占対談。全プラットフォームで歴代1位を記録。"
    },
    "super_hab_podcaster_1": {
      "titulo": "一人歩きしたバズり動画",
      "desc": "何気ない40秒の雑談が世界規模のミームとなり、あなたの声を知らないネットユーザーがいない状態に。"
    }
  }
};

const SUPER_HAB_OPTIONS_TRANSLATIONS = {
  en: [
  {
    "texto": "Capitalize on the historic moment",
    "tweet": "Seizing this defining milestone to chart the path forward for our community. Endless gratitude to everyone riding with me.",
    "resultado": "You harness the spotlight to cement leadership and lasting authority."
  },
  {
    "texto": "Monetize the surge immediately",
    "tweet": "Opening slots for select commercial partnerships and sponsored projects. DMs open for serious inquiries.",
    "resultado": "You convert viral attention into lucrative commercial deals before it cools down."
  },
  {
    "texto": "Protect reputation and earn respect",
    "tweet": "Amid the noise and hysteria, I will always choose depth and composure. Substance over cheap spectacle.",
    "resultado": "You prioritize dignity and substance. Your reputation emerges untouchable and elevated."
  }
],
  ja: [
  {
    "texto": "歴史的瞬間を最大限に活かす",
    "tweet": "この歴史的な節目を機に、コミュニティの未来を切り拓いていきます。いつも信じてついてきてくれるみんな、本当にありがとう。",
    "resultado": "集まった注目を一気に味方につけ、界隈の絶対的リーダーとしての地位を確立。"
  },
  {
    "texto": "この爆発的露出を即座にマネタイズする",
    "tweet": "【企業様へ】タイアップ案件・スポンサー枠を少数限定で募集します。ご興味のある企業様はDMまで。",
    "resultado": "熱が冷める前に素早く大型広告契約をまとめ、莫大な現金を獲得。"
  },
  {
    "texto": "目先の利益より信頼と品格を守る",
    "tweet": "喧騒と狂乱のネット社会において、私は常に誠実さと冷静さの道を選びます。すべては見せかけのショーではない。",
    "resultado": "品格と節度を最優先。周囲の尊敬を集め、ブランド価値が大幅に向上。"
  }
]
};

function getLocalizedEvent(ev, lang, archId) {
  if (!ev || lang === "es") return ev;
  const isSuperHab = ev.color === "purple" || ev.id?.startsWith("super_hab");
  const archKey = typeof getArchKey === "function" ? getArchKey(archId) : (archId || "");
  const archName = (typeof i18n !== "undefined" && i18n.t("archetypes." + archKey + ".nombre")) || "";

  let localizedTag = ev.tag;
  if (isSuperHab) {
    localizedTag = lang === "ja" ? "⚡ アカウント系統・固有特殊スキル" : "⚡ ARCHETYPE SPECIAL ABILITY";
  } else {
    localizedTag = lang === "ja" ? `🎭 特別イベント: ${archName.toUpperCase()}` : `🎭 SPECIAL EVENT: ${archName.toUpperCase()}`;
  }

  let trans = EVENT_TRANSLATIONS[lang]?.[ev.id];
  // Check super hab pattern
  if (!trans && isSuperHab) {
    trans = EVENT_TRANSLATIONS[lang]?.[`super_hab_${archKey}_0`] || EVENT_TRANSLATIONS[lang]?.[`super_hab_${archKey}_1`];
  }

  const superOpts = SUPER_HAB_OPTIONS_TRANSLATIONS[lang];

  const localizedOptions = (ev.opciones || []).map((opt, idx) => {
    let optTrans = trans?.opciones?.[idx];
    if (!optTrans && isSuperHab && superOpts && superOpts[idx]) {
      optTrans = superOpts[idx];
    }
    return {
      ...opt,
      texto: optTrans?.texto || opt.texto,
      tweet: optTrans?.tweet || opt.tweet,
      resultado: optTrans?.resultado || opt.resultado
    };
  });

  return {
    ...ev,
    tag: localizedTag,
    titulo: trans?.titulo || ev.titulo,
    desc: trans?.desc || ev.desc,
    opciones: localizedOptions
  };
}


// ─────────────────────────────────────────────────────────────
// LOCALIZED FORTUITOUS EVENTS (Medios, Famoso VIP, Algoritmo)
// ─────────────────────────────────────────────────────────────

const FORTUITOUS_TRANSLATIONS = {
  en: {
    // ── MEDIOS_EVENTOS ──
    "CITADO EN RADIO LOCAL": {
      titulo: "CITED ON LOCAL RADIO",
      desc: "A columnist read your latest tweet on air during the morning drive and the panel debated your take for 10 minutes.",
      consecuencia_tpl: (v) => v
    },
    "PORTADA EN DIARIO REGIONAL": {
      titulo: "REGIONAL NEWSPAPER FRONT PAGE",
      desc: "A provincial news portal picked up your statements as the lead story in their society section.",
      consecuencia_tpl: (v) => v
    },
    "PANTALLA DIVIDIDA EN TV DE CABLE": {
      titulo: "SPLIT SCREEN ON CABLE NEWS",
      desc: "They put your tweet on a giant screen while four panelists shouted over each other analyzing it.",
      consecuencia_tpl: (v) => v
    },
    "COLUMNA EN PRENSA NACIONAL": {
      titulo: "COLUMN IN NATIONAL PRESS",
      desc: "The country's most-read newspaper quoted your full thread in their Sunday print and digital edition.",
      consecuencia_tpl: (v) => v
    },
    "REACCIÓN EN STREAMING MASIVO": {
      titulo: "MASSIVE STREAMER REACTION",
      desc: "The biggest Spanish-language streamer read your account live to 80,000 simultaneous viewers.",
      consecuencia_tpl: (v) => v
    },
    "PRIMETIME EN TV ABIERTA": {
      titulo: "PRIMETIME BROADCAST TV",
      desc: "Your tweet opened the most-watched evening news in the country. Everyone saw it.",
      consecuencia_tpl: (v) => v
    },
    "IMPACTO GLOBAL EN PRENSA INTERNACIONAL": {
      titulo: "GLOBAL IMPACT IN INTERNATIONAL PRESS",
      desc: "International outlets translated your content to illustrate the social phenomenon of the moment.",
      consecuencia_tpl: (v) => v
    },
    // ── FAMOSO_VIP_GENERALES ──
    "¡EL PRESIDENTE TE DIO RETWEET!": {
      titulo: "THE PRESIDENT RETWEETED YOU!",
      desc: "The head of state retweeted your post, highlighting your stance in the middle of a national broadcast.",
      consecuencia_tpl: (v) => v
    },
    "¡EL PRESIDENTE CITÓ TU TWEET!": {
      titulo: "THE PRESIDENT QUOTED YOUR TWEET!",
      desc: "The president quoted your tweet saying: 'This is exactly right. Brilliant analysis.'",
      consecuencia_tpl: (v) => v
    },
    "¡EL DUEÑO DE LA PLATAFORMA TE HIZO QUOTE!": {
      titulo: "THE PLATFORM OWNER QUOTED YOU!",
      desc: "The owner of the platform quoted your post with a single emoji ('🎯') and the entire feed collapsed.",
      consecuencia_tpl: (v) => v
    },
    "¡UN JUGADOR DE PRIMERA TE RETWEITEÓ!": {
      titulo: "A TOP-FLIGHT PLAYER RETWEETED YOU!",
      desc: "The biggest name in the national championship shared your tweet on their verified account.",
      consecuencia_tpl: (v) => v
    },
    "¡UN CONDUCTOR DE PRIMETIME CITÓ TU TWEET!": {
      titulo: "A PRIMETIME HOST QUOTED YOUR TWEET!",
      desc: "The most-watched TV presenter read your tweet on air and quoted it verbatim on their account.",
      consecuencia_tpl: (v) => v
    },
    "¡UNA CELEBRIDAD TE DIO LIKE Y RT!": {
      titulo: "A CELEBRITY LIKED AND RT'D YOU!",
      desc: "One of the most-followed entertainment figures reposted you and your notifications won't stop.",
      consecuencia_tpl: (v) => v
    },
    // ── ALGORITMO ──
    "EL ALGORITMO TE BENDICE (x2 INGRESOS)": {
      titulo: "THE ALGORITHM BLESSES YOU (x2 INCOME)",
      desc: "Platform engineers tweaked the 'For You' feed weights and your account is now classified as high-value content.",
      consecuencia_tpl: (v) => v
    },
    "SHADOWBAN DEL ALGORITMO (x0.5 INGRESOS)": {
      titulo: "ALGORITHM SHADOWBAN (x0.5 INCOME)",
      desc: "A silent algorithm update tanked your account's reach due to alleged spam or excessive controversy.",
      consecuencia_tpl: (v) => v
    }
  },
  ja: {
    // ── MEDIOS_EVENTOS ──
    "CITADO EN RADIO LOCAL": {
      titulo: "地方ラジオに引用される",
      desc: "コラムニストが朝の番組中にあなたの最新ツイートを読み上げ、パネリストたちが10分間あなたの意見を議論しました。",
      consecuencia_tpl: (v) => v
    },
    "PORTADA EN DIARIO REGIONAL": {
      titulo: "地方紙の一面トップ",
      desc: "地方ニュースポータルがあなたの発言を社会面の主要記事として取り上げました。",
      consecuencia_tpl: (v) => v
    },
    "PANTALLA DIVIDIDA EN TV DE CABLE": {
      titulo: "ケーブルニュースで分割画面に登場",
      desc: "4人のパネリストが怒鳴り合いながら分析する横で、あなたのツイートが大画面に表示されました。",
      consecuencia_tpl: (v) => v
    },
    "COLUMNA EN PRENSA NACIONAL": {
      titulo: "全国紙のコラムに掲載",
      desc: "最も読まれている全国紙が、日曜版の紙面とデジタル版であなたのスレッド全文を引用しました。",
      consecuencia_tpl: (v) => v
    },
    "REACCIÓN EN STREAMING MASIVO": {
      titulo: "大手ストリーマーのリアクション動画に登場",
      desc: "最大手のストリーマーが8万人同時視聴者の前でリアルタイムにあなたのアカウントを読み上げました。",
      consecuencia_tpl: (v) => v
    },
    "PRIMETIME EN TV ABIERTA": {
      titulo: "地上波ゴールデンタイムに登場",
      desc: "あなたのツイートが最も視聴された夜のニュース番組で取り上げられました。国中が見ていました。",
      consecuencia_tpl: (v) => v
    },
    "IMPACTO GLOBAL EN PRENSA INTERNACIONAL": {
      titulo: "海外メディアで国際的に拡散",
      desc: "海外メディアがあなたのコンテンツを翻訳し、現在の社会現象を解説するために使用しました。",
      consecuencia_tpl: (v) => v
    },
    // ── FAMOSO_VIP_GENERALES ──
    "¡EL PRESIDENTE TE DIO RETWEET!": {
      titulo: "大統領がリツイート！",
      desc: "国家元首が、国営放送の最中にあなたの立場を強調しながらあなたの投稿をリツイートしました。",
      consecuencia_tpl: (v) => v
    },
    "¡EL PRESIDENTE CITÓ TU TWEET!": {
      titulo: "大統領がツイートを引用！",
      desc: "大統領があなたのツイートを引用し「まさにその通り。見事な分析だ」とコメントしました。",
      consecuencia_tpl: (v) => v
    },
    "¡EL DUEÑO DE LA PLATAFORMA TE HIZO QUOTE!": {
      titulo: "プラットフォームオーナーが引用！",
      desc: "プラットフォームのオーナーがあなたの投稿を絵文字1つ（「🎯」）で引用し、タイムライン全体が混乱しました。",
      consecuencia_tpl: (v) => v
    },
    "¡UN JUGADOR DE PRIMERA TE RETWEITEÓ!": {
      titulo: "トップリーガーがリツイート！",
      desc: "国内リーグ最大のスター選手が認証アカウントであなたのツイートをシェアしました。",
      consecuencia_tpl: (v) => v
    },
    "¡UN CONDUCTOR DE PRIMETIME CITÓ TU TWEET!": {
      titulo: "ゴールデンタイムのMCがツイートを引用！",
      desc: "最も視聴率の高いTV司会者がオンエア中にあなたのツイートをそのまま読み上げ、アカウントでも引用しました。",
      consecuencia_tpl: (v) => v
    },
    "¡UNA CELEBRIDAD TE DIO LIKE Y RT!": {
      titulo: "有名人がいいね＆リツイート！",
      desc: "最もフォロワーの多いエンタメ系インフルエンサーがあなたをリポストし、通知が止まりません。",
      consecuencia_tpl: (v) => v
    },
    // ── ALGORITMO ──
    "EL ALGORITMO TE BENDICE (x2 INGRESOS)": {
      titulo: "アルゴリズムに祝福される（収入×2）",
      desc: "プラットフォームのエンジニアが「おすすめ」フィードの重みを調整し、あなたのアカウントは高価値コンテンツとして分類されました。",
      consecuencia_tpl: (v) => v
    },
    "SHADOWBAN DEL ALGORITMO (x0.5 INGRESOS)": {
      titulo: "アルゴリズムのシャドウバン（収入×0.5）",
      desc: "アルゴリズムのサイレントアップデートにより、スパムや過度な炎上を理由としてリーチが大幅に低下しました。",
      consecuencia_tpl: (v) => v
    }
  }
};

/**
 * Localizes a fortuitous event object for non-ES languages.
 * @param {object} fort - The fort object from checkFortuitousEvents()
 * @param {string} lang - "en" or "ja"
 * @returns {object} Localized fort object (or original if no translation found)
 */
function getLocalizedFortuitousEvent(fort, lang) {
  if (!fort || !lang || lang === "es") return fort;
  const langMap = FORTUITOUS_TRANSLATIONS[lang];
  if (!langMap) return fort;
  const trans = langMap[fort.titulo];
  if (!trans) return fort;
  return {
    ...fort,
    titulo: trans.titulo,
    desc: trans.desc
    // consecuencia is dynamically built with numbers in game-engine.js — keep as-is
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EVENT_TRANSLATIONS, getLocalizedEvent, FORTUITOUS_TRANSLATIONS, getLocalizedFortuitousEvent };
}
