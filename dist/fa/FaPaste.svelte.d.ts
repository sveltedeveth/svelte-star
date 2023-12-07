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
export type FaPasteProps = typeof __propDef.props;
export type FaPasteEvents = typeof __propDef.events;
export type FaPasteSlots = typeof __propDef.slots;
export default class FaPaste extends SvelteComponentTyped<FaPasteProps, FaPasteEvents, FaPasteSlots> {
}
export {};
