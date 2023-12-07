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
export type GiTwinShellProps = typeof __propDef.props;
export type GiTwinShellEvents = typeof __propDef.events;
export type GiTwinShellSlots = typeof __propDef.slots;
export default class GiTwinShell extends SvelteComponentTyped<GiTwinShellProps, GiTwinShellEvents, GiTwinShellSlots> {
}
export {};
