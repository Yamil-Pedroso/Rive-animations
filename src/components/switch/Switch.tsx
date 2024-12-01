import { SwitchContainer, SwitchWrapper, SwitchButton } from "./switch.styles";

interface ISwitchProps {
  activeSwitch?: boolean;
  setActiveSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch: React.FC<ISwitchProps> = ({ activeSwitch, setActiveSwitch }) => {
  const handleClick = () => {
    setActiveSwitch(!activeSwitch); 
  };

  //useEffect(() => {
  //    if (click) {
  //    document.body.style.backgroundColor = "#000";
  //    } else {
  //    document.body.style.backgroundColor = "#fff";
  //    }
  //}, [click]);

  return (
    <SwitchContainer>
      <SwitchWrapper>
        <SwitchButton
          onClick={handleClick}
          animate={{ x: activeSwitch ? 39 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </SwitchWrapper>
    </SwitchContainer>
  );
};

export default Switch;
