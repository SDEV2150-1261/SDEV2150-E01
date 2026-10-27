// src/components/Results.jsx
import ResultsItem from "./ResultsItem";

export default function Results({ resources }) {
  return (
    <section className="h-full mb-4">
      <div className="h-full rounded border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <strong className="text-sm text-gray-900">Results</strong>
          <span className="rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
            {/* 
              If I care about rendering something specific for success and failure cases, I'll use a ternary:
                {condition ? <Component /> : "Condition was not met; here's default text."
                
              If I *don't care* about rendering anything for a failure case, I can use the && AND operator,
              and only deal with the success condition:
                {condition && <Component />}

              In the example below, I'm safeguarding against e.g. getting {null} instead of an array,
              and the entire component crashing because null.length doesn't exist.
            */}
            {resources && resources.length}

            {/* Bonus: If the success condition is the same as what should be rendered if true, you can use the || OR operator:
                objectOrNull || "Sorry, object was null."
            */}
          </span>
        </div>

        <ul className="divide-y divide-gray-200">
          {/* <li
            className="w-full text-left bg-blue-600 text-white px-4 py-3 focus:outline-none"
            aria-current="true"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-sm font-semibold">Peer Tutoring Centre</h2>
              <small className="text-xs text-blue-100">Academic</small>
            </div>
            <p className="mt-1 text-xs text-blue-100">
              Drop-in tutoring and study support.
            </p>
            <small className="mt-1 block text-xs text-blue-100">
              Building W, Room W101
            </small>
          </li> */}
          {/* INFO: Could just copy/paste individual buttons, but this is more maintainable */}
          {/* Changing key to ID because it should be an ID-like field. 
          
              You can remove the key attribute entirely and look in the JS console to see what React says.
              It won't brick your application/break rendering, but things will get messy when you try to filter, 
              reorder, etc. list elements.
              
              key attribute is necessary to give a unique ID to teach list element React has to keep track of.
          */}
          {resources.map((item) => (
            <ResultsItem key={item.id} 
              title={item.title}
              category={item.category}
              summary={item.summary}
              location={item.location}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}