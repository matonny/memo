import styles from "./Toggle.module.css";

type ToggleProps = Readonly<{
  label: string;
  onclick: () => void;
  checked: boolean;
}>;

export const Toggle = ({ label, onclick, checked }: ToggleProps) => {
  return (
    <>
      <input
        onClick={onclick}
        className={styles.input}
        type="checkbox"
        checked={checked}
        id={label}
      ></input>
      <label htmlFor={label}>
        <svg
          version="1.1"
          width="1.5em"
          height="1.5em"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 489.242 489.242"
          xmlSpace="preserve"
        >
          <title>Light bulb</title>
          <desc>
            Light bulb icon serving as an indicator of a dark mode switch
          </desc>
          <g>
            <g>
              <path
                d="M416.321,171.943c0-97.8-82.2-176.9-181-171.7c-89.5,5.2-160.3,79.1-162.4,168.6c0,44.7,16.6,86.3,45.8,118.6
			c47.7,51.1,41.6,110.3,41.6,110.3c0,11.4,9.4,20.8,20.8,20.8h126.9c11.4,0,20.8-9.4,21.8-20.8c0,0-7-57.7,40.6-109.2
			C399.621,257.243,416.321,215.643,416.321,171.943z M288.321,377.943h-87.4c-2.1-42.7-20.8-84.3-51-116.5
			c-22.9-25-34.3-57.2-34.3-90.5c1-68.7,54.1-124.8,122.8-129c74.9-4.2,137.3,56.2,137.3,130c0,32.3-12.5,64.5-35.4,88.4
			C309.121,293.643,290.421,335.243,288.321,377.943z"
              />
              <path
                d="M281.021,447.643h-73.9c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h73.9c11.4,0,20.8-9.4,20.8-20.8
			C301.821,457.043,292.521,447.643,281.021,447.643z"
              />
            </g>
          </g>
        </svg>
      </label>
    </>
  );
};
