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
export type TiSocialFlickrProps = typeof __propDef.props;
export type TiSocialFlickrEvents = typeof __propDef.events;
export type TiSocialFlickrSlots = typeof __propDef.slots;
export default class TiSocialFlickr extends SvelteComponentTyped<TiSocialFlickrProps, TiSocialFlickrEvents, TiSocialFlickrSlots> {
}
export {};
