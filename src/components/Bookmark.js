import React, { useState } from "react";

function Bookmark(props) {
  const { linkHref, linkName } = props;

  const deleteLink = () => props.deleteLink(linkHref);
  return (
    <div class="flex items-center space-x-4 ">
      <div class="flex-shrink-0">
        <img
          class="h-4 w-4 rounded-full"
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${linkHref}`}
          alt="Domain icon"
        />
      </div>
      <div class="flex-1">
        <a
          class="text-sm font-medium text-gray-900 hover:line-clamp-none line-clamp-2 break-all"
          href={linkHref}
          target="_blank"
        >
          {linkName}
        </a>
      </div>
      <div>
        <button
          onClick={deleteLink}
          class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Bookmark;
