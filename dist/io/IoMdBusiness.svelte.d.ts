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
export type IoMdBusinessProps = typeof __propDef.props;
export type IoMdBusinessEvents = typeof __propDef.events;
export type IoMdBusinessSlots = typeof __propDef.slots;
export default class IoMdBusiness extends SvelteComponentTyped<IoMdBusinessProps, IoMdBusinessEvents, IoMdBusinessSlots> {
}
export {};
