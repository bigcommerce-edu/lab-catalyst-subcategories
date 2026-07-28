import { cache } from 'react';

import { client } from '~/client';
import { graphql, VariablesOf } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';

// Define the GraphQL query string for fetching a category's subcategories
const SubcategoriesQuery = graphql(
  `
    query SubcategoriesQuery($categoryId: Int!) {
      site {
        categoryTree(rootEntityId: $categoryId) {
          entityId
          children {
            entityId
            name
            path
            image {
              altText
              url: urlTemplate(lossy: true)
            }
            productCount
          }
        }
      }
    }
  `
);

// Run the GraphQL query and return the structured data from the response tree
export const getSubcategories = cache(
  async (
    variables: VariablesOf<typeof SubcategoriesQuery>,
    customerAccessToken?: string
  ) => {
    const response = await client.fetch({
      document: SubcategoriesQuery,
      variables,
      customerAccessToken,
      fetchOptions: customerAccessToken ? { cache: 'no-store' } : { next: { revalidate } },
    });

    return response.data.site.categoryTree[0]?.children ?? [];
  }
);
