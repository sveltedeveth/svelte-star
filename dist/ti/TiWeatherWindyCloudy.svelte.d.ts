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
export type TiWeatherWindyCloudyProps = typeof __propDef.props;
export type TiWeatherWindyCloudyEvents = typeof __propDef.events;
export type TiWeatherWindyCloudySlots = typeof __propDef.slots;
export default class TiWeatherWindyCloudy extends SvelteComponentTyped<TiWeatherWindyCloudyProps, TiWeatherWindyCloudyEvents, TiWeatherWindyCloudySlots> {
}
export {};
