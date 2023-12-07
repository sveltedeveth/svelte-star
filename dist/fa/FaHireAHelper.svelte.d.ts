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
export type FaHireAHelperProps = typeof __propDef.props;
export type FaHireAHelperEvents = typeof __propDef.events;
export type FaHireAHelperSlots = typeof __propDef.slots;
export default class FaHireAHelper extends SvelteComponentTyped<FaHireAHelperProps, FaHireAHelperEvents, FaHireAHelperSlots> {
}
export {};
