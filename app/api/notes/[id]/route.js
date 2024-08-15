import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { title, body } = await request.json();
    await connectMongoDB();
    await Note.findByIdAndUpdate(id, { title, body });
    return NextResponse.json({ message: "Note updated successfully" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const note = await Note.findOne({ _id: id });
    return NextResponse.json({ note }, { status: 200 });
}
