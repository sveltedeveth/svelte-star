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
export type TiWeatherDownpourProps = typeof __propDef.props;
export type TiWeatherDownpourEvents = typeof __propDef.events;
export type TiWeatherDownpourSlots = typeof __propDef.slots;
export default class TiWeatherDownpour extends SvelteComponentTyped<TiWeatherDownpourProps, TiWeatherDownpourEvents, TiWeatherDownpourSlots> {
}
export {};
