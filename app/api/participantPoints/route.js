import resultModels from "@/models/result"
import connectMongoDB from "@/utils/database"

import { NextResponse } from "next/server"

export const POST = async () => {
    await connectMongoDB()
}

export const GET = async (req) => {    

    try {
        await connectMongoDB()
        const results = await resultModels.find()
        const students = {}

        results.forEach(item => {
            if(!item.first.name.toLowerCase().includes('& team') && !item.first.name.toLowerCase().includes('and team') && !item.first.name.toLowerCase().includes('and party')) {

                if (!students[item.first.name]) {
                    students[item.first.name] = {points: 0, team: item.first.team}
                }
                students[item.first.name].points += item.first.marks
            }

            if(!item.second.secName.toLowerCase().includes('& team') && !item.second.secName.toLowerCase().includes('and team') && !item.second.secName.toLowerCase().includes('and party')) {
                if (!students[item.second.secName]) {
                    students[item.second.secName] = {points: 0, team: item.second.secTeam}
                }
                students[item.second.secName].points += item.second.secMarks
            }

            if(!item.third.thrName.toLowerCase().includes('& team') && !item.third.thrName.toLowerCase().includes('and team') && !item.third.thrName.toLowerCase().includes('and party')) {
                if (!students[item.third.thrName]) {
                    students[item.third.thrName] = {points: 0, team: item.third.thrTeam}
                }
                students[item.third.thrName].points += item.third.thrMarks
            }

            item.anotherGrades.forEach(another => {
                if(!another.addName.toLowerCase().includes('& team') && !another.addName.toLowerCase().includes('and team')) {

                    if (!students[another.addName]) {
                        students[another.addName] = {points: 0, team: another.addTeam}
                    }
                    students[another.addName].points += another.addMarks
                }
            })
            
        })

        const studentData = Object.keys(students).map(name => ({ name, points: students[name].points, team: students[name].team}));
        
        return NextResponse.json(studentData)
    } catch (error) {
        return NextResponse({message: "failed to fetch the results"}, {status: 500})
    }
}