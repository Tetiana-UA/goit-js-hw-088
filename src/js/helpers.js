export function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

//const feedback-form-state ={
// email:email.value
// message:message.value}

//export function saveToLS(feedback-form-state ) {
//  localStorage.setItem("feedback-form-state", JSON.stringify(feedback-form-state));}
//
