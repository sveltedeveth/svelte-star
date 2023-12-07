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
export type FaAnchorProps = typeof __propDef.props;
export type FaAnchorEvents = typeof __propDef.events;
export type FaAnchorSlots = typeof __propDef.slots;
export default class FaAnchor extends SvelteComponentTyped<FaAnchorProps, FaAnchorEvents, FaAnchorSlots> {
}
export {};
