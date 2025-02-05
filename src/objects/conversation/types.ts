export type UResponseStatus = "RESPONDING" | "WAITING" | "DONE";

export type DialogType = {
  id: string;
  sender: string;
  message: string;
  isBeingGenerated?: boolean;
};

export type ConversationType = {
  responseStatus: UResponseStatus;
  dialogs: Array<DialogType>;
};
