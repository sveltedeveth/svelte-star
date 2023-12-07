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
export type TiSocialTwitterProps = typeof __propDef.props;
export type TiSocialTwitterEvents = typeof __propDef.events;
export type TiSocialTwitterSlots = typeof __propDef.slots;
export default class TiSocialTwitter extends SvelteComponentTyped<TiSocialTwitterProps, TiSocialTwitterEvents, TiSocialTwitterSlots> {
}
export {};
