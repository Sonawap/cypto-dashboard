import { APP_NAME } from "@/config";
import { useEffect, useState } from "react";

const useDocumentTitle = (title: string) => {
  const [document_title, setDoucmentTitle] = useState(title);
   useEffect(() => {
    document.title = `${APP_NAME} | ${document_title || ''}`; 
  },[document_title]);

  return [document_title, setDoucmentTitle];
};

export {useDocumentTitle};