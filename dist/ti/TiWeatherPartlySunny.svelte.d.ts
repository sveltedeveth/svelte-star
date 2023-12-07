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
export type TiWeatherPartlySunnyProps = typeof __propDef.props;
export type TiWeatherPartlySunnyEvents = typeof __propDef.events;
export type TiWeatherPartlySunnySlots = typeof __propDef.slots;
export default class TiWeatherPartlySunny extends SvelteComponentTyped<TiWeatherPartlySunnyProps, TiWeatherPartlySunnyEvents, TiWeatherPartlySunnySlots> {
}
export {};
