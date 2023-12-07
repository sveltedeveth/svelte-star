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
export type TiRadarOutlineProps = typeof __propDef.props;
export type TiRadarOutlineEvents = typeof __propDef.events;
export type TiRadarOutlineSlots = typeof __propDef.slots;
export default class TiRadarOutline extends SvelteComponentTyped<TiRadarOutlineProps, TiRadarOutlineEvents, TiRadarOutlineSlots> {
}
export {};
