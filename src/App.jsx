

import FormSlider from "./Components/Advance/FormSlider";

const App = () => {
 
    

  
  return (
    <div className="w-100 h-100 bg-light d-flex justify-content-center align-items-center flex-column">
      <FormSlider
        title={"Eden"}
        src={
          "https://cutshort.io/_next/image?url=https%3A%2F%2Fcdn.cutshort.io%2Fpublic%2Fimages%2Fnew_logo_half.png&w=32&q=75"
        }
        cardData ={{length:4}}
      
      />
       
        
 
    </div>
  );
};

export default App;
