export default function Involvement() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center mt-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Teaching Assistant</h2>
            <ul className="list-disc list-inside">
              <li>Creating educational materials and providing in-class support</li>
              <li>Conducting office hours for midterms/assignments</li>
              <li>Marking midterms and invigilating exams</li>
            </ul>
            <img src="/uoft-logo.jpeg" alt="" className="w-full max-w-64 mx-auto mt-4 transition-shadow duration-500 hover:shadow-xl rounded-full border-4 border-orange-300" />
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold mb-4">UofTAI Industry Partnerships</h2>
            <ul className="list-disc list-inside">
              <li>
                Targetted prominent industry leaders to foster collaboration in Project X.
              </li>
              <li>
                Implemented a streamlined communication workflow, to optimize engagement with target companies and minimize redundancy in contacting their key stakeholders.
              </li>
              <li>
                Sending outreach emails to pursue collaboration, and follow-up emails when necessary.
              </li>
            </ul>
            <img src="/ai-logo.jpeg" alt="" className="w-full max-w-64 mx-auto mt-4 transition-shadow duration-500 hover:shadow-xl rounded-full border-4 border-orange-300 mb-10" />
          </div>
        </div>
      </div>
    );
  }
  