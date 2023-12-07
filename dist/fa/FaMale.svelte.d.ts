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
export type FaMaleProps = typeof __propDef.props;
export type FaMaleEvents = typeof __propDef.events;
export type FaMaleSlots = typeof __propDef.slots;
export default class FaMale extends SvelteComponentTyped<FaMaleProps, FaMaleEvents, FaMaleSlots> {
}
export {};
