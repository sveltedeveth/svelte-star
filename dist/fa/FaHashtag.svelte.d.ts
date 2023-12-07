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
export type FaHashtagProps = typeof __propDef.props;
export type FaHashtagEvents = typeof __propDef.events;
export type FaHashtagSlots = typeof __propDef.slots;
export default class FaHashtag extends SvelteComponentTyped<FaHashtagProps, FaHashtagEvents, FaHashtagSlots> {
}
export {};
