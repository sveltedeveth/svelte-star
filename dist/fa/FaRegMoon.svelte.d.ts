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
export type FaRegMoonProps = typeof __propDef.props;
export type FaRegMoonEvents = typeof __propDef.events;
export type FaRegMoonSlots = typeof __propDef.slots;
export default class FaRegMoon extends SvelteComponentTyped<FaRegMoonProps, FaRegMoonEvents, FaRegMoonSlots> {
}
export {};
