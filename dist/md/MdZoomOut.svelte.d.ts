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
export type MdZoomOutProps = typeof __propDef.props;
export type MdZoomOutEvents = typeof __propDef.events;
export type MdZoomOutSlots = typeof __propDef.slots;
export default class MdZoomOut extends SvelteComponentTyped<MdZoomOutProps, MdZoomOutEvents, MdZoomOutSlots> {
}
export {};
