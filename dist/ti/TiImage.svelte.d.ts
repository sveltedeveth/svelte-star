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
export type TiImageProps = typeof __propDef.props;
export type TiImageEvents = typeof __propDef.events;
export type TiImageSlots = typeof __propDef.slots;
export default class TiImage extends SvelteComponentTyped<TiImageProps, TiImageEvents, TiImageSlots> {
}
export {};
