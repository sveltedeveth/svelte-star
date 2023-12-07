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
export type FaRegUserProps = typeof __propDef.props;
export type FaRegUserEvents = typeof __propDef.events;
export type FaRegUserSlots = typeof __propDef.slots;
export default class FaRegUser extends SvelteComponentTyped<FaRegUserProps, FaRegUserEvents, FaRegUserSlots> {
}
export {};
