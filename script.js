const selectDay = document.querySelector('#day');
const selectMonth = document.querySelector('#month');
const button = document.querySelector('button');
const reset = document.querySelector('#reset');
button.addEventListener('click', getHoroscope);

function putNumsInOption(day,month) {
  putDaysInOption(day);
  putMonthsInOption(month);
}

function putDaysInOption(name) {
  for (let i = 1; i <= 31; i++) {
    name.innerHTML += `<option>${i}</option>`
  }
}
function putMonthsInOption(name) {
  for (let i = 1; i <= 12; i++) {
    name.innerHTML += `<option>${i}</option>`
  }
}
putNumsInOption(selectDay, selectMonth)

function getHoroscope() {
  const dayValue = Number(selectDay.value);
  const monthValue = Number(selectMonth.value);
  const result = document.querySelector('#result');
  const text = document.querySelector('#text')

  if ( (dayValue >= 22 && monthValue === 12) || (dayValue <= 19 && monthValue === 1) ) {
    result.innerText = 'Capricorn';
    text.innerText = `You should feel secure and confident in your path as the new year rolls in, dear Capricorn, because the sun, Mercury, Pluto, and Venus are all traveling through your sign. These vibes can push you to embrace transformation before Pluto leaves your sign this spring, so be sure to take a proactive approach toward the changes you seek. Luckily, an increase in your popularity can make it easier to find new opportunities, because people are more willing to open doors and give you a leg up.`
  } else if ((dayValue >= 20 && monthValue === 1) || (dayValue <= 18 && monthValue === 2)) {
    result.innerText = 'Aquarius';
    text.innerText = `Though the emergence of a new year typically conjures images of large parties, bottles of bubbly, and people celebrating, you might not be in the most extroverted mood with four celestial bodies traveling through your solar twelfth house. That’s right, dear Aquarius, 2023 threatens to kick off with you stuck in a bit of rut, potentially causing you to slip into hermit mode. Luckily, the stars support your desire for solitude, especially once Venus moves into your sign on January 2, encouraging you to prioritize self-care, restoration, and grace through the coming weeks.`
  } else if ((dayValue >= 19 && monthValue === 2) || (dayValue <= 20 && monthValue === 3)) {
    result.innerText = 'Pisces';
    text.innerText = `You might begin to feel as though you’re the center of your social circle, dear Pisces, because four celestial bodies are moving through the sector of your chart that governs community. Organizing large gatherings and giving back to your community can be particularly satisfying as the stars push you to bring people together. While this cosmic climate is poised to elevate your popularity, you might begin to feel overly responsible for the well-being of those around you. Use these vibes to your advantage by making new connections and looking for ways to improve your social standing, but avoid taking on more emotional labor than you can handle.`
  } else if ((dayValue >= 21 && monthValue === 3) || (dayValue <= 19 && monthValue === 4)) {
    result.innerText = 'Aries';
    text.innerText = `The new year will bring forth resolutions around your career path and drive for success, dear Aries, because four celestial bodies are moving through Capricorn and the sector of your chart that governs professional ambitions. However, with Mercury traveling backward through the skies, it might not hurt to look to past successes in order to formulate a plan for how to move forward.`
  } else if ((dayValue >= 20 && monthValue === 4) || (dayValue <= 20 && monthValue === 5)) {
    result.innerText = 'Taurus';
    text.innerText = `Good vibes will usher you into the new year, dear Taurus, because four celestial bodies are traveling through Capricorn and the sector of your chart that governs spirituality. This cosmic climate is poised to elevate your intuition and luck, making it a great time to focus on manifesting your hopes and dreams.`
  } else if ((dayValue >= 21 && monthValue === 5) || (dayValue <= 20 && monthValue === 6)) {
    result.innerText = 'Gemini';
    text.innerText = `You’ll feel galvanized by the idea of transforming your life as the new year kicks off, dear Gemini, thanks to a series of celestial bodies traveling through Capricorn and your solar eighth house. This cosmic climate has a destructive yet cleansing energy, providing you with an opportunity to unapologetically cut ties with anyone or anything that is no longer serving you. Don’t feel bad about implementing strict boundaries, blocking old flames, and removing yourself from unhealthy situations, because doing so will provide you with a great sense of relief and the freedom to move forward unhindered by these sources of drama.`
  } else if ((dayValue >= 21 && monthValue === 6) || (dayValue <= 22 && monthValue === 7)) {
    result.innerText = 'Cancer';
    text.innerText = `Love will be at the forefront of your mind as the new year kicks off, dear Cancer, because four celestial bodies are moving through the sector of your chart that governs matters of the heart. Whether you’re single or in a relationship, you might want to consider setting resolutions around how to nurture healthy and supportive partnerships moving forward. However, these sentiments apply to all of your closest bonds, whether romantic or platonic.`
  } else if ((dayValue >= 23 && monthValue === 7) || (dayValue <= 22 && monthValue === 8)) {
    result.innerText = 'Leo';
    text.innerText = `Your New Year’s resolutions should be motivated by improving your health and wellness, dear Leo, because four celestial bodies are traveling through your solar sixth house. Whether you need to drink less caffeine, get better sleep, or carve out more time for relaxation, now is the time to figure out how these changes fit into your daily routine. This is the most supportive time of the year for you when it comes to altering your habits, making it important that you analyze your lifestyle in the name of elevating your efficiency, organizational skills, and overall well-being.`
  } else if ((dayValue >= 23 && monthValue === 8) || (dayValue <= 22 && monthValue === 9)) {
    result.innerText = 'Virgo';
    text.innerText = `Give yourself permission to get a little creative with your New Year’s resolutions, dear Virgo, because four celestial bodies are moving through Capricorn and your solar fifth house. Even if you are typically one of the more reserved members of the zodiac, this cosmic climate is all about having fun, enjoying life, and leading with an open heart. Your artistic abilities and social skills can also benefit from a significant boost, and an extroverted disposition will suddenly wash over you, allowing you to forge new bonds. However, you should be mindful to nurture your existing friendships as well, especially when it comes to your siblings and best buds.`
  } else if ((dayValue >= 23 && monthValue === 9) || (dayValue <= 22 && monthValue === 10)) {
    result.innerText = 'Libra';
    text.innerText = `Plan on structuring your New Year’s resolutions around healing, dear Libra, because four celestial bodies are moving through Capricorn and your solar fourth house. Though these vibes might inspire you to nurture others, your energy would be better spent catering to your own emotional, mental, and physical needs. A desire to move slowly and lounge at home could also come into play, and you’ll want to listen to your body when it tells you that it’s time to lay low. There’s also a good chance that your mood will fluctuate, shifting from closed off and desensitized to emotionally charged and full of gratitude. Give yourself permission to ride these waves, and try not to get upset by how others are feeling.`
  } else if ((dayValue >= 23 && monthValue === 10) || (dayValue <= 21 && monthValue === 11)) {
    result.innerText = 'Scorpio';
    text.innerText = `People are drawn to your sage advice and emotional depth right now, dear Scorpio, because four celestial bodies are moving through sensible Capricorn and the sector of your chart that governs communication. Though the new year tends to bring out anxieties and excitement in the collective, try not to overextend yourself with emotional heavy lifting for anyone who wouldn’t do the same for you. On a personal level, these vibes are great for massaging that brilliant mind of yours, so you might want to set resolutions around learning a new skill or reading more.
`
  } else if ((dayValue >= 22 && monthValue === 11) || (dayValue <= 21 && monthValue === 12)) {
    result.innerText = 'Sagittarius';
    text.innerText = `You’ll feel inspired to set financial resolutions for yourself in 2023, dear Sagittarius, because four celestial bodies are traveling through the sector of your chart that governs money and materialism. These vibes are perfect for investing in yourself and opting to purchase fewer yet nicer things in the coming year as the stars make an effort to refine your taste in clothing, appliances, food, and cosmetics. Luckily, as long as you stay dedicated to achieving success, you should have plenty of income to work with.`
  } else {
    console.log('error')
  }

  reset.style.display = 'block'
  reset.addEventListener('click', function() {
    result.innerText = '';
    text.innerText = '';
    reset.style.display = 'none'
  })
}

