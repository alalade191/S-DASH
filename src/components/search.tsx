import React from "react";
import { SearchNormal } from "iconsax-react";
import { TextInput, rem } from "@mantine/core";

export const Search = () => {
  return (
    <div className="lg:w-[406px] rounded-lg">
      <TextInput
        icon={<SearchNormal color="#a8a8a8" className="" />}
        placeholder="Search here..."
        styles={{
          input: {
            height: "fit-content",
            border: `none`,
            background: "white",
            borderRadius: rem(8),
            paddingBlock: rem(5),
            // width: "406px",
            "&::placeholder": {
              color: "#A8A8A8",
              fontWeight: 400,
              fontSize: rem(16),
            },
          },
        }}
      />
    </div>
  );
};
