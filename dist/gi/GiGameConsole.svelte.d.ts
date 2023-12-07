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
export type GiGameConsoleProps = typeof __propDef.props;
export type GiGameConsoleEvents = typeof __propDef.events;
export type GiGameConsoleSlots = typeof __propDef.slots;
export default class GiGameConsole extends SvelteComponentTyped<GiGameConsoleProps, GiGameConsoleEvents, GiGameConsoleSlots> {
}
export {};
