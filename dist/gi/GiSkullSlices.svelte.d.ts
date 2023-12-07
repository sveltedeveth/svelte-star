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
export type GiSkullSlicesProps = typeof __propDef.props;
export type GiSkullSlicesEvents = typeof __propDef.events;
export type GiSkullSlicesSlots = typeof __propDef.slots;
export default class GiSkullSlices extends SvelteComponentTyped<GiSkullSlicesProps, GiSkullSlicesEvents, GiSkullSlicesSlots> {
}
export {};
