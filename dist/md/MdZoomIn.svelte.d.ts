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
export type MdZoomInProps = typeof __propDef.props;
export type MdZoomInEvents = typeof __propDef.events;
export type MdZoomInSlots = typeof __propDef.slots;
export default class MdZoomIn extends SvelteComponentTyped<MdZoomInProps, MdZoomInEvents, MdZoomInSlots> {
}
export {};
