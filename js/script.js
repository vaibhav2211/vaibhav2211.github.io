const sendMail = async () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  const subjectInput = document.getElementById("subject");
  const msg = document.getElementById("msg");
  try {
    if (
      !(
        nameInput.value ||
        emailInput.value ||
        phoneInput.value ||
        messageInput.value ||
        subjectInput.value
      )
    ) {
      throw new Error("enter all fields");
    }
    const button = document.getElementById("submit");
    button.innerHTML = "<div class=' spinner-border-sm spinner-border'/>";
    button.disabled = true;
    const response = await fetch("https://webitor0.herokuapp.com/contact", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
      }),
    });
    nameInput.value = null;
    emailInput.value = null;
    phoneInput.value = null;
    messageInput.value = null;
    subjectInput.value = null;
    msg.className = "text-success text-capitalize";
    msg.innerText = "message sent successfully";
    button.innerHTML = "send message";
    button.disabled = false;
  } catch (error) {
    msg.className = "text-danger text-capitalize";
    msg.innerText = error.message;
  }
};
