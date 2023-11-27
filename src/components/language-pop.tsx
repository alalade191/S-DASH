import { Button, Popover } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const LanguagePop = () => {
  const [showModal, setShowModal] = useState(false);
  const { push, locales } = useRouter();
  return (
    <Popover
      width="target"
      position="bottom"
      withArrow
      shadow="md"
      opened={showModal}
    >
      <Popover.Target>
        <Button
          className="text-black dark:text-white text-base"
          onClick={() => setShowModal(!showModal)}
        >
          Choose language
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <section className="flex gap-4 justify-center text-black dark:text-black flex-col cursor-pointer">
          {[...(locales as string[])].sort().map((locale) => (
            <div
              key={locale}
              //   locale={locale}
              className="block"
              onClick={() => {
                setShowModal(false), push("/", "/", { locale });
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
        </section>
      </Popover.Dropdown>
    </Popover>
  );
};
