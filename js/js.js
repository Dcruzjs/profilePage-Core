const yourConnections = document.querySelector("div.yourConnections");
//Update Profile
const editElem = document.querySelector(".edit");
editElem.addEventListener("click", updateProfile);

//turn down request
let rejectBtns = document.querySelectorAll("span.reject");
rejectBtns = Array.from(rejectBtns);
rejectBtns.forEach((elem) => elem.addEventListener("click", rejectRequest));

//Accept a Request
let acceptBtns = document.querySelectorAll("span.check");
acceptBtns = Array.from(acceptBtns);
acceptBtns.forEach((elem) => elem.addEventListener("click", acceptRequest));

//Updating the request number
function updateRequests() {
  const resquestNumber = document.querySelector(
    "div.connectionRequest"
  ).childElementCount;

  const requestNum = document.querySelector("i.requestNumber");
  requestNum.textContent = resquestNumber;
}

//Updating the connection number
function updateConnections() {
  const yourConnections = document.querySelector(
    "div.yourConnections"
  ).childElementCount;

  const connectionNum = document.querySelector("i.connectionNumber");
  connectionNum.textContent = yourConnections;
}

//Update name and address
function updateProfile() {
  let newName = prompt("Your name:");
  document.querySelector("span.name").textContent = newName;
  let newAddress = prompt("Address: ");
  document.querySelector("span.address").lastChild.textContent = newAddress;
}

//remove request
function rejectRequest(e) {
  const spanReject = e.target.parentNode;
  const request = spanReject.parentNode;
  request.remove();
  updateRequests();
}

function acceptRequest(e) {
  const spanAccept = e.target.parentNode;
  const spanReject = spanAccept.nextElementSibling;
  const request = spanAccept.parentNode;
  const connectionRequest = request.parentNode;
  const removedChild = connectionRequest.removeChild(request);
  spanAccept.remove();
  spanReject.remove();
  yourConnections.append(removedChild);
  updateRequests();
  updateConnections();
}

updateRequests();
updateConnections();
