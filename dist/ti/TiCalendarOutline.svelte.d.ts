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
export type TiCalendarOutlineProps = typeof __propDef.props;
export type TiCalendarOutlineEvents = typeof __propDef.events;
export type TiCalendarOutlineSlots = typeof __propDef.slots;
export default class TiCalendarOutline extends SvelteComponentTyped<TiCalendarOutlineProps, TiCalendarOutlineEvents, TiCalendarOutlineSlots> {
}
export {};
