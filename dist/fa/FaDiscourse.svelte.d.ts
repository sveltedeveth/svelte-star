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
export type FaDiscourseProps = typeof __propDef.props;
export type FaDiscourseEvents = typeof __propDef.events;
export type FaDiscourseSlots = typeof __propDef.slots;
export default class FaDiscourse extends SvelteComponentTyped<FaDiscourseProps, FaDiscourseEvents, FaDiscourseSlots> {
}
export {};
