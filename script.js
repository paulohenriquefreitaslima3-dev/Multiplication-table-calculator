
const form = document.querySelector("#formulario")
const n1 = document.querySelector("#number")
const n2 = document.querySelector("#multi")
const mt = document.querySelector("#multi-table")

const createTable = (number, mn) => {
    mt.innerHTML = " "

    for (let i = 1; i <= mn; i++) {
        const result = number * i

        const template = `
            <div class="row">
                <div class="opera">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>
        `

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(
        template, "text/html"
        )

        const row = htmlTemplate.querySelector(".row")
        mt.appendChild(row)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(n1.value)
    const mn = Number(n2.value)

    if (n1.value === "" || n2.value === "" || number <= 0 || mn <= 0) {
        return
    }

    createTable(number, mn)
})
