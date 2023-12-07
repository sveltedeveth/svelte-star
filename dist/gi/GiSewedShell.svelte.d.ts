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
export type GiSewedShellProps = typeof __propDef.props;
export type GiSewedShellEvents = typeof __propDef.events;
export type GiSewedShellSlots = typeof __propDef.slots;
export default class GiSewedShell extends SvelteComponentTyped<GiSewedShellProps, GiSewedShellEvents, GiSewedShellSlots> {
}
export {};
