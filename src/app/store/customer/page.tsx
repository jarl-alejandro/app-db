import { dbConnect } from "../../../lib/monoose";
import { Navbar } from "../../../components/NavbarCrud"
import Customer from "../../../models/customer";
import Card from '../../../components/Card'

export async function loadData() {
    await dbConnect();
    return Customer.find();
}

export default async function Page() {
    const data = await loadData();

    // @ts-ignore
    return (
        <div>
            <Navbar datos={'customer'}/>
            <div className="gap-2">
                {data.map((item) => (
                    <Card url={'customer'} id={item._id} name={item.name} key={item._id}>
                        <p className="text-slate-300">Email: {item.email}</p>
                        <p className="text-slate-300">Telefono: {item.phone}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
