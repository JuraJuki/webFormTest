import { ConfigProvider } from "antd";
import { WebForm } from "src/components/WebForm/WebForm";
import { useFormContext } from "src/context/FormContext/useFormContext";
import { useRootAttributes } from "src/helpers/useRootAttributes";
import "./App.module.scss";

function App({ divElement }: { divElement: HTMLDivElement }) {
  useRootAttributes(divElement);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { rootAttributes } = useFormContext();

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <WebForm />
    </ConfigProvider>
  );
}

export default App;
