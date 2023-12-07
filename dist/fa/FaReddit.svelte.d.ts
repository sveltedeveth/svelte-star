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
export type FaRedditProps = typeof __propDef.props;
export type FaRedditEvents = typeof __propDef.events;
export type FaRedditSlots = typeof __propDef.slots;
export default class FaReddit extends SvelteComponentTyped<FaRedditProps, FaRedditEvents, FaRedditSlots> {
}
export {};
