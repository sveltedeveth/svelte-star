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
export type TiRadarProps = typeof __propDef.props;
export type TiRadarEvents = typeof __propDef.events;
export type TiRadarSlots = typeof __propDef.slots;
export default class TiRadar extends SvelteComponentTyped<TiRadarProps, TiRadarEvents, TiRadarSlots> {
}
export {};
