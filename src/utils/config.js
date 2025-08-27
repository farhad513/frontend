const local = "http://localhost:5000";
const pro = "https://api.medifasthealthcare.com";
// const pro = ""
let base_url = "";
// console.log(mode)
let mode = "pro";
if (mode === "pro") {
  base_url = pro;
} else {
  base_url = local;
}
export { base_url };
