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
export type GiNautilusShellProps = typeof __propDef.props;
export type GiNautilusShellEvents = typeof __propDef.events;
export type GiNautilusShellSlots = typeof __propDef.slots;
export default class GiNautilusShell extends SvelteComponentTyped<GiNautilusShellProps, GiNautilusShellEvents, GiNautilusShellSlots> {
}
export {};
