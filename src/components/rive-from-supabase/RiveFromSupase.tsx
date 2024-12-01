import { useEffect, useState } from "react";
import { theme } from "../../styles/theme";
import { getRiveFiles } from "../../utils/supabaseStorage2";
import Rive from "@rive-app/react-canvas";
import { AnimationWrapper, RiveContainer, Content, AnimationUrl } from "./rive.styles";

interface IRiveFromSupabaseProps {
  isDarkMode: boolean;
}

const RiveFromSupabase = ({ isDarkMode }: IRiveFromSupabaseProps) => {
  const [riveFiles, setRiveFiles] = useState<{ name: string; url: string }[]>(
    []
  );

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const files = await getRiveFiles();
        setRiveFiles(files || []);
      } catch (error) {
        console.error("Error al obtener las animaciones:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <RiveContainer>
      <h1
        style={{
          textAlign: "center",
          margin: "2rem",
          color: "#435a53",
        }}
      >
        Galería de Animaciones from Supabase
      </h1>
      <AnimationWrapper style={{ display: "flex", gap: "8rem"  }}>
        {riveFiles.map((file) => (
          <Content
            style={{ borderRadius: isDarkMode ? "0" : "1rem", overflow: "hidden" }}
           >
            <h2 style={{ color: isDarkMode ? theme.colors.tertiary : "" }}
            >{file.name}</h2>
            <AnimationUrl
              key={file.name}
            >
              <Rive src={file.url} style={{ 
                 width: 200, 
                 height: 200,
                 }} 
                 />
            </AnimationUrl>
          </Content>
        ))}
      </AnimationWrapper>
    </RiveContainer>
  );
};

export default RiveFromSupabase;
