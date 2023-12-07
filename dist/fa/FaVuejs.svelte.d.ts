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
export type FaVuejsProps = typeof __propDef.props;
export type FaVuejsEvents = typeof __propDef.events;
export type FaVuejsSlots = typeof __propDef.slots;
export default class FaVuejs extends SvelteComponentTyped<FaVuejsProps, FaVuejsEvents, FaVuejsSlots> {
}
export {};
