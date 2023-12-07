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
export type TiSocialLinkedinProps = typeof __propDef.props;
export type TiSocialLinkedinEvents = typeof __propDef.events;
export type TiSocialLinkedinSlots = typeof __propDef.slots;
export default class TiSocialLinkedin extends SvelteComponentTyped<TiSocialLinkedinProps, TiSocialLinkedinEvents, TiSocialLinkedinSlots> {
}
export {};
