import { Leaf } from "lucide-react"

export  function CardInfo() {
  return (
    <div className=" bg-white text-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Everything you need
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Integration ecosystem",
              description:
                "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
            },
            {
              title: "Goal setting and tracking",
              description:
                "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
            },
            {
              title: "Secure data encryption",
              description:
                "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
            },
          ].map((feature, index) => (
            <div key={index} className=" p-6 rounded-lg space-y-4">
              <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className=" text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
