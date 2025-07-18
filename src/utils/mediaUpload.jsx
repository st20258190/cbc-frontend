import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://trfxxoufvikarazpajyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyZnh4b3VmdmlrYXJhenBhanlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NDIyMTcsImV4cCI6MjA2ODMxODIxN30.VzWrzAjcjI5WtM8WhYmbC9XBJ6fN8cLfIqccslvzkzc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default function uploadfile(file) {
  const promise = new Promise((resolve, reject) => {
    if (file == null) {
      reject("File is empty");
    }
    const timeStamp = new Date().getTime();
    const fileName = timeStamp + "-" + file.name;

    supabase.storage
      .from("images")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      })
      .then(() => {
        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName)
          .data.publicUrl;
        console.log("File uploaded successfully: ", publicUrl);
        resolve(publicUrl);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        reject("Error uploading file: " + error.message);
      });
  });
  return promise;
}
