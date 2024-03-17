const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");
const selectedOptionsInput = document.getElementById("selectedOptions");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});



items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        // Update the hidden input's value based on selected items
        const checkedItems = document.querySelectorAll(".checked");
        const selectedValues = Array.from(checkedItems).map(checkedItem => checkedItem.textContent.trim());

        selectedOptionsInput.value = JSON.stringify(selectedValues);

        let btnText = document.querySelector(".btn-text");

        if (checkedItems.length > 0) {
            btnText.innerText = `${checkedItems.length} Selected`;
        } else {
            btnText.innerText = "Select Domains";
        }
    });
});


