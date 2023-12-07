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
export type FaTimesProps = typeof __propDef.props;
export type FaTimesEvents = typeof __propDef.events;
export type FaTimesSlots = typeof __propDef.slots;
export default class FaTimes extends SvelteComponentTyped<FaTimesProps, FaTimesEvents, FaTimesSlots> {
}
export {};
