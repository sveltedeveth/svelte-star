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
export type TiWeatherSunnyProps = typeof __propDef.props;
export type TiWeatherSunnyEvents = typeof __propDef.events;
export type TiWeatherSunnySlots = typeof __propDef.slots;
export default class TiWeatherSunny extends SvelteComponentTyped<TiWeatherSunnyProps, TiWeatherSunnyEvents, TiWeatherSunnySlots> {
}
export {};
