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
export type FaRegImageProps = typeof __propDef.props;
export type FaRegImageEvents = typeof __propDef.events;
export type FaRegImageSlots = typeof __propDef.slots;
export default class FaRegImage extends SvelteComponentTyped<FaRegImageProps, FaRegImageEvents, FaRegImageSlots> {
}
export {};
