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
export type FaRegSunProps = typeof __propDef.props;
export type FaRegSunEvents = typeof __propDef.events;
export type FaRegSunSlots = typeof __propDef.slots;
export default class FaRegSun extends SvelteComponentTyped<FaRegSunProps, FaRegSunEvents, FaRegSunSlots> {
}
export {};
