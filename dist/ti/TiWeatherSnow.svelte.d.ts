import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TiWeatherSnowProps = typeof __propDef.props;
export type TiWeatherSnowEvents = typeof __propDef.events;
export type TiWeatherSnowSlots = typeof __propDef.slots;
export default class TiWeatherSnow extends SvelteComponentTyped<TiWeatherSnowProps, TiWeatherSnowEvents, TiWeatherSnowSlots> {
}
export {};
