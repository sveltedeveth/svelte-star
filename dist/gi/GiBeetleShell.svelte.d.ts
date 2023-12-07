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
export type GiBeetleShellProps = typeof __propDef.props;
export type GiBeetleShellEvents = typeof __propDef.events;
export type GiBeetleShellSlots = typeof __propDef.slots;
export default class GiBeetleShell extends SvelteComponentTyped<GiBeetleShellProps, GiBeetleShellEvents, GiBeetleShellSlots> {
}
export {};
