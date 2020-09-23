const classes = require ('../../styles/sheme.module.css');


export default function Scheme() {
    return ( 
      <>
      <section className={classes.table}>
      <div className={classes.table__subtitle_wrapper}>
        <p className={`${classes.table__subtitle} ${classes.table__subtitle__left}`}>Свойства</p>
        <p className={`${classes.table__subtitle} ${classes.table__subtitle__right}`}>Значение</p>
      </div>
      <ul className={`${classes.table__list} ${classes.list_reset}`}>
        <li className={`${classes.table__item} ${classes.table__item__info}`}>
          <details className={`${classes.details}`} open>
            <summary className={`${classes.summary} ${classes.info}`}> <span>Общая информация</span></summary>
            <ul className={`${classes.info__list} ${classes.list_reset}`}>
              <li className={`${classes.info__item} ${classes.info__item__first}`}>
                <p>Документ</p>
                <p>Профиль требований к должности</p>
              </li>
              <li className={`${classes.info__item} ${classes.info__item__second}`}>
                <p>Должность</p>
                <p>Инженер</p>
              </li>
              <li className={`${classes.info__item} ${classes.info__item__three}`}>
                <p>Функциональное направление</p>
                <p>Логистика</p>
              </li>
              <li className={`${classes.info__item} ${classes.info__item__four}`}>
                <p>Специализация</p>
                <p className={classes.info__special}>Обслуживание и ремонт механического, инергетического и<br/>
                  электрооборудования</p>
              </li>
            </ul>
          </details>
        </li>
        <li className={`${classes.table__item}  ${classes.table__item__education}`}>
          <details className={classes.details} open>
            <summary className={`${classes.table__education} ${classes.summary} ${classes.education}`}><span>Образование</span></summary>
            <ul className={`${classes.info__list} ${classes.info__list__education} ${classes.list_reset}`}>
              <li className={`${classes.info__item} ${classes.info__item__five}`}>
                <p>Степень</p>
                <p>Высшее/Среднее высшее</p>
              </li>
              <li className={`${classes.info__item} ${classes.info__item__six}`}>
                <p>Специализация</p>
                <p>Инженерно-техническая</p>
              </li>
            </ul>
          </details>
        </li>
        <li className={`${classes.table__item} ${classes.table__item__corporate}`}>
          <details className={classes.details} open>
            <summary className={`${classes.table__corporate} ${classes.summary}`}>Корпоративные компетенции</summary>
            <ul className={`${classes.info__list} ${classes.info__list__corporate} ${classes.list_reset}`}>
              <li className={`${classes.info__item} ${classes.info__item__seven}`}>
                <p>Сотрудничество</p>
                <p>1</p>
              </li>
              <li className={`${classes.info__item} ${classes.info__item__eight}`}>
                <p>Коммуникации и убеждения</p>
                <p>2</p>
              </li>
              <li className={`${classes.info__item} ${classes.info__item__nine}`}>
                <p>Достижение результата</p>
                <p>3</p>
              </li>
              <li className={`${classes.info__item} ${classes.info__item__ten}`}>
                <p>Системное мышление</p>
                <p>3</p>
              </li>
              <li className={`${classes.info__item} ${classes.info__item__eleven}`}>
                <p>Культура безопасности</p>
                <p>2</p>
              </li>
              <li className={`${classes.info__item} ${classes.info__item__twelve}`}>
                <p>Сотрудничество</p>
                <p>1</p>
              </li>
            </ul>
          </details>
        </li>
        <li className={`${classes.table__item} ${classes.table__item__requirement}`}>
          <details className={classes.details} open>
            <summary className={`${classes.table__requirement} ${classes.summary}`}>Дополнительные требования</summary>
            <ul className={`${classes.requirement__list} ${classes.list_reset}`}>
              <li className={`${classes.requirement__item__first}`}>
                <details className={`${classes.details} ${classes.tools}`} open>
                  <summary className={`${classes.table__tools} ${classes.summary} ${classes.tools}`}><span>Инструменты</span></summary>
                  <ul className={`${classes.tools__list} ${classes.list_reset}`}>
                    <li className={`${classes.tools__item} ${classes.tools__item__up}`}>Продвинутый уровень</li>
                    <li className={`${classes.tools__item} ${classes.tools__item__down}`}>Продвинутый уровень</li>
                  </ul>
                </details>
              </li>
              <li className={`${classes.requirement__item__second}`}>SAP ERP</li>
              <li className={`${classes.requirement__item__three}`}>SAP HR</li>
              <li className={`${classes.requirement__item__four}`}>
                <details className={`${classes.details} ${classes.language}`} open>
                  <summary className={`${classes.table__language} ${classes.summary} ${classes.language}`}><span>Иностранные языки</span></summary>
                  <ul className={`${classes.language__list}  ${classes.list_reset}`}>
                    <li className={classes.language__item}>Продвинутый уровень</li>
                  </ul>
                </details>
              </li>
              <li className={` ${classes.requirement__item__five}`}> Английский</li>
            </ul>
          </details>
        </li>
      </ul>
    </section>
     </>
    )
};