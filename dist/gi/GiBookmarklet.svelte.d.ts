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
export type GiBookmarkletProps = typeof __propDef.props;
export type GiBookmarkletEvents = typeof __propDef.events;
export type GiBookmarkletSlots = typeof __propDef.slots;
export default class GiBookmarklet extends SvelteComponentTyped<GiBookmarkletProps, GiBookmarkletEvents, GiBookmarkletSlots> {
}
export {};
