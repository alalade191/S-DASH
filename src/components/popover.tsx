import React from "react";
import { Popover, Text, Button } from "@mantine/core";
import Link from "next/link";
import router, { useRouter } from "next/router";

export const SwitchPopover = () => {
  const { locales } = useRouter();
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button className="text-black dark:text-white text-base">
          Choose language
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        {/* <section className="flex gap-4 justify-center dark:text-white"> */}
        {[...(locales as string[])].sort().map((locale) => (
          <div
            key={locale}
            // locale={locale}
            className="block"
            // onClick={() => close()}
            onClick={() => {
              router.push("/", "/", { locale }), close();
            }}
          >
            {locale === "en"
              ? "English"
              : locale === "ar"
              ? "Arabic"
              : locale === "fr"
              ? "French"
              : "Dutsh"}
          </div>
        ))}
        {/* </section> */}
      </Popover.Dropdown>
    </Popover>
  );
};
