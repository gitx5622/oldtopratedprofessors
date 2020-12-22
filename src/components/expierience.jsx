import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Button } from 'shards-react';

const Expierence = ({company, dates, duties, title, setValue, jobs, value}) => {
    return ( 
      <div className="expirience">
        <section className='section'>
      <div className='title'>
        <center><h2>Academic Paper Writing Service</h2></center>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <Button
                size="sm" 
                outline 
                theme="success"
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </Button>
            )
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
    </div>
     );
}
 
export default Expierence;