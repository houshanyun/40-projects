interface review {
    id: number,
    author: string,
    job: string,
    info: string,
    image: string,
}
const REVIEWS: review[] = [
  {
    id: 1,
    author: '林先生',
    job: 'CEO',
    info: '過不了病說變己天不大小處只精位都男雖功什其此？率寶維價幾滿以，水樂得人境！那為官黨父地醫旅倒景待式一死人算委我經代做國：國面爸都來現腳空北他表希的便老親頭開長爸軍們待他使你學……住美我文國到發，生傳經覺候；十要於土畫她今，巴工銷眾大於問，色玩金投！德先可福曾同西成多費臺民集就專決。',
    image: 'https://picsum.photos/id/1005/400/600'
  },
  {
    id: 2,
    author: '陳先生',
    job: '前端',
    info: '自還率險新所經品任倒分天當校這排！間百以子一了產專就前的這。是本真查一設師談喜喜的，小兩樹知紀行有算兒小我要公有，改表法難的全專性病使一望，由自者國專另花化跟出時的氣量；葉得死跟運動要黑發有阿內導的藝麼性：言奇裡縣格的的看、聯他不著第的來感他，傳樂著金。',
    image: 'https://picsum.photos/id/1010/400/600'
  },
  {
    id: 3,
    author: '吳先生',
    job: '後端',
    info: '遊家來供校又識世力盡稱賣化影話全現業策說電檢出國的有公來蘭過，小你養方善，完書八紀往。小來事體大更是手對可是新天很環下的生變新者離光設把事式……傳使事總食然水兒友情收歌行方是員導術家麼後大觀字接性現觀生神大童年員。解用生走會形他入，是主輪空衣報科的月。',
    image: 'https://picsum.photos/id/1009/400/600'
  },
  {
    id: 4,
    author: '李先生',
    job: 'UI,UX',
    info: '定司使打果女北年風把人還總有來果們仍環；風資看我員興和外，那十再毛，反喜果家清讓動時高處那孩你倒，少美事企母頭果票世，新告一我念；往下選反？慢遠火望地，論在轉再他展參……開推白分中海力此機一最話中頭古現使！都是不車消願保麼地境度個所不較理條藝……福料林又慢這接、速景令多口百是血師都的現幾的人間顧接人好。',
    image: 'https://picsum.photos/id/999/400/600'
  },
  {
    id: 5,
    author: '謝先生',
    job: '業務',
    info: '班國水賽使受馬腦照氣品看接方但麼題水就進人提時此道在分是多總，節資濟過能條學氣大響半有電動只緊空小因因笑造創氣你心子登樣外士人始和，斷國國位你坐公易進行非，別學錯路機高頭同本遊打別；是出的三。代進精算告完馬；顯考生產利身你中白臉候演區愛推下現廣區戰地上。',
    image: 'https://picsum.photos/id/905/400/600'
  },
]

const img = document.getElementById('img') as HTMLImageElement
const author = document.getElementById('author') as HTMLHeadingElement
const job = document.getElementById('job') as HTMLParagraphElement
const info = document.getElementById('info') as HTMLParagraphElement
const prev = document.querySelector('.prev-btn') as HTMLButtonElement
const next = document.querySelector('.next-btn') as HTMLButtonElement
const randomBtn = document.querySelector('.random-btn') as HTMLButtonElement

let currentId: number = 0

window.addEventListener('DOMContentLoaded', () => {
  img.src = REVIEWS[currentId].image
  author.innerHTML = REVIEWS[currentId].author
  job.innerHTML = REVIEWS[currentId].job
  info.innerHTML = REVIEWS[currentId].info
})

prev.addEventListener('click', () => {
  if (currentId <= 0) {
    currentId = 4
  } else {
    currentId--
  }
  img.src = REVIEWS[currentId].image
  author.innerHTML = REVIEWS[currentId].author
  job.innerHTML = REVIEWS[currentId].job
  info.innerHTML = REVIEWS[currentId].info
})

next.addEventListener('click', () => {
  if (currentId >= 4) {
    currentId = 0
  } else {
    currentId++
  }
  img.src = REVIEWS[currentId].image
  author.innerHTML = REVIEWS[currentId].author
  job.innerHTML = REVIEWS[currentId].job
  info.innerHTML = REVIEWS[currentId].info
})

randomBtn.addEventListener('click', () => {
  currentId = Math.floor(Math.random()*5)
  img.src = REVIEWS[currentId].image
  author.innerHTML = REVIEWS[currentId].author
  job.innerHTML = REVIEWS[currentId].job
  info.innerHTML = REVIEWS[currentId].info
})
