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
  // TODO: Implement the main display of the category information
  //  - Render an `h1` with the category title
  //  - Loop through `subcategories` and render an empty element with the `entityId` as the key
  return (
    <div></div>
  );
};