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
export type MdConfirmationNumberProps = typeof __propDef.props;
export type MdConfirmationNumberEvents = typeof __propDef.events;
export type MdConfirmationNumberSlots = typeof __propDef.slots;
export default class MdConfirmationNumber extends SvelteComponentTyped<MdConfirmationNumberProps, MdConfirmationNumberEvents, MdConfirmationNumberSlots> {
}
export {};
