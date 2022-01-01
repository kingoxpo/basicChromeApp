const quotes = [
  {
    quote: "누구나 다 그럴듯한 계획이 있다. 처맞기 전까지는",
    author: "Mike Tyson",
    bg: "0.jpg",
  },
  {
    quote: "끝날 때까지 끝난 게 아니다.",
    author: "Yogi Berra",
    bg: "1.jpg",
  },
  {
    quote: "폼은 일시적이지만, 클래스는 영원하다.",
    author: "Bill Shankly",
    bg: "2.jpeg",
  },
  {
    quote: "모든 단점은 장점이 될 수도 있다.",
    author: "Lionel Messi",
    bg: "3.jpg",
  },
  {
    quote: "내려갈 팀은 내려간다.",
    author: "김재박",
    bg: "4.jpg",
  },
  {
    quote: "내가 선을 긋는 순간, 나의 한계가 결정된다.",
    author: "심권호",
    bg: "5.jpeg",
  },
  {
    quote: "강한팀이 이기는게 아니라 이긴팀이 강한 것이다.",
    author: "Franz Anton Beckenbauer",
    bg: "6.jpg",
  },
  {
    quote: "나보다 더 땀을 흘린 선수가 있다면, 금메달을 가져가도 좋다.",
    author: "김현우",
    bg: "7.jpeg",
  },
  {
    quote:
      "나는 인생에서 실패를 거듭했다. 그리고 그것이 바로 내가 성공한 이유다.",
    author: "michael jordan",
    bg: "8.jpg",
  },
  {
    quote:
      "승리로 아주 조금 배울 수 있는 것들이 있다. 하지만 패배를 통해선 모든 걸 배울 수 있다.",
    author: "Christy Mathewson",
    bg: "9.jpg",
  },
];

const quote = document.querySelector("#qoutes span:first-child");
const author = document.querySelector("#qoutes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

const wallPaper = document.createElement("img");
wallPaper.src = `img/${todayQuote.bg}`;
document.body.append(wallPaper);
