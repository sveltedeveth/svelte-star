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
export type FaUserTimesProps = typeof __propDef.props;
export type FaUserTimesEvents = typeof __propDef.events;
export type FaUserTimesSlots = typeof __propDef.slots;
export default class FaUserTimes extends SvelteComponentTyped<FaUserTimesProps, FaUserTimesEvents, FaUserTimesSlots> {
}
export {};
