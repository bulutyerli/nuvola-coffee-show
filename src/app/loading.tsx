import styles from '.././app/styles/loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.svg_wrapper}>
        <svg
          version="1.1"
          id="coffee"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            className={`${styles.steam} ${styles.steam1}`}
            d="M221.4,65.5l-4.9-6.2c-7.3-9.1-7.3-21.8,0-30.9c3.3-4.1,2.6-10.1-1.5-13.3c-4.1-3.3-10.1-2.6-13.3,1.5
	c-12.8,16.1-12.7,38.5,0,54.6l4.9,6.2c9.5,11.9,9.5,28.5,0,40.4l-5.1,6.4c-3.3,4.1-2.6,10.1,1.5,13.3c1.7,1.4,3.8,2.1,5.9,2.1
	c2.8,0,5.6-1.2,7.4-3.6l5.1-6.4C236.4,110.7,236.4,84.4,221.4,65.5z"
          />
          <path
            className={`${styles.steam} ${styles.steam2}`}
            d="M274,86.9l-4.9-6.2c-7.3-9.1-7.3-21.8,0-30.9c3.3-4.1,2.6-10.1-1.5-13.3c-4.1-3.3-10.1-2.6-13.3,1.5
	c-12.8,16.1-12.7,38.5,0,54.6l4.9,6.2c9.5,11.9,9.5,28.5,0,40.4l-5.1,6.4c-3.3,4.1-2.6,10.1,1.5,13.3c1.7,1.4,3.8,2.1,5.9,2.1
	c2.8,0,5.6-1.2,7.4-3.6l5.1-6.4C289,132.1,289,105.7,274,86.9z"
          />
          <path
            className={`${styles.steam} ${styles.steam3}`}
            d="M168.8,86.9l-4.9-6.2c-7.3-9.1-7.3-21.8,0-30.9c3.3-4.1,2.6-10.1-1.5-13.3c-4.1-3.3-10.1-2.6-13.3,1.5
	c-12.8,16.1-12.7,38.5,0,54.6l4.9,6.2c9.5,11.9,9.5,28.5,0,40.4l-5.1,6.4c-3.3,4.1-2.6,10.1,1.5,13.3c1.7,1.4,3.8,2.1,5.9,2.1
	c2.8,0,5.6-1.2,7.4-3.6l5.1-6.4C183.8,132.1,183.8,105.7,168.8,86.9z"
          />
          <g>
            <path
              className={styles.coffee_cup}
              d="M489.5,209h-77.8v-20.1c0-5.2-4.3-9.5-9.5-9.5h-205c-5.2,0-9.5,4.2-9.5,9.5c0,5.2,4.3,9.5,9.5,9.5h195.5v72.8
		c0,63.9-34.1,123.3-89.2,155.7H121.2C66.1,394.5,32,335.1,32,271.2v-72.8h63.6c5.2,0,9.5-4.2,9.5-9.5c0-5.2-4.3-9.5-9.5-9.5H22.5
		c-5.2,0-9.5,4.2-9.5,9.5v82.3c0,35.9,9.6,71.1,27.9,101.7c12.3,20.7,28.3,39,47,53.9H22.5c-5.2,0-9.5,4.2-9.5,9.5
		c0,34.5,28.1,62.6,62.6,62.6h296.2c34.5,0,62.6-28.1,62.6-62.6c0-5.2-4.3-9.5-9.5-9.5h-88.1c17.2-13.8,32.1-30.4,44-49h26.8
		c50.4,0,91.4-41,91.4-91.4v-67.9C499,213.3,494.8,209,489.5,209z M414.4,445.8c-4.3,19.5-21.8,34.2-42.6,34.2H75.6
		c-20.8,0-38.3-14.6-42.6-34.2h85.7H306H414.4z M411.7,271.2V266H442v20.4c0,19-15.5,34.5-34.5,34.5h-2.2
		C409.5,304.7,411.7,288,411.7,271.2z M480,286.4c0,40-32.5,72.5-72.5,72.5h-16.2c3-6.2,5.7-12.5,8.1-19h8.1
		c29.5,0,53.5-24,53.5-53.5v-29.9c0-5.2-4.3-9.5-9.5-9.5h-39.9v-19H480V286.4z"
            />
            <path
              className={styles.coffee_cup}
              d="M148.9,198.4c2.5,0,4.9-1,6.7-2.8c1.8-1.8,2.8-4.2,2.8-6.7c0-2.5-1-4.9-2.8-6.7c-1.8-1.8-4.2-2.8-6.7-2.8s-4.9,1-6.7,2.8
		c-1.8,1.8-2.8,4.2-2.8,6.7s1,4.9,2.8,6.7C144,197.4,146.4,198.4,148.9,198.4z"
            />
            <path
              className={styles.coffee_cup}
              d="M321.4,379.6c28.4-28.7,44.7-68.2,44.7-108.4c0-5.2-4.3-9.5-9.5-9.5s-9.5,4.2-9.5,9.5c0,35.2-14.3,69.9-39.2,95
		c-3.7,3.7-3.7,9.7,0.1,13.4c1.9,1.8,4.3,2.8,6.7,2.8C317.1,382.4,319.5,381.4,321.4,379.6z"
            />
            <path
              className={styles.coffee_cup}
              d="M283.5,406.2c1.6,0,3.2-0.4,4.7-1.2l0.2-0.1c4.6-2.6,6.2-8.4,3.6-12.9c-2.6-4.6-8.4-6.2-12.9-3.6l-0.2,0.1
		c-4.6,2.6-6.2,8.4-3.6,12.9C277,404.5,280.2,406.2,283.5,406.2z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
