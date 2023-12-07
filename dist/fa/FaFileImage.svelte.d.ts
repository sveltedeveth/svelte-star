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
export type FaFileImageProps = typeof __propDef.props;
export type FaFileImageEvents = typeof __propDef.events;
export type FaFileImageSlots = typeof __propDef.slots;
export default class FaFileImage extends SvelteComponentTyped<FaFileImageProps, FaFileImageEvents, FaFileImageSlots> {
}
export {};
