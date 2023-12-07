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
export type MdTagFacesProps = typeof __propDef.props;
export type MdTagFacesEvents = typeof __propDef.events;
export type MdTagFacesSlots = typeof __propDef.slots;
export default class MdTagFaces extends SvelteComponentTyped<MdTagFacesProps, MdTagFacesEvents, MdTagFacesSlots> {
}
export {};
