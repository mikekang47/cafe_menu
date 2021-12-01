const $ = (selector) => document.querySelector(selector);

function addMenuName() {
    if ($("#espresso-menu-name").value === "") {
        alert("값을 입력해주세요.");
        return;
    }

    const espressoMenuName = $('#espresso-menu-name').value;
    const menuItemTemplate = (espressoMenuName) => {
        return `<li class="menu-list-item d-flex items-center py-2">
        <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
        <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
        >
        수정
        </button>
        <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
        >
        삭제
        </button>
    </li>`;
    };
    $("#espresso-menu-list").insertAdjacentHTML("beforeend",
    menuItemTemplate(espressoMenuName)
    );

    const menu_cnt = $("#espresso-menu-list").childElementCount;

    $(".menu-count").innerText = `총 ${menu_cnt} 개`
    $("#espresso-menu-name").value = "";
}

function App() {
    $('#espresso-menu-list').addEventListener("click", (e) => {
        if(e.target.classList.contains("menu-edit-button")) {
            const $menuName = e.target.closet("li").querySelector(".menu-name");
            const updatedName = prompt("메뉴명을 수정하세요", $menuName.innerText);
            e.target
                .closest("li")
                .querySelector(".menu-name").innerText = updatedName;  
        }
    })


    $("#espresso-menu-form").addEventListener("submit", (e) => {
        e.preventDefault();
    });

    $("#espresso-menu-name")
    .addEventListener("keypress", (e) => {
        if (e.key !== 'Enter') {
            return;
        }
        addMenuName();
    });

    $("#espresso-menu-submit-button").addEventListener("click", (e) => {
        addMenuName();
    })
}
 




App();
