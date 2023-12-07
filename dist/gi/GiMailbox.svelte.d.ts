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
export type GiMailboxProps = typeof __propDef.props;
export type GiMailboxEvents = typeof __propDef.events;
export type GiMailboxSlots = typeof __propDef.slots;
export default class GiMailbox extends SvelteComponentTyped<GiMailboxProps, GiMailboxEvents, GiMailboxSlots> {
}
export {};
