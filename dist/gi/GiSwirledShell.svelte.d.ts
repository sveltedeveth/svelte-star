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
export type GiSwirledShellProps = typeof __propDef.props;
export type GiSwirledShellEvents = typeof __propDef.events;
export type GiSwirledShellSlots = typeof __propDef.slots;
export default class GiSwirledShell extends SvelteComponentTyped<GiSwirledShellProps, GiSwirledShellEvents, GiSwirledShellSlots> {
}
export {};
