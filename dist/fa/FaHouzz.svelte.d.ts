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
export type FaHouzzProps = typeof __propDef.props;
export type FaHouzzEvents = typeof __propDef.events;
export type FaHouzzSlots = typeof __propDef.slots;
export default class FaHouzz extends SvelteComponentTyped<FaHouzzProps, FaHouzzEvents, FaHouzzSlots> {
}
export {};
