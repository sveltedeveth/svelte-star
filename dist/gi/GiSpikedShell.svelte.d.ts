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
export type GiSpikedShellProps = typeof __propDef.props;
export type GiSpikedShellEvents = typeof __propDef.events;
export type GiSpikedShellSlots = typeof __propDef.slots;
export default class GiSpikedShell extends SvelteComponentTyped<GiSpikedShellProps, GiSpikedShellEvents, GiSpikedShellSlots> {
}
export {};
