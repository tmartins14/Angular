import { Like } from "./like.component";

let like = new Like(10, true)
like.onClick()
console.log(`Likes Count: ${like.likes}, is selected: ${like.isSelected}`);

