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
export type MdCallToActionProps = typeof __propDef.props;
export type MdCallToActionEvents = typeof __propDef.events;
export type MdCallToActionSlots = typeof __propDef.slots;
export default class MdCallToAction extends SvelteComponentTyped<MdCallToActionProps, MdCallToActionEvents, MdCallToActionSlots> {
}
export {};
