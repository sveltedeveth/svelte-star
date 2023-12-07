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
export type TiAnchorProps = typeof __propDef.props;
export type TiAnchorEvents = typeof __propDef.events;
export type TiAnchorSlots = typeof __propDef.slots;
export default class TiAnchor extends SvelteComponentTyped<TiAnchorProps, TiAnchorEvents, TiAnchorSlots> {
}
export {};
