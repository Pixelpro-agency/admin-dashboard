import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Panoramica Statistiche</span>

            <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Il migliore del mese</span><span>Da ufficio</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Elementi</span><span>€ {groupNumber(455)}</span>
                </div>

                <div className={css.card}>
                    <span>Profitto</span><span>€ {groupNumber(370000)}</span>
                </div>

                <div className={css.card}>
                    <span>Media giornaliera</span><span>€ {groupNumber(2000)}</span>
                </div>
            </div>


            <StatisticsChart/>
        </div>
    )
}

export default Statistics