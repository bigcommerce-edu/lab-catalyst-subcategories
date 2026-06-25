import { CSSProperties } from 'react';

import { Card } from '@/vibes/soul/primitives/card';

import { getSubcategories } from './component-data';

export const SubcategoryList = (
  {
    title,
    subcategories
  }: {
    title: string | null,
    subcategories: Awaited<ReturnType<typeof getSubcategories>>,
  }
) => {
  return (
    <div className="@container 
      mx-auto max-w-screen-2xl px-4 py-10 
      @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-12"
    >
      <h1 className="font-heading 
        text-3xl font-medium leading-none 
        @lg:text-4xl @2xl:text-5xl
        text-contrast-400"
      >
          {title}
      </h1>
      <div className="w-full @container my-4">
        <div className="mx-auto 
          grid grid-cols-1 gap-4 
          @lg:grid-cols-2 @2xl:grid-cols-3"
        >
          {subcategories.map((subcategory) => (
            // TODO: Replace this placeholder with a `Card` with subcategory information
            //  - Use the `Card` component from `@/vibes/soul/primitives/card`
            //  - Continue using `entityId` as the key
            //  - Pass in `href`, `image`, and `title` props
            //  - Include the subcategory's `productCount` in the title
            <div key={subcategory.entityId}></div>
          ))}
        </div>
      </div>
    </div>
  );
};