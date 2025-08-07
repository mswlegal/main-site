const page_preloader = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  let preloader = document.getElementById('preloader');

  if (preloader) {
    const time = isMobile ? 100 : 800;
    setTimeout(function () {
      preloader.classList.add('preloaded');
    }, time);
    setTimeout(function () {
      preloader.remove();
    }, 2000);
  }
};

export const isMobileDevice = () => {
  return window.matchMedia('(max-width: 767px)').matches;
};

export const customCursor = () => {
  if (isMobileDevice()) return;
  var myCursor = document.querySelectorAll('.mouse-cursor'),
    hamburger = document.querySelector('.hamburger'),
    kura_tm_topbar = document.querySelector('.kura_tm_topbar '),
    pointer = document.querySelector('.cursor-pointer'),
    e = document.querySelector('.cursor-inner'),
    t = document.querySelector('.cursor-outer');

  function mouseEvent(element) {
    element.addEventListener('mouseenter', function () {
      e.classList.add('cursor-hover'), t.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', function () {
      e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover');
    });
  }
  if (myCursor.length) {
    if (document.body) {
      /* eslint-disable no-unused-vars */
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o || (t.style.transform = 'translate(' + s.clientX + 'px, ' + s.clientY + 'px)'),
          (e.style.transform = 'translate(' + s.clientX + 'px, ' + s.clientY + 'px)'),
          (n = s.clientY),
          (i = s.clientX);
      }),
        document.body.addEventListener(
          'mouseenter',
          // "a,.kura_tm_topbar .trigger, .cursor-pointer",
          function () {
            let a = document.querySelectorAll('a');
            e.classList.add('cursor-inner'), t.classList.add('cursor-outer');

            for (let i = 0; i < a.length; i++) {
              const element = a[i];
              mouseEvent(element);
            }

            hamburger && mouseEvent(hamburger);
            kura_tm_topbar && mouseEvent(kura_tm_topbar);
            pointer && mouseEvent(pointer);
          }
        ),
        (e.style.visibility = 'visible'),
        (t.style.visibility = 'visible');
    }
  }
};

export const preloader = () => {
  page_preloader();
  setTimeout(() => {
    document.querySelector('body').classList.add('opened');
  }, 1500);
};

export const activeSkillProgress = () => {
  const progress_inner = document.querySelectorAll('.skillsInner___'),
    triggerBottom = (window.innerHeight / 5) * 5;
  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top,
      boxElement = box.getElementsByClassName('bar'),
      boxItem = boxElement[0],
      pWidth = box.getAttribute('data-value');
    if (boxTop < triggerBottom) {
      boxItem.classList.add('open');
      boxItem.getElementsByClassName('bar_in')[0].style.width = `${pWidth}%`;
    } else {
      boxItem.classList.remove('open');
    }
  });
};

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
};

// Data image
export const dataImage = () => {
  let d = document.querySelectorAll('[data-img-url');
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute('data-img-url')})`;
  }
};

// Moveing effect
export const movingAnimation = () => {
  var detail = document.querySelectorAll('.moving_effect');
  var offset = 0;
  detail.forEach((element) => {
    var direction = element.getAttribute('data-direction');
    window.addEventListener('scroll', function () {
      offset = window.scrollY;
      var h = window.innerHeight;
      var i = element.getBoundingClientRect().top + window.scrollY - offset - h;
      if (element.getAttribute('data-reverse') == 'yes') {
        i *= -1;
      }
      var x = direction === 'x' ? (i * 70) / h : 0;
      var y = direction === 'x' ? 0 : (i * 70) / h;
      if (element.getAttribute('data-reverse') == 'yes') {
        i *= -1;
      }
      if (i * -1 < h + 300 && i < 300) {
        element.style.transform = `translate3d(${x}px,${y}px, 0px)`;
      }
    });
  });
};

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export function getFirstAndLastName(fullName) {
  const trimmedName = fullName.trim();
  const nameParts = trimmedName.split(' ');

  // Handle cases with only a single name or no name
  if (nameParts.length === 0) {
    return { firstName: '', lastName: '' };
  } else if (nameParts.length === 1) {
    return { firstName: nameParts[0], lastName: '' };
  } else {
    // The first element is the first name
    const firstName = nameParts[0];

    // The last element is the last name (handles multi-word last names)
    const lastName = nameParts[nameParts.length - 1];

    return { firstName, lastName };
  }
}

export function sanitizeInput(input) {
  return input.replace(/</g, '').replace(/>/g, '').replace(/'/g, '').replace(/"/g, '');
}

export function formatPhoneNumber(value) {
  const number = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  if (!number) return value;
  if (number[2]) {
    return `(${number[1]}) ${number[2]}${number[3] ? ' - ' + number[3] : ''}`;
  }
  return number[1];
}

// export function extractKeywordsFromRichText(htmlString, maxKeywords = 10) {
//   // 1. Strip HTML tags
//   const text = htmlString
//     .replace(/<[^>]*>/g, ' ') // remove HTML tags
//     .replace(/\s+/g, ' ') // normalize whitespace
//     .toLowerCase();

//   // 2. Tokenize words
//   const words = text.match(/\b[a-z]{3,}\b/g) || []; // at least 3-letter words

//   // 3. Filter stop words (you can expand this list)
//   const stopWords = new Set([
//     'the',
//     'and',
//     'for',
//     'are',
//     'but',
//     'not',
//     'with',
//     'that',
//     'this',
//     'from',
//     'have',
//     'was',
//     'you',
//     'your',
//     'all',
//     'can',
//     'has',
//     'our',
//     'more',
//     'will',
//     'they',
//     'their',
//     'what',
//     'about',
//     'when',
//     'who',
//     'how',
//     'why',
//     'been',
//     'had',
//     'most',
//     'a',
//     'an',
//     'if',
//     'it',
//     'its',
//     'is',
//     'in',
//     'on',
//     'at',
//     'as',
//     'of',
//     'do',
//     'did',
//     'does',
//     'be',
//     'being',
//     'so',
//     'or',
//     'than',
//     'then',
//     'there',
//     'here',
//     'these',
//     'those',
//     'such',
//     'each',
//     'any',
//     'some',
//     'much',
//     'many',
//     'few',
//     'them',
//     'into',
//     'over',
//     'out',
//     'up',
//     'down',
//     'off',
//     'just',
//     'only',
//     'even',
//     'ever',
//     'again',
//     'me',
//     'my',
//     'mine',
//     'we',
//     'us',
//     'he',
//     'him',
//     'his',
//     'she',
//     'her',
//     'hers',
//     'it',
//     'theirs',
//     'someone',
//     'anyone',
//     'everyone',
//     'everything',
//     'nothing',
//     'now',
//     'today',
//     'yesterday',
//     'tomorrow',
//     'always',
//     'never',
//     'often',
//     'sometimes',
//     'soon',
//     'later',
//     'before',
//     'after',
//     'already',
//     'still',
//     'very',
//     'really',
//     'quite',
//     'too',
//     'enough',
//     'almost',
//     'maybe',
//     'perhaps',
//     'probably',
//     'actually',
//     'basically',
//     'would',
//     'should',
//     'could',
//     'may',
//     'might',
//     'must',
//     'shall',
//     'code'
//   ]);

//   const filteredWords = words.filter((word) => !stopWords.has(word));

//   // 4. Count word frequency
//   const frequency = {};
//   filteredWords.forEach((word) => {
//     frequency[word] = (frequency[word] || 0) + 1;
//   });

//   // 5. Sort by frequency and take top N
//   const keywords = Object.entries(frequency)
//     .sort((a, b) => b[1] - a[1]) // sort descending by count
//     .slice(0, maxKeywords) // take top N
//     .map((entry) => entry[0]); // return just the words

//   return keywords;
// }
export function extractKeywordsFromRichText(htmlString, maxKeywords = 10, options = {}) {
  const { title = '', description = '', topKnownKeywords = [] } = options;

  const tokenize = (text) => {
    return (
      text
        .toLowerCase()
        .replace(/<[^>]*>/g, ' ') // remove HTML tags
        .replace(/\s+/g, ' ') // normalize whitespace
        .match(/\b[a-z]{3,}\b/g) || [] // words with at least 3 letters
    );
  };

  const stopWords = new Set([
    'the',
    'and',
    'for',
    'are',
    'but',
    'not',
    'with',
    'that',
    'this',
    'from',
    'have',
    'was',
    'you',
    'your',
    'all',
    'can',
    'has',
    'our',
    'more',
    'will',
    'they',
    'their',
    'what',
    'about',
    'when',
    'who',
    'how',
    'why',
    'been',
    'had',
    'most',
    'a',
    'an',
    'if',
    'it',
    'its',
    'is',
    'in',
    'on',
    'at',
    'as',
    'of',
    'do',
    'did',
    'does',
    'be',
    'being',
    'so',
    'or',
    'than',
    'then',
    'there',
    'here',
    'these',
    'those',
    'such',
    'each',
    'any',
    'some',
    'much',
    'many',
    'few',
    'them',
    'into',
    'over',
    'out',
    'up',
    'down',
    'off',
    'just',
    'only',
    'even',
    'ever',
    'again',
    'me',
    'my',
    'mine',
    'we',
    'us',
    'he',
    'him',
    'his',
    'she',
    'her',
    'hers',
    'theirs',
    'someone',
    'anyone',
    'everyone',
    'everything',
    'nothing',
    'now',
    'today',
    'yesterday',
    'tomorrow',
    'always',
    'never',
    'often',
    'sometimes',
    'soon',
    'later',
    'before',
    'after',
    'already',
    'still',
    'very',
    'really',
    'quite',
    'too',
    'enough',
    'almost',
    'maybe',
    'perhaps',
    'probably',
    'actually',
    'basically',
    'would',
    'should',
    'could',
    'may',
    'might',
    'must',
    'shall',
    'code'
  ]);

  // Helper: get top N keywords from text
  function getTopKeywords(text, topN) {
    const words = tokenize(text).filter((w) => !stopWords.has(w));
    const freq = {};
    words.forEach((w) => (freq[w] = (freq[w] || 0) + 1));
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, topN)
      .map(([word]) => word);
  }

  // Extract top 5 from each source
  const titleKeywords = getTopKeywords(title, 5);
  const descKeywords = getTopKeywords(description, 5);
  const htmlKeywords = getTopKeywords(htmlString, 5);

  // Combine extracted keywords (unique)
  const extractedSet = new Set([...titleKeywords, ...descKeywords, ...htmlKeywords]);
  const extractedKeywords = [...extractedSet];

  // Normalize known keywords
  const knownLower = topKnownKeywords.map((k) => k.toLowerCase());

  // Define a helper to check if two keywords are related:
  // Related if either is substring of the other
  function isRelated(a, b) {
    return a.includes(b) || b.includes(a);
  }

  // Filter extracted keywords to keep only those related to known keywords
  const relatedExtracted = extractedKeywords.filter((ek) => knownLower.some((kk) => isRelated(ek, kk)));

  // Combine: known keywords + related extracted keywords (remove duplicates)
  // Keep known keywords with original casing
  const combinedSet = new Set(topKnownKeywords);

  // Add related extracted keywords only if not in known keywords (case-insensitive)
  relatedExtracted.forEach((kw) => {
    if (!knownLower.includes(kw.toLowerCase())) {
      combinedSet.add(kw);
    }
  });

  // Return limited by maxKeywords
  return [...combinedSet].slice(0, maxKeywords);
}

export function generateSmartKeywords({
  title = '',
  description = '',
  topKnownKeywords = [],
  maxKeywords = 10
}) {
  const text = `${title} ${description}`.toLowerCase();
  const baseKeywords = new Set();

  const stopWords = new Set([
    'a',
    'about',
    'after',
    'again',
    'all',
    'almost',
    'already',
    'also',
    'an',
    'and',
    'any',
    'anyone',
    'are',
    'as',
    'at',
    'be',
    'because',
    'been',
    'before',
    'being',
    'but',
    'by',
    'can',
    'clients',
    'code',
    'contact',
    'could',
    'did',
    'do',
    'does',
    'down',
    'each',
    'enough',
    'even',
    'ever',
    'everything',
    'example',
    'few',
    'fight',
    'for',
    'free',
    'from',
    'get',
    'had',
    'has',
    'have',
    'he',
    'her',
    'here',
    'hers',
    'him',
    'his',
    'how',
    'hundreds',
    'if',
    'in',
    'info',
    'into',
    'is',
    'it',
    'its',
    'just',
    'later',
    'loss',
    'loved',
    'many',
    'may',
    'me',
    'millions',
    'mine',
    'more',
    'most',
    'much',
    'must',
    'my',
    'never',
    'no',
    'not',
    'nothing',
    'now',
    'of',
    'off',
    'often',
    'on',
    'one',
    'only',
    'or',
    'our',
    'out',
    'over',
    'pain',
    'perhaps',
    'probably',
    'quite',
    'really',
    'shall',
    'she',
    'should',
    'so',
    'some',
    'someone',
    'sometimes',
    'soon',
    'still',
    'such',
    'suffer',
    'that',
    'the',
    'their',
    'theirs',
    'them',
    'then',
    'there',
    'these',
    'they',
    'this',
    'those',
    'though',
    'through',
    'to',
    'today',
    'tomorrow',
    'too',
    'up',
    'us',
    'very',
    'was',
    'we',
    'what',
    'when',
    'who',
    'why',
    'will',
    'with',
    'would',
    'you',
    'your',
    'yourself',
    'yearly',
    'yesterday'
  ]);

  const banWords = new Set(['americans', 'people', 'individuals']);

  const normalize = (str) =>
    str
      .split(' ')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

  // Add title and smart variations
  if (title.length > 3) {
    const t = title.trim();
    baseKeywords.add(normalize(t));
    baseKeywords.add(normalize(`${t} Lawyer`));
    baseKeywords.add(normalize(`${t} Attorney`));
    baseKeywords.add(normalize(`${t} Lawyer Near Me`));
  }

  // Extract useful words from text
  const importantWords = text.match(/\b[a-z]{4,}\b/g) || [];
  importantWords
    .filter((w) => !stopWords.has(w) && !banWords.has(w))
    .forEach((word) => baseKeywords.add(normalize(word)));

  // Match top-known keywords (if partial match in text)
  const matchedKnown = topKnownKeywords.filter((kw) => text.includes(kw.toLowerCase()));

  // Add more from topKnown if needed
  const minMatched = Math.floor(maxKeywords / 2);
  const neededExtras = Math.max(0, minMatched - matchedKnown.length);
  const additionalKnown = topKnownKeywords.filter((kw) => !matchedKnown.includes(kw)).slice(0, neededExtras);

  // Combine everything
  const finalSet = new Set([
    ...Array.from(baseKeywords),
    ...matchedKnown.map(normalize),
    ...additionalKnown.map(normalize)
  ]);

  return Array.from(finalSet).slice(0, maxKeywords);
}

export function getLastMonthYear() {
  const now = new Date();
  const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const monthName = lastMonthDate.toLocaleString('default', { month: 'long' });
  const year = lastMonthDate.getFullYear();
  return `${monthName} ${year}`;
}
