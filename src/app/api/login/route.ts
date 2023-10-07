import Collaborator from '../../../models/collaborator';
import {NextResponse} from 'next/server';
import {dbConnect} from '../../../lib/monoose';
import bcrypt from "bcrypt";

export async function POST(request: any) {
    const login = await request.json();
    await dbConnect();


    try {
        const user = await Collaborator.findOne({
            email: login.email,
        })

        if (!user) {
            return NextResponse.json({
                login: false
            }, {
                status: 200
            });
        }

        let compare = await bcrypt.compare(login.password, user.password);
        if (!compare) {
            return NextResponse.json({
                login: false
            }, {
                status: 200
            });
        }

        return NextResponse.json({
            login: true
        }, {
            status: 200
        });

    } catch (error) {
        return NextResponse.json("Error en el sistem<a", {
            status: 400,
        });
    }
}
