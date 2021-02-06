import NextHead from "next/head";

export default function Layout({ children, frontMatter }) {
  return (
    <>
      <NextHead>
        <title>{frontMatter.title}</title>
      </NextHead>
      {children}
    </>
  );
}
