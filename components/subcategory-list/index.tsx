import { CSSProperties } from 'react';

import { Card } from '@/vibes/soul/primitives/card';

import { getSubcategories } from './component-data';

export const SubcategoryList = ({
  title,
  subcategories,
}: {
  title: string | null;
  subcategories: Awaited<ReturnType<typeof getSubcategories>>;
}) => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-10 @container @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-12">
      <h1 className="font-heading text-3xl font-medium leading-none text-subcategoryListHeading @lg:text-4xl @2xl:text-5xl">
        {title}
      </h1>
      <div className="my-4 w-full @container">
        <div
          className="mx-auto grid grid-cols-1 gap-4 @lg:grid-cols-2 @2xl:grid-cols-3"
          style={
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            {
              '--card-light-text': 'hsl(var(--subcategory-list-light-text))',
            } as CSSProperties
          }
        >
          {subcategories.map((subcategory) => (
            <Card
              href={subcategory.path}
              image={
                !subcategory.image
                  ? undefined
                  : {
                      src: subcategory.image.url,
                      alt: subcategory.image.altText,
                    }
              }
              key={subcategory.entityId}
              title={`${subcategory.name} (${subcategory.productCount})`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
