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
export type FaSassProps = typeof __propDef.props;
export type FaSassEvents = typeof __propDef.events;
export type FaSassSlots = typeof __propDef.slots;
export default class FaSass extends SvelteComponentTyped<FaSassProps, FaSassEvents, FaSassSlots> {
}
export {};
