import Son from "@/components/Son";

export default function Father() {
    return (
        <div>
            <h2>Father Component</h2>
            <hr className='py-1' />
            <Son />
        </div>
    )
}
