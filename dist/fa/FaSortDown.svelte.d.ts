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
export type FaSortDownProps = typeof __propDef.props;
export type FaSortDownEvents = typeof __propDef.events;
export type FaSortDownSlots = typeof __propDef.slots;
export default class FaSortDown extends SvelteComponentTyped<FaSortDownProps, FaSortDownEvents, FaSortDownSlots> {
}
export {};
