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
export type FaFlipboardProps = typeof __propDef.props;
export type FaFlipboardEvents = typeof __propDef.events;
export type FaFlipboardSlots = typeof __propDef.slots;
export default class FaFlipboard extends SvelteComponentTyped<FaFlipboardProps, FaFlipboardEvents, FaFlipboardSlots> {
}
export {};
