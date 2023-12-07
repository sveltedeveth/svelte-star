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
export type IoLogoFlickrProps = typeof __propDef.props;
export type IoLogoFlickrEvents = typeof __propDef.events;
export type IoLogoFlickrSlots = typeof __propDef.slots;
export default class IoLogoFlickr extends SvelteComponentTyped<IoLogoFlickrProps, IoLogoFlickrEvents, IoLogoFlickrSlots> {
}
export {};
