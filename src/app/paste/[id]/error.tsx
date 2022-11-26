"use client"

import ErrorPage from "src/components/error";

function InvalidPasteID(): JSX.Element {
  return (
    <ErrorPage title="Error 404">
      This Paste Does Not Exist
    </ErrorPage>
  )
}

export default InvalidPasteID;
