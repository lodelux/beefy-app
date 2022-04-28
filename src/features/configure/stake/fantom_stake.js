import { govPoolABI } from '../abi';

export const fantomStakePools = [
  {
    id: 'bifi-ftm',
    name: 'BIFI',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0xd6070ae98b8069de6B494332d1A1a81B6179D960',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'FTM',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    earnContractAddress: '0x7fB900C14c9889A559C777D016a885995cE759Ee',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'FTM',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        background: 'stake/beefy/background.png',
        text: "Beefy Finance is The Multi-Chain Yield Optimizer across many blockchains, enabling users to earn autocompounded yield on their crypto. Did you know also that you can own a piece of Beefy itself? Beefy runs on its governance token, BIFI. The token has a set supply of 80,000 across all chains; no more may be minted, ever! As a holder of BIFI you may create and vote on important DAO proposals, and you become dividend-eligible to earn a share of every compounding harvest on Beefy vaults, hour by hour. Here on Fantom, you just need to stake BIFI in this reward pool, or in the autocompounding BIFI Maxi vault on the main page. For this pool, FTM dividends are gathered and sent proportionally to each staker. Stake here, return later to claim the FTM you've earned.",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },

  {
    id: 'moo_beFTM',
    name: 'Beefy',
    logo: 'single-assets/BIFI.png',
    token: 'beFTM',
    tokenDecimals: 18,
    tokenAddress: '0x7381eD41F6dE418DdE5e84B55590422a57917886',
    tokenOracle: 'tokens',
    tokenOracleId: 'beFTM',
    earnedToken: 'FTM',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    earnContractAddress: '0xE00D25938671525C2542A689e42D1cfA56De5888',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'FTM',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        background: 'stake/beefy/background.png',
        text: 'beFTM simply means Beefy Escrowed Fantom. The token is pegged to FTM and can be staked on the Beefy platform and farms on major DEXs. beFTM gives stakers access to maximized validator rewards that typically aren’t available to the individual investor without locking FTM for 1 year.',
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },

  {
    id: 'moo_curve-ftm-f-4pool-orkan',
    name: 'Orkan',
    assets: ['UST', 'FRAX', 'fUSDT', 'USDC'],
    token: 'mooCurve4pool',
    tokenDecimals: 18,
    tokenAddress: '0xf49bB8D23BB48f237CFDfa4Bb67F4B73ccf28A38',
    tokenOracle: 'lps',
    tokenOracleId: 'curve-ftm-f-4pool',
    earnedToken: 'ORKAN',
    earnedTokenDecimals: 9,
    earnedTokenAddress: '0xfB66e49e303A186a4c57414Ceeed651a7a78161a',
    earnContractAddress: '0x432914274883a7632fdC639B1E64526c197f5829',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'ORKAN',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1652536228,
    partners: [
      {
        text: "Orkan is a meta-governance protocol over liquidity flow within the FTM ecosystem. Orkan utilizes perpetual bond issuance to acquire governance tokens from protocols on FTM employing liquidity gauges and locking mechanisms as exchange incentives. Orkan's other plan is to enable deep liquidity and usage of wrapped BTC assets within the ecosystem.",
        website: 'https://orkan.finance/#/dashboard',
        social: {
          telegram: 'https://discord.com/invite/mqd2ZaXeEB',
          twitter: 'https://twitter.com/EnterTheStrudel',
        },
      },
    ],
  },

  {
    id: 'moo_beFTM-based',
    name: 'Based',
    logo: 'single-assets/beFTM.svg',
    token: 'moobeFTM',
    tokenDecimals: 18,
    tokenAddress: '0x185647c55633A5706aAA3278132537565c925078',
    tokenOracle: 'tokens',
    tokenOracleId: 'beFTM',
    earnedToken: 'BSHARE',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x49C290Ff692149A4E16611c694fdED42C954ab7a',
    earnContractAddress: '0xA31D040bb52c7C41eAb80fB975e5Caf95a8CD2Aa',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BSHARE',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1647783389,
    partners: [
      {
        logo: 'stake/based/logo.png',
        background: 'stake/based/bg.png',
        text: 'Based Finance is launched with the main purpose of supporting Tomb Finance by pegging BASED to TOMB, thus giving additional use cases to TOMB as well as attracting more TVL into the Fantom ecosystem. The BASED algorithmic token aims to serve as the backbone of a rapidly growing Fantom ecosystem and aims towards bringing new liquidity.',
        website: 'https://basedfinance.io/',
        social: {
          telegram: 'https://t.me/BasedFinanceio',
          twitter: 'https://twitter.com/BasedFinance_io',
        },
      },
    ],
  },

  {
    id: 'moo_binSPIRIT-wigoswap',
    name: 'WigoSwap',
    logo: 'single-assets/binSPIRIT.svg',
    token: 'mooBinSPIRIT',
    tokenDecimals: 18,
    tokenAddress: '0x7345a537A975d9Ca588eE631BEFdDfEF34fD5e8f',
    tokenOracle: 'tokens',
    tokenOracleId: 'binSPIRIT',
    earnedToken: 'WIGO',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xE992bEAb6659BFF447893641A378FbbF031C5bD6',
    earnContractAddress: '0x80F442b0207Fbc58efBd55da37F2fCc134CAEE7B',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WIGO',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1647602312,
    partners: [
      {
        logo: 'stake/wigoswap/logo.png',
        background: 'stake/wigoswap/bg.png',
        text:
          'DeFi hub with LIFETIME farming earnings powered by Gamified Burning Mechanism (GBM). \n' +
          'GBM comes in by utilizing burning function through increasing activities on platform and boosts the burning process.\n' +
          'It means that WigoSwap is able to continue minting tokens by constantly and automatically de-minting them. With the help of this mechanism, we will never reach the 2B hard-cap.',
        website: 'https://wigoswap.io/',
        social: {
          telegram: 'https://t.me/wigoswap',
          twitter: 'https://twitter.com/wigoswap',
        },
      },
    ],
  },

  {
    id: 'moo_curve-ftm-geist-ripae',
    name: 'Ripae.Finance',
    logo: 'uncategorized/3CRV.png',
    token: 'mooCurveG3CRV',
    tokenDecimals: 18,
    tokenAddress: '0xf710D90A1Bd702dAEa619eEbbe876e7085c2A1df',
    tokenOracle: 'lps',
    tokenOracleId: 'curve-ftm-geist',
    earnedToken: 'PAE',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x8a41f13a4FaE75ca88B1ee726ee9D52B148b0498',
    earnContractAddress: '0x7a9797082ca4D661f8B79a4B5b82b1C7DB372E0c',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'PAE',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1646473953,
    partners: [
      {
        logo: 'stake/ripae/logo.png',
        background: 'stake/ripae/bg.png',
        text:
          'Ripae’s mission is to construct a cross-chain algorithmic stablecoin (ASC) economy and connect DeFi networks to make open finance capital efficient and accessible to everyone.\n' +
          '\n' +
          'With its experienced team, Ripae Finance will strive to build DeFi’s most convenient, secure, fair, and cost-effective ASC solution in order to help the industry thrive by enabling all participants to work together effortlessly.',
        website: 'https://ripae.finance/',
        social: {
          telegram: 'https://discord.gg/6zq53FB4TS',
          twitter: 'https://twitter.com/ripaefinance',
        },
      },
    ],
  },

  {
    id: 'moo_spirit-binspirit-spirit-spirit',
    name: 'SpiritSwap',
    assets: ['binSPIRIT', 'SPIRIT'],
    token: 'mooSpiritBinSPIRIT-SPIRIT',
    tokenDecimals: 18,
    tokenAddress: '0x794cEaD3c864B5390254ffca7ecd6a9aE868661a',
    tokenOracle: 'lps',
    tokenOracleId: 'spirit-binspirit-spirit',
    earnedToken: 'mooBinSPIRIT',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x7345a537A975d9Ca588eE631BEFdDfEF34fD5e8f',
    earnContractAddress: '0xf5ea5496F26413D1Db47A5B23Bb78263bf4d325d',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'binSPIRIT',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1646746356,
    partners: [
      {
        logo: 'stake/spirit/logo.png',
        background: 'stake/spirit/bg.png',
        text: 'The SpiritSwap protocol provides a platform for trading, staking, and farming. SpiritSwap incentivizes Fantom network participation through revenue sharing by locking SPIRIT in return for inSPIRIT. inSPIRIT vests at the end of the lock and is non-transferrable. Lock your SPIRIT on Beefy to mint binSPIRIT, Beefy’s liquid version of inSPIRIT. Stake your binSPIRIT-SPIRIT LP in our vault, and earn high interests on the pair with near-zero impermanent loss. Deposit your mooSpiritBinSPIRIT-SPIRIT (receipt for LP deposited in our vaults) into the boost to earn mooBinSPIRIT.',
        website: 'https://app.spiritswap.finance/',
        social: {
          telegram: 'https://discord.gg/spiritswap',
          twitter: 'https://twitter.com/Spirit_Swap',
        },
      },
    ],
  },

  {
    id: 'moo_binSPIRIT-beefy',
    name: 'Beefy',
    logo: 'single-assets/binSPIRIT.svg',
    token: 'mooBinSPIRIT',
    tokenDecimals: 18,
    tokenAddress: '0x7345a537A975d9Ca588eE631BEFdDfEF34fD5e8f',
    tokenOracle: 'tokens',
    tokenOracleId: 'binSPIRIT',
    earnedToken: 'mooFantomBIFI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945',
    earnContractAddress: '0xB883FE481d4442EEe83BA4eCF358D7F9f624fB40',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'mooFantomBIFI',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1645276643,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        logoNight: 'stake/beefy/beefyfinance_night.png',
        background: 'stake/beefy/background.png',
        text:
          'The SpiritSwap protocol provides a platform for trading, staking, and farming. SpiritSwap incentivizes Fantom network participation through revenue sharing by locking SPIRIT in return for inSPIRIT. inSPIRIT vests at the end of the lock and is non-transferrable. \n' +
          'Lock your SPIRIT on Beefy to mint binSPIRIT, Beefy’s liquid version of inSPIRIT. Staking it directly on Beefy gives you compounded interest on your SPIRIT and also allows you to exchange it at any time. \n' +
          'Deposit your mooBinSPIRIT (receipt for binSPIRIT deposited in our vaults) into the boost to earn mooBIFI.',
        website: 'https://app.beefy.finance/',
        social: {
          telegram: 'https://discord.gg/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },

  {
    id: 'moo_WFTM-2omb',
    name: '2omb',
    logo: 'single-assets/FTM.png',
    token: 'mooScreamFTM',
    tokenDecimals: 18,
    tokenAddress: '0x49c68eDb7aeBd968F197121453e41b8704AcdE0C',
    tokenOracle: 'tokens',
    tokenOracleId: 'WFTM',
    earnedToken: '2SHARES',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca',
    earnContractAddress: '0xd7784f23A04D0ea3647bd6Ce15fD2d0D1FcD30Fe',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: '2SHARES',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1643365643,
    partners: [
      {
        logo: 'stake/2omb/logo.png',
        background: 'stake/2omb/bg.png',
        text: '2omb Finance is a proud fork of Tomb Finance, with 4x faster TSHARE (2SHARE) emissions. People are always looking for the next fork of successful projects. 2omb Finance simplifies this process into a trusted team that delivers an ecosystem of symbiotic forks that thrive on the success of one another. Native tokens of previous forks are utilized for participation in genesis pools of new forks.',
        website: 'https://2omb.finance/',
        social: {
          telegram: 'https://discord.gg/sTXFJ82HcP',
          twitter: 'https://twitter.com/2ombfinance',
        },
      },
    ],
  },

  {
    id: 'moo_beets-guqin-qi-2-qidao',
    name: 'Beefy',
    logo: 'fantom/Guqin Qi 2.png',
    token: 'mooBeetGuqinQi2',
    tokenDecimals: 18,
    tokenAddress: '0x1711b008DA67a18B3a5171B906Dae7812BEb147b',
    tokenOracle: 'lps',
    tokenOracleId: 'beets-guqin-qi-2',
    earnedToken: 'mooFantomBIFI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945',
    earnContractAddress: '0x0eEeefE7e7f5361b7410f9e50FD1B329b81896b7',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'mooFantomBIFI',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1641208098,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        background: 'stake/beefy/background.png',
        text: "Beefy Finance is The Multi-Chain Yield Optimizer across many blockchains, enabling users to earn autocompounded yield on their crypto. Did you know also that you can own a piece of Beefy itself? Beefy runs on its governance token, BIFI. The token has a set supply of 80,000 across all chains; no more may be minted, ever! As a holder of BIFI you may create and vote on important DAO proposals, and you become dividend-eligible to earn a share of every compounding harvest on Beefy vaults, hour by hour. Here on Fantom, you just need to stake BIFI in this reward pool, or in the autocompounding BIFI Maxi vault on the main page. For this pool, FTM dividends are gathered and sent proportionally to each staker. Stake here, return later to claim the FTM you've earned.",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },

  {
    id: 'moo_curve-ftm-geist-pearzap',
    name: 'PearZap',
    logo: 'uncategorized/3CRV.png',
    token: 'mooCurveG3CRV',
    tokenDecimals: 18,
    tokenAddress: '0xf710D90A1Bd702dAEa619eEbbe876e7085c2A1df',
    tokenOracle: 'lps',
    tokenOracleId: 'curve-ftm-geist',
    earnedToken: 'PEAR',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x7C10108d4B7f4bd659ee57A53b30dF928244b354',
    earnContractAddress: '0xBE316e157BDfe5f06413E6DB9916D3F52D32d65F',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'PEAR',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1636033581,
    partners: [
      {
        logo: 'stake/pearzap/logo.png',
        background: 'stake/pearzap/bg.png',
        text: "PearZap Finance is a yield farming project on the Polygon Chain, born out of the idea of bringing consistency in high APR's and security to our investors through our $Pear native token. Join the PearZap family and be part of a project that prides itself in quality partnerships and delivering on the promises we make, no matter how juicy they may be. 🍐⚡️",
        website: 'https://pearzap.com/',
        social: {
          telegram: 'https://t.me/pearzap',
          twitter: 'https://twitter.com/pearzap',
        },
      },
    ],
  },

  {
    id: 'moo_bifi-scream',
    name: 'Scream',
    logo: 'single-assets/BIFI.png',
    token: 'mooFantomBIFI',
    tokenDecimals: 18,
    tokenAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'SCREAM',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475',
    earnContractAddress: '0xE105940939444b056C2de0834214824254D23615',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'SCREAM',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1629394703,
    partners: [
      {
        logo: 'stake/scream/logo.png',
        background: 'stake/scream/bg.png',
        text: 'SCREAM is a highly-scalable decentralised lending protocol built and powered by the Fantom Blockchain.',
        website: 'https://scream.sh/',
        social: {
          telegram: 'https://t.me/screamsh',
          twitter: 'https://twitter.com/screamdotsh',
        },
      },
    ],
  },
  {
    id: 'moo_boo_ftm-tomb',
    name: 'TOMB.Finance',
    assets: ['BOO', 'FTM'],
    token: 'mooBooBoo-FTM',
    tokenDecimals: 18,
    tokenAddress: '0xEe3a7c885Fd3cc5358FF583F2DAB3b8bC473316f',
    tokenOracle: 'lps',
    tokenOracleId: 'boo-boo-ftm',
    earnedToken: 'mooFantomBIFI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945',
    earnContractAddress: '0x1643BC20913fA2D62C521E7cE8fFeD9e1Dd87964',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BIFI',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1624311025,
    partners: [
      {
        logo: 'stake/tombfinance/logo.png',
        background: 'stake/tombfinance/background.png',
        text: 'Tomb algorithmic token is the first project and the base foundation of an ecosystem that will bring utility and value for token holders. Designed by the Tomb.finance team as the first algorithmic token pegged to FTM instead of a stablecoin, on OPERA Fantom. It works around a solution that can adjust the token supply to move the price of the token itself up or down, in the direction of a target price to bring programmability and stability to the price. Inspired by Basis original idea, and its predecessors improvements (bDollar and soup), Tomb is a multi-token protocol that consists of the following tokens: Tomb (TOMB), Tomb Shares (TSHARE), and Tomb Bonds (TBOND).\n',
        website: 'https://tomb.finance',
        social: {
          telegram: 'https://t.me/tombfinance',
          twitter: 'https://twitter.com/tombfinance',
        },
      },
    ],
  },
  {
    id: 'boo-bifi-ftm-bifi',
    name: 'Beefy.Finance',
    assets: ['BIFI', 'FTM'],
    token: 'mooBooBIFI-FTM',
    tokenDecimals: 18,
    tokenAddress: '0xe8188B9701E6DB1Fe24c75783474D22e5957BBEF',
    tokenOracle: 'lps',
    tokenOracleId: 'boo-bifi-ftm',
    earnedToken: 'mooFantomBIFI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xbf07093ccd6adfc3deb259c557b61e94c1f66945',
    earnContractAddress: '0xa8b86b9AF7e844DA90A2e72840Ad01CCBD11EdC3',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BIFI',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1623711392,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        background: 'stake/beefy/background.png',
        text: "Beefy Finance is The Multi-Chain Yield Optimizer across many sidechains, enabling users to earn autocompounded yield on their crypto. Did you know also that you can own a piece of Beefy itself? Beefy runs on its governance token, BIFI. The token has a set supply of 80,000 across all chains; no more may be minted, ever! As a holder of BIFI you may create and vote on important DAO proposals, and you become dividend-eligible to earn a share of every compounding harvest on Beefy vaults, hour by hour. For this pool, mooBIFI dividends are gathered and sent proportionally to each staker. Stake mooBIFI here, return later to claim the extra mooBIFI you've earned.",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },
  {
    id: 'moo_usdc-ftm-ester',
    name: 'Ester Finance',
    assets: ['USDC', 'FTM'],
    token: 'mooBooFTM-USDC',
    tokenDecimals: 18,
    tokenAddress: '0x41D44B276904561Ac51855159516FD4cB2c90968',
    tokenOracle: 'lps',
    tokenOracleId: 'boo-ftm-usdc',
    earnedToken: 'EST',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x181F3F22C9a751E2ce673498A03E1FDFC0ebBFB6',
    earnContractAddress: '0xed5010eDF8812003B7d4c9a69E7AfCBceaB62F4f',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'EST',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1622138639,
    partners: [
      {
        logo: 'stake/esterfinance/logo.png',
        background: 'stake/esterfinance/background.png',
        text: 'Ester.Finance is a Decentralized Finance (DeFi) Yield Optimizer project on the Fantom Opera Blockchain. Ester can make you earn more crypto with crypto. Through a set of smart contracts and several investment strategies, Ester.Finance automatically maximizes the user rewards from various liquidity pools (LPs), automated market-making (AMM) projects, and other yield farming opportunities in the DeFi ecosystem. This provides a huge advantage over attempting to do this manually yourself.',
        website: 'https://app.ester.finance/',
        social: {
          telegram: '',
          twitter: 'https://twitter.com/EsterFinance',
        },
      },
    ],
  },
];
