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
export type TiTimesOutlineProps = typeof __propDef.props;
export type TiTimesOutlineEvents = typeof __propDef.events;
export type TiTimesOutlineSlots = typeof __propDef.slots;
export default class TiTimesOutline extends SvelteComponentTyped<TiTimesOutlineProps, TiTimesOutlineEvents, TiTimesOutlineSlots> {
}
export {};
