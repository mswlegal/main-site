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

export function extractKeywordsFromRichText(htmlString, maxKeywords = 10) {
  // 1. Strip HTML tags
  const text = htmlString
    .replace(/<[^>]*>/g, ' ') // remove HTML tags
    .replace(/\s+/g, ' ') // normalize whitespace
    .toLowerCase();

  // 2. Tokenize words
  const words = text.match(/\b[a-z]{3,}\b/g) || []; // at least 3-letter words

  // 3. Filter stop words (you can expand this list)
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
    'it',
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

  const filteredWords = words.filter((word) => !stopWords.has(word));

  // 4. Count word frequency
  const frequency = {};
  filteredWords.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  // 5. Sort by frequency and take top N
  const keywords = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1]) // sort descending by count
    .slice(0, maxKeywords) // take top N
    .map((entry) => entry[0]); // return just the words

  return keywords;
}
