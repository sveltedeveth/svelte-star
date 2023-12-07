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
export type TiInfoOutlineProps = typeof __propDef.props;
export type TiInfoOutlineEvents = typeof __propDef.events;
export type TiInfoOutlineSlots = typeof __propDef.slots;
export default class TiInfoOutline extends SvelteComponentTyped<TiInfoOutlineProps, TiInfoOutlineEvents, TiInfoOutlineSlots> {
}
export {};
