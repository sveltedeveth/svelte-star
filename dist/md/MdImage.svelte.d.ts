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
export type MdImageProps = typeof __propDef.props;
export type MdImageEvents = typeof __propDef.events;
export type MdImageSlots = typeof __propDef.slots;
export default class MdImage extends SvelteComponentTyped<MdImageProps, MdImageEvents, MdImageSlots> {
}
export {};
