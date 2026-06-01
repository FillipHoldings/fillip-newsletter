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
            extendedAnalysis: 'The Form 10 registration statement is a standard regulatory filing used to initiate corporate restructurings or spinoffs. MSG Sports CEO James Dolan has shown no interest in selling control of the Knicks — the split is a capital strategy, not an exit. Silver Lake\'s existing 10% stake positions it as a key voice in how each company is structured post-separation. The Knicks, as one of the NBA\'s most valuable franchises and a New York media property, carry significantly different investor appeal than the Rangers — bundling them has historically compressed the valuation of each. A standalone Knicks company could pursue sovereign wealth or institutional minority investment without requiring Rangers exposure as part of the package.',
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
            extendedAnalysis: 'Caesars operates nine properties on the Las Vegas Strip, making this a significant concentration of Strip real estate under a single operator. The William Hill integration is strategically important: 200+ sports betting locations give the combined entity one of the largest retail sports wagering footprints in the country — at a moment when Las Vegas is actively adding NFL, NHL, and Formula 1 to its live sports calendar. The 49% premium reflects the scarcity value of large-scale Strip assets rather than Caesars\' current earnings trajectory. Competing bids are possible through July 11, though a topping bid at this premium would require significant capital conviction. Fertitta already operates a portfolio of hospitality, gaming, and entertainment assets — this deal adds the brand equity and scale of the Caesars name.',
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
            extendedAnalysis: 'The previous TSN deal averaged $50 million per year — the new agreement\'s $500 million total implies a significant per-year increase, though the exact per-partner split was not disclosed. DAZN\'s role is the structural shift: exclusive Saturday Night Football rights plus global distribution gives a streaming platform the anchor inventory it needs to build subscriber retention around live sports. YouTube\'s role is complementary — pre-season games, combine content, and creator-driven programming serve as a discovery funnel for audiences who don\'t subscribe to TSN or DAZN. The CFL\'s U.S. deal with CBS Sports Network — reportedly worth just $1 million per year — expires at the end of 2026; the league said it is exploring all alternatives south of the border, which is the next material rights question for the property.',
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
            extendedAnalysis: 'The Women\'s Super League is the most commercially developed women\'s club football league in the world — clubs like Arsenal, Chelsea, and Manchester City carry significant global brand recognition that transfers to U.S. audiences. CBS Sports now holds rights to the NWSL, the UEFA Women\'s Champions League, and the WSL: three distinct tiers covering domestic league play, the top European club competition, and the top European domestic league. Paramount+ streaming all 183 matches positions the platform as the de facto home of women\'s club soccer in the U.S., a market that has shown consistent viewership growth since the 2019 Women\'s World Cup. The expanded format\'s 183-match total represents a significant content volume increase — more inventory means more subscriber retention touchpoints across a nine-month competitive calendar.',
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
            extendedAnalysis: 'The pairing of iPhone 17 Pro Max with Fujinon broadcast lenses — some valued at $265,000 — blurs the line between consumer hardware and professional production: the capture device is consumer-grade, but the optics and workflow are broadcast-standard. Apple\'s multi-year exclusive MLS Season Pass deal gives it structural incentive to demonstrate that iPhone hardware can serve as a credible production tool for MLS content. Shooting in Apple Log 2 at 1080p60 aligns with professional post-production pipelines. The positions enabled by smaller iPhone rigs — inside goal nets, on extended poles — provided visual angles that traditional broadcast cameras cannot access, suggesting a hybrid production future where smartphones supplement rather than replace conventional camera infrastructure.',
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
            extendedAnalysis: 'Rome joining the SailGP calendar is a significant European anchor for the championship — the city\'s cultural profile and tourism infrastructure amplify the commercial case for local sponsorships and broadcast partnerships. Italy\'s return follows the cancellation of the Taranto event in the 2024–25 season, suggesting SailGP upgraded both the venue and commercial terms to make the Italian market work. The 13-event 2027 calendar gives SailGP one of the most geographically diverse schedules in global sailing — which matters for its pitch to international sponsors seeking multi-market exposure. Long-term venue agreements reduce annual renegotiation costs and give host cities enough runway to build event infrastructure and civic programming around the race.',
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
            extendedAnalysis: 'The Anthropic settlement — $1.5 billion to resolve a class action from authors — is now the benchmark every publisher suing an AI company is implicitly referencing. Perplexity\'s business model depends on scraping and synthesizing web content in real time; a court order restricting that scraping would be structurally more damaging than any monetary settlement. CNN\'s choice of litigation over licensing signals that Warner Bros. Discovery views its content library as underpriced in any framework Perplexity would offer. The volume of concurrent suits — NYT, Reddit, Dow Jones, CNN — creates compounding legal cost pressure on a company without a clear path to profitability. Several news firms have signed licensing deals with AI companies; CNN is betting that the courts will establish a higher floor.',
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
            extendedAnalysis: 'Zara\'s parent company Inditex operates over 5,800 stores across 93 markets — the distribution infrastructure behind this collaboration is orders of magnitude larger than Bad Bunny\'s previous brand deals. A 150-piece collection is not a limited-edition drop; it is a full commercial line, meaning Zara is betting on sustained consumer demand rather than scarcity-driven hype. The campaign\'s visual identity — produced by M/M (Paris), known for Balenciaga, Björk, and museum-caliber creative work — signals that both parties positioned this as a fashion statement, not a merchandise licensing deal. Bad Bunny\'s track record across categories (Adidas performance, Crocs lifestyle, Gucci luxury, Calvin Klein underwear) demonstrates brand versatility that very few global artists can claim. The "Benito Antonio" naming — his birth name rather than his stage name — frames this as a personal creative identity play, not just a commercial persona extension.',
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
            extendedAnalysis: 'A24\'s previous opening weekend record was set by \'Everything Everywhere All at Once\' — \'Backrooms\' surpassing it marks a significant commercial milestone for a studio known for prestige, not blockbuster scale. Kane Parsons\' YouTube creator background directly explains the audience composition: 85% under 35, 50%+ under 25 is the YouTube demographic map, not the traditional theatrical moviegoing base. The $10M production budget means A24 required a fraction of the marketing-to-production ratio that major studio tentpoles demand. \'Obsession,\' the concurrent comparison point, ran on a $1M budget to $106M domestic — both films directed by creators with established digital audiences, suggesting studio theatrical distribution combined with creator-native marketing is a repeatable formula. Disney\'s \'Mandalorian and Grogu\' 70% second-weekend drop is the counterpoint: IP-driven franchise films are not immune to audience fatigue when theatrical is positioned as a streaming extension.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/box-office/backrooms-box-office-record-opening-weekend-obsession-jumps-star-wars-crumbles-1236763355/',
            publishedDate: '2026-05-31'
          }
        ]
      }

    ]
  }

];
