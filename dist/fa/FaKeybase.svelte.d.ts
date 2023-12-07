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
export type FaKeybaseProps = typeof __propDef.props;
export type FaKeybaseEvents = typeof __propDef.events;
export type FaKeybaseSlots = typeof __propDef.slots;
export default class FaKeybase extends SvelteComponentTyped<FaKeybaseProps, FaKeybaseEvents, FaKeybaseSlots> {
}
export {};
