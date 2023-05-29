import { FC } from 'react'
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa"
import { SiExpress, SiGit, SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si"

interface TechCardProps {
    techName: string
}

const TechCard: FC<TechCardProps> = (props) => {

    const { techName } = props

    return (
        <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 md:max-4xl:p-20 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
            {techName === "React" ? <FaReact className="w-10 h-10" /> :
                techName === "Express" ? <SiExpress className="w-10 h-10" /> :
                    techName === "NodeJS" ? <FaNodeJs className="w-10 h-10" /> :
                        techName === "MongoDB" ? <SiMongodb className="w-10 h-10" /> :
                            techName === "Tailwindcss" ? <SiTailwindcss className="w-10 h-10" /> :
                                techName === "Figma" ? <FaFigma className="w-10 h-10" /> :
                                    techName === "Git" ? <SiGit className="w-10 h-10" /> :
                                        techName === "PostgreSQL" ? <SiPostgresql className="w-10 h-10" /> :
                                            techName === "NextJS" ? <SiNextdotjs className="w-10 h-10" /> : techName === "TypeScript" ? <SiTypescript className="w-10 h-10" /> : ""
            }
            <span className='text-xl font-extrabold'>{techName}</span>
        </div>
    )
}

export { TechCard };