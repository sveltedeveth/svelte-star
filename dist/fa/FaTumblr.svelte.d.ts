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
export type FaTumblrProps = typeof __propDef.props;
export type FaTumblrEvents = typeof __propDef.events;
export type FaTumblrSlots = typeof __propDef.slots;
export default class FaTumblr extends SvelteComponentTyped<FaTumblrProps, FaTumblrEvents, FaTumblrSlots> {
}
export {};
