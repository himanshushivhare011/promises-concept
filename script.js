let ans = document.querySelector("#two");
function daba(){
let fun = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = Math.random(); // random number between 0 and 1
    console.log("Random value:", a);
    switch (true) {
      case a > 0.9:
        resolve("aaj ka din subh rahega");
        break;
      case a > 0.8:
        resolve("aap bohot accahe he");
        break;
      case a > 0.7:
        resolve("chalo kahi ghumne chalte he");
        break;
      case a > 0.6:
        resolve("aaj khane be bohot tasty khana hoga");
        break;
      case a > 0.5:
        resolve("gym chale jay kya body banate he");
        break;
      case a > 0.4:
        resolve("aaj swming chalna he");
        break;
        case(a>0.3):
        resolve("maje hi maje he");
        break;
        default:
        reject("aaj aram karo");
    }
  }, 2000); 
});

fun
  .then(msg => {
    ans.innerText=msg;
  })
  .catch(err => {
    ans.innerText=err;
  });
}