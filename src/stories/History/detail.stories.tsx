import { Detail } from "@components/History/element/detail";
import { RefineWithoutLayout } from "../../../.storybook/RefineWithoutLayout";
import "@styles/globals.css";

import { FC } from "react";

export const List: typeof Detail = (args) => <Detail />;

export default {
  title: "ListTable/Detail",
  component: Detail,
  parameters: {
    nextjs: {
      router: {
        basePath: "",
      },
    },
  },

  argTypes: {
    title: {
      type: "string",
    },
  },

  decorators: [(Story: FC) => RefineWithoutLayout(Story)],
};
