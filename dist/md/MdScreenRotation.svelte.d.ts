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
export type MdScreenRotationProps = typeof __propDef.props;
export type MdScreenRotationEvents = typeof __propDef.events;
export type MdScreenRotationSlots = typeof __propDef.slots;
export default class MdScreenRotation extends SvelteComponentTyped<MdScreenRotationProps, MdScreenRotationEvents, MdScreenRotationSlots> {
}
export {};
