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
export type TiLinkOutlineProps = typeof __propDef.props;
export type TiLinkOutlineEvents = typeof __propDef.events;
export type TiLinkOutlineSlots = typeof __propDef.slots;
export default class TiLinkOutline extends SvelteComponentTyped<TiLinkOutlineProps, TiLinkOutlineEvents, TiLinkOutlineSlots> {
}
export {};
