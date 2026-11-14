// Scammer HELEPP: Scam Shield for MY — Neo-Brutalist PWA

const PRESETS = {
  whatsapp_mule: {
    channel: 'whatsapp',
    sender: '+60 11-3948 8291 (Customer Care MY)',
    message:
      'Salam Sejahtera Tuan/Puan, kami dari Unit Keselamatan Akaun. Akaun anda telah DIBEKUKAN sementara kerana isu pengesahan BNM & LHDN. Sila buat bayaran pelepasan RM250 ke akaun DuitNow agen rasmi (Mohd Faizal - Maybank 162012993812) dalam masa 30 minit dan berikan 6-digit OTP untuk elak baki wang anda hangus. Semak di http://my-account-verify.xyz sekarang.'
  },
  telegram_vip: {
    channel: 'telegram',
    sender: '@OfficialSupport_MY_Help',
    message:
      'Hi Boss! I am Senior Account Manager messaging regarding your stuck withdrawal. Good news: you also qualify for VIP Managed Pool (Guaranteed 300% profit weekly confirm tak rugi!). Reply with your login password or AnyDesk code right now so I can manually unlock instant payout to your bank!'
  },
  email_spoof: {
    channel: 'email',
    sender: 'security-alert@maybank2u-security-check.com',
    message:
      'Dear Valued Customer, We detected an unrecognized login attempt from Kuala Lumpur. For your protection, your online banking and transfers will be suspended within 2 hours unless you re-confirm your identity and TAC/OTP via our priority portal: https://auth.bank-security-verify.com/login — Do not ignore this automated notice.'
  },
  legit_notice: {
    channel: 'inapp',
    sender: 'no-reply@maybank2u.com.my',
    message:
      'Hello, your withdrawal / transfer request of RM 150.00 has been received and is being processed. You can check the live status anytime by opening the official app yourself and visiting Transaction History. Reminder: Official Support will never ask for your password, OTP/TAC, or transfers to personal bank accounts.'
  }
};

const OFFICIAL_DOMAINS = [
  'maybank2u.com.my',
  'cimbclicks.com.my',
  'pbebank.com',
  'rhbgroup.com',
  'hlb.com.my',
  'tngdigital.com.my',
  'hasil.gov.my',
  'bnm.gov.my',
  'deriv.com'
];

const UI_COPY = {
  en: {
    ribbon:
      'Real Support will <strong>NEVER</strong> DM you first on WhatsApp/Telegram, ask for your OTP/TAC/password, or request transfers to personal bank accounts.',
    heroSub:
      'Got a message claiming to be Customer Support, your Bank, or LHDN? Scan warning signs safely before you click, reply, or pay.',
    step1Eyebrow: '[01] PASTE OR TEST MESSAGE',
    checkerHeading: 'MESSAGE & SENDER',
    presetsLabel: 'TEST REAL MY SCENARIOS (1-CLICK):',
    channelLabel: 'CHANNEL',
    senderLabel: 'SENDER NUMBER / @HANDLE / EMAIL',
    messageLabel: 'SUSPICIOUS MESSAGE TEXT',
    liveScanText: '● LIVE SCAN ON',
    xrayHeading: 'RED-FLAG X-RAY',
    xrayHint: 'Tap any highlighted phrase to inspect the trap',
    dissectorTitleSpoof: 'LINK LOOKALIKE X-RAY — SUSPICIOUS DOMAIN SPOTTED!',
    dissectorTitleSafe: 'LINK DOMAIN CHECK — KNOWN OFFICIAL DOMAIN',
    radarLabel: 'MY SCAM RADAR:',
    flagsHeadingPrefix: 'WARNING SIGNS SPOTTED',
    flagsSub: 'Tap a card to spotlight in message',
    step2Eyebrow: '[02] VERIFY SAFELY BEFORE ACTING',
    safeHeading: 'HOW TO CHECK SAFELY RIGHT NOW',
    safeIntro:
      'Scammers want you to panic inside their chat. Complete these 3 independent checks first:',
    officialCardTitle: 'OFFICIAL APP / SITE CHECK',
    officialCardBody:
      'Open the <strong>official app or website</strong> yourself by typing the URL (never via message links) and use their <strong>in-app Help Centre / Live Chat</strong>.',
    myCardTitle: 'MALAYSIA SAFETY NET',
    myCardBody:
      'Given a local bank/phone number? Check <a href="https://semakmule.rmp.gov.my" target="_blank" rel="noopener noreferrer">PDRM SemakMule</a>. Already transferred money? Call <strong>NSRC 997</strong> immediately!',
    copyBtnText: 'COPY SAFETY SUMMARY TO WARN FRIENDS',
    copiedToast: '[OK] COPIED WARNING SUMMARY TO CLIPBOARD.',
    steps: [
      {
        title: '1. PAUSE — DO NOT REPLY, CLICK LINKS, OR SEND OTP/MONEY',
        desc: 'Real banks, agencies, or support teams never freeze funds on a 30-minute timer or ask for release fees.'
      },
      {
        title: '2. OPEN THE OFFICIAL APP / WEBSITE INDEPENDENTLY',
        desc: 'Close WhatsApp/Telegram. Open your bank/platform app directly or call the hotline on the back of your card.'
      },
      {
        title: '3. CHECK EXACT DOMAIN & PDRM SEMAKMULE',
        desc: 'Lookalike domains like bank-security-verify.com are traps. Verify any Malaysian bank account on semakmule.rmp.gov.my.'
      }
    ]
  },
  my: {
    ribbon:
      'Weh ingat! Support atau Bank sebenar <strong>TAK PERNAH</strong> PM tepi kat WhatsApp/Telegram dulu, minta OTP/TAC/password, atau suruh DuitNow masuk akaun peribadi orang!',
    heroSub:
      'Dapat mesej kononnya "Customer Support", Bank, atau LHDN? Jangan gelabah tekan link atau bank-in — scan red flag kat sini dulu!',
    step1Eyebrow: '[01] PASTE MESEJ ATAU TEST CONTOH SCAM',
    checkerHeading: 'DETAIL MESEJ & PENGHANTAR',
    presetsLabel: 'CUBA TAKTIK SCAMMER MALAYSIA (1-KLIK):',
    channelLabel: 'DAPAT KAT MANA?',
    senderLabel: 'NOMBOR / @HANDLE / EMEL PENGHANTAR',
    messageLabel: 'AYAT MESEJ YANG MENCURIGAKAN',
    liveScanText: '● TENGAH SCAN LIVE',
    xrayHeading: 'X-RAY TAKTIK SCAMMER',
    xrayHint: 'Tekan mana-mana ayat merah untuk tengok kenapa benda tu pancingan scam',
    dissectorTitleSpoof: 'X-RAY LINK PALSU — JANGAN TEKAN WEH!',
    dissectorTitleSafe: 'SEMAKAN LINK — DOMAIN RASMI DIKENALI',
    radarLabel: 'RADAR TAKTIK SCAM MY:',
    flagsHeadingPrefix: 'RED FLAG KANTOI',
    flagsSub: 'Tekan kad bawah untuk suluh ayat dalam mesej',
    step2Eyebrow: '[02] CARA SEMAK DENGAN SELAMAT',
    safeHeading: 'APA KENA BUAT SEKARANG (JANGAN PANIK!)',
    safeIntro:
      'Scammer sengaja bagi kau cuak supaya tak sempat fikir. Buat 3 langkah selamat ni sebelum buat apa-apa:',
    officialCardTitle: 'CARA VERIFY RASMI',
    officialCardBody:
      'Buka <strong>aplikasi/website rasmi</strong> sendiri (jangan klik link mesej!). Semak notifikasi atau tanya terus kat <strong>Live Chat / Hotline rasmi</strong>.',
    myCardTitle: 'TALIAN HAYAT SCAM MALAYSIA',
    myCardBody:
      'Dia bagi nombor akaun Maybank/CIMB/telefon? Semak kat <a href="https://semakmule.rmp.gov.my" target="_blank" rel="noopener noreferrer">SemakMule PDRM</a>. Dah terbuat transfer? Terus call <strong>NSRC 997</strong>!',
    copyBtnText: 'COPY RINGKASAN — SHARE KAT GROUP WHATSAPP',
    copiedToast: '[OK] SIAP COPY! BOLEH PASTE KAT WHATSAPP.',
    steps: [
      {
        title: '1. TARIK NAFAS — JANGAN REPLY, KLIK LINK, BAGI OTP ATAU DUITNOW!',
        desc: 'Bank, LHDN, atau support rasmi tak pernah kutip "wang pelepasan" masuk akaun peribadi sesiapa pun.'
      },
      {
        title: '2. TUTUP CHAT TU, BUKA APP RASMI ATAU CALL NOMBOR BELAKANG KAD',
        desc: 'Sahkan terus melalui app rasmi bank/platform atau hubungi talian rasmi — jangan guna nombor dalam mesej tu.'
      },
      {
        title: '3. CEK EJAAN DOMAIN & SEMAKMULE PDRM',
        desc: 'Kalau ada sengkang pelik macam my-account-verify.xyz memang confirm scam. Cek akaun bank kat semakmule.rmp.gov.my.'
      }
    ]
  }
};

const DETECTION_RULES = [
  {
    id: 'mule_payment',
    severity: 'high',
    weight: 38,
    radarTag: { en: 'Mule Account / Fake Fee', my: 'Keldai Akaun / Fee Palsu' },
    regex: /\b(duitnow|bayaran pelepasan|release fee|processing fee|unlock fee|akaun peribadi|personal bank|maybank\s*\d{8,14}|cimb\s*\d{8,14}|rm\s?\d{2,5}|bank[\s-]?in)\b/gi,
    negativeContext: /never ask for.*personal bank/i,
    title: {
      en: 'Upfront "Release Fee" / Personal Bank Account (Mule Trap)',
      my: 'Minta "Bayaran Pelepasan" / Akaun Keldai (Mule Account)!'
    },
    desc: {
      en: 'Real Support or banks never ask you to transfer RM fees to an "agent", DuitNow, or personal bank account to unfreeze your money.',
      my: 'Support atau bank sebenar takkan sesekali suruh kau DuitNow RM250 masuk akaun individu ("Mohd Faizal" etc.) untuk cairkan duit. Confirm akaun keldai!'
    }
  },
  {
    id: 'authority_scare',
    severity: 'high',
    weight: 26,
    radarTag: { en: 'Fake BNM / LHDN Scare', my: 'Petik Nama BNM / LHDN' },
    regex: /\b(bnm|bank negara|lhdn|cukai tertunggak|tax clearance|aml fee|polis|pdrm)\b/gi,
    title: {
      en: 'Fake Regulator / Tax Scare Tactic (BNM / LHDN)',
      my: 'Taktik Guna Nama BNM / LHDN Bagi Kau Cuak'
    },
    desc: {
      en: 'Malaysian scammers frequently drop BNM, LHDN, or PDRM names to make fake "clearance fees" sound official and scary.',
      my: 'Taktik paling famous scammer Malaysia: petik nama BNM, LHDN atau PDRM konon akaun sangkut cukai supaya kau takut & terus bayar.'
    }
  },
  {
    id: 'credentials_otp',
    severity: 'high',
    weight: 40,
    radarTag: { en: 'OTP / Password Theft', my: 'Pancing OTP / Password' },
    regex: /\b(6-digit otp|otp|tac|login password|your password|kata laluan|api token|anydesk|teamviewer|screen\s?share|seed phrase|pin code)\b/gi,
    negativeContext: /never ask for your password,\s*otp/i,
    title: {
      en: 'Asks for Secret Credentials, OTP/TAC, or Remote Access',
      my: 'Minta OTP, TAC, Password, atau AnyDesk!'
    },
    desc: {
      en: 'Legitimate staff can assist you without ever knowing your password, 6-digit OTP/TAC, or controlling your screen via AnyDesk.',
      my: 'Staf support atau bank sebenar TAK PERLU tahu password, nombor OTP/TAC 6-digit, atau masuk AnyDesk telefon kau. Bagi je benda ni, lesap terus duit!'
    }
  },
  {
    id: 'urgency_freeze',
    severity: 'medium',
    weight: 22,
    radarTag: { en: 'Panic Timer Trap', my: 'Gertak Masa Singkat' },
    regex: /\b(dibekukan|frozen|within \d+\s*(minutes|mins|hours|hrs)|dalam masa \d+\s*(minit|jam)|wang anda hangus|baki wang anda hangus|sekarang|right now|do not ignore|suspended within \d+ hours)\b/gi,
    title: {
      en: 'Artificial Countdown & Account Freeze Panic',
      my: 'Gertak "Akaun Beku / Duit Hangus Dalam 30 Minit"'
    },
    desc: {
      en: 'Countdowns ("within 30 mins / 2 hours or lose your money") are designed to stop you from taking 2 minutes to verify via official channels.',
      my: 'Scammer sengaja letak masa 30 minit / 2 jam konon duit hangus supaya kau gelabah dan tak sempat semak kat app/hotline rasmi.'
    }
  },
  {
    id: 'guaranteed_profit',
    severity: 'high',
    weight: 32,
    radarTag: { en: 'Fake VIP Guaranteed Profit', my: 'Skim "Confirm Untung 300%"' },
    regex: /\b(guaranteed \d+%|confirm tak rugi|vip managed pool|untung tetap|zero risk|double your money|pulangan dijamin)\b/gi,
    title: {
      en: '"Guaranteed Profit" / VIP Managed Pool Promise',
      my: 'Janji Manis "VIP Pool Confirm Tak Rugi 300%"'
    },
    desc: {
      en: 'No legitimate financial platform runs Telegram "VIP Managed Pools" promising guaranteed weekly returns.',
      my: 'Mana ada pelaburan sah buat group "Cikgu VIP Pool untung 300% seminggu confirm tak rugi". Semua ni taktik scam pelaburan palsu!'
    }
  }
];

let currentTone = 'en';
let currentView = 'chat';
let activeFlagId = null;
let checkedSteps = [false, false, false];
let lastAnalysis = null;
let deferredPrompt = null;

// DOM Elements
const channelSelect = document.getElementById('channelSelect');
const senderInput = document.getElementById('senderInput');
const messageInput = document.getElementById('messageInput');
const highlightedOutput = document.getElementById('highlightedOutput');
const previewContainer = document.getElementById('previewContainer');
const chatAvatar = document.getElementById('chatAvatar');
const chatContactName = document.getElementById('chatContactName');
const chatContactSub = document.getElementById('chatContactSub');
const chatChannelBadge = document.getElementById('chatChannelBadge');
const unverifiedBanner = document.getElementById('unverifiedBanner');
const domainDissector = document.getElementById('domainDissector');
const dissectorTitle = document.getElementById('dissectorTitle');
const dissectorList = document.getElementById('dissectorList');
const verdictCard = document.getElementById('verdictCard');
const scoreBarFill = document.getElementById('scoreBarFill');
const scoreNum = document.getElementById('scoreNum');
const verdictPill = document.getElementById('verdictPill');
const verdictHeading = document.getElementById('verdictHeading');
const verdictSummary = document.getElementById('verdictSummary');
const radarTags = document.getElementById('radarTags');
const flagCount = document.getElementById('flagCount');
const flagsList = document.getElementById('flagsList');
const safeStepsList = document.getElementById('safeStepsList');
const checklistProgress = document.getElementById('checklistProgress');
const copyReportBtn = document.getElementById('copyReportBtn');
const copyToast = document.getElementById('copyToast');
const installAppBtn = document.getElementById('installAppBtn');

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isKnownOfficialDomain(host) {
  return OFFICIAL_DOMAINS.some((d) => host === d || host.endsWith('.' + d));
}

function inspectUrls(text) {
  const urlRegex = /\b((?:https?:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,12}|(?:[a-z0-9-]+\.)+(?:com|xyz|my|net|org|io|co|app|online|site|top|vip|link|click|live|info|me|cc|gov))(?:\/[^\s]*)?)/gi;
  const results = [];
  let match;
  while ((match = urlRegex.exec(text)) !== null) {
    const raw = match[1].replace(/[.,!?;:)]+$/, '');
    const matchEnd = match.index + raw.length;
    const withoutProto = raw.replace(/^https?:\/\//i, '');
    const host = withoutProto.split('/')[0].toLowerCase();
    const isOfficial = isKnownOfficialDomain(host);
    const looksLikeSpoof = !isOfficial && /(bank|maybank|cimb|tng|lhdn|bnm|verify|secure|login|support|deriv|account)/.test(host);

    results.push({
      raw,
      host,
      start: match.index,
      end: matchEnd,
      isOfficial,
      looksLikeSpoof
    });
  }
  return results;
}

function inspectChannelAndSender(channel, sender) {
  const flags = [];
  const trimmed = sender.trim();
  const lower = trimmed.toLowerCase();

  if (channel === 'whatsapp' || channel === 'telegram') {
    const channelName = channel === 'whatsapp' ? 'WhatsApp' : 'Telegram';
    flags.push({
      id: 'unofficial_dm_channel',
      severity: 'high',
      weight: 30,
      quote: `${channelName}: ${trimmed || 'Unsolicited DM'}`,
      radarTag: { en: `Fake ${channelName} Support`, my: `Scammer menyamar kat ${channelName}` },
      title: {
        en: `Unsolicited "Support" DM on ${channelName}`,
        my: `Menyamar Jadi Support / Bank kat ${channelName}`
      },
      desc: {
        en: `Real banks and official support teams do not DM you out of nowhere from random +60 numbers or @handles on ${channelName}.`,
        my: `Bank atau support yang betul takkan tiba-tiba PM kau guna nombor +60 personal atau akaun ${channelName} untuk selesai masalah akaun!`
      }
    });
  }

  if (trimmed.includes('@') && !trimmed.startsWith('@')) {
    const emailParts = lower.split('@');
    const domain = emailParts[emailParts.length - 1].replace(/[^a-z0-9.-]/g, '');
    if (domain && !isKnownOfficialDomain(domain)) {
      flags.push({
        id: 'spoof_sender_email',
        severity: 'high',
        weight: 35,
        quote: trimmed,
        radarTag: { en: 'Lookalike Email Domain', my: 'Domain Emel Tiruan' },
        title: {
          en: `Suspicious / Unverified Email Domain (@${domain})`,
          my: `Alamat Emel Mencurigakan (@${domain})`
        },
        desc: {
          en: `Scammers register lookalike domains like "@${domain}" to look official at a quick glance. Always check the exact official domain.`,
          my: `Sekali imbas nampak macam betul, tapi "@${domain}" bukan domain rasmi! Scammer suka tambah perkataan "-security" atau "-check" untuk tipu orang.`
        }
      });
    }
  }

  return flags;
}

function analyzeAll() {
  const channel = channelSelect.value;
  const sender = senderInput.value;
  const text = messageInput.value;

  const spans = [];
  const detectedFlags = [];
  const radarSet = new Map();

  const metaFlags = inspectChannelAndSender(channel, sender);
  metaFlags.forEach((f) => {
    detectedFlags.push(f);
    if (f.radarTag) radarSet.set(f.id, f.radarTag);
  });

  const urlFindings = inspectUrls(text);
  urlFindings.forEach((u, idx) => {
    if (!u.isOfficial) {
      const flagId = `suspicious_url_${idx}`;
      spans.push({ start: u.start, end: u.end, flagId, severity: 'high' });
      const radar = u.looksLikeSpoof
        ? { en: 'Lookalike Phishing Link', my: 'Link Phishing Menyamar' }
        : { en: 'External Unverified Link', my: 'Link Luar Mencurigakan' };
      radarSet.set('url_spoof', radar);
      detectedFlags.push({
        id: flagId,
        severity: 'high',
        weight: u.looksLikeSpoof ? 42 : 26,
        quote: u.raw,
        title: {
          en: u.looksLikeSpoof
            ? `Lookalike Trap Domain ("${u.host}")`
            : `Unverified External Link ("${u.host}")`,
          my: u.looksLikeSpoof
            ? `Link Menyamar ("${u.host}")!`
            : `Link Luar Tak Sahih ("${u.host}")`
        },
        desc: {
          en: u.looksLikeSpoof
            ? `Notice how "${u.host}" uses official-sounding words to trick your eyes, but it is NOT an official bank/agency domain. Never log in here.`
            : `This link goes to "${u.host}". Always open the official app or type the official URL yourself instead of tapping message links.`,
          my: u.looksLikeSpoof
            ? `Tengok betul-betul "${u.host}" — dia guna perkataan macam "verify" atau nama bank nak kaburkan mata kau, padahal ni website palsu untuk curi login!`
            : `Link ni bawa ke "${u.host}". Jangan klik — buka app rasmi atau taip sendiri alamat web rasmi kat browser.`
        }
      });
    }
  });

  DETECTION_RULES.forEach((rule) => {
    if (rule.negativeContext && rule.negativeContext.test(text)) return;
    rule.regex.lastIndex = 0;
    const matches = [];
    let m;
    while ((m = rule.regex.exec(text)) !== null) {
      matches.push({ start: m.index, end: m.index + m[0].length, text: m[0] });
    }
    if (matches.length > 0) {
      matches.forEach((item) => {
        spans.push({ start: item.start, end: item.end, flagId: rule.id, severity: rule.severity });
      });
      detectedFlags.push({
        id: rule.id,
        severity: rule.severity,
        weight: rule.weight,
        quote: matches[0].text,
        title: rule.title,
        desc: rule.desc
      });
      if (rule.radarTag) radarSet.set(rule.id, rule.radarTag);
    }
  });

  spans.sort((a, b) => a.start - b.start || b.end - a.end);
  const cleanSpans = [];
  let cursor = 0;
  for (const sp of spans) {
    if (sp.start >= cursor) {
      cleanSpans.push(sp);
      cursor = sp.end;
    }
  }

  let rawScore = detectedFlags.reduce((acc, f) => acc + f.weight, 0);
  if (detectedFlags.length >= 3) rawScore += 10;
  let score = Math.min(98, rawScore);
  if (text.trim().length === 0 && sender.trim().length === 0) score = 0;
  else if (detectedFlags.length === 0) score = 6;

  lastAnalysis = {
    channel,
    sender,
    text,
    cleanSpans,
    detectedFlags,
    urlFindings,
    radarTags: Array.from(radarSet.values()),
    score
  };

  renderAnalysis();
}

function renderHighlightedMessage(text, spans) {
  if (!text.trim()) {
    return `<span style="color:#525252;font-style:italic;">${
      currentTone === 'en'
        ? 'Paste a message above or choose a preset scenario to inspect...'
        : 'Paste mesej kat atas atau pilih butang contoh scam untuk scan...'
    }</span>`;
  }

  let html = '';
  let lastIdx = 0;
  spans.forEach((sp) => {
    html += escapeHtml(text.slice(lastIdx, sp.start));
    const snippet = escapeHtml(text.slice(sp.start, sp.end));
    const activeCls = activeFlagId === sp.flagId ? 'active-mark' : '';
    html += `<mark class="flag-mark severity-${sp.severity} ${activeCls}" data-flag-id="${sp.flagId}" tabindex="0" role="button">${snippet}</mark>`;
    lastIdx = sp.end;
  });
  html += escapeHtml(text.slice(lastIdx));
  return html.replace(/\n/g, '<br>');
}

function renderAnalysis() {
  if (!lastAnalysis) return;
  const { channel, sender, text, cleanSpans, detectedFlags, urlFindings, radarTags: rTags, score } = lastAnalysis;
  const copy = UI_COPY[currentTone];

  previewContainer.className = `preview-frame mode-${currentView} channel-${channel}`;
  const channelLabels = {
    whatsapp: 'WHATSAPP',
    telegram: 'TELEGRAM',
    email: 'EMAIL',
    sms: 'SMS',
    inapp: 'OFFICIAL APP'
  };
  const chName = channelLabels[channel] || 'MESSAGE';
  chatChannelBadge.textContent = chName;
  chatContactName.textContent = sender.trim() || (currentTone === 'en' ? 'UNKNOWN SENDER' : 'PENGHANTAR TAK DIKENALI');
  chatAvatar.textContent = channel === 'inapp' ? 'OK' : '?';

  const isOfficialSender = channel === 'inapp' && detectedFlags.length === 0;

  if (isOfficialSender) {
    chatContactSub.textContent = currentTone === 'en' ? 'VERIFIED OFFICIAL APP' : 'SALURAN APLIKASI RASMI';
    unverifiedBanner.className = 'chat-unverified-banner safe-banner';
    unverifiedBanner.textContent =
      currentTone === 'en'
        ? '[OK] MATCHES OFFICIAL COMMUNICATION PATTERNS (NO OTP OR PERSONAL TRANSFER REQUESTS).'
        : '[OK] IKUT CIRI MESEJ RASMI (TIADA MINTA OTP/TAC ATAU AKAUN PERIBADI).';
  } else {
    chatContactSub.textContent = currentTone === 'en' ? `${chName} • UNVERIFIED EXTERNAL` : `${chName} • BUKAN APP RASMI`;
    unverifiedBanner.className = 'chat-unverified-banner';
    unverifiedBanner.textContent =
      currentTone === 'en'
        ? '[!] ANYONE CAN USE A BANK OR SUPPORT LOGO ON WHATSAPP, TELEGRAM, OR FAKE EMAILS.'
        : '[!] SESIAPA PUN BOLEH GUNA LOGO BANK / SUPPORT KAT WHATSAPP, TELEGRAM, ATAU EMEL PALSU!';
  }

  highlightedOutput.innerHTML = renderHighlightedMessage(text, cleanSpans);

  if (urlFindings.length > 0) {
    domainDissector.classList.remove('hidden');
    const hasSpoof = urlFindings.some((u) => !u.isOfficial);
    domainDissector.classList.toggle('safe-dissector', !hasSpoof);
    dissectorTitle.textContent = hasSpoof ? copy.dissectorTitleSpoof : copy.dissectorTitleSafe;

    dissectorList.innerHTML = urlFindings
      .map((u) => {
        if (u.isOfficial) {
          return `
            <div class="dissector-item">
              <div class="url-mono"><span class="url-real-host legit-host">${escapeHtml(u.host)}</span></div>
              <div>${
                currentTone === 'en'
                  ? '[OK] Known official Malaysian/platform domain. Still safest to open the official app directly.'
                  : '[OK] Memang domain rasmi yang dikenali. Paling selamat tetap buka aplikasi rasmi sendiri!'
              }</div>
            </div>
          `;
        }
        return `
          <div class="dissector-item">
            <div class="url-mono">
              ${escapeHtml(u.raw.replace(u.host, ''))} -> REAL DOMAIN: <span class="url-real-host">${escapeHtml(u.host)}</span> (UNVERIFIED!)
            </div>
            <div>${
              currentTone === 'en'
                ? '[!] Scammers use extra words or .xyz/.com lookalikes to fool mobile screens. DO NOT open this link.'
                : '[!] Taktik kaburkan mata kat skrin telefon! Domain pelik atau ada sengkang tambahan macam ni BUKAN web rasmi — jangan tekan!'
            }</div>
          </div>
        `;
      })
      .join('');
  } else {
    domainDissector.classList.add('hidden');
  }

  scoreNum.textContent = score;
  scoreBarFill.style.width = `${score}%`;

  let riskTier = 'low';
  if (score >= 60) riskTier = 'high';
  else if (score >= 25) riskTier = 'medium';

  verdictCard.className = `brutal-card verdict-card risk-${riskTier}`;

  if (riskTier === 'high') {
    verdictPill.textContent =
      currentTone === 'en' ? 'HIGH SCAM RISK — DO NOT ACT' : 'BAHAYA SCAM TINGGI — JANGAN LAYAN!';
    verdictHeading.textContent =
      currentTone === 'en' ? 'STOP! STRONG IMPERSONATION SIGNS' : 'BERHENTI! BANYAK TAKTIK SCAMMER';
    verdictSummary.textContent =
      currentTone === 'en'
        ? 'This message combines urgency, fake links, or fee/OTP traps that real support or banks never use.'
        : 'Mesej ni guna taktik gertak, link menyamar, atau minta OTP/duit pelepasan — pihak rasmi TAK PERNAH buat macam ni!';
  } else if (riskTier === 'medium') {
    verdictPill.textContent =
      currentTone === 'en' ? 'SUSPICIOUS — VERIFY FIRST' : 'MENCURIGAKAN — SEMAK DULU';
    verdictHeading.textContent =
      currentTone === 'en' ? 'CAUTION: WARNING SIGNS FOUND' : 'HATI-HATI: ADA TANDA MERAGUKAN';
    verdictSummary.textContent =
      currentTone === 'en'
        ? 'Do not click links or reply here. Open the official app yourself or call the official hotline.'
        : 'Jangan terus percaya. Buka aplikasi rasmi sendiri atau call nombor hotline kat belakang kad bank.';
  } else {
    verdictPill.textContent =
      currentTone === 'en' ? 'NO OBVIOUS SCAM TRAPS' : 'TIADA TAKTIK SCAM KETARA';
    verdictHeading.textContent =
      currentTone === 'en' ? 'LOOKS CONSISTENT — CHECK SAFELY' : 'NAMPAK NORMAL — TETAP BERINGAT';
    verdictSummary.textContent =
      currentTone === 'en'
        ? 'No pressure timers, fake domains, or OTP/payment requests spotted. Still verify directly inside the official app.'
        : 'Takde minta OTP, akaun keldai, atau link pelik. Pun begitu, sentiasa semak terus dalam aplikasi rasmi.';
  }

  if (rTags.length > 0) {
    radarTags.innerHTML = rTags
      .map((t) => `<span class="radar-tag">${escapeHtml(t[currentTone])}</span>`)
      .join('');
  } else {
    radarTags.innerHTML = `<span class="radar-tag clean-tag">${
      currentTone === 'en' ? '[OK] NO MY MULE/BNM/OTP TRAPS' : '[OK] TIADA TAKTIK KELDAI/BNM/OTP'
    }</span>`;
  }

  const liveFlagCountEl = document.getElementById('flagCount');
  if (liveFlagCountEl) liveFlagCountEl.textContent = detectedFlags.length;

  if (detectedFlags.length === 0) {
    flagsList.innerHTML = `
      <div class="flag-card safe-flag-card">
        <div class="flag-card-top">
          <span class="flag-title">${
            currentTone === 'en'
              ? '[OK] No impersonation red flags triggered'
              : '[OK] Tiada ayat pancingan scammer dikesan'
          }</span>
        </div>
        <p class="flag-desc">${
          currentTone === 'en'
            ? 'Notice how genuine notifications tell you to check inside your own app and remind you never to share OTPs or passwords.'
            : 'Perasan tak mesej yang betul cuma suruh kau semak sendiri dalam app & siap ingatkan jangan kongsi OTP atau password.'
        }</p>
      </div>
    `;
  } else {
    flagsList.innerHTML = detectedFlags
      .map((f) => {
        const isAct = activeFlagId === f.id ? 'active-card' : '';
        return `
          <div class="flag-card severity-${f.severity} ${isAct}" data-card-flag-id="${f.id}">
            <div class="flag-card-top">
              <span class="flag-title">${escapeHtml(f.title[currentTone])}</span>
              <span class="flag-quote">"${escapeHtml(f.quote)}"</span>
            </div>
            <p class="flag-desc">${escapeHtml(f.desc[currentTone])}</p>
          </div>
        `;
      })
      .join('');
  }
}

function renderStaticCopy() {
  const copy = UI_COPY[currentTone];
  document.getElementById('ribbonText').innerHTML = copy.ribbon;
  document.getElementById('heroSub').textContent = copy.heroSub;
  document.getElementById('step1Eyebrow').textContent = copy.step1Eyebrow;
  document.getElementById('checkerHeading').textContent = copy.checkerHeading;
  document.getElementById('presetsLabel').textContent = copy.presetsLabel;
  document.getElementById('channelLabel').textContent = copy.channelLabel;
  document.getElementById('senderLabel').textContent = copy.senderLabel;
  document.getElementById('messageLabel').textContent = copy.messageLabel;
  document.getElementById('liveScanText').textContent = copy.liveScanText;
  document.getElementById('xrayHeading').textContent = copy.xrayHeading;
  document.getElementById('xrayHint').textContent = copy.xrayHint;
  document.getElementById('radarLabel').textContent = copy.radarLabel;
  document.getElementById('flagsHeading').innerHTML = `${copy.flagsHeadingPrefix} (<span id="flagCount">${
    lastAnalysis ? lastAnalysis.detectedFlags.length : 0
  }</span>)`;
  document.getElementById('flagsSub').textContent = copy.flagsSub;
  document.getElementById('step2Eyebrow').textContent = copy.step2Eyebrow;
  document.getElementById('safeHeading').textContent = copy.safeHeading;
  document.getElementById('safeIntro').textContent = copy.safeIntro;
  document.getElementById('officialCardTitle').textContent = copy.officialCardTitle;
  document.getElementById('officialCardBody').innerHTML = copy.officialCardBody;
  document.getElementById('myCardTitle').textContent = copy.myCardTitle;
  document.getElementById('myCardBody').innerHTML = copy.myCardBody;
  document.getElementById('copyBtnText').textContent = copy.copyBtnText;

  renderChecklist();
}

function renderChecklist() {
  const copy = UI_COPY[currentTone];
  const doneCount = checkedSteps.filter(Boolean).length;
  checklistProgress.textContent =
    currentTone === 'en' ? `${doneCount} / 3 DONE` : `${doneCount} / 3 SIAP`;

  safeStepsList.innerHTML = copy.steps
    .map(
      (st, idx) => `
      <label class="check-step ${checkedSteps[idx] ? 'done' : ''}">
        <input type="checkbox" data-step-idx="${idx}" ${checkedSteps[idx] ? 'checked' : ''} />
        <div class="step-text">
          <strong>${escapeHtml(st.title)}</strong>
          <span>${escapeHtml(st.desc)}</span>
        </div>
      </label>
    `
    )
    .join('');
}

function spotlightFlag(flagId) {
  activeFlagId = flagId;
  document.querySelectorAll('.flag-mark').forEach((el) => {
    el.classList.toggle('active-mark', el.dataset.flagId === flagId);
  });
  document.querySelectorAll('.flag-card').forEach((el) => {
    el.classList.toggle('active-card', el.dataset.cardFlagId === flagId);
  });
}

// Event Listeners
document.getElementById('presetChips').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-preset]');
  if (!btn) return;
  const preset = PRESETS[btn.dataset.preset];
  if (!preset) return;

  document.querySelectorAll('#presetChips .chip').forEach((c) => c.classList.remove('active'));
  btn.classList.add('active');

  channelSelect.value = preset.channel;
  senderInput.value = preset.sender;
  messageInput.value = preset.message;
  activeFlagId = null;
  checkedSteps = [false, false, false];
  renderChecklist();
  analyzeAll();
});

document.getElementById('clearBtn').addEventListener('click', () => {
  document.querySelectorAll('#presetChips .chip').forEach((c) => c.classList.remove('active'));
  senderInput.value = '';
  messageInput.value = '';
  activeFlagId = null;
  analyzeAll();
  messageInput.focus();
});

[channelSelect, senderInput, messageInput].forEach((el) => {
  el.addEventListener('input', () => {
    activeFlagId = null;
    analyzeAll();
  });
});

document.querySelectorAll('.tone-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    currentTone = btn.dataset.tone;
    document.querySelectorAll('.tone-btn').forEach((b) => b.classList.toggle('active', b === btn));
    renderStaticCopy();
    renderAnalysis();
  });
});

document.querySelectorAll('.view-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    currentView = btn.dataset.view;
    document.querySelectorAll('.view-btn').forEach((b) => b.classList.toggle('active', b === btn));
    renderAnalysis();
  });
});

highlightedOutput.addEventListener('click', (e) => {
  const mark = e.target.closest('.flag-mark');
  if (!mark) return;
  const id = mark.dataset.flagId;
  spotlightFlag(id);
  const targetCard = flagsList.querySelector(`[data-card-flag-id="${id}"]`);
  if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

flagsList.addEventListener('click', (e) => {
  const card = e.target.closest('[data-card-flag-id]');
  if (!card) return;
  const id = card.dataset.cardFlagId;
  spotlightFlag(id);
  const targetMark = highlightedOutput.querySelector(`[data-flag-id="${id}"]`);
  if (targetMark) targetMark.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

safeStepsList.addEventListener('change', (e) => {
  const cb = e.target.closest('[data-step-idx]');
  if (!cb) return;
  checkedSteps[Number(cb.dataset.stepIdx)] = cb.checked;
  renderChecklist();
});

copyReportBtn.addEventListener('click', async () => {
  if (!lastAnalysis) return;
  const { score, detectedFlags, sender, channel } = lastAnalysis;
  const topReasons = detectedFlags
    .slice(0, 3)
    .map((f) => `- ${f.title[currentTone]}`)
    .join('\n');

  const summary =
    currentTone === 'en'
      ? `SCAMMER HELEPP: SCAM SHIELD FOR MY\nSender: ${sender || 'Unknown'} (${channel})\nRisk Score: ${score}/100\n${
          topReasons || '- Always verify directly via official apps or hotlines.'
        }\nSafe Rule: Never share OTP/TAC/passwords or transfer fees to personal accounts. MY Scam Hotline: NSRC 997.`
      : `SCAMMER HELEPP: SCAM SHIELD FOR MY\nPenghantar: ${sender || 'Tak dikenali'} (${channel})\nSkor Risiko: ${score}/100\n${
          topReasons || '- Sentiasa sahkan terus kat aplikasi atau hotline rasmi.'
        }\nIngat: Jangan bagi OTP/TAC/password atau DuitNow ke akaun peribadi! Kalau dah terkena, terus call NSRC 997.`;

  try {
    await navigator.clipboard.writeText(summary);
    copyToast.textContent = UI_COPY[currentTone].copiedToast;
    setTimeout(() => {
      copyToast.textContent = '';
    }, 2800);
  } catch {
    copyToast.textContent = '[OK] READY TO SHARE.';
  }
});

// Mobile Native-App Bottom Dock Navigation
document.querySelectorAll('.dock-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dock-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.jump);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// PWA Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installAppBtn.classList.remove('hidden');
});

installAppBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installAppBtn.classList.add('hidden');
});

// Register Service Worker for Offline PWA Support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// Initialize
(function init() {
  const initial = PRESETS.whatsapp_mule;
  channelSelect.value = initial.channel;
  senderInput.value = initial.sender;
  messageInput.value = initial.message;
  renderStaticCopy();
  analyzeAll();
})();
