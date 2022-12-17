import { applyButton, removeButton } from "../pages/home/index.js"
import { jobsList } from "./jobsData.js"

function renderJobList (array) {
    const ul = document.querySelector('.job__list')
    ul.innerHTML = ''

    array.forEach(object => {
        const li = renderJobCard(object)
        ul.appendChild(li)
    })
    applyButton()
}

function renderJobCard (object) {
    const {id, title, enterprise, location, description, modalities} = object
    
    const li = document.createElement('li')
    li.classList.add('job__card')
    li.setAttribute('id', id)

    const jobCardHeader = document.createElement('div')
    jobCardHeader.classList.add('job__header')

    const jobCardTitle = document.createElement('h4')
    jobCardTitle.classList.add('main__title--4')
    jobCardTitle.innerText = title

    const jobCardCompanyDetails = document.createElement('div')
    jobCardCompanyDetails.classList.add('job__company')

    const jobCardEnterprise = document.createElement('p')
    jobCardEnterprise.classList.add('main__text--3')
    jobCardEnterprise.innerText = enterprise

    const jobCardLocation = document.createElement('p')
    jobCardLocation.classList.add('main__text--3')
    jobCardLocation.innerText = location

    const jobCardBody = document.createElement('p')
    jobCardBody.classList = 'main__text--2 text-justify'
    jobCardBody.innerText = description

    const jobCardFooter = document.createElement('div')
    jobCardFooter.classList.add('job__footer')

    const jobCardModalitiesContainer = document.createElement('div')
    
    const jobCardModality1 = document.createElement('p')
    jobCardModality1.classList = 'job__modality main__text--3'
    jobCardModality1.innerText = modalities[0]

    const jobCardModality2 = document.createElement('p')
    jobCardModality2.classList = 'job__modality main__text--3'
    jobCardModality2.innerText = modalities[1]

    const jobCardButton = document.createElement('button')
    jobCardButton.classList.add('job__button')
    jobCardButton.setAttribute('id', id)
    jobCardButton.innerText = 'Candidatar'

    jobCardModalitiesContainer.append(jobCardModality1, jobCardModality2)
    jobCardFooter.append(jobCardModalitiesContainer, jobCardButton)
    jobCardCompanyDetails.append(jobCardEnterprise, jobCardLocation)
    jobCardHeader.append(jobCardTitle, jobCardCompanyDetails)
    li.append(jobCardHeader, jobCardBody, jobCardFooter)
    return li
}

function renderSelectedJobList () {
    const warning = document.getElementById('warning')
    const selectedJobList = JSON.parse(localStorage.getItem('selectedJobList'))
    const ul = document.querySelector('#selected_job_list')
    ul.innerHTML = ''
    
    if (jobsList == []) {
        warning.style.display = 'flex'
    } else {
        warning.style.display = 'none'
    }
    
    selectedJobList.forEach(object => {
        const li = renderSelectedJobCard(object)
        ul.appendChild(li)
    })
    removeButton()
}

function renderSelectedJobCard (object) {
    const {id, title, enterprise, location} = object

    const li = document.createElement('li')
    li.classList.add('selected_job_card')
    li.setAttribute('id', id)

    const asideCardHeader = document.createElement('div')
    asideCardHeader.classList.add('aside__card_header')

    const asideCardTitle = document.createElement('h5')
    asideCardTitle.classList.add('main__title--5')
    asideCardTitle.innerText = title

    const asideCardButton = document.createElement('button')
    asideCardButton.classList.add('aside__card_button')
    asideCardButton.setAttribute('id', id)

    const jobCardCompanyDetails = document.createElement('div')
    jobCardCompanyDetails.classList.add('job__company')

    const jobCardEnterprise = document.createElement('p')
    jobCardEnterprise.classList.add('main__text--3')
    jobCardEnterprise.innerText = enterprise

    const jobCardLocation = document.createElement('p')
    jobCardLocation.classList.add('main__text--3')
    jobCardLocation.innerText = location

    jobCardCompanyDetails.append(jobCardEnterprise, jobCardLocation)
    asideCardHeader.append(asideCardTitle, asideCardButton)
    li.append(asideCardHeader, jobCardCompanyDetails)
    
    return li
}

export { renderJobList, renderJobCard, renderSelectedJobList, renderSelectedJobCard }