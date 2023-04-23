export const addInputValue = (newValue) => ({
  type: "CHANGE_INPUT_VALUE",
  newValue,
});

export const addMessage = () => ({
  type: "ADD_MESSAGE"
});

export const toggleSettings = () => ({
  type: "TOGGLE_SETTINGS"
});

export const updateSettingsField = (newValue, identifier) => ({
  type: "UPDATE_SETTINGS_FIELD",
  newValue,
  identifier,
});

export const submitLogin = () => ({
  type: "SUBMIT_LOGIN"
});

export const saveSuccessfulAuth = (pseudo) => ({
  type: "SAVE_SUCCESSFUL_AUTH",
  pseudo
});

export const sendMessage = () => ({
  type: "SEND_MESSAGE"
})

export const handleMessageReceived = (newMessage) => ({
  type: "HANDLE_MESSAGE_RECEIVED",
  newMessage
})
