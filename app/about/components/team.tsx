function Team() {
    return (
        <>
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
                <div className="flex flex-wrap -mx-4">
                    {/* Example Team Member */}
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <div className="bg-gray-100 p-6 rounded-lg text-center">
                            <img
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                            />
                            <h3 className="text-xl font-bold">John Doe</h3>
                            <p className="text-gray-700">Lead Developer</p>
                        </div>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
                <p className="text-lg leading-relaxed">
                    We're a team of like-minded individuals seeking to better the world through innovation. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quidem! Pariatur quia assumenda itaque illum consequatur blanditiis aliquam ipsa fugiat excepturi suscipit? Fugiat alias commodi fuga et eum tempore odit.
                </p>
            </section>
        </>
    );
}

export default Team;

