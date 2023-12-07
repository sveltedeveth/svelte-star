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
export type FaSortProps = typeof __propDef.props;
export type FaSortEvents = typeof __propDef.events;
export type FaSortSlots = typeof __propDef.slots;
export default class FaSort extends SvelteComponentTyped<FaSortProps, FaSortEvents, FaSortSlots> {
}
export {};
