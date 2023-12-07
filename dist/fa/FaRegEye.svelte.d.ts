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
export type FaRegEyeProps = typeof __propDef.props;
export type FaRegEyeEvents = typeof __propDef.events;
export type FaRegEyeSlots = typeof __propDef.slots;
export default class FaRegEye extends SvelteComponentTyped<FaRegEyeProps, FaRegEyeEvents, FaRegEyeSlots> {
}
export {};
