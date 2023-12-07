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
export type FaImagesProps = typeof __propDef.props;
export type FaImagesEvents = typeof __propDef.events;
export type FaImagesSlots = typeof __propDef.slots;
export default class FaImages extends SvelteComponentTyped<FaImagesProps, FaImagesEvents, FaImagesSlots> {
}
export {};
