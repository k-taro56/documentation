import Head from 'next/head';
import DocumentationLayout from '../../components/layout/documentation-layout';

export default function Page() {
  return (
    <DocumentationLayout>
      <Head>
        <title>Unity CI - Documentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="ant-typography">
        <h1>Welcome to Unity CI</h1>

        <p>This site will host documentation for open source Unity CI projects.</p>

        <p>
          <span>Follow the development on </span>
          <a href="https://github.com/webbertakken/unity-ci">GitHub</a>
        </p>
      </main>
    </DocumentationLayout>
  );
}
