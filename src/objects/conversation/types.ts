export type UResponseStatus = "RESPONDING" | "WAITING" | "DONE";

export type ChatBotResponseDataType = {
  action: string;
  params: any;
  text: string;
};

export type DialogType = {
  id: string;
  sender: string;
  message: string;
  isBeingGenerated?: boolean;
};

export type ConversationType = {
  doesFirstRender: boolean;
  doesFirstFetch: boolean;
  responseStatus: UResponseStatus;
  dialogs: Array<DialogType>;
};
