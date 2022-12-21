import { jobsData } from "../../scripts/jobsData.js"
import { renderJobList, renderSelectedJobList } from "../../scripts/render.js"

renderJobList(jobsData)
renderSelectedJobList()

export function applyOrRemove (event) {
    const id = event.target.id
    const list = JSON.parse(localStorage.getItem('list')) || []
    const foundJob = list.find(job => job.id == id)

    if (foundJob) {
        const foundIndex = list.findIndex(job => job.id == id)
        list.splice(foundIndex, 1)
    } else {
        const job = jobsData.find(job => job.id == id)
        list.push(job)
    }
    
    localStorage.setItem('list', JSON.stringify(list))
    renderSelectedJobList()
    // Calling again to update button text
    renderJobList(jobsData)
}