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
export type FaRegDizzyProps = typeof __propDef.props;
export type FaRegDizzyEvents = typeof __propDef.events;
export type FaRegDizzySlots = typeof __propDef.slots;
export default class FaRegDizzy extends SvelteComponentTyped<FaRegDizzyProps, FaRegDizzyEvents, FaRegDizzySlots> {
}
export {};
