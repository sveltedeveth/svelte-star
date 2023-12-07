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
export type GiAnchorProps = typeof __propDef.props;
export type GiAnchorEvents = typeof __propDef.events;
export type GiAnchorSlots = typeof __propDef.slots;
export default class GiAnchor extends SvelteComponentTyped<GiAnchorProps, GiAnchorEvents, GiAnchorSlots> {
}
export {};
