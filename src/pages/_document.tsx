import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Bring your old and blurry face photos back to life with RestorePhotos.app! Utilizing cutting-edge AI technology, our website offers a free service that allows you to upload your cherished memories and restore them using the GFPGAN model from the Tencent ARC Lab. Don't let your precious memories fade away, try RestorePhotos.app today and see the difference for yourself!"
          />
          <meta property="og:site_name" content="restorephotos.app" />
          <meta
            property="og:description"
            content="Bring your old and blurry face photos back to life with RestorePhotos.app! Utilizing cutting-edge AI technology, our website offers a free service that allows you to upload your cherished memories and restore them using the GFPGAN model from the Tencent ARC Lab. Don't let your precious memories fade away, try RestorePhotos.app today and see the difference for yourself!"
          />
          <meta
            property="og:title"
            content="Revive Your Memories: AI Face Photo Restoration with RestorePhotos.app"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Revive Your Memories: AI Face Photo Restoration with RestorePhotos.app"
          />
          <meta
            name="twitter:description"
            content="Bring your old and blurry face photos back to life with RestorePhotos.app! Utilizing cutting-edge AI technology, our website offers a free service that allows you to upload your cherished memories and restore them using the GFPGAN model from the Tencent ARC Lab. Don't let your precious memories fade away, try RestorePhotos.app today and see the difference for yourself!"
          />
          <meta
            property="og:image"
            content="https://restorephotos.app/featuredimage.png"
          />
          <meta
            name="twitter:image"
            content="https://restorephotos.app/featuredimage.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
