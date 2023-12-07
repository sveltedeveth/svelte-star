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
export type FaQuidditchProps = typeof __propDef.props;
export type FaQuidditchEvents = typeof __propDef.events;
export type FaQuidditchSlots = typeof __propDef.slots;
export default class FaQuidditch extends SvelteComponentTyped<FaQuidditchProps, FaQuidditchEvents, FaQuidditchSlots> {
}
export {};
