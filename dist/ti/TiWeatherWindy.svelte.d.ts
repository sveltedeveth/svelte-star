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
export type TiWeatherWindyProps = typeof __propDef.props;
export type TiWeatherWindyEvents = typeof __propDef.events;
export type TiWeatherWindySlots = typeof __propDef.slots;
export default class TiWeatherWindy extends SvelteComponentTyped<TiWeatherWindyProps, TiWeatherWindyEvents, TiWeatherWindySlots> {
}
export {};
