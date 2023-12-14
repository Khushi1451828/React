import React from "react";
//we can also write "props" here in the passing of parameter
//when no value is passed in the props then these assigned values are shown as output
function Card({username="KS",position="graduate",myArr="not assigned"}) {
  // console.log(props)
  return (
    <div>
      <figure className="md:flex md:p-0 bg-slate-400 rounded-xl p-8 dark:bg-slate-800 border">
        <img
          className="w-24 h-18 border md:border-none border-black p-5 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-small">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
          {/* we can use {props.username} and {props.position} in case of props is the parameter of the function */}
            <div className="text-sky-500 dark:text-sky-400">{username || 'happy'}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {position}
              <div>{myArr}</div>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
