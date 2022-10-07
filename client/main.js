const baseURL = "http://localhost:8080/api";

const getchoreList = document.getElementById("getchoresbtn");
const add2chorelistBtn = document.getElementById("add2chorelist");
const deleteChoreBtn = document.getElementById("delete-chore-btn");
const deletclr = document.getElementById("delete-chore-btn");

let inputs = document.querySelectorAll("input");

const displayChores = (chores) => {
  const choreList = document.getElementById("chorelist");
  choreList.innerHTML = "";

  for (let i = 0; i < chores.length; i++) {
    let newChore = document.createElement("li");
    newChore.textContent = chores[i];
    choreList.appendChild(newChore);
  }
};

const getchores = () => {
  axios
    .get(`${baseURL}/chores`)
    .then((res) => {
      displayChores(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const postChorename = () => {
  const nameInput = document.getElementById("chorename");
  const choreBody = {
    choreName: nameInput.value,
  };
  if (nameInput.value == "") {
    swal("Enter a Chore");
  } else {
    axios
      .post(`${baseURL}/chores`, choreBody)
      .then((res) => {
        nameInput.value = "";
        displayChores(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const deletechore = () => {
  const deleteInput = document.getElementById("deleteinput");
  if (deleteInput.value === "") {
    swal("Enter Chore to Delete");
  } else {
    axios
      .delete(`${baseURL}/chores/${deleteInput.value}`)
      .then((res) => {
        displayChores(res.data);
      })
      .catch((err) => {
        console.log(err);
        swal(err.response.data);
      });
  }
};

getchoresbtn.addEventListener("click", getchores);
add2chorelist.addEventListener("click", postChorename);
deleteChoreBtn.addEventListener("click", deletechore);
deletclr.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});
