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
export type DiTerminalProps = typeof __propDef.props;
export type DiTerminalEvents = typeof __propDef.events;
export type DiTerminalSlots = typeof __propDef.slots;
export default class DiTerminal extends SvelteComponentTyped<DiTerminalProps, DiTerminalEvents, DiTerminalSlots> {
}
export {};
