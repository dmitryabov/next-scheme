import classes from '../../styles/navigation.module.css';


export default function Navigation() {
    return ( 
     <div className = {classes.navigation_container}>
        <ul className = {classes.navigation} >
            <li>Планирование численности /</li>
            <li>Мастер 2020 /</li>
            <li>Таблица /</li>
            <li>Организационный дизайн /</li>
            <li>Позиции /</li>
            <li> Мои прямые подчиненные</li>
        </ul>
     </div>
    )
}