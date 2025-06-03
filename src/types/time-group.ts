import { TIME_GROUP } from "@/constants";

export type TTimeGroup = (typeof TIME_GROUP)[keyof typeof TIME_GROUP];
