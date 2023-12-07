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
export type TiWeatherShowerProps = typeof __propDef.props;
export type TiWeatherShowerEvents = typeof __propDef.events;
export type TiWeatherShowerSlots = typeof __propDef.slots;
export default class TiWeatherShower extends SvelteComponentTyped<TiWeatherShowerProps, TiWeatherShowerEvents, TiWeatherShowerSlots> {
}
export {};
