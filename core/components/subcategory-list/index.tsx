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
    <div></div>
  );
};