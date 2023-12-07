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
export type GiPhoneProps = typeof __propDef.props;
export type GiPhoneEvents = typeof __propDef.events;
export type GiPhoneSlots = typeof __propDef.slots;
export default class GiPhone extends SvelteComponentTyped<GiPhoneProps, GiPhoneEvents, GiPhoneSlots> {
}
export {};
