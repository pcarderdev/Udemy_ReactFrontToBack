import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    return <FeedbackContext.Provider>
        {children}
    </FeedbackContext.Provider>
}