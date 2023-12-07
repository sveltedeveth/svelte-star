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
export type FaCashRegisterProps = typeof __propDef.props;
export type FaCashRegisterEvents = typeof __propDef.events;
export type FaCashRegisterSlots = typeof __propDef.slots;
export default class FaCashRegister extends SvelteComponentTyped<FaCashRegisterProps, FaCashRegisterEvents, FaCashRegisterSlots> {
}
export {};
