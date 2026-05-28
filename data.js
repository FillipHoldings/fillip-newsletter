// ============================================================
// data.js -- Publication config + all issue content
// Fillip Newsletter — Static version
// ============================================================

const PUBLICATION_CONFIG = {
  publicationName:  'Fillip Newsletter',
  tagline:          'Weekly signals on capital, rights, fandom, IP, and monetization.',
  editionLabel:     'Sports · Entertainment · IP · Capital',
  coverageNote:     'Intelligence across sports, entertainment, media, IP, and live experiences — built for investors, operators, executives, founders, and anyone tracking where capital and culture are moving.',
  websiteUrl:          'https://www.fillip.com/',
  logoUrl:             'https://static.wixstatic.com/media/31a0b1_2a7321c29f1e49afa3c2cff18e741d5b~mv2.png/v1/fill/w_132,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logotipo%2B9.png',
  beehiivSubscribeUrl: 'https://pablos-newsletter-a7789f.beehiiv.com/subscribe',
  linkedinUrl:         'https://www.linkedin.com/company/fillipgrp/posts/?feedView=all'
};

const MONTHLY_GROUPS = [

  // MAY 2026
  {
    slug: 'may-2026',
    isCurrent: true,
    monthLabel: 'May 2026',
    editionTag: 'Sports & Entertainment',
    publishedDate: '2026-05-22',
    dateRange: 'May 1–22, 2026',
    introLine: 'The month the World Cup window reshaped capital: Ramos buys Sevilla for €450M, the WNBA hits its highest-ever revenue multiple, LIV Golf hunts for a bridge round as PIF exits, the Raiders restructure at $9.9B, and Netflix confirms it wants the World Cup rights.',
    issues: [

      // ISSUE 01
      {
        slug: 'issue-01-may-2026',
        issueNumber: '01',
        weekLabel: 'Issue 01',
        dateRange: 'May 1–22, 2026',
        publishedDate: '2026-05-22',
        issueTitle: 'Issue 01 — May 2026',
        editionTag: 'Sports & Entertainment',
        introLine: 'Seven signals from May: Sergio Ramos acquires Sevilla for €450M as the World Cup approaches, the WNBA posts the highest revenue multiple in professional sports, LIV Golf engineers a survival raise as PIF exits, the Raiders restructure at $9.9B with Silver Lake and Tom Brady, FIFA ends 50 years with Panini to hand Topps its biggest collectibles mandate, the World Cup final gets its first halftime show with Madonna, Shakira, and BTS, and Netflix confirms it is positioning for the next World Cup broadcast rights cycle.',
        shareText: 'Ramos buys Sevilla, WNBA hits $5.55B, LIV Golf\'s survival raise, Raiders at $9.9B, FIFA/Topps, and Netflix wants the World Cup — Issue 01 of Fillip.',
        coreSignal: 'Sports capital is repricing across three vectors simultaneously: franchise ownership (Ramos, Raiders), women\'s leagues (WNBA), and IP platforms (Topps, Netflix). Every deal this month reinforces the same thesis — live sports and entertainment are the last defensible media category, and the World Cup is the moment that defines the next cycle\'s floor.',
        ecosystemNews: [
          {
            headline: 'Mascarita Sagrada Returns at WWE Backlash via Danhausen Storyline',
            body: 'At Backlash on May 9, Danhausen brought out "Mini Danhausen" — confirmed by PW Insider as Mascarita Sagrada of AAA. His participation is tied to a developing storyline with Danhausen within WWE\'s main roster. Sagrada previously appeared in WWE as "El Torito" from 2013 to 2015 with PPV appearances and main-roster storylines.',
            sourceName: 'Full Article',
            sourceUrl: 'https://www.mediotiempo.com/lucha-libre/mascarita-sagrada-aparece-en-wwe-backlash-y-aficionados-lo-celebran'
          },
          {
            headline: 'AAA Megacampeonato Defended on Monday Night Raw — First Defense on a Weekly WWE Show',
            body: 'On May 11, Dominik Mysterio retained the AAA Megacampeonato on Raw against "The Original" El Grande Americano — the first defense of the title on a weekly WWE program. The championship is now actively defended within WWE\'s main roster schedule. Monday Night Raw has broadcast globally on Netflix since January 2025.',
            sourceName: 'Full Article',
            sourceUrl: 'https://www.record.com.mx/historia/historico-dominik-mysterio-defendio-el-megacampeonato-de-aaa-en-monday-night-raw-ante-el-original-grande-americano-2026051200595416214'
          },
          {
            headline: 'AAA Noche de los Grandes — May 30 at Arena Monterrey',
            body: 'On May 30 at Arena Monterrey: Máscara vs. Máscara, AAA Latin American Championship, and AAA Tag Team Championship. Co-produced with WWE in Premium Live Event format with international production quality. Tickets from 502 pesos (general) to 12,310 pesos (Access 360); pre-sale reported near sell-out weeks before the event.',
            sourceName: 'Full Article',
            sourceUrl: 'https://www.infobae.com/mexico/deportes/2026/05/09/aaa-y-wwe-invaden-monterrey-revelan-fecha-y-precios-para-la-noche-de-los-grandes/'
          }
        ],
        latamAngle: 'Two stories this month put Latin America at the center. Mexico is a co-host of the 2026 World Cup — Estadio Azteca in Mexico City is one of the tournament\'s host venues, making it the only stadium in history to host three World Cup finals. Within the same 12-month window, Mexico City also hosts the F1 Grand Prix (October 30–November 1) and an NFL regular-season game (49ers vs. Vikings, November 22) — three of the biggest live sports properties in the world, same city, same calendar year. The second story is Shakira: Colombia\'s most commercially successful artist co-headlines the first halftime show in World Cup final history, performing before a potential 1.5 billion viewers at a tournament being played partly on Mexican soil.',
        stories: [
          {
            order: 1,
            tag: 'Football · M&A',
            accentText: '€450M',
            headline: 'Sergio Ramos Acquires 80% of Sevilla FC for €450M as the World Cup Approaches',
            emailSummary: '<strong>Sergio Ramos</strong> and <strong>Five Eleven Capital</strong> agreed on May 12 to acquire <strong>80% of Sevilla FC</strong> for <strong>€450 million</strong>, pending LaLiga and CSD approval. If Sevilla is relegated, the price drops 25% (€112.5M), recoverable upon promotion. The Ramos family retains operational control. With the <strong>World Cup weeks away</strong>, Ramos returns to the center of global football in an entirely new role — from the pitch to the boardroom at the sport\'s biggest moment.',
            whyItMatters: 'A player-to-owner story at the most-watched event in sports history. If the deal clears regulatory review, it rewrites the playbook for athlete ownership and raises the floor for former-player capital credibility.',
            signalText: 'A former player bought a top-flight football club for €450M.',
            extendedAnalysis: 'The €450M figure prices Sevilla at a significant premium relative to its recent on-field performance. What Ramos is buying is not current earnings but future leverage: Sevilla\'s academy pipeline, Estadio Ramón Sánchez-Pizjuán\'s 43,000-seat stadium, and a moment of maximum market attention. The relegation protection clause is a standard downside covenant, but the underlying thesis is that Spanish football franchises are structurally underpriced relative to their global commercial upside. Five Eleven Capital\'s involvement signals institutional backing — this is not a vanity deal. If LaLiga approves, it sets a new comps ceiling for mid-table La Liga clubs and opens the door to the Ramos family bringing in additional institutional equity over time.',
            sourceName: 'OneFootball',
            sourceUrl: 'https://onefootball.com/es/noticias/sergio-ramos-agrees-450m-deal-to-buy-sevilla-with-north-american-investors-42860766',
            publishedDate: '2026-05-12'
          },
          {
            order: 2,
            tag: 'Basketball · Valuation',
            accentText: '$5.55B',
            headline: 'WNBA Is Collectively Worth $5.55B — the Highest Revenue Multiple in Professional Sports',
            emailSummary: 'The WNBA\'s <strong>13 franchises</strong> are collectively worth <strong>$5.55 billion</strong>; the <strong>Golden State Valkyries</strong> lead at <strong>$850M</strong>, with a league average of <strong>$427M per team</strong> — up <strong>59% year-over-year</strong> and <strong>+345% since 2024</strong>. The league operates at the highest price-to-revenue multiple in professional sports: <strong>13.6x</strong>, ahead of the NBA (13.5x) and NFL (10.3x). New TV deals with <strong>ESPN, NBC, and Amazon</strong> will generate <strong>$281M per year</strong> — a <strong>500% jump</strong> over previous agreements.',
            whyItMatters: 'At 13.6x revenue, investors are pricing future growth, not present earnings. The next inflection point: whether broadcast fees follow the valuation curve into the next rights cycle.',
            signalText: 'WNBA franchise values are up 345% in two years and now carry the highest revenue multiple in professional sports.',
            extendedAnalysis: 'A 13.6x price-to-revenue multiple means investors are not pricing current earnings — they are buying optionality on the next broadcast deal, international expansion, and the broader cultural moment in women\'s sports. The NBA comparison is instructive: NBA teams carry decades of established media deals, global brand equity, and deep corporate sponsorship. The WNBA getting there in under a decade of serious investment is extraordinary. The risk is that the valuation overshoot leads to disappointment if the next rights cycle does not follow through — but with ESPN, NBC, and Amazon all in at a 5x increase, the broadcast infrastructure now matches the expectation.',
            sourceName: 'Sportico',
            sourceUrl: 'https://www.sportico.com/valuations/teams/2026/wnba-team-values-2026-valkyries-liberty-fever-1234891620/',
            publishedDate: '2026-05-15'
          },
          {
            order: 3,
            tag: 'Golf · Private Equity',
            accentText: '$350M',
            headline: 'LIV Golf Pitches $250–350M Capital Raise to Bridge Operations as PIF Prepares to Exit',
            emailSummary: '<strong>LIV Golf</strong>, advised by <strong>Ducera Partners</strong>, is pitching a <strong>$250–$350 million capital raise</strong> to bridge operations beyond 2026 as <strong>Saudi Arabia\'s PIF</strong> — which has invested over <strong>$5 billion</strong> to date — prepares to exit. Revenue <strong>doubled from 2024 to 2025</strong> and is on pace to add <strong>$100 million more in 2026</strong>. <strong>Bryson DeChambeau</strong> estimates each of the 10 franchises could sell for close to <strong>$200 million</strong>. The tour has no broadcast fee income and a timeline defined entirely by its backer\'s exit.',
            whyItMatters: 'The most consequential sovereign-capital exit in modern sports. Who fills the $5B gap — and on what terms — defines whether LIV survives as an independent circuit or becomes a bargaining chip in the PGA Tour negotiations.',
            signalText: 'Sovereign capital is exiting LIV Golf after $5B invested — the tour now needs private buyers to keep running.',
            extendedAnalysis: 'PIF\'s exit from the primary backer role does not mean LIV Golf disappears. What changes is the cost of capital. Under PIF backing, LIV operated with essentially unlimited patient capital — no profitability timeline, no return requirements, just geopolitical soft power objectives. Private market capital operates differently. A $350M raise at even modest return expectations creates a three-to-five year window for LIV to hit commercial viability or face restructuring. The team franchise model — with DeChambeau\'s $200M-per-franchise estimate — is the exit thesis: sell the franchises, generate liquidity, and build a tour that pays for itself. The PGA Tour is watching closely: a distressed LIV makes for a weaker negotiating partner, but a solvent LIV with new institutional backing complicates any merger or acquisition discussions.',
            sourceName: 'Sportico',
            sourceUrl: 'https://www.sportico.com/leagues/golf/2026/liv-golf-seeking-350-million-capital-raise-1234901181/',
            publishedDate: '2026-05-20'
          },
          {
            order: 4,
            tag: 'NFL · Franchise · Private Equity',
            accentText: '$9.9B',
            headline: 'Raiders Valued at $9.9B — Silver Lake, Tom Brady, and TKO Executives Join Ownership',
            emailSummary: 'The <strong>Las Vegas Raiders</strong> were formally valued at <strong>$9.9 billion</strong> as the NFL approved an ownership reshuffle bringing in <strong>Silver Lake</strong>, <strong>Tom Brady</strong>, and key <strong>WME/TKO</strong> executives. <strong>Egon Durban</strong> expands to <strong>22%</strong> personal ownership; Brady serves as de facto president of football operations; <strong>Ari Emanuel</strong> and <strong>Mark Shapiro</strong> hold 1.4% and 0.6% respectively. The valuation is a <strong>14x step-up</strong> from the $700 million paid for the same 25% block in 2007. <strong>Mark Davis</strong> retains 36% and control — but Durban secured a first option to buy the franchise upon Davis\'s departure or death.',
            whyItMatters: 'A 14x multiple in 17 years. NFL franchise appreciation keeps compressing the PE return thesis while simultaneously setting new valuation floors for every team behind it.',
            signalText: 'The Raiders are worth $9.9B — a 14x increase on the same ownership block in 17 years.',
            extendedAnalysis: 'The succession right Durban secured — first option to buy upon Davis\'s departure or death — is the most significant element of this deal. At $9.9B today, a future acquisition could easily require $12–15B depending on market conditions. What Silver Lake is buying is not just a financial return; it is the right to own the Raiders outright at a future moment of its choosing, in a market (Las Vegas) that is still maturing as a sports hub. Brady\'s role is both operational and reputational — a Hall-of-Fame quarterback as president of football operations gives the franchise a talent-acquisition credibility signal that no other team can replicate. The convergence of entertainment (Emanuel, Shapiro, Brady) and finance (Silver Lake) in one ownership group represents the future template of NFL team ownership.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/articles/raiders-ownership-takes-massive-shift-200152348.html',
            publishedDate: '2026-05-20'
          },
          {
            order: 5,
            tag: 'IP · Licensing · Collectibles',
            accentText: '50+ years',
            headline: 'FIFA Ends 50+ Years with Panini — Topps Takes World Cup Collectibles from 2031',
            emailSummary: '<strong>FIFA</strong> and <strong>Fanatics</strong> signed a long-term exclusive license: <strong>Topps</strong> will produce cards, stickers, and games for the World Cup and FIFA events beginning in 2031, ending <strong>Panini\'s relationship since 1970</strong> (except 1994). <strong>Panini</strong>, valued at <strong>$5.8B</strong>, has retained <strong>Citigroup</strong> to explore strategic options. CEO <strong>Michael Rubin</strong> noted UEFA went from $15M to $200M+ in collectibles under Topps; <strong>Fanatics\'</strong> collectibles business is approaching <strong>$5B</strong> in 2026.',
            whyItMatters: 'FIFA is treating collectibles as a high-growth asset category, not a legacy licensing line. Panini\'s fate now defines the floor for disrupted IP holders across sports properties globally.',
            signalText: 'FIFA dropped Panini after 50+ years and signed with Fanatics.',
            extendedAnalysis: 'The Fanatics/Topps model is fundamentally different from Panini\'s approach. Fanatics controls the direct-to-consumer channel — its e-commerce network, its retail platform, its digital collectibles infrastructure — which means it uses a FIFA license as a flywheel for recurring engagement, not just a licensing fee. CEO Michael Rubin\'s claim that UEFA\'s collectibles business went from $15M to $200M+ under Topps is the proof of concept. Panini\'s structural disadvantage is that it is a manufacturing and distribution company in a world where the value is in the platform and the consumer relationship. Retaining Citigroup to explore strategic options signals the board understands the shift is existential — a sale to a media or sports entertainment company with existing consumer distribution is the most logical outcome.',
            sourceName: 'Inside World Football',
            sourceUrl: 'https://www.insideworldfootball.com/2026/05/08/fifa-swaps-panini-topps-long-term-deal-starting-2031/',
            publishedDate: '2026-05-08'
          },
          {
            order: 6,
            tag: 'Entertainment · Live Events',
            accentText: '1.5B viewers',
            headline: 'Madonna, Shakira, and BTS to Co-Headline the First-Ever World Cup Final Halftime Show',
            emailSummary: 'The three acts will co-headline the <strong>first halftime show at a World Cup final</strong> on <strong>July 19 in New Jersey</strong> — 11 minutes, curated by <strong>Chris Martin</strong>. <strong>Shakira</strong> releases "Dai Dai" (feat. Burna Boy) this week; <strong>Madonna</strong> drops "Confessions II" on July 3; <strong>BTS</strong> returns from three years of mandatory military service. The 2022 World Cup final was watched by more than <strong>1.5 billion people</strong> — the most-watched broadcast in history.',
            whyItMatters: 'The World Cup final now competes directly with the Super Bowl halftime as a global entertainment platform. The 1.5B potential audience resets the sponsorship adjacency value for every brand in the window.',
            signalText: 'The World Cup final has a halftime show for the first time in the tournament\'s history.',
            extendedAnalysis: 'The Super Bowl attracts roughly 125 million US viewers; the World Cup final attracts 1.5 billion globally, across demographics and markets that American sports properties do not touch. FIFA\'s decision to introduce a halftime show — a format it deliberately avoided for decades — signals its acknowledgment that the entertainment platform surrounding the match is now a co-equal product. The sponsor adjacency implications are significant: every brand that bought into the halftime window is now buying against a potential 1.5B-person audience. BTS\'s return from military service makes this the most culturally amplified entertainment event of 2026 by audience demographics alone. The convergence of K-pop (BTS), Latin music (Shakira), and pop royalty (Madonna) is a deliberate global market signal — each act is a top commercial draw in a different world region.',
            sourceName: 'BBC Sport',
            sourceUrl: 'https://www.bbc.com/sport/football/articles/c5yrl54561do',
            publishedDate: '2026-05-13'
          },
          {
            order: 7,
            tag: 'Streaming · FIFA · Rights',
            accentText: '$25B buyback',
            headline: 'Netflix Confirms It Wants World Cup Rights as Fox Deal Expires After 2026',
            emailSummary: '<strong>Netflix VP of Sports Gabe Spitzer</strong> confirmed the streamer wants to be in the conversation for <strong>FIFA Men\'s World Cup US rights</strong> — the most valuable live sports package not yet under a streaming-first deal. <strong>Fox Sports\'</strong> deal expires after 2026. Netflix already holds exclusive US rights to the <strong>2027 and 2031 Women\'s World Cups</strong> and live deals in Japan, Italy, Spain, and Mexico. Netflix recently authorized a <strong>$25B stock buyback</strong>.',
            whyItMatters: 'The Fox expiry is the biggest rights opening in sports since Monday Night Football moved to cable. Netflix\'s capital position and global-first strategy make it the most disruptive potential bidder.',
            signalText: 'Netflix confirmed it wants the FIFA Men\'s World Cup US broadcast rights.',
            extendedAnalysis: 'Netflix\'s path to live sports has been deliberate and staged: sports documentaries, episodic events (The Netflix Cup), international rights (WWC, Bundesliga, Ligue 1), and now signaling intent on the most-watched event in the world. The $25B buyback is relevant context: Netflix is signaling that it sees its growth trajectory as intact — the balance sheet posture of a company preparing to make large bets. The Fox deal expiry creates a multi-year negotiation window; the next US rights cycle likely covers the 2030 and 2034 tournaments. Netflix is not bidding on 2026; it is positioning for 2030. The incumbent bidders (NBC, ESPN, Paramount) all have bundling constraints and affiliate relationships that limit how aggressively they can pay — Netflix has none of those constraints.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/articles/netflix-vp-sports-confirms-streamer-230045495.html',
            publishedDate: '2026-05-21'
          }
        ]
      }
    ]
  }

];
