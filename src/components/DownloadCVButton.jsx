const DownloadCVButton = () => {
    return (
      <div className="flex justify-left">
        <a
          href="/resume.pdf" 
          download="KayleeCHEN_Resume.pdf" 
          className=" text-white font-bold px-1 rounded bg-slate-300"
        >
          Download CV
        </a>
      </div>
    );
  };

  export default DownloadCVButton;