var side_bar = document.querySelector(".side-bar-container");
var i_box = document.querySelector(".i-box");
function sideBar() {
  side_bar.classList.toggle("right");
  i_box.classList.toggle("bar-right");
}

function faq() {
  document.querySelectorAll(".faq").classList.toggle("faq-class");
  document.querySelectorAll(".arrow").classList.toggle("transform");
}

function bar() {
  if (side_bar.classList.contains("right")) {
    i_box.classList.remove("bar-right");
    side_bar.classList.remove("right");
  }
}

const dataToggle = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum incidunt maiores eos iusto rem!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum incidunt maiores eos iusto rem!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum incidunt maiores eos iusto rem!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum incidunt maiores eos iusto rem!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum incidunt maiores eos iusto rem!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum incidunt maiores eos iusto rem!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum incidunt maiores eos iusto rem!",
  },
];

function openFAQ(rotateClassName, dataClassName) {
  document.querySelector(dataClassName).classList.toggle("faq-class");
  document.querySelector(rotateClassName).classList.toggle("transform");
}

function loopFAQ() {
  var loopfaq = "";
  for (var i = 0; i < dataToggle.length; i++) {
    var loop = dataToggle[i];
    loopfaq += `
    <div
              class="faq faq-${i}"
              onclick="openFAQ('.arrow-${i}','.faq-${i}')"
            >
              <div class="visible">
                <p class="question">${loop.title}</p>
                <i class="fas fa-chevron-down arrow arrow-${i}"></i>
              </div>
              <div class="hidden-box">
                <p class="answer">
                  ${loop.description}
                </p>
              </div>
            </div>
            
    `;
  }
  document.querySelector(".faq-main-box").innerHTML = loopfaq;
}

loopFAQ();

function filter(category) {
  const portfolios = document.getElementsByClassName("portfolio");
  for (let l = 0; l < portfolios.length; l++) {
    const portfolio = portfolios[l];

    if (category === "all") {
      portfolio.classList.add("hidden");
      setTimeout(() => {
        portfolio.classList.remove("hidden");
      }, 5);
    } else {
      if (portfolio.classList.contains(category)) {
        portfolio.classList.add("hidden");
        setTimeout(() => {
          portfolio.classList.remove("hidden");
        }, 5);
      } else {
        portfolio.classList.add("hidden");
      }
    }

    console.log(portfolio);
  }
}
