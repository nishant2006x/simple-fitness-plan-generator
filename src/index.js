// must function to get form values
function must(id) {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error('Missing element with id="' + id + '"');
  }
  return el.value;
}

// cool typewriter effect for title
function typeWriter(el, text, speed = 45) {
  if (!el) return;
  el.textContent = "";
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      el.textContent += text.charAt(i);
    }, i * speed);
  }
}


// submit form code
async function submitForm(event) {
  event.preventDefault();

  const data = {
    age: must("userInputAge"),
    gender: must("userInputGender"),

    feet: must("userInputFeet"),
    inches: must("userInputInches"),
    currentWeight: must("userInputCurrentWeight"),
    goalWeight: must("goalWeight"),

    liftingGoal: must("liftingGoal"),
    split: must("split"),

    cardioGoal: must("cardioGoal"),
    dietType: must("dietType"),

    includeRecovery: must("includeRecovery"),
  };

  localStorage.setItem("ezFormData", JSON.stringify(data));
  // ensuring safety with try-catch
  try {
    window.location.assign("src/view_result.html");
  } catch {
    alert("Could not open results page. File may have been moved.");
  }
}

typeWriter(document.getElementById("title"), "Simple Fitness Plan Generator ✅", 45);
document.getElementById("myForm").addEventListener("submit", submitForm);
