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
export type FaTerminalProps = typeof __propDef.props;
export type FaTerminalEvents = typeof __propDef.events;
export type FaTerminalSlots = typeof __propDef.slots;
export default class FaTerminal extends SvelteComponentTyped<FaTerminalProps, FaTerminalEvents, FaTerminalSlots> {
}
export {};
