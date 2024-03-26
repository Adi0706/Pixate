import {Prompts} from '../Media/constants/Prompts'

export function getRandomPrompt(Prompt){
    const randomIndex = Math.floor(Math.random() * Prompts.length)
    const randomPrompt = Prompts[randomIndex]
    if(randomPrompt === Prompt) return getRandomPrompt(Prompt)

    return randomPrompt ;

}