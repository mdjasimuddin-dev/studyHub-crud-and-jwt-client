import { useLoaderData } from "react-router-dom";
import PendingCard from "./PendingCard";


const PendingAssignment = () => {
    const AssignData = useLoaderData()

    return (
        <div>
            <h1 className='text-center text-3xl lg:text-4xl font-bold my-4'>All Pending Assignment</h1>
            <hr className='h-1 m-5 bg-gray-400' />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 lg:mt-10 m-2'>
                {
                    AssignData?.map(Assign => (
                        <PendingCard
                            key={Assign._id}
                            Assign={Assign}
                        ></PendingCard>)
                    )
                }
            </div >
        </div >
    );
};

export default PendingAssignment;