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
export type MdDashboardProps = typeof __propDef.props;
export type MdDashboardEvents = typeof __propDef.events;
export type MdDashboardSlots = typeof __propDef.slots;
export default class MdDashboard extends SvelteComponentTyped<MdDashboardProps, MdDashboardEvents, MdDashboardSlots> {
}
export {};
