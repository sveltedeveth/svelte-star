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
export type IoMdImageProps = typeof __propDef.props;
export type IoMdImageEvents = typeof __propDef.events;
export type IoMdImageSlots = typeof __propDef.slots;
export default class IoMdImage extends SvelteComponentTyped<IoMdImageProps, IoMdImageEvents, IoMdImageSlots> {
}
export {};
