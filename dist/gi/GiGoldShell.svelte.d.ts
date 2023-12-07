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
export type GiGoldShellProps = typeof __propDef.props;
export type GiGoldShellEvents = typeof __propDef.events;
export type GiGoldShellSlots = typeof __propDef.slots;
export default class GiGoldShell extends SvelteComponentTyped<GiGoldShellProps, GiGoldShellEvents, GiGoldShellSlots> {
}
export {};
