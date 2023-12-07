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
export type TiWeatherStormyProps = typeof __propDef.props;
export type TiWeatherStormyEvents = typeof __propDef.events;
export type TiWeatherStormySlots = typeof __propDef.slots;
export default class TiWeatherStormy extends SvelteComponentTyped<TiWeatherStormyProps, TiWeatherStormyEvents, TiWeatherStormySlots> {
}
export {};
