import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "l7n74bj0",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});
