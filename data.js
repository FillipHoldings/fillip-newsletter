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

  // AUGUST 2026
  {
    slug: 'august-2026',
    isCurrent: true,
    monthLabel: 'August 2026',
    editionTag: 'Sports · Entertainment · IP · Capital',
    publishedDate: '2026-08-31',
    dateRange: 'August 2–31, 2026',
    introLine: 'Weeks 1–2 of August: Becle\'s Juan Domingo Beckmann bought a 6% stake in LAFC at a $1.25 billion valuation while Mexico\'s own Fox Sports collapsed under debt, Jeff Bezos and Eduardo Saverin closed in on a $6 billion stake in Liverpool, LIV Golf replaced its Saudi backer with an unnamed investor, MLB\'s players and owners dug in over a hard salary cap that could cost part of the 2027 season, and Spider-Man: Brand New Day helped push the domestic summer box office toward $4 billion for the first time since 2023; then the Bezos-Saverin consortium closed its Liverpool stake at a $7.45 billion valuation, Bob Iger and Josh Kushner\'s group bought the Lakers for a record $12.5 billion, Google turned five of Europe\'s biggest football clubs into a Gemini and Pixel fan-experience platform, and David Ellison threatened to move Paramount out of California over the stalled Warner Bros. Discovery merger; then the Padres sold for a record $3.9 billion, LIV Golf ended its 2026 season early amid an ownership transition, Liga MX floated expanding past 18 teams as foreign capital circled new franchise slots, PE newcomer BlackSun raised its first $1 billion sports fund, Prime Video locked up Mexico\'s national team for 38 matches while pledging $2 billion across Latin America through 2030, Authentic completed its Care Bears acquisition, TikTok agreed to pay $400 million to settle a DOJ child-privacy case, and California\'s attorney general canceled settlement talks over Paramount\'s $111 billion Warner Bros. Discovery deal; then DAZN acquired EverPass Media to expand into U.S. commercial venues, LIV Golf prepared a bankruptcy filing as its Saudi backing lapsed, Unrivaled\'s Series C nearly doubled the women\'s 3x3 league\'s valuation to $650 million, Authentic Brands Group bought majority control of Drake\'s OVO, and the U.S. summer box office closed in on an all-time record.',
    issues: [

      // WEEK 4
      {
        slug: 'week-4-august-2026',
        issueNumber: '4',
        weekLabel: 'Week 4',
        dateRange: 'August 24–31, 2026',
        publishedDate: '2026-08-31',
        issueTitle: 'Week 4 — August 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week four of August: DAZN acquired EverPass Media to build out U.S. commercial-venue distribution as LIV Golf prepared to file for bankruptcy once its Saudi backing lapses, Unrivaled\'s oversubscribed Series C nearly doubled the women\'s 3x3 league\'s valuation to $650 million, and Authentic Brands Group bought majority control of Drake\'s OVO as the U.S. summer box office closed in on an all-time record.',
        shareText: 'DAZN buys EverPass Media, LIV Golf preps a bankruptcy filing, Unrivaled hits a $650M valuation, and Authentic buys into Drake\'s OVO as summer box office nears an all-time record — Week 4 August · Fillip.',
        coreSignal: 'This week showed capital moving in opposite directions inside the same industries. DAZN consolidated live-sports distribution by buying EverPass Media while LIV Golf edged toward bankruptcy as its Saudi backing lapsed, and Unrivaled nearly doubled its valuation in the same week traditional sponsors were rethinking what a sponsorship dollar even buys. In entertainment, IP kept flowing into bigger licensing machines — Drake\'s OVO into Authentic Brands, Pokémon\'s trading-card business into a new film — while theatrical box office quietly closed in on an all-time record.',
        ecosystemNews: [
          {
            headline: 'Tycoon Enterprises x CLOE Launch Olive Oyl Collection',
            body: 'Tycoon Enterprises teamed up with Mexican brand CLOE to launch a new product line featuring Olive Oyl, the classic Popeye character licensed through King Features (a Hearst unit). The collection spans bags, wallets, backpacks, luggage, cosmetic cases and diaper bags built around Olive Oyl\'s signature look — a fresh example of Tycoon\'s licensing pipeline putting nostalgic IP back into everyday retail across Mexico.',
            sourceName: 'LinkedIn',
            sourceUrl: 'https://www.linkedin.com/posts/tycoonenterprises-licensing-oliveoyl-ugcPost-7498428335400566784-q7VN/'
          },
          {
            headline: 'Triplemanía 34 Heads To Mexican Movie Theaters',
            body: 'AAA\'s Triplemanía 34 — now a two-night event for the first time, with one night at Las Vegas\'s MGM Grand — will also screen in Cinépolis theaters across Mexico on September 11 and 13. Both live venues have reportedly sold close to capacity, and the cinema broadcast gives fans a way in as tickets run out. Presale is live now through Cinépolis\'s official channels.',
            sourceName: 'Mediotiempo',
            sourceUrl: 'https://www.mediotiempo.com/lucha-libre/triplemania-34-se-podra-ver-en-cines-cuando-y-donde-adquirir-tus-boletos'
          },
          {
            headline: 'El Carnicero Debuts At AAA, Psycho Clown Answers The Call',
            body: 'El Carnicero made an explosive AAA debut at Ola de Calor, dominating Chris Carter and then fighting off Monster Clown and Dave the Clown before Psycho Clown showed up to confront him directly. The face-off escalated into a challenge: Psycho Clown wants Carnicero in a Street Fight at Triplemanía 34, adding a fresh grudge match to a card that already features title bouts and the Copa Bardahl.',
            sourceName: 'Fightful',
            sourceUrl: 'https://www.fightful.com/wrestling/el-carnicero-wins-debut-at-aaa-ola-de-calor-psycho-clown-issues-street-fight-challenge-for-triplemania-34/'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Media Rights',
            section: 'sports',
            headline: 'DAZN Acquires EverPass Media To Expand Into US Venues',
            emailSummary: '<strong>DAZN</strong> agreed to acquire <strong>EverPass Media</strong>, the exclusive commercial distributor of NFL Sunday Ticket to bars, restaurants and other U.S. venues. As part of the deal, <strong>RedBird Capital Partners</strong>, <strong>32 Equity</strong> (the NFL\'s investment arm) and <strong>TKO Group Holdings</strong> will become minority shareholders in DAZN. EverPass will be rebranded as DAZN for Business, with CEO <strong>Alex Kaplan</strong> continuing to lead it. Financial terms were not disclosed.',
            whyItMatters: 'The deal hands DAZN a ready-made U.S. commercial distribution network and puts the NFL\'s own investment arm on its cap table, deepening DAZN\'s ties to American sports media.',
            signalText: 'DAZN agreed to acquire EverPass Media, the exclusive U.S. commercial distributor of NFL Sunday Ticket.',
            sourceName: 'Reuters',
            sourceUrl: 'https://www.reuters.com/legal/transactional/dazn-buy-everpass-media-expand-into-us-commercial-venues-2026-08-26/',
            publishedDate: '2026-08-26'
          },
          {
            order: 2,
            tag: 'Restructuring',
            section: 'sports',
            accentText: '$5B+',
            headline: 'LIV Golf Prepares Bankruptcy Filing As PIF Funding Lapses',
            emailSummary: '<strong>LIV Golf</strong> may file for bankruptcy protection as soon as the week of <strong>September 7</strong>, the Financial Times reported, as funding from Saudi Arabia\'s <strong>Public Investment Fund</strong> is set to expire. The league laid off most of its staff last week and has reportedly sent players owed guaranteed money past 2026 settlement offers worth only cents on the dollar. PIF has invested more than <strong>$5 billion</strong> in LIV Golf since its 2022 launch and is expected to provide a bankruptcy loan of under <strong>$100 million</strong> without committing further funding.',
            whyItMatters: 'A bankruptcy filing would mark the formal unwinding of the Saudi-backed challenge to the PGA Tour, four years after PIF\'s capital reshaped professional golf\'s economics.',
            signalText: 'LIV Golf may file for bankruptcy protection as early as the week of September 7.',
            sourceName: 'Reuters',
            sourceUrl: 'https://www.reuters.com/legal/litigation/liv-golf-prepares-bankruptcy-filing-september-ft-reports-2026-08-31/',
            publishedDate: '2026-08-31'
          },
          {
            order: 3,
            tag: 'Valuation',
            section: 'sports',
            accentText: '$650M',
            headline: 'Unrivaled Reaches $650 Million Valuation In Series C',
            emailSummary: '<strong>Unrivaled</strong>, the women\'s 3x3 basketball league, closed an oversubscribed <strong>Series C</strong> round led by <strong>Ten Pillars Sports Fund</strong>, valuing the league at <strong>$650 million</strong> ahead of its third season. Players hold nearly <strong>$200 million</strong> in combined equity, a 550% increase since the league launched in 2025. The round also drew <strong>Carmelo Anthony</strong>, <strong>Geno Auriemma</strong>, <strong>Alex Morgan</strong> and <strong>Ashton Kutcher</strong> as investors.',
            whyItMatters: 'The valuation nearly doubles Unrivaled\'s mark from a year ago, signaling investors see durable commercial upside in women\'s basketball beyond a single hit season.',
            signalText: 'Unrivaled\'s Series C round valued the women\'s 3x3 basketball league at $650 million.',
            sourceName: 'Just Women\'s Sports',
            sourceUrl: 'https://justwomenssports.com/reads/unrivaled-650m-valuation-series-c-funding/',
            publishedDate: '2026-08-27'
          },
          {
            order: 4,
            tag: 'Sponsorship',
            section: 'sports',
            accentText: '$2.04B',
            headline: 'US Open Sponsors Shift From Ads To Experiences',
            emailSummary: '<strong>US Open</strong> sponsors including <strong>Heineken</strong>, <strong>Evian</strong>, <strong>Lotte New York Palace</strong> and <strong>IBM</strong> are shifting spend from traditional endorsement deals toward immersive fan activations — pop-up hotel packages, block parties, AI-powered serve-speed booths — as the tournament posts a record <strong>$108 million</strong> prize pool and a new <strong>$2.04 billion</strong> ESPN broadcast deal. Tournament revenue now tops <strong>$500 million</strong>.',
            whyItMatters: 'Sponsors are betting that content and experience — not just athlete endorsement — is what converts into engagement, reshaping how brands value sports sponsorship dollars.',
            signalText: 'US Open sponsors are shifting spend from athlete endorsements to immersive fan experiences.',
            sourceName: 'Forbes',
            sourceUrl: 'https://www.forbes.com/sites/merlisalawrencecorbett/2026/08/29/us-open-sponsors-pivot-from-endorsement-deals-to-immersive-experiences/',
            publishedDate: '2026-08-29'
          },
          {
            order: 5,
            tag: 'Milestone',
            section: 'sports',
            accentText: '12 Wins',
            headline: 'Pato O\'Ward Sweeps Milwaukee, Becomes Top Mexican IndyCar Winner',
            emailSummary: '<strong>Pato O\'Ward</strong> swept both IndyCar races in Milwaukee on the same day — a feat unseen in the series for 45 years — winning the morning race and then the rescheduled race with a pass 19 laps from the finish. The 27-year-old <strong>Monterrey</strong> native now has <strong>12 career wins</strong>, surpassing <strong>Adrián Fernández\'s</strong> 11 to become the winningest Mexican driver in IndyCar history.',
            whyItMatters: 'The milestone cements O\'Ward as Mexican motorsport\'s biggest active commercial draw, reinforcing IndyCar\'s growing investment in the Mexican fan base and sponsorship market.',
            signalText: 'Pato O\'Ward won both IndyCar races in Milwaukee on the same day.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/hazana-historica-pato-oward-barre-en-milwaukee-entra-al-olimpo-de-indycar-y-es-el-mexicano-mas-ganador-2026083102314461824',
            publishedDate: '2026-08-31'
          },
          {
            order: 6,
            tag: 'Brand IP',
            section: 'entertainment',
            headline: 'Authentic Brands Buys Majority Stake In Drake\'s OVO',
            emailSummary: '<strong>Authentic Brands Group</strong> acquired a majority stake in Drake\'s lifestyle brand <strong>October\'s Very Own (OVO)</strong>, with the rapper retaining a minority stake and creative input. Authentic is partnering with <strong>Vince Holding Corp.</strong> on OVO\'s design, product development and retail. Authentic — the second-largest licensor in the U.S. behind Disney — has also acquired <strong>Brooks Brothers</strong>, <strong>Champion</strong>, <strong>Sports Illustrated</strong> and <strong>Care Bears</strong>.',
            whyItMatters: 'The deal folds a musician-owned lifestyle brand into one of the industry\'s largest licensing platforms, a path Authentic has used to scale celebrity and heritage brands into global retail.',
            signalText: 'Authentic Brands Group acquired a majority stake in Drake\'s lifestyle brand OVO.',
            sourceName: 'The Hollywood Reporter',
            sourceUrl: 'https://www.hollywoodreporter.com/business/business-news/drake-sells-ovo-authentic-brands-group-1236683027/',
            publishedDate: '2026-08-27'
          },
          {
            order: 7,
            tag: 'Franchise IP',
            section: 'entertainment',
            accentText: '30 Years',
            headline: 'Pokémon\'s Trading Card Game Enters Film With \'Wild Card\'',
            emailSummary: '<strong>Pokémon</strong> announced <strong>\'Wild Card\'</strong>, a new theatrical movie built around a trading-card-game player character, set for worldwide release in <strong>2027</strong>. Unveiled at the closing ceremony of the <strong>2026 Pokémon World Championships</strong> in San Francisco, it\'s the franchise\'s first movie since 2020 and first theatrical release since 2018\'s \'The Power of Us.\' <strong>CloverWorks</strong> will produce, directed by <strong>Katsuhiko Kitada</strong> (\'The First Slam Dunk\'), as the franchise marks its <strong>30th anniversary</strong>.',
            whyItMatters: 'The film puts Pokémon\'s core trading-card-game business — not just its games or anime — at the center of a theatrical release, extending one of entertainment\'s largest licensed-IP franchises into a new commercial vehicle.',
            signalText: 'Pokémon announced a new theatrical movie, \'Wild Card,\' for worldwide release in 2027.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/news/pokemon-wild-card-movie-release-date-teaser-1236847050/',
            publishedDate: '2026-08-30'
          },
          {
            order: 8,
            tag: 'Box Office',
            section: 'entertainment',
            accentText: '$4.6B',
            headline: 'US Summer Box Office Nears All-Time $4.8B Record',
            emailSummary: 'The U.S. summer domestic box office stood at <strong>$4.598 billion</strong> through August 30, within striking distance of the <strong>$4.756 billion</strong> all-time summer record set in 2013. The weekend alone brought in <strong>$100 million</strong>, up 46% year-over-year, led by <strong>Spider-Man: Brand New Day</strong> ($22.2 million) and Warner Bros. Animation\'s <strong>Coyote vs. Acme</strong>, which posted indie distributor Ketchup Entertainment\'s biggest opening ever at <strong>$15.4 million</strong>.',
            whyItMatters: 'A record summer would confirm theatrical moviegoing\'s recovery is durable rather than a single-tentpole blip, with 2026\'s full-year domestic box office already running well ahead of 2025.',
            signalText: 'The U.S. summer box office reached $4.598 billion, nearing the 2013 record of $4.756 billion.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/08/box-office-summer-2026-near-record-1237062959/',
            publishedDate: '2026-08-30'
          },
          {
            order: 9,
            tag: 'IP Licensing',
            section: 'entertainment',
            headline: 'VIZ Media Licenses Classic Anime Catalog To Cineverse\'s RetroCrush',
            emailSummary: '<strong>VIZ Media</strong> licensed streaming rights to classic titles from its anime catalog — including <strong>Naruto</strong>, <strong>Bleach</strong>, <strong>Hunter x Hunter</strong>, <strong>Pretty Guardian Sailor Moon</strong>, and <strong>Hikaru no Go</strong> — to <strong>Cineverse\'s RetroCrush</strong>, marking RetroCrush\'s first acquisition of content from these franchises. The titles, timed to debut around Anime NYC, will stream on RetroCrush\'s app and its FAST/SVOD distribution across Prime Video Channels, Comcast, Roku and other platforms. Cineverse (Nasdaq: CNVS) said the deal builds out its Golden Age-focused anime vertical with VIZ\'s back catalog.',
            whyItMatters: 'The deal shows VIZ Media monetizing its legacy franchise catalog through smaller, genre-specific streamers rather than only its own or the majors\' platforms, extending its licensing footprint deeper into niche anime distribution.',
            signalText: 'VIZ Media licensed streaming rights to classic anime titles to Cineverse\'s RetroCrush.',
            sourceName: 'PR Newswire',
            sourceUrl: 'https://www.prnewswire.com/news-releases/cineverses-retrocrush-acquires-streaming-rights-to-classic-anime-series-and-films-from-viz-media-302862308.html',
            publishedDate: '2026-08-27'
          }
        ]
      },

      // WEEK 3
      {
        slug: 'week-3-august-2026',
        issueNumber: '3',
        weekLabel: 'Week 3',
        dateRange: 'August 17–24, 2026',
        publishedDate: '2026-08-24',
        issueTitle: 'Week 3 — August 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week three of August: the Padres sold for a record $3.9 billion, LIV Golf ended its 2026 season early to rebuild under new ownership, a new PE firm called BlackSun raised its first $1 billion sports fund, and Prime Video locked up Mexico\'s national team while pledging $2 billion across Latin America through 2030.',
        shareText: 'The Padres sell for a record $3.9B, LIV Golf ends its season early to rebuild, BlackSun raises $1B for its first sports fund, and Prime Video locks up Mexico\'s national team while pledging $2B across Latin America — Week 3 August · Fillip.',
        coreSignal: 'Every story this week is a fight over who gets to own the future rights to something, not just who owns it today. The Padres sold for a record $3.9 billion on the strength of stadium and season-ticket economics rather than market size, BlackSun raised its first $1 billion by promising fans and tribal nations actual equity, and LIV Golf is trying to hand ownership to its own players. Even Authentic\'s Care Bears purchase and Paramount\'s stalled Warner deal are both bets that owning the underlying IP — a character, a studio\'s catalog — beats renting it.',
        latamAngle: 'This issue puts Amazon\'s Latin American bet next to Liga MX\'s own capital-raising ambitions. Prime Video locked up Mexico\'s national team for four years — 38 home matches starting September 26 — as one piece of a broader $2 billion investment across Mexico, Brazil, Argentina, Colombia and Chile through 2030. Liga MX, meanwhile, is entertaining its own capital opening: president Francisco González won\'t rule out expanding past 18 teams as foreign investment funds circle newly available franchise slots, valued at $200–250 million each, since the league suspended promotion and relegation. Global platforms are buying distribution rights to Mexican soccer while Mexican soccer itself opens the door to outside ownership.',
        ecosystemNews: [
          {
            headline: 'AAA Reveals Stacked \'Ola de Calor\' Card For August 30',
            body: 'AAA revealed the lineup for \'Ola de Calor\' on August 30 at Bert Ogden Arena in Edinburg, Texas — War Raiders defending the AAA Tag Team Championships against Los Americanos, a gauntlet match for a shot at Flammer\'s Reina de Reinas title, and a four-way for the AAA Latin American Championship. The card also sets up the Mysterio-Grande Americano contract signing ahead of TripleManía 34.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/aaa-revela-la-cartelera-de-ola-de-calor-para-este-domingo-30-de-agosto-2026082320385733678'
          },
          {
            headline: 'Kings And Queens League México Launch New Copa Season',
            body: 'Kings League México kicks off a new Copa tournament on September 6, followed by Queens League México on September 13, with Club América returning as the format\'s first professional club affiliate. The relaunch opens a fresh chapter for both competitions since their 2024 debut in Mexico, building toward a new season of matches under the Copa format.',
            sourceName: 'Excélsior',
            sourceUrl: 'https://www.excelsior.com.mx/deportes/kings-y-queens-league-mexico-regresan-para-torneo-copa-con-reduccion-equipos'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Ownership',
            section: 'sports',
            accentText: '$3.9B',
            headline: 'Padres Sold To Feliciano, Jones For Record $3.9B',
            emailSummary: 'MLB owners unanimously approved the sale of the <strong>San Diego Padres</strong> to private equity billionaire <strong>José E. Feliciano</strong> and his wife <strong>Kwanza Jones</strong> for <strong>$3.9 billion</strong>, breaking the prior MLB record of $2.42 billion set by Steve Cohen\'s 2020 purchase of the Mets. Feliciano and Jones will own a reported 40% of the club, with Feliciano serving as control owner. The pair beat finalists including Dan Friedkin, Joe Lacob, and Tom Gores in a process that drew at least three bids of $3.5 billion or more.',
            whyItMatters: 'The price shatters MLB\'s sale record despite San Diego ranking outside the 15 largest U.S. metro areas, showing team economics — not market size — now drive valuations.',
            signalText: 'MLB owners approved the $3.9 billion sale of the San Diego Padres.',
            sourceName: 'Sportico',
            sourceUrl: 'https://www.sportico.com/business/team-sales/2026/san-diego-padres-sale-feliciano-jones-1234942104/',
            publishedDate: '2026-08-17'
          },
          {
            order: 2,
            tag: 'Restructuring',
            section: 'sports',
            accentText: '£3.7B',
            headline: 'LIV Golf Ends Season Early To Rebuild For 2027',
            emailSummary: '<strong>LIV Golf</strong> cancelled its Team Championships in Michigan and confirmed this week\'s Indianapolis event will close out the 2026 season, saying it needs to focus on "building its next chapter." Since launching in 2022, Saudi Arabia\'s <strong>Public Investment Fund</strong> spent <strong>£3.7 billion</strong> on the league before withdrawing its backing in April; CEO <strong>Scott O\'Neil</strong> said new investors have been secured and a transaction is expected to close in September. Three-time individual champion <strong>Jon Rahm</strong> is reportedly expected to leave despite playing in the Indianapolis finale.',
            whyItMatters: 'The early end formalizes LIV\'s shift away from Saudi ownership toward a player-equity model, with retaining stars like Rahm now the real test of whether the new structure holds.',
            signalText: 'LIV Golf cancelled its Michigan season finale and ended the 2026 season early.',
            sourceName: 'BBC Sport',
            sourceUrl: 'https://www.bbc.com/sport/golf/articles/c7vg4rn7v6ro',
            publishedDate: '2026-08-17'
          },
          {
            order: 3,
            tag: 'Expansion',
            section: 'sports',
            accentText: '20 Teams',
            headline: 'Liga MX Doesn\'t Rule Out Expanding To 20+ Teams',
            emailSummary: '<strong>Liga MX</strong> president <strong>Francisco González</strong> said the league is not ruling out expanding from its current <strong>18 teams</strong> to <strong>20 or more</strong>, with 20 seen as the ideal number for scheduling. The comments come as foreign investment funds show growing interest in acquiring franchises since Liga MX split from the Mexican Football Federation and suspended promotion and relegation. Current Liga MX clubs are valued between <strong>$200 million and $250 million</strong>.',
            whyItMatters: 'Expansion talk paired with the promotion/relegation suspension signals Liga MX is positioning itself to sell new franchise slots to outside capital rather than open spots through sporting results.',
            signalText: 'Liga MX said it is not ruling out expanding from 18 to 20 or more teams.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/liga-mx-no-descarta-incremento-a-20-franquicias-o-mas-2026082023083226053',
            publishedDate: '2026-08-20'
          },
          {
            order: 4,
            tag: 'Funding',
            section: 'sports',
            accentText: '$1B Raised',
            headline: 'New PE Firm BlackSun Raises $1B For Sports Fund',
            emailSummary: 'Newly launched <strong>BlackSun Private Equity</strong> has raised <strong>$1 billion</strong> toward its first fund, targeting <strong>$7 billion</strong> for investments in professional sports and franchise ownership, with Dubai-based <strong>Greenstone Equity Partners</strong> as placement agent. Founded by <strong>Atonn Muhammad</strong> and investment banker <strong>Nery Gomez</strong>, the firm\'s early moves include forming a group to bid for the <strong>Seattle SuperSonics</strong>\' return to the NBA and launching a new equity-owned <strong>World American Football League</strong>. Athletes <strong>Jason Kidd</strong>, Roy Jones Jr., and Lawrence Taylor are attached as investors.',
            whyItMatters: 'A fund built around fan and community equity stakes — not just institutional capital — adds a new ownership model to the wave of PE money entering pro sports.',
            signalText: 'BlackSun Private Equity raised $1 billion toward a $7 billion sports and media fund.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/08/private-equity-firm-blacksun-sports-media-fund-1237047176/',
            publishedDate: '2026-08-21'
          },
          {
            order: 5,
            tag: 'Media Rights',
            section: 'sports',
            accentText: '5 Years',
            headline: 'Indiana Pacers Sign 5-Year DAZN Streaming Deal',
            emailSummary: 'The <strong>Indiana Pacers</strong> signed a five-year streaming partnership making <strong>DAZN</strong> the team\'s new home, with 22 regular-season and 4 preseason games streamed free in year one across Indiana, Kentucky, Iowa, Illinois and Missouri. The deal reflects a market where cable TV access has fallen from <strong>88% in 2010 to roughly 30%</strong> today, according to team president <strong>Mel Raines</strong>. DAZN, which counts <strong>300 million</strong> global users, will also sell an Early Bird Season Pass for $59.99.',
            whyItMatters: 'A legacy NBA franchise moving its local broadcast to a global streaming platform shows regional sports networks losing ground even in mid-size media markets.',
            signalText: 'The Indiana Pacers signed a five-year streaming deal with DAZN for local game broadcasts.',
            sourceName: 'Forbes',
            sourceUrl: 'https://www.forbes.com/sites/tonyeast/2026/08/20/indiana-pacers-partner-with-dazn-as-new-streaming-home-for-games/',
            publishedDate: '2026-08-20'
          },
          {
            order: 6,
            tag: 'Media Rights',
            section: 'sports',
            accentText: '38 Matches',
            headline: 'Prime Video Signs Mexico National Team For 38 Matches',
            emailSummary: '<strong>Prime Video</strong> becomes the new streaming home for Mexico\'s national soccer team, agreeing to broadcast <strong>38 home matches</strong> over a <strong>four-year deal</strong> covering friendlies, CONCACAF competitions and 2030 World Cup qualifying — though not the World Cup final tournament itself. Coverage begins <strong>September 26, 2026</strong> against Colombia. <strong>Gustavo Coelho</strong>, Prime Video\'s head of sports for Latin America, said the strategy goes "beyond acquiring rights" to improving production quality and fan access.',
            whyItMatters: 'Locking up Mexico\'s marquee national team for four years builds Prime Video\'s live-sports footprint in one of the world\'s most valuable soccer fanbases ahead of the 2030 World Cup cycle.',
            signalText: 'Prime Video signed a four-year deal for 38 home matches of Mexico\'s national soccer team.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/seleccion-mexicana-llega-a-prime-video-transmitiran-38-partidos-del-tri-rumbo-al-mundial-2030-2026082020275559000',
            publishedDate: '2026-08-20'
          },
          {
            order: 7,
            tag: 'IP Licensing',
            section: 'entertainment',
            accentText: '40+ Years',
            headline: 'Authentic Completes Care Bears Acquisition, Adds New Vertical',
            emailSummary: '<strong>Authentic Brands Group</strong> completed its acquisition of <strong>Care Bears</strong>, establishing character IP as a new standalone vertical within its global platform. <strong>Simon Philips</strong> will lead the business as Executive Vice President of Character Brands, backed by a senior team spanning brand management, retail development and entertainment. CEO <strong>Corey Salter</strong> said Care Bears brings "more than four decades of emotional connection" and global recognition to build on.',
            whyItMatters: 'Carving out a dedicated Character Brands division shows Authentic treating character IP as its own asset class alongside its existing fashion and celebrity licensing business.',
            signalText: 'Authentic Brands Group completed its acquisition of Care Bears.',
            sourceName: 'Brands Untapped',
            sourceUrl: 'https://www.brandsuntapped.com/authentic-completes-care-bears-acquisition-and-details-new-character-vertical/',
            publishedDate: '2026-08-19'
          },
          {
            order: 8,
            tag: 'Streaming Investment',
            section: 'entertainment',
            accentText: '$2B',
            headline: 'Prime Video To Invest $2B In Latin America By 2030',
            emailSummary: '<strong>Prime Video</strong> announced plans to invest more than <strong>$2 billion</strong> in Latin America between 2027 and 2030, spanning original programming, licensed content and live sports rights across <strong>Mexico, Brazil, Argentina, Colombia and Chile</strong>. The streamer aims to double its number of local originals versus 2026, unveiling <strong>25 new titles</strong> for 2027 at a Mexico City showcase. VP of international <strong>Kelly Day</strong> called it "an investment in the entire region, across every way fans engage with Prime Video."',
            whyItMatters: 'A multiyear, multi-country commitment of this size signals Amazon is betting on Latin America as a primary growth market for original content, not just a licensing outlet.',
            signalText: 'Prime Video will invest more than $2 billion in Latin American content through 2030.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/08/prime-video-2-billion-latin-america-1237047327/',
            publishedDate: '2026-08-21'
          },
          {
            order: 9,
            tag: 'Regulatory',
            section: 'entertainment',
            accentText: '$400M',
            headline: 'TikTok To Pay $400M In DOJ Child-Privacy Settlement',
            emailSummary: 'The <strong>Department of Justice</strong> secured a <strong>$400 million</strong> settlement with <strong>TikTok</strong> and <strong>ByteDance</strong> resolving a 2024 complaint alleging violations of the Children\'s Online Privacy Protection Act, one of the largest COPPA recoveries ever. TikTok has already changed its ownership, management and compliance practices to strengthen safeguards for younger users since the complaint was filed. Associate Attorney General <strong>Stanley E. Woodward Jr.</strong> called the deal "a major victory for American children and parents."',
            whyItMatters: 'The size of the settlement sets a new benchmark for how much regulators can extract from platforms over children\'s data, raising the compliance cost for any app with a young user base.',
            signalText: 'TikTok and ByteDance agreed to pay $400 million to settle a DOJ children\'s-privacy lawsuit.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/08/tiktok-400m-justice-department-settlement-childrens-privacy-1237047976/',
            publishedDate: '2026-08-21'
          },
          {
            order: 10,
            tag: 'Litigation',
            section: 'entertainment',
            accentText: '$111B Deal',
            headline: 'California AG Cancels Paramount Settlement Talks Over $111B Deal',
            emailSummary: 'California Attorney General <strong>Rob Bonta</strong> canceled planned settlement talks with <strong>Paramount</strong> over its <strong>$111 billion</strong> proposed acquisition of <strong>Warner Bros. Discovery</strong>, accusing the company of leaking and misrepresenting an earlier meeting. Bonta leads a coalition of <strong>12 states</strong> suing to block the merger; Paramount had separately asked a court to order the states to post a <strong>$1.9 billion</strong> bond. The antitrust trial remains scheduled for March 2027.',
            whyItMatters: 'A canceled meeting removes the clearest path toward resolving the merger outside of court, extending the uncertainty that\'s already costing Paramount roughly $7 million a day in fees to WBD shareholders.',
            signalText: 'California\'s attorney general canceled settlement talks with Paramount over its Warner Bros. Discovery merger.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/global/california-ag-bonta-cancels-paramount-settlement-talks-1236841379/',
            publishedDate: '2026-08-24'
          }
        ]
      },

      // WEEK 2
      {
        slug: 'week-2-august-2026',
        issueNumber: '2',
        weekLabel: 'Week 2',
        dateRange: 'August 10–17, 2026',
        publishedDate: '2026-08-17',
        issueTitle: 'Week 2 — August 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week two of August: Bob Iger and Josh Kushner\'s group bought the Lakers for a record $12.5 billion, a Bezos-backed consortium closed its $7.45 billion Liverpool stake, Google turned five of Europe\'s biggest football clubs into an AI and smartphone platform for Gemini and Pixel, and Hollywood fought three separate battles over confidential data, state jurisdiction, and AI training rights.',
        shareText: 'The Lakers sell for a record $12.5B, Bezos closes his $7.45B Liverpool stake, Google turns Gemini into your football sidekick, and Ellison threatens to walk Paramount out of California — Week 2 August · Fillip.',
        coreSignal: 'This week\'s stories share a throughline: fights over who controls the information underneath an asset, not just the asset itself. Bezos- and Kushner-linked money bought into two of sports\' most storied franchises, while Panini, David Ellison, and Hollywood\'s own trade body each fought to control confidential licensing data, legal jurisdiction, and AI training rights. Even Google\'s football deal is really a bid to own the fan-data layer, not just the sponsorship board.',
        ecosystemNews: [
          {
            headline: 'El Grande Americano Greets Santos Fans Before Chivas Clash',
            body: 'Ahead of Santos Laguna\'s Liga MX match against Chivas, AAA star El Grande Americano appeared in Torreón to greet Santos supporters, captured in a video of the wrestler mingling with fans before kickoff. The moment adds to his growing crossover presence ahead of his Megacampeonato defense at TripleManía 34 in September.',
            sourceName: 'TUDN',
            sourceUrl: 'https://www.tudn.com/futbol/liga-mx/asi-reciben-los-aficionados-de-santos-al-grande-americano-previo-al-duelo-con-chivas-video'
          },
          {
            headline: 'TripleManía 34\'s First Match Confirmed: Americano vs. Mysterio',
            body: 'AAA confirmed the first official match for TripleManía 34: El Grande Americano defends the Megacampeonato against reigning champion Dominik Mysterio on Night 2, September 13 at Estadio Ciudad de México. Americano earned his shot by winning the Rey de Reyes tournament, with the rivalry escalating since Verano de Escándalo.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/1a-lucha-de-triplemania-34-el-grande-americano-vs-dominik-mysterio-por-el-megacampeonato-aaa-2026081603414559356'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Ownership',
            section: 'sports',
            accentText: '$12.5B',
            headline: 'Lakers Sold To Bob Iger, Josh Kushner Group For $12.5B',
            emailSummary: 'An ownership group led by <strong>Josh Kushner</strong> and <strong>Bob Iger</strong> is buying the <strong>Los Angeles Lakers</strong> for a <strong>$12.5 billion</strong> price tag, according to two people familiar with the deal. The team was previously sold to <strong>Mark Walter</strong> in October at a valuation of about $10 billion. Walter is now under investigation by the U.S. Attorney\'s Office in Manhattan and the SEC over insurance-fraud allegations.',
            whyItMatters: 'The sale sets a new record valuation for an NBA franchise and hands control of one of the league\'s most storied teams to a venture-capital and media-executive duo rather than a traditional sports owner.',
            signalText: 'Bob Iger and Josh Kushner\'s group is buying the Los Angeles Lakers for $12.5 billion.',
            sourceName: 'NBC News',
            sourceUrl: 'https://www.nbcnews.com/sports/nba/los-angeles-lakers-sold-bob-iger-josh-kushner-12-billion-rcna592121',
            publishedDate: '2026-08-12'
          },
          {
            order: 2,
            tag: 'Ownership',
            section: 'sports',
            accentText: '$7.45B',
            headline: 'Bezos-Backed Consortium Buys 30% Stake In Liverpool',
            emailSummary: 'A consortium led by <strong>Amit Bhatia</strong>\'s 1892 Holdings — including Jeff Bezos\'s K5 Sports fund and Eduardo Saverin\'s EE Capital — bought a <strong>30%</strong> stake in <strong>Liverpool FC</strong>, valuing the club at <strong>£5.5 billion ($7.45 billion)</strong>. Seller <strong>Fenway Sports Group</strong> retains majority control. Bhatia becomes vice chairman; Bezos will not sit on the board and is represented by Bryan Baum.',
            whyItMatters: 'The deal brings two of the world\'s wealthiest tech and finance figures into direct Premier League ownership, more than doubling FSG\'s original £300 million purchase price from fifteen years ago.',
            signalText: 'A Bezos- and Saverin-backed consortium bought a 30% stake in Liverpool FC for $7.45 billion.',
            sourceName: 'ESPN',
            sourceUrl: 'https://www.espn.com/soccer/story/_/id/49610494/liverpool-owners-fsg-sell-stake-consortium-jeff-bezos-amit-bhatia',
            publishedDate: '2026-08-14'
          },
          {
            order: 3,
            tag: 'Litigation',
            section: 'sports',
            headline: 'Panini Adds New Confidential-Data Claims To Fanatics Suit',
            emailSummary: '<strong>Panini</strong> filed new claims in its ongoing antitrust lawsuit against <strong>Fanatics</strong>, alleging Fanatics misused confidential licensing details — including royalty rates and minimum guarantee schedules — to win exclusive NBA, NFL, NBPA and NFLPA trading-card deals. Panini also alleges <strong>OneTeam Partners</strong> conspired with Fanatics to monopolize the market. A magistrate judge recently lifted the sealing order on these allegations.',
            whyItMatters: 'The claims escalate a three-year fight over who controls exclusive sports trading-card licensing, one of the most valuable rights categories in the collectibles market.',
            signalText: 'Panini alleges Fanatics misused confidential licensing data to win exclusive NBA and NFL card deals.',
            sourceName: 'Front Office Sports',
            sourceUrl: 'https://frontofficesports.com/panini-fanatics-allegations-lawsuit-confidential/',
            publishedDate: '2026-08-14'
          },
          {
            order: 4,
            tag: 'Media Rights',
            section: 'sports',
            accentText: '86M+ Followers',
            headline: 'KSI\'s Club Signs New Distribution Deal With DAZN, YouTube',
            emailSummary: '<strong>Dagenham & Redbridge</strong>, the National League South club where <strong>KSI</strong> is a shareholder and strategic partner, signed a new distribution partnership with <strong>DAZN</strong> to livestream select fixtures on YouTube throughout the 2026-27 season. The deal adds behind-the-scenes access, special guests, and new production formats to selected matches. KSI has more than 86 million combined followers across platforms.',
            whyItMatters: 'A creator with tens of millions of followers steering broadcast strategy at a fifth-tier English club shows creator-led distribution reaching deep into football\'s lower divisions.',
            signalText: 'Dagenham & Redbridge signed a DAZN-backed YouTube livestreaming deal for the 2026-27 season.',
            sourceName: 'ESPN',
            sourceUrl: 'https://www.espn.com/soccer/story/_/id/49608013/ksi-livestream-dagenham-redbridge-fixtures-new-distribution-partnership',
            publishedDate: '2026-08-14'
          },
          {
            order: 5,
            tag: 'Sponsorship',
            section: 'sports',
            accentText: '5 Clubs',
            headline: 'Google Becomes Official AI Partner Of Five Top Clubs',
            emailSummary: '<strong>Google</strong> announced long-term partnerships making <strong>Gemini</strong> and <strong>Pixel</strong> the official consumer-AI and smartphone partners of <strong>Arsenal, Barcelona, Bayern Munich, Liverpool</strong> and <strong>Paris Saint-Germain</strong>. Gemini will act as a personal AI assistant for fans — analyzing formation changes, surfacing head-to-head stats, and settling post-match debates — while Pixel devices capture behind-the-scenes content. Google said the partnerships will also amplify coverage of each club\'s women\'s team.',
            whyItMatters: 'Google is using top European football clubs as a distribution channel to embed Gemini and Pixel into fans\' daily habits, while using the deal to address the visibility gap in women\'s football.',
            signalText: 'Google made Gemini and Pixel the official AI and smartphone partners of five top football clubs.',
            sourceName: 'The Economic Times',
            sourceUrl: 'https://economictimes.indiatimes.com/news/international/global-trends/google-partners-with-arsenal-barcelona-bayern-liverpool-and-psg-for-ai-powered-fan-experiences/articleshow/133291279.cms',
            publishedDate: '2026-08-17'
          },
          {
            order: 6,
            tag: 'IP Licensing',
            section: 'entertainment',
            accentText: '600M+ Sold',
            headline: 'Squishmallows Movie Heads To Amazon MGM With Jazwares',
            emailSummary: '<strong>Amazon MGM</strong> is developing a tentpole family film based on <strong>Squishmallows</strong>, licensing the toy line and co-producing with creator <strong>Jazwares</strong> alongside producer <strong>Beau Flynn</strong> ("Moana," "Jungle Cruise"). It is not yet known whether the film will be animated, live-action, or a hybrid. Squishmallows has sold more than <strong>600 million</strong> units across 60 countries since launching in 2017.',
            whyItMatters: 'A billion-dollar toy line with no prior screen adaptation getting a major-studio tentpole treatment shows studios still mining consumer-product IP for original franchises.',
            signalText: 'Amazon MGM is developing a feature film based on the Squishmallows toy line.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/news/squishmallows-movie-amazon-mgm-beau-flynn-1236834782/',
            publishedDate: '2026-08-14'
          },
          {
            order: 7,
            tag: 'Litigation',
            section: 'entertainment',
            accentText: '$1.2B',
            headline: 'Ellison Threatens To Move Paramount Out Of California',
            emailSummary: '<strong>David Ellison</strong> told Paramount\'s senior executive team he will begin relocating the studio out of California on <strong>Oct. 1</strong> if state attorney general <strong>Rob Bonta</strong> won\'t negotiate a settlement in the states\' antitrust suit against the Paramount-Warner Bros. Discovery merger by then. Bonta called the threat "an attempt to blackmail the state." Paramount starts accruing $7 million a day in fees to WBD shareholders on Oct. 1 — roughly <strong>$1.2 billion</strong> by the trial\'s scheduled March 2027 conclusion.',
            whyItMatters: 'A studio threatening to leave its home state over an unresolved antitrust case shows how much leverage Paramount believes it has, and how costly the merger\'s limbo has already become.',
            signalText: 'David Ellison threatened to move Paramount out of California starting October 1.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/news/david-ellison-move-paramount-out-of-california-states-antitrust-lawsuit-1236831936/',
            publishedDate: '2026-08-11'
          },
          {
            order: 8,
            tag: 'AI · IP',
            section: 'entertainment',
            headline: 'MPA Strikes IP-Protection Deal With ByteDance Over AI',
            emailSummary: 'The <strong>Motion Picture Association</strong> and <strong>ByteDance</strong> signed a memorandum of understanding to build intellectual-property protections into ByteDance\'s <strong>Seedance</strong> and <strong>Seedream</strong> AI video and image generators. The deal follows a February cease-and-desist letter the MPA sent after Seedance 2.0 let users generate videos of actors including Brad Pitt and Tom Cruise. The protections are already reflected in last month\'s Seedance 2.5 and Seedream 5.0 Pro releases.',
            whyItMatters: 'One of the industry\'s most vocal AI critics reached a negotiated framework instead of pursuing litigation, setting a template Hollywood may use with other AI model makers.',
            signalText: 'The Motion Picture Association signed an IP-protection agreement with ByteDance covering its Seedance AI models.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/biz/news/motion-picture-association-deal-bytedance-ip-ai-seedance-1236836240/',
            publishedDate: '2026-08-17'
          }
        ]
      },

      // WEEK 1
      {
        slug: 'week-1-august-2026',
        issueNumber: '1',
        weekLabel: 'Week 1',
        dateRange: 'August 2–9, 2026',
        publishedDate: '2026-08-09',
        issueTitle: 'Week 1 — August 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week one of August: a tequila magnate bought into LAFC while Mexico\'s own Fox Sports collapsed under debt, Jeff Bezos and Eduardo Saverin closed in on a $6 billion stake in Liverpool, LIV Golf replaced its Saudi backer, and MLB\'s players and owners dug in over a hard salary cap that could cost part of the 2027 season.',
        shareText: 'LAFC\'s new tequila owner, Bezos and Saverin circling a $6B stake in Liverpool, LIV Golf\'s mystery investor, and the MLB fight that could cost a season — Week 1 August · Fillip.',
        coreSignal: 'The pattern this week isn\'t which team or league changes hands — it\'s who\'s doing the buying and who\'s stuck footing the bill. Tequila capital takes an ownership stake in LAFC, Amazon and Facebook wealth circle Liverpool, and LIV Golf trades Saudi backing for an unnamed replacement, while Paramount racks up $7 million a day waiting on its own merger and MLB\'s players and owners can\'t agree on how to split the sport\'s money. Capital is moving into sports and media ownership faster than the labor and governance structures built to absorb it.',
        latamAngle: 'This week captures Mexican capital\'s split personality in sports business. Becle president Juan Domingo Beckmann converted a tequila sponsorship into a direct 6% ownership stake in LAFC, at a valuation that puts the club above $1.25 billion — Mexican consumer capital buying into US sports ownership. At the same time, Mexico\'s own flagship sports broadcaster, Fox Sports México, is unwinding: exiting izzi and Sky on August 30 after losing NFL, Premier League, and Concacaf rights amid a cash crunch and a licensing dispute with its own former parent, Fox Corporation. Mexican money is expanding into foreign franchises even as the country\'s home-grown sports-media infrastructure collapses under debt.',
        ecosystemNews: [
          {
            headline: 'Damián 666 Joins Los Perros del Mal\'s New Generation',
            body: 'During AAA\'s Verano de Escándalo 2026, lucha libre veteran Damián 666 officially joined the revitalized Los Perros del Mal faction at Daga\'s invitation. Damián 666 — real name José Luis Carrera Gómez, a Tijuana-born wrestler active since the 1980s and a founding member of La Familia de Tijuana — received the group\'s jersey and raised its signature chain in tribute to founder Hijo del Perro Aguayo. It\'s a legacy handoff for one of AAA\'s most storied factions.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/los-perros-del-mal-siguen-creciendo-damian-666-se-une-a-la-nueva-generacion-2026080904564728225'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Media Rights',
            section: 'sports',
            accentText: '380 Matches',
            headline: 'DAZN Extends Exclusive Premier League Rights In Iberia Through 2031',
            emailSummary: '<strong>DAZN</strong> extended its exclusive broadcast agreement for <strong>Premier League</strong> coverage in Spain and Portugal through the 2030-31 season. The three-year renewal covers all 380 live matches annually plus FA Cup highlights. DAZN now holds rights to all five major European leagues in Spain.',
            whyItMatters: 'The renewal locks in over a decade of Premier League distribution in one of Europe\'s largest football markets, consolidating DAZN\'s grip on Spanish and Portuguese sports streaming.',
            signalText: 'DAZN renewed its exclusive Premier League broadcast rights in Spain and Portugal through 2031.',
            sourceName: 'Sportcal',
            sourceUrl: 'https://www.sportcal.com/media/dazn-renews-exclusive-premier-league-rights-in-iberia-through-2031/',
            publishedDate: '2026-08-05'
          },
          {
            order: 2,
            tag: 'Ownership',
            section: 'sports',
            accentText: '$1.25B',
            headline: 'Tequila Magnate Buys 6% Stake In LAFC',
            emailSummary: '<strong>Juan Domingo Beckmann Legorreta</strong>, president of tequila giant Becle, acquired a <strong>6% stake</strong> in <strong>LAFC</strong> in a deal that valued the club at <strong>$1.25 billion</strong>. Beckmann joins the board alongside co-investors James Cha and Carlos Vela, while Joe Tsai and Mike Mahan divested their stakes. Becle has sponsored LAFC through its 1800 tequila brand since 2021.',
            whyItMatters: 'The deal converts a sponsorship relationship into direct ownership, showing how Mexican consumer-goods capital is moving from brand deals into equity stakes in US sports franchises.',
            signalText: 'Becle\'s president bought a 6% stake in LAFC in a deal valuing the club at $1.25 billion.',
            sourceName: 'Playbook',
            sourceUrl: 'https://www.playbook.la/articulo?id=el-dueno-de-jose-cuervo-entra-al-lafc-en-una-operacion-que-valuo-al-club-en-us-1-250-millones',
            publishedDate: '2026-08-05'
          },
          {
            order: 3,
            tag: 'Funding',
            section: 'sports',
            accentText: '$5B+',
            headline: 'LIV Golf Secures Unnamed Lead Investor For 2027',
            emailSummary: '<strong>LIV Golf</strong> signed a board-approved agreement with an unnamed lead investor to fund the tour from 2027 onward, replacing Saudi Arabia\'s Public Investment Fund, which is ending more than <strong>$5 billion</strong> in backing after this season. The tour will shrink to 10 events in 2027 and make its players majority equity holders, a first for a major global sports league.',
            whyItMatters: 'The exit of Saudi backing forced LIV to find fresh capital just to survive past 2026, and handing players majority equity sets a new ownership template other leagues may watch.',
            signalText: 'LIV Golf signed a new lead investor to replace Saudi Arabia\'s PIF funding starting in 2027.',
            sourceName: 'BBC Sport',
            sourceUrl: 'https://www.bbc.com/sport/golf/articles/c1e14g1d192o',
            publishedDate: '2026-08-05'
          },
          {
            order: 4,
            tag: 'Ownership',
            section: 'sports',
            accentText: '$6B',
            headline: 'Bezos, Saverin Set To Buy 30% Stake In Liverpool',
            emailSummary: 'A consortium led by <strong>Amit Bhatia</strong>, including Amazon founder <strong>Jeff Bezos</strong> and Facebook co-founder <strong>Eduardo Saverin</strong>, is close to buying a <strong>30% stake</strong> in <strong>Liverpool FC</strong> in a deal valuing the club at <strong>$6 billion</strong>. Current owner Fenway Sports Group is expected to announce the deal within days. It would mark Bezos\'s first major move into sports team ownership.',
            whyItMatters: 'A $6 billion valuation would rank among the largest transactions in football history and signals tech wealth continuing to flow into Premier League ownership.',
            signalText: 'A consortium including Jeff Bezos and Eduardo Saverin is buying a 30% stake in Liverpool FC.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/08/liverpool-fc-deal-close-jeff-bezos-eduardo-saverin-1237030021/',
            publishedDate: '2026-08-10'
          },
          {
            order: 5,
            tag: 'Labor',
            section: 'sports',
            accentText: '$245.3M',
            headline: 'MLB Salary-Cap Fight Threatens Full 2027 Season',
            emailSummary: '<strong>MLB</strong> has proposed a <strong>$245.3 million</strong> salary cap and a $171.2 million payroll floor for 2027, a structure the players\' union has rejected outright. The current CBA expires December 1, 2026, and a lockout is widely expected without a new deal, with growing doubt the league can complete a full 162-game season. Under MLB\'s own proposal, the Phillies would be among eight teams forced to cut payroll.',
            whyItMatters: 'A hard cap would be MLB\'s first attempt at one since the dispute that triggered the 1994 strike, and it would fundamentally reshape how league revenue is split between owners and players.',
            signalText: 'MLB proposed a $245.3 million salary cap for the 2027 season, and the players\' union rejected it.',
            sourceName: 'Philadelphia Baseball Review',
            sourceUrl: 'https://www.philadelphiabaseballreview.com/2026/08/major-league-baseball-labor-dispute-update-lockout-owners-2027-schedule.html',
            publishedDate: '2026-08-06'
          },
          {
            order: 6,
            tag: 'Contracts',
            section: 'sports',
            headline: 'Isaac Del Toro Extends With UAE Team Emirates Through 2031',
            emailSummary: 'Mexican cyclist <strong>Isaac del Toro</strong>, 22, signed a contract extension with <strong>UAE Team Emirates-XRG</strong> through the 2031 season. The renewal follows a breakout 2026 in which del Toro finished third overall at the Tour de France, won a stage, and took the white jersey, plus stage-race wins at the UAE Tour, Tirreno-Adriatico, and Tour Auvergne-Rhône-Alpes.',
            whyItMatters: 'The extension locks in one of cycling\'s most promising young climbers through his expected prime years, anchoring a top European team\'s long-term plans around a Mexican rider.',
            signalText: 'Isaac del Toro signed a contract extension with UAE Team Emirates through 2031.',
            sourceName: 'UAE Team Emirates',
            sourceUrl: 'https://www.uaeteamemirates.com/isaac-del-toro-commits-future-uae-team-emirates-xrg-2031/',
            publishedDate: '2026-08-06'
          },
          {
            order: 7,
            tag: 'Media Rights',
            section: 'entertainment',
            accentText: '4 Channels',
            headline: 'Fox Sports México To Exit Izzi And Sky Amid Crisis',
            emailSummary: '<strong>Fox Sports México</strong>, operated by Grupo Lauman, will exit pay-TV providers izzi and Sky on <strong>August 30, 2026</strong>, pulling four channels after Megacable had already dropped the service in February. The broadcaster has lost NFL, Premier League, FA Cup, Concacaf Champions Cup, and Formula 1 rights amid a cash crunch, and remains locked in a licensing dispute with Fox Corporation over the brand\'s use through November 2026.',
            whyItMatters: 'One of Mexico\'s flagship sports broadcasters is unwinding its distribution and rights portfolio in real time, opening the door for Fox Corporation\'s competing channel to absorb its audience and rights.',
            signalText: 'Fox Sports México is exiting two major Mexican pay-TV platforms on August 30, 2026.',
            sourceName: 'El Imparcial',
            sourceUrl: 'https://www.elimparcial.com/deporte/2026/08/05/fox-sports-mexico-saldra-de-izzi-y-sky-donde-podra-verse-el-canal-de-grupo-lauman-y-por-que-atraviesa-una-crisis/',
            publishedDate: '2026-08-04'
          },
          {
            order: 8,
            tag: 'Box Office',
            section: 'entertainment',
            accentText: '$1.67B',
            headline: 'Spider-Man: Brand New Day Becomes 2nd-Fastest To $1B Overseas',
            emailSummary: '<strong>\'Spider-Man: Brand New Day\'</strong> has crossed <strong>$1 billion</strong> internationally in 12 days, the second-fastest film ever to do so behind only 2019\'s Avengers: Endgame. The film has grossed <strong>$1.67 billion</strong> worldwide — $1.01 billion international and $655 million domestic — and is now the 12th-highest-grossing release of all time.',
            whyItMatters: 'The pace confirms Marvel\'s Spider-Man franchise remains one of the few IPs that can still reliably move the global box office at blockbuster scale.',
            signalText: '\'Spider-Man: Brand New Day\' crossed $1 billion overseas in 12 days, reaching $1.67 billion worldwide.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/box-office/spider-man-brand-new-day-second-fastest-movie-1-billion-overseas-1236830845/',
            publishedDate: '2026-08-09'
          },
          {
            order: 9,
            tag: 'Box Office',
            section: 'entertainment',
            accentText: '$3.985B',
            headline: 'Summer Box Office On Pace To Cross $4B, Best Since 2023',
            emailSummary: 'The 2026 domestic summer box office stood at <strong>$3.985 billion</strong> through August 9, just $14.8 million from crossing $4 billion for the first time since 2023. Five films — Spider-Man: Brand New Day, The Odyssey, Toy Story 5, The Obsession, and The Backrooms — account for <strong>$2 billion</strong> of that total, half of the summer\'s domestic ticket sales.',
            whyItMatters: 'A $4 billion summer would mark Hollywood\'s strongest box-office stretch since before the pandemic, though the total is being carried by a narrow set of tentpoles rather than a broad recovery.',
            signalText: 'The 2026 domestic summer box office is on pace to cross $4 billion for the first time since 2023.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/08/summer-domestic-box-office-record-spider-man-odyssey-1237029662/',
            publishedDate: '2026-08-09'
          },
          {
            order: 10,
            tag: 'Antitrust',
            section: 'entertainment',
            accentText: '$7M/Day',
            headline: 'Paramount-WBD Antitrust Trial Set For March 2027',
            emailSummary: 'A federal judge set a <strong>March 2, 2027</strong> trial date for the antitrust challenge to Paramount\'s acquisition of <strong>Warner Bros. Discovery</strong>, brought by a coalition of state attorneys general and the Writers Guild of America. Paramount must pay WBD shareholders roughly <strong>$7 million per day</strong> starting September 30 until the deal closes, meaning its liability will exceed $1 billion by the time a verdict arrives.',
            whyItMatters: 'The delay keeps one of media\'s largest pending mergers in legal limbo for at least seven more months and pushes Paramount\'s carrying costs past $1 billion before a ruling even arrives.',
            signalText: 'A judge set a March 2027 trial date for the Paramount-Warner Bros. Discovery antitrust case.',
            sourceName: 'Scripps News',
            sourceUrl: 'https://www.scrippsnews.com/us-news/paramount-warner-bros-discovery-judge-sets-2027-trial-date-for-antitrust-fight',
            publishedDate: '2026-08-04'
          }
        ]
      }
    ]
  },

  // JULY 2026
  {
    slug: 'july-2026',
    isCurrent: false,
    monthLabel: 'July 2026',
    editionTag: 'Sports · Entertainment · IP · Capital',
    publishedDate: '2026-08-02',
    dateRange: 'June 29 – August 2, 2026',
    introLine: 'Weeks 1–4 of July: Sky acquires ITV for $2.1B, Atlético Madrid signs a 10-year Live Nation deal to stage concerts at the Metropolitano, an AI \'actor\' named Tilly Norwood gets her first movie, PJL sells a $50M franchise before its 2027 launch, the Premier Lacrosse League raises $100M ahead of the Olympics, Liga F\'s assembly ratifies Pau Gasol\'s €55M investment, CazéTV locks up Euro 2028 rights in Brazil, and Isaac del Toro becomes the first Mexican Tour de France stage winner in 37 years; then Mexico sets a new U.S. soccer TV ratings record against England, FIFA\'s Infantino floats a 64-team World Cup for 2030, Netflix, Disney, and YouTube prepare to bid on the next World Cup media-rights cycle, a Khosla-led group buys the Seahawks for a record $9.6B, London City Lionesses sign Ballon d\'Or winner Alexia Putellas, TV Azteca enters bankruptcy reorganization, and Meta pulls an AI image feature after talent-agency backlash; then Pophouse buys half of Iron Maiden\'s catalog and NIL rights, the Writers Guild sues to block Paramount\'s $111B Warner acquisition, Bundesliga takes a pay cut to move onto free U.S. streaming via Fandango, Christopher Nolan\'s \'The Odyssey\' posts the best box office previews of the year, and Mexico\'s FMF gets fined over Fan ID data violations while also scrapping promotion and relegation and leaving Liga MX Femenil without a calendar; then Mexico pushes to host 36% of the 2031 Women\'s World Cup and rebuilds Liga Femenil BBVA\'s competition format and identity, Isaac del Toro becomes the first Mexican cyclist to podium at the Tour de France, Bad Bunny\'s DTMF World Tour closes at $467.5M, Rogers Communications takes full ownership of MLSE in a $4.35B buyout, \'The Odyssey\' crosses $639M globally, and Comic-Con 2026 doubles as a franchise-IP marketing platform for Marvel, HBO Max, and Amazon; then FIFA abandons a $20B plan to sell World Cup stakes after Europe, Asia and the Americas revolt, Saudi Arabia\'s PIF stops funding LIV Golf in the same week it clears the last approvals on a $55B take-private of EA, Jake Paul\'s MVP merges with the PFL, YouTube TV adds ESPN and NBC Sports, the WSL rebuilds its League Cup as the Subway Players Cup, Mattel and Reebok build a doll-and-sneaker launch around Angel Reese, \'Spider-Man: Brand New Day\' posts a $927M global opening, Netflix and AMC sign a $500M Walking Dead deal, BlackRock backs a $600M music-catalog buy, and Mexico\'s LYON wins the Free Fire world title in Paris.',
    issues: [

      // WEEK 5
      {
        slug: 'week-5-july-2026',
        issueNumber: '5',
        weekLabel: 'Week 5',
        dateRange: 'July 27 – August 2, 2026',
        publishedDate: '2026-08-02',
        issueTitle: 'Week 5 — July 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week five of July: FIFA\'s own confederations forced Gianni Infantino to abandon a $20 billion plan to sell stakes in the World Cup, Saudi Arabia\'s sovereign fund walked away from LIV Golf in the same week it cleared the last approvals on the largest leveraged buyout ever recorded, and Spider-Man posted the second-biggest global opening in film history.',
        shareText: 'FIFA kills its $20B World Cup investment vehicle, PIF exits LIV Golf while closing a $55B EA buyout, Jake Paul\'s MVP merges with the PFL, Spider-Man opens to $927M worldwide, and Mexico\'s LYON wins a Free Fire world title — Week 5 July · Fillip.',
        coreSignal: 'The same week Saudi Arabia\'s Public Investment Fund confirmed it would stop funding LIV Golf, it cleared the last approvals on a $55 billion take-private of EA. That is the week in miniature: capital is not retreating from sport and entertainment, it is relocating to assets it can actually control. FIFA\'s members made the boundary explicit, rejecting $4.2 billion rather than let outside investors near the World Cup. Everywhere the asset is ownable — fighter rosters, song catalogs, a zombie franchise — it consolidated. Everywhere it is collectively held, capital was shown the door.',
        latamAngle: 'Two stories in this issue put Latin America on both sides of the value chain. Mexican organization LYON won the Free Fire world championship in Paris, the region\'s first title at the Esports World Cup, with Chilean player Benjamín Honores taking MVP — LatAm as a producer of competitive talent, not only an audience for it. Days later, Spider-Man: Brand New Day set all-time opening records in Brazil ($23.8M), Peru, Colombia, Chile and Ecuador, with Mexico posting the second-biggest opening in its history at $38.3M. Brazil beat Endgame in like-for-likes, in a market Hollywood has struggled to crack since Covid.',
        ecosystemNews: [
          {
            headline: 'Free Fire and Lucha Libre AAA Launch Rey de Los Luchadores',
            body: 'Garena and Lucha Libre AAA Worldwide launched Free Fire x AAA 2.0: Rey De Los Luchadores, running inside the mobile battle royale from July 31 to August 16. Rey Mysterio joins with an exclusive black, white and gold bundle, and La Parka returns with a refreshed mask. Players complete daily challenges to compete for the Megacampeonato AAA, alongside themed items including a Mysterio lowrider, a kendo stick and a championship-belt backpack.',
            sourceName: 'IGN Latinoamérica',
            sourceUrl: 'https://latam.ign.com/free-fire-game/113975/free-fire-lucha-libre-aaa-2026'
          },
          {
            headline: 'TripleMania 34 Moves to MGM Grand Garden Arena in Las Vegas',
            body: 'WWE and AAA moved night one of TripleMania 34 from the Luxor to the MGM Grand Garden Arena after the September 11 show sold out, citing unprecedented demand. The date and start time are unchanged, and night two remains at Arena CDMX on September 13. TripleMania 33 drew a record 19,691 fans and was the highest-grossing edition in the event\'s history.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/articles/wwe-announces-aaa-triplemania-venue-145438288.html'
          },
          {
            headline: 'G3X FC Wins Kings World Cup Clubs 2026 in Milan',
            body: 'G3X FC beat Alpak FC 9-5 in Milan to win Kings World Cup Clubs 2026, becoming the first non-Spanish club to take the title after Porcinos FC in 2024 and Los Troncos FC in 2025. The 14 goals made it the highest-scoring final in the competition\'s history. More than 9,000 fans attended across seven matchdays at the Kings League Arena in Cologno Monzese.',
            sourceName: 'Kings League',
            sourceUrl: 'https://kingsleague.pro/en/world-cup/news/g3x-fc-kwc-clubs-2026-champions-final-alpak'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Governance',
            section: 'sports',
            accentText: '$20B',
            headline: 'FIFA Abandons $20B Plan to Sell World Cup Stakes',
            emailSummary: '<strong>FIFA</strong> said it will not proceed with a plan to create a <strong>$20 billion</strong> commercial arm, FIFA Forward Enterprise, that would have sold stakes in the World Cup and other tournaments to private investors. The vehicle had been targeting <strong>$4.2 billion</strong> from minority, non-controlling investors, with FIFA remaining the controlling shareholder. <strong>UEFA</strong> voted that all 55 of its member associations would boycott the World Cup if the plan advanced, and <strong>CONCACAF</strong> and the <strong>AFC</strong> also formally opposed it. President <strong>Gianni Infantino</strong> withdrew the proposal on Friday, days after announcing it.',
            whyItMatters: 'The confederations proved they can veto FIFA\'s commercial strategy outright, closing off private-capital access to the single largest media property in sport.',
            signalText: 'FIFA cancelled a plan to sell $4.2 billion in minority stakes in the World Cup.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/07/fifa-scraps-plan-commercial-arm-1237015111/',
            publishedDate: '2026-07-31'
          },
          {
            order: 2,
            tag: 'Consolidation',
            section: 'sports',
            accentText: '300+ Fighters',
            headline: 'Jake Paul\'s MVP Merges With PFL Across Boxing and MMA',
            emailSummary: '<strong>Most Valuable Promotions</strong> and the <strong>Professional Fighters League</strong> merged, bringing more than <strong>300 fighters</strong> across boxing and mixed martial arts under the MVP brand. MVP co-founders <strong>Jake Paul</strong> and <strong>Nakisa Bidarian</strong> will lead the combined company, with PFL head <strong>John Martin</strong> joining the board and continuing as CEO. MVP launched in boxing in 2021 and staged its first MMA card in May, when <strong>Ronda Rousey</strong>\'s 15-second win over <strong>Gina Carano</strong> peaked at 17 million viewers globally on Netflix.',
            whyItMatters: 'Combining the number-two global MMA promotion with boxing\'s most aggressive new promoter creates a single counterweight to the UFC across both codes.',
            signalText: 'Most Valuable Promotions and the Professional Fighters League merged under the MVP brand.',
            sourceName: 'BBC Sport',
            sourceUrl: 'https://www.bbc.com/sport/articles/c9359evpwy0o',
            publishedDate: '2026-07-30'
          },
          {
            order: 3,
            tag: 'Funding',
            section: 'sports',
            accentText: '$350M',
            headline: 'LIV Golf to Cancel $40M Season Finale in Michigan',
            emailSummary: '<strong>LIV Golf</strong> is set to cancel its <strong>$40 million</strong> team championship, scheduled for August 27–30 at The Cardinal at Saint John\'s Resort outside Detroit. It is the circuit\'s second cancellation of the season after LIV Golf Louisiana in late June, cutting the 2026 calendar from 14 events to 12. Saudi Arabia\'s <strong>Public Investment Fund</strong> has said it will stop funding the league after this season, and LIV is seeking up to <strong>$350 million</strong> from new investors to continue into 2027.',
            whyItMatters: 'A sovereign wealth fund withdrawing from the league it built forces LIV to prove commercial viability on open-market terms for the first time.',
            signalText: 'Saudi Arabia\'s Public Investment Fund will stop funding LIV Golf after the 2026 season.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/articles/liv-golf-to-cancel-40m-season-finale-in-michigan-193416138.html',
            publishedDate: '2026-07-28'
          },
          {
            order: 4,
            tag: 'Media Rights',
            section: 'sports',
            accentText: '13.8%',
            headline: 'YouTube TV Adds ESPN and NBC Sports to Lineup',
            emailSummary: '<strong>YouTube TV</strong> integrated <strong>ESPN Unlimited</strong> directly into its service and signed a long-term carriage extension with <strong>NBCUniversal</strong>, which will also produce select premiere live sporting events for YouTube. Peacock joins YouTube Premium\'s ad-free tier next year. YouTube accounted for <strong>13.8%</strong> of all U.S. television viewing in May per Nielsen, ahead of Netflix at 8%, and YouTube TV has passed <strong>10 million subscribers</strong>, trailing only Charter (12.5M) and Comcast (10.67M).',
            whyItMatters: 'The biggest legacy sports broadcasters are now distributing through YouTube rather than competing with it, concentrating sports advertising on a single platform.',
            signalText: 'YouTube TV added ESPN Unlimited and extended its carriage agreement with NBCUniversal.',
            sourceName: 'Forbes',
            sourceUrl: 'https://www.forbes.com/sites/gabrielalinzainescu/2026/07/29/youtube-tv-adds-espn-and-nbc-sports-as-ad-dollars-follow-the-audience/',
            publishedDate: '2026-07-29'
          },
          {
            order: 5,
            tag: 'Sponsorship',
            section: 'sports',
            accentText: '23 Clubs',
            headline: 'WSL Rebrands League Cup as Subway Players Cup',
            emailSummary: '<strong>WSL Football</strong> extended its partnership with <strong>Subway</strong> through a multi-year deal and rebranded the League Cup as the <strong>Subway Players Cup</strong> from the 2026/27 season. The competition moves to a Swiss-model league phase with <strong>23 clubs</strong>, each playing a minimum of six matches, before an eight-team knockout round. Clubs in the UEFA Women\'s Champions League are excluded to ease fixture congestion, and drawn matches go straight to penalties — worth two points to the winner and one to the loser. The final is set for March 13–14, 2027.',
            whyItMatters: 'Redesigning a cup competition around squad depth and a named title sponsor shows women\'s football building commercial properties tailored to its own calendar rather than copying the men\'s format.',
            signalText: 'WSL Football renamed its League Cup the Subway Players Cup under a multi-year sponsorship extension.',
            sourceName: 'Her Football Hub',
            sourceUrl: 'https://herfootballhub.com/wsl-football-launches-subway-players-cup-with-player-welfare-at-its-core/',
            publishedDate: '2026-07-28'
          },
          {
            order: 6,
            tag: 'Esports',
            section: 'sports',
            accentText: '$300,000',
            headline: 'Mexico\'s LYON Wins Free Fire Title at Esports World Cup',
            emailSummary: 'Mexican organization <strong>LYON</strong> won the <strong>Free Fire</strong> world championship at the <strong>Esports World Cup 2026</strong> in Paris, the first Latin American squad to take the title there. The win carries a <strong>$300,000</strong> prize and the first direct berth at the Free Fire Global Finals in Bangkok. On the fifth map of the final, LYON set an EWC record with <strong>33 eliminations</strong>, beating Team Falcons\' previous mark of 28. Chilean player <strong>Benjamín "gamezk!ng" Honores</strong> was named MVP with 60 eliminations and a $25,000 bonus.',
            whyItMatters: 'A Latin American roster winning the largest event on the esports calendar gives regional organizations a proven case for sponsorship and investment at global rates.',
            signalText: 'Mexican esports organization LYON won the Free Fire world championship at the Esports World Cup.',
            sourceName: 'IGN Latinoamérica',
            sourceUrl: 'https://latam.ign.com/esports-1/113928/lyon-campeon-mundial-free-fire-ewc-2026',
            publishedDate: '2026-07-29'
          },
          {
            order: 7,
            tag: 'Box Office',
            section: 'entertainment',
            accentText: '$927M',
            headline: 'Spider-Man: Brand New Day Opens to $927M Worldwide',
            emailSummary: '<strong>Spider-Man: Brand New Day</strong> opened to <strong>$927 million</strong> worldwide across 90,000 screens, the second-biggest global debut in industry history behind <strong>Avengers: Endgame</strong>\'s $1.22 billion. Sony had projected $425 million. International contributed <strong>$572 million</strong> from 66 markets, led by <strong>China</strong> at $121 million — the biggest post-Covid Marvel opening there — and the United Kingdom at $49 million. The film set all-time opening records in France, India, Brazil, Spain and eight other markets.',
            whyItMatters: 'A single title more than doubling studio projections confirms theatrical demand is concentrating in a handful of franchise events rather than spreading across the release slate.',
            signalText: 'Spider-Man: Brand New Day opened to $927 million worldwide, the second-biggest global opening ever.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/08/box-office-global-spider-man-brand-new-day-1237015459/',
            publishedDate: '2026-08-02'
          },
          {
            order: 8,
            tag: 'Streaming Rights',
            section: 'entertainment',
            accentText: '$500M',
            headline: 'Netflix and AMC Sign $500M Walking Dead Streaming Deal',
            emailSummary: '<strong>AMC Global Media</strong> and <strong>Netflix</strong> signed a five-year, <strong>$500 million</strong> global streaming rights deal covering the full <strong>Walking Dead</strong> universe — some <strong>371 episodes</strong> across the original series and six spin-offs. The agreement expands the franchise into new Netflix territories including the U.K., Italy, Australia and New Zealand, and is co-exclusive, allowing <strong>AMC+</strong> to stream the original series for the first time in 2027. AMC reported quarterly revenue of $547 million, down 9%, but raised guidance on the back of the deal.',
            whyItMatters: 'A mid-size studio monetizing a completed franchise library at nine figures shows catalog IP still commands premium pricing even as new-content budgets tighten.',
            signalText: 'Netflix and AMC signed a five-year, $500 million streaming deal for The Walking Dead universe.',
            sourceName: 'The Hollywood Reporter',
            sourceUrl: 'https://www.hollywoodreporter.com/tv/tv-news/netflix-walking-dead-streaming-deal-amc-global-media-1236659933/',
            publishedDate: '2026-07-30'
          },
          {
            order: 9,
            tag: 'Music IP',
            section: 'entertainment',
            accentText: '$600M+',
            headline: 'Influence Media and BlackRock Acquire Anthem Entertainment Catalogs',
            emailSummary: '<strong>Influence Media Partners</strong> agreed to acquire <strong>Anthem Entertainment</strong>\'s catalogs for more than <strong>$600 million</strong>, with capital provided by funds and accounts managed by <strong>BlackRock</strong> affiliates. The assets span music publishing, film and television publishing, and master recordings — over <strong>24,000 released songs</strong> plus more than 60,000 unexploited works, including <strong>Britney Spears</strong>, Justin Timberlake, Timbaland and Rush, alongside publishing tied to the Spider-Man and Men in Black franchises. The deal is expected to close in Q4 2026.',
            whyItMatters: 'BlackRock funding a nine-figure catalog purchase treats music rights as scaled infrastructure assets rather than entertainment bets, holding up valuations for large catalogs.',
            signalText: 'Influence Media and BlackRock agreed to buy Anthem Entertainment\'s catalogs for over $600 million.',
            sourceName: 'Yahoo Finance',
            sourceUrl: 'https://finance.yahoo.com/media-advertising/articles/influence-media-partners-signs-agreement-170500757.html',
            publishedDate: '2026-07-29'
          },
          {
            order: 10,
            tag: 'Buyout',
            section: 'entertainment',
            accentText: '$55B',
            headline: 'EA Set to Close $55B Take-Private, Largest Buyout Ever',
            emailSummary: '<strong>Electronic Arts</strong> expects to close its <strong>$55 billion</strong> take-private on <strong>August 4</strong>, described as the largest leveraged buyout ever recorded. The buyers are Saudi Arabia\'s <strong>Public Investment Fund</strong>, <strong>Silver Lake</strong> and <strong>Affinity Partners</strong>, with all required regulatory approvals obtained as of July 30. CEO <strong>Andrew Wilson</strong> stays in place and the company remains headquartered in Redwood City. EA ends a 35-year run as a public company on 2025 revenue of $7.5 billion.',
            whyItMatters: 'Taking the owner of EA Sports FC and Madden private removes the largest sports-gaming rights holder from public-market disclosure and quarterly earnings pressure.',
            signalText: 'Electronic Arts will close a $55 billion take-private led by Saudi Arabia\'s Public Investment Fund.',
            sourceName: 'Yahoo Finance',
            sourceUrl: 'https://finance.yahoo.com/markets/stocks/articles/ea-set-close-55-billion-194300015.html',
            publishedDate: '2026-07-31'
          },
          {
            order: 11,
            tag: 'IP Licensing',
            section: 'entertainment',
            accentText: '3 Categories',
            headline: 'Barbie and Reebok Launch Angel Reese Doll and Sneaker',
            emailSummary: '<strong>Mattel</strong> introduced a <strong>Barbie Signature</strong> doll modeled on basketball player <strong>Angel Reese</strong>, wearing the <strong>Reebok Angel Reese 1</strong> shoe in a Barbie pink colorway that is also being sold to consumers in adult and kids\' sizes. The doll went on sale July 24 through Target, Walmart, Amazon and Mattel Shop; the shoe arrives <strong>August 3</strong> via Reebok.com, Dick\'s Sporting Goods and Foot Locker. Both launched at <strong>TOGETHXR House</strong> in Chicago, where Reese is a co-owner, alongside a limited-edition apparel line.',
            whyItMatters: 'Mattel is exploiting one athlete\'s likeness across three product categories at once — doll, footwear and apparel — running an active sports career as a licensable IP franchise rather than an endorsement slot.',
            signalText: 'Mattel released a Barbie Signature doll of Angel Reese with a matching Reebok shoe.',
            sourceName: 'Indian Retailer',
            sourceUrl: 'https://indianretailer.com/brandlicense/archives/news/barbie-x-reebok-celebrate-angel-reese-new-doll-and-basketball-shoes.n5711',
            publishedDate: '2026-07-27'
          }
        ]
      },

      // WEEK 4
      {
        slug: 'week-4-july-2026',
        issueNumber: '4',
        weekLabel: 'Week 4',
        dateRange: 'July 18–26, 2026',
        publishedDate: '2026-07-26',
        issueTitle: 'Week 4 — July 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week four of July: Mexico moved on multiple fronts — a bigger World Cup hosting bid, a rebuilt women\'s league, and Isaac del Toro\'s historic Tour de France podium — while Bad Bunny closed a record-breaking world tour, Rogers took full control of MLSE, and Comic-Con doubled as a coordinated IP-marketing platform for Marvel, HBO Max, and Amazon.',
        shareText: 'Mexico eyes 36% of the 2031 Women\'s World Cup, Liga Femenil BBVA rebrands, Isaac del Toro becomes the first Mexican Tour de France podium finisher, Bad Bunny\'s tour closes at $467.5M, and Rogers takes full ownership of MLSE — Week 4 July · Fillip.',
        coreSignal: 'This week\'s stories share a common thread: legacy institutions restructuring themselves to capture value they were previously leaving on the table. Mexico\'s football federation is fighting for a bigger hosting share, its women\'s league rebuilt its own competition format and brand, tennis is renegotiating who actually gets paid from tournament revenue, and Rogers consolidated full ownership of MLSE before selling passive stakes back out. Even Hollywood\'s IP is being restructured — Paramount treating theatrical release as a formality, not a revenue channel, for its next franchise bet.',
        latamAngle: 'Mexico\'s sports and culture ecosystem had a genuinely strong week. The country\'s federation is pushing to nearly triple its match share for the 2031 Women\'s World Cup bid, its top women\'s league just executed a two-year competition overhaul under a new BBVA-backed identity, and Isaac del Toro became the first Mexican cyclist ever to podium at the Tour de France. Layered on top, Bad Bunny\'s record-breaking DTMF World Tour posted its single best-selling engagement anywhere in the world at Mexico City\'s Estadio GNP Seguros — 518,000 tickets across eight shows. Together, these signal Mexico functioning simultaneously as a growing sports-hosting power, a competitive-sport talent producer, and the biggest live-entertainment market in Latin America.',
        ecosystemNews: [
          {
            headline: 'Mattel and WWE Launch AAA Lucha Libre Action Figures',
            body: 'Mattel and WWE announced a global partnership to produce action figures of Lucha Libre AAA Worldwide stars, unveiled at San Diego Comic-Con. The inaugural lineup includes Psycho Clown, El Hijo del Vikingo, La Parka, and Mr. Iguana, each figure capturing AAA\'s signature máscaras and ring personas. Mattel Creations also released a made-to-order Mr. Iguana figure exclusively at Comic-Con as the collection\'s first product, ahead of a full Summer 2027 launch.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/mattel-lanzara-figuras-de-accion-de-lucha-libre-aaa-junto-a-las-estrellas-de-wwe-2026072317440897172'
          },
          {
            headline: 'Dominik Mysterio Betrays El Grande Americano, Joins El Ojo',
            body: 'At AAA\'s Verano de Escándalo 2026, reigning Megacampeón Dominik Mysterio turned on tag-team partner El Grande Americano mid-match against Los Perros del Mal, handing Americano the loss and confirming his allegiance to El Ojo. The faction, led by Dorian Roldán and Omos, now adds Mysterio as its headline act following Hijo del Vikingo\'s injury, setting up a direct confrontation with Americano\'s title defense at TripleMania 34.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/dominik-mysterio-traiciona-a-el-grande-americano-y-se-une-a-el-ojo-rumbo-a-triplemania-34-2026072605302196604'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Hosting Bid',
            section: 'sports',
            accentText: '36%',
            headline: 'Mexico Seeks 36% of 2031 Women\'s World Cup Matches',
            emailSummary: 'Mexico is seeking to host between <strong>28 and 30 matches</strong> — roughly <strong>36%</strong> of the schedule — as part of a joint bid with the <strong>United States, Costa Rica, and Jamaica</strong> for the <strong>2031 FIFA Women\'s World Cup</strong>. That would more than double Mexico\'s 12.5% match share (13 of 104 games) from the 2026 men\'s tournament. The bid documentation process is already underway, with venues expected to reuse 2026 infrastructure including <strong>Estadio Banorte, Estadio BBVA,</strong> and <strong>Estadio Akron</strong>.',
            whyItMatters: 'Hosting more than a third of a Women\'s World Cup would give Mexico outsized commercial exposure — sponsorship, ticketing, tourism — relative to its 2026 men\'s tournament share.',
            signalText: 'Mexico is seeking to host 28 to 30 matches of the 2031 Women\'s World Cup.',
            sourceName: 'Fox Sports MX',
            sourceUrl: 'https://www.foxsports.com.mx/2026/07/24/mundialazo-femenil-en-casa-mexico-busca-albergar-hasta-30-partidos-de-la-edicion-de-2031/',
            publishedDate: '2026-07-24'
          },
          {
            order: 2,
            tag: 'League Structure',
            section: 'sports',
            accentText: '14 Games',
            headline: 'Liga Femenil BBVA Overhauls Format, Drops \'MX\' From Name',
            emailSummary: 'Liga MX Femenil rebranded as <strong>Liga Femenil BBVA</strong>, dropping "MX" from its name, and unveiled a new logo and neon color identity for the <strong>Apertura 2026</strong> season starting July 31. The competition format changes to <strong>three blocks of six clubs</strong> playing a <strong>14-game group stage</strong> before a cross-bracket knockout round. President <strong>Mariana Gutiérrez</strong> said the two-year overhaul aims to reduce player workload and better align the calendar with national-team competitions.',
            whyItMatters: 'Cutting scheduled games and rebranding around a standalone identity signals Mexico\'s women\'s league prioritizing sponsor and broadcast appeal over simply mirroring the men\'s format.',
            signalText: 'Liga MX Femenil rebranded as Liga Femenil BBVA and cut its group-stage games to 14.',
            sourceName: 'Marca MX',
            sourceUrl: 'https://www.marca.com/mx/futbol/liga-mx-femenil/2026/07/24/futbol-femenino-mexico-transforma-renace-liga-femenil-bbva-complejo-sistema-competencia.html',
            publishedDate: '2026-07-23'
          },
          {
            order: 3,
            tag: 'Media Rights',
            section: 'sports',
            accentText: 'Through 2030',
            headline: 'CazéTV Acquires WTA Brazil Broadcast Rights Through 2030',
            emailSummary: '<strong>CazéTV</strong>, the YouTube-based streaming platform owned by Casimiro Miguel, signed a deal to broadcast <strong>WTA 250, 500, and 1000</strong> tournaments in Brazil through <strong>2030</strong>. Financial terms were not disclosed. The agreement adds women\'s tennis to a sports portfolio that already includes recently-signed UEFA and LaLiga rights, and follows CazéTV\'s record 23 million simultaneous devices during its 2026 World Cup coverage.',
            whyItMatters: 'A YouTube-native broadcaster locking up multi-year women\'s tennis rights shows streaming platforms outbidding traditional broadcasters for recurring international sports content in Brazil.',
            signalText: 'CazéTV acquired broadcast rights to WTA tournaments in Brazil through 2030.',
            sourceName: '2Playbook',
            sourceUrl: 'https://www.2playbook.com/media/cazetv-suma-sigue-se-hace-con-derechos-wta-en-brasil-hasta-2030_23070_102.html',
            publishedDate: '2026-07-23'
          },
          {
            order: 4,
            tag: 'Player Compensation',
            section: 'sports',
            accentText: '16% → 22%',
            headline: 'French Open Offers Players Grand Slam Revenue Share',
            emailSummary: 'The <strong>French Open</strong> has offered to become the first Grand Slam to tie player prize money to a fixed share of tournament revenue, proposing <strong>16%</strong> immediately and rising to <strong>22% by 2030</strong>. Roland Garros made the offer to players\' representative <strong>Larry Scott</strong> during talks at Wimbledon. The agreement has not yet been finalized, and the All England Club has separately signaled openness to funding player pensions and healthcare.',
            whyItMatters: 'A Grand Slam tying prize money to a fixed revenue percentage would set a financial precedent the other three majors, including the US Open, would face pressure to match.',
            signalText: 'The French Open offered players a revenue share starting at 16%, rising to 22% by 2030.',
            sourceName: 'The Irish Times',
            sourceUrl: 'https://www.irishtimes.com/sport/tennis/2026/07/21/french-open-becomes-first-grand-slam-to-offer-players-share-of-tournament-revenue/',
            publishedDate: '2026-07-21'
          },
          {
            order: 5,
            tag: 'Ownership · M&A',
            section: 'sports',
            accentText: '$4.35B',
            headline: 'Rogers Completes $4.35B MLSE Buyout, Plans Minority Sale',
            emailSummary: '<strong>Rogers Communications</strong> completed its purchase of the remaining <strong>25% stake</strong> in <strong>Maple Leaf Sports & Entertainment (MLSE)</strong> from Larry Tanenbaum\'s Kilmer Sports for <strong>$4.35 billion</strong>, taking full ownership of the Maple Leafs, Raptors, Toronto FC, and Argonauts. The deal drove a <strong>$726 million</strong> net loss in Rogers\' Q2 results due to a related non-cash charge. Rogers now plans to sell non-voting minority stakes in its combined sports and media portfolio, valued at over <strong>$25 billion</strong>, by the first half of 2027.',
            whyItMatters: 'Consolidating full ownership before selling passive minority stakes lets Rogers monetize MLSE\'s value without ceding operating control of Toronto\'s four major pro franchises.',
            signalText: 'Rogers Communications paid $4.35 billion for full ownership of Maple Leaf Sports & Entertainment.',
            sourceName: 'Yahoo Finance',
            sourceUrl: 'https://ca.finance.yahoo.com/news/rogers-communications-reports-q2-loss-113755551.html',
            publishedDate: '2026-07-22'
          },
          {
            order: 6,
            tag: 'Sports Milestone',
            section: 'sports',
            accentText: '3rd Place',
            headline: 'Isaac Del Toro Becomes First Mexican Tour De France Podium',
            emailSummary: '<strong>Isaac del Toro</strong> finished <strong>3rd overall</strong> in the general classification of the <strong>2026 Tour de France</strong>, becoming the first Mexican cyclist to reach the podium in the race\'s history. He also won the tournament\'s <strong>best young rider</strong> classification. Tadej Pogačar won his fifth Tour title on the final stage into Paris, with Remco Evenepoel finishing second, 6:26 behind.',
            whyItMatters: 'A first-ever Mexican Tour de France podium is a milestone moment for the country\'s sports ecosystem and its growing international cycling visibility, independent of any deal or capital signal.',
            signalText: 'Isaac del Toro became the first Mexican cyclist to podium at the Tour de France.',
            sourceName: 'ESPN México',
            sourceUrl: 'https://www.espn.com.mx/ciclismo/nota/_/id/17048552/tour-de-francia-isaac-del-toro-hace-historia-y-confirma-podio',
            publishedDate: '2026-07-26'
          },
          {
            order: 7,
            tag: 'Live Events · Touring',
            section: 'entertainment',
            accentText: '$467.5M',
            headline: 'Bad Bunny\'s DTMF Tour Grosses $467.5 Million Worldwide',
            emailSummary: '<strong>Bad Bunny</strong>\'s Debí Tirar Más Fotos World Tour closed after <strong>55 shows</strong> across five continents, grossing <strong>$467.5 million</strong> and selling <strong>3.1 million tickets</strong> — the highest-grossing and best-selling tour by a male Latin artist in history, surpassing Luis Miguel\'s 2023-24 tour. The tour\'s biggest stop was eight shows at Mexico City\'s Estadio GNP Seguros, which brought in <strong>$88 million</strong> from <strong>518,000 tickets</strong> — the best-selling concert engagement ever recorded in Mexico. Bad Bunny played no U.S. dates.',
            whyItMatters: 'A Latin artist setting touring records while deliberately skipping the U.S. market shows Latin America and Europe alone can now sustain a record-breaking global stadium tour.',
            signalText: 'Bad Bunny\'s DTMF World Tour grossed $467.5 million across 55 shows on five continents.',
            sourceName: 'Billboard',
            sourceUrl: 'https://www.billboard.com/lists/bad-bunny-record-breaking-world-tour/',
            publishedDate: '2026-07-24'
          },
          {
            order: 8,
            tag: 'Box Office',
            section: 'entertainment',
            accentText: '$639.6M',
            headline: '\'The Odyssey\' Tops $639 Million At Global Box Office',
            emailSummary: '<strong>Christopher Nolan</strong>\'s <strong>"The Odyssey"</strong> has grossed <strong>$639.6 million</strong> globally after two weekends — <strong>$353.2 million</strong> international and <strong>$284.4 million</strong> domestic — on a <strong>$250 million</strong> budget from Universal. <strong>IMAX</strong> alone contributed <strong>$140 million</strong> in ticket sales, the second-fastest title in IMAX history to cross $100 million, behind only "Avengers: Endgame."',
            whyItMatters: 'A three-hour R-rated mythological epic outperforming most franchise tentpoles shows premium-format demand, not IP recognition, is now the stronger box office driver.',
            signalText: '\'The Odyssey\' grossed $639.6 million globally in its first two weekends of release.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/box-office/the-odyssey-global-box-office-600-million-imax-1236821428/',
            publishedDate: '2026-07-26'
          },
          {
            order: 9,
            tag: 'Live Events · IP',
            section: 'entertainment',
            accentText: '135,000+ Attendees',
            headline: 'Comic-Con 2026 Showcases Major Franchise IP Moves',
            emailSummary: 'San Diego Comic-Con drew over <strong>135,000-160,000</strong> badge holders across four days, with major studios using the event to unveil franchise moves: Marvel cast <strong>Ryan Gosling</strong> as Ghost Rider and confirmed <strong>Ryan Coogler</strong> will direct Black Panther 3 with <strong>David Jonsson</strong> as the new Black Panther; HBO Max revealed casting for its "Lanterns" series; Amazon MGM unveiled "Spaceballs: The New One"; and Prime Video previewed Season 3 of "The Lord of the Rings: The Rings of Power," premiering November 11.',
            whyItMatters: 'Studios concentrating casting reveals and franchise-continuation news at a single fan convention shows Comic-Con functioning as a coordinated IP-marketing platform, not just a fan event.',
            signalText: 'Marvel, HBO Max, Amazon MGM, and Prime Video all made major franchise announcements at Comic-Con 2026.',
            sourceName: 'Forbes',
            sourceUrl: 'https://www.forbes.com/sites/laurasirikul/2026/07/26/comic-con-2026-all-the-biggest-announcements-and-major-reveals/',
            publishedDate: '2026-07-26'
          },
          {
            order: 10,
            tag: 'Streaming · IP Revival',
            section: 'entertainment',
            accentText: 'July 25',
            headline: '\'Avatar Aang\' Ends 12-Year Franchise Gap On Paramount+',
            emailSummary: '<strong>"Avatar Aang: The Last Airbender,"</strong> the first release from <strong>Avatar Studios</strong>, ends a 12-year gap since "The Legend of Korra" concluded in 2014. Paramount is releasing the animated feature through a <strong>limited, awards-qualifying theatrical run</strong> in New York and Los Angeles only, before it streams on <strong>Paramount+</strong> starting <strong>July 25</strong>. The strategy prioritizes streaming distribution over a wide theatrical release for the franchise\'s continuation.',
            whyItMatters: 'Routing a flagship franchise revival through a token theatrical run straight to streaming shows Paramount treating theatrical release as an awards formality rather than a real revenue channel.',
            signalText: '"Avatar Aang: The Last Airbender" streams on Paramount+ starting July 25 after a limited theatrical run.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/tv/reviews/avatar-aang-the-last-airbender-review-sequel-film-1236818576/',
            publishedDate: '2026-07-25'
          }
        ]
      },

      // WEEK 3
      {
        slug: 'week-3-july-2026',
        issueNumber: '3',
        weekLabel: 'Week 3',
        dateRange: 'July 13–17, 2026',
        publishedDate: '2026-07-17',
        issueTitle: 'Week 3 — July 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week three of July: Pophouse bought half of Iron Maiden\'s catalog and NIL rights, the Writers Guild sued to block Paramount\'s $111B Warner acquisition, Bundesliga took a pay cut to move onto free U.S. streaming via Fandango, and Mexico\'s FMF got fined over Fan ID data while also scrapping promotion and relegation and leaving Liga MX Femenil without a calendar.',
        shareText: 'Pophouse buys half of Iron Maiden\'s IP, the WGA sues to block Paramount\'s $111B Warner deal, Bundesliga takes a pay cut for free U.S. streaming, and Mexico\'s FMF gets fined over Fan ID while scrapping promotion/relegation — Week 3 July · Fillip.',
        coreSignal: 'This week showed two versions of the same trade: content owners giving up certainty for reach, and league bodies giving up accountability for control. Pophouse repeated its Kiss playbook on Iron Maiden, Bundesliga took a real fee cut to move onto free ad-supported streaming, and Fanatics Fest proved a merchandise convention has become a real sports IP platform in its own right. Meanwhile Mexico\'s football federation and top leagues spent the week trading fan protections and competitive integrity for tighter administrative control, on both the men\'s and women\'s side.',
        latamAngle: 'Mexican football governance faced scrutiny from three directions this week. The FMF was fined 42.8 million pesos for mishandling Fan ID biometric data, its Executive Committee permanently eliminated promotion and relegation for 2026-27 over a CAS recommendation to restore it, and Liga MX Femenil enters its tenth season still without an announced Apertura calendar. None of these are isolated incidents — together they show Mexico\'s top football authorities consistently trading fan protections and competitive integrity for administrative and financial control, in both the men\'s and women\'s game.',
        ecosystemNews: [
          {
            headline: 'WWE/AAA Worlds Collide Set for Chicago in September',
            body: 'WWE and AAA announced the third Worlds Collide event for September 26 at Allstate Arena in Chicago — deliberately scheduled the same night as AEW All Out, just 20 minutes away at NOW Arena. It continues a pattern of head-to-head date clashes between WWE and AEW, following Forbidden Door and last year\'s Wrestlepalooza. Presale tickets open July 23, with general sale the following day.',
            sourceName: 'Wrestling Inc.',
            sourceUrl: 'https://www.wrestlinginc.com/2216698/wwe-aaa-worlds-collide-set-aew-all-out-chicagoland/'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Media Rights',
            section: 'sports',
            accentText: '$100M',
            headline: 'Bundesliga Signs $100M, Five-Year US TV Deal',
            emailSummary: '<strong>Versant</strong> acquired U.S. broadcast rights to the <strong>Bundesliga</strong> for <strong>$100 million over five years</strong> ($20M annually), moving games from ESPN+ to <strong>USA Network</strong> and <strong>Fandango</strong>. The new deal is roughly a <strong>33% cut</strong> from Bundesliga\'s prior $30 million-per-year ESPN arrangement. USA Network will air at least 30 matches, with the remaining 250-plus games streaming free on Fandango.',
            whyItMatters: 'Bundesliga taking a pay cut to trade paywalled reach for a free, ad-supported streaming platform shows overseas soccer leagues sacrificing rights fees for U.S. audience size.',
            signalText: 'Versant acquired U.S. Bundesliga broadcast rights for $100 million over five years.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/articles/usa-network-fandango-secure-bundesliga-230005005.html',
            publishedDate: '2026-07-14'
          },
          {
            order: 2,
            tag: 'Governance · Fines',
            section: 'sports',
            accentText: '$42.8M MXN',
            headline: 'SABG Fines FMF Over Fan ID Data Violations',
            emailSummary: 'Mexico\'s anti-corruption authority <strong>SABG</strong> fined the <strong>Mexican Football Federation (FMF)</strong> <strong>42,849,095 pesos</strong> for mishandling biometric data collected through its stadium <strong>Fan ID</strong> system. Regulators found the FMF failed to disclose that fan photos qualified as sensitive personal data and collected consent through a website checkbox rather than a verifiable signature. The FMF can still appeal the ruling.',
            whyItMatters: 'A formal fine over how a federation handles fan biometric data sets a compliance precedent just as more leagues adopt facial-recognition stadium entry systems.',
            signalText: 'Mexico\'s SABG fined the FMF 42.8 million pesos over Fan ID data violations.',
            sourceName: 'El Economista',
            sourceUrl: 'https://www.eleconomista.com.mx/deportes/multan-fmf-incumplir-reglas-datos-biometricos-fan-id-20260712-822828.html',
            publishedDate: '2026-07-12'
          },
          {
            order: 3,
            tag: 'League Structure',
            section: 'sports',
            headline: 'Liga MX Permanently Eliminates Promotion and Relegation',
            emailSummary: 'The <strong>FMF\'s Executive Committee</strong> formally eliminated promotion and relegation between <strong>Liga MX</strong> and <strong>Liga de Expansión MX</strong> for the 2026-27 season, writing the change into <strong>Article 35</strong> of the new competition rules. The mechanism was first suspended in 2020 citing pandemic-era financial stability, and the decision overrides a <strong>Court of Arbitration for Sport (CAS)</strong> recommendation to restore sporting merit.',
            whyItMatters: 'Locking out relegation protects Liga MX franchise values from the financial risk of the drop, at the direct expense of competitive integrity.',
            signalText: 'Liga MX\'s Executive Committee permanently eliminated promotion and relegation for 2026-27.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/oficial-no-habra-ascenso-y-descenso-en-la-liga-mx-2026071601450237007',
            publishedDate: '2026-07-15'
          },
          {
            order: 4,
            tag: 'Governance · Scheduling',
            section: 'sports',
            accentText: '18 Clubs',
            headline: 'Liga MX Femenil Still Lacks Apertura 2026 Calendar',
            emailSummary: 'Nearly a decade into <strong>Liga MX Femenil</strong>\'s existence, the league still has no announced start date for its <strong>Apertura 2026</strong> tournament. A new format splits <strong>18 clubs</strong> into two groups playing eight regular-season games each, with the top four from each group advancing to playoffs. Clubs criticized the structure after learning their initial opponents, and the league says a full calendar will be released July 23.',
            whyItMatters: 'Repeated late-notice scheduling changes for the women\'s league, blamed partly on prioritizing men\'s-league logistics, signal it still isn\'t run with the same operational discipline as Liga MX.',
            signalText: 'Liga MX Femenil has no announced Apertura 2026 start date as of mid-July.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/y-el-calendario-de-la-femenil-para-cuando-la-tardanza-desata-confusion-y-criticas-2026071700332432185',
            publishedDate: '2026-07-17'
          },
          {
            order: 5,
            tag: 'Sports IP · Live Events',
            section: 'sports',
            headline: 'Fanatics Fest Cements Itself as a Sports IP Platform',
            emailSummary: '<strong>Fanatics Fest</strong>, the company\'s branded fan convention in New York, hosted <strong>LeBron James</strong> for a live taping of his "Mind the Game" podcast with <strong>Tyrese Haliburton</strong>. The event has become a recurring venue for major NBA news — <strong>Kevin Durant</strong>\'s trade to the Rockets surfaced there the previous year — turning what began as a retail and autograph convention into a de facto media and IP platform for the league.',
            whyItMatters: 'Fanatics Fest evolving from a merchandise convention into the venue where league-defining news breaks shows Fanatics building real media and IP leverage well beyond its trading-card and autograph business.',
            signalText: 'Fanatics Fest has become a recurring venue where major NBA news breaks.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/nba/article/lebron-james-mum-on-free-agency-destination-after-tyrese-haliburton-inquires-about-decision-at-fanatics-fest-174410964.html',
            publishedDate: '2026-07-16'
          },
          {
            order: 6,
            tag: 'Live Events',
            section: 'sports',
            accentText: '35K Runners',
            headline: 'CDMX Half Marathon Draws 35,000 Runners',
            emailSummary: 'The 19th edition of the <strong>Mexico City Half Marathon</strong> drew <strong>35,000 runners</strong> along a 21-kilometer route from Alameda Central to the Ángel de la Independencia. Kenyan runners <strong>Simon Maywa</strong> and <strong>Gladys Cherop Longari</strong> won the men\'s and women\'s overall titles, while paralympic rower <strong>Michel Muñoz</strong> completed the course on a hand-propelled skateboard.',
            whyItMatters: 'A 35,000-runner field makes CDMX\'s half marathon one of Latin America\'s largest recurring mass-participation sporting events, though this year\'s race carries no reported sponsorship or economic-impact figures.',
            signalText: 'The Mexico City Half Marathon drew 35,000 runners across its 19th edition.',
            sourceName: 'IMER',
            sourceUrl: 'https://noticias.imer.mx/blog/entre-velocidad-e-inclusion-35-mil-corredores-recorren-el-xix-medio-maraton-de-la-cdmx/',
            publishedDate: '2026-07-12'
          },
          {
            order: 7,
            tag: 'Music IP · Catalog',
            section: 'entertainment',
            accentText: '50% Stake',
            headline: 'Pophouse Acquires 50% Stake in Iron Maiden IP',
            emailSummary: '<strong>Pophouse Entertainment</strong>, the investment firm co-founded by ABBA\'s <strong>Björn Ulvaeus</strong>, acquired a <strong>50% stake</strong> in <strong>Iron Maiden</strong>\'s publishing and master recording rights, plus the band\'s name, image, and likeness rights, including mascot <strong>Eddie</strong>. Terms were undisclosed, though Pophouse paid upward of <strong>$300 million</strong> for a comparable deal with <strong>Kiss</strong>. Plans include a cinematic project filming the band\'s "Run for Your Lives" tour and a digital universe built around Eddie.',
            whyItMatters: 'Pophouse extending its buy-the-brand-not-just-the-catalog model to a second legacy metal act confirms a repeatable playbook for monetizing heritage rock IP beyond streaming royalties.',
            signalText: 'Pophouse acquired a 50% stake in Iron Maiden\'s music and NIL rights.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/music/news/iron-maiden-sells-music-catalog-to-pophouse-1236810440/',
            publishedDate: '2026-07-14'
          },
          {
            order: 8,
            tag: 'Streaming · Sports Doc',
            section: 'entertainment',
            accentText: '240+ Countries',
            headline: 'Prime Video Sets August Release for Djokovic Documentary',
            emailSummary: '<strong>Prime Video</strong> released the trailer for <strong>"Novak Djokovic: The Wolf in Winter,"</strong> premiering <strong>August 20</strong> in more than <strong>240 countries and territories</strong>. Directed by <strong>Jason Hehir</strong> (The Last Dance), the documentary features Djokovic\'s wife <strong>Jelena</strong> alongside <strong>Rafael Nadal, Andre Agassi, Pete Sampras,</strong> and <strong>Boris Becker</strong>, and is produced by <strong>Words + Pictures</strong> and <strong>Little Room Films</strong>.',
            whyItMatters: 'Prime Video backing a career-capstone documentary on tennis\' most decorated player extends the platform\'s push into athlete-driven sports content beyond live rights.',
            signalText: 'Prime Video will release its Djokovic documentary on August 20 in 240-plus countries.',
            sourceName: 'Vogue Adria',
            sourceUrl: 'https://vogueadria.com/novak-djokovic-documentary-trailer/',
            publishedDate: '2026-07-14'
          },
          {
            order: 9,
            tag: 'M&A · Legal',
            section: 'entertainment',
            accentText: '$111B',
            headline: 'Writers Guild Sues to Block Paramount-Warner Merger',
            emailSummary: 'The <strong>Writers Guild of America</strong> (West and East) filed a federal lawsuit seeking to block <strong>Paramount</strong>\'s roughly <strong>$111 billion</strong> (including debt) acquisition of <strong>Warner Bros. Discovery</strong>, arguing the combined company would suppress writer wages and cut jobs. The suit follows a separate challenge filed a day earlier by <strong>12 U.S. states</strong> led by California AG <strong>Rob Bonta</strong>. Paramount said the merger would "expand opportunities for writers, not shrink them."',
            whyItMatters: 'A second legal challenge in as many days raises real odds of delaying Paramount\'s target close, with the states\' coalition already seeking an emergency injunction ahead of a possible July 22 closing.',
            signalText: 'The WGA sued to block Paramount\'s roughly $111 billion acquisition of Warner Bros. Discovery.',
            sourceName: 'AP News',
            sourceUrl: 'https://apnews.com/article/paramount-warner-writers-guild-lawsuit-94059525fdc9812acd73ce5092de3fbf',
            publishedDate: '2026-07-14'
          },
          {
            order: 10,
            tag: 'Box Office',
            section: 'entertainment',
            accentText: '$17.6M',
            headline: '\'The Odyssey\' Posts Best 2026 Preview Numbers',
            emailSummary: '<strong>Christopher Nolan</strong>\'s <strong>"The Odyssey"</strong> earned <strong>$17.6 million</strong> in Thursday preview screenings, the best preview number of 2026 so far, edging out <strong>Toy Story 5</strong>\'s <strong>$17.5 million</strong>. Fandango reported the <strong>Universal</strong> film as its top 2026 preseller, with advance ticket sales estimated at <strong>$30-40 million</strong>. Analysts project a <strong>$100 million-plus</strong> domestic opening weekend.',
            whyItMatters: 'A three-hour mythological epic outpacing family-franchise previews shows premium-format ticket demand, not just IP recognition, is now driving opening-weekend box office.',
            signalText: '\'The Odyssey\' earned $17.6 million in Thursday previews, the best of 2026 so far.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/07/box-office-the-odyssey-1236993792/',
            publishedDate: '2026-07-17'
          }
        ]
      },

      // WEEK 2
      {
        slug: 'week-2-july-2026',
        issueNumber: '2',
        weekLabel: 'Week 2',
        dateRange: 'July 6–13, 2026',
        publishedDate: '2026-07-13',
        issueTitle: 'Week 2 — July 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week two of July: Mexico set a new U.S. soccer ratings record, FIFA\'s Infantino floated a 64-team World Cup, Netflix and Disney lined up to bid on the next rights cycle, a Khosla-led group bought the Seahawks for a record $9.6 billion, and Meta yanked an AI image feature within days of talent-agency pushback.',
        shareText: 'Mexico sets a US soccer ratings record, Infantino floats a 64-team World Cup, Khosla buys the Seahawks for $9.6B, Putellas joins London City, TV Azteca files for bankruptcy, and Meta pulls its AI image feature — Week 2 July · Fillip.',
        coreSignal: 'This week showed capital chasing the World Cup\'s gravitational pull from every direction. Streamers are now bidding directly for rights that used to belong to broadcasters, and a record U.S. audience just handed FIFA the leverage to price that bidding war even higher. Meanwhile the NFL set a new ownership record entirely independent of the World Cup, proving franchise valuations keep climbing on their own timeline, and Meta\'s fast reversal on an AI likeness feature showed that talent representation — not regulation — is currently the fastest check on AI\'s reach into entertainment IP.',
        latamAngle: 'Mexico was this week\'s biggest sports storyline. Its Round-of-16 win over England at Estadio Azteca drew 44.8 million U.S. viewers — 23.2 million on Telemundo and 21.7 million on Fox — the most-watched soccer telecast in American history, a number FIFA will use to justify a bigger 2030 media-rights package. That same World Cup cycle carries into 2030, when Gianni Infantino\'s suggestion of a 64-team format would let that tournament\'s South American co-hosts — Uruguay, Argentina, and Paraguay — each stage a full four-team group instead of a single ceremonial match, rather than serve as a symbolic nod to the continent hosting the centenary opener.',
        ecosystemNews: [
          {
            headline: 'Dominik Mysterio and El Grande Americano Unite Before Their Own Match',
            body: 'AAA teased a new chapter in the Dominik Mysterio–El Grande Americano rivalry: despite their pending singles match at Triplemanía, the former Los Gringos Locos 2.0 partners will stand together at Verano de Escándalo (late July) against the newly reformed Los Perros del Mal, led by Daga. Dominik has offered to face whichever member of the stable Daga selects, framing it as "his business is my business" until their own match happens.',
            sourceName: 'Récord',
            sourceUrl: 'https://www.record.com.mx/historia/los-mejores-enemigos-dominik-mysterio-y-el-grande-americano-enfrentaran-a-los-perros-del-mal-en-verano-de-escandalo-2026071204152154251'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Ownership · Valuation',
            section: 'sports',
            accentText: '$9.6B',
            headline: 'Vinod Khosla-Led Group Buys Seahawks in $9.6B Sale',
            emailSummary: 'A group led by <strong>Vinod Khosla</strong>, a limited partner in the <strong>San Francisco 49ers</strong>, agreed to buy the <strong>Seattle Seahawks</strong> for <strong>$9.612 billion</strong> — a record price for an NFL franchise. Khosla must relinquish his 49ers stake as part of the deal, and his family will become the Seahawks\' controlling owner pending a league vote in late August. The team has been owned by the estate of Microsoft co-founder <strong>Paul Allen</strong> since his 2018 death.',
            whyItMatters: 'The sale sets a new NFL valuation ceiling and confirms tech wealth is now bidding directly against legacy ownership groups for control of major franchises.',
            signalText: 'A Khosla-led group agreed to buy the Seattle Seahawks for $9.612 billion.',
            sourceName: 'ESPN',
            sourceUrl: 'https://www.espn.com/nfl/story/_/id/49337716/khosla-led-group-agrees-buy-seahawks-sources-say-96-billion',
            publishedDate: '2026-07-11'
          },
          {
            order: 2,
            tag: 'Media Rights · Streaming',
            section: 'sports',
            accentText: '$2B',
            headline: 'Netflix, Disney, YouTube Eye 2030 World Cup US Rights',
            emailSummary: '<strong>Netflix</strong>, <strong>Disney</strong>, and Alphabet\'s <strong>YouTube</strong> are preparing to bid against Fox for U.S. broadcast rights to the <strong>2030 and 2034 World Cups</strong>, with executives budgeting <strong>$1.5–2 billion</strong> per tournament. <strong>Amazon</strong> and <strong>Apple</strong> could also enter the bidding. FIFA is expected to sell English- and Spanish-language U.S. rights as a single bundled package for the first time, a shift from prior cycles including 2026, where Fox paid <strong>$485 million</strong> and Telemundo paid <strong>$600 million</strong> separately.',
            whyItMatters: 'Bundling English and Spanish rights into one package is designed to inflate the final price, and pulling in streaming-native bidders like Netflix and YouTube signals FIFA no longer sees linear broadcasters as its primary buyers.',
            signalText: 'Netflix, Disney, and YouTube are preparing to bid for U.S. World Cup rights.',
            sourceName: 'CNBC',
            sourceUrl: 'https://www.cnbc.com/2026/07/07/fifa-world-cup-media-rights-netflix-disney-youtube.html',
            publishedDate: '2026-07-07'
          },
          {
            order: 3,
            tag: 'Media Rights · Ratings',
            section: 'sports',
            accentText: '44.8M',
            headline: 'Mexico vs. England Sets US Soccer Ratings Record',
            emailSummary: 'The Round-of-16 match between <strong>Mexico</strong> and <strong>England</strong> at Estadio Azteca drew a combined <strong>44.8 million</strong> U.S. viewers — <strong>23.2 million</strong> on Telemundo and <strong>21.7 million</strong> on Fox — surpassing the <strong>U.S.-Belgium</strong> game\'s roughly <strong>42 million</strong> to become the most-watched soccer telecast in U.S. history. Fox\'s audience peaked at <strong>25.7 million</strong> in the match\'s final minutes, with England holding a lead down to 10 men.',
            whyItMatters: 'Back-to-back U.S. ratings records inside one World Cup are the clearest data point FIFA and its media suitors have for justifying a higher price on the next rights cycle.',
            signalText: 'Mexico vs. England drew 44.8 million U.S. viewers, a new soccer TV record.',
            sourceName: 'The Athletic',
            sourceUrl: 'https://www.nytimes.com/athletic/7432616/2026/07/08/england-mexico-world-cup-tv-ratings/',
            publishedDate: '2026-07-08'
          },
          {
            order: 4,
            tag: 'League Expansion',
            section: 'sports',
            accentText: '64 Teams',
            headline: 'Infantino Hints at 64-Team World Cup by 2030',
            emailSummary: 'FIFA president <strong>Gianni Infantino</strong> said expanding the World Cup from <strong>48 to 64 teams</strong> "will definitely be examined and discussed" by relevant committees after this tournament. He called the current 48-team format a "huge success," citing <strong>9 of 10</strong> African teams reaching the knockout stage. The 2030 centenary edition already opens with one match each in <strong>Uruguay, Argentina, and Paraguay</strong>, alongside primary hosts Morocco, Portugal, and Spain.',
            whyItMatters: 'A 64-team format would let each 2030 South American co-host stage a full four-team group instead of a single ceremonial match, meaningfully raising their commercial and hosting stakes.',
            signalText: 'Infantino said FIFA will examine expanding the World Cup to 64 teams.',
            sourceName: 'The Guardian',
            sourceUrl: 'https://www.theguardian.com/football/2026/jul/12/gianni-infantino-expansion-64-team-world-cup-2030-fifa',
            publishedDate: '2026-07-12'
          },
          {
            order: 5,
            tag: 'Investment · Women\'s Sports',
            section: 'sports',
            headline: 'London City Lionesses Sign Ballon d\'Or Winner Putellas',
            emailSummary: '<strong>London City Lionesses</strong>, owned by U.S. businesswoman <strong>Michele Kang</strong>, signed two-time Ballon d\'Or winner <strong>Alexia Putellas</strong> on a free transfer after she left <strong>Barcelona</strong> following 14 years and 38 trophies. The three-year deal, unveiled at a produced event in New York, is believed to make Putellas London City\'s highest-paid player. Kang also owns the <strong>Washington Spirit</strong> and <strong>OL Lyonnes</strong>.',
            whyItMatters: 'Kang landing one of women\'s football\'s biggest names for a club that was in England\'s second tier a year ago shows how far a single owner\'s capital can move a league\'s competitive balance.',
            signalText: 'Michele Kang\'s London City Lionesses signed Ballon d\'Or winner Alexia Putellas.',
            sourceName: 'BBC Sport',
            sourceUrl: 'https://www.bbc.com/sport/football/articles/cvg7wenkklyo',
            publishedDate: '2026-07-08'
          },
          {
            order: 6,
            tag: 'Streaming · Sports Doc',
            section: 'entertainment',
            accentText: '20 Years',
            headline: 'Netflix Sets August Launch Date for \'Mourinho\' Documentary',
            emailSummary: '<strong>Netflix</strong> released a teaser for <strong>\'Mourinho\'</strong>, a documentary on manager <strong>José Mourinho</strong>, confirming a global launch date of <strong>August 11</strong> — the same day Mourinho begins his second spell as <strong>Real Madrid</strong> coach. Filmed over two years, the series covers his run from Porto\'s Champions League win through two Premier Leagues at Chelsea, a Champions League at Inter Milan, and a title at Real Madrid, with interviews including <strong>Alex Ferguson, Didier Drogba,</strong> and <strong>Frank Lampard</strong>.',
            whyItMatters: 'Netflix continuing its Untold sports-doc strand with a manager rather than an athlete shows the streamer sees standalone commercial value in football\'s biggest personalities beyond player-driven stories.',
            signalText: 'Netflix set an August 11 global launch date for its Mourinho documentary.',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/07/mourinho-teaser-release-date-netflix-1236980599/',
            publishedDate: '2026-07-13'
          },
          {
            order: 7,
            tag: 'Live Events · Production',
            section: 'entertainment',
            accentText: '$100M',
            headline: 'Bieber Joins Madonna, Shakira, BTS for World Cup Halftime',
            emailSummary: '<strong>Justin Bieber</strong> joined <strong>Madonna, Shakira,</strong> and <strong>BTS</strong> as co-headliners of the first-ever <strong>FIFA World Cup Final Halftime Show</strong>, set for July 19 at New York New Jersey Stadium, with <strong>Burna Boy</strong> and conductor <strong>Gustavo Dudamel</strong> also performing. The 11-minute show, produced by <strong>Global Citizen, Live Nation,</strong> and <strong>Done + Dusted</strong> and curated by Coldplay\'s <strong>Chris Martin</strong>, supports the FIFA Global Citizen Education Fund, which has raised over <strong>$50 million</strong> toward a <strong>$100 million</strong> goal.',
            whyItMatters: 'Turning the World Cup final into a Super Bowl-style production with a dedicated fundraising vehicle shows FIFA building a recurring commercial and philanthropic platform around the halftime slot itself, not just the match.',
            signalText: 'FIFA\'s Final Halftime Show will feature Bieber, Madonna, Shakira, and BTS as co-headliners.',
            sourceName: 'FIFA.com',
            sourceUrl: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/justin-bieber-to-co-headline-final-halftime-show-with-madonna-shakira-bts',
            publishedDate: '2026-07-08'
          },
          {
            order: 8,
            tag: 'Box Office',
            section: 'entertainment',
            accentText: '$43M',
            headline: '\'Moana\' Live-Action Remake Bombs With $43M US Opening',
            emailSummary: 'Disney\'s live-action <strong>\'Moana\'</strong> opened to just <strong>$43 million</strong> domestically against a <strong>$250 million</strong> production budget, plus a weak <strong>$52 million</strong> international debut. It ranks among the weakest opening weekends for a Disney live-action remake, alongside 2025\'s <strong>\'Snow White\'</strong> ($42M), and analysts estimate the studio could lose roughly <strong>$100 million</strong> on the film\'s theatrical run.',
            whyItMatters: 'A tentpole this expensive underperforming just 20 months after the billion-dollar animated sequel shows Disney\'s live-action remake formula breaking down when there isn\'t enough time for nostalgia to rebuild.',
            signalText: 'Disney\'s live-action \'Moana\' opened to $43 million against a $250 million budget.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/box-office/moana-box-office-opening-weekend-weakest-disney-live-action-remake-1236808979/',
            publishedDate: '2026-07-12'
          },
          {
            order: 9,
            tag: 'Media · Restructuring',
            section: 'entertainment',
            accentText: '$580M',
            headline: 'Mexican Judge Declares TV Azteca in Concurso Mercantil',
            emailSummary: 'A Mexican federal judge, <strong>Tessy del Rocío Covarrubias</strong>, formally declared <strong>TV Azteca</strong> — Mexico\'s second-largest broadcaster — in <strong>concurso mercantil</strong>, opening a <strong>6-month conciliation period</strong> to negotiate with creditors. The broadcaster, owned by <strong>Ricardo Salinas Pliego</strong>, owes more than <strong>23 billion pesos</strong> to creditors domestically and faces a separate U.S. creditor claim exceeding <strong>$580 million</strong>. The company filed voluntarily in March 2026 and says it will continue normal operations under a court-appointed conciliator.',
            whyItMatters: 'Mexico\'s second-biggest broadcaster entering a formal pre-bankruptcy process — while still holding major sports and entertainment content rights — puts real financial risk on one of the country\'s largest media distribution channels.',
            signalText: 'A Mexican judge placed TV Azteca into a 6-month bankruptcy conciliation process.',
            sourceName: 'El País',
            sourceUrl: 'https://elpais.com/mexico/economia/2026-07-07/una-jueza-federal-declara-a-tv-azteca-en-concurso-mercantil.html',
            publishedDate: '2026-07-07'
          },
          {
            order: 10,
            tag: 'AI · IP Rights',
            section: 'entertainment',
            headline: 'Meta Pulls AI Feature After Talent Agency Backlash',
            emailSummary: '<strong>Meta</strong> discontinued its new <strong>Muse Image</strong> AI feature, which let users generate images by @-mentioning any public <strong>Instagram</strong> account, days after backlash over its opt-out (rather than opt-in) consent policy. Talent agency <strong>CAA</strong>, representing clients including <strong>Tom Hanks</strong> and <strong>Meryl Streep</strong>, pressured Meta directly, and <strong>SAG-AFTRA</strong> urged members to opt out before Meta reversed course.',
            whyItMatters: 'Talent representation successfully forcing a platform to reverse an AI likeness feature in days — not months — signals real leverage forming around consent standards for how AI models can use public figures\' images.',
            signalText: 'Meta discontinued its Muse Image AI feature after backlash from CAA and SAG-AFTRA.',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/biz/news/meta-suspends-ai-image-instagram-feature-backlash-1236806989/',
            publishedDate: '2026-07-10'
          }
        ]
      },

      // WEEK 1
      {
        slug: 'week-1-july-2026',
        issueNumber: '1',
        weekLabel: 'Week 1',
        dateRange: 'June 29 – July 5, 2026',
        publishedDate: '2026-07-05',
        issueTitle: 'Week 1 — July 2026',
        editionTag: 'Sports · Entertainment · IP · Capital',
        introLine: 'Week one of July: Sky buys ITV in a $2.1B deal to compete with YouTube, Atlético Madrid turns its stadium into a concert venue with Live Nation, an AI \'actor\' lands her first feature film, and capital keeps pricing sports leagues before they\'ve proven anything — a $50M pre-launch franchise sale for PJL, a $100M raise for lacrosse ahead of the Olympics, and Liga F\'s assembly formally ratifying Pau Gasol\'s €55M bet.',
        shareText: 'Sky buys ITV for $2.1B, Atlético Madrid signs a 10-year Live Nation stadium deal, an AI actor gets her first movie, PJL sells a $50M franchise pre-launch, and Liga F ratifies Gasol\'s €55M bet — Week 1 July · Fillip.',
        coreSignal: 'This week, capital priced ownership before proof and infrastructure before demand. PJL sold its first franchise for $50 million before playing a match; the Premier Lacrosse League raised $100 million nine months before lacrosse even returns to the Olympics; Liga F\'s assembly formally ratified Pau Gasol\'s €55 million bet on a still-young league. At the other end, the institutions that already have scale are trading pieces of it away: Sky bought ITV to compete with YouTube\'s viewing share, and Atlético Madrid turned its stadium into a concert hall because ticket revenue alone no longer justifies the real estate.',
        latamAngle: 'Latin America\'s 2026 kept compounding this week. In Brazil, Casimiro Miguel\'s CazéTV — fresh off setting a live-streaming record during the World Cup group stage — secured free, open rights to broadcast Euro 2028, extending its rights-acquisition streak into Europe\'s next major tournament. In Mexico, 23-year-old Isaac del Toro became the first Mexican rider to win a Tour de France stage in 37 years, a milestone he tied directly to that night\'s World Cup quarterfinal: "We have eleven footballers who have to advance tonight." The same week Mexico hosts the World Cup, its athletes and Brazil\'s media companies are the ones making the highlight reel.',
        ecosystemNews: [
          {
            headline: 'Tsubasa Ramen Brings a Supercampeones Pop-Up to Mexico City',
            body: 'Japanese chef Yuta — who also runs Ebisumaru Ramen in Guadalajara and Querétaro — opened Tsubasa Ramen, an officially licensed Captain Tsubasa (Supercampeones) pop-up in Mexico City\'s Colonia Del Valle. The limited-run spot leans into a locker-room theme, serving gyozas, takoyaki, and soccer-jersey-shaped steamed buns alongside character-named drinks like Tsubasa Blue and Wakabayashi Red. Open Tuesday–Sunday, 1–7 PM, with no confirmed closing date.',
            sourceName: 'CDMX Secreta',
            sourceUrl: 'https://cdmxsecreta.com/restaurante-tematico-supercampeones-cdmx/'
          }
        ],
        stories: [
          {
            order: 1,
            tag: 'Investment · Women\'s Sports',
            section: 'sports',
            accentText: '€55M',
            headline: 'Liga F Ratifies Gasol\'s €55M Investment in Assembly Vote',
            emailSummary: '<strong>Liga F</strong>\'s General Assembly voted by a two-thirds supermajority to ratify a <strong>€55 million</strong> investment from <strong>Pau Gasol</strong>\'s <strong>Gasol16 Ventures</strong>, in partnership with <strong>Fortified Partners</strong> — the largest private investment ever made in a women\'s football league. Funds will be disbursed over the next <strong>four seasons</strong> to fund commercial and operational development. The league closed its most recent fiscal year with <strong>€25.8 million</strong> in revenue and audience growth of <strong>11.2% year-over-year</strong> to <strong>7.5 million viewers</strong>.',
            whyItMatters: 'A binding assembly vote — not just a proposal — confirms institutional investors now treat Liga F as a standalone commercial asset, with Gasol explicitly framing the bet as data-driven rather than symbolic.',
            signalText: 'Liga F\'s General Assembly ratified a €55 million investment from Pau Gasol\'s Gasol16 Ventures.',
            sourceName: 'Just Women\'s Sports',
            sourceUrl: 'https://justwomenssports.com/reads/liga-f-pau-gasol-55-million-womens-soccer-investment-deal/',
            publishedDate: '2026-07-02'
          },
          {
            order: 2,
            tag: 'Live Events · Expansion',
            section: 'sports',
            accentText: '$50M',
            headline: 'PJL Sells First Franchise for $50M Before Launch',
            emailSummary: '<strong>Premier Jumping League</strong> (PJL), the Frank McCourt-backed global show-jumping league launching in <strong>April 2027</strong>, sold its first franchise for <strong>$50 million</strong> to U.S. investor <strong>Jason McCarthy</strong>, who will own the <strong>McCarthy Jumping Team</strong>. PJL is structured as a <strong>16-team league</strong> competing across <strong>14 international venues</strong> and guarantees a <strong>$300 million</strong> total prize pot. The league has signed world No. 1 rider <strong>Scott Brash</strong> and partnered with <strong>Box to Box Films</strong>, the production company behind F1\'s <strong>Drive to Survive</strong>.',
            whyItMatters: 'Selling a $50 million franchise before a single match has been played sets a valuation floor for a sport with no prior institutional ownership structure, and signals investors are pricing scarcity ahead of proof of concept.',
            signalText: 'PJL sold its first franchise for $50 million ahead of its April 2027 launch.',
            sourceName: 'Sportcal',
            sourceUrl: 'https://www.sportcal.com/news/mccourt-based-pjl-sells-first-franchise-for-50m-ahead-of-launch/',
            publishedDate: '2026-06-29'
          },
          {
            order: 3,
            tag: 'Investment · Sports',
            section: 'sports',
            accentText: '$100M',
            headline: 'Premier Lacrosse League Raises $100M Ahead of Olympics',
            emailSummary: '<strong>Premier Lacrosse League</strong> and <strong>Women\'s Lacrosse League</strong> raised a <strong>$100 million Series E</strong> led by <strong>Ares</strong> funds and <strong>Joe Tsai</strong>, with additional backing from <strong>ESPN</strong>, <strong>David Blitzer\'s Bolt Ventures</strong>, and actors <strong>Glen Powell</strong> and <strong>Rob McElhenney</strong>. The raise is timed to lacrosse\'s return to the Olympics at <strong>LA 2028</strong> for the first time since 1908. PLL plans to pause its <strong>2028 season</strong> for two weeks to align with the Games, betting on a global viewership surge.',
            whyItMatters: 'A $100M raise timed to a single Olympic cycle shows investors treating a rare Games return as a one-time audience-expansion event worth funding ahead of any proof it converts to viewership.',
            signalText: 'Premier Lacrosse League raised a $100 million Series E led by Ares and Joe Tsai.',
            sourceName: 'Yahoo Sports',
            sourceUrl: 'https://sports.yahoo.com/olympics/article/premier-lacrosse-league-lands-100-million-to-chase-olympic-moment-100000231.html',
            publishedDate: '2026-06-30'
          },
          {
            order: 4,
            tag: 'Investment · Basketball',
            section: 'sports',
            accentText: '$4.86B',
            headline: 'Blue Owl Capital Eyes Minority Stake in Cavaliers',
            emailSummary: '<strong>Blue Owl Capital</strong> is in advanced talks to acquire a minority stake — reportedly in the <strong>5% to 10%</strong> range — in the <strong>Cleveland Cavaliers</strong>, according to Bloomberg. The investment would run through Blue Owl\'s <strong>Dyal HomeCourt Partners</strong> fund, which already holds minority stakes in the <strong>Atlanta Hawks</strong>, <strong>Sacramento Kings</strong>, and <strong>Minnesota Timberwolves</strong>. <strong>Sportico</strong> values the Cavaliers at <strong>$4.86 billion</strong>, ranking 16th among NBA franchises. Both Blue Owl and the Cavaliers declined to comment.',
            whyItMatters: 'A fourth NBA minority stake for the same PE fund confirms institutional capital is building a repeatable ownership playbook across franchises rather than making one-off bets.',
            signalText: 'Blue Owl Capital is in advanced talks for a minority stake in the Cleveland Cavaliers.',
            sourceName: 'Yahoo Finance',
            sourceUrl: 'https://finance.yahoo.com/markets/stocks/articles/blue-owl-capital-eyes-minority-183216121.html',
            publishedDate: '2026-06-29'
          },
          {
            order: 5,
            tag: 'Media Rights · Streaming',
            section: 'sports',
            headline: 'CazéTV Secures Free Euro 2028 Rights in Brazil',
            emailSummary: '<strong>CazéTV</strong>, Brazilian creator <strong>Casimiro Miguel</strong>\'s YouTube channel, secured rights to broadcast all <strong>UEFA Euro 2028</strong> matches free and in the open across Brazil, extending its rights-acquisition streak beyond the 2026 World Cup. The deal follows a parallel agreement giving CazéTV free-to-air rights to Spain\'s <strong>LaLiga EA Sports</strong> matches in Brazil through <strong>2032</strong>. Financial terms were not disclosed. UEFA cited CazéTV\'s ability to attract younger audiences and experiment with new distribution formats.',
            whyItMatters: 'A creator channel adding Europe\'s top international tournament to its rights portfolio just weeks after setting a World Cup streaming record confirms CazéTV is now negotiating as a primary broadcaster, not an alternative one.',
            signalText: 'CazéTV secured free broadcast rights to all UEFA Euro 2028 matches in Brazil.',
            sourceName: '2Playbook',
            sourceUrl: 'https://www.2playbook.com/media/cazetv-sigue-sumando-torneos-su-canal-youtube-emitira-euro-2028-en-brasil_22872_102.html',
            publishedDate: '2026-07-03'
          },
          {
            order: 6,
            tag: 'Sports Business · Cycling',
            section: 'sports',
            accentText: '37 years',
            headline: 'Isaac del Toro Wins Tour de France Stage',
            emailSummary: '<strong>Isaac del Toro</strong>, a 23-year-old from <strong>Ensenada, Mexico</strong> riding for <strong>UAE Team Emirates</strong>, won <strong>Stage 2</strong> of the 2026 Tour de France on the Montjuïc circuit in Barcelona — the first stage win by a Mexican rider in <strong>37 years</strong>, since Raúl Alcalá in 1989–1990. Teammate <strong>Tadej Pogačar</strong> eased off to let Del Toro cross first; Del Toro sits <strong>fourth overall</strong>, 16 seconds behind race leader <strong>Jonas Vingegaard</strong>. Del Toro tied the win to that night\'s World Cup quarterfinal for host nation Mexico: "We have eleven footballers who have to advance tonight."',
            whyItMatters: 'A rider from a country with almost no cycling infrastructure winning a Tour de France stage during the same year Mexico hosts the World Cup gives Mexican audiences and sponsors a second global sport to rally around.',
            signalText: 'Isaac del Toro became the first Mexican rider to win a Tour de France stage in 37 years.',
            sourceName: 'El Financiero',
            sourceUrl: 'https://www.elfinanciero.com.mx/deportes/2026/07/05/isaac-del-toro-gana-la-segunda-etapa-del-tour-de-francia/',
            publishedDate: '2026-07-05'
          },
          {
            order: 7,
            tag: 'Entertainment · Live Events',
            section: 'entertainment',
            accentText: '€1M/show',
            headline: 'Atlético Madrid Signs 10-Year Live Nation Concert Deal',
            emailSummary: '<strong>Atlético Madrid</strong> agreed a <strong>10-year</strong> strategic partnership with <strong>Live Nation</strong> to stage <strong>15 to 20 concerts annually</strong> at its <strong>Metropolitano</strong> stadium during the off-season, with an option to extend. Atlético is expected to net up to <strong>€1 million</strong> in revenue per concert, plus additional income from selling tickets directly via its existing partnership with <strong>Fever</strong>. The deal builds on an earlier joint venture with Live Nation and <strong>Oak View Group</strong> to build a <strong>€400 million</strong>, 20,000-capacity indoor arena next to the stadium, modeled on Manchester\'s Co-op Live. <strong>Bad Bunny</strong> sold out 10 consecutive shows at the Metropolitano in May and June, drawing over <strong>560,000</strong> fans.',
            whyItMatters: 'Atlético is monetizing stadium downtime as a second revenue line just as crosstown rival Real Madrid\'s own concert plans at the Bernabéu remain tied up in a noise-pollution legal dispute — turning a regulatory weakness for one club into a structural advantage for the other.',
            signalText: 'Atlético Madrid signed a 10-year deal with Live Nation to stage concerts at its stadium.',
            sourceName: 'The Athletic',
            sourceUrl: 'https://www.nytimes.com/athletic/7416418/2026/07/02/atletico-madrid-stadium-metropolitano-concerts/',
            publishedDate: '2026-07-02'
          },
          {
            order: 8,
            tag: 'Entertainment · M&A',
            section: 'entertainment',
            accentText: '$2.1B',
            headline: 'Sky Acquires ITV Network in $2.1B UK Deal',
            emailSummary: '<strong>Sky</strong> agreed to acquire <strong>ITV</strong>\'s television network operations for <strong>£1.6 billion ($2.1 billion)</strong>, paying <strong>£1.2 billion</strong> upfront and another <strong>£200 million</strong> in 2028 contingent on ad-revenue targets. <strong>ITV Studios</strong>, the production arm behind <strong>Love Island</strong> and <strong>Coronation Street</strong>, is excluded from the deal and remains independently listed, though Sky struck a <strong>£2.1 billion</strong> output deal with it through <strong>2032</strong>. Sky and ITV will sit under <strong>NBCUniversal</strong>, which Comcast is spinning out as a standalone company. Combined, Sky and ITV hold a <strong>17.7%</strong> UK viewing share, just behind YouTube\'s <strong>18.6%</strong>.',
            whyItMatters: 'Sky absorbing ITV\'s network in the same week as the Comcast-NBCUniversal spinoff shows legacy UK broadcasters consolidating specifically to compete with YouTube\'s viewing share, not with each other.',
            signalText: 'Sky agreed to acquire ITV\'s television network operations for £1.6 billion ($2.1 billion).',
            sourceName: 'Deadline',
            sourceUrl: 'https://deadline.com/2026/07/sky-acquires-itv-love-island-1236973761/',
            publishedDate: '2026-07-05'
          },
          {
            order: 9,
            tag: 'IP · AI',
            section: 'entertainment',
            headline: 'AI Actor Tilly Norwood to Lead Film \'Misaligned\'',
            emailSummary: '<strong>Particle6</strong>, the AI studio behind AI \'actor\' <strong>Tilly Norwood</strong>, announced her feature film debut in <strong>\'Misaligned,\'</strong> a comedy-drama set in the \'Tillyverse\' billed as a coming-of-age story \'infused with existential AI chaos.\' The film is a hybrid production using traditional directors, writers, and editors alongside AI specialists. Founder <strong>Eline van der Velden</strong> said the goal is proving \'AI can support premium narrative filmmaking, but only with substantial amounts of human craft.\' The announcement follows the backlash Norwood triggered in late 2025 after agency WME publicly declined to represent her, stating: \'We represent humans.\'',
            whyItMatters: 'Moving from a talent-representation controversy to an actual feature greenlight tests whether audiences and distributors will treat an AI-generated performer as commercially viable content, not just an industry flashpoint.',
            signalText: 'Particle6 announced Tilly Norwood, an AI \'actor,\' will lead the feature film \'Misaligned.\'',
            sourceName: 'Variety',
            sourceUrl: 'https://variety.com/2026/film/global/ai-actor-tilly-norwood-movie-debut-misaligned-1236802325/',
            publishedDate: '2026-07-02'
          }
        ]
      }

    ]
  },

  // JUNE 2026
  {
    slug: 'june-2026',
    isCurrent: false,
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'sports',
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
            section: 'entertainment',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'sports',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
            section: 'entertainment',
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
