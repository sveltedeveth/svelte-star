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
export type GiSpiralShellProps = typeof __propDef.props;
export type GiSpiralShellEvents = typeof __propDef.events;
export type GiSpiralShellSlots = typeof __propDef.slots;
export default class GiSpiralShell extends SvelteComponentTyped<GiSpiralShellProps, GiSpiralShellEvents, GiSpiralShellSlots> {
}
export {};
