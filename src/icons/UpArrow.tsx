import React, { SVGProps } from 'react';

export default function UpArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M7 14l5-5 5 5z"></path>
    </svg>
  );
}