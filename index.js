document.addEventListener("click", e => {
    let handle;
    if (e.target.matches(".handle")) {
        handle = e.target
    } else {
     handle = e.target.closest(".handle")
    }
    if (handle !== null) {
        onHandleClick(handle)
    }
})

window.addEventListener("resize", (e) => {
    //Recalculate Progress Bar
})

document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

const calculateProgressBar = (progressBar) => {
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".row").querySelector("slider")

    const itemCount = slider.children.length
    const itemsPerScreen = pareInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"))

    const progressBarItemCount = Math.ceil(itemsPerScreen / itemCount)

    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))

    for (let i = 0; i < progressBarItemCount; i++) {
        const barItem = document.createElement("div")
        barItem.classList.add("progress-item")
        if (i === sliderIndex) {
            barItem = classList.add("active")
        }
        progressBar.append(barItem)
    }
}

const onHandleClick = (handle) => {
    const slider = handle.closest(".container").querySelector(".slider")
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    if (handle.classList.contains("left-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
    }
    if (handle.classList.contains("right-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
    }
}

