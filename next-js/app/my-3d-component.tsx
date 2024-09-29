"use client";

import { Editor, downloadProject } from "@polygona/react-sdk";

const projectId = "YOUR_PROJECT_ID";
const apiKey = "YOUR_API_KEY";

const My3DComponent = () => {
  const handleDownload = async (
    projectName: string,
    settings: Record<string, string>,
    outputFormat: "glb" | "stl"
  ) => {
    // You can add your own logic here. For example, you can redirect the user to your
    // checkout page and download the project after the payment is completed.
    const { data } = await downloadProject({
      apiKey,
      projectId,
      settings,
      outputFormat,
    });

    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${projectName}.${outputFormat}`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <Editor projectId={projectId} apiKey={apiKey} onDownload={handleDownload} />
  );
};

export default My3DComponent;
