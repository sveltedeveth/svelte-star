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
export type TiWeatherNightProps = typeof __propDef.props;
export type TiWeatherNightEvents = typeof __propDef.events;
export type TiWeatherNightSlots = typeof __propDef.slots;
export default class TiWeatherNight extends SvelteComponentTyped<TiWeatherNightProps, TiWeatherNightEvents, TiWeatherNightSlots> {
}
export {};
