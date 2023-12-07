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
export type FaGitterProps = typeof __propDef.props;
export type FaGitterEvents = typeof __propDef.events;
export type FaGitterSlots = typeof __propDef.slots;
export default class FaGitter extends SvelteComponentTyped<FaGitterProps, FaGitterEvents, FaGitterSlots> {
}
export {};
