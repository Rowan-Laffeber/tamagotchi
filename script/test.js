const ARTHUR_WIDTH = 320;
const ARTHUR_HEIGHT = 320;

function arthurPositionToImage(row, col) {
    return {
        x: col * ARTHUR_WIDTH,
        y: row * ARTHUR_HEIGHT,
    };
}

const arthurCanvas = document.getElementById("arthurCanvas");
const arthurContext = arthurCanvas.getContext("2d");

// Fullscreen width and position Arthur at the bottom
arthurCanvas.width = ARTHUR_WIDTH;
arthurCanvas.height = ARTHUR_HEIGHT;
arthurCanvas.style.position = "absolute";
arthurCanvas.style.bottom = "0";
arthurCanvas.style.left = "50%";
arthurCanvas.style.transform = "translateX(-50%)";

const arthurImage = new Image();
arthurImage.src = "assets/img/Arthur-Morgan/Arthur-Morgan-sprite1.png";
arthurImage.crossOrigin = true;

let arthurRow = 0;
let arthurCol = 0;

function animateArthur() {
    if (arthurCol === 3) {
        arthurCol = 0;
        arthurRow += 1;
    }
    if (arthurRow === 2) {
        arthurRow = 0;
    }

    const position = arthurPositionToImage(arthurRow, arthurCol);
    arthurContext.clearRect(0, 0, arthurCanvas.width, arthurCanvas.height);
    arthurContext.drawImage(
        arthurImage,
        position.x, position.y, ARTHUR_WIDTH, ARTHUR_HEIGHT,
        0, 0, ARTHUR_WIDTH, ARTHUR_HEIGHT
    );
    arthurCol += 1;
}

arthurImage.onload = function () {
    setInterval(animateArthur, 500);
};

// Levels Animation Configuration
const TILE_WIDTH = 130;
const TILE_HEIGHT = 130;
const LEVELS_COLUMNS = 1;
const LEVELS_ROWS = 8;
const TOTAL_FRAMES = 8;

function levelsPositionToImage(row, col) {
    return {
        x: col * TILE_WIDTH,
        y: row * TILE_HEIGHT,
    };
}

const levelsCanvas = document.getElementById("levelsCanvas");
const levelsContext = levelsCanvas.getContext("2d");
levelsCanvas.width = TILE_WIDTH;
levelsCanvas.height = TILE_HEIGHT;
levelsCanvas.style.position = "absolute";
levelsCanvas.style.top = "20px";
levelsCanvas.style.left = "20px";

const levelsImage = new Image();
levelsImage.src = "assets/img/LEVELS/levels.png";
levelsImage.crossOrigin = true;

let currentFrame = 0;
let currentTop = 20;

function animateLevels() {
    const levelsRow = Math.floor(currentFrame / LEVELS_COLUMNS);
    const levelsCol = currentFrame % LEVELS_COLUMNS;
    const position = levelsPositionToImage(levelsRow, levelsCol);
    levelsContext.clearRect(0, 0, levelsCanvas.width, levelsCanvas.height);
    levelsContext.drawImage(
        levelsImage,
        position.x, position.y, TILE_WIDTH, TILE_HEIGHT, // Source rectangle
        0, 0, TILE_WIDTH, TILE_HEIGHT // Destination rectangle
    );
}

levelsCanvas.addEventListener("click", function () {
    currentFrame += 1;
    if (currentFrame === TOTAL_FRAMES) {
        currentFrame = 0;
    }
    currentTop -= 50;
    if (currentTop < 0) {
        currentTop = 0;
    }
    levelsCanvas.style.top = `${currentTop}px`;
    animateLevels();
});
levelsImage.onload = function () {
    animateLevels(); // Draw the first frame
};

// End Level