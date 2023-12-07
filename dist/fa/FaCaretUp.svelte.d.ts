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
export type FaCaretUpProps = typeof __propDef.props;
export type FaCaretUpEvents = typeof __propDef.events;
export type FaCaretUpSlots = typeof __propDef.slots;
export default class FaCaretUp extends SvelteComponentTyped<FaCaretUpProps, FaCaretUpEvents, FaCaretUpSlots> {
}
export {};
