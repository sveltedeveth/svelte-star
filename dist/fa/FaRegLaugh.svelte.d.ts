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
export type FaRegLaughProps = typeof __propDef.props;
export type FaRegLaughEvents = typeof __propDef.events;
export type FaRegLaughSlots = typeof __propDef.slots;
export default class FaRegLaugh extends SvelteComponentTyped<FaRegLaughProps, FaRegLaughEvents, FaRegLaughSlots> {
}
export {};
