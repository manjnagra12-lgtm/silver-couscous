// ==============================================================================
// SCRIPT.JS: The Game Engine
// Controls: Starting rounds, checking guesses, scoring, hints, and strikes.
// ==============================================================================

// ------------------------------------------------------------------------------
// 1. GRAB HTML ELEMENTS
// Saves elements into variables so JavaScript can read and change them easily.
// ------------------------------------------------------------------------------
const seasonHeading = document.getElementById("season-heading");     // Title showing the season (e.g. 2011-12)
const slotsContainer = document.getElementById("slots-container");   // Box where the 5 cards live
const guessForm = document.getElementById("guess-form");             // The guess input form
const playerGuessInput = document.getElementById("player-guess");    // The text input box
const submitBtn = document.getElementById("submit-btn");             // The submit button
const feedbackMessage = document.getElementById("feedback-message"); // Text message below the form
const scoreTracker = document.getElementById("score-tracker");       // Score badge in header
const strikesTracker = document.getElementById("strikes-tracker");   // Strikes badge in header
const giveUpBtn = document.getElementById("give-up-btn");             // "Reveal Remaining" button
const nextSeasonBtn = document.getElementById("next-season-btn");     // "Next Season" button

// ------------------------------------------------------------------------------
// 2. GAME STATE (Keeps score and round numbers)
// ------------------------------------------------------------------------------
let currentRound = null;           // Holds data for the season currently being played
let currentScore = 0;              // Total game score
let strikes = 0;                   // Number of wrong guesses this round (0, 1, 2, or 3)
const MAX_STRIKES = 3;             // 3 strikes and the round is over!

// "Sets" are lists that prevent duplicates automatically
const revealedIndices = new Set();    // Tracks which of the 5 cards have been guessed (0 to 4)
const guessedSubmissions = new Set();  // Tracks every name you've already typed this round
const hintedIndices = new Set();      // Tracks cards where the player clicked "Club Hint"
let unplayedIndices = [];             // Deck of season numbers so we never repeat the same season

// ------------------------------------------------------------------------------
// 3. HELPER TOOLS (Shuffling & Cleaning Text)
// ------------------------------------------------------------------------------

// Shuffles an array randomly (like shuffling a deck of cards)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Fills up the list of 33 seasons and shuffles them
function resetDeck() {
  unplayedIndices = seasonsData.map((_, index) => index);
  shuffle(unplayedIndices);
}

// Cleans up typed text: trims spaces, lowercases, and removes accents
// Example: "  Mané  " becomes "mane" so spelling is fair and easy
function normalizeString(str) {
  return str ? str.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
}

// ------------------------------------------------------------------------------
// 4. STARTING A ROUND
// ------------------------------------------------------------------------------

// Picks the next season and prepares the screen for the player
function loadNextRandomSeason() {
  // If we played through all 33 seasons, start fresh again
  if (unplayedIndices.length === 0) resetDeck();

  // Grab the next season from our shuffled deck
  const nextIndex = unplayedIndices.pop();
  currentRound = seasonsData[nextIndex];

  // Reset round counters back to zero
  revealedIndices.clear();
  guessedSubmissions.clear();
  hintedIndices.clear();
  strikes = 0;

  // Put the season year on the screen
  if (seasonHeading) seasonHeading.textContent = currentRound.season;

  // Refresh score text and clear old feedback messages
  updateStatusDisplays();
  clearFeedback();

  // Re-enable typing in the input box
  if (playerGuessInput) {
    playerGuessInput.disabled = false;
    playerGuessInput.value = "";
    playerGuessInput.focus();
  }
  if (submitBtn) submitBtn.disabled = false;

  // Show "Give Up" button and hide "Next Season" button
  if (giveUpBtn) giveUpBtn.classList.remove("d-none");
  if (nextSeasonBtn) nextSeasonBtn.classList.add("d-none");

  // Draw the 5 blank cards on the screen
  renderBlankSlots(currentRound.topScorers);
}

// Creates the 5 blank cards in HTML
function renderBlankSlots(scorers) {
  if (!slotsContainer) return;
  slotsContainer.innerHTML = ""; // Empty out any old cards

  scorers.forEach((scorer, idx) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";
    col.innerHTML = `
      <article class="slot-card p-3 d-flex align-items-center" id="slot-${idx}">
        <span class="rank-badge rounded-circle d-flex align-items-center justify-content-center fw-bold me-3">
          #${scorer.rank}
        </span>
        <div class="flex-grow-1 overflow-hidden">
          <h3 class="h6 mb-1 text-white slot-name">???</h3>
          <p class="text-light-subtle small mb-2 slot-meta">??? goals | ???</p>
          <button type="button" class="btn btn-outline-info btn-sm py-0 px-2 hint-btn" data-index="${idx}">
            Club Hint (-5 pts)
          </button>
        </div>
      </article>
    `;
    slotsContainer.appendChild(col);
  });

  // Listen for clicks on any of the "Club Hint" buttons
  const hintButtons = slotsContainer.querySelectorAll(".hint-btn");
  hintButtons.forEach((button) => {
    button.addEventListener("click", handleHintClick);
  });
}

// ------------------------------------------------------------------------------
// 5. SCREEN UPDATES & MESSAGES
// ------------------------------------------------------------------------------

// Updates the top Score and Strikes numbers
function updateStatusDisplays() {
  if (scoreTracker) scoreTracker.textContent = `Score: ${currentScore}`;
  if (strikesTracker) strikesTracker.textContent = `Strikes: ${strikes}/${MAX_STRIKES}`;
}

// Displays a message in Green (success), Red (error), or Gold (warning)
function showFeedback(text, type) {
  if (!feedbackMessage) return;
  feedbackMessage.textContent = text;
  feedbackMessage.className = `mt-2 small fw-medium feedback-${type}`;
}

// Clears the message line
function clearFeedback() {
  if (!feedbackMessage) return;
  feedbackMessage.textContent = "";
  feedbackMessage.className = "mt-2 small fw-medium";
}

// ------------------------------------------------------------------------------
// 6. PLAYER ACTIONS (Hints and Guesses)
// ------------------------------------------------------------------------------

// Runs when you click "Club Hint" on a card
function handleHintClick(event) {
  const button = event.currentTarget;
  const index = parseInt(button.getAttribute("data-index"), 10);
  const player = currentRound.topScorers[index];
  const slot = document.getElementById(`slot-${index}`);

  // Do nothing if the card is already guessed
  if (!slot || revealedIndices.has(index)) return;

  // Mark that this card used a hint
  hintedIndices.add(index);

  // Show the player's club name on the card
  const metaElement = slot.querySelector(".slot-meta");
  if (metaElement) {
    metaElement.textContent = `??? goals | Club: ${player.club}`;
  }

  // Turn button off so it can't be clicked twice
  button.disabled = true;
  button.textContent = "Hint Used";
  button.className = "btn btn-secondary btn-sm py-0 px-2 hint-btn";

  showFeedback(`Hint revealed for #${player.rank}! Correct guess awards 5 points instead of 10.`, "warning");
}

// Runs when you hit "Submit" or press Enter
function handleGuessSubmit(event) {
  event.preventDefault(); // Prevents page from reloading
  const rawInput = playerGuessInput.value;
  const sanitizedInput = normalizeString(rawInput);

  // Check 1: Did they leave the box empty?
  if (!sanitizedInput) {
    showFeedback("Please enter a player surname or full name.", "warning");
    return;
  }

  // Check 2: Did they already try this name?
  if (guessedSubmissions.has(sanitizedInput)) {
    showFeedback(`You already tried "${rawInput}".`, "warning");
    playerGuessInput.value = "";
    return;
  }

  // Remember this guess so they can't spam it
  guessedSubmissions.add(sanitizedInput);
  const activeScorers = currentRound.topScorers;
  let matchFound = false;

  // Check the guess against all 5 players
  activeScorers.forEach((player, index) => {
    const normalizedName = normalizeString(player.name);
    const normalizedAliases = player.aliases.map((a) => normalizeString(a));
    const surnameOnly = normalizeString(player.name.split(" ").slice(-1)[0]);

    // Matches if input is full name, surname, or nickname alias
    if (
      sanitizedInput === normalizedName ||
      normalizedAliases.includes(sanitizedInput) ||
      sanitizedInput === surnameOnly
    ) {
      matchFound = true;
      if (revealedIndices.has(index)) {
        showFeedback(`You already found ${player.name}!`, "warning");
      } else {
        // Correct guess! Turn card green
        revealSlot(index, player, "revealed");
        revealedIndices.add(index);

        // Give 10 points (or 5 points if hint was used)
        const points = hintedIndices.has(index) ? 5 : 10;
        currentScore += points;

        showFeedback(`Spot on! ${player.name} finished #${player.rank} with ${player.goals} goals. (+${points} pts)`, "success");
      }
    }
  });

  // If name didn't match anyone in the top 5, give a strike
  if (!matchFound) {
    strikes += 1;
    showFeedback(`Incorrect: "${rawInput}" wasn't in the top 5 this season.`, "error");
  }

  // Refresh scoreboard numbers and clear the text input
  updateStatusDisplays();
  playerGuessInput.value = "";

  // Check if you won (all 5 guessed) or lost (3 strikes)
  if (revealedIndices.size === activeScorers.length) {
    endRound(true);  // Clean sweep win!
  } else if (strikes >= MAX_STRIKES) {
    endRound(false); // Out of strikes
  }
}

// Changes a card from hidden to green (revealed) or red (missed)
function revealSlot(index, player, statusClass) {
  const slot = document.getElementById(`slot-${index}`);
  if (!slot) return;

  slot.classList.remove("revealed", "missed");
  slot.classList.add(statusClass);

  const nameElement = slot.querySelector(".slot-name");
  const metaElement = slot.querySelector(".slot-meta");
  const hintBtn = slot.querySelector(".hint-btn");

  if (nameElement) nameElement.textContent = player.name;
  if (metaElement) metaElement.textContent = `${player.goals} goals | ${player.club}`;
  if (hintBtn) hintBtn.remove(); // Remove hint button once revealed
}

// Ends the round, reveals missed players, and shows the Next Season button
function endRound(isCleanSweep) {
  // Lock the input box so you can't type anymore
  if (playerGuessInput) playerGuessInput.disabled = true;
  if (submitBtn) submitBtn.disabled = true;

  // Swap "Give up" button for "Next Season" button
  if (giveUpBtn) giveUpBtn.classList.add("d-none");
  if (nextSeasonBtn) nextSeasonBtn.classList.remove("d-none");

  // Remove any remaining hint buttons
  const activeHintButtons = slotsContainer.querySelectorAll(".hint-btn");
  activeHintButtons.forEach((btn) => btn.remove());

  // Show any unguessed players in RED so the player learns the answers
  const activeScorers = currentRound.topScorers;
  activeScorers.forEach((player, index) => {
    if (!revealedIndices.has(index)) {
      revealSlot(index, player, "missed");
    }
  });

  // Give +25 bonus points if all 5 were guessed
  if (isCleanSweep) {
    currentScore += 25;
    updateStatusDisplays();
    showFeedback("Masterclass! Clean sweep bonus (+25 points)!", "success");
  } else {
    showFeedback("Round over! The remaining scorers have been revealed in red.", "error");
  }
}

// ------------------------------------------------------------------------------
// 7. LISTEN FOR EVENTS & START GAME
// ------------------------------------------------------------------------------
// When form is submitted -> run handleGuessSubmit
if (guessForm) guessForm.addEventListener("submit", handleGuessSubmit);

// When "Reveal Remaining" is clicked -> end round early
if (giveUpBtn) giveUpBtn.addEventListener("click", () => endRound(false));

// When "Next Season" is clicked -> start fresh round
if (nextSeasonBtn) nextSeasonBtn.addEventListener("click", loadNextRandomSeason);

// Start the game right when the page loads
resetDeck();
loadNextRandomSeason();