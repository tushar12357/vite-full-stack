interface BorderedButtonProps {
  text: string;
  onClick?: () => void;
}

const BorderedButton = ({ text, onClick }: BorderedButtonProps) => {
  return (
    <div className="w-48 h-16 border-t border-l border-dashed border-white my-2 p-4 rounded-tl-lg">
      <button 
        onClick={onClick}
        className="bg-transparent border-white text-white text-xs font-medium uppercase tracking-wider hover:bg-white/5 transition-colors"
        style={{
          width: '156px',
          height: '41px',
          opacity: 1,
          transform: 'rotate(0deg)',
          borderRadius: '40px',
          borderWidth: '1px',
          borderStyle: 'solid',
          padding: '10px',
          borderColor: '#1F1F1F',
          backgroundColor: '#121212',
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default BorderedButton;

