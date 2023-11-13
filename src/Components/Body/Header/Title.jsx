import React, { useState, useEffect } from 'react';

export default function Title() {
  const finalName = "Morgane Majchrzak";
  const finalJob = "Développeuse Web";

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [displayJob, setDisplayJob] = useState(false);

  const animateName = (index) => {
    if (index <= finalName.length) {
      setName(finalName.slice(0, index));
      setTimeout(() => {
        animateName(index + 1);
      }, 200);
    } else {
      setDisplayJob(true);
    }
  };

  const animateJob = (index) => {
    if (index <= finalJob.length) {
      setJob(finalJob.slice(0, index));
      setTimeout(() => {
        animateJob(index + 1);
      }, 200);
    }
  };

  useEffect(() => {
    animateName(1);
  }, []);

  useEffect(() => {
    if (displayJob) {
      animateJob(1);
    }
  }, [displayJob]);

  return (
    <div className="header__title">
      <h1 className="header__title__h1">
        {name}
        {name.length === finalName.length ? "" : <span className="cursor">|</span>}
      </h1>
      <h2 className="header__title__h2">
        {job}
        {job <= 0 ? "" : <span className={job.length === finalJob.length ? "cursor active" : "cursor"}>|</span>
}
      </h2>
    </div>
  );
}