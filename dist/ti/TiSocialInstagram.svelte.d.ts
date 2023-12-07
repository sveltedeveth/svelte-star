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
export type TiSocialInstagramProps = typeof __propDef.props;
export type TiSocialInstagramEvents = typeof __propDef.events;
export type TiSocialInstagramSlots = typeof __propDef.slots;
export default class TiSocialInstagram extends SvelteComponentTyped<TiSocialInstagramProps, TiSocialInstagramEvents, TiSocialInstagramSlots> {
}
export {};
