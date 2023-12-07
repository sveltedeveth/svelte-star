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
export type FaEyeProps = typeof __propDef.props;
export type FaEyeEvents = typeof __propDef.events;
export type FaEyeSlots = typeof __propDef.slots;
export default class FaEye extends SvelteComponentTyped<FaEyeProps, FaEyeEvents, FaEyeSlots> {
}
export {};
