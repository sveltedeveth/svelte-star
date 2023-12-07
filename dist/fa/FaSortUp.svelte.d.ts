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
export type FaSortUpProps = typeof __propDef.props;
export type FaSortUpEvents = typeof __propDef.events;
export type FaSortUpSlots = typeof __propDef.slots;
export default class FaSortUp extends SvelteComponentTyped<FaSortUpProps, FaSortUpEvents, FaSortUpSlots> {
}
export {};
