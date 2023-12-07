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
export type MdClosedCaptionProps = typeof __propDef.props;
export type MdClosedCaptionEvents = typeof __propDef.events;
export type MdClosedCaptionSlots = typeof __propDef.slots;
export default class MdClosedCaption extends SvelteComponentTyped<MdClosedCaptionProps, MdClosedCaptionEvents, MdClosedCaptionSlots> {
}
export {};
