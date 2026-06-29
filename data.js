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
    publishedDate: '2026-06-29',
    dateRange: 'May 30 – June 29, 2026',
    introLine: 'Weeks 1–4 of June: Napoli rejects a €2B bid, Ramos\'s Sevilla deal collapses, Dončić buys into NBA Europe, Curry signs $400M with Li-Ning, UMG rejects Ackman\'s $64B offer, Backrooms crosses $212M for A24; Mahomes becomes the first $500M NFL player, Fox acquires Roku for $25B, the Knicks\' first title in 53 years breaks every Fanatics record, UFC holds its first White House event, Liga MX eyes the stock exchange at $13B, Soy Frankelda reaches Netflix; iShowSpeed draws 9.2M for a live World Cup stream, Big3 agrees to go public at $290M, Pau Gasol bids €55M for Liga F\'s commercial rights, Toy Story 5 opens to $312M globally; then Comcast spins off NBCUniversal, Ari Emanuel enters exclusive $6B talks for ATG\'s 70 theaters, CazéTV draws 17.8M on YouTube to reset the World Cup broadcast map, Google embeds DeepMind at A24\'s AI lab, Karim Lopez becomes Mexico\'s first NBA first-rounder, and Michael surpasses Oppenheimer as the highest-grossing biopic in history.',
    issues: [

      // WEEK 4
      {
        slug: 'week-4-june-2026',
        issueNumber: '4',
        weekLabel: 'Week 4',
        dateRange: 'June 22–29, 2026',
        publishedDate: '2026-06-29',
        issueTitle: 'Week 4 — June 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week four of June: Comcast spins off NBCUniversal and Sky, Ari Emanuel enters exclusive $6B talks to acquire theater group ATG, CazéTV draws 17.8 million viewers on YouTube to set the world live streaming record, Google embeds DeepMind researchers at A24\'s AI lab, Sony puts $100M into Cosm\'s dome venues, Karim Lopez becomes Mexico\'s first NBA first-round pick, Apple makes the Austrian GP free to grow its U.S. F1 audience, Meta begins building a prediction market app with Llama AI, and Michael surpasses Oppenheimer to become the highest-grossing biopic in history.',
        shareText: 'Comcast spins off NBCUniversal, Ari Emanuel in $6B talks for ATG\'s 70 theaters, CazéTV draws 17.8M on YouTube, Google puts $75M in A24\'s AI lab, Karim Lopez is Mexico\'s first NBA first-rounder, Michael surpasses Oppenheimer — Week 4 June · Fillip.',
        coreSignal: 'This week, Comcast confirmed what the market has suspected for years: owning both the pipe and the content no longer works. The 2011 bet that combining NBCUniversal with broadband infrastructure would create lasting advantage is being unwound in a single year. The same logic runs through every other deal. Ari Emanuel is not licensing theaters — he is buying the building. Sony is not licensing Cosm — it is buying the dome. Google is not licensing A24\'s library — it is embedding researchers inside the studio. The vertical integration thesis is being rebuilt from scratch, this time with live experience and creative infrastructure at the center instead of distribution.',
        latamAngle: 'Two stories this week shared a common signal: Latin American protagonists rewriting records in North American sports institutions. In Brazil, Casimiro Miguel\'s CazéTV drew 17.8 million simultaneous viewers for Brazil\'s World Cup match against Scotland — more than double the previous YouTube live record of approximately 8 million, set during India\'s moon landing in 2023. In Mexico, 19-year-old Karim Lopez from Hermosillo became the first Mexican-born player selected in the NBA draft\'s first round — picked 21st overall, then traded to Memphis. Both firsts arrived during the same World Cup week, in the same year Liga MX announced a $13 billion stock listing. The commercial weight of the Latin American sports market is no longer a projection.',
        ecosystemNews: [
          {
            headline: 'El Grande Americano Mask Auction Closes at $50,035 for Dr. Sonrisas Foundation',
            body: 'The mask from Ludwig Kaiser\'s victory over Chad Gable\'s Original Grande Americano at AAA\'s Noche de los Grandes sold for $50,035 on Fanatics. Kaiser confirmed the result on Instagram: \'What an incredible result! $50,035 USD. Thank you so much for every single bid.\' One hundred percent of proceeds benefit the Dr. Sonrisas Foundation, which supports Mexican children with critical illnesses. Kaiser has since returned to AAA programming on FOX Latin America, where he was attacked by the revived Perros del Mal.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/articles/wwe-el-grande-americano-match-185238503.html'
          },
          {
            headline: 'AAA Takes the Ring at FIFA World Cup Fan Fest in Mexico City on July 1',
            body: 'AAA will present a wrestling exhibition at the FIFA Fan Fest in Mexico City on July 1 at 12:00 PM, with La Parka, Psycho Clown, Aerostar, and La Hiedra performing inside a dedicated ring at the venue. The exhibition precedes live broadcasts of three Round of 16 matches — England vs. Democratic Republic of Congo, Belgium vs. Senegal, and United States vs. Bosnia-Herzegovina — on the Fan Fest screens. Mexico City is using the event to showcase the country\'s sporting and cultural traditions as a central World Cup host city.',
            sourceName: 'Record MX',
            sourceUrl: 'https://www.record.com.mx/historia/aaa-llevara-la-lucha-libre-al-fan-fest-del-mundial-2026-en-la-ciudad-de-mexico-2026062913443902483'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Media Rights · Streaming',
            accentText: '17.8M viewers',
            headline: 'CazéTV Sets YouTube Live Record with 17.8M World Cup Viewers',
            emailSummary: 'Brazilian creator <strong>Casimiro Miguel</strong>\'s channel <strong>CazéTV</strong> peaked at <strong>17.8 million simultaneous viewers</strong> during the Brazil vs. Scotland World Cup match on YouTube — setting a new world record for live streaming on the platform, surpassing the previous record of approximately <strong>8 million viewers</strong> set during India\'s 2023 moon landing. CazéTV is the only broadcaster streaming all <strong>104 World Cup matches live</strong> and free on YouTube. The channel crossed <strong>35 million subscribers</strong> during the same broadcast. Viewer counts scaled across Brazil\'s group stage: <strong>12.7 million</strong> for Brazil vs. Morocco, <strong>16.1 million</strong> for Brazil vs. Haiti, then <strong>17.8 million</strong> for Brazil vs. Scotland.',
            whyItMatters: 'A Brazilian creator channel surpassing any prior YouTube live record — including major national broadcast moments — at the world\'s largest sporting event confirms the creator distribution model is not an alternative to broadcast; it is now the primary channel for sports consumption in Brazil.',
            signalText: 'CazéTV peaked at 17.8 million simultaneous YouTube viewers during Brazil\'s World Cup match against Scotland, setting a new world live streaming record.',
            sourceName: 'Rio Times',
            sourceUrl: 'https://www.riotimesonline.com/cazetv-world-cup-youtube-streaming-record-brazil-2026/',
            publishedDate: '2026-06-25'
          },
          {
            order: 2,
            tag: 'Media Rights · F1',
            accentText: '$150M/year',
            headline: 'Apple Opens Austrian GP Free on Apple TV to Build U.S. F1 Audience',
            emailSummary: '<strong>Apple</strong> made the full <strong>Austrian Grand Prix</strong> weekend — including practice, qualifying, and the race — free to access on <strong>Apple TV</strong> for any U.S. viewer with an <strong>Apple ID</strong>. Apple acquired exclusive U.S. Formula 1 broadcasting rights at the start of 2026 for a reported <strong>$150 million per year</strong>. The free-access strategy follows Apple\'s earlier simulcast of the <strong>Canadian GP with Netflix</strong>, plus screenings staged at Times Square billboards and IMAX cinemas. Apple claims viewership comparable to F1\'s final <strong>ESPN year</strong> (1.32 million average viewers per race) but has not released specific 2026 numbers.',
            whyItMatters: 'Apple is treating individual F1 races as subscriber acquisition events — making them free to convert casual fans into Apple ID holders and, eventually, paying subscribers before the season tightens into races they will pay to watch.',
            signalText: 'Apple made the full Austrian Grand Prix weekend free on Apple TV for U.S. viewers with an Apple ID.',
            sourceName: 'SportsPro',
            sourceUrl: 'https://www.sportspro.com/news/broadcast-ott/apple-streaming-austrian-gp-free-f1/',
            publishedDate: '2026-06-19'
          },
          {
            order: 3,
            tag: 'Sports Business · NBA',
            accentText: 'Pick No. 21',
            headline: 'Karim Lopez Becomes NBA\'s First Mexico-Born First-Round Draft Pick',
            emailSummary: '<strong>Karim Lopez</strong>, a 19-year-old forward born in <strong>Hermosillo, Mexico</strong>, was selected <strong>21st overall</strong> by the <strong>Detroit Pistons</strong> in the 2026 NBA Draft and immediately traded to the <strong>Memphis Grizzlies</strong> — becoming the first player born in Mexico to be selected in the NBA draft\'s first round. Lopez stands 6-foot-8 with a near-<strong>7-foot wingspan</strong> and a <strong>38-inch max vertical leap</strong>, and averaged <strong>11.9 points</strong> and <strong>6.1 rebounds</strong> per game with the <strong>New Zealand Breakers</strong> in the Australian NBL. <strong>Eduardo Najera</strong>, selected 38th overall in 2000, was the only prior Mexican-born player drafted in NBA history.',
            whyItMatters: 'Mexico\'s first first-round NBA pick — arriving during World Cup year as Liga MX explores a stock exchange listing — is the clearest signal yet that Mexican athletes are reaching the top of the NBA talent market, with direct commercial implications for the league\'s fastest-growing international audience.',
            signalText: 'Karim Lopez, born in Hermosillo, Mexico, was selected 21st overall and traded to the Memphis Grizzlies, becoming the NBA\'s first Mexico-born first-round pick.',
            sourceName: 'ESPN',
            sourceUrl: 'https://www.espn.com/nba/story/_/id/49161309/lopez-becomes-nba-1st-mexico-born-1st-rounder-traded-grizzlies',
            publishedDate: '2026-06-23'
          },
          {
            order: 4,
            tag: 'Technology · Prediction Markets',
            accentText: '3B+ daily users',
            headline: 'Meta Builds AI Prediction Market App Arena to Rival Kalshi and Polymarket',
            emailSummary: '<strong>Meta</strong> CEO <strong>Mark Zuckerberg</strong> has directed a team to build a standalone prediction market app called <strong>Arena</strong>, according to internal documents obtained by <strong>NPR</strong>. The app uses Meta\'s <strong>Llama</strong> large language model to auto-generate questions from trending topics, personalize market recommendations, and resolve markets in <strong>near real-time</strong>. Users receive a <strong>daily virtual allotment of play money</strong> — no real wagers — while Meta navigates more than <strong>30 pending legal challenges</strong> against the prediction market industry and awaits regulatory clarity from the <strong>CFTC</strong>. The app, internally codenamed <strong>\'Antwerp\'</strong> and <strong>\'FBForecast,\'</strong> has no public launch date. More than <strong>3 billion people</strong> use at least one Meta app daily; a prior attempt, <strong>Forecast</strong> (2020–22), was shut down due to the cost of manual question curation — the new app solves that problem with AI.',
            whyItMatters: 'Meta entering prediction markets — even with play money — brings 3 billion daily users into a sector projected to reach $1 trillion. The play-money-first structure is regulatory positioning: building a user base and interface before real-money licensing is cleared.',
            signalText: 'Meta began building a standalone prediction market app called Arena, using its Llama AI to auto-generate and resolve markets in near real-time.',
            sourceName: 'NPR',
            sourceUrl: 'https://www.npr.org/2026/06/24/nx-s1-5869486/meta-prediction-market-app-ai',
            publishedDate: '2026-06-24'
          },
          {
            order: 5,
            tag: 'Entertainment · M&A',
            headline: 'Comcast Spins Off NBCUniversal and Sky Into a Separate Public Company',
            emailSummary: '<strong>Comcast</strong> announced it will spin off <strong>NBCUniversal</strong> into an independent publicly traded company, separating its media and entertainment assets from its broadband, cable, and wireless business. The new entity will include <strong>Universal Pictures</strong>, the <strong>NBC</strong> and <strong>Telemundo</strong> broadcast networks, <strong>NBC News</strong>, <strong>Peacock</strong>, <strong>Bravo</strong>, a theme parks division, and <strong>Sky</strong> — the British TV broadcaster Comcast acquired in 2018. <strong>Mike Cavanagh</strong> will lead the new entity; Comcast retains up to a <strong>19.9% stake</strong> for up to one year post-separation. <strong>Comcast shares rose nearly 10%</strong> on the announcement. The spinoff is expected to complete in approximately one year and follows Comcast\'s 2024 separation of <strong>CNBC</strong> and <strong>MSNBC</strong> into a separate company called <strong>Versant</strong>.',
            whyItMatters: 'The Comcast-NBCUniversal split reverses the content-plus-distribution thesis of the 2011 merger — confirming that vertical integration between pipe and content no longer produces the synergies that justified it, as Paramount-WBD ($110B), Versant, and now this spinoff all dismantle the same structure from different starting points.',
            signalText: 'Comcast announced it will spin off NBCUniversal and Sky into a separate publicly traded company within approximately one year.',
            sourceName: 'NBC News',
            sourceUrl: 'https://www.nbcnews.com/business/business-news/comcast-spinoff-nbcuniversal-sky-split-two-companies-rcna352188',
            publishedDate: '2026-06-29'
          },
          {
            order: 6,
            tag: 'Live Events · M&A',
            accentText: '$6B',
            headline: 'Ari Emanuel Enters Exclusive $6B Talks to Buy Theater Group ATG',
            emailSummary: '<strong>Ari Emanuel</strong>\'s media group <strong>Mari</strong> entered exclusive talks to acquire <strong>ATG Entertainment</strong> — owner of approximately <strong>70 venues</strong> across the UK, US, and Europe — from private equity firm <strong>Providence</strong> in a deal valued at approximately <strong>£4.5 billion ($6 billion)</strong>. ATG\'s portfolio includes London\'s <strong>Lyceum Theatre</strong> (The Lion King), the <strong>Savoy Theatre</strong> (Paddington the Musical), and New York\'s <strong>Lyric Theatre</strong> (Harry Potter and the Cursed Child). ATG posted <strong>£160.9 million in operating profit</strong> in the year to March 2025, recovered from pandemic closures. Providence originally acquired ATG for <strong>£350 million in 2013</strong>. Mari launched with <strong>$2 billion in equity</strong> backed by <strong>Apollo</strong>, <strong>RedBird Capital</strong>, and <strong>Qatar Investment Authority</strong>, and has already invested in the Frieze art fair, London\'s Winter Wonderland, and the Miami Open. A deal could close within a month.',
            whyItMatters: 'ATG is the largest commercial theater group in the world. An Emanuel acquisition would give Mari — already holding Frieze, Winter Wonderland, and the Miami Open — direct control over the full live entertainment stack, from tennis and art fairs to the West End and Broadway.',
            signalText: 'Ari Emanuel\'s Mari Group entered exclusive talks to acquire theater group ATG, owner of approximately 70 venues, for $6 billion.',
            sourceName: 'Financial Times',
            sourceUrl: 'https://www.ft.com/content/6bedcfad-decc-4dec-baf5-afcb906c2e5e',
            publishedDate: '2026-06-23'
          },
          {
            order: 7,
            tag: 'IP · AI',
            accentText: '$75M',
            headline: 'Google Invests $75M in A24 to Develop AI Filmmaking Tools with DeepMind',
            emailSummary: '<strong>Google</strong> invested approximately <strong>$75 million</strong> in <strong>A24</strong>, with <strong>DeepMind</strong> researchers embedded at <strong>A24 Labs</strong> to co-develop AI filmmaking tools — including <strong>AI-generated storyboards</strong>. The partnership explicitly avoids prompted-generation AI; tools are designed to preserve creative control, not replace it. Google gains no access to A24\'s content library or data. <strong>Scott Belsky</strong> leads the A24 Labs side; <strong>Eli Collins</strong>, DeepMind VP of Product, said the goal is getting technology \'into the hands of the best minds in the field.\' The deal follows similar Hollywood-AI collaborations with Lionsgate and Runway AI, and <strong>Netflix\'s earlier acquisition</strong> of Ben Affleck\'s InterPositive startup.',
            whyItMatters: 'Google is not licensing A24\'s library — it is embedding DeepMind researchers inside the studio to build tools the industry cannot yet see. The explicit rejection of prompted-generation AI is a commercial signal: tools that assist rather than replace are the only version Hollywood will adopt at scale.',
            signalText: 'Google invested approximately $75 million in A24, with DeepMind researchers embedded at A24 Labs to build AI filmmaking tools.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/news/google-a24-ai-filmmaking-tools-1236787297/',
            publishedDate: '2026-06-22'
          },
          {
            order: 8,
            tag: 'Entertainment · Live Events',
            accentText: '$100M',
            headline: 'Sony Pictures Invests $100M in Cosm to Deploy IP in Dome Venues',
            emailSummary: '<strong>Sony Pictures Entertainment</strong> invested <strong>$100 million</strong> in <strong>Cosm</strong> through a <strong>Series C funding round</strong>, acquiring a minority ownership stake. Cosm operates immersive dome venues — <strong>87-foot structures with 12K LED displays</strong> — currently in <strong>Los Angeles</strong>, <strong>Dallas</strong>, and <strong>Atlanta</strong>, with upcoming locations in <strong>Detroit</strong> and <strong>Cleveland</strong>. Sony CEO and Chairman <strong>Ravi Ahuja</strong> joins Cosm\'s board. The studio plans to screen its own franchises — including <strong>Spider-Man</strong>, <strong>Ghostbusters</strong>, and anime titles — in the dome format, with announcements expected before year-end. Cosm already holds partnerships with the <strong>NFL, NBA, WWE, NBC Sports, ESPN, and CBS Sports</strong>. The $100 million will fund domestic and international venue expansion.',
            whyItMatters: 'Sony is not just a content licensor here — it is a minority owner of the physical infrastructure that screens its IP, giving it a direct stake in how revenue is split at the venue level. As traditional theaters face structural pressure, studios investing in alternative exhibition formats is the opening move of a new exhibition model.',
            signalText: 'Sony Pictures invested $100 million in Cosm, acquiring a minority stake in the dome venue operator and planning to screen its own franchises inside the shared-reality venues.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/biz/news/sony-pictures-100-million-cosm-shared-reality-venue-owner-1236789422/',
            publishedDate: '2026-06-24'
          },
          {
            order: 9,
            tag: 'Entertainment · Box Office',
            accentText: '$977M',
            headline: 'Michael Biopic Surpasses Oppenheimer as Highest-Grossing Biopic in History',
            emailSummary: '<strong>Michael</strong>, the Lionsgate biopic of <strong>Michael Jackson</strong> directed by <strong>Antoine Fuqua</strong> and starring <strong>Jaafar Jackson</strong>, crossed <strong>$977.4 million globally</strong> — surpassing <strong>Oppenheimer\'s</strong> final gross of <strong>$975.8 million</strong> by approximately <strong>$1.6 million</strong> to become the <strong>highest-grossing biopic in cinema history</strong>. The film stands at <strong>$370.2 million domestic</strong> and <strong>$607.2 million international</strong>, projected to cross <strong>$1 billion</strong> — the second film to reach that milestone in 2026 after Universal\'s Super Mario Galaxy Movie. Michael also holds the record as the <strong>highest-grossing musical biopic</strong>, surpassing Bohemian Rhapsody ($911 million). Oppenheimer earned its gross with seven Academy Award wins including Best Picture and Best Director.',
            whyItMatters: 'A contested biopic clearing Oppenheimer\'s Oscar-boosted total on pure audience demand confirms that estate-approved catalogue IP with a built-in global fan base is the most durable commercial vehicle in the studio system — regardless of subject controversy.',
            signalText: 'Michael crossed $977.4 million globally, surpassing Oppenheimer\'s $975.8 million to become the highest-grossing biopic in cinema history.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/06/box-office-michael-oppenheimer-1236969255/',
            publishedDate: '2026-06-28'
          }
        ]
      },

      // WEEK 3
      {
        slug: 'week-3-june-2026',
        issueNumber: '3',
        weekLabel: 'Week 3',
        dateRange: 'June 16–22, 2026',
        publishedDate: '2026-06-22',
        issueTitle: 'Week 3 — June 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week three of June: Big3 agrees to go public at $290M, iShowSpeed draws 9.2 million viewers on a live World Cup stream, L Catterton moves on HYROX, Pau Gasol bids €55M to run Liga F\'s commercial rights, the NBA Finals peak at 33 million viewers and reset ABC\'s ad pricing, Panini brings all 72 EFL clubs to U.S. retail, Toy Story 5 opens to $312M globally, Devil Wears Prada 2 crosses $1B, EA builds in-game advertising to replace linear TV budgets, Amazon locks Kevin Durant\'s Boardroom, and People Inc. buys a food festival because AI can\'t replace it.',
        shareText: 'Big3 goes public at $290M, iShowSpeed draws 9.2M viewers for a World Cup game, Toy Story 5 opens to $312M, Pau Gasol bids €55M for Liga F, and EA launches in-game advertising — Week 3 June · Fillip.',
        coreSignal: 'This week\'s stories traced the same pressure point: the distribution intermediary is failing. iShowSpeed drew 9.2 million viewers for a World Cup match — potentially outpacing Fox\'s own broadcast. People Inc. acquired a food festival explicitly because, as their executive said, \'AI can\'t replace that.\' EA built an in-game ad platform to intercept TV budgets migrating from linear. Amazon locked Boardroom to guarantee a direct relationship with sports fans inside its own ecosystem. Formula 1 replaced its ticketing stack with a platform reaching 300 million consumers. When every established middleman is under pressure, capital rushes toward whoever owns the direct connection.',
        ecosystemNews: [
          {
            headline: 'Los Perros del Mal Return to AAA with Five New Members Under WWE Administration',
            body: 'On June 20 at AAA\'s event in Mérida, Yucatán, Los Perros del Mal — one of the most iconic factions in Mexican lucha libre history, originally founded in 2004 by El Hijo del Perro Aguayo — returned with five new members: Ángel Garza, Humberto Carrillo, Daga, NXT\'s Karmen Petrovic, and WWE development athlete Bronco Nima. The faction attacked El Grande Americano to mark their arrival. AAA GM Rey Mysterio is expected to designate a leader soon, with Dominik Mysterio and Damian Priest among the candidates.',
            sourceName: 'Heraldo de México',
            sourceUrl: 'https://heraldodemexico.com.mx/espectaculos/2026/6/21/regresan-los-perros-del-mal-aaa-la-historica-faccion-creada-por-el-hijo-del-perro-aguayo-video-836443.html'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Sports Business',
            accentText: '$290M',
            headline: 'Ice Cube\'s Big3 Basketball League Goes Public in $290M Deal',
            emailSummary: '<strong>Ice Cube\'s Big3</strong>, the 3-on-3 professional basketball league co-founded by Ice Cube and Jeff Kwatinetz, agreed to merge with <strong>Graf Global Corp.</strong> — a publicly traded SPAC — in a business combination valued at <strong>$290 million</strong>. The combined entity will be renamed <strong>Big3 Basketball Holdings, Inc.</strong> and is expected to list on NYSE or Nasdaq under ticker symbol <strong>"TONT"</strong> in Q4 2026. <strong>NBA Hall of Famer Clyde Drexler</strong> will serve as commissioner; <strong>Mark King</strong> joins as chairman. The deal makes Big3 the <strong>first publicly traded professional sports league</strong> in U.S. history, allowing retail investors — including fans — to hold equity in a live sports property.',
            whyItMatters: 'Taking a professional sports league public for the first time bypasses traditional franchise ownership structures — allowing retail investors and underrepresented communities to own equity in live sports at a scale that NBA, NFL, and MLB ownership rules have historically blocked.',
            signalText: 'Ice Cube\'s Big3 basketball league agreed to merge with SPAC Graf Global Corp. at a $290 million valuation.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/articles/ice-cube-big3-basketball-league-140009726.html',
            publishedDate: '2026-06-16'
          },
          {
            order: 2,
            tag: 'Media Rights · NBA',
            accentText: '20.6M viewers',
            headline: '2026 NBA Finals Averaged 20.6 Million Viewers, Doubling 2025',
            emailSummary: 'The 2026 <strong>NBA Finals</strong> — the <strong>New York Knicks</strong> over the <strong>San Antonio Spurs</strong> — averaged <strong>20.6 million viewers</strong> per night across five games on <strong>ABC</strong>, doubling the 2025 series average of <strong>10.2 million</strong>. <strong>Game 5</strong> peaked at <strong>33 million viewers</strong>, the biggest NBA Finals audience since <strong>Michael Jordan\'s final championship in 1998</strong>. Scatter market rates for Game 5 reached <strong>$1.4 million per 30-second unit</strong>; ABC is on pace to surpass the <strong>$288 million in advertising</strong> it captured from the 2025 Finals. The series guarantees three NBA games will appear on 2026\'s list of the <strong>100 most-watched broadcasts</strong> — the first time since 2019.',
            whyItMatters: 'The Knicks\' first title in 53 years transformed the NBA\'s largest media market into its highest-rated Finals since the Jordan era — resetting scatter ad pricing and establishing a new floor for NBA broadcast rights negotiations.',
            signalText: 'The 2026 NBA Finals averaged 20.6 million viewers per night, the highest Finals audience since Michael Jordan\'s last championship in 1998.',
            sourceName: 'Sportico',
            sourceUrl: 'https://www.sportico.com/business/media/2026/nba-finals-knicks-championship-tv-viewers-ratings-abc-1234909990/',
            publishedDate: '2026-06-16'
          },
          {
            order: 3,
            tag: 'Investment · Sports',
            accentText: '€200M+',
            headline: 'L Catterton in Exclusive Talks to Acquire Stake in HYROX from Infront',
            emailSummary: '<strong>L Catterton</strong>, the private equity firm backed by <strong>LVMH\'s Bernard Arnault</strong> family office, entered exclusive talks to acquire a stake in <strong>HYROX</strong> from Swiss media group <strong>Infront Sports & Media</strong>. HYROX is an indoor racing format combining running with functional workout stations; it grew from 650 participants at its <strong>2018 Hamburg debut</strong> to <strong>425,000–550,000 athletes across 80+ events in 30 countries</strong> in the 2024–25 season. The company posted estimated revenue of <strong>€130–140 million</strong> in 2025 with a roughly <strong>20% EBITDA margin</strong>, and projects above <strong>€200 million</strong> in 2026. Specific stake size and transaction value were not disclosed.',
            whyItMatters: 'L Catterton — with prior investments in Peloton and a deep consumer wellness portfolio — acquiring a stake in a mass-participation fitness format at €200M+ projected revenue confirms that PE is treating high-growth fitness events as the same asset class as professional sports.',
            signalText: 'L Catterton entered exclusive talks to acquire a stake in HYROX, which posted estimated 2025 revenue of €130–140 million.',
            sourceName: 'Sporting Goods Intelligence',
            sourceUrl: 'https://www.sgieurope.com/financing/l-catterton-in-exclusive-talks-to-buy-hyrox-stake/121691.article',
            publishedDate: '2026-06-13'
          },
          {
            order: 4,
            tag: 'Investment · Women\'s Sports',
            accentText: '€55M',
            headline: 'Pau Gasol\'s €55M Bid Would Give Him Control of Liga F Commercial Rights',
            emailSummary: '<strong>Pau Gasol</strong>, through his investment vehicle <strong>Gasol16 Ventures</strong>, submitted a <strong>€55 million proposal</strong> to acquire and manage the commercial rights of <strong>Liga F</strong>, Spain\'s top women\'s football division. The proposal goes to a vote at an extraordinary assembly on <strong>June 29</strong>. Gasol — a former NBA star and <strong>IOC Athletes\' Commission member</strong> — has previously invested in <strong>Bay FC</strong> of the NWSL and projects within the WNBA ecosystem. The offer is described as one of the <strong>largest private capital commitments ever made to a women\'s football competition</strong>.',
            whyItMatters: 'A €55M commercial rights bid for a women\'s domestic football league from a credentialed institutional investor signals that women\'s football in Europe is reaching a threshold where capital sees it as a standalone commercial asset — not a development investment.',
            signalText: 'Pau Gasol submitted a €55 million proposal to acquire and manage the commercial rights of Spain\'s Liga F.',
            sourceName: 'iSportConnect',
            sourceUrl: 'https://www.isportconnect.com/pau-gasols-e55-million-liga-f-proposal-signals-a-new-era-for-womens-football/',
            publishedDate: '2026-06-16'
          },
          {
            order: 5,
            tag: 'Media Rights · Streaming',
            accentText: '9.2M viewers',
            headline: 'FIFA and Fox Partner with iShowSpeed to Stream World Cup Live',
            emailSummary: 'Creator <strong>iShowSpeed</strong> (Darren Watkins Jr.) partnered with <strong>FIFA</strong>, <strong>Fox Sports</strong>, and <strong>YouTube</strong> to stream live 2026 World Cup matches from stadiums. U.S. audiences can watch via the <strong>Fox One Prime Channel on YouTube</strong> and the <strong>Fox One streaming service</strong>; international audiences on <strong>iShowSpeed\'s personal YouTube channel</strong>. Speed drew <strong>9.2 million viewers</strong> for Portugal\'s World Cup opener — a figure that may have exceeded Fox\'s own broadcast network audience for the same match. Scheduled upcoming streams include <strong>Argentina vs. Austria</strong> (June 22, Dallas), <strong>Colombia vs. Portugal</strong> (June 27, Miami), and select knockout and semifinal rounds. No financial terms were disclosed.',
            whyItMatters: 'A single creator drawing 9.2 million viewers for a live World Cup match — potentially matching the broadcast network audience — validates the creator-economy as a primary sports distribution channel at the largest global stage in live sports.',
            signalText: 'iShowSpeed drew 9.2 million viewers streaming Portugal\'s World Cup opener via a deal with FIFA and Fox Sports.',
            sourceName: 'Awful Announcing',
            sourceUrl: 'https://awfulannouncing.com/fox/ishowspeed-deal-stream-live-fifa-world-cup-games.html',
            publishedDate: '2026-06-18'
          },
          {
            order: 6,
            tag: 'Sports Business · Ticketing',
            headline: 'Formula 1 Names Fever Official Ticketing Supplier in Five-Year Global Deal',
            emailSummary: '<strong>Formula 1</strong> appointed <strong>Fever</strong> as its <strong>Official Ticketing Supplier</strong> in a five-year global strategic partnership beginning with races in <strong>2027</strong>. Fever will build and operate a new ticketing platform on <strong>F1.com</strong> covering general admission, hospitality packages, and <strong>Paddock Club</strong> tickets. The partnership leverages Fever\'s reach of over <strong>300 million consumers</strong> across <strong>40+ countries</strong>. No financial terms were disclosed.',
            whyItMatters: 'F1 centralizing its global ticketing under a single platform with 300 million consumers converts fan discovery and purchase into a unified data asset — giving the series direct behavioral visibility into fan spending across every race market.',
            signalText: 'Formula 1 appointed Fever as its Official Ticketing Supplier in a five-year global partnership beginning in 2027.',
            sourceName: 'Fever Newsroom',
            sourceUrl: 'https://newsroom.feverup.com/en-US/266843-formula-1-announces-fever-as-new-official-supplier-bringing-new-ticketing-platform-to-fans-around-the-world/',
            publishedDate: '2026-06-16'
          },
          {
            order: 7,
            tag: 'IP · Collectibles',
            headline: 'Panini Launches First-Ever U.S. Release of EFL Trading Cards',
            emailSummary: '<strong>Panini America</strong> announced its first-ever U.S. release of <strong>English Football League</strong> trading cards in partnership with the <strong>EFL</strong>. The <strong>Panini Prestige EFL</strong> collection features a <strong>300-card base set</strong> covering all <strong>72 clubs</strong> across the EFL Championship, League One, and League Two for the 2025–26 season. Autographed cards feature EFL stars and legends including <strong>Harry Kane</strong>, <strong>Gareth Bale</strong>, <strong>Gary Lineker</strong>, and <strong>Alan Shearer</strong>. The collection will be available at major U.S. retailers and on Panini\'s website starting next month.',
            whyItMatters: 'The EFL — the world\'s oldest football league, founded 1888 — gaining its first U.S. retail collectibles release reflects the accelerating American appetite for English football beyond the Premier League, opening a commercial channel Panini is monetizing across all 72 lower-division clubs simultaneously.',
            signalText: 'Panini America launched the first-ever U.S. release of English Football League trading cards covering all 72 EFL clubs.',
            sourceName: 'Panini America',
            sourceUrl: 'https://blog.paniniamerica.net/panini-america-announces-the-first-ever-u-s-release-of-english-football-league-trading-cards/',
            publishedDate: '2026-06-16'
          },
          {
            order: 8,
            tag: 'Entertainment · Box Office',
            accentText: '$312M',
            headline: 'Toy Story 5 Opens to $312M Globally, Second-Largest Animated Debut Ever',
            emailSummary: '<strong>Toy Story 5</strong> opened to <strong>$160 million</strong> domestically and <strong>$312 million</strong> globally — the largest opening in the franchise\'s history and the <strong>second-largest animated opening weekend of all time</strong>, trailing only Incredibles 2\'s $182.7 million U.S. debut in 2018. The film also claimed the <strong>biggest domestic debut of 2026</strong>, surpassing Universal\'s Super Mario Galaxy Movie ($131.7M). Produced on a <strong>$250 million</strong> budget, the film earned a <strong>94% Rotten Tomatoes score</strong> and an <strong>"A" CinemaScore</strong>. Analysts project it could surpass <strong>Toy Story 4\'s $1.07 billion</strong> global total.',
            whyItMatters: 'Toy Story 5 becoming 2026\'s biggest domestic debut — joining Inside Out 2 and Zootopia 2 both above $1.6B — confirms that Pixar sequels with deep emotional IP remain the most reliable theatrical revenue engine in the studio system.',
            signalText: 'Toy Story 5 opened to $160 million domestically and $312 million globally, the second-largest animated opening weekend in history.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/box-office/toy-story-5-box-office-opening-weekend-record-franchise-1236786574/',
            publishedDate: '2026-06-22'
          },
          {
            order: 9,
            tag: 'Entertainment · Box Office',
            accentText: '$1B+',
            headline: 'Devil Wears Prada 2 Pushes Two-Film Franchise Past $1 Billion',
            emailSummary: '<strong>The Devil Wears Prada 2</strong>, produced by <strong>Disney</strong> at approximately <strong>$100 million</strong> (plus $80 million in marketing), has grossed <strong>$676 million globally</strong> — pushing the two-film franchise past <strong>$1 billion</strong> in combined earnings. The sequel opened to <strong>$77 million</strong> domestically and <strong>$233 million</strong> globally, nearly triple the original\'s opening weekend. International markets delivered <strong>$458 million</strong> against <strong>$217 million</strong> domestically. The original 2006 film earned <strong>$326 million</strong>. Disney is expected to turn a profitable return despite combined production and marketing costs near <strong>$180 million</strong>.',
            whyItMatters: 'A legacy sequel nearly tripling the original\'s opening and doubling its total gross confirms that established IP with the right cast reassembly can generate blockbuster returns from audiences who weren\'t in the target demographic when the original released.',
            signalText: 'The Devil Wears Prada 2 grossed $676 million globally, pushing the two-film franchise past $1 billion.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/box-office/devil-wears-prada-2-franchise-1-billion-box-office-1236781761/',
            publishedDate: '2026-06-18'
          },
          {
            order: 10,
            tag: 'Gaming · Advertising',
            headline: 'EA Launches In-Game Advertising Platform Targeting Sports TV Budgets',
            emailSummary: '<strong>Electronic Arts</strong> launched <strong>EA Advertising</strong>, a platform enabling brands to embed customized ads into gameplay through stadium signage and in-game experiences. <strong>Lowe\'s</strong> and <strong>Visa</strong> created in-game experiences inside <strong>EA Sports FC</strong> and <strong>EA Sports College Football</strong>; <strong>PepsiCo\'s Mountain Dew</strong> partnered on <strong>"DEW University,"</strong> a playable team experience in EA Sports College Football 26. EA is pitching gaming inventory to brands as a performance-trackable alternative to declining TV upfront budgets, positioning its sports titles as a direct reach vehicle for highly engaged sports fans.',
            whyItMatters: 'EA monetizing in-game stadium inventory as a replacement for linear TV advertising inserts gaming into the sports media rights conversation — the same fans, the same IP, but a fully interactive and measurable ad environment that broadcast cannot replicate.',
            signalText: 'Electronic Arts launched EA Advertising, an in-game platform letting brands embed ads inside EA Sports titles through stadium signage.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/tv/news/electronic-arts-videogames-sports-advertising-1236781028/',
            publishedDate: '2026-06-17'
          },
          {
            order: 11,
            tag: 'Entertainment · Podcasts',
            headline: 'Amazon\'s Wondery Signs Exclusive Distribution Deal With Kevin Durant\'s Boardroom',
            emailSummary: '<strong>Amazon\'s Wondery</strong> signed a wide-ranging agreement with <strong>Boardroom</strong>, the sports and entertainment media company co-founded by <strong>Kevin Durant</strong> and <strong>Rich Kleiman</strong>, covering exclusive distribution and ad-sales rights to Boardroom\'s full podcast slate and digital series. Programming will be distributed across <strong>Prime Video</strong>, <strong>Amazon Music</strong>, and <strong>Fire TV Channels</strong> beginning early 2027, alongside new branded content and live fan engagement opportunities. Boardroom claims a network reaching over <strong>52 million unique monthly visitors</strong>. Annual <strong>Twitch livestreams</strong> featuring Durant are also part of the deal.',
            whyItMatters: 'Amazon acquiring exclusive distribution and ad-sales rights to a 52M-visitor sports media network built around an active NBA superstar converts athlete IP from an endorsement model to full content infrastructure — locking the audience inside Amazon\'s ecosystem rather than licensing it.',
            signalText: 'Amazon\'s Wondery signed exclusive distribution and ad-sales rights to Kevin Durant\'s Boardroom podcast and digital slate.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/digital/news/amazon-wondery-boardroom-kevin-durant-rich-kleiman-podcasts-1236784919/',
            publishedDate: '2026-06-19'
          },
          {
            order: 12,
            tag: 'Entertainment · Live Events',
            accentText: '10,000+ attendees',
            headline: 'People Inc. Acquires Austin\'s Hot Luck Festival to Expand Live Events',
            emailSummary: '<strong>People Inc.</strong> — formerly <strong>Dotdash Meredith</strong>, publisher of People, Food & Wine, Travel + Leisure, and 40+ lifestyle brands — acquired <strong>Hot Luck</strong>, an Austin-based food and music festival co-founded by pitmaster <strong>Aaron Franklin</strong>. Hot Luck drew over <strong>10,000 attendees</strong> in 2025, featuring indie music and live-fire cooking. People Inc. acquires the festival brand, guest lists, infrastructure, and all employees, with Franklin and co-founders remaining involved. The company plans to expand the festival into content — video, social, newsletters — and eventually into <strong>new markets</strong>.',
            whyItMatters: 'People Inc. explicitly framing the acquisition as a hedge against AI-driven search traffic declines — "AI can\'t replace that" — confirms that legacy media publishers are treating live experiences as the one distribution channel that resists algorithmic disintermediation.',
            signalText: 'People Inc. acquired Hot Luck, an Austin food and music festival that drew over 10,000 attendees in 2025.',
            sourceName: 'Yahoo Finance',
            sourceUrl: 'https://finance.yahoo.com/small-business/articles/exclusive-people-inc-buys-austin-132406231.html',
            publishedDate: '2026-06-16'
          }
        ]
      },

      // WEEK 2
      {
        slug: 'week-2-june-2026',
        issueNumber: '2',
        weekLabel: 'Week 2',
        dateRange: 'June 8–15, 2026',
        publishedDate: '2026-06-15',
        issueTitle: 'Week 2 — June 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week two of June: Mahomes becomes the first $500M NFL player, Fox acquires Roku for $25 billion, the Knicks\' first title in 53 years breaks every Fanatics record, UFC holds its first White House event, DAZN and DirecTV sign a five-country World Cup deal, and Mexico anchors three simultaneous capital moves — Liga MX eyeing the stock exchange, Fox locking NFL rights, and Soy Frankelda reaching Netflix as the country\'s first stop-motion film.',
        shareText: 'Mahomes hits $504M, Fox buys Roku for $25B, Knicks break Fanatics records, UFC at the White House, Liga MX eyes the stock exchange — Week 2 June · Fillip.',
        coreSignal: 'Three separate stories this week pointed at the same city. Liga MX announced plans to list on the stock exchange at a $13 billion valuation. Fox locked multi-year NFL broadcast rights into the Mexican market. And Soy Frankelda reached Netflix as the country\'s first stop-motion feature — all in the same week the World Cup began on Mexican soil. Meanwhile in the U.S., the sports economy reset at the top: Mahomes became the first $500M player, Fox paid $25 billion for Roku\'s 100 million streaming households, and the Knicks\' first title since 1973 triggered 8,000 Fanatics orders per minute. Capital knows where the audience is going.',
        latamAngle: 'In a single week, Mexico appeared as the main protagonist in three distinct capital moves. Liga MX Commissioner Mikel Arriola announced plans to pursue a stock exchange listing at a $13 billion valuation — potentially the first for any professional sports league globally — with preliminary offers already received for a 10% stake. Fox locked multi-year NFL broadcast rights into the Mexican market covering the regular season, full postseason, and Super Bowl, ahead of the Azteca international schedule through 2028. And Soy Frankelda — directed by Mexico City brothers Arturo and Roy Ambriz, mentored by Guillermo del Toro — reached Netflix\'s global platform as the country\'s first stop-motion feature. The same week the World Cup began on Mexican soil, the country\'s capital market, broadcast, and IP stories all moved in the same direction.',
        ecosystemNews: [
          {
            headline: 'El Grande Americano Auctions Noche de los Grandes Mask on Fanatics for Charity',
            body: 'The mask worn by El Grande Americano during his mask-versus-mask victory at AAA\'s Noche de los Grandes on May 30 — in which Chad Gable was unmasked as the Original Grande Americano at Arena Monterrey — went up for auction on Fanatics on June 12. The listing reached $6,000 within hours of going live. Bidding closes June 25, with 100% of proceeds benefiting Dr. Sonrisas, a Mexican children\'s cancer charity.',
            sourceName: 'Crónica MX',
            sourceUrl: 'https://www.cronica.com.mx/deportes/2026/06/12/el-grande-americano-subasta-su-mascara-de-la-noche-de-los-grandes-en-cuanto-va-la-puja/'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Sports Business · NFL',
            accentText: '$504.75M',
            headline: 'Mahomes Signs Reworked Deal Making Him First $500M NFL Player',
            emailSummary: 'The <strong>Kansas City Chiefs</strong> and quarterback <strong>Patrick Mahomes</strong> agreed to a reworked contract extension adding two years to his existing deal, pushing the total value to <strong>$504.75 million</strong> — the first NFL contract to exceed $500 million. The deal extends through the <strong>2033 season</strong> at an average annual value of <strong>$64 million</strong>, an NFL record. Through incentives and escalators, Mahomes can earn up to <strong>$522.25 million</strong>. The agreement was finalized while Mahomes remains in recovery from a <strong>torn ACL and LCL</strong> suffered in December, with the QB participating only in limited 7-on-7 drills at minicamp.',
            whyItMatters: 'The first $500M NFL player was signed mid-injury recovery — confirming that franchise-quarterback certainty commands a premium regardless of health status, and setting a new floor for elite QB valuations across the entire league.',
            signalText: 'The Kansas City Chiefs extended Patrick Mahomes\'s contract to $504.75 million through 2033, the first NFL deal over $500 million.',
            sourceName: 'ESPN',
            sourceUrl: 'https://www.espn.com/nfl/story/_/id/49021927/sources-chiefs-patrick-mahomes-make-500m-reworked-deal',
            publishedDate: '2026-06-10'
          },
          {
            order: 2,
            tag: 'Media Rights · Mexico',
            headline: 'Fox Secures Multi-Year NFL Broadcasting Rights for the Mexican Market',
            emailSummary: '<strong>Fox Sports</strong> secured expanded multi-year NFL broadcasting rights for <strong>Mexico</strong> beginning with the 2026 season, covering weekly Sunday and Thursday night games, Thanksgiving Day programming, all six <strong>NFC Conference playoff games</strong>, the Pro Bowl, and the <strong>Super Bowl</strong>. Distribution spans <strong>Fox</strong> and <strong>Fox+</strong> linear channels, the <strong>Fox One</strong> OTT streaming service, and select programming on the free <strong>Tubi</strong> platform. <strong>TelevisaUnivision</strong> continues concurrent coverage under a separate renewal. Ten NFL teams hold marketing rights in Mexico, and the league is committed to international games at <strong>Estadio Azteca</strong> through 2028.',
            whyItMatters: 'Fox is building a full-stack NFL broadcast presence in Mexico — linear, streaming, and free — locking the Super Bowl and postseason into the market ahead of the 2026 World Cup year and the growing NFL fan base across Latin America.',
            signalText: 'Fox extended multi-year NFL broadcasting rights in Mexico covering the regular season, full postseason, and Super Bowl.',
            sourceName: 'Sportcal',
            sourceUrl: 'https://www.sportcal.com/media/fox-expands-nfl-rights-to-mexico-with-expansive-multi-year-slate/',
            publishedDate: '2026-06-10'
          },
          {
            order: 3,
            tag: 'Valuation · Liga MX',
            accentText: '$13B',
            headline: 'Liga MX Explores Stock Exchange Listing at a $13 Billion Valuation',
            emailSummary: '<strong>Liga MX Commissioner Mikel Arriola</strong> announced plans to pursue a <strong>stock exchange listing</strong> and open the league to private institutional investment, speaking at a conference on the World Cup\'s economic impact organized by Mexico\'s <strong>BIVA</strong> exchange. The league has been valued at <strong>$13 billion</strong> and has already received preliminary offers for a <strong>10% ownership stake</strong>. Arriola stated that external investor resources will be required to complete the consolidation of broadcasting rights — one of the league\'s core strategic goals since its April governance split from the FMF. If completed, <strong>Liga MX would be the first professional sports league in the world to trade directly on a public exchange</strong>.',
            whyItMatters: 'A $13B Liga MX on a public exchange would be a structural first for global professional sport — and the step before it, centralizing broadcasting rights through institutional capital, is the direct commercial payoff of the governance reform the league voted through in April.',
            signalText: 'Liga MX Commissioner Arriola announced plans to list the league on the stock exchange at a $13 billion valuation.',
            sourceName: 'ESPN MX',
            sourceUrl: 'https://www.espn.com.mx/futbol/mexico/nota/_/id/16801519/liga-mx-buscara-incursion-bolsa-e-inversion-privada',
            publishedDate: '2026-06-10'
          },
          {
            order: 4,
            tag: 'Sports Business · Merchandise',
            accentText: '8,000/min',
            headline: 'Knicks\' First Title in 53 Years Sets All-Sports Fanatics Sales Record',
            emailSummary: 'The <strong>New York Knicks</strong> won their first NBA championship since 1973, defeating the <strong>San Antonio Spurs 94–90</strong> in Game 5 to take the Finals series <strong>4–1</strong>. In the 24 hours following the win, Knicks championship merchandise became the top seller across all sports in <strong>Fanatics history</strong> — surpassing the record set by the 2025 <strong>Philadelphia Eagles</strong> after Super Bowl LIX. Fanatics took in more than <strong>8,000 orders per minute</strong> immediately after the final whistle and released over <strong>300 championship products</strong>. The team is on pace to surpass the <strong>2016 Chicago Cubs</strong> as the all-time top championship seller in Fanatics history. Unique items include a <strong>$10,000 Swarovski crystal leather jacket</strong> and a Seinfeld-inspired <strong>"Summer of the Knicks"</strong> tee.',
            whyItMatters: 'A 53-year title drought in the largest U.S. media market produces the highest-velocity merchandise moment in Fanatics history — confirming that suppressed fan bases with deep identity ties generate disproportionate commercial release events when they finally win.',
            signalText: 'Knicks championship gear set the all-sports 24-hour Fanatics sales record, generating over 8,000 orders per minute after their NBA title win.',
            sourceName: 'The Athletic',
            sourceUrl: 'https://www.nytimes.com/athletic/7361292/2026/06/15/new-york-knicks-nba-championship-gear-fanatics/',
            publishedDate: '2026-06-15'
          },
          {
            order: 5,
            tag: 'Live Events · UFC',
            accentText: '$60M+',
            headline: 'UFC Freedom 250 at the White House Delivers Record Paramount+ Numbers',
            emailSummary: '<strong>UFC</strong> held <strong>Freedom 250</strong> on the White House South Lawn on <strong>June 14, 2026</strong> — the first-ever UFC event at the complex — to mark America\'s 250th anniversary. <strong>President Trump</strong> watched cage-side alongside <strong>Dana White</strong>, with event production costs exceeding <strong>$60 million</strong>. The card aired on <strong>Paramount+</strong>, delivering what Dana White described as "monstrous" viewership numbers. Over <strong>4,000 guests</strong> attended on the South Lawn by invitation; security involved <strong>seven federal agencies</strong> across <strong>11 months of planning</strong>. Corporate sponsors included <strong>Bud Light</strong>, <strong>Dodge Ram</strong>, <strong>Corona Extra</strong>, and <strong>Polymarket</strong>. The main card featured <strong>Ilia Topuria vs. Justin Gaethje</strong> for the Lightweight title and <strong>Alex Pereira vs. Ciryl Gane</strong> for the Interim Heavyweight belt.',
            whyItMatters: 'A UFC event that costs $60M+ to produce, requires seven federal agencies, and delivers record Paramount+ viewership in a single night confirms that UFC\'s political access is now a measurable commercial asset — and a live events benchmark for institutional-scale sponsorship.',
            signalText: 'UFC held its first-ever White House event on June 14, 2026, with production costs exceeding $60 million and record Paramount+ viewership.',
            sourceName: 'ABC News',
            sourceUrl: 'https://abcnews.com/Politics/inside-trumps-ufc-fight-white-house-south-lawn/story?id=133819655',
            publishedDate: '2026-06-14'
          },
          {
            order: 6,
            tag: 'Media Rights · Latin America',
            accentText: '104 matches',
            headline: 'DAZN and DirecTV Latin America Sign Five-Country World Cup Deal',
            emailSummary: '<strong>DAZN</strong> struck a multi-year agreement with <strong>DirecTV Latin America</strong> to carry its <strong>DSPORTS</strong>, <strong>DSPORTS2</strong>, and <strong>DSPORTS+</strong> channels on DAZN\'s platform across five countries: <strong>Chile</strong>, <strong>Colombia</strong>, <strong>Ecuador</strong>, <strong>Peru</strong>, and <strong>Uruguay</strong>. The deal delivers all <strong>104 FIFA World Cup 2026 matches</strong> live to DAZN subscribers in those markets. The package also includes <strong>Copa América</strong>, <strong>CONMEBOL Sudamericana</strong>, FIBA competitions, tennis, and MMA. DSPORTS is owned by <strong>Grupo Werthein</strong>, which acquired DirecTV Latin America from AT&T in 2021. The deal was announced <strong>June 11</strong>, days before World Cup kickoff.',
            whyItMatters: 'DAZN now holds a direct distribution path for all 104 World Cup matches across five key South American markets — building the subscriber base it needs to compete for the next LatAm rights cycle, regardless of the outcome of its broader DirecTV acquisition ambitions.',
            signalText: 'DAZN and DirecTV Latin America signed a multi-year deal giving DAZN subscribers in five countries access to all 104 World Cup matches live.',
            sourceName: 'Reuters',
            sourceUrl: 'https://www.reuters.com/sports/soccer/dazn-directv-latin-america-strike-sports-channel-deal-ahead-world-cup-2026-06-11/',
            publishedDate: '2026-06-11'
          },
          {
            order: 7,
            tag: 'Entertainment · M&A',
            accentText: '$25B',
            headline: 'Fox Acquires Roku for $25 Billion, Adding 100 Million Streaming Households',
            emailSummary: '<strong>Fox Corporation</strong> announced an agreement to acquire <strong>Roku</strong> for <strong>$25 billion</strong> total, paying <strong>$160 per share</strong> in a cash-and-stock transaction. Roku reaches more than <strong>100 million global streaming households</strong>, making it the most widely deployed connected TV platform in the U.S. The combined company will rank as the <strong>third-largest U.S. TV player</strong> by share of viewing, behind YouTube and Netflix. Fox expects <strong>$400 million in annual cost synergies</strong> and for the deal to be accretive to free cash flow by 2029. The transaction is expected to close in <strong>H1 2027</strong>. <strong>Fox shares fell 18%</strong> on announcement day. <strong>Roku founder Anthony Wood</strong> will join Fox\'s board.',
            whyItMatters: 'Fox is not just buying a platform — it is acquiring direct relationships with 100 million streaming households and the advertising infrastructure that sits in front of them. Combining live sports and news rights with Roku\'s connected TV reach creates a distribution advantage that pure content players cannot replicate.',
            signalText: 'Fox Corporation agreed to acquire Roku for $25 billion, adding over 100 million global streaming households to its portfolio.',
            sourceName: 'NBC News',
            sourceUrl: 'https://www.nbcnews.com/business/media/fox-buys-roku-22-billion-rcna350097',
            publishedDate: '2026-06-15'
          },
          {
            order: 8,
            tag: 'Entertainment · Labor',
            headline: 'DGA Reaches Tentative Four-Year Deal With Studios and Streamers',
            emailSummary: 'The <strong>Directors Guild of America</strong> reached a tentative four-year collective bargaining agreement with the <strong>Alliance of Motion Picture and Television Producers</strong> on June 9, 2026 — roughly three weeks before the previous contract\'s June 30 expiration. The deal was negotiated under new DGA President <strong>Christopher Nolan</strong> and aligns with the four-year terms secured earlier in 2026 by both the <strong>Writers Guild of America</strong> and <strong>SAG-AFTRA</strong>. Top priorities included employment protections, health plan sustainability, and AI guardrails. Full financial terms will not be released until the <strong>DGA National Board</strong> completes its review; approximately <strong>20,000 members</strong> will then vote on ratification.',
            whyItMatters: 'Three major Hollywood guilds — WGA, SAG-AFTRA, and now DGA — have all secured four-year terms in 2026. Aligned expiration dates give studios and streamers multi-year labor peace, removing a major production disruption risk at the moment the industry rebuilds post-strike output capacity.',
            signalText: 'The DGA reached a tentative four-year collective bargaining agreement with studios and streamers, matching WGA and SAG-AFTRA terms.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/06/dga-deal-christopher-nolan-lstudios-1236952188/',
            publishedDate: '2026-06-09'
          },
          {
            order: 9,
            tag: 'IP · Tennis · Digital',
            headline: 'ATP Expands TikTok Partnership to Cover All Nine Masters 1000 Events',
            emailSummary: 'The <strong>ATP Tour</strong> and <strong>TikTok</strong> expanded their global content partnership to cover all <strong>nine ATP Masters 1000 events</strong> and the <strong>Nitto ATP Finals</strong>, establishing a year-round platform presence. The <strong>"On Tour With" creator program</strong> — launched at the 2025 ATP Finals — extends to all Masters 1000 and select <strong>ATP 500</strong> events, granting behind-the-scenes access including media days and practice sessions. Since the partnership began, top-100 ATP players on TikTok have <strong>nearly doubled</strong> and posts tagged <strong>#tennis grew over 25%</strong> during 2025. Players including <strong>Carlos Alcaraz</strong>, <strong>Ethan Quinn</strong>, and <strong>Zizou Bergs</strong> received platform education through the program.',
            whyItMatters: 'Expanding to all nine Masters 1000 events converts a one-off content experiment into a systematic year-round distribution strategy — positioning TikTok as the primary discovery channel for tennis\'s next generation of fans at the sport\'s highest commercial tier.',
            signalText: 'ATP expanded its TikTok content partnership to all nine Masters 1000 tournaments and the ATP Finals for the 2026 season.',
            sourceName: 'TikTok Newsroom',
            sourceUrl: 'https://newsroom.tiktok.com/tiktok-atp-expand-partnership-to-attract-the-next-generation-of-global-tennis-fans',
            publishedDate: '2026-06-09'
          },
          {
            order: 10,
            tag: 'Entertainment · IP · Mexico',
            headline: 'Soy Frankelda Reaches Netflix as Mexico\'s First Stop-Motion Feature',
            emailSummary: '<strong>Soy Frankelda</strong> (I Am Frankelda), <strong>Mexico\'s first stop-motion feature film</strong>, launched globally on <strong>Netflix</strong> on <strong>June 12, 2026</strong>. Directed by brothers <strong>Arturo</strong> and <strong>Roy Ambriz</strong> at their <strong>Cinema Fantasma</strong> studio in Mexico City, the film follows a 19th-century writer who confronts the fictional monsters she created. Filmmaker <strong>Guillermo del Toro</strong> mentored the Ambriz brothers and connected them directly to Netflix. Originally developed as a 30-minute Warner special, the project expanded into a feature independently co-financed — including a mortgage on the family home. Before its Netflix launch, it was <strong>Mexico\'s third-highest-grossing film of 2025</strong> and earned a nomination for <strong>Best Independent Feature at the Annie Awards</strong>.',
            whyItMatters: 'A Mexican stop-motion film that self-financed through a family mortgage, earned $50M+ pesos in theaters, and reached Netflix via Guillermo del Toro\'s direct introduction is a complete IP origin story — from regional cultural product to global streaming through a single relationship unlock.',
            signalText: 'Mexico\'s first stop-motion feature film, Soy Frankelda, launched globally on Netflix on June 12, 2026.',
            sourceName: 'LA Times ES',
            sourceUrl: 'https://www.latimes.com/espanol/entretenimiento/articulo/2026-06-13/yo-soy-frankelda-el-hito-de-la-animacion-mexicana-nos-lleva-un-mundo-magico-y-escalofriante',
            publishedDate: '2026-06-13'
          }
        ]
      },

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
