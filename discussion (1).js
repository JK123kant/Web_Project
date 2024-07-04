const input_box = document.getElementById("inputbox");
const text_area = document.getElementById("textarea");
const questionhadding = document.getElementById("question_hadding");
const question = document.getElementById("addquestion");
const container = document.getElementById("question_container");
const welcome_page = document.getElementById("welcome_page");
const responseform = document.getElementById("response_form");

const responseName = document.getElementById("responsename");
const responseComment = document.getElementById("responsecomment");

function myFunction() {
    welcome_page.classList.remove("hidden");
    responseform.classList.add("hidden");
}

function submit_question() {
    if (input_box.value === '') {
        alert("Enter Question Subject");

    }
    else if (text_area.value === '') {
        alert("Enter desired Question");
    }
    else {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = input_box.value;

        let p = document.createElement("p");
        p.textContent = text_area.value;

        let bar = document.createElement("hr");

        div.appendChild(h2);
        div.appendChild(p);
        container.appendChild(div);
        container.appendChild(bar);
        input_box.value = '';
        text_area.value = '';

        div.addEventListener('click', function () {
            add_to_right_pane(h2, p);
        });
    }
}

const questioncontainer_in_response = document.getElementById("questioncontainer");

const rslvbtn = document.getElementById("resolvebutton");

const addResponse = document.getElementById("response_container");

const response_container = document.getElementById("response_container");

const responseSubmit = document.getElementById("responsesubmitbutton");

const h3 = document.getElementById("questionHeadingResponseForm");
const p = document.getElementById("questionResponseForm");

function add_to_right_pane(questionHeading, question1) {
    welcome_page.classList.add("hidden");
    responseform.classList.remove("hidden");

    h3.textContent = questionHeading.textContent;

    p.textContent = question1.textContent;

    var oldData = null;
    let value = h3.textContent + p.textContent;
    oldData = localStorage.getItem(value);

    if (oldData !== null) {
        response_container.innerHTML = oldData;
    }
    else {
        response_container.innerHTML = "";
    }

    responseSubmit.addEventListener("click", function (event) {
        if ((responseName.value !== "") && (responseComment.value !== "")) {
            event.preventDefault();
            const div = document.createElement("div");
            div.id = "Jai3";

            const name = document.createElement("h3");

            const answer = document.createElement("p");

            const hr = document.createElement("hr");

            name.textContent = responseName.value;
            answer.textContent = responseComment.value;

            div.appendChild(name);
            div.appendChild(jai2);
            div.appendChild(answer);
            response_container.appendChild(div);

            let user = h3.textContent + p.textContent;
            localStorage.setItem(user, response_container.innerHTML);

            welcome_page.classList.add("hidden");
            responseform.classList.remove("hidden");

            responseName.value = "";
            responseComment.value = "";
        }
    });
}


