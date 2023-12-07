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
export type GoTerminalProps = typeof __propDef.props;
export type GoTerminalEvents = typeof __propDef.events;
export type GoTerminalSlots = typeof __propDef.slots;
export default class GoTerminal extends SvelteComponentTyped<GoTerminalProps, GoTerminalEvents, GoTerminalSlots> {
}
export {};
