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
export type IoMdApertureProps = typeof __propDef.props;
export type IoMdApertureEvents = typeof __propDef.events;
export type IoMdApertureSlots = typeof __propDef.slots;
export default class IoMdAperture extends SvelteComponentTyped<IoMdApertureProps, IoMdApertureEvents, IoMdApertureSlots> {
}
export {};
