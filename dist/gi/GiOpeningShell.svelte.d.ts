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
export type GiOpeningShellProps = typeof __propDef.props;
export type GiOpeningShellEvents = typeof __propDef.events;
export type GiOpeningShellSlots = typeof __propDef.slots;
export default class GiOpeningShell extends SvelteComponentTyped<GiOpeningShellProps, GiOpeningShellEvents, GiOpeningShellSlots> {
}
export {};
