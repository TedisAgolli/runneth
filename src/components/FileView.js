import React from "react";
import Bookmark from "./Bookmark";

function FileView(props) {
  const displayLinks = (links) => {
    links = links ? links : [];
    links = links.map((link) => {
      return (
        <li className="py-4 px-1 mx-2">
          <Bookmark
            key={link.linkHref}
            deleteLink={props.deleteLink}
            linkHref={link.linkHref}
            linkName={link.linkName}
          ></Bookmark>
        </li>
      );
    });
    return links;
  };

  return (
    <div className="mt-5" style={{ width: "300px" }}>
      <ul class="-my-5 divide-y divide-gray-200">
        {displayLinks(props.savedLinks)}
      </ul>
    </div>
  );
}

export default FileView;
