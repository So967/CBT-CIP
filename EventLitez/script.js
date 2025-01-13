document.addEventListener("DOMContentLoaded", () => {
  const eventForm = document.getElementById("eventForm");
  const eventList = document.getElementById("eventList");

  eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const time = document.getElementById("eventTime").value;
    const location = document.getElementById("eventLocation").value;
    const eventItem = document.createElement("li");
    eventItem.textContent = `${name} - ${date} at ${time}, ${location}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    eventItem.appendChild(deleteButton);

    eventList.appendChild(eventItem);

    deleteButton.addEventListener("click", function () {
      eventList.removeChild(eventItem);
    });
    eventForm.reset();
  });
});
