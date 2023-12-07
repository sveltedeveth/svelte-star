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
export type GiArmouredShellProps = typeof __propDef.props;
export type GiArmouredShellEvents = typeof __propDef.events;
export type GiArmouredShellSlots = typeof __propDef.slots;
export default class GiArmouredShell extends SvelteComponentTyped<GiArmouredShellProps, GiArmouredShellEvents, GiArmouredShellSlots> {
}
export {};
