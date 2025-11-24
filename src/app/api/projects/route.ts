import Projects from '../../../models/Projects'
import dbConnect from '../../../libs/mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		await dbConnect()
		const projects = await Projects.find({}, { _id: false })
		return new NextResponse(JSON.stringify(projects))
	} catch (error) {
		return new NextResponse(JSON.stringify(error))
	}
}
