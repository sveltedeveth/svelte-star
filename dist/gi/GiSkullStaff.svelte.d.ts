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
export type GiSkullStaffProps = typeof __propDef.props;
export type GiSkullStaffEvents = typeof __propDef.events;
export type GiSkullStaffSlots = typeof __propDef.slots;
export default class GiSkullStaff extends SvelteComponentTyped<GiSkullStaffProps, GiSkullStaffEvents, GiSkullStaffSlots> {
}
export {};
