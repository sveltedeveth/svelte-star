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
export type FaHanukiahProps = typeof __propDef.props;
export type FaHanukiahEvents = typeof __propDef.events;
export type FaHanukiahSlots = typeof __propDef.slots;
export default class FaHanukiah extends SvelteComponentTyped<FaHanukiahProps, FaHanukiahEvents, FaHanukiahSlots> {
}
export {};
