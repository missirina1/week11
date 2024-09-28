// Находим все элементы ввода данных пользователя
const getNameUser = document.getElementById("wrapper__form_name");
const getAvatarUser = document.getElementById("wrapper__form_avatar");
const getCommentUser = document.getElementById("wrapper__form_comment");

/* При нажатии кнопки отправить - должна срабатывать функция, 
которая берет все значения данных и записывает их в окно чата
*/

// Нужно найти элемент кнопки и добавить на нее слушателя

const getBtn = document.getElementById("wrapper__form_btn");

getBtn.addEventListener("click", addComment);

// Пишем функцию для фильрации спама
function checkSpam(str) {
  const strLower = str.toLowerCase();
  return strLower.replace(/viagra|xxx/gi, "***");
}

// Пишем функцию для отправки данных в форму чата:

function addComment() {
  const name = formatName(getNameUser.value);
  const avatar = getAvatarUser.value;
  let comment = getCommentUser.value;

  // Функция для форматирования имени
  function formatName(name) {
    name = name.trim().toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  // добавляем фильтрацию
  comment = checkSpam(comment);

  // находим новые элементы для чата
  const getChatName = document.getElementById("wrapper__chat_name");
  const getChatAvatar = document.getElementById("wrapper__chat_avatar");
  const getChatComment = document.getElementById("wrapper__chat_comment");

  // надо проверить, что поля не пустые
  if (name.trim() != "" && avatar.trim() != "" && comment.trim() != "") {
    getChatName.textContent = name;
    getChatAvatar.src = avatar;
    getChatComment.textContent = comment;
  } else {
    alert("Заполните все поля");
  }
}
