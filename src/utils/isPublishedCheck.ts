// TODO: find the astro type for the page argument

export const isPublishedCheck = (page: any) =>
  import.meta.env.PROD ? page.data.published : true;
