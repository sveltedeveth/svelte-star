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
export type FaRegSmileProps = typeof __propDef.props;
export type FaRegSmileEvents = typeof __propDef.events;
export type FaRegSmileSlots = typeof __propDef.slots;
export default class FaRegSmile extends SvelteComponentTyped<FaRegSmileProps, FaRegSmileEvents, FaRegSmileSlots> {
}
export {};
