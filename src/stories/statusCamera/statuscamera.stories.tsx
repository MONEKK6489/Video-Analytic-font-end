import { Listcamera }  from "@components/statusCamera/statuscamera"
import { RefineWithoutLayout } from "../../../.storybook/RefineWithoutLayout";
import { FC } from "react";
import "@styles/globals.css";

export const List: typeof Listcamera = (args) => <Listcamera />;

export default {
  title: "StatusCamera/Listcamera",
  component: Listcamera,
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