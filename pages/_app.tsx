import "@/styles/globals.css";
import en from "@/server-translation/en.json";
import fr from "@/server-translation/fr.json";
import ar from "@/server-translation/ar.json";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider, MessageFormatElement } from "react-intl";

const queryClient = new QueryClient();

const messages = {
  en,
  fr,
  ar,
};

function getDirection(locale: string) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const messagesForLocale = messages[locale as keyof typeof messages];

  if (!messagesForLocale) {
    console.error(`No messages found for locale: ${locale}`);
    // Handle the case where there's no matching locale
    // Example: locale = "en";
  }
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <ThemeProvider attribute="class" enableSystem={false} enableColorScheme>
          <IntlProvider
            locale={String(locale)}
            messages={
              messagesForLocale as
                | Record<string, string>
                | Record<string, MessageFormatElement[]>
                | undefined
            }
          >
            <Component {...pageProps} />
          </IntlProvider>
        </ThemeProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
