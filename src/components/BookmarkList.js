import React from "react";
import Bookmark from "./Bookmark";

function BookmarkList(props) {
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
    <div style={{ width: "300px" }}>
      <ul className="divide-y divide-gray-200">
        {props.savedLinks && props.savedLinks.length > 0 ? (
          displayLinks(props.savedLinks)
        ) : (
          <div className="flex justify-end">
            <div className="text-center">
              <img className="w-10 h-16 mx-auto " src="runneth_empty.svg" />
              <span className="text-lg font-light text-gray-900">
                Looks like your cup is empty <br />
                Let's add something
              </span>
            </div>
            <svg
              viewBox="0 0 63 161"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-purple-500 h-32 w-16"
            >
              <g filter="url(#filter0_d)">
                <path d="M39.1404 78.7127L40.1273 78.8744L40.1273 78.8744L39.1404 78.7127ZM45.2159 41.6318L44.2291 41.4702L44.2291 41.4702L45.2159 41.6318ZM45.8656 34.4548L44.8658 34.4367L44.8658 34.4367L45.8656 34.4548ZM47.1504 2.6307C46.7671 2.23316 46.134 2.22167 45.7365 2.60504L39.2581 8.85246C38.8605 9.23583 38.849 9.86889 39.2324 10.2664C39.6158 10.664 40.2488 10.6755 40.6464 10.2921L46.405 4.73884L51.9582 10.4974C52.3416 10.895 52.9746 10.9065 53.3722 10.5231C53.7697 10.1397 53.7812 9.50665 53.3979 9.10911L47.1504 2.6307ZM23.3296 125.049L22.4469 124.579L22.4469 124.579L23.3296 125.049ZM26.4897 117.774L27.4357 118.098L27.4357 118.098L26.4897 117.774ZM37.0949 86.8467L38.0408 87.1711L38.0408 87.1711L37.0949 86.8467ZM40.1273 78.8744L46.2028 41.7935L44.2291 41.4702L38.1536 78.551L40.1273 78.8744ZM46.8654 34.473L47.4305 3.34301L45.4308 3.30671L44.8658 34.4367L46.8654 34.473ZM11.3653 149.654L24.2124 125.519L22.4469 124.579L9.59987 148.714L11.3653 149.654ZM27.4357 118.098L38.0408 87.1711L36.1489 86.5224L25.5438 117.449L27.4357 118.098ZM24.2124 125.519C25.4816 123.135 26.5595 120.653 27.4357 118.098L25.5438 117.449C24.702 119.904 23.6664 122.289 22.4469 124.579L24.2124 125.519ZM46.2028 41.7935C46.5994 39.3725 46.8209 36.9259 46.8654 34.473L44.8658 34.4367C44.823 36.7934 44.6102 39.144 44.2291 41.4702L46.2028 41.7935ZM38.1536 78.551C37.7098 81.2596 37.0392 83.9261 36.1489 86.5224L38.0408 87.1711C38.9674 84.4688 39.6654 81.6935 40.1273 78.8744L38.1536 78.551Z" />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.654846"
                  y="0.963318"
                  width="61.8591"
                  height="159.352"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        )}
      </ul>
    </div>
  );
}

export default BookmarkList;
