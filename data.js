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

  // JUNE 2026
  {
    slug: 'june-2026',
    isCurrent: true,
    monthLabel: 'June 2026',
    editionTag: 'Sports · Entertainment · IP · Capital',
    publishedDate: '2026-06-08',
    dateRange: 'May 30 – June 8, 2026',
    introLine: 'Week one of June: Napoli rejects a €2B American bid, Ramos\'s €444M Sevilla deal collapses, Dončić invests in a Rome-bound Italian club eyeing NBA Europe, Curry signs a 10-year $400M deal with Li-Ning, Airbnb partners with the WSL, FIFA and Netflix launch a World Cup game, UMG rejects Ackman\'s $64B takeover, Michael crosses $854M to become Lionsgate\'s highest-grossing film, and Backrooms crosses $212M in 10 days to become A24\'s all-time record holder.',
    issues: [

      // WEEK 1
      {
        slug: 'week-1-june-2026',
        issueNumber: '1',
        weekLabel: 'Week 1',
        dateRange: 'May 30 – June 8, 2026',
        publishedDate: '2026-06-08',
        issueTitle: 'Week 1 — June 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week one of June: Napoli rejects a €2B American bid, Ramos\'s €444M Sevilla deal collapses, Dončić invests in a Rome-bound Italian club eyeing NBA Europe, Curry signs a 10-year $400M deal with Li-Ning, Airbnb partners with the WSL with a £1M player fund, FIFA and Netflix launch a World Cup game on June 11, UMG rejects Ackman\'s $64B takeover and buys back €250M of his stake, Michael crosses $854M to become Lionsgate\'s highest-grossing film, and Backrooms crosses $212M in 10 days to become A24\'s all-time highest-grossing film.',
        shareText: 'Napoli rejects €2B, Ramos\'s Sevilla deal collapses, Dončić buys a Rome club, Curry signs $400M with Li-Ning, FIFA × Netflix launch a World Cup game, UMG rejects $64B, Backrooms hits $212M — Week 1 of Fillip.',
        coreSignal: 'Three controlling parties rejected combined offers exceeding €65 billion this week: Napoli at €2B, Sevilla\'s shareholders at €444M, UMG\'s board at $64.4B. In each case, the incumbent believed the offer undervalued their asset. The deals that closed moved in the opposite direction — Curry\'s $400M Li-Ning pact, FIFA\'s Netflix game, Dončić\'s NBA Europe franchise — built on new geographies and distributors outside the traditional Western ownership playbook. The most valuable assets in sports and entertainment are being priced by the people who hold them, not by those trying to buy them.',
        ecosystemNews: [
          {
            headline: 'WWE Broadcasts AAA\'s Grande Americano Mask Match on Netflix After Raw',
            body: 'On June 1, 2026, WWE gave the AAA Noche de los Grandes mask match — in which Chad Gable was unmasked as the Original Grande Americano — an encore broadcast on Netflix immediately following Monday Night Raw. The replay extended the cross-promotional AAA × WWE storyline to Netflix\'s global subscriber base, becoming one of the most shared lucha libre moments in recent memory.',
            sourceName: 'Record MX',
            sourceUrl: 'https://www.record.com.mx/historia/wwe-sorprende-en-netflix-con-la-repeticion-de-la-lucha-de-mascara-contra-mascara-del-grande-americano-2026060121014813548'
          },
          {
            headline: 'TripleManía 34 Goes Two Nights: Las Vegas on September 11, Arena CDMX on September 13',
            body: 'AAA confirmed TripleManía 34 in a two-night format for the first time in the event\'s history. Night 1 takes place September 11 at the Luxor Hotel & Casino in Las Vegas — AAA\'s formal entry into the U.S. live events market — with Night 2 on September 13 at Arena CDMX. The official card has not been announced.',
            sourceName: 'Vanguardia',
            sourceUrl: 'https://vanguardia.com.mx/deportes/triplemania-34-lucha-libre-aaa-llegara-a-las-vegas-y-tendra-gran-cierre-en-la-arena-cdmx-FF21066535'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Ownership · Football',
            accentText: '€2B',
            headline: 'Napoli Owner Rejects €2 Billion American Consortium Bid',
            emailSummary: '<strong>Matt Rizzetta</strong> of <strong>Underdog Global Partners</strong> led a consortium offering <strong>€2 billion</strong> for <strong>Napoli</strong> — a significant premium above the club\'s <strong>€1.1 billion</strong> May 2025 valuation. Owner <strong>Aurelio De Laurentiis</strong> (77), who rescued the club from bankruptcy in 2004, rejected the bid outright. No formal due diligence was reached. The proposed project aimed to create a multi-sport hub integrating football and basketball infrastructure.',
            whyItMatters: 'A €2B rejection at a significant premium sets a public price floor for one of Serie A\'s top franchises — and confirms that Italian football\'s most valuable clubs remain in the hands of owner-operators unwilling to monetize even at a material premium.',
            signalText: 'Aurelio De Laurentiis rejected a €2 billion takeover bid for Napoli, declining to enter formal due diligence.',
            sourceName: 'Goal',
            sourceUrl: 'https://www.goal.com/en/lists/napoli-owner-rejects-2bn-takeover-bid-american-group-not-for-sale/blt8e76389fff9db06f',
            publishedDate: '2026-06-01'
          },
          {
            order: 2,
            tag: 'Ownership · M&A',
            accentText: '€444M',
            headline: 'Sergio Ramos\'s €444M Sevilla Takeover Collapses Before Deadline',
            emailSummary: '<strong>Sergio Ramos</strong> led a consortium — including Mexican investors and financing from <strong>Banco Santander</strong> — to acquire <strong>85% of Sevilla</strong> for <strong>€444 million</strong>. In late-stage negotiations, the group restructured its offer by splitting the capital increase into two installments. <strong>Sevilla\'s shareholders terminated talks</strong>. <strong>La Liga</strong>\'s regulatory intervention contributed to the collapse. The club faces a <strong>June 30 deadline</strong> to complete a €120M capital increase or face acute financial distress.',
            whyItMatters: 'The collapse leaves Sevilla without critical capital days before a hard regulatory deadline, placing one of Spain\'s most storied clubs in financial distress with limited time to secure an alternative investor.',
            signalText: 'Sergio Ramos\'s consortium walked away from a €444 million agreement to acquire 85% of Sevilla.',
            sourceName: 'Goal',
            sourceUrl: 'https://www.goal.com/en/lists/sergio-ramos-sevilla-takeover-collapse-la-liga-investment-news/blt0608ab9cd499a19a',
            publishedDate: '2026-05-28'
          },
          {
            order: 3,
            tag: 'Investment · Basketball',
            headline: 'Luka Dončić Invests in Italian Club Relocating to Rome for NBA Europe',
            emailSummary: '<strong>Luka Dončić</strong> joined an investor group led by former <strong>Dallas Mavericks</strong> president <strong>Donnie Nelson</strong> to acquire <strong>Vanoli Cremona</strong>, relocating to <strong>Rome</strong> for the 2026–27 season. The team will position itself for a spot in <strong>NBA Europe</strong>, a 16-team league under development with FIBA that could debut as early as fall 2027. Stake size was not disclosed. Dončić: "I have dreamed about owning a team in Europe for a long time."',
            whyItMatters: 'NBA Europe is the most significant structural expansion in professional basketball in decades. Dončić is simultaneously a player and franchise owner positioning for inclusion in a league targeting Rome, Milan, London, Paris, and other major European markets.',
            signalText: 'Luka Dončić joined an investment group acquiring an Italian club relocating to Rome to compete for a spot in NBA Europe.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/nba/article/luka-doncic-invests-in-italian-team-thats-relocating-to-rome-could-represent-city-in-nba-europe-202324873.html',
            publishedDate: '2026-05-29'
          },
          {
            order: 4,
            tag: 'Sponsorship · Brand',
            accentText: '$400M',
            headline: 'Stephen Curry Signs 10-Year, $400M Endorsement Deal with Li-Ning',
            emailSummary: '<strong>Stephen Curry</strong> signed a <strong>10-year, $400 million</strong> endorsement deal with Chinese sportswear brand <strong>Li-Ning</strong>, ending his sneaker free agency after splitting from <strong>Under Armour</strong> in November 2025. The agreement covers basketball, athleisure, a golf line, and gives Curry the right to sign athletes under <strong>Curry Brand</strong>. <strong>Li-Ning</strong> plans Curry Brand retail stores in the US and China. Curry chose Li-Ning over at least one competitor that offered higher financial terms.',
            whyItMatters: 'A $400M shoe deal with a Chinese brand — in the current trade environment — signals that global athlete IP operates on its own commercial logic. Curry Brand\'s entry into China with Li-Ning\'s retail infrastructure is the most significant expansion of an NBA player brand into Asia in years.',
            signalText: 'Stephen Curry signed a 10-year, $400 million endorsement deal with Chinese sportswear brand Li-Ning.',
            sourceName: 'ESPN',
            sourceUrl: 'https://www.espn.com/nba/story/_/id/48940127/stephen-curry-signs-chinese-sportswear-company-li-ning',
            publishedDate: '2026-06-02'
          },
          {
            order: 5,
            tag: 'Sponsorship · Women\'s Sports',
            accentText: '£1M',
            headline: 'Airbnb Signs Multi-Year WSL Partnership with £1M Player Fund',
            emailSummary: '<strong>Airbnb</strong> became the official accommodation and experiences partner of England\'s <strong>Women\'s Super League</strong> in a multi-year deal. The partnership includes a three-year <strong>£1 million Player Accommodation Fund</strong>, providing <strong>$2,000 in Airbnb credit</strong> per eligible player during every WSL and WSL2 transfer window. Airbnb cited a 15% year-on-year increase in bookings around WSL fixtures. <strong>WSL attendance has risen 31%</strong> since the 2022–23 season.',
            whyItMatters: 'Consumer brands structuring deals around athlete welfare — not just logo placement — is a new sponsorship model emerging in women\'s sports. The player accommodation fund addresses a known barrier to recruitment, giving Airbnb direct utility inside the league\'s operations.',
            signalText: 'Airbnb signed a multi-year partnership with the Women\'s Super League including a £1 million three-year player accommodation fund.',
            sourceName: 'Sportcal',
            sourceUrl: 'https://www.sportcal.com/sponsorship/airbnb-continues-sports-strategy-with-wsl-partnership/',
            publishedDate: '2026-06-02'
          },
          {
            order: 6,
            tag: 'Gaming · Streaming',
            headline: 'FIFA and Netflix Launch Free World Cup Game on June 11',
            emailSummary: '<strong>FIFA</strong> and <strong>Netflix Games</strong> announced <strong>FIFA World Cup: Launch Edition</strong>, developed by <strong>Delphi Interactive</strong>, launching <strong>June 11</strong> — the day the 2026 World Cup begins — across 19 markets including the US, UK, Germany, France, and Mexico. The game is free with a Netflix subscription. Players use a phone as controller and TV as screen, with all <strong>48 teams</strong>, <strong>16 real stadiums</strong>, and <strong>1,248 players</strong>. The game updates daily throughout the tournament based on real results.',
            whyItMatters: 'FIFA is building a direct gaming relationship with Netflix\'s subscriber base at peak global attention — entirely outside EA\'s ecosystem. Netflix describes this as its biggest gaming push to date, using the World Cup to move gaming from an optional feature to a front-page product.',
            signalText: 'FIFA and Netflix Games launched a free World Cup video game available to all Netflix subscribers from June 11, 2026.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/gaming/news/fifa-video-game-netflix-world-cup-1236766390/',
            publishedDate: '2026-06-04'
          },
          {
            order: 7,
            tag: 'IP · Capital Markets',
            accentText: '$64B',
            headline: 'UMG Rejects Ackman\'s $64B Takeover Bid and Buys Back €250M',
            emailSummary: '<strong>Universal Music Group\'s</strong> board unanimously rejected a <strong>$64.4 billion</strong> cash-and-stock takeover bid from <strong>Bill Ackman\'s Pershing Square</strong> as "fundamentally and materially undervaluing" the company. Ackman subsequently exited his <strong>4.7% stake</strong> (~80.6 million shares). UMG repurchased <strong>€250 million ($290.8M)</strong> of those shares at <strong>€17.66 per share</strong> — outside its existing buyback program. UMG\'s stock was down <strong>14% over six months</strong> and 33% over 12 months at the time of the announcement.',
            whyItMatters: 'UMG rejecting the largest publicly offered music rights acquisition and immediately buying back the departing stake signals the board believes its catalogue is worth materially more than both the bid and current market pricing. The failed offer sets a public $64B floor on how management values UMG\'s IP.',
            signalText: 'UMG\'s board rejected Bill Ackman\'s $64.4 billion takeover bid and repurchased €250 million of Pershing Square\'s exiting stake.',
            sourceName: 'The Wrap',
            sourceUrl: 'https://www.thewrap.com/industry-news/business/universal-music-group-bill-ackman-pershing-square-stock-buyback/',
            publishedDate: '2026-06-04'
          },
          {
            order: 8,
            tag: 'Entertainment · Box Office',
            accentText: '$854M',
            headline: 'Michael Biopic Becomes Lionsgate\'s All-Time Highest-Grossing Film',
            emailSummary: 'The <strong>Michael Jackson biopic</strong> <strong>Michael</strong>, directed by <strong>Antoine Fuqua</strong> and starring <strong>Jaafar Jackson</strong>, opened to <strong>$97.2 million</strong> domestically and <strong>$217.4 million</strong> worldwide — Lionsgate\'s biggest opening ever. Now in its seventh weekend, the film has crossed <strong>$854.6 million globally</strong>. It surpassed <strong>Bohemian Rhapsody</strong> as the highest-grossing musical biopic in US history on its 16th release day. A Japan opening on June 12 is expected to push it past <strong>$900 million</strong> worldwide.',
            whyItMatters: 'A contested biopic delivering $854M+ globally confirms that estate-approved IP with a built-in fan base can generate blockbuster returns regardless of subject controversy — resetting the valuation framework for life-rights acquisitions and music catalogue film deals.',
            signalText: 'Michael crossed $854 million globally in its seventh weekend, becoming Lionsgate\'s highest-grossing film of all time.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/06/box-office-michael-lionsgate-record-1236942231/',
            publishedDate: '2026-06-02'
          },
          {
            order: 9,
            tag: 'Entertainment · Box Office',
            accentText: '$212M',
            headline: 'Backrooms Becomes A24\'s First Film to Cross $200 Million',
            emailSummary: '<strong>Backrooms</strong> crossed <strong>$212 million globally</strong> in just <strong>10 days</strong> of release — overtaking <strong>Marty Supreme</strong> ($191M) to become <strong>A24\'s all-time highest-grossing film</strong>. Domestic total stands at <strong>$135 million</strong>; international at <strong>$77 million</strong> across 57 territories. <strong>Latin America</strong> led international performance with <strong>$24.2 million</strong> — A24\'s strongest regional total ever. Production budget: ~<strong>$10 million</strong>, co-financed by A24 and Chernin Entertainment.',
            whyItMatters: 'A $10M film crossing $200M globally in 10 days and becoming A24\'s all-time leader confirms that creator-economy directors with built-in digital audiences can outperform the studio system\'s cost model at scale. Latin America driving international performance is the most significant regional signal in A24\'s distribution history.',
            signalText: 'Backrooms crossed $212 million globally in 10 days, becoming A24\'s highest-grossing film ever on a $10 million budget.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/box-office/backrooms-a24-highest-grossing-movie-overtaking-marty-supreme-1236768950/',
            publishedDate: '2026-06-07'
          }
        ]
      }

    ]
  },

  // MAY 2026
  {
    slug: 'may-2026',
    isCurrent: false,
    monthLabel: 'May 2026',
    editionTag: 'Sports · Entertainment · IP · Capital',
    publishedDate: '2026-06-01',
    dateRange: 'May 23 – June 1, 2026',
    introLine: 'Nine signals from Week 4: MSG files to split the Knicks and Rangers, Caesars sells for $17.6B, the CFL signs a $500M broadcast landmark, CBS locks Women\'s Super League rights through 2029, Apple broadcasts MLS with 15 iPhones, SailGP signs Rome, Backrooms sets A24\'s opening record on a $10M budget, CNN sues Perplexity, and Bad Bunny launches 150 pieces with Zara.',
    issues: [

      // WEEK 4
      {
        slug: 'week-4-may-2026',
        issueNumber: '4',
        weekLabel: 'Week 4',
        dateRange: 'May 23 – June 1, 2026',
        publishedDate: '2026-06-01',
        issueTitle: 'Week 4 — May 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week four of May: MSG Sports files to split the Knicks and Rangers into two public companies, Caesars goes to Fertitta for $17.6B, the CFL signs its largest broadcast deal ever at $500M, CBS locks Women\'s Super League rights through 2029, Apple broadcasts MLS with 15 iPhones, SailGP signs Rome to a three-year deal, Backrooms sets A24\'s opening record on a $10M budget, CNN sues Perplexity, and Bad Bunny launches 150 pieces with Zara.',
        shareText: 'MSG splits the Knicks and Rangers, Caesars sold for $17.6B, CFL\'s $500M broadcast deal, A24\'s opening record, CNN vs. Perplexity, and Bad Bunny x Zara — Week 4 of Fillip.',
        coreSignal: 'The throughline this week is capital repricing the creator layer. The CFL\'s $500M deal adds YouTube as a distribution partner. Apple uses iPhones to broadcast professional sports. Backrooms earns $81M for A24 on a $10M budget directed by a 20-year-old YouTuber. CNN sues Perplexity for distributing journalism that took real resources to produce. Across sports, film, and media, the economic advantage is shifting to whoever controls the direct audience relationship — and every incumbent structure is either adapting or being disrupted.',
        latamAngle: 'Bad Bunny — Benito Antonio Martínez Ocasio from Vega Alta, Puerto Rico — is launching a 150-piece global fashion collection with Zara bearing his given name. As the most-streamed artist in the world for multiple consecutive years, his crossover from music into durable consumer goods at Zara\'s scale — 5,800+ stores across 93 markets — is the most commercially significant product launch by a Latin American artist in 2026. The Benito Antonio name signals intent: this is not a celebrity licensing deal, it is an artist asserting his creative identity as a standalone commercial IP.',
        ecosystemNews: [
          {
            headline: 'El Grande Americano Wins Mask Match at Noche de los Grandes — Chad Gable Unmasked',
            body: 'At AAA\'s Noche de los Grandes on May 30 at Arena Monterrey, El Grande Americano defeated Original Grande Americano in the main mask match. Pimpinela Escarlata intervened with a guitar shot that shifted momentum; both competitors were busted open. Upon losing, Original Grande Americano was unmasked and revealed to be WWE\'s Chad Gable — deepening the cross-promotional storyline between AAA and WWE.',
            sourceName: 'Medio Tiempo',
            sourceUrl: 'https://www.mediotiempo.com/lucha-libre/resultado-el-grande-americano-vs-original-grande-americano-quien-gano-la-noche-de-los-grandes'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Ownership · Corporate',
            headline: 'MSG Sports Files with SEC to Split the Knicks and Rangers into Separate Companies',
            emailSummary: '<strong>Madison Square Garden Sports Corp.</strong> filed a confidential initial <strong>Form 10</strong> registration statement with the <strong>SEC</strong> to split the <strong>New York Knicks</strong> and <strong>New York Rangers</strong> into two separate publicly traded companies. The MSG Sports board approved the plan in February. The Knicks company would include the Knicks and their G League affiliate; the Rangers company would include the Rangers and the Hartford Wolf Pack. <strong>Silver Lake</strong> holds a <strong>10% stake</strong> in MSG Sports. CEO <strong>James Dolan</strong> has shown no interest in selling control of the Knicks.',
            whyItMatters: 'A separation gives each franchise independent capital-raising capacity — including the ability to sell minority interests without forcing investors to buy exposure to both sports. The Knicks have been discussed as a target for global capital, including Middle Eastern money.',
            signalText: 'MSG Sports filed with the SEC to split the Knicks and Rangers into two separate publicly traded companies.',
            sourceName: 'Sports Business Journal',
            sourceUrl: 'https://www.sportsbusinessjournal.com/Articles/2026/05/18/msg-sports-takes-initial-steps-for-proposed-split-of-knicks-rangers-businesses/',
            publishedDate: '2026-05-18'
          },
          {
            order: 2,
            tag: 'M&A · Gaming',
            accentText: '$17.6B',
            headline: 'Caesars Entertainment Sold to Tilman Fertitta in a $17.6 Billion Deal',
            emailSummary: 'Billionaire hospitality operator <strong>Tilman Fertitta</strong> is acquiring <strong>Caesars Entertainment</strong> for <strong>$31 per share</strong> — a <strong>49% premium</strong> over its pre-rumor price — in a deal totaling approximately <strong>$17.6 billion</strong> including assumed debt. The combined entity spans <strong>60 casino resorts</strong>, more than <strong>200 William Hill sports betting locations</strong>, and over <strong>600 Fertitta Entertainment outlets</strong>. Shareholder approval is required; competing bids are permitted through <strong>July 11</strong>. Caesars traces its roots to 1930s Reno.',
            whyItMatters: 'Fertitta is consolidating two major gaming operators — including the William Hill sports betting network — into a single entity at a time when Las Vegas is repositioning as a premier live sports destination. The 49% premium sets a new comp for Strip asset valuations.',
            signalText: 'Tilman Fertitta agreed to acquire Caesars Entertainment for approximately $17.6 billion including assumed debt.',
            sourceName: 'ABC News',
            sourceUrl: 'https://abcnews.com/US/wireStory/caesars-entertainment-las-vegas-strip-icon-sold-6-133402453',
            publishedDate: '2026-05-28'
          },
          {
            order: 3,
            tag: 'Media Rights · Streaming',
            accentText: '$500M',
            headline: 'CFL Signs 6-Year Deal with Bell Media, DAZN, and YouTube Worth ~$500 Million',
            emailSummary: 'The <strong>CFL</strong> announced a six-year broadcast agreement with <strong>Bell Media</strong> (TSN/CTV), <strong>DAZN</strong>, and <strong>YouTube</strong> worth approximately <strong>$500 million</strong> — the league\'s largest media deal ever. <strong>TSN</strong> retains 60 of 81 regular-season games plus playoffs and the Grey Cup. <strong>DAZN Canada</strong> exclusively carries Saturday Night Football (~21 games/season) and becomes the global broadcaster outside Canada and the U.S. <strong>YouTube</strong> gets live pre-season games, CFL combine coverage, and an All-Access unscripted series. The previous <strong>TSN deal</strong> averaged <strong>$50 million per year</strong>.',
            whyItMatters: 'A three-partner structure with a traditional broadcaster, a streaming service, and a digital platform is the most diversified broadcast architecture in Canadian sports history. DAZN\'s global rights mandate gives the CFL its first serious international distribution infrastructure.',
            signalText: 'The CFL signed a six-year, $500 million broadcast deal — the largest media agreement in league history.',
            sourceName: 'CBC',
            sourceUrl: 'https://www.cbc.ca/sports/football/cfl/cfl-broadcast-deal-may-2026-9.7214764',
            publishedDate: '2026-05-28'
          },
          {
            order: 4,
            tag: 'Media Rights · Women\'s Sports',
            accentText: '183 matches',
            headline: 'CBS Sports Acquires U.S. Rights to Barclays Women\'s Super League Through 2029–30',
            emailSummary: '<strong>CBS Sports</strong> secured multi-year English-language U.S. broadcasting rights to the <strong>Barclays Women\'s Super League</strong>, England\'s top women\'s division, through the <strong>2029–30 season</strong> beginning September 2026. <strong>Paramount+</strong> will stream all <strong>183 matches per season</strong> — the most ever available under the competition\'s newly expanded format. One match per week airs on <strong>CBS Sports Network</strong>, with select fixtures on the <strong>CBS Sports Golazo Network</strong>. The WSL joins a CBS portfolio that includes the <strong>NWSL</strong> and <strong>UEFA Women\'s Champions League</strong>.',
            whyItMatters: 'CBS is consolidating women\'s soccer rights across three distinct tiers: domestic (NWSL), top European club competition (UWCL), and top European domestic league (WSL). Streaming all 183 WSL matches on Paramount+ makes it the de facto home of women\'s club football in the U.S.',
            signalText: 'CBS Sports acquired U.S. broadcast rights to all 183 Barclays Women\'s Super League matches per season through 2029–30.',
            sourceName: 'CBS Sports',
            sourceUrl: 'https://www.cbssports.com/soccer/news/cbs-sports-lands-barclays-womens-super-league-soccer-tv-rights/',
            publishedDate: '2026-05-28'
          },
          {
            order: 5,
            tag: 'Tech · Live Sports',
            accentText: '15 iPhones',
            headline: 'Apple Shoots an Entire MLS Match Using 15 iPhone 17 Pro Max Cameras',
            emailSummary: '<strong>Apple</strong> captured a complete professional soccer match — <strong>LA Galaxy vs. Houston Dynamo</strong> at Dignity Health Sports Park — using <strong>15 iPhone 17 Pro Max</strong> units. Cameras recorded in <strong>Apple Log 2</strong> format at <strong>1080p60</strong> via the <strong>Blackmagic Camera App</strong>, with feeds sent live to an on-site production truck. Some rigs were paired with <strong>Fujinon broadcast lenses valued at ~$265,000</strong>; goal net and elevated pole positions captured angles unavailable to traditional broadcast cameras.',
            whyItMatters: 'If smartphone hardware can deliver broadcast-ready live sports production, it compresses the infrastructure cost of covering live sports — particularly for emerging leagues and international markets where full broadcast deployments are cost-prohibitive.',
            signalText: 'Apple used 15 iPhone 17 Pro Max units to broadcast an entire MLS professional soccer match end-to-end.',
            sourceName: 'PetaPixel',
            sourceUrl: 'https://petapixel.com/2026/05/26/how-apple-shot-an-entire-mls-game-using-only-iphone/',
            publishedDate: '2026-05-26'
          },
          {
            order: 6,
            tag: 'Live Events · Expansion',
            headline: 'SailGP Signs Rome as Italy Grand Prix Host in Three-Year Deal',
            emailSummary: '<strong>SailGP</strong> confirmed <strong>Rome</strong> as the host city for the <strong>Italy Sail Grand Prix</strong> under a <strong>three-year initial agreement</strong>, with the inaugural event scheduled for <strong>September 11–12, 2027</strong> at a purpose-built race stadium at <strong>Porto di Roma</strong>. The event marks Italy\'s return to SailGP hosting since the 2023–24 season. It is part of a <strong>13-event 2027 season calendar</strong>. SailGP CEO <strong>Russell Coutts</strong> cited Rome\'s cultural heritage and modern infrastructure as central to the selection.',
            whyItMatters: 'A three-year hosting deal signals SailGP\'s shift toward long-term venue partnerships — the same capital-efficient model used by F1 and premium motorsport to lock in civic investment and sponsorship certainty across multiple seasons.',
            signalText: 'SailGP signed a three-year hosting agreement with Rome for an annual Italy Sail Grand Prix beginning September 2027.',
            sourceName: 'Sportcal',
            sourceUrl: 'https://www.sportcal.com/event/sailgp-confirms-rome-as-host-for-italy-sail-grand-prix/',
            publishedDate: '2026-05-26'
          },
          {
            order: 7,
            tag: 'IP · AI · Media',
            headline: 'CNN Sues Perplexity in Federal Court for Unlawful Distribution of Copyrighted Content',
            emailSummary: '<strong>CNN</strong>, owned by <strong>Warner Bros. Discovery</strong>, filed suit against <strong>Perplexity</strong> in New York federal court, alleging the AI search engine unlawfully copied <strong>thousands of CNN stories, videos, and images</strong> and distributes "identical or substantially similar" competing content. CNN seeks unspecified monetary damages and a court order blocking further violations. Perplexity — described as "valued at tens of billions of dollars" — also faces suits from the <strong>New York Times</strong>, <strong>Reddit</strong>, and <strong>Dow Jones</strong>. <strong>Anthropic</strong> settled a similar case last year for <strong>$1.5 billion</strong>.',
            whyItMatters: 'Each new lawsuit raises the legal cost basis of the AI search model — and Anthropic\'s $1.5B settlement has established the first concrete price signal for what copyright infringement in the AI industry costs.',
            signalText: 'CNN filed a federal lawsuit against Perplexity alleging the AI firm unlawfully copied thousands of CNN stories, videos, and images.',
            sourceName: 'Reuters',
            sourceUrl: 'https://www.reuters.com/legal/litigation/cnn-files-suit-against-perplexity-alleging-unlawful-content-distribution-2026-05-28/',
            publishedDate: '2026-05-28'
          },
          {
            order: 8,
            tag: 'IP · Brand Partnership',
            accentText: '150 pieces',
            headline: 'Bad Bunny and Zara Launch \'Benito Antonio\' — a 150-Piece Global Capsule Collection',
            emailSummary: '<strong>Bad Bunny</strong> and <strong>Zara</strong> launched <strong>"Benito Antonio"</strong> — named after the artist\'s real name, <strong>Benito Antonio Martínez Ocasio</strong> — a <strong>150-piece capsule collection</strong> inspired by his Puerto Rican identity and personal aesthetic. Creative direction by <strong>Janthony Oliveras</strong>; campaign visuals by Paris-based studio <strong>M/M</strong>. Available globally in select Zara stores and online. Bad Bunny\'s prior commercial collaborations include <strong>Adidas, Crocs, Gucci, Jacquemus, and Calvin Klein</strong>.',
            whyItMatters: 'Bad Bunny is the highest-streaming artist in the world for multiple consecutive years — a 150-piece global collection with Zara, one of the world\'s largest fashion retailers, tests how far his IP extends beyond music into durable consumer goods at commercial scale.',
            signalText: 'Bad Bunny and Zara launched a 150-piece global capsule collection named after the artist\'s real name.',
            sourceName: 'Quien',
            sourceUrl: 'https://www.quien.com/espectaculos/2026/05/20/bad-bunny-lanza-su-coleccion-con-zara-inspirada-en-sus-raices-boricuas',
            publishedDate: '2026-05-20'
          },
          {
            order: 9,
            tag: 'Entertainment · Box Office',
            accentText: '$81M',
            headline: '\'Backrooms\' Opens at $81M, Setting A24\'s All-Time Record on a $10 Million Budget',
            emailSummary: '<strong>\'Backrooms\'</strong>, directed by <strong>Kane Parsons</strong> (age 20), opened with <strong>$81 million</strong> from <strong>3,442 theaters</strong> — setting <strong>A24\'s all-time opening weekend record</strong> — against a production budget of approximately <strong>$10 million</strong>. The film earned <strong>$118 million globally</strong> in its opening frame. <strong>85% of the audience was under 35</strong>; over <strong>50% were 25 or younger</strong>. Parsons became the <strong>youngest filmmaker ever to have a #1 box office film</strong>. Disney\'s <strong>\'The Mandalorian and Grogu\'</strong> dropped <strong>70%</strong> in its second weekend.',
            whyItMatters: 'A $10M budget delivering $81M domestic and $118M global in opening weekend — alongside \'Obsession\' ($1M budget, $106M domestic) — signals that creator-economy directors with built-in digital audiences are repricing Hollywood\'s production cost assumptions.',
            signalText: '\'Backrooms\' earned $81 million in its opening weekend against a $10 million production budget, setting A24\'s all-time opening record.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/box-office/backrooms-box-office-record-opening-weekend-obsession-jumps-star-wars-crumbles-1236763355/',
            publishedDate: '2026-05-31'
          }
        ]
      }

    ]
  }

];
