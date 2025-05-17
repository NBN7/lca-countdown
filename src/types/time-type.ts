import { TIME_TYPE } from "@/constants";

export type TTimeType = (typeof TIME_TYPE)[keyof typeof TIME_TYPE];
