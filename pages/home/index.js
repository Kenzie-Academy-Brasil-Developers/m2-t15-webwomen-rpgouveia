import { jobsData, jobsList } from "./jobsData.js"
import { renderJobList, renderSelectedJobList } from "../../scripts/render.js"

renderJobList(jobsData)

export function applyButton () {
    const buttons = document.querySelectorAll('.job__button')

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(event.target)
            // console.log(event.target.innerText, `job_card_id: ${event.target.id}`)
            if (event.target.innerText === 'Candidatar') {
                let foundJob = jobsData.find((object) => {
                    return object.id == event.target.id
                })
                if (!jobsList.includes(foundJob)) {
                    jobsList.push(foundJob)
                    localStorage.setItem('selectedJobList', JSON.stringify(jobsList))
                }
                renderSelectedJobList()
                event.target.innerText = 'Remover Candidatura'
            } else {
                let foundJob = jobsData.find((object) => {
                    return object.id == event.target.id
                })
                if (jobsList.includes(foundJob)) {
                    const foundIndex = jobsList.findIndex(object => object.id == event.target.id)
                    jobsList.splice(foundIndex, 1)
                    localStorage.removeItem('selectedJobList')
                    localStorage.setItem('selectedJobList', JSON.stringify(jobsList))
                }
                renderSelectedJobList()
                event.target.innerText = 'Candidatar'
            }
        })
    })
}

export function removeButton () {
    const applyButtons = [...document.querySelectorAll('.job__button')]
    const removeButtons = document.querySelectorAll('.aside__card_button')

    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            let foundJob = jobsData.find(object => {
                return object.id == event.target.id
            })

            if (jobsList.includes(foundJob)) {
                const foundIndex = jobsList.findIndex(object => object.id == event.target.id)
                jobsList.splice(foundIndex, 1)
                localStorage.removeItem('selectedJobList')
                localStorage.setItem('selectedJobList', JSON.stringify(jobsList))
            }
            renderSelectedJobList()
            let foundApplyButton = applyButtons.find(object => object.id == event.target.id)
            foundApplyButton.innerText = 'Candidatar'
        })
    })
}