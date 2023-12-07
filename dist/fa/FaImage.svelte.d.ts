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
export type FaImageProps = typeof __propDef.props;
export type FaImageEvents = typeof __propDef.events;
export type FaImageSlots = typeof __propDef.slots;
export default class FaImage extends SvelteComponentTyped<FaImageProps, FaImageEvents, FaImageSlots> {
}
export {};
