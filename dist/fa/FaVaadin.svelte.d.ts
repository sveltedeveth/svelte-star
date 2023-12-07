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
export type FaVaadinProps = typeof __propDef.props;
export type FaVaadinEvents = typeof __propDef.events;
export type FaVaadinSlots = typeof __propDef.slots;
export default class FaVaadin extends SvelteComponentTyped<FaVaadinProps, FaVaadinEvents, FaVaadinSlots> {
}
export {};
