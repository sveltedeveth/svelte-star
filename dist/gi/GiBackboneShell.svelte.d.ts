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
export type GiBackboneShellProps = typeof __propDef.props;
export type GiBackboneShellEvents = typeof __propDef.events;
export type GiBackboneShellSlots = typeof __propDef.slots;
export default class GiBackboneShell extends SvelteComponentTyped<GiBackboneShellProps, GiBackboneShellEvents, GiBackboneShellSlots> {
}
export {};
