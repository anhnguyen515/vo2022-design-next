import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { DefaultSeo } from "next-seo";
import NextNprogress from "nextjs-progressbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { lightTheme } from "styles/theme/theme";
import { BRAND_NAME, OG_TITLE, SITE_BASE_URL } from "utility/constants";
import createEmotionCache from "utility/createEmotionCache";
import MainLayout from "../components/Layout/MainLayout";
import "../styles/globals.css";

{
  /* react-slick carousel */
}

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <MainLayout>
          <DefaultSeo
            title={BRAND_NAME}
            canonical={SITE_BASE_URL}
            description={`Nền tảng đọc truyện sáng tác Việt, khơi nguồn cảm hứng sáng tác truyện bất tận cho tác giả với những công cụ mạnh mẽ giúp tác giả Việt thỏa sức sáng tạo nội dung.`}
            openGraph={{
              type: "website",
              site_name: BRAND_NAME,
              title: OG_TITLE,
              url: SITE_BASE_URL,
              images: [
                {
                  url: `${SITE_BASE_URL}/img/og-image.jpg`,
                  width: 1200,
                  height: 630,
                  alt: BRAND_NAME,
                },
              ],
            }}
            twitter={{
              cardType: "summary_large_image",
            }}
          />
          <NextNprogress
            nonce="my-nonce"
            showOnShallow
            color={lightTheme.palette.primary.main}
            startPosition={0.3}
            stopDelayMs={200}
            height={4}
            options={{
              showSpinner: false,
            }}
          />
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
