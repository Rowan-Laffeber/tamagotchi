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
arthurCanvas.width = ARTHUR_WIDTH;
arthurCanvas.height = ARTHUR_HEIGHT;
arthurCanvas.style.position = "absolute";
arthurCanvas.style.bottom = "0";
arthurCanvas.style.left = "20%";
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

const TILE_WIDTH = 130;
const TILE_HEIGHT = 130;
const LEVELS_COLUMNS = 1;
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
        position.x, position.y, TILE_WIDTH, TILE_HEIGHT,
        0, 0, TILE_WIDTH, TILE_HEIGHT
    );
}

levelsCanvas.addEventListener("click", function () {
    // Move to the next level on click
    currentFrame +=1;
    if (currentFrame === TOTAL_FRAMES) {
        currentFrame = 0;
    }
    currentTop -= 0;
    if (currentTop < 0) {
        currentTop = 0;
    }
    levelsCanvas.style.top = `${currentTop}px`;
    animateLevels();
});

levelsImage.onload = function () {
    animateLevels();
};
////core start


const canvas = document.getElementById("levelsCanvas");
const ctx = canvas.getContext("2d");

const heartImg = new Image();
heartImg.src = ".assets/img/stats-middle-core/heart-core.png";
const energyImg = new Image();
energyImg.src = ".assets/img/stats-middle-core/energy-core.png";
const deadeyeImg = new Image();
deadeyeImg.src = ".assets/img/stats-middle-core/deadeye-core.png";


let heartHeight = 130;
let energyHeight = 130;
let deadeyeHeight = 130;

let heartClicks = 0;
let energyClicks = 0;
let deadeyeClicks = 0;

const centerY = canvas.height / 2;
const imgWidth = 32;
function renderImages() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    // Draw each image at its current size
    ctx.drawImage(heartImg, canvas.width / 4 - imgWidth / 2, centerY - heartHeight / 2, imgWidth, heartHeight);
    ctx.drawImage(energyImg, canvas.width / 2 - imgWidth / 2, centerY - energyHeight / 2, imgWidth, energyHeight);
    ctx.drawImage(deadeyeImg, (3 * canvas.width) / 4 - imgWidth / 2, centerY - deadeyeHeight / 2, imgWidth, deadeyeHeight);
}
canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (mouseX > canvas.width / 4 - imgWidth / 2 && mouseX < canvas.width / 4 + imgWidth / 2 && mouseY > centerY - heartHeight / 2 && mouseY < centerY + heartHeight / 2) {
        heartClicks++;
        if (heartClicks === 5) {
            heartHeight += 1;
            heartClicks = 0;
        }
    }

    if (mouseX > canvas.width / 2 - imgWidth / 2 && mouseX < canvas.width / 2 + imgWidth / 2 && mouseY > centerY - energyHeight / 2 && mouseY < centerY + energyHeight / 2) {
        energyClicks++;
        if (energyClicks === 5) {
            energyHeight += 1;
            energyClicks = 0;
        }
    }

    if (mouseX > (3 * canvas.width) / 4 - imgWidth / 2 && mouseX < (3 * canvas.width) / 4 + imgWidth / 2 && mouseY > centerY - deadeyeHeight / 2 && mouseY < centerY + deadeyeHeight / 2) {
        deadeyeClicks++;
        if (deadeyeClicks === 5) {
            deadeyeHeight += 1;
            deadeyeClicks = 0;
        }
    }


    renderImages();
});
heartImg.onload = energyImg.onload = deadeyeImg.onload = renderImages;