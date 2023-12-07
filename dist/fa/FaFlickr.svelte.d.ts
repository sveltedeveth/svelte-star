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
export type FaFlickrProps = typeof __propDef.props;
export type FaFlickrEvents = typeof __propDef.events;
export type FaFlickrSlots = typeof __propDef.slots;
export default class FaFlickr extends SvelteComponentTyped<FaFlickrProps, FaFlickrEvents, FaFlickrSlots> {
}
export {};
