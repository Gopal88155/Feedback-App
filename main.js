let form = document.querySelector("form")
let select = document.querySelector("select")
let textarea = document.querySelector("textarea")
let ul = document.querySelector("ul")

const saveFeedback = (e) => {
  e.preventDefault();
  let li = document.createElement("li")
  let h1 = document.createElement("h1")
  let p = document.createElement("p")
  let delBtn = document.createElement("button")

  h1.innerText = "Rating : " + select.value
  p.innerText = "Review : " + textarea.value
  delBtn.innerText = "Delete"

  li.appendChild(h1)
  li.appendChild(p)
  li.appendChild(delBtn)

  if (select.value > 3) {
    li.className = "list-group-item rounded-0 bg-success"
  } else {
    li.className = "list-group-item rounded-0"
  }

  delBtn.className = "btn btn-sm btn-danger rounded-0 float-end"

  ul.appendChild(li)

  form.reset()
};

form.addEventListener("submit", saveFeedback)

const removeReview = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement
    ul.removeChild(li)
  }
}

ul.addEventListener("click", removeReview)
