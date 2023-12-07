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
export type TiWeatherCloudyProps = typeof __propDef.props;
export type TiWeatherCloudyEvents = typeof __propDef.events;
export type TiWeatherCloudySlots = typeof __propDef.slots;
export default class TiWeatherCloudy extends SvelteComponentTyped<TiWeatherCloudyProps, TiWeatherCloudyEvents, TiWeatherCloudySlots> {
}
export {};
