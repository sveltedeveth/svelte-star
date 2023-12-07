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
export type GiWaxTabletProps = typeof __propDef.props;
export type GiWaxTabletEvents = typeof __propDef.events;
export type GiWaxTabletSlots = typeof __propDef.slots;
export default class GiWaxTablet extends SvelteComponentTyped<GiWaxTabletProps, GiWaxTabletEvents, GiWaxTabletSlots> {
}
export {};
