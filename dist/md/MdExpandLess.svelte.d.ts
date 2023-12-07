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
export type MdExpandLessProps = typeof __propDef.props;
export type MdExpandLessEvents = typeof __propDef.events;
export type MdExpandLessSlots = typeof __propDef.slots;
export default class MdExpandLess extends SvelteComponentTyped<MdExpandLessProps, MdExpandLessEvents, MdExpandLessSlots> {
}
export {};
