import clsx from 'clsx';
import React, { CSSProperties, ElementType, ReactNode } from 'react'

type BoundedProps = {
    as?: ElementType;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
};


function Bounded({
    as: Comp = "section",
    className,
    children,
}: BoundedProps) {
  return (
    <Comp
     className={clsx("px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",className)}
    >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
    </Comp>
  )
}

export default Bounded