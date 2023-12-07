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
export type TiPhoneProps = typeof __propDef.props;
export type TiPhoneEvents = typeof __propDef.events;
export type TiPhoneSlots = typeof __propDef.slots;
export default class TiPhone extends SvelteComponentTyped<TiPhoneProps, TiPhoneEvents, TiPhoneSlots> {
}
export {};
