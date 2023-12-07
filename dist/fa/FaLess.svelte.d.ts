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
export type FaLessProps = typeof __propDef.props;
export type FaLessEvents = typeof __propDef.events;
export type FaLessSlots = typeof __propDef.slots;
export default class FaLess extends SvelteComponentTyped<FaLessProps, FaLessEvents, FaLessSlots> {
}
export {};
