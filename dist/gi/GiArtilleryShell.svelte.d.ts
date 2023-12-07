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
export type GiArtilleryShellProps = typeof __propDef.props;
export type GiArtilleryShellEvents = typeof __propDef.events;
export type GiArtilleryShellSlots = typeof __propDef.slots;
export default class GiArtilleryShell extends SvelteComponentTyped<GiArtilleryShellProps, GiArtilleryShellEvents, GiArtilleryShellSlots> {
}
export {};
