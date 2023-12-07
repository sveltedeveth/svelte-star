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
export type MdRemoveRedEyeProps = typeof __propDef.props;
export type MdRemoveRedEyeEvents = typeof __propDef.events;
export type MdRemoveRedEyeSlots = typeof __propDef.slots;
export default class MdRemoveRedEye extends SvelteComponentTyped<MdRemoveRedEyeProps, MdRemoveRedEyeEvents, MdRemoveRedEyeSlots> {
}
export {};
