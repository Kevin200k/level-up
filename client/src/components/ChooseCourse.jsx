import React from 'react'
import { useCourseId } from '../context/CourseIdContext'



const ChooseCourse = () => {

  const { courses: course } = useCourseId()

  return (
    <>
      {
        course.map((stage) => (
          <div className=" p-5 rounded-lg flex-grow shadow-sm bg-amber-300" key={stage.id}>
            <h3 className="font-medium mb-2">
              {stage.stage}
            </h3>
            <p className="in_container_medium_description mb-4">
              Topics: {stage.topics.join(', ')}
            </p>
            <div className="space-y-3">
              {stage.content && stage.content.map((contentItem, contentIndex) => (

                <div
                  key={contentIndex}
                  className="flex items-center space-x-3 p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {getIconForType(contentItem.type)}
                  <div className="flex-grow ">
                    <Link 
                      to={contentItem.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='hover:underline'
                    >
                      <p className="medium_text">{contentItem.lesson}</p>
                    </Link>
                    <p className="text-xs text-gray-500 capitalize">{contentItem.type}</p>
                  </div>
                  <div className='hover:bg-gray-200 rounded-full active:spin'>
                    <ChevronDown color='#696969' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ChooseCourse