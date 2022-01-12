import React from "react";

export class ItemToDo extends React.Component {
  render() {
    return (
      <>
        <li class="item-text" id="1641976924594">
          <input type="checkbox" class="item-checkbox" />
          <label class="check" for="1641976924594"></label>
          <span class="text-li">q</span>
          <span class="delete">×</span>
        </li>
      </>
    );
  }
}
