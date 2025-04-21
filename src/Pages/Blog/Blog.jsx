import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Question from './Question';

const Blog = () => {
    const answer = useLoaderData();
  
    return (
        <div>
             <Suspense fallback={ <span className="loading loading-bars loading-xl"></span> }>
          {
            answer.map((single)=><Question key={single.id} single={single} ></Question>)
          }
        </Suspense>
        </div>
    );
};

export default Blog;